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
  gameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33a18kCGfBByrse83lImaPL", "gameScene");
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
    cc.Class({
      extends: cc.Component,
      properties: {
        lbVersion: cc.Label
      },
      onLoad: function onLoad() {},
      buttonClick: function buttonClick(event, customEventData) {
        customEventData;
      }
    });
    cc._RF.pop();
  }, {} ],
  hotUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cffbVjTgJHxIFjo6rI+PGz", "hotUpdate");
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
  }, {} ]
}, {}, [ "hallScene", "gameScene", "hotUpdate" ]);