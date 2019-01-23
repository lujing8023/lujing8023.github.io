require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  HotUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9de32ZVlS1GqrvpYnNZT3QL", "HotUpdate");
    "use strict";
    var am, failCount = 0, updating = false, canRetry = false, lz = {}, checkListener, updateListener;
    var ERRCODE = {
      ERROR_NO_LOCAL_MANIFEST: 1,
      ERROR_DOWNLOAD_MANIFEST: 2,
      ERROR_PARSE_MANIFEST: 3,
      ERROR_DECOMPRESS: 4
    };
    function init() {
      am = null;
      failCount = 0;
      updating = false;
      canRetry = false;
      checkListener = null;
      updateListener = null;
    }
    function fmtBytes(n) {
      return Math.round(n / 1e4) / 100 + "MB";
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        manifestUrl: cc.RawAsset,
        updatePanel: cc.Node,
        updateInfo: cc.Label,
        updateBar: cc.ProgressBar,
        btnOK: cc.Node
      },
      onLoad: function onLoad() {
        init();
        this.updatePanel.active = false;
        if (!cc.sys.isNative) return;
        var storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "nn";
        var versionCompareHandle = function versionCompareHandle(versionA, versionB) {
          cc.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) continue;
            return a - b;
          }
          return vB.length > vA.length ? -1 : 0;
        };
        am = new jsb.AssetsManager(this.manifestUrl, storagePath, versionCompareHandle);
        cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS || am.retain();
        cc.sys.os === cc.sys.OS_ANDROID && am.setMaxConcurrentTask(4);
        this.checkUpdate();
      },
      onDestroy: function onDestroy() {
        if (updateListener) {
          cc.eventManager.removeListener(updateListener);
          updateListener = null;
        }
        am && !cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS && am.release();
      },
      checkCb: function checkCb(event) {
        lz.needUpdate = true;
        cc.log("Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_NO_LOCAL_MANIFEST;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_DOWNLOAD_MANIFEST;

         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_PARSE_MANIFEST;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.updateInfo.string = "已更新到最新版本";
          lz.needUpdate = false;
          this.scheduleOnce(lz.EventCenter.sendMessage("ALREADY_UP_TO_DATE"), 0);
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          this.updateInfo.string = "";
          this.updatePanel.active = true;
          this.updateBar.progress = .01;
          this.scheduleOnce(function() {
            this.hotUpdate();
          }.bind(this), 1);
          break;

         default:
          return;
        }
        cc.eventManager.removeListener(checkListener);
        checkListener = null;
        updating = false;
      },
      updateCb: function updateCb(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_NO_LOCAL_MANIFEST;
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          this.updateBar.progress = event.getPercentByFile() + .01;
          this.updateInfo.string = fmtBytes(event.getDownloadedBytes()) + " / " + fmtBytes(event.getTotalBytes());
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_DOWNLOAD_MANIFEST;
          failed = true;
          break;

         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_PARSE_MANIFEST;
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.updateInfo.string = "已更新到最新版本";
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          this.updateInfo.string = "更新完成。 " + event.getMessage();
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          this.updateInfo.string = "更新失败, 正在重试。 " + event.getMessage();
          updating = false;
          canRetry = true;
          this.retry();
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          this.updateInfo.string = "资源更新错误: " + event.getAssetId() + ", " + event.getMessage();
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          this.updateInfo.string = "更新失败 : " + ERRCODE.ERROR_DECOMPRESS;
        }
        if (failed) {
          cc.eventManager.removeListener(updateListener);
          updateListener = null;
          updating = false;
        }
        if (needRestart) {
          cc.eventManager.removeListener(updateListener);
          updateListener = null;
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = am.getLocalManifest().getSearchPaths();
          console.log(JSON.stringify(newPaths));
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
          cc.audioEngine.stopAll();
          cc.game.restart();
        }
      },
      retry: function retry() {
        if (!updating && canRetry) {
          failCount++;
          this.updateInfo.string = "正在进行第" + failCount + "次重试...";
          if (failCount > 3) {
            this.updateInfo.string = "重试失败!";
            return;
          }
          canRetry = false;
          am.downloadFailedAssets();
        }
      },
      checkUpdate: function checkUpdate() {
        if (updating) {
          this.updateInfo.string = "Checking or updating ...";
          return;
        }
        am.getState() === jsb.AssetsManager.State.UNINITED && am.loadLocalManifest(this.manifestUrl);
        if (!am.getLocalManifest() || !am.getLocalManifest().isLoaded()) {
          this.updateInfo.string = "Failed to load local manifest ...";
          return;
        }
        checkListener = new jsb.EventListenerAssetsManager(am, this.checkCb.bind(this));
        cc.eventManager.addListener(checkListener, 1);
        am.checkUpdate();
        updating = true;
      },
      hotUpdate: function hotUpdate() {
        if (am && !updating) {
          this.btnOK.active = false;
          updateListener = new jsb.EventListenerAssetsManager(am, this.updateCb.bind(this));
          cc.eventManager.addListener(updateListener, 1);
          am.getState() === jsb.AssetsManager.State.UNINITED && am.loadLocalManifest(this.manifestUrl);
          failCount = 0;
          am.update();
          updating = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  game1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33a18kCGfBByrse83lImaPL", "game1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  hallScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "hallScene");
    "use strict";
    var subGameMgr = require("subGameMgr");
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!",
        downloadBtn: {
          default: null,
          type: cc.Node
        },
        downloadLabel: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        var _this = this;
        this.label.string = this.text;
        var name = "subgame";
        subGameMgr.isSubgameDownLoad(name) ? subGameMgr.needUpdateSubgame(name, function(success) {
          _this.downloadLabel.string = success ? "子游戏需要更新" : "子游戏不需要更新";
        }, function() {
          cc.log("出错了");
        }) : this.downloadLabel.string = "子游戏未下载";
        this.downloadBtn.on("click", function() {
          subGameMgr.downloadSubgame(name, function(progress) {
            isNaN(progress) && (progress = 0);
            _this.downloadLabel.string = "资源下载中   " + parseInt(100 * progress) + "%";
          }, function(success) {
            success ? subGameMgr.enterSubgame("subgame") : cc.log("下载失败");
          });
        }, this);
      },
      buttonClick: function buttonClick(event, customEventData) {
        customEventData;
      }
    });
    cc._RF.pop();
  }, {
    subGameMgr: "subGameMgr"
  } ],
  main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7917XB9bNE5Ye+10P4G71G", "main");
    "use strict";
    (function() {
      if (window.jsb) {
        var subgameSearchPath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "git/hallAndGame/";
        if (!cc.HallAndSubGameGlobal.subgameGlobal) {
          cc.HallAndSubGameGlobal.subgameGlobal = {};
          require(subgameSearchPath + "src/settings.js");
          var settings = window._CCSettings;
          window._CCSettings = void 0;
          if (!settings.debug) {
            var uuids = settings.uuids;
            var rawAssets = settings.rawAssets;
            var assetTypes = settings.assetTypes;
            var realRawAssets = settings.rawAssets = {};
            for (var mount in rawAssets) {
              var entries = rawAssets[mount];
              var realEntries = realRawAssets[mount] = {};
              for (var id in entries) {
                var entry = entries[id];
                var type = entry[1];
                "number" === typeof type && (entry[1] = assetTypes[type]);
                realEntries[uuids[id] || id] = entry;
              }
            }
            var scenes = settings.scenes;
            for (var i = 0; i < scenes.length; ++i) {
              var scene = scenes[i];
              "number" === typeof scene.uuid && (scene.uuid = uuids[scene.uuid]);
            }
            var packedAssets = settings.packedAssets;
            for (var packId in packedAssets) {
              var packedIds = packedAssets[packId];
              for (var j = 0; j < packedIds.length; ++j) "number" === typeof packedIds[j] && (packedIds[j] = uuids[packedIds[j]]);
            }
          }
          var projectDir = "src/project.js";
          settings.debug && (projectDir = "src/project.dev.js");
          require(subgameSearchPath + projectDir);
          var currentSearchPaths = jsb.fileUtils.getSearchPaths();
          if (currentSearchPaths && -1 === currentSearchPaths.indexOf(subgameSearchPath)) {
            jsb.fileUtils.addSearchPath(subgameSearchPath, true);
            console.log("subgame main.js 之前未添加，添加下subgameSearchPath" + currentSearchPaths);
          }
          cc.AssetLibrary.init({
            libraryPath: "res/import",
            rawAssetsBase: "res/raw-",
            rawAssets: settings.rawAssets,
            packedAssets: settings.packedAssets,
            md5AssetsMap: settings.md5AssetsMap
          });
          cc.HallAndSubGameGlobal.subgameGlobal.launchScene = settings.launchScene;
          for (var i = 0; i < settings.scenes.length; ++i) cc.game._sceneInfos.push(settings.scenes[i]);
        }
        var launchScene = cc.HallAndSubGameGlobal.subgameGlobal.launchScene;
        cc.director.loadScene(launchScene, null, function() {
          console.log("subgame main.js 成功加载初始场景" + launchScene);
        });
      }
    })();
    cc._RF.pop();
  }, {} ],
  subGameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "390f4fMWH9JR6x/vVaNTN/c", "subGameMgr");
    "use strict";
    var subgameManager = module.exports;
    subgameManager._getfiles = function(name, type, downloadCallback, finishCallback) {
      this._storagePath[name] = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "ALLGame/" + name;
      this._downloadCallback = downloadCallback;
      this._finishCallback = finishCallback;
      this._fileName = name;
      var UIRLFILE = "http://192.168.200.117:8000/" + name + "/remote-assets";
      var filees = this._storagePath[name] + "/project.manifest";
      var customManifestStr = JSON.stringify({
        packageUrl: UIRLFILE,
        remoteManifestUrl: UIRLFILE + "/project.manifest",
        remoteVersionUrl: UIRLFILE + "/version.manifest",
        version: "0.0.1",
        assets: {},
        searchPaths: []
      });
      var versionCompareHandle = function versionCompareHandle(versionA, versionB) {
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      this._am = new jsb.AssetsManager("", this._storagePath[name], versionCompareHandle);
      cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS || this._am.retain();
      this._am.setVerifyCallback(function(path, asset) {
        var compressed = asset.compressed;
        return compressed, true;
      });
      cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
      this._updateListener = 1 === type ? new jsb.EventListenerAssetsManager(this._am, this._updateCb.bind(this)) : 2 == type ? new jsb.EventListenerAssetsManager(this._am, this._checkCb.bind(this)) : new jsb.EventListenerAssetsManager(this._am, this._needUpdate.bind(this));
      cc.eventManager.addListener(this._updateListener, 1);
      if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
        var manifest = new jsb.Manifest(customManifestStr, this._storagePath[name]);
        this._am.loadLocalManifest(manifest, this._storagePath[name]);
      }
      if (1 === type) {
        this._am.update();
        this._failCount = 0;
      } else this._am.checkUpdate();
      this._updating = true;
      cc.log("更新文件:" + filees);
    };
    subgameManager._updateCb = function(event) {
      var failed = false;
      var self = this;
      switch (event.getEventCode()) {
       case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
        cc.log("updateCb本地没有配置文件");
        failed = true;
        break;

       case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
        cc.log("updateCb下载配置文件错误");
        failed = true;
        break;

       case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
        cc.log("updateCb解析文件错误");
        failed = true;
        break;

       case jsb.EventAssetsManager.NEW_VERSION_FOUND:
        cc.log("updateCb发现新的更新");
        break;

       case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
        cc.log("updateCb已经是最新的");
        failed = true;
        break;

       case jsb.EventAssetsManager.UPDATE_PROGRESSION:
        self._downloadCallback && self._downloadCallback(event.getPercentByFile());
        break;

       case jsb.EventAssetsManager.ASSET_UPDATED:
        break;

       case jsb.EventAssetsManager.ERROR_UPDATING:
        cc.log("updateCb更新错误");
        break;

       case jsb.EventAssetsManager.UPDATE_FINISHED:
        self._finishCallback && self._finishCallback(true);
        break;

       case jsb.EventAssetsManager.UPDATE_FAILED:
        self._failCount++;
        if (self._failCount <= 3) {
          self._am.downloadFailedAssets();
          cc.log("updateCb更新失败" + this._failCount + " 次");
        } else {
          cc.log("updateCb失败次数过多");
          self._failCount = 0;
          failed = true;
          self._updating = false;
        }
        break;

       case jsb.EventAssetsManager.ERROR_DECOMPRESS:
        cc.log("updateCb解压失败");
      }
      if (failed) {
        cc.eventManager.removeListener(self._updateListener);
        self._updateListener = null;
        self._updating = false;
        self._finishCallback && self._finishCallback(false);
      }
    };
    subgameManager._checkCb = function(event) {
      var failed = false;
      var self = this;
      switch (event.getEventCode()) {
       case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
        cc.log("checkCb本地没有配置文件");
        break;

       case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
        cc.log("checkCb下载配置文件错误");
        failed = true;
        break;

       case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
        cc.log("checkCb解析文件错误");
        failed = true;
        break;

       case jsb.EventAssetsManager.NEW_VERSION_FOUND:
        self._getfiles(self._fileName, 1, self._downloadCallback, self._finishCallback);
        break;

       case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
        cc.log("checkCb已经是最新的");
        self._finishCallback && self._finishCallback(true);
        break;

       case jsb.EventAssetsManager.UPDATE_PROGRESSION:
       case jsb.EventAssetsManager.ASSET_UPDATED:
        break;

       case jsb.EventAssetsManager.ERROR_UPDATING:
        cc.log("checkCb更新错误");
        failed = true;
        break;

       case jsb.EventAssetsManager.UPDATE_FINISHED:
        cc.log("checkCb更新完成");
        break;

       case jsb.EventAssetsManager.UPDATE_FAILED:
        cc.log("checkCb更新失败");
        failed = true;
        break;

       case jsb.EventAssetsManager.ERROR_DECOMPRESS:
        cc.log("checkCb解压失败");
      }
      this._updating = false;
      failed && self._finishCallback && self._finishCallback(false);
    };
    subgameManager._needUpdate = function(event) {
      var self = this;
      switch (event.getEventCode()) {
       case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
        cc.log("子游戏已经是最新的，不需要更新");
        self._finishCallback && self._finishCallback(false);
        break;

       case jsb.EventAssetsManager.NEW_VERSION_FOUND:
        cc.log("子游戏需要更新");
        self._finishCallback && self._finishCallback(true);
        break;

       case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
       case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
       case jsb.EventAssetsManager.ERROR_UPDATING:
       case jsb.EventAssetsManager.UPDATE_FAILED:
        self._downloadCallback();
      }
    };
    subgameManager.downloadSubgame = function(name, progress, finish) {
      this._getfiles(name, 2, progress, finish);
    };
    subgameManager.enterSubgame = function(name) {
      if (!this._storagePath[name]) {
        this.downloadSubgame(name);
        return;
      }
      require(this._storagePath[name] + "/src/main.js");
    };
    subgameManager.isSubgameDownLoad = function(name) {
      var file = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "ALLGame/" + name + "/project.manifest";
      return !!jsb.fileUtils.isFileExist(file);
    };
    subgameManager.needUpdateSubgame = function(name, isUpdateCallback, failCallback) {
      this._getfiles(name, 3, failCallback, isUpdateCallback);
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "HotUpdate", "hallScene", "subGameMgr", "game1", "main" ]);