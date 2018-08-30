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
  ActionHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19af63MwYlE0K9nRqWqlI3S", "ActionHelper");
    "use strict";
    module.exports.getBigToSmall = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .4;
      var to = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.1;
      var from = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      var scale1 = cc.scaleTo(.5 * time, to, to);
      var scale2 = cc.scaleTo(.5 * time, from, from);
      return cc.sequence(scale1, scale2);
    };
    module.exports.getScaleTo = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .1;
      var to = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return cc.scaleTo(time, to);
    };
    module.exports.getMJCardMovePool = function() {
      var cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      var waitPosition = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var endPosition = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var moveTime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .1;
      var waitTime = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .35;
      var scaleToStart = cc.scaleTo(moveTime, 1.5);
      var moveToStart = cc.moveTo(moveTime, waitPosition);
      var spawnStart = cc.spawn(scaleToStart, moveToStart);
      var delay = cc.delayTime(waitTime);
      var scaleToEnd = cc.scaleTo(moveTime, .5);
      var moveToEnd = cc.moveTo(moveTime, endPosition);
      var spawnEnd = cc.spawn(scaleToEnd, moveToEnd);
      var callFunc = cc.callFunc(function() {
        cb && cb();
      });
      var seq = cc.sequence(spawnStart, delay, spawnEnd, callFunc);
      return seq;
    };
    module.exports.getMJCardMovePool2 = function() {
      var cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      var waitPosition = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var endPosition = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var moveTime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .1;
      var waitTime = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .35;
      var scaleToStart = cc.scaleTo(moveTime, 1.35);
      var delay = cc.delayTime(waitTime);
      var callFunc = cc.callFunc(function() {
        cb && cb();
      });
      var seq = cc.sequence(scaleToStart, delay, callFunc);
      return seq;
    };
    module.exports.getDirection = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5;
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var fadeIn = cc.fadeIn(time);
      var fadeOut = cc.fadeOut(time);
      var callFunc = cc.callFunc(function() {
        cb && cb();
      });
      var seq = cc.sequence(fadeOut, fadeIn, callFunc);
      return seq;
    };
    module.exports.getFadeInToFadeOut = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5;
      var waitTime = arguments[1];
      var cb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var fadeIn = cc.fadeIn(time);
      var fadeOut = cc.fadeOut(time);
      var moveBy = cc.moveBy(time, cc.v2(0, 40));
      var spawn = cc.spawn(fadeIn, moveBy);
      var delay = cc.delayTime(waitTime);
      var callFunc = cc.callFunc(function() {
        cb && cb();
      });
      var seq = cc.sequence(spawn, delay, fadeOut, callFunc);
      return seq;
    };
    module.exports.getDirectionUpdateAction = function(dt) {
      return dt;
    };
    module.exports.getArrowAction = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5;
      var Altitude = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
      var jump1 = cc.jumpBy(time, cc.p(0, Altitude), 1, 1);
      var jump2 = cc.jumpBy(time, cc.p(0, -Altitude), 1, 1);
      var seq = cc.sequence(jump1, jump2);
      var repeat = cc.repeatForever(seq);
      return repeat;
    };
    module.exports.getResultDelaytime = function() {
      var delay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5;
      return delay;
    };
    module.exports.getMJActionStateShow = function() {
      return cc.sequence(module.exports.getBigToSmall(.3, 1.5, 1).easing(cc.easeIn(1)), cc.delayTime(.7));
    };
    module.exports.getDlgShow = function() {
      var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .15;
      var to = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.2;
      var from = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return module.exports.getBigToSmall(time, to, from).easing(cc.easeIn(1));
    };
    module.exports.getDlgHide = function() {
      return module.exports.getBigToSmall(.1, 1.1, .75).easing(cc.easeOut(1));
    };
    module.exports.getFlip = function() {
      var cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      var scaleX = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      var scaleY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : scaleX;
      var time = .2;
      scaleX = scaleX || 1;
      var s1 = cc.spawn(cc.scaleTo(time, 0, scaleX), cc.skewTo(time, 0, 20));
      var s2 = cc.skewTo(.016, 0, -20);
      var cf = cc.callFunc(function() {
        cb && cb();
      });
      var s3 = cc.spawn(cc.scaleTo(time, scaleX, scaleX), cc.skewTo(time, 0, 0));
      return cc.sequence(s1, s2, cf, s3);
    };
    cc._RF.pop();
  }, {} ],
  Alert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c12553sxCxG/on0Bz7rkX0f", "Alert");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _alert: null,
        _btnOK: null,
        _btnCancel: null,
        _title: null,
        _content: null,
        _onok: null
      },
      onLoad: function onLoad() {
        return;
      },
      onBtnClicked: function onBtnClicked(event) {
        "btn_ok" == event.target.name && this._onok && this._onok();
        this._alert.active = false;
        this._onok = null;
      },
      show: function show(title, content, onok, needcancel) {
        this._alert.active = true;
        this._onok = onok;
        this._title.string = title;
        this._content.string = content;
        if (needcancel) {
          this._btnCancel.active = true;
          this._btnOK.x = -150;
          this._btnCancel.x = 150;
        } else {
          this._btnCancel.active = false;
          this._btnOK.x = 0;
        }
      },
      onDestory: function onDestory() {
        cc.vv && (cc.vv.alert = null);
      }
    });
    cc._RF.pop();
  }, {} ],
  AnysdkMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f58cea6lrpDZJSNs2BGBqxN", "AnysdkMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _isCapturing: false
      },
      onLoad: function onLoad() {},
      init: function init() {
        this.ANDROID_API = "com/babykylin/NativeAPI";
        this.IOS_API = "AppController";
      },
      getBatteryPercent: function getBatteryPercent() {
        if (cc.sys.isNative) {
          if (cc.sys.os == cc.sys.OS_ANDROID) return jsb.reflection.callStaticMethod(this.ANDROID_API, "getBatteryPercent", "()F");
          if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod(this.IOS_API, "getBatteryPercent");
        }
        return .9;
      },
      login: function login() {
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(this.ANDROID_API, "Login", "()V") : cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod(this.IOS_API, "login") : console.log("platform:" + cc.sys.os + " dosn't implement share.");
      },
      share: function share(title, desc) {
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(this.ANDROID_API, "Share", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", cc.vv.SI.appweb, title, desc) : cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod(this.IOS_API, "share:shareTitle:shareDesc:", cc.vv.SI.appweb, title, desc) : console.log("platform:" + cc.sys.os + " dosn't implement share.");
      },
      shareResult: function shareResult() {
        if (this._isCapturing) return;
        this._isCapturing = true;
        var size = cc.director.getWinSize();
        var currentDate = new Date();
        var fileName = "result_share.jpg";
        var fullPath = jsb.fileUtils.getWritablePath() + fileName;
        jsb.fileUtils.isFileExist(fullPath) && jsb.fileUtils.removeFile(fullPath);
        var texture = new cc.RenderTexture(Math.floor(size.width), Math.floor(size.height));
        texture.setPosition(cc.p(size.width / 2, size.height / 2));
        texture.begin();
        cc.director.getRunningScene().visit();
        texture.end();
        texture.saveToFile(fileName, cc.IMAGE_FORMAT_JPG);
        var self = this;
        var tryTimes = 0;
        var fn = function fn() {
          if (jsb.fileUtils.isFileExist(fullPath)) {
            var height = 100;
            var scale = height / size.height;
            var width = Math.floor(size.width * scale);
            cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(self.ANDROID_API, "ShareIMG", "(Ljava/lang/String;II)V", fullPath, width, height) : cc.sys.os == cc.sys.OS_IOS ? jsb.reflection.callStaticMethod(self.IOS_API, "shareIMG:width:height:", fullPath, width, height) : console.log("platform:" + cc.sys.os + " dosn't implement share.");
            self._isCapturing = false;
          } else {
            tryTimes++;
            if (tryTimes > 10) {
              console.log("time out...");
              return;
            }
            setTimeout(fn, 50);
          }
        };
        setTimeout(fn, 50);
      },
      onLoginResp: function onLoginResp(code) {
        var fn = function fn(ret) {
          if (0 == ret.errcode) {
            cc.sys.localStorage.setItem("wx_account", ret.account);
            cc.sys.localStorage.setItem("wx_sign", ret.sign);
          }
          cc.vv.userMgr.onAuth(ret);
        };
        cc.vv.http.sendRequest("/wechat_auth", {
          code: code,
          os: cc.sys.os
        }, fn);
      }
    });
    cc._RF.pop();
  }, {} ],
  AppStart: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b688bZYoFdJxKE2TtdmN5SB", "AppStart");
    "use strict";
    function urlParse() {
      var params = {};
      if (null == window.location) return params;
      var name, value;
      var str = window.location.href;
      var num = str.indexOf("?");
      str = str.substr(num + 1);
      var arr = str.split("&");
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          params[name] = value;
        }
      }
      return params;
    }
    function initMgr() {
      cc.vv = {};
      var UserMgr = require("UserMgr");
      cc.vv.userMgr = new UserMgr();
      var ReplayMgr = require("ReplayMgr");
      cc.vv.replayMgr = new ReplayMgr();
      cc.vv.http = require("HTTP");
      cc.vv.global = require("Global");
      cc.vv.net = SocketHelper;
      var GameNetMgr = require("GameNetMgr");
      cc.vv.gameNetMgr = new GameNetMgr();
      cc.vv.gameNetMgr.initHandlers();
      var AnysdkMgr = require("AnysdkMgr");
      cc.vv.anysdkMgr = new AnysdkMgr();
      cc.vv.anysdkMgr.init();
      var VoiceMgr = require("VoiceMgr");
      cc.vv.voiceMgr = new VoiceMgr();
      cc.vv.voiceMgr.init();
      var AudioMgr = require("AudioMgr");
      cc.vv.audioMgr = new AudioMgr();
      cc.vv.audioMgr.init();
      var Utils = require("Utils");
      cc.vv.utils = new Utils();
      cc.vv.ComNodePool = require("ComNodePool");
      NPHelper.initHelper();
      cc.args = urlParse();
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        loadingProgess: cc.Label
      },
      onLoad: function onLoad() {
        window.DataHelper = require("DataHelper").initHelper();
        SocketHelper.initNet();
        UserHandler.initNetListeners();
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        initMgr();
        console.log("【启动游戏】");
        this._mainScene = "loading";
        cc.director.loadScene("loading");
      },
      onBtnDownloadClicked: function onBtnDownloadClicked() {
        cc.sys.openURL(cc.vv.SI.appweb);
      },
      showSplash: function showSplash(callback) {
        var self = this;
        var SHOW_TIME = 3e3;
        var FADE_TIME = 500;
        this._splash = cc.find("Canvas/splash");
        true;
        this._splash.active = true;
        if (null == this._splash.getComponent(cc.Sprite).spriteFrame) {
          callback();
          return;
        }
        var t = Date.now();
        var fn = function fn() {
          var dt = Date.now() - t;
          if (dt < SHOW_TIME) setTimeout(fn, 33); else {
            var op = 255 * (1 - (dt - SHOW_TIME) / FADE_TIME);
            if (op < 0) {
              self._splash.opacity = 0;
              callback();
            } else {
              self._splash.opacity = op;
              setTimeout(fn, 33);
            }
          }
        };
        setTimeout(fn, 33);
      },
      getServerInfo: function getServerInfo() {
        var self = this;
        var onGetVersion = function onGetVersion(ret) {
          if (null == ret.version) console.log("error."); else {
            cc.vv.SI = ret;
            ret.version != cc.VERSION ? cc.find("Canvas/alert").active = true : cc.director.loadScene(self._mainScene);
          }
        };
        var xhr = null;
        var complete = false;
        var fnRequest = function fnRequest() {
          self.loadingProgess.string = "正在连接服务器";
          xhr = cc.vv.http.sendRequest("/get_serverinfo", null, function(ret) {
            xhr = null;
            complete = true;
            onGetVersion(ret);
          });
          setTimeout(fn, 5e3);
        };
        var fn = function fn() {
          if (!complete) if (xhr) {
            xhr.abort();
            self.loadingProgess.string = "连接失败，即将重试";
            setTimeout(function() {
              fnRequest();
            }, 5e3);
          } else fnRequest();
        };
        fn();
      },
      log: function log(content) {
        this.label.string += content + "\n";
      }
    });
    cc._RF.pop();
  }, {
    AnysdkMgr: "AnysdkMgr",
    AudioMgr: "AudioMgr",
    ComNodePool: "ComNodePool",
    DataHelper: "DataHelper",
    GameNetMgr: "GameNetMgr",
    Global: "Global",
    HTTP: "HTTP",
    ReplayMgr: "ReplayMgr",
    UserMgr: "UserMgr",
    Utils: "Utils",
    VoiceMgr: "VoiceMgr"
  } ],
  AudioHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38ef4Xj5o9EeL0a11qAJy2M", "AudioHelper");
    "use strict";
    module.exports.audioVolume = .5;
    module.exports.resumeAll = function() {
      cc.log("Audio resumeAll ");
      cc.audioEngine.resumeAll();
    };
    module.exports.pauseAll = function() {
      cc.log("Audio pauseAll ");
      cc.audioEngine.pauseAll();
    };
    module.exports.stopMusic = function() {
      cc.audioEngine.stopMusic();
    };
    module.exports.pauseMusic = function() {
      cc.audioEngine.pauseMusic();
    };
    module.exports.resumeMusic = function() {
      if (!gLocalData.sysInfo.shouldMusic) return;
      cc.audioEngine.resumeMusic();
    };
    module.exports.playButton = function() {};
    module.exports._playEffect = function(path) {
      if (!gLocalData.sysInfo.shouldEffect) return;
      if ($G.gCData.gIsVoiceRecordOrPlay) return;
      var audioID = cc.audioEngine.play(cc.url.raw(path), false);
      cc.audioEngine.setVolume(audioID, module.exports.audioVolume);
      return audioID;
    };
    module.exports._stopEffect = function(audioID) {
      cc.audioEngine.stopEffect(audioID);
    };
    module.exports._playMusic = function(path) {
      var loop = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!gLocalData.sysInfo.shouldMusic) return;
      var audioID = cc.audioEngine.playMusic(cc.url.raw(path), loop);
      cc.audioEngine.setVolume(audioID, module.exports.audioVolume);
      gLocalData.sysInfo.shouldMusic || module.exports.pauseMusic();
      return audioID;
    };
    module.exports._playMusicWithoutLoop = function(path, cb) {
      var audioId = module.exports._playMusic(path, false);
      audioId && cb && cc.audioEngine.setFinishCallback(audioId, cb);
    };
    cc._RF.pop();
  }, {} ],
  AudioMgr_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4a92kmyBJI74JYW3jcxF9k", "AudioMgr_NN");
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var AudioMgr_NN = function AudioMgr_NN() {
      _classCallCheck(this, AudioMgr_NN);
      this.DZPATH = "resources/games/nn/audios";
      this.PATH = "resources/hall/audios";
      this.NowMusic = "";
      this.playMusic = function() {
        var _this = this;
        var SceneStr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "loadLoginScene";
        var bgms = [ "bg" ];
        var randomBgmIndx = _.random(0, _.size(bgms) - 1);
        var file = gGameScene ? this.PATH + "/" + bgms[randomBgmIndx] + ".mp3" : this.PATH + "/bg2.mp3";
        if ("updateMusic" == SceneStr) ; else {
          if (this.NowMusic == file && this.NowMusic == this.PATH + "/bg2.mp3") return;
          this.NowMusic = file;
        }
        var loop = true;
        if (this.NowMusic == this.PATH + "/bg2.mp3") AudioMgr_Hall.playMusic(SceneStr); else {
          AudioMgr_Hall.NowMusic = this.NowMusic;
          AudioHelper._playMusicWithoutLoop(this.NowMusic, function() {
            _this.playMusic(SceneStr);
          });
        }
      };
      this.stopMusic = function() {
        AudioHelper.stopMusic();
      };
      this.playSpecial = function(name) {
        var file = this.DZPATH + "/Common/" + name + ".mp3";
        AudioHelper._playEffect(file);
      };
      this.playPokerType = function(index) {
        var isBoy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._playBySex("PokerType", "ox", index, isBoy);
      };
      this.playChat = function(index) {
        var isBoy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._playBySex("Chat", "Chat", index, isBoy);
      };
      this.playScore = function(index) {
        var isBoy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (null === index) return;
        this._playBySex("CallScore", "CallScore", index, isBoy);
      };
      this.playRob = function(rob) {
        var isBoy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var file = this.DZPATH + "/Rob/" + (isBoy ? "Boy" : "Girl") + "/" + (rob ? "rob" : "unrob") + ".mp3";
        AudioHelper._playEffect(file);
      };
      this._playBySex = function(folder, filePre, index) {
        var isBoy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        var file = this.DZPATH + "/" + folder + "/" + (isBoy ? "Boy" : "Girl") + "/" + filePre + "_" + index + ".mp3";
        AudioHelper._playEffect(file);
      };
      this.playButton = function() {
        this.playSpecial("audio_ui_click");
      };
    };
    module.exports = new AudioMgr_NN();
    cc._RF.pop();
  }, {} ],
  AudioMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55caepcpvFK5r0Ax5f8jss4", "AudioMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bgmVolume: 1,
        sfxVolume: 1,
        bgmAudioID: -1
      },
      init: function init() {
        var t = cc.sys.localStorage.getItem("bgmVolume");
        null != t && (this.bgmVolume = parseFloat(t));
        var t = cc.sys.localStorage.getItem("sfxVolume");
        null != t && (this.sfxVolume = parseFloat(t));
        cc.game.on(cc.game.EVENT_HIDE, function() {
          console.log("cc.audioEngine.pauseAll");
          cc.audioEngine.pauseAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log("cc.audioEngine.resumeAll");
          cc.audioEngine.resumeAll();
        });
      },
      getUrl: function getUrl(url) {
        return cc.url.raw("resources/sounds/" + url);
      },
      playBGM: function playBGM(url) {
        var audioUrl = this.getUrl(url);
        console.log(audioUrl);
        this.bgmAudioID >= 0 && cc.audioEngine.stop(this.bgmAudioID);
        this.bgmAudioID = cc.audioEngine.play(audioUrl, true, this.bgmVolume);
      },
      playSFX: function playSFX(url) {
        var audioUrl = this.getUrl(url);
        if (this.sfxVolume > 0) var audioId = cc.audioEngine.play(audioUrl, false, this.sfxVolume);
      },
      setSFXVolume: function setSFXVolume(v) {
        if (this.sfxVolume != v) {
          cc.sys.localStorage.setItem("sfxVolume", v);
          this.sfxVolume = v;
        }
      },
      setBGMVolume: function setBGMVolume(v, force) {
        this.bgmAudioID >= 0 && (v > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID));
        if (this.bgmVolume != v || force) {
          cc.sys.localStorage.setItem("bgmVolume", v);
          this.bgmVolume = v;
          cc.audioEngine.setVolume(this.bgmAudioID, v);
        }
      },
      pauseAll: function pauseAll() {
        cc.audioEngine.pauseAll();
      },
      resumeAll: function resumeAll() {
        cc.audioEngine.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  CCLoaderHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30fd522R0JAhYVUnFjntj+B", "CCLoaderHelper");
    "use strict";
    module.exports.getRes = function(path, type, cb) {
      var res = cc.loader.getRes(path);
      if (null == res) {
        cc.loader.loadRes(path, type, cb);
        return;
      }
      cb && cb(null, res);
    };
    cc._RF.pop();
  }, {} ],
  Chat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58f27rxustNsYlRX3fryN8X", "Chat");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _chatRoot: null,
        _tabQuick: null,
        _tabEmoji: null,
        _iptChat: null,
        _quickChatInfo: null,
        _btnChat: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        cc.vv.chat = this;
        this._btnChat = this.node.getChildByName("btn_chat");
        this._btnChat.active = false == cc.vv.replayMgr.isReplay();
        this._chatRoot = this.node.getChildByName("chat");
        this._chatRoot.active = false;
        this._tabQuick = this._chatRoot.getChildByName("quickchatlist");
        this._tabEmoji = this._chatRoot.getChildByName("emojis");
        this._iptChat = this._chatRoot.getChildByName("iptChat").getComponent(cc.EditBox);
        this._quickChatInfo = {};
        this._quickChatInfo["item0"] = {
          index: 0,
          content: "快点啊，都等到我花儿都谢谢了！",
          sound: "fix_msg_1.mp3"
        };
        this._quickChatInfo["item1"] = {
          index: 1,
          content: "怎么又断线了，网络怎么这么差啊！",
          sound: "fix_msg_2.mp3"
        };
        this._quickChatInfo["item2"] = {
          index: 2,
          content: "不要走，决战到天亮！",
          sound: "fix_msg_3.mp3"
        };
        this._quickChatInfo["item3"] = {
          index: 3,
          content: "你的牌打得也太好了！",
          sound: "fix_msg_4.mp3"
        };
        this._quickChatInfo["item4"] = {
          index: 4,
          content: "你是妹妹还是哥哥啊？",
          sound: "fix_msg_5.mp3"
        };
        this._quickChatInfo["item5"] = {
          index: 5,
          content: "和你合作真是太愉快了！",
          sound: "fix_msg_6.mp3"
        };
        this._quickChatInfo["item6"] = {
          index: 6,
          content: "大家好，很高兴见到各位！",
          sound: "fix_msg_7.mp3"
        };
        this._quickChatInfo["item7"] = {
          index: 7,
          content: "各位，真是不好意思，我得离开一会儿。",
          sound: "fix_msg_8.mp3"
        };
        this._quickChatInfo["item8"] = {
          index: 8,
          content: "不要吵了，专心玩游戏吧！",
          sound: "fix_msg_9.mp3"
        };
      },
      getQuickChatInfo: function getQuickChatInfo(index) {
        var key = "item" + index;
        return this._quickChatInfo[key];
      },
      onBtnChatClicked: function onBtnChatClicked() {
        this._chatRoot.active = true;
      },
      onBgClicked: function onBgClicked() {
        this._chatRoot.active = false;
      },
      onTabClicked: function onTabClicked(event) {
        if ("tabQuick" == event.target.name) {
          this._tabQuick.active = true;
          this._tabEmoji.active = false;
        } else if ("tabEmoji" == event.target.name) {
          this._tabQuick.active = false;
          this._tabEmoji.active = true;
        }
      },
      onQuickChatItemClicked: function onQuickChatItemClicked(event) {
        this._chatRoot.active = false;
        var info = this._quickChatInfo[event.target.name];
        cc.vv.net.send("quick_chat", info.index);
      },
      onEmojiItemClicked: function onEmojiItemClicked(event) {
        console.log(event.target.name);
        this._chatRoot.active = false;
        cc.vv.net.send("emoji", event.target.name);
      },
      onBtnSendChatClicked: function onBtnSendChatClicked() {
        this._chatRoot.active = false;
        if ("" == this._iptChat.string) return;
        cc.vv.net.send("chat", this._iptChat.string);
        this._iptChat.string = "";
      }
    });
    cc._RF.pop();
  }, {} ],
  CheckBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc9e5hcegFBFpbh0CwUFw8V", "CheckBox");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: cc.Node,
        sprite: cc.SpriteFrame,
        checkedSprite: cc.SpriteFrame,
        checked: false
      },
      onLoad: function onLoad() {
        this.refresh();
      },
      onClicked: function onClicked() {
        this.checked = !this.checked;
        this.refresh();
      },
      refresh: function refresh() {
        var targetSprite = this.target.getComponent(cc.Sprite);
        this.checked ? targetSprite.spriteFrame = this.checkedSprite : targetSprite.spriteFrame = this.sprite;
      }
    });
    cc._RF.pop();
  }, {} ],
  ComFuncChecker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbdcbBnjR1EE4xm6138xbbm", "ComFuncChecker");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        funcList: []
      },
      onLoad: function onLoad() {
        cc.log("@COM FuncCheck onLoad");
      },
      onDestroy: function onDestroy() {
        cc.log("@COM FuncCheck DESTROY");
        this.funcList = null;
      },
      addFunc: function addFunc(cb, checkCb) {
        if (!_.isFunction(cb) || !_.isFunction(checkCb)) {
          cc.log("不是函数");
          return;
        }
        this.funcList.push({
          cb: cb,
          checkCb: checkCb
        });
        this.execute();
      },
      execute: function execute() {
        var _this = this;
        var len = _.size(this.funcList);
        cc.log("funcs :" + len);
        _.times(len, function(i) {
          var index = len - i - 1;
          var item = _this.funcList[index];
          if (item.checkCb()) {
            item.cb();
            cc.log(_this.funcList);
            _this.funcList.splice(index, 1);
            cc.log(_this.funcList);
          }
        });
      },
      clear: function clear() {
        this.funcList = [];
      }
    });
    cc._RF.pop();
  }, {} ],
  ComNodePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8bf98fcbEFHVr4t9kbJZaU8", "ComNodePool");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nodePool: null
      },
      onLoad: function onLoad() {
        cc.log("ComPagePool");
        this._initPool();
      },
      onDestroy: function onDestroy() {
        this.clearPool();
      },
      _initPool: function _initPool() {
        null == this.nodePool && (this.nodePool = new cc.NodePool());
        return;
      },
      clearPool: function clearPool() {
        this.nodePool && this.nodePool.clear();
      },
      putNode: function putNode(node) {
        this.nodePool.put(node);
      },
      getNode: function getNode(node) {
        this._initPool();
        var item = this.nodePool.get();
        if (null === item) {
          this.nodePool.put(cc.instantiate(node));
          item = this.nodePool.get();
        }
        return item;
      }
    });
    cc._RF.pop();
  }, {} ],
  ComNotify: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13291mJK1VIt4qmJroP+rhV", "ComNotify");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _notifys: []
      },
      onLoad: function onLoad() {
        cc.log("@COMNTF onLoad");
      },
      onDestroy: function onDestroy() {
        cc.log("@COMNTF DESTROY");
        if (this._notifys.length <= 0) return;
        _.each(this._notifys, function(item) {
          NotifyHelper.remove(item[0], item[1]);
        });
        this._notifys = null;
      },
      register: function register() {
        var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._notifys.push([ name, cb ]);
        NotifyHelper.register(name, cb);
      }
    });
    cc._RF.pop();
  }, {} ],
  ComRandomBanker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29916QIN95FJbjPygSYDky0", "ComRandomBanker");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        couldShowBankerAction: false,
        count: 12,
        startTime: .05,
        interval: .075
      },
      onLoad: function onLoad() {},
      onDestroy: function onDestroy() {},
      reset: function reset() {
        this.couldShowBankerAction = false;
      },
      enableBankerAction: function enableBankerAction(enable) {
        this.couldShowBankerAction = enable;
      },
      _getBankerList: function _getBankerList() {
        var PlayerPlayingArr = [];
        var bankerIndexes = [];
        _.each(GameMsgHandler.getSeats(), function(seat, index) {
          var cid = GameMsgHandler.getCid(index);
          if (seat && seat.user) {
            var isPlaying = GameMsgHandler.isPlayerPlaying(seat.user.id);
            if (isPlaying) {
              PlayerPlayingArr.push(index);
              1 == seat.banker && bankerIndexes.push(index);
            }
          }
        });
        var len = _.size(bankerIndexes);
        if (1 == len) return null;
        if (0 == len) {
          bankerIndexes = PlayerPlayingArr;
          len = _.size(bankerIndexes);
        }
        return bankerIndexes;
      },
      getBankerList: function getBankerList() {
        return RandomListHelper.getListFromArray(GameMsgHandler.getBankerSid(), 15, this._getBankerList);
      },
      getTimeList: function getTimeList() {
        return RandomListHelper.getTimeList(15, .05, .1);
      }
    });
    cc._RF.pop();
  }, {} ],
  ComScheduler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fda291m/hML4IlqCJFbsPI", "ComScheduler");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _maxIndex: 20
      },
      onLoad: function onLoad() {
        cc.log("@@ Scheduler onLoad");
        this._items = {};
      },
      onDestroy: function onDestroy() {
        this.clearAll();
        this._items = null;
      },
      once: function once(key, cb, time) {
        var scb = this._addCb(key, cb);
        this.scheduleOnce(scb.cb, time);
      },
      clear: function clear(key) {
        var _this = this;
        if (null === this._items[key]) return;
        if (void 0 === this._items[key]) return;
        _.each(this._items[key].cbs, function(item, index) {
          _this._removeCb(key, index);
        });
        this._items[key].current = 0;
      },
      clearAll: function clearAll() {
        var _this2 = this;
        var keys = _.keys(this._items);
        _.each(keys, function(key) {
          _this2.clear(key);
        });
      },
      _addItem: function _addItem(key, max) {
        var current = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        max = max || this._maxIndex;
        var item = {
          max: max,
          current: current,
          cbs: []
        };
        _.times(this._maxIndex, function(i) {
          item.cbs[i] = null;
        });
        this._items[key] = item;
      },
      _checkItemExist: function _checkItemExist(key) {
        if (null != this._items[key]) return;
        this._addItem(key);
      },
      _addCb: function _addCb(key, cb) {
        var _this3 = this;
        this._checkItemExist(key);
        var item = this._items[key];
        item.current === item.max && (item.current = 0);
        var func = function func() {
          cb();
          _this3._removeCb(key, scb.index);
        };
        var scb = {
          index: item.current,
          cb: func
        };
        item.cbs[item.current] = scb;
        item.current++;
        return scb;
      },
      _removeCb: function _removeCb(key, index) {
        var cbs = this._items[key].cbs;
        var cbItem = cbs[index];
        if (null === cbItem) return;
        this.unschedule(cbs[index].cb);
        cbs[index] = null;
      }
    });
    cc._RF.pop();
  }, {} ],
  ComTime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "822deF0ZS9BcLatleiO/YXi", "ComTime");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.time = TimeHelper.getCTimeHM();
        this._setTime(this.time);
        this.sche = this.schedule(this.updateTime, 5, this);
      },
      updateTime: function updateTime() {
        var now = TimeHelper.getCTimeHM();
        if (now === this.time) return;
        this.time = now;
        this._setTime(this.time);
      },
      _setTime: function _setTime(info) {
        this.node.getComponent(cc.Label).string = info;
      }
    });
    cc._RF.pop();
  }, {} ],
  ComVoicePlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8353h5ReJG5YzJBjTvfk3l", "ComVoicePlayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var _this = this;
        this._voiceList = [];
        this._recordName = "";
        this._isPlaying = false;
        this._recordName = "record.amr";
        var NTF = this.addComponent("ComNotify");
        NTF.register(NOTIFY_VOICE_PLAY_START, function(msg) {
          _this.playVoiceByData(msg.data);
        });
        NTF.register(NOTIFY_VOICE_PLAY_END, function(msg) {
          _this._isPlaying = false;
          AudioHelper.resumeAll();
        });
      },
      init: function init(recordName) {
        this._recordName = recordName;
      },
      playVoiceByData: function playVoiceByData(data) {
        var aData = VoiceNative.getDataArray(data);
        VoiceNative.writeVoice(this._recordName, aData);
        this.playVoiceLocal();
      },
      playVoiceLocal: function playVoiceLocal() {
        cc.log("playfile ");
        this._isPlaying && this.stop();
        VoiceNative.play(this._recordName);
        this._isPlaying = true;
      },
      stop: function stop() {
        this._isPlaying = false;
        VoiceNative.stop();
        this.onPlayEnd();
      },
      onPlayEnd: function onPlayEnd() {
        NotifyHelper.notify(NOTIFY_VOICE_PLAY_END);
        AudioHelper.resumeAll();
      }
    });
    cc._RF.pop();
  }, {} ],
  ComVoiceRecorder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3363Qs379AVZJz92R21f/5", "ComVoiceRecorder");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this._recordName = "record.amr";
        this._maxVoiceSeconds = 8;
        this._minVoiceSeconds = 1;
        this._recordStartTime = null;
        this._isAlertShowed = false;
        this._lastTouchY = 0;
        this._minTouchCancel = 6;
        this._minTouchResume = 3;
        VoiceNative.init();
        this.init();
      },
      init: function init() {
        if (true == this.node.active) {
          this.node.on(cc.Node.EventType.TOUCH_START, this.onRecordStart.bind(this));
          this.node.on(cc.Node.EventType.TOUCH_END, this.onRecordEnd.bind(this));
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onRecordEnd.bind(this));
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMoved.bind(this));
        } else {
          this.node.off(cc.Node.EventType.TOUCH_START, this.onRecordStart.bind(this));
          this.node.off(cc.Node.EventType.TOUCH_END, this.onRecordEnd.bind(this));
          this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onRecordEnd.bind(this));
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMoved.bind(this));
        }
      },
      onRecordStart: function onRecordStart(event) {
        cc.log("GameManager micBtn event down");
        this._lastTouchY = event.touch.getLocation().y;
        NotifyHelper.notify("NOTIFY_VOICE_RECORD_START", {
          max: this._maxVoiceSeconds
        });
        this._recordStartTime = Date.now();
        VoiceNative.prepare(this._recordName);
      },
      onRecordEnd: function onRecordEnd() {
        cc.log("GameManager micBtn event up");
        if (null == this._recordStartTime) return;
        if (Date.now() - this._recordStartTime < 1e3 * this._minVoiceSeconds) {
          NotifyHelper.notify("NOTIFY_VOICE_RECORD_TOOSHORT");
          VoiceNative.cancel();
        } else null != this._recordStartTime && (this._isAlertShowed ? this._recordCancel() : this._recordSuccess());
        this._recordStartTime = null;
      },
      _recordCancel: function _recordCancel() {
        cc.log("GameManager micBtn event cancel");
        this._recordStartTime = null;
        NotifyHelper.notify(NOTIFY_VOICE_RECORD_CANCEL);
        VoiceNative.cancel();
      },
      _recordSuccess: function _recordSuccess() {
        VoiceNative.release();
        var time = Date.now() - this._recordStartTime;
        cc.log("现在时间。。。。。  " + Date.now());
        cc.log("开始时间。。。。。  " + this._recordStartTime);
        cc.log("录音时间。。。。。  " + time);
        var msgStr = VoiceNative.getVoiceData(this._recordName);
        var enc = VoiceNative.getDataString(msgStr);
        NotifyHelper.notify("NOTIFY_VOICE_RECORD_END", enc);
      },
      onMoved: function onMoved(event) {
        if (null == this._recordStartTime) return;
        var pos = event.touch.getLocation();
        var offset = pos.y - this._lastTouchY;
        this._lastTouchY = pos.y;
        if (offset > this._minTouchCancel) {
          if (this._isAlertShowed) return;
          NotifyHelper.notify(NOTIFY_VOICE_RECORD_CANCEL_ALERT);
          this._isAlertShowed = true;
        } else if (offset < -1 * this._minTouchResume) {
          if (!this._isAlertShowed) return;
          this._isAlertShowed = false;
          NotifyHelper.notify(NOTIFY_VOICE_RECORD_START, {
            max: parseInt((Date.now() - this._recordStartTime) / 1e3)
          });
        }
      },
      update: function update(dt) {
        if (null != this._recordStartTime && Date.now() > this._recordStartTime + 1e3 * this._maxVoiceSeconds) {
          NotifyHelper.notify(NOTIFY_VOICE_PLAY_END);
          this._recordSuccess();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "494a9m8EpdIUa4qrX+/vqfM", "Constants");
    "use strict";
    var constants = module.exports = {};
    var _ = require("underscore");
    constants.ClearReason = {};
    constants.ClearReason.NONE = _.constant(0);
    constants.ClearReason.RESULT = _.constant(1);
    constants.ClearReason.OWNER_DISMISS = _.constant(2);
    constants.ClearReason.VOTE_DISMISS = _.constant(3);
    constants.ClearReason.REQUEST = _.constant(4);
    constants.ClearReason.REMATCH = _.constant(5);
    constants.ClearReason.KICK_HOSTING_USER = _.constant(6);
    constants.ClearReason.KICK_NOT_ENOUGH_GOLD_USER = _.constant(7);
    constants.ClearReason.ADMIN = _.constant(8);
    constants.Poker = {};
    constants.Poker.CardSuit = {};
    constants.Poker.CardSuit.DIAMOND = _.constant(1);
    constants.Poker.CardSuit.CLUB = _.constant(2);
    constants.Poker.CardSuit.HEART = _.constant(3);
    constants.Poker.CardSuit.SPADE = _.constant(4);
    constants.Poker.CardSuit.JOKER = _.constant(5);
    constants.Poker.CardPoint = {};
    constants.Poker.CardPoint.ACE = _.constant(1);
    constants.Poker.CardPoint.KING = _.constant(13);
    constants.Poker.CardPoint.SUB_JOKER = _.constant(14);
    constants.Poker.CardPoint.MAIN_JOKER = _.constant(15);
    constants.DZ = {};
    constants.DZ.Bid = {};
    constants.DZ.Bid.NONE = _.constant(0);
    constants.DZ.Bid.ADD = _.constant(1);
    constants.DZ.Bid.ALLIN = _.constant(2);
    constants.DZ.Bid.FOLD = _.constant(3);
    constants.DZ.Bid.FOLLOW = _.constant(4);
    constants.DZ.Bid.PASS = _.constant(5);
    constants.DZ.Bid.SBLIND = _.constant(6);
    constants.DZ.Bid.BBLIND = _.constant(7);
    constants.DZ.Bid.LEAVE = _.constant(8);
    constants.DZ.Formation = {};
    constants.DZ.Formation.NONE = _.constant(1);
    constants.DZ.Formation.HIGH = _.constant(2);
    constants.DZ.Formation.PAIR = _.constant(3);
    constants.DZ.Formation.TWO_PAIR = _.constant(4);
    constants.DZ.Formation.TRIPLE = _.constant(5);
    constants.DZ.Formation.SEQUENCE = _.constant(6);
    constants.DZ.Formation.SUIT = _.constant(7);
    constants.DZ.Formation.TRIPLE_PAIR = _.constant(8);
    constants.DZ.Formation.BOMB = _.constant(9);
    constants.DZ.Formation.SUIT_SEQUENCE = _.constant(10);
    constants.DZ.Formation.SUIT_SEQUENCE_ACE = _.constant(11);
    constants.BJL = {};
    constants.BJL.RoomBetArea = {};
    constants.BJL.RoomBetArea.PLAY = _.constant(0);
    constants.BJL.RoomBetArea.BANK = _.constant(1);
    constants.BJL.RoomBetArea.PLAY_KING = _.constant(2);
    constants.BJL.RoomBetArea.BANK_KING = _.constant(3);
    constants.BJL.RoomBetArea.PLAY_PAIR = _.constant(4);
    constants.BJL.RoomBetArea.BANK_PAIR = _.constant(5);
    constants.BJL.RoomBetArea.TIE = _.constant(6);
    constants.BJL.RoomBetArea.TIE_SAME_POINT = _.constant(7);
    constants.BCBM = {};
    constants.BCBM.RoomBetArea = {};
    constants.BCBM.RoomBetArea.Bet0 = _.constant(0);
    constants.BCBM.RoomBetArea.Bet1 = _.constant(1);
    constants.BCBM.RoomBetArea.Bet2 = _.constant(2);
    constants.BCBM.RoomBetArea.Bet3 = _.constant(3);
    constants.BCBM.RoomBetArea.Bet4 = _.constant(4);
    constants.BCBM.RoomBetArea.Bet5 = _.constant(5);
    constants.BCBM.RoomBetArea.Bet6 = _.constant(6);
    constants.BCBM.RoomBetArea.Bet7 = _.constant(7);
    constants.BCBM.RoomOpenConfigs = [ 0, 3, 4, 6, 2, 7, 5, 1, 6, 5, 4, 3, 7, 6, 4, 2, 3, 5, 7, 0, 3, 4, 6, 2, 7, 5, 1, 6, 5, 4, 3, 7, 6, 4, 2, 1, 5, 7 ];
    constants.ZJH = {};
    constants.ZJH.Bid = {};
    constants.ZJH.Bid.NONE = _.constant(0);
    constants.ZJH.Bid.ADD = _.constant(1);
    constants.ZJH.Bid.ALLIN = _.constant(2);
    constants.ZJH.Bid.FOLD = _.constant(3);
    constants.ZJH.Bid.FOLLOW = _.constant(4);
    constants.ZJH.Bid.BASE = _.constant(5);
    constants.ZJH.Bid.COMPARE = _.constant(6);
    constants.ZJH.Bid.LOOK = _.constant(7);
    constants.ZJH.Bid.LEAVE = _.constant(8);
    constants.ZJH.Formation = {};
    constants.ZJH.Formation.SPECIAL = _.constant(1);
    constants.ZJH.Formation.HIGH = _.constant(2);
    constants.ZJH.Formation.PAIR = _.constant(3);
    constants.ZJH.Formation.SEQUENCE = _.constant(6);
    constants.ZJH.Formation.SUIT = _.constant(7);
    constants.ZJH.Formation.BOMB = _.constant(9);
    constants.ZJH.Formation.SUIT_SEQUENCE = _.constant(10);
    constants.ZJH.PlayerAction = {
      LOOK: _.constant(1e3),
      SHOW_HAND: _.constant(1001)
    };
    constants.LX9 = {};
    constants.LX9.BetConfig = [ 5, 20, 50, 100, 500, 1e3, 1e4, 1e5 ];
    constants.SLWH = {};
    constants.SLWH.RoomBetArea = {};
    constants.SLWH.RoomBetArea.Bet0 = _.constant(46);
    constants.SLWH.RoomBetArea.Bet1 = _.constant(23);
    constants.SLWH.RoomBetArea.Bet2 = _.constant(13);
    constants.SLWH.RoomBetArea.Bet3 = _.constant(8);
    constants.SLWH.RoomBetArea.Bet4 = _.constant(35);
    constants.SLWH.RoomBetArea.Bet5 = _.constant(17);
    constants.SLWH.RoomBetArea.Bet6 = _.constant(10);
    constants.SLWH.RoomBetArea.Bet7 = _.constant(6);
    constants.SLWH.RoomBetArea.Bet8 = _.constant(28);
    constants.SLWH.RoomBetArea.Bet9 = _.constant(14);
    constants.SLWH.RoomBetArea.Bet10 = _.constant(8);
    constants.SLWH.RoomBetArea.Bet11 = _.constant(4);
    constants.SLWH.RoomBetArea.Area0 = _.constant(0);
    constants.SLWH.RoomBetArea.Area1 = _.constant(1);
    constants.SLWH.RoomBetArea.Area2 = _.constant(2);
    constants.SLWH.RoomBetArea.Area3 = _.constant(3);
    constants.SLWH.RoomBetArea.Area4 = _.constant(4);
    constants.SLWH.RoomBetArea.Area5 = _.constant(5);
    constants.SLWH.RoomBetArea.Area6 = _.constant(6);
    constants.SLWH.RoomBetArea.Area7 = _.constant(7);
    constants.SLWH.RoomBetArea.Area8 = _.constant(8);
    constants.SLWH.RoomBetArea.Area9 = _.constant(9);
    constants.SLWH.RoomBetArea.Area10 = _.constant(10);
    constants.SLWH.RoomBetArea.Area11 = _.constant(11);
    constants.SLWH.RoomOpenColor = {};
    constants.SLWH.RoomOpenColor.RED = _.constant(0);
    constants.SLWH.RoomOpenColor.GREEN = _.constant(1);
    constants.SLWH.RoomOpenColor.YELLOW = _.constant(2);
    constants.SLWH.RoomOpenAnimal = {};
    constants.SLWH.RoomOpenAnimal.LION = _.constant(0);
    constants.SLWH.RoomOpenAnimal.PANDA = _.constant(1);
    constants.SLWH.RoomOpenAnimal.MONKEY = _.constant(2);
    constants.SLWH.RoomOpenAnimal.RABBIT = _.constant(3);
    constants.SLWH.RoomOpenConfigs = [ 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3 ];
    cc._RF.pop();
  }, {
    underscore: "underscore"
  } ],
  CreateRole: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d56bFYy/REb77pQCq9YHh6", "CreateRole");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        inputName: cc.EditBox
      },
      onRandomBtnClicked: function onRandomBtnClicked() {
        var names = [ "上官", "欧阳", "东方", "端木", "独孤", "司马", "南宫", "夏侯", "诸葛", "皇甫", "长孙", "宇文", "轩辕", "东郭", "子车", "东阳", "子言" ];
        var names2 = [ "雀圣", "赌侠", "赌圣", "稳赢", "不输", "好运", "自摸", "有钱", "土豪" ];
        var idx = Math.floor(Math.random() * (names.length - 1));
        var idx2 = Math.floor(Math.random() * (names2.length - 1));
        this.inputName.string = names[idx] + names2[idx2];
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        this.onRandomBtnClicked();
      },
      onBtnConfirmClicked: function onBtnConfirmClicked() {
        var name = this.inputName.string;
        if ("" == name) {
          console.log("invalid name.");
          return;
        }
        console.log(name);
        cc.vv.userMgr.create(name);
      }
    });
    cc._RF.pop();
  }, {} ],
  CreateRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eec07HsL4pBn5/PiT3SYBew", "CreateRoom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _leixingxuanze: null,
        _gamelist: null,
        _currentGame: null,
        ndBtnsOfRoomType: {
          default: [],
          type: cc.Node
        },
        ndBtnsOfRoomPay: {
          default: [],
          type: cc.Node
        },
        lb12Round: {
          default: [],
          type: cc.Label
        },
        lb30Round: {
          default: [],
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.chooseRoomType(null, 0);
        this._checkRoomType();
        this.chooseRoomPay(null, 0);
        this._initRoomData();
      },
      _initRoomData: function _initRoomData() {
        this.roomData = [ {
          capacity: 4,
          rounds: 12
        }, {
          capacity: 5,
          rounds: 12
        }, {
          capacity: 6,
          rounds: 12
        }, {
          capacity: 7,
          rounds: 12
        }, {
          capacity: 4,
          rounds: 30
        }, {
          capacity: 5,
          rounds: 30
        }, {
          capacity: 6,
          rounds: 30
        }, {
          capacity: 7,
          rounds: 30
        } ];
      },
      onBtnBack: function onBtnBack() {
        this.node.active = false;
      },
      onBtnOK: function onBtnOK() {
        this.createRoom();
      },
      getType: function getType() {
        var type = 0;
        for (var i = 0; i < this._leixingxuanze.length; ++i) if (this._leixingxuanze[i].checked) {
          type = i;
          break;
        }
        if (0 == type) return "xzdd";
        if (1 == type) return "xlch";
        return "xzdd";
      },
      getSelectedOfRadioGroup: function getSelectedOfRadioGroup(groupRoot) {
        console.log(groupRoot);
        var t = this._currentGame.getChildByName(groupRoot);
        var arr = [];
        for (var i = 0; i < t.children.length; ++i) {
          var n = t.children[i].getComponent("RadioButton");
          null != n && arr.push(n);
        }
        var selected = 0;
        for (var i = 0; i < arr.length; ++i) if (arr[i].checked) {
          selected = i;
          break;
        }
        return selected;
      },
      createRoom: function createRoom() {
        var type = this._checkRoomType();
        var data = this.roomData[type];
        this._send({
          capacity: 2,
          rounds: 2
        });
        var self = this;
      },
      _send: function _send(params) {
        RoomServer.createRoom(params, function(msg) {
          cc.director.loadScene("GameScene_NN");
        });
      },
      constructSCMJConf: function constructSCMJConf() {
        var wanfaxuanze = this._currentGame.getChildByName("wanfaxuanze");
        var huansanzhang = wanfaxuanze.children[0].getComponent("CheckBox").checked;
        var jiangdui = wanfaxuanze.children[1].getComponent("CheckBox").checked;
        var menqing = wanfaxuanze.children[2].getComponent("CheckBox").checked;
        var tiandihu = wanfaxuanze.children[3].getComponent("CheckBox").checked;
        var difen = this.getSelectedOfRadioGroup("difenxuanze");
        var zimo = this.getSelectedOfRadioGroup("zimojiacheng");
        var zuidafanshu = this.getSelectedOfRadioGroup("zuidafanshu");
        var jushuxuanze = this.getSelectedOfRadioGroup("xuanzejushu");
        var dianganghua = this.getSelectedOfRadioGroup("dianganghua");
        var conf = {
          difen: difen,
          zimo: zimo,
          jiangdui: jiangdui,
          huansanzhang: huansanzhang,
          zuidafanshu: zuidafanshu,
          jushuxuanze: jushuxuanze,
          dianganghua: dianganghua,
          menqing: menqing,
          tiandihu: tiandihu
        };
        return conf;
      },
      update: function update(dt) {},
      chooseRoomType: function chooseRoomType(Event, custom) {
        var type = parseInt(custom);
        _.each(this.ndBtnsOfRoomType, function(node, index) {
          node.active = type == index;
        });
      },
      _checkRoomType: function _checkRoomType() {
        var type = "";
        cc.log("【房间按钮】", this.ndBtnsOfRoomType);
        _.each(this.ndBtnsOfRoomType, function(node, index) {
          if (node.active) {
            type = index;
            cc.log("【type】");
          }
        });
        return type;
      },
      chooseRoomPay: function chooseRoomPay(Event, custom) {
        var type = parseInt(custom);
        _.each(this.ndBtnsOfRoomPay, function(node, index) {
          node.active = type == index;
        });
        this._changePayNum(type);
      },
      _changePayNum: function _changePayNum(type) {
        if (0 == type) {
          _.each(this.lb12Round, function(lb, index) {
            lb.string = 4 + index + "人（12局）房卡x" + (4 + index);
          });
          _.each(this.lb30Round, function(lb, index) {
            lb.string = 4 + index + "人（30局）房卡x" + (8 + 2 * index);
          });
        } else {
          _.each(this.lb12Round, function(lb, index) {
            lb.string = 4 + index + "人（12局）房卡x1";
          });
          _.each(this.lb30Round, function(lb, index) {
            lb.string = 4 + index + "人（30局）房卡x2";
          });
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  CryptUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad8c18QPHhArZtfwb5Lt1Wa", "CryptUtil");
    "use strict";
    var pidCryptUtil = {};
    pidCryptUtil.encodeBase64 = function(str, utf8encode) {
      str || (str = "");
      var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      utf8encode = "undefined" != typeof utf8encode && utf8encode;
      var o1, o2, o3, bits, h1, h2, h3, h4, e = [], pad = "", c, plain, coded;
      plain = utf8encode ? pidCryptUtil.encodeUTF8(str) : str;
      c = plain.length % 3;
      if (c > 0) while (c++ < 3) {
        pad += "=";
        plain += "\0";
      }
      for (c = 0; c < plain.length; c += 3) {
        o1 = plain.charCodeAt(c);
        o2 = plain.charCodeAt(c + 1);
        o3 = plain.charCodeAt(c + 2);
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 63;
        h2 = bits >> 12 & 63;
        h3 = bits >> 6 & 63;
        h4 = 63 & bits;
        e[c / 3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
      }
      coded = e.join("");
      coded = coded.slice(0, coded.length - pad.length) + pad;
      return coded;
    };
    pidCryptUtil.decodeBase64 = function(str, utf8decode) {
      str || (str = "");
      var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      utf8decode = "undefined" != typeof utf8decode && utf8decode;
      var o1, o2, o3, h1, h2, h3, h4, bits, d = [], plain, coded;
      coded = utf8decode ? pidCryptUtil.decodeUTF8(str) : str;
      for (var c = 0; c < coded.length; c += 4) {
        h1 = b64.indexOf(coded.charAt(c));
        h2 = b64.indexOf(coded.charAt(c + 1));
        h3 = b64.indexOf(coded.charAt(c + 2));
        h4 = b64.indexOf(coded.charAt(c + 3));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >>> 16 & 255;
        o2 = bits >>> 8 & 255;
        o3 = 255 & bits;
        d[c / 4] = String.fromCharCode(o1, o2, o3);
        64 == h4 && (d[c / 4] = String.fromCharCode(o1, o2));
        64 == h3 && (d[c / 4] = String.fromCharCode(o1));
      }
      plain = d.join("");
      plain = utf8decode ? pidCryptUtil.decodeUTF8(plain) : plain;
      return plain;
    };
    pidCryptUtil.encodeUTF8 = function(str) {
      str || (str = "");
      str = str.replace(/[\u0080-\u07ff]/g, function(c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(192 | cc >> 6, 128 | 63 & cc);
      });
      str = str.replace(/[\u0800-\uffff]/g, function(c) {
        var cc = c.charCodeAt(0);
        return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63, 128 | 63 & cc);
      });
      return str;
    };
    pidCryptUtil.decodeUTF8 = function(str) {
      str || (str = "");
      str = str.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
        var cc = (31 & c.charCodeAt(0)) << 6 | 63 & c.charCodeAt(1);
        return String.fromCharCode(cc);
      });
      str = str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
        var cc = (15 & c.charCodeAt(0)) << 12 | (63 & c.charCodeAt(1)) << 6 | 63 & c.charCodeAt(2);
        return String.fromCharCode(cc);
      });
      return str;
    };
    pidCryptUtil.convertToHex = function(str) {
      str || (str = "");
      var hs = "";
      var hv = "";
      for (var i = 0; i < str.length; i++) {
        hv = str.charCodeAt(i).toString(16);
        hs += 1 == hv.length ? "0" + hv : hv;
      }
      return hs;
    };
    pidCryptUtil.convertFromHex = function(str) {
      str || (str = "");
      var s = "";
      for (var i = 0; i < str.length; i += 2) s += String.fromCharCode(parseInt(str.substring(i, i + 2), 16));
      return s;
    };
    pidCryptUtil.stripLineFeeds = function(str) {
      str || (str = "");
      var s = "";
      s = str.replace(/\n/g, "");
      s = s.replace(/\r/g, "");
      return s;
    };
    pidCryptUtil.toByteArray = function(str) {
      str || (str = "");
      var ba = [];
      for (var i = 0; i < str.length; i++) ba[i] = str.charCodeAt(i);
      return ba;
    };
    pidCryptUtil.fragment = function(str, length, lf) {
      str || (str = "");
      if (!length || length >= str.length) return str;
      lf || (lf = "\n");
      var tmp = "";
      for (var i = 0; i < str.length; i += length) tmp += str.substr(i, length) + lf;
      return tmp;
    };
    pidCryptUtil.formatHex = function(str, length) {
      str || (str = "");
      length || (length = 45);
      var str_new = "";
      var j = 0;
      var hex = str.toLowerCase();
      for (var i = 0; i < hex.length; i += 2) str_new += hex.substr(i, 2) + ":";
      hex = this.fragment(str_new, length);
      return hex;
    };
    pidCryptUtil.byteArray2String = function(b) {
      var s = "";
      for (var i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
      return s;
    };
    module.exports = {
      pidCryptUtil: pidCryptUtil
    };
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function placeHoldersCount(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === b64[len - 2] ? 2 : "=" === b64[len - 1] ? 1 : 0;
    }
    function byteLength(b64) {
      return 3 * b64.length / 4 - placeHoldersCount(b64);
    }
    function toByteArray(b64) {
      var i, l, tmp, placeHolders, arr;
      var len = b64.length;
      placeHolders = placeHoldersCount(b64);
      arr = new Arr(3 * len / 4 - placeHolders);
      l = placeHolders > 0 ? len - 4 : len;
      var L = 0;
      for (i = 0; i < l; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = tmp >> 16 & 255;
        arr[L++] = tmp >> 8 & 255;
        arr[L++] = 255 & tmp;
      }
      if (2 === placeHolders) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[L++] = 255 & tmp;
      } else if (1 === placeHolders) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[L++] = tmp >> 8 & 255;
        arr[L++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var output = "";
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[tmp << 4 & 63];
        output += "==";
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        output += lookup[tmp >> 10];
        output += lookup[tmp >> 4 & 63];
        output += lookup[tmp << 2 & 63];
        output += "=";
      }
      parts.push(output);
      return parts.join("");
    }
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
         case "hex":
         case "utf8":
         case "utf-8":
         case "ascii":
         case "latin1":
         case "binary":
         case "base64":
         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 1,
    ieee754: 4,
    isarray: 3
  } ],
  3: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  4: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  DataHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "539d6XOVAREipo1bMzhD909", "DataHelper");
    "use strict";
    var Crypt = require("CryptUtil").pidCryptUtil;
    function initHelper() {
      _initGlobalData();
      _loadLocalData();
      return module.exports;
    }
    function saveAllData() {
      cc.log("saveAllData");
      var gameLocalData = JSON.stringify(gLocalData);
      gameLocalData = Crypt.encodeBase64(gameLocalData, true);
      cc.sys.localStorage.setItem("GameLocalData", gameLocalData);
    }
    function _initGlobalData() {
      cc.log("@@@@@@loadGlobalData");
      window._ = require("underscore");
      window.ServerRouters = require("ServerRouters");
      window.Constants = require("Constants");
      require("GlobalGameData").init();
      window.ActionHelper = require("ActionHelper");
      window.NPHelper = require("NPHelper");
      window.PBHelper = require("PBHelper");
      window.TexHelper = require("TexHelper");
      window.TimeHelper = require("TimeHelper");
      window.GameHelper = require("GameHelper").initHelper();
      window.NotifyHelper = require("NotifyHelper");
      window.CCLoaderHelper = require("CCLoaderHelper");
      window.MsgHelper = require("MsgHelper").initHelper();
      window.PlatformHelper = require("PlatformHelper");
      window.FuncHelper = require("FuncHelper");
      window.RandomListHelper = require("RandomListHelper");
      window.SocketHelper = require("SocketHelper");
      window.AudioHelper = require("AudioHelper");
      window.UserHandler = require("UserHandler");
      window.HttpHandler = require("HttpHandler");
      window.UserServer = require("UserServer");
      window.RoomServer = require("RoomServer");
      window.GamesMgr = require("GamesMgr");
      window.gLoginScene = null;
      window.gChooseScene = null;
      window.gHallScene = null;
      window.gGameScene = null;
    }
    function _loadLocalData() {
      cc.log("@@@@@@loadLocalData");
      var _isNull = function _isNull(newParam) {
        return void 0 == newParam || null == newParam;
      };
      var defaultData = {
        dataVersion: 2,
        userInfo: {
          platform: "",
          account: "",
          areaCode: "86",
          phone: "",
          password: "",
          tableBg: 0
        },
        sysInfo: {
          shouldMusic: true,
          shouldEffect: true,
          agreeAgreement: true,
          rememberPassWord: true
        },
        roomChoices: {
          nn: [ 0, 0 ],
          dz: [ 0, 0 ],
          bjl: [ 0, 0 ],
          zjh: [ 0, 0 ]
        }
      };
      var data = cc.sys.localStorage.getItem("GameLocalData");
      if (null != data) {
        data = Crypt.decodeBase64(data, true);
        data = JSON.parse(data);
      } else data = defaultData;
      _checkVersion(data, defaultData);
      cc.log(data);
      window.gLocalData = data;
    }
    function _checkVersion(last, current) {
      var lastVersion = last.dataVersion;
      var currVersion = current.dataVersion;
      currVersion > lastVersion && (last.dataVersion = currVersion);
    }
    module.exports = {
      initHelper: initHelper,
      saveAllData: saveAllData
    };
    cc._RF.pop();
  }, {
    ActionHelper: "ActionHelper",
    AudioHelper: "AudioHelper",
    CCLoaderHelper: "CCLoaderHelper",
    Constants: "Constants",
    CryptUtil: "CryptUtil",
    FuncHelper: "FuncHelper",
    GameHelper: "GameHelper",
    GamesMgr: "GamesMgr",
    GlobalGameData: "GlobalGameData",
    HttpHandler: "HttpHandler",
    MsgHelper: "MsgHelper",
    NPHelper: "NPHelper",
    NotifyHelper: "NotifyHelper",
    PBHelper: "PBHelper",
    PlatformHelper: "PlatformHelper",
    RandomListHelper: "RandomListHelper",
    RoomServer: "RoomServer",
    ServerRouters: "ServerRouters",
    SocketHelper: "SocketHelper",
    TexHelper: "TexHelper",
    TimeHelper: "TimeHelper",
    UserHandler: "UserHandler",
    UserServer: "UserServer",
    underscore: "underscore"
  } ],
  DingQue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "907582awNJFnobC/mZGFLBq", "DingQue");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        queYiMen: null,
        tips: [],
        selected: [],
        dingques: []
      },
      start: function start() {
        if (null == cc.vv) return;
        this.initView();
        this.initDingQue();
        this.initEventHandlers();
      },
      initView: function initView() {
        var gameChild = this.node.getChildByName("game");
        this.queYiMen = gameChild.getChildByName("dingque");
        this.queYiMen.active = cc.vv.gameNetMgr.isDingQueing;
        var arr = [ "myself", "right", "up", "left" ];
        for (var i = 0; i < arr.length; ++i) {
          var side = gameChild.getChildByName(arr[i]);
          var seat = side.getChildByName("seat");
          var dingque = seat.getChildByName("que");
          this.dingques.push(dingque);
        }
        this.reset();
        var tips = this.queYiMen.getChildByName("tips");
        for (var i = 0; i < tips.childrenCount; ++i) {
          var n = tips.children[i];
          this.tips.push(n.getComponent(cc.Label));
        }
        "dingque" == cc.vv.gameNetMgr.gamestate && this.showDingQueChoice();
      },
      initEventHandlers: function initEventHandlers() {
        var self = this;
        this.node.on("game_dingque", function(data) {
          self.showDingQueChoice();
        });
        this.node.on("game_dingque_notify", function(data) {
          var seatIndex = cc.vv.gameNetMgr.getSeatIndexByID(data.detail);
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatIndex);
          console.log("game_dingque_notify:" + localIndex);
          self.tips[localIndex].node.active = true;
        });
        this.node.on("game_dingque_finish", function() {
          self.queYiMen.active = false;
          cc.vv.gameNetMgr.isDingQueing = false;
          self.initDingQue();
        });
      },
      showDingQueChoice: function showDingQueChoice() {
        this.queYiMen.active = true;
        var sd = cc.vv.gameNetMgr.getSelfData();
        var typeCounts = [ 0, 0, 0 ];
        for (var i = 0; i < sd.holds.length; ++i) {
          var pai = sd.holds[i];
          var type = cc.vv.mahjongmgr.getMahjongType(pai);
          typeCounts[type]++;
        }
        var min = 65535;
        var minIndex = 0;
        for (var i = 0; i < typeCounts.length; ++i) if (typeCounts[i] < min) {
          min = typeCounts[i];
          minIndex = i;
        }
        var arr = [ "tong", "tiao", "wan" ];
        for (var i = 0; i < arr.length; ++i) {
          var node = this.queYiMen.getChildByName(arr[i]);
          minIndex == i ? node.getComponent(cc.Animation).play("dingque_tuijian") : node.getComponent(cc.Animation).stop();
        }
        this.reset();
        for (var i = 0; i < this.tips.length; ++i) {
          var n = this.tips[i];
          n.node.active = !(i > 0);
        }
      },
      initDingQue: function initDingQue() {
        var arr = [ "tong", "tiao", "wan" ];
        var data = cc.vv.gameNetMgr.seats;
        for (var i = 0; i < data.length; ++i) {
          var que = data[i].dingque;
          que = null == que || que < 0 || que >= arr.length ? null : arr[que];
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(i);
          que && (this.dingques[localIndex].getChildByName(que).active = true);
        }
      },
      reset: function reset() {
        this.setInteractable(true);
        this.selected.push(this.queYiMen.getChildByName("tong_selected"));
        this.selected.push(this.queYiMen.getChildByName("tiao_selected"));
        this.selected.push(this.queYiMen.getChildByName("wan_selected"));
        for (var i = 0; i < this.selected.length; ++i) this.selected[i].active = false;
        for (var i = 0; i < this.dingques.length; ++i) for (var j = 0; j < this.dingques[i].children.length; ++j) this.dingques[i].children[j].active = false;
      },
      onQueYiMenClicked: function onQueYiMenClicked(event) {
        var type = 0;
        "tong" == event.target.name ? type = 0 : "tiao" == event.target.name ? type = 1 : "wan" == event.target.name && (type = 2);
        for (var i = 0; i < this.selected.length; ++i) this.selected[i].active = false;
        this.selected[type].active = true;
        cc.vv.gameNetMgr.dingque = type;
        cc.vv.net.send("dingque", type);
      },
      setInteractable: function setInteractable(value) {
        this.queYiMen.getChildByName("tong").getComponent(cc.Button).interactable = value;
        this.queYiMen.getChildByName("tiao").getComponent(cc.Button).interactable = value;
        this.queYiMen.getChildByName("wan").getComponent(cc.Button).interactable = value;
      }
    });
    cc._RF.pop();
  }, {} ],
  FKNN_Ctl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a13b5+ypb5AEL8PznKB2NGQ", "FKNN_Ctl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _targetComName: "GameScene_NN"
      },
      onLoad: function onLoad() {
        this._playersNumMax = 9;
        this._comScheduler = this.addComponent("ComScheduler");
        this._comScheduler2 = this.addComponent("ComScheduler");
        this._comRandomBanker = this.addComponent("ComRandomBanker");
        this._comFunc = this.addComponent("ComFuncChecker");
        this._target = this.node.getComponent(this._targetComName);
        this._startAniTime = 1;
        this._target._ui.showInviteBtns(true, GameMsgHandler.isRoomOwner(), true, true);
        this._target._ui.setBtnsOfPlayState(true, GameMsgHandler.canRubCard());
        this.showBankerswitch = false;
        this._comRandomBanker.reset();
        this.bankerActionOver = true;
        this.gameStart = 0;
      },
      initNotifys: function initNotifys() {
        var _this = this;
        var ACFG = ServerRouters.OnAction_FKNN;
        var NTF = this._target._ntf;
        NTF.register(ACFG.ROOM_CHAT, function(event) {
          var com = $G.gCData.gComPlayers[GameMsgHandler.getCid(event.detail.seat)];
          com.showChat(true, event.detail.type, event.detail.content);
          if (2 === event.detail.type) var sexIsMan = 0 == GameMsgHandler.getUserBySid(event.detail.seat).sex;
          if (4 === event.detail.type) {
            var key = event.detail.content;
            ChatServer.getVoice(key, function(data) {
              ChatHandler.addChatVoice(key, data);
            });
          }
        });
        NTF.register(NOTIFY_GAME_IN, function() {
          if (SocketHelper.isConnected()) GameHelper.autoLogin(); else {
            SocketHelper.disconnectSelf = false;
            pomelo.disconnect();
          }
          FuncHelper.addFunc(MsgHelper.removeLoading, GameHelper.isLogined);
        });
        NTF.register(NOTIFY_GAME_OUT, function() {
          _this._resetAll();
          SocketHelper.disconnect();
        });
        NTF.register(ACFG.RoundResult, function() {
          var bankerSid = GameMsgHandler.getBankerSid();
          var baseScore = GameMsgHandler.getData().baseScore;
          var scores = GameMsgHandler.getStateResult();
          var seats = GameMsgHandler.getSeats();
          var once = true;
          var comGoldActionLayer = _this._target._goldActionLayer;
          if (!comGoldActionLayer) return;
          _.each(seats, function(seat, i) {
            var user = seat.user;
            var isPlaying = !!user && GameMsgHandler.isPlayerPlaying(user.id);
            if (user && isPlaying) {
              var getHeadPos = function getHeadPos(sid) {
                var ndHead = $G.gCData.gComPlayers[GameMsgHandler.getCid(sid)].ndHead;
                var worldPos = ndHead.parent.convertToWorldSpaceAR(ndHead.getPosition());
                var convertPos = _this._target._ui.ndRoot.convertToNodeSpaceAR(worldPos);
                return convertPos;
              };
              if (GameMsgHandler.getBankerSid() != i) {
                cc.log("######123", scores, isPlaying, scores[i], i);
                if (scores[i].score.change < 0) {
                  comGoldActionLayer.playerMoveBanker(Math.abs(scores[i].score.change) / baseScore, getHeadPos(i), getHeadPos(bankerSid));
                  if (once) {
                    var _time = comGoldActionLayer.playerToBankerTime + comGoldActionLayer.timeSum;
                    _this._comScheduler2.once("showAnimation", function() {
                      $G.gCData.gComPlayers[GameMsgHandler.getCid(bankerSid)].showAnimation();
                    }, _time);
                  }
                  once = false;
                } else comGoldActionLayer.bankerMovePlayer(Math.abs(scores[i].score.change) / baseScore, getHeadPos(bankerSid), getHeadPos(i));
              }
            }
          });
          var haveWin = _.find(seats, function(seat, i) {
            var user = seat.user;
            var isPlaying = !!user && GameMsgHandler.isPlayerPlaying(user.id);
            if (user && isPlaying && GameMsgHandler.getBankerSid() != i) return scores[i].score.change > 0;
          });
          var time = comGoldActionLayer.playerToBankerTime + comGoldActionLayer.timeSum;
          var isPlaying = GameMsgHandler.isSelfPlaying();
          _this._comScheduler2.once("updateRoundScore", function() {
            if (isPlaying) {
              var isWin = scores[GameMsgHandler.getSid(0)].score.change >= 0;
              _this._target._ui.showResultTitle(isWin);
              scores[GameMsgHandler.getSid(0)].score.play > scores[GameMsgHandler.getSid(0)].score.result && _this._target._ui.showMostWin();
            }
            _this.updateRoundScore();
          }, time * (haveWin ? 2 : 1));
        });
        NTF.register(ACFG.RoomStateTimerStart, function() {
          _this._target._ui.showCountDown(GameMsgHandler.getData().state.timer / 1e3, true);
        });
        NTF.register(ACFG.RoomStateTimerStop, function() {
          _this._target._ui.showCountDown(0, false);
          2 == GameMsgHandler.getData().type && _this._target._ui.showMatching();
        });
        NTF.register(ACFG.PlayerScore, function() {
          _this.updateEvenyRound();
        });
        NTF.register(ACFG.DISMISS_ROOM, function() {
          GameLogic.leaveRoom(true);
        });
        NTF.register(ACFG.ROOM_RESULT, function() {
          _this._target._ui.resultShow();
        });
        NTF.register(ACFG.PLAYER_ENTER_ROOM, function() {
          _this._comScheduler2.clearAll();
          _this._resetAll();
          _this.initRoomInfo();
          _this.initDealer();
          _this.updatePlayers();
          _this.updateSelfBtns();
          _this.jumpRoomState(GameMsgHandler.getRoomStateType());
          _this.updateCardsAll();
          var dlg = _this._target.node.getChildByTag(9999);
          dlg && dlg.destroy();
        });
        NTF.register(ACFG.LEAVE_ROOM, function(event) {
          Constants.ClearReason.REQUEST() != event.detail && GameLogic.leaveRoom();
          _this._comScheduler2.clearAll();
          _this._resetAll();
        });
        NTF.register(ACFG.ROOM_CHANGE_STATE, function() {
          return _this.updateRoomState();
        });
        NTF.register(ACFG.ROUND_BEGIN, function() {
          _this.gameStart = 1;
          var round = GameMsgHandler.getData().state.round;
          _this._target._ui.showRoundString(round);
          _this._target._ui.showCountDown(0, false);
          _this._target._ui.initButton();
          _this._target._ui.showArmGameStart(true);
        });
        NTF.register(ACFG.PLAYER_HOST, function(event) {
          $G.gCData.gComPlayers[GameMsgHandler.getCid(event.detail.seat)].showMiss(event.detail.hosting);
        });
        NTF.register(ACFG.ADD_PLAYER, function(event) {
          if (event.detail.user.id == UserHandler.getId() && 1 == GameMsgHandler.getRoomStateType()) {
            GameMsgHandler.resetData();
            _this.jumpRoomState(GameMsgHandler.getRoomStateType());
          } else _this.updatePlayer(GameMsgHandler.getCid(event.detail.index));
        });
        NTF.register(ACFG.REMOVE_PLAYER, function(event) {
          _this.updatePlayer(GameMsgHandler.getCid(event.detail));
        });
        NTF.register(ACFG.PLAYER_READY, function(event) {
          _this.updatePlayerState(GameMsgHandler.getCid(event.detail.seat));
        });
        NTF.register(ACFG.PLAYER_BANKER, function(event) {
          _this.updatePlayerState(GameMsgHandler.getCid(event.detail.seat));
        });
        NTF.register(ACFG.PLAYER_BID, function(event) {
          _this.updatePlayerState(GameMsgHandler.getCid(event.detail.seat));
        });
        NTF.register(ACFG.ROOM_BANKER, function(event) {
          null == event.detail || _this._comRandomBanker.enableBankerAction(true);
        });
        NTF.register(ACFG.DISMISS_START, function(event) {
          cc.log("【开始解散房间】");
          _this._target._ui.ndDisRoom.active = true;
        });
        NTF.register(ACFG.DISMISS_STOP, function() {
          _this._target._ui.ndDisRoom.active = false;
        });
        NTF.register(ACFG.DISMISS_VOTE, function(event) {
          cc.log("【解散房间玩家的状态】");
        });
        NTF.register(ACFG.PLAYER_ADD_CARDS, function(event) {
          var cards = event.detail;
          var time = .125;
          var start = _this._startAniTime;
          var comCards = [];
          var delay = 0;
          var showAction = 2 === GameMsgHandler.getRoomStateType() || 5 === GameMsgHandler.getRoomStateType();
          _.each(cards, function(card, i) {
            delay = time * (i + 1) + start;
            _this._comScheduler.once("AddCards", function() {
              AudioMgr_Game.playSpecial("dispatch");
              comCards.push($G.gCData.gComPlayers[0].addCard(1, card, !showAction, false));
              _.each(GameMsgHandler.getSeats(), function(seat, index) {
                var cid = GameMsgHandler.getCid(index);
                if (cid > 0 && seat && seat.user) {
                  var isPlaying = GameMsgHandler.isPlayerPlaying(seat.user.id);
                  isPlaying && $G.gCData.gComPlayers[cid].addCard(1, card, false);
                }
              });
            }, delay);
          });
          if (showAction) {
            delay += time * comCards.length;
            _this._comScheduler.once("FlipCards", function() {
              _.each(comCards, function(card) {
                1 == comCards.length && GameMsgHandler.canRubCard() || card.showCardFrontWithFlipAction();
              });
            }, delay);
          }
          delay += 1;
          4 != GameMsgHandler.getCardsByCid(0).length && GameMsgHandler.canRubCard() || _this._comScheduler.once("ChooseCards", function() {
            _this.updateCardsChoosed();
          }, delay);
        });
        NTF.register(ACFG.PLAYER_PLAY, function(event) {
          var com = $G.gCData.gComPlayers[GameMsgHandler.getCid(event.detail.seat)];
          com.moveCardsToShowArea();
          com.showOxResult(-1);
          var count = 5;
          var cards = [];
          _.times(count, function() {
            cards.push({
              point: 1,
              suit: 1
            });
          });
          com.removeCards(1);
          com.removeCards(2);
          if (0 == GameMsgHandler.getCid(event.detail.seat)) {
            _this._comScheduler.clear("FlipCards");
            _this._comScheduler.clear("AddCards");
            _this._comScheduler.clear("showBanker");
            _this._comScheduler.clear("_bankerAction");
          }
          com.addCards(2, cards, false);
          _this.updateSelfBtns();
        });
        NTF.register(ACFG.PLAYER_SHOW_HAND, function(event) {
          _this._target._ui.showClock(false);
          var formations = event.detail;
          var sids = [];
          _.times(9, function(i) {
            sids[i] = i;
          });
          var banker = GameMsgHandler.getBankerSid();
          cc.log("banker:" + banker);
          var cursid = banker;
          _.each(sids, function(sid, index) {
            cursid += 1;
            cursid >= _.size(sids) && (cursid = 0);
            sids[index] = cursid;
          });
          cc.log(sids);
          var delay = .05;
          _.each(sids, function(sid) {
            var formation = formations[sid];
            if (formation) {
              _this._comScheduler.once("ShowCards", function() {
                var com = $G.gCData.gComPlayers[GameMsgHandler.getCid(sid)];
                com.removeCards(1);
                com.removeCards(2);
                com.addCards(2, formation.cards, true);
                var index = _this._target._logic.getIndex(formation.type, formation.value);
                com.showOxResult(index);
                var sexIsMan = 0 == GameMsgHandler.getUserBySid(sid).sex;
                AudioMgr_Game.playPokerType(index, sexIsMan);
              }, delay);
              delay += .4;
            }
          });
        });
        NTF.register(ACFG.PLAYER_SHOW_CARDS, function(event) {
          var isSelfPlaying = GameMsgHandler.isSelfPlaying();
          if (isSelfPlaying) return;
          var sid = event.detail.seat;
          var count = event.detail.cards;
          count = 1 == count ? 5 : count;
          var cards = [];
          _.times(count, function() {
            cards.push({
              point: 1,
              suit: 1
            });
          });
          var com = $G.gCData.gComPlayers[GameMsgHandler.getCid(sid)];
          com.removeCards(1);
          com.addCards(1, cards, false);
        });
        NTF.register(NOTIFY_MAGIC_WINDOW, function(event) {
          FuncHelper.addFunc(MWHelper.checkAndExecute, GameHelper.isLogined);
        });
      },
      initRoomInfo: function initRoomInfo() {
        var infos = GameMsgHandler.getRoomInfos();
        this._target._ui.showRoomInfo(infos);
        this._target._ui.ndBtnCopyRoomId.active = 3 == GameMsgHandler.getData().type;
      },
      initDealer: function initDealer() {
        2 == GameMsgHandler.getData().type || 3 == GameMsgHandler.getData().type;
      },
      initPlayers: function initPlayers() {
        var maxRight = parseInt(this._playersNumMax / 2);
        _.times(this._playersNumMax, function(cid) {
          var node = 0 == cid ? cc.instantiate(this._target._ui.pbActorSelf) : cc.instantiate(this._target._ui.pbActorLeft);
          node.active = false;
          var com = node.getComponent("PbPlayer_NN");
          com.init(cid);
          cid >= 1 && cid <= maxRight && com.setRightMode();
          $G.gCData.gComPlayers[cid] = com;
          var name = "" + cid;
          this._target._ui.ndActorPosContainer.getChildByName(name).addChild(node);
        }, this);
      },
      updateEvenyRound: function updateEvenyRound() {
        var seats = GameMsgHandler.getSeats();
        _.each(seats, function(seat, index) {
          var user = GameMsgHandler.getUserBySid(index);
          if (user) {
            var com = $G.gCData.gComPlayers[GameMsgHandler.getCid(index)];
            com.showScore(user.score);
          }
        });
      },
      updatePlayers: function updatePlayers() {
        var _this2 = this;
        var seats = GameMsgHandler.getSeats();
        _.each(seats, function(seat, index) {
          _this2.updatePlayer(index);
        });
        var banker = GameMsgHandler.getData().state.banker;
        if ((3 == GameMsgHandler.getData().bankerMode || 2 == GameMsgHandler.getData().bankerMode && GameMsgHandler.getCurrentRound() > 1 || 1 == GameMsgHandler.getData().bankerMode && 4 == GameMsgHandler.getRoomStateType()) && null != banker) {
          var bankerCid = GameMsgHandler.getCid(banker);
          this.showBanker(bankerCid);
        }
        this.updateCardsAll();
      },
      updatePlayer: function updatePlayer() {
        var cid = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        cc.log("updatePlayer " + cid);
        var user = GameMsgHandler.getUserByCid(cid);
        var com = $G.gCData.gComPlayers[cid];
        if (!user) {
          com.node.active = false;
          com.resetAll();
          return;
        }
        com.node.active = true;
        com.showName(user.nick);
        com.showScore(user.score ? user.score : 0);
        com.showMiss(GameMsgHandler.getSeatByCid(cid).hosting);
        com.showHead(user.head);
        GameMsgHandler.getCurrentRound() <= 1 && com.showReady(GameMsgHandler.getSeatByCid(cid).ready);
        this.updatePlayerState(cid);
      },
      showBanker: function showBanker(index) {
        this.bankerActionOver = true;
        AudioMgr_Game.playSpecial("banker");
        this._comFunc.execute();
        _.each($G.gCData.gComPlayers, function(com, cid) {
          com.showBanker(index == cid);
        });
        null === GameMsgHandler.getSeatStateByCid(0, "bid") && GameMsgHandler.getRoomState().banker != GameMsgHandler.getSid(0) && GameMsgHandler.isSelfPlaying() && this._target._ui.showPlayerButton("bet");
        var actionTime = 0;
        var BankerList = this._comRandomBanker.getBankerList();
        this._comRandomBanker.couldShowBankerAction && null != BankerList && (actionTime = _.last(this._comRandomBanker.getTimeList()));
        this._target._ui.showClock(true, GameMsgHandler.getRoomState().time / 1e3 - actionTime);
      },
      _bankerAction: function _bankerAction(first, last) {
        AudioMgr_Game.playSpecial("bankerRandom");
        null != first && $G.gCData.gComPlayers[GameMsgHandler.getCid(first)].hideBankerAction();
        null != last && $G.gCData.gComPlayers[GameMsgHandler.getCid(last)].showBankerAction();
      },
      jumpRoomState: function jumpRoomState(state) {
        for (var i = 0; i <= state; i++) this.updateRoomState(i);
      },
      updateRoomState: function updateRoomState() {
        var _this3 = this;
        var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        state = null != state ? state : GameMsgHandler.getRoomStateType();
        cc.log("@@@ updateRoomState :" + state);
        switch (state) {
         case 0:
          break;

         case 1:
          this._target._ui.showRoundString();
          this._resetAll();
          this.updatePlayers();
          this.updateEvenyRound();
          this._target.node.removeChildByTag(9999);
          this._target._ui.showClock(false);
          this._target._ui.showCountDown(GameMsgHandler.getData().state.timer ? GameMsgHandler.getData().state.timer / 1e3 : 0, true);
          2 != GameMsgHandler.getData().type || GameMsgHandler.getData().playing || GameMsgHandler.getData().state.timer || this._target._ui.showMatching();
          break;

         case 2:
          2 === GameMsgHandler.getRoomStateType() && AudioMgr_Game.playSpecial("start");
          if (3 == GameMsgHandler.getData().bankerMode || 2 == GameMsgHandler.getData().bankerMode && GameMsgHandler.getCurrentRound() >= 1) {
            var banker = GameMsgHandler.getData().state.banker;
            null != banker && $G.gCData.gComPlayers[GameMsgHandler.getCid(banker)].showBanker(true);
          }
          this.clearAllPlayersState();
          break;

         case 3:
          this._target._ui.showClock(true, GameMsgHandler.getRoomState().time / 1e3);
          break;

         case 4:
          this.clearAllPlayersState();
          this._target._ui.showClock(false);
          (3 == GameMsgHandler.getData().bankerMode || 2 == GameMsgHandler.getData().bankerMode && GameMsgHandler.getCurrentRound() >= 1) && this._target._ui.showClock(true, GameMsgHandler.getRoomState().time / 1e3);
          if (1 == GameMsgHandler.getData().bankerMode) {
            var BankerList = this._comRandomBanker.getBankerList();
            if (null != BankerList && this._comRandomBanker.couldShowBankerAction) {
              this.bankerActionOver = false;
              var TimeList = this._comRandomBanker.getTimeList();
              _.each(BankerList, function(banker, index) {
                index > 0 ? _this3._comScheduler.once("_bankerAction", function() {
                  _this3._bankerAction(BankerList[index - 1], banker);
                }, TimeList[index]) : _this3._comScheduler.once("_bankerAction", function() {
                  _this3._bankerAction(null, banker);
                }, TimeList[index]);
                index == _.size(BankerList) - 1 && _this3._comScheduler.once("showBanker", function() {
                  return _this3.showBanker(GameMsgHandler.getCid(GameMsgHandler.getBankerSid()));
                }, TimeList[index]);
              });
            } else this.showBanker(GameMsgHandler.getCid(GameMsgHandler.getBankerSid()));
          }
          break;

         case 5:
          this._target._ui.showClock(false);
          break;

         case 6:
          this._target._ui.showClock(true, GameMsgHandler.getRoomState().time / 1e3);
          this.updateOxAutoBtnText();
        }
        this.updateSelfBtns();
      },
      _resetAll: function _resetAll() {
        this._target._ui.showCountDown(0, false);
        this.bankerActionOver = true;
        this._comRandomBanker.reset();
        this._comScheduler.clearAll();
        _.each($G.gCData.gComPlayers, function(com) {
          com.resetPart();
        });
        this._target._ui.showClock(false);
        this.clearAllPlayersState();
        this._comFunc.clear();
      },
      updatePlayerState: function updatePlayerState(cid) {
        var _this4 = this;
        var seat = GameMsgHandler.getSeatByCid(cid);
        var currentState = GameMsgHandler.getRoomStateType();
        var com = $G.gCData.gComPlayers[cid];
        cc.log("【不存在cid】", $G.gCData.gComPlayers);
        cc.log("【根据取出来的$G.gCData.gComPlayers】", com);
        var isPlaying = !!seat.user && GameMsgHandler.isPlayerPlaying(seat.user.id);
        var info = "@ cid : " + cid + " ready : " + seat.ready + "  bid: " + seat.bid;
        if (!seat.user) return;
        cc.log(info);
        switch (currentState) {
         case 0:
          break;

         case 1:
          GameMsgHandler.getCurrentRound() <= 1 && com.showReady(seat.ready);
          break;

         case 2:
          break;

         case 3:
          isPlaying ? com.showRob(seat.banker) : com.showState(null, false);
          AudioMgr_Game.playRob(seat.banker, 0 == seat.user.sex);
          break;

         case 4:
          this._comFunc.addFunc(function() {
            com.showState(null);
            var bid = seat.bid;
            isPlaying || (bid = null);
            com.showCallScore(bid);
            AudioMgr_Game.playScore(seat.bid, 0 == seat.user.sex);
          }, function() {
            return _this4.bankerActionOver;
          });
          break;

         case 5:
          break;

         case 6:
          var bid = seat.bid;
          isPlaying || (bid = null);
          com.showCallScore(bid);
          break;

         case 7:
          com.showState(null);
        }
        this.updateSelfBtns();
      },
      updateSelfBtns: function updateSelfBtns() {
        this._target._ui.showPlayerButton(null);
        this.updateSitBtn();
        var state = GameMsgHandler.getRoomStateType();
        state > 1 && this._target._ui.showInviteBtns(false);
        if (!GameMsgHandler.isSelfPlaying()) return;
        switch (state) {
         case 0:
          break;

         case 1:
          false === GameMsgHandler.getSeatStateByCid(0, "ready") && this._target._ui.showPlayerButton("wait");
          break;

         case 2:
          this._target._ui.showInviteBtns(false);
          break;

         case 3:
          null === GameMsgHandler.getSeatStateByCid(0, "banker") && this._target._ui.showPlayerButton("rob");
          break;

         case 4:
          if (!this.bankerActionOver) return;
          (3 == GameMsgHandler.getData().bankerMode || 2 == GameMsgHandler.getData().bankerMode && GameMsgHandler.getCurrentRound() >= 1 || 1 == GameMsgHandler.getData().bankerMode && 4 == GameMsgHandler.getRoomStateType()) && null === GameMsgHandler.getSeatStateByCid(0, "bid") && GameMsgHandler.getRoomState().banker != GameMsgHandler.getSid(0) && this._target._ui.showPlayerButton("bet");
          break;

         case 5:
          break;

         case 6:
          false === GameMsgHandler.getSeatStateByCid(0, "played") && this._target._ui.showPlayerButton("showOx");
        }
      },
      updateSitBtn: function updateSitBtn() {
        this._target._ui.showSitBtn(GameMsgHandler.couldSit());
      },
      clearAllPlayersState: function clearAllPlayersState() {
        _.each($G.gCData.gComPlayers, function(com) {
          com.showState(null, false);
        });
      },
      updateOxAutoBtnText: function updateOxAutoBtnText() {
        if (!GameMsgHandler.isSelfPlaying()) return;
        var oxType = this._target._logic.getOxType(GameMsgHandler.getCardsByCid(0));
        var oxName = this._target._logic.getOXNameByType(oxType);
        this._target._ui.setOxAutoText(oxType >= 3 ? oxName : "有牛");
      },
      handlerBtnPlay: function handlerBtnPlay() {
        var param = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hasOx";
        if (!GameMsgHandler.isSelfPlaying()) return;
        var oxType = this._target._logic.getOxType(GameMsgHandler.getCardsByCid(0));
        if ("hasOx" === param && 0 === oxType) {
          MsgHelper.pushToast("您没有牛哦");
          return;
        }
        if ("noOx" === param && oxType > 0) {
          MsgHelper.pushToast("您有牛哦");
          return;
        }
        GameMsgServer.finish();
      },
      updateCardsChoosed: function updateCardsChoosed() {
        if (!GameMsgHandler.isSelfPlaying()) return;
        var three = this._target._logic.getThree(GameMsgHandler.getCardsByCid(0));
        if (!three) return;
        $G.gCData.gComPlayers[0].chooseCards(three);
      },
      updateRoundScore: function updateRoundScore() {
        var _this5 = this;
        var bankerSid = GameMsgHandler.getBankerSid();
        var scores = GameMsgHandler.getStateResult();
        var seats = GameMsgHandler.getSeats();
        _.each(seats, function(seat, sid) {
          var user = seat.user;
          if (!user) return;
          var isPlaying = GameMsgHandler.isPlayerPlaying(user.id);
          if (user && isPlaying) {
            if (!scores) return;
            $G.gCData.gComPlayers[GameMsgHandler.getCid(sid)].updateRoundScore(scores[sid].score.change, _this5.updateEvenyRound);
            scores[sid].score.change > 0 && bankerSid != sid && $G.gCData.gComPlayers[GameMsgHandler.getCid(sid)].showAnimation();
          }
        });
      },
      updateCardsAll: function updateCardsAll() {
        var _this6 = this;
        cc.log("@@@@ addCards ");
        _.each(GameMsgHandler.getSeats(), function(seat, sid) {
          if (!seat || !seat.user) return;
          var isPlaying = GameMsgHandler.isPlayerPlaying(seat.user.id);
          if (!isPlaying) return;
          cc.log("updateCardsAll :" + sid);
          var cid = GameMsgHandler.getCid(sid);
          var played = GameMsgHandler.getSeatStateBySid(sid, "played");
          var showed = GameMsgHandler.getSeatStateBySid(sid, "showed");
          GameMsgHandler.isPlayerShowHandOver() && (showed = true);
          $G.gCData.gComPlayers[cid].removeCards(1);
          $G.gCData.gComPlayers[cid].removeCards(2);
          var state = GameMsgHandler.getRoomStateType();
          if (state <= 1) return;
          if (played) {
            if (played && !showed) {
              cc.log("@@@@ 摆牛完成阶段");
              var _cards = GameMsgHandler.getCardsByCid(cid);
              if (4 == _cards || 5 == _cards) {
                var _temparr = [];
                _.times(_cards, function() {
                  _temparr.push({
                    suit: 0,
                    point: 0
                  });
                });
                _cards = _temparr;
              } else if (!_cards || 0 == _.size(_cards)) return;
              var com = $G.gCData.gComPlayers[cid];
              com.addCards(2, _cards, false, false);
              com.showOxResult(-1);
            } else if (showed) {
              cc.log("@@@@ 展示牛牛结果阶段");
              var _cards2 = GameMsgHandler.getCardsByCid(cid);
              var formation = GameMsgHandler.getCardTypeByCid(cid);
              _cards2 = formation.cards;
              if (!_cards2 || 0 == _.size(_cards2)) return;
              var _com = $G.gCData.gComPlayers[cid];
              _com.removeCards(2);
              _com.addCards(2, _cards2, true);
              var index = _this6._target._logic.getIndex(formation.type, formation.value);
              _com.showOxResult(index);
            }
          } else {
            cc.log("@@@@ 手牌阶段");
            var cards = GameMsgHandler.getCardsByCid(cid);
            if (4 == cards || 5 == cards) {
              var temparr = [];
              _.times(cards, function() {
                temparr.push({
                  suit: 0,
                  point: 0
                });
              });
              cards = temparr;
              $G.gCData.gComPlayers[cid].addCards(1, cards, false, false);
            } else {
              if (!cards || 0 == _.size(cards)) return;
              if (0 == cid) {
                $G.gCData.gComPlayers[0].addCards(1, cards, true, false);
                _this6.updateCardsChoosed();
              } else $G.gCData.gComPlayers[cid].addCards(1, cards, false, false);
            }
          }
        });
      },
      changeTable: function changeTable() {
        this.funcChangeTable || (this.funcChangeTable = _.throttle(function() {
          RoomServer.leaveRoom(function() {
            RoomServer.match(GameMsgHandler.getArea());
          });
        }, 1500, {
          trailing: false
        }));
        this.funcChangeTable();
      }
    });
    cc._RF.pop();
  }, {} ],
  FKNN_Logic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1386QpPAhIdb6E0adJMLa/", "FKNN_Logic");
    "use strict";
    var logic = module.exports;
    logic.OXType = {
      NONE: 0,
      NIU: 1,
      NN: 2,
      SHUNZI: 3,
      TONGHUA: 4,
      HULU: 5,
      WUXIAO: 6,
      WUHUA: 7,
      ZHADAN: 8,
      TONGHUASHUN: 9
    };
    logic.OXNames_Type = [ "无牛", "有牛", "牛牛", "顺子", "同花", "葫芦", "五小牛", "五花牛", "炸弹", "同花顺" ];
    logic.OXNames_Index = [ "无牛", "牛一", "牛二", "牛三", "牛四", "牛五", "牛六", "牛七", "牛八", "牛九", "牛牛", "顺子", "同花", "葫芦", "五小牛", "五花牛", "炸弹", "同花顺" ];
    logic._getValue = function(point) {
      return point > 10 ? 10 : point;
    };
    logic.getIndex = function(type, value) {
      if (0 === type) return 0;
      if (1 === type) return value;
      return type + 8;
    };
    logic.getOXNameByType = function(type) {
      return logic.OXNames_Type[type];
    };
    logic.getOXNameByIndex = function(index) {
      return logic.OXNames_Index[index];
    };
    logic.getOxType = function(cards) {
      if (!cards || 5 != _.size(cards)) return logic.OXType.NONE;
      if (logic._isFlushStraight(cards)) return logic.OXType.TONGHUASHUN;
      if (logic._isFour(cards)) return logic.OXType.ZHADAN;
      if (logic._isFiveFlowerOx(cards)) return logic.OXType.WUHUA;
      if (logic._isFiveSmall(cards)) return logic.OXType.WUXIAO;
      if (logic._isHulu(cards)) return logic.OXType.HULU;
      if (logic._isFlush(cards)) return logic.OXType.TONGHUA;
      if (logic._isStraight(cards)) return logic.OXType.SHUNZI;
      if (logic._isNN(cards)) return logic.OXType.NN;
      if (logic._isNiu(cards)) return logic.OXType.NIU;
      return logic.OXType.NONE;
    };
    logic.getThree = function(cards) {
      var len = _.size(cards);
      if (len > 5) return null;
      if (len < 3) return null;
      for (var i = 0; i < len - 2; i++) for (var j = i + 1; j < len - 1; j++) for (var k = j + 1; k < len; k++) {
        var sum = logic._getValue(cards[i].point) + logic._getValue(cards[j].point) + logic._getValue(cards[k].point);
        if (sum % 10 === 0) return [ i, j, k ];
      }
      return null;
    };
    logic.getTwo = function(three) {
      var ret = [];
      _.times(5, function(index) {
        index != three[0] && index != three[1] && index != three[2] && ret.push(index);
      });
      return ret;
    };
    logic._isNiu = function(cards) {
      return null != logic.getThree(cards);
    };
    logic._isNN = function(cards) {
      var three = logic.getThree(cards);
      if (null == three) return false;
      var two = logic.getTwo(three);
      var lastSum = logic._getValue(cards[two[0]].point) + logic._getValue(cards[two[1]].point);
      return lastSum % 10 === 0;
    };
    logic._isFiveSmall = function(cards) {
      var amount = 0;
      for (var i = 0; i < cards.length; i++) {
        var point = cards[i].point;
        if (point >= 5) return false;
        amount += point;
      }
      return amount <= 10;
    };
    logic._isFiveFlowerOx = function(cards) {
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.point < 11) return false;
      }
      return true;
    };
    logic._isFlushStraight = function(cards) {
      return logic._isStraight(cards) && logic._isFlush(cards);
    };
    logic._isFour = function(cards) {
      var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
      for (var i = 0; i < cards.length; i++) counts[cards[i].point - 1]++;
      for (var _i = 0, len = counts.length; _i < len; _i++) if (counts[_i] >= 4) return true;
      return false;
    };
    logic._isHulu = function(cards) {
      var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
      for (var i = 0; i < cards.length; i++) {
        var point = cards[i].point;
        counts[point - 1]++;
      }
      var isThree = false;
      var isTwo = false;
      for (var _i2 = 0, len = counts.length; _i2 < len; _i2++) {
        3 === counts[_i2] && (isThree = true);
        2 === counts[_i2] && (isTwo = true);
      }
      return isThree & isTwo;
    };
    logic._isFlush = function(cards) {
      var suit = cards[0].suit;
      for (var i = 1; i < cards.length; i++) if (suit != cards[i].suit) return false;
      return true;
    };
    logic._isStraight = function(cards) {
      var points = [ 0, 0, 0, 0, 0 ];
      for (var i = 0; i < cards.length; i++) points[i] = cards[i].point;
      points.sort(function(a, b) {
        return a < b ? 1 : -1;
      });
      if (13 == points[0] && 12 == points[1] && 11 == points[2] && 10 == points[3] && 1 == points[4]) return true;
      for (var _i3 = 0; _i3 < 4; _i3++) if (1 != Math.abs(points[_i3] - points[_i3 + 1])) return false;
      return true;
    };
    logic._isThree = function(cards) {
      var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
      for (var i = 0; i < cards.length; i++) {
        var point = cards[i].point;
        counts[point - 1]++;
      }
      for (var _i4 = 0, len = counts.length; _i4 < len; _i4++) if (counts[_i4] >= 3) return true;
      return false;
    };
    cc._RF.pop();
  }, {} ],
  FKNN_UIComs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7a8cHQ4cdEPK/LNANSSLzD", "FKNN_UIComs");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndAutoPosXIphoneXs: {
          default: [],
          type: cc.Node
        },
        ndAutoScaleIphoneXs: {
          default: [],
          type: cc.Node
        },
        ndFixBtnScales: {
          default: [],
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        _.each(this.ndFixBtnScales, function(nd) {
          nd.addComponent("ComFixBtnScale");
        });
        _.each(this.ndAutoPosXIphoneXs, function(nd) {
          nd.addComponent("ComAutoPosXIphoneX");
        });
        _.each(this.ndAutoScaleIphoneXs, function(nd) {
          nd.addComponent("ComAutoScaleIphoneX");
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  FKNN_UI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1302BpIv1A9YfRvj/bUeJi", "FKNN_UI");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pbActorSelf: cc.Prefab,
        pbActorLeft: cc.Prefab,
        ndActorPosContainer: cc.Node,
        lbRoomInfo: cc.Label,
        lbFeeMode: cc.Label,
        lbGameMode: cc.Label,
        lbBankerMode: cc.Label,
        lbGameTurn: cc.Label,
        lbBaseScore: cc.Label,
        lbRoomType: cc.Label,
        lbScoreMin: cc.Label,
        ndState: cc.Node,
        lbState: cc.Label,
        ndClock: cc.Node,
        ndBtns_Init: cc.Node,
        ndBtnsOfPlayer: {
          default: [],
          type: cc.Node
        },
        ndBtnSit: cc.Node,
        lbOxAuto: cc.Label,
        ndCardCalcContainer: cc.Node,
        ndMoreBtns: cc.Node,
        ndCardCountBtns: cc.Node,
        ndVictory: cc.Node,
        ndFailure: cc.Node,
        lbRoundCost: cc.Label,
        lbCountDown: cc.Label,
        lbMostWin: cc.Label,
        pbarBattery: cc.ProgressBar,
        ndResultAni: cc.Node,
        ndRoot: cc.Node,
        ndBtnChangeTable: cc.Node,
        ndBtnCopyRoomId: cc.Node,
        ndDealerSpeak: cc.Node,
        ndMic: cc.Node,
        ndClockContainer: cc.Node,
        ndVoiceStateContainer: cc.Node,
        ndGoldActionLayerContainer: cc.Node,
        spTableBg: cc.Sprite,
        spTableL: cc.Sprite,
        spTableR: cc.Sprite,
        spDealer: cc.Sprite,
        ndTime: cc.Node,
        lbRoomID: cc.Label,
        lbRoundNum: cc.Label,
        ndAskDisRoom: cc.Node,
        ndDisRoom: cc.Node,
        pbResult: cc.Prefab,
        ndResule: cc.Node,
        ndleave2: cc.Node
      },
      onLoad: function onLoad() {
        this._comScheduler = this.addComponent("ComScheduler");
        this.ndDealerSpeak.active = false;
        this.lbRoundCost.node.active = false;
        this.lbMostWin.node.active = false;
        this.scoreTime = .5;
        this.waitTime = 2;
        this.roundCostTime = 3;
        this.mostWinTime = 5;
        this.dealerSpeakTime = 5;
        this.roomRounNum = 0;
        this.ndMoreBtns.active = false;
        this.ndCardCountBtns.active = false;
        this.ndVictory.active = false;
        this.ndFailure.active = false;
        this.LeaveBtn = true;
        this.isiwns = this.ndVictory.parent;
        this.roomId();
      },
      initNodes: function initNodes() {
        this.ndTime.addComponent("ComTime");
        var nodeNames = [ "PbClock", "PbGoldActionLayer" ];
        var containers = [ this.ndClockContainer, this.ndGoldActionLayerContainer ];
        var self = this;
        _.each(nodeNames, function(name, i) {
          PBHelper.getNode(name, function(node) {
            containers[i].addChild(node);
            switch (i) {
             case 2:
              self.node.getComponent("GameScene_NN")._goldActionLayer = self.ndGoldActionLayerContainer.children[0].getComponent("PbGoldActionLayer");
            }
          }, false);
        });
      },
      initButton: function initButton() {
        this.ndleave2.active = false;
      },
      updateTable: function updateTable() {},
      showDealer: function showDealer() {
        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      },
      showDealerSpeak: function showDealerSpeak() {
        var _this = this;
        var index = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.ndDealerSpeak.active = true;
        var arr1 = index > 0 ? $G.gStrings.Dealer.Speaks[index - 1] : _.last($G.gStrings.Dealer.Speaks);
        var arr2 = _.last($G.gStrings.Dealer.Speaks);
        var random1 = _.random(0, 9);
        var arrSum = [];
        arrSum = random1 > 9 ? arr2 : arr1;
        var random = _.random(0, _.size(arrSum) - 1);
        this.ndDealerSpeak.getChildByName("speak").getComponent(cc.Label).string = arrSum[random];
        if (!this._comScheduler) return;
        this._comScheduler.once("showDealerSpeak", function() {
          _this.ndDealerSpeak.active = false;
        }, this.dealerSpeakTime);
      },
      showCountDown: function showCountDown() {
        var time = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var show = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        time <= 0 && (this.lbCountDown.node.active = false);
        if (show) {
          this.lbCountDown.node.active = show;
          this._initTime(Math.ceil(time));
        } else this.lbCountDown.node.active = show;
      },
      showMatching: function showMatching() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.lbCountDown.node.active = show;
        this.lbCountDown.string = "玩家匹配中...";
      },
      showResultTitle: function showResultTitle(isWin) {
        this.ndVictory.active = isWin;
        this.ndFailure.active = !isWin;
        this.isiwns.getComponent(cc.Animation).play();
      },
      showRoundCost: function showRoundCost() {
        var _this2 = this;
        this.lbRoundCost.node.active = true;
        this.lbRoundCost.string = "赢家将收取1%服务费";
        if (!this._comScheduler) return;
        this._comScheduler.once("showRoundCost", function() {
          _this2.lbRoundCost.node.active = false;
        }, this.roundCostTime);
      },
      showMostWin: function showMostWin() {
        var _this3 = this;
        this.lbMostWin.node.active = true;
        if (!this._comScheduler) return;
        this._comScheduler.once("showRoundCost", function() {
          _this3.lbMostWin.node.active = false;
        }, this.mostWinTime);
      },
      showRoomInfo: function showRoomInfo(infos) {
        this.lbBaseScore.string = infos[2];
      },
      showPlayerButton: function showPlayerButton() {
        var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        var showIndex = -1;
        switch (state) {
         case "wait":
          showIndex = 0;
          break;

         case "rob":
          showIndex = 1;
          break;

         case "bet":
          showIndex = 2;
          break;

         case "showOx":
          showIndex = 3;
        }
        _.each(this.ndBtnsOfPlayer, function(btn, index) {
          btn.active = showIndex === index;
        });
      },
      showInviteBtns: function showInviteBtns(show, isOwner, showInvite, showCopy) {},
      showSitBtn: function showSitBtn(show) {
        this.ndBtnSit.active = show;
      },
      setOxAutoText: function setOxAutoText() {
        var text = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "有牛";
        this.lbOxAuto.string = text;
      },
      showExitBtnMode: function showExitBtnMode() {
        var mode = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dismiss";
        this.ndBtns_Init;
      },
      showClock: function showClock() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        cc.log("@showClock" + time);
        time = parseInt(time);
        if (time <= 0) return;
        this.ndClockContainer.active = show;
        this.ndClockContainer.children[0] && (this.ndClockContainer.children[0].active = show);
        show && this.ndClockContainer.children[0] && this.ndClockContainer.children[0].getComponent("PbClock").initTime(time);
      },
      showArmGameStart: function showArmGameStart() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.armGameStart.node.active = show;
        if (show) {
          this.showRoundCost();
          this.armGameStart.armature().animation.play("gamestart", 1);
        }
      },
      setBtnsOfPlayState: function setBtnsOfPlayState() {
        var autoOx = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var canRub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var nodes = this.ndBtnsOfPlayer[3].children;
        nodes[0].active = !autoOx;
        nodes[1].active = !autoOx;
        nodes[2].active = autoOx;
        nodes[3].active = canRub;
      },
      update: function update(dt) {
        this.scheduleActive && this._updateLight(dt);
      },
      _changeActive: function _changeActive(node, active) {
        node.active != active && (node.active = active);
      },
      _initTime: function _initTime(time) {
        if (time <= 0) {
          this.lbCountDown.node.active = false;
          return;
        }
        time < 1 && (time = 0);
        this.timeOri = time;
        this.timeInt = time;
        this.timeFloat = time;
        this.lbCountDown.string = "游戏即将开始：" + Math.ceil(time);
        this.scheduleActive = true;
      },
      _updateTime: function _updateTime() {
        this.timeInt--;
        if (this.timeInt < 0) return;
        this.lbCountDown.string = "游戏即将开始：" + Math.ceil(this.timeInt);
      },
      _updateLight: function _updateLight(dt) {
        this.timeFloat -= dt;
        if (this.timeFloat < 0) {
          this._removeSchedule();
          this.lbCountDown.node.active = false;
          return;
        }
        var timeInt = Math.ceil(this.timeFloat);
        timeInt != this.timeInt && this._updateTime();
      },
      _removeSchedule: function _removeSchedule() {
        this.scheduleActive = false;
      },
      onDestroy: function onDestroy() {
        this._comScheduler.clearAll();
      },
      roomId: function roomId() {
        this.lbRoomID.string = "房号：" + GameMsgHandler.getData().id;
      },
      showRoundString: function showRoundString() {
        var round = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.lbRoundNum.string = "当前局数：" + round;
      },
      resultShow: function resultShow() {
        var pbResult = cc.instantiate(this.pbResult);
        this.ndResule.addChild(pbResult);
      }
    });
    cc._RF.pop();
  }, {} ],
  Folds: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bf63eiZEFMWbW03o8heqa5", "Folds");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _folds: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this.initView();
        this.initEventHandler();
        this.initAllFolds();
      },
      initView: function initView() {
        this._folds = {};
        var game = this.node.getChildByName("game");
        var sides = [ "myself", "right", "up", "left" ];
        for (var i = 0; i < sides.length; ++i) {
          var sideName = sides[i];
          var sideRoot = game.getChildByName(sideName);
          var folds = [];
          var foldRoot = sideRoot.getChildByName("folds");
          for (var j = 0; j < foldRoot.children.length; ++j) {
            var n = foldRoot.children[j];
            n.active = false;
            var sprite = n.getComponent(cc.Sprite);
            sprite.spriteFrame = null;
            folds.push(sprite);
          }
          this._folds[sideName] = folds;
        }
        this.hideAllFolds();
      },
      hideAllFolds: function hideAllFolds() {
        for (var k in this._folds) {
          var f = this._folds[i];
          for (var i in f) f[i].node.active = false;
        }
      },
      initEventHandler: function initEventHandler() {
        var self = this;
        this.node.on("game_begin", function(data) {
          self.initAllFolds();
        });
        this.node.on("game_sync", function(data) {
          self.initAllFolds();
        });
        this.node.on("game_chupai_notify", function(data) {
          self.initFolds(data.detail);
        });
        this.node.on("guo_notify", function(data) {
          self.initFolds(data.detail);
        });
      },
      initAllFolds: function initAllFolds() {
        var seats = cc.vv.gameNetMgr.seats;
        for (var i in seats) this.initFolds(seats[i]);
      },
      initFolds: function initFolds(seatData) {
        var folds = seatData.folds;
        if (null == folds) return;
        var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatData.seatindex);
        var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
        var side = cc.vv.mahjongmgr.getSide(localIndex);
        var foldsSprites = this._folds[side];
        for (var i = 0; i < foldsSprites.length; ++i) {
          var index = i;
          "right" != side && "up" != side || (index = foldsSprites.length - i - 1);
          var sprite = foldsSprites[index];
          sprite.node.active = true;
          this.setSpriteFrameByMJID(pre, sprite, folds[i]);
        }
        for (var i = folds.length; i < foldsSprites.length; ++i) {
          var index = i;
          "right" != side && "up" != side || (index = foldsSprites.length - i - 1);
          var sprite = foldsSprites[index];
          sprite.spriteFrame = null;
          sprite.node.active = false;
        }
      },
      setSpriteFrameByMJID: function setSpriteFrameByMJID(pre, sprite, mjid) {
        sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, mjid);
        sprite.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  FuncHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d50a85pDtlDkJLa1ZS1RaQ5", "FuncHelper");
    "use strict";
    function FuncHelper() {
      this.funcList = [];
    }
    module.exports = new FuncHelper();
    FuncHelper.prototype.addFunc = function(cb, checkCb) {
      if (!_.isFunction(cb) || !_.isFunction(checkCb)) {
        cc.log("不是函数");
        return;
      }
      this.funcList.push({
        cb: cb,
        checkCb: checkCb
      });
      this.execute();
    };
    FuncHelper.prototype.execute = function() {
      var _this = this;
      var len = _.size(this.funcList);
      cc.log("funcs :" + len);
      _.times(len, function(i) {
        var index = len - i - 1;
        var item = _this.funcList[index];
        if (item.checkCb()) {
          item.cb();
          cc.log(_this.funcList);
          _this.funcList.splice(index, 1);
          cc.log(_this.funcList);
        }
      });
    };
    cc._RF.pop();
  }, {} ],
  GameDownComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63d22pfH7NAqK1W7BFIolgV", "GameDownComponent");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        gameType: "",
        _update: null,
        _updateState: 0,
        _checked: false,
        _clicked: false,
        _isDownloading: false
      },
      onLoad: function onLoad() {
        this._ui = this.node.addComponent("ComChooseGameState");
        cc.log("检查全局状态：", $G.gCData.gameChecked);
        this._ui.showCouldDownload(!this._checkDownloaded());
        this._ui.showDownloading(false);
      },
      onButtonClicked: function onButtonClicked(event, customEventData) {
        cc.log("GameDown clicked:" + customEventData);
        if ($G.gCData.gIsGameDownloading) {
          MsgHelper.pushToast("游戏正在下载中，请稍候片刻");
          return;
        }
        this._clicked = true;
        cc.currentGame = customEventData;
        if (Configs.PACKAGE_MODE != Configs.PACKAGE_MODE_ALL && cc.sys.isNative) {
          this._checkGameState(false, false);
          this._checked = true;
        } else this.enterGame();
      },
      enterGame: function enterGame() {
        $G.gCData.gIsGameDownloading = false;
        $G.gCData.gameChecked[cc.currentGame] = true;
        GamesMgr.initGame(cc.currentGame);
        cc.director.loadScene("HallScene");
      },
      _checkDownloaded: function _checkDownloaded() {
        return !cc.sys.isNative || UpdateHelper.isDownloaded(this.gameType);
      },
      _checkGameState: function _checkGameState() {
        var showDlg = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var onlyCheckDownload = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ($G.gCData.gameChecked[cc.currentGame]) {
          cc.log("游戏已经更新过");
          this.enterGame();
          return;
        }
        if (0 != this._updateState) {
          cc.log("游戏已经check过");
          this.checkUpDateHandler(this._updateState);
          return;
        }
        if (cc.sys.isNative) {
          if (!$G.gCData.gameChecked[cc.currentGame]) {
            this._update = this.node.addComponent("UpdateComponent");
            this._update.initUI(this);
            this._update.initCheckUpDate(this.checkUpDateHandler.bind(this), this.gameType);
          }
          if (this._update) {
            cc.log("进入native判断流程");
            var isLoadedFlag = UpdateHelper.isDownloaded(this.gameType);
            if (isLoadedFlag) this.alreadyGameView(); else {
              cc.log("还未下过", this.gameType);
              this._checked && this.needDownLoadView(showDlg);
            }
          }
          if (!this._checked) {
            cc.log("开始第一次check");
            this._update.checkVersionUpdate();
          }
        } else this.alreadyGameView();
      },
      alreadyGameView: function alreadyGameView() {
        console.log("游戏已经下载过");
        $G.gCData.gIsGameDownloading = false;
        this._ui.showCouldDownload(false);
        this._ui.showDownloading(false);
        this._checked && this._clicked && this.enterGame();
      },
      needDownLoadView: function needDownLoadView() {
        var showDlg = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._ui.showCouldDownload(true);
        this._ui.showDownloading(false);
        if (showDlg) {
          var self = this;
          PBHelper.addNode("DlgGameNeedDownload", null, function(node) {
            node.getComponent("DlgGameNeedDownload").initCb(function() {
              $G.gCData.gIsGameDownloading = true;
              self._update.startVerionUpdate();
            });
          });
        }
      },
      downloadingView: function downloadingView() {
        var per = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        console.log("游戏下载中");
        this._ui.showCouldDownload(false);
        this._ui.showDownloading(true, per);
      },
      checkUpDateHandler: function checkUpDateHandler(updateState) {
        this._updateState = updateState;
        if (1 == updateState) this.needDownLoadView(); else if (2 == updateState) this.downloadingView(); else if (3 == updateState) this.alreadyGameView(); else if (4 == updateState) {
          var isLoadedFlag = UpdateHelper.isDownloaded(this.gameType);
          if (isLoadedFlag) {
            this.alreadyGameView();
            return;
          }
          cc.log("下载失败", this.gameType);
          this.needDownLoadView();
        }
      },
      clickDownHandler: function clickDownHandler(sender, data) {
        cc.log("开始下载:" + this._updateState);
        if (4 == this._updateState) {
          MsgHelper.pushToast("请确认游戏下载更新地址是否正确！" + this._update.m_verUrlPath);
          copyData(this._update.m_verUrlPath);
          return;
        }
        if (this._update && 1 == this._updateState && cc.sys.isNative) {
          this.downloadingView();
          this._updateState = 2;
          this._update.startVerionUpdate();
        }
        cc.sys.isNative || MsgHelper.pushToast("请前往手机或模拟器下载玩游戏！");
      }
    });
    cc._RF.pop();
  }, {} ],
  GameHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a742cyQFdJEx7JGBwDZSPUG", "GameHelper");
    "use strict";
    var helper = module.exports;
    helper.initHelper = function() {
      cc.game.on(cc.game.EVENT_SHOW, helper.gameShow);
      cc.game.on(cc.game.EVENT_HIDE, helper.gameHide);
      cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, helper.onKeyDown);
      return helper;
    };
    helper.gameShow = function() {
      cc.log("@@ $G SHOW");
      NotifyHelper.notify("NOTIFY_GAME_IN");
    };
    helper.gameHide = function() {
      cc.log("@@ $G HIDE");
      NotifyHelper.notify("NOTIFY_GAME_OUT");
    };
    helper.onKeyDown = function(event) {
      switch (event.keyCode) {
       case cc.KEY.back:
        NotifyHelper.notify("NOTIFY_KEY_BACK");
      }
    };
    helper.isIOSReviewing = function() {
      if (cc.sys.os === cc.sys.OS_IOS && HttpHandler.getConfig("IOSReviewBuild") == Configs.IOSReviewBuild) return HttpHandler.getConfig("IOSReviewing");
      return false;
    };
    helper.autoLogin = function() {
      var accountType = UserHandler.getData().type;
      var account = gLocalData.userInfo.account;
      var phone = gLocalData.userInfo.phone;
      var pass = gLocalData.userInfo.password;
      if (10 == accountType) {
        if (account && _.size(account) > 0) {
          UserServer.guestLogin(account);
          return;
        }
      } else if (phone && _.size(phone) > 0 && pass && _.size(pass) > 0) {
        UserServer.authLogin(gLocalData.userInfo.areaCode + phone, pass);
        return;
      }
      MsgHelper.pushToast("重连失败，请重新登录");
    };
    helper.onClipboard = function(msg) {
      var node = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      FuncHelper.addFunc(function() {
        var appname = StringHelper.pickString(msg.detail, 0, "【");
        if (appname == Configs.APPName) {
          var id = StringHelper.pickString(msg.detail, "号", "】");
          null != id && PBHelper.addNode("DlgJoinRoom2", node, function(dlgnode) {
            dlgnode.getComponent("DlgJoinRoom2").init(id);
            PlatformHelper.copyToClipboard("");
          });
        } else cc.log("@ not match");
      }, helper.isLogined);
    };
    helper.checkPastedRecordId = function(msg) {
      return StringHelper.pickStringAndCheck(msg, Configs.APPName, 0, "【", $G.gStrings.Common.code, "】");
    };
    helper.checkPastedRoomId = function(msg) {
      return StringHelper.pickStringAndCheck(msg, Configs.APPName, 0, "【", $G.gStrings.Common.number, "】");
    };
    helper.isLogined = function() {
      var isLogined = SocketHelper.isConnected() && $G.gCData.gIsLogined;
      return isLogined;
    };
    helper.showNotice = function() {
      NoticeServer.getNotice(function() {
        var msg = NoticeHandler.getPublicNotice();
        if (msg.length > 0) PBHelper.addNode("DlgPublicNotice", null, function(node) {
          node.getComponent("DlgPublicNotice").init(true);
        }); else {
          cc.log("showNotice");
          PBHelper.addNode("DlgNotice2");
        }
      });
    };
    helper.showNoticeAuto = function() {
      cc.log("##############" + $G.gCData.gNoticeAutoShowed);
      if (!$G.gCData.gNoticeAutoShowed) {
        $G.gCData.gNoticeAutoShowed = true;
        helper.showNotice();
      }
    };
    helper.showChargeGroup = function() {
      helper.showChargeHall();
    };
    helper.showChargeHall = function() {
      MsgHelper.pushToast($G.gStrings.Error.StillClose);
    };
    helper.loadLoginScene = function(cb) {
      cc.director.loadScene("LoginScene", cb);
    };
    helper.loadHallScene = function(cb) {
      var callfunc = function callfunc() {
        cb && cb();
      };
      cc.director.loadScene("hall", callfunc);
      return;
    };
    helper.loadChooseScene = function(cb) {
      cc.director.loadScene("hall", function() {
        cb && cb();
      });
    };
    helper.loadGameScene = function(cb) {
      if (Configs.PACKAGE_MODE == Configs.PACKAGE_MODE_ALL || !cc.sys.isNative) {
        var callfunc = function callfunc() {
          cb && cb();
        };
        switch (cc.currentGame) {
         case "dz":
          cc.director.loadScene("GameScene_DZ", callfunc);
          break;

         case "nn":
          cc.director.loadScene("GameScene_NN", callfunc);
          break;

         case "bjl":
          cc.director.loadScene("GameScene_BJL", callfunc);
          break;

         case "bcbm":
          cc.director.loadScene("GameScene_BCBM", callfunc);
          break;

         case "zjh":
          cc.director.loadScene("GameScene_ZJH", callfunc);
          break;

         case "lx9":
          cc.director.loadScene("GameScene_LX9", callfunc);
          break;

         case "yybf":
          cc.director.loadScene("GameScene_YYBF", callfunc);
          break;

         case "slwh":
          cc.director.loadScene("GameScene_SLWH", callfunc);
        }
        return;
      }
      UpdateHelper.init(cc.currentGame);
      var searchPaths = jsb.fileUtils.getSearchPaths();
      var storagePath = UpdateHelper.storagePath();
      cc.log("storagePath = ", storagePath);
      searchPaths.unshift(storagePath);
      jsb.fileUtils.setSearchPaths(searchPaths);
      helper.resortSearchPaths(cc.currentGame);
      require(storagePath + "/src/main.js");
    };
    helper.resortSearchPaths = function(topGameName) {
      var searchPaths = jsb.fileUtils.getSearchPaths();
      cc.log("[SearchPaths] 处理之前 = ", searchPaths);
      var newSearchPaths = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = searchPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var path = _step.value;
          if (path.indexOf(topGameName) > 0) {
            newSearchPaths.push(path);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return && _iterator.return();
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
      newSearchPaths.push(searchPaths.pop());
      jsb.fileUtils.setSearchPaths(newSearchPaths);
      cc.log("[SearchPaths] 处理之后 = ", newSearchPaths);
    }, helper.getPlayerCounts = function() {
      var max = 6;
      var dau = HttpHandler.getConfig("BaseDAU")[cc.currentGame];
      dau = dau || 1e3;
      var scaleDay = [ 1, .8, .6, .4, .2, .15, .1, .05, .1, .2, .3, .4, .5, .6, .65, .7, .75, .8, .85, .9, .95, 1, 1, 1 ];
      var scaleRoom = [ .2, .33, .28, .16, .05, .01 ];
      var hour = new Date().getHours();
      cc.log("hour:" + hour);
      var ret = [];
      _.times(max, function(i) {
        ret.push(Math.max(2, parseInt(dau * scaleRoom[i] * scaleDay[hour] * _.random(97, 103) * .01)));
      });
      cc.log(ret);
      return ret;
    };
    helper.getShareUrl = function() {
      var url = "http://" + _.random(999999).toString(32) + ".tgeili.com/up/reg.html";
      url += "?r=" + UserHandler.getId();
      cc.log(url);
      return url;
    };
    helper.getGameRulesUrl = function(game) {
      var host = HttpHandler.getConfig("HttpList")[0].host;
      var url = "http://" + host + "/up/gamerules.html";
      game && (url += "?name=" + game);
      cc.log(url);
      return url;
    };
    helper.addGameRulesView = function() {
      var isGame = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      var url = helper.getGameRulesUrl(isGame ? cc.currentGame : null);
      PBHelper.addNode("DlgWebView", null, function(node) {
        node.getComponent("DlgWebView").init(url);
      });
    };
    cc._RF.pop();
  }, {} ],
  GameLogic_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6f37RE9xFE35c3Q44A5n1v", "GameLogic_NN");
    "use strict";
    var logic = module.exports;
    logic.leaveRoom = function() {
      var isDismissRoom = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      GameHelper.loadHallScene(function() {
        isDismissRoom && MsgHelper.pushToast($G.gStrings.CommonTips.BreakRoom);
      });
    };
    cc._RF.pop();
  }, {} ],
  GameMsgHandler_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c91dvjLmNOlIAExtB0EIa4", "GameMsgHandler_NN");
    "use strict";
    var handler = module.exports;
    handler.setData = function(msg) {
      $G.gSData.gRoom = msg;
      handler.updateSeatIds();
      handler.setRoomState(msg.state);
    };
    handler.getData = function() {
      return $G.gSData.gRoom;
    };
    handler.resetData = function() {
      handler.updateSeatIds();
      _.each($G.gSData.gRoom.seats, function(seat) {
        seat.banker = null;
        seat.bid = null;
        seat.played = false;
        seat.showed = false;
      });
    };
    handler.resetDataHands = function() {
      _.each($G.gSData.gRoom.seats, function(seat) {
        seat.hand = {};
        seat.hand.cards = seat.user ? UserHandler.getId() == seat.user.id ? [] : 0 : null;
        seat.hand.formation = null;
      });
    };
    handler.clearData = function() {
      $G.gSData.gRoom = null;
    };
    handler.getRoomInfoNamesByData = function(data) {
      var roomId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return {
        id: roomId || data.id,
        baseScore: data.baseScore ? data.baseScore : 1
      };
    };
    handler.getRoomParamsOneLineByNames = function(data) {
      var sign = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "、";
      var content = "" + data.payMode + sign + data.baseScore + "分" + sign + data.rounds + "局" + sign + data.timesMode + sign + data.bankerMode;
      return content;
    };
    handler.getRoomInfoNames = function() {
      var data = handler.getData();
      return handler.getRoomInfoNamesByData(data);
    };
    handler.getRoomInfos = function() {
      var names = handler.getRoomInfoNames();
      return [ "房号：" + names.id, "" + names.payMode, "底注：" + names.baseScore, "" + names.timesMode, "" + names.bankerMode, handler.getRoundInfo() ];
    };
    handler.getRoundInfo = function() {
      return "局数：" + handler.getCurrentRound() + "/" + handler.getRoundLimit();
    };
    handler.getCurrentRound = function() {
      return handler.getData().state.round;
    };
    handler.getRoundLimit = function() {
      return handler.getData().rounds;
    };
    handler.isGameOver = function() {
      return $G.gCData.gRoomLeaved || handler.getCurrentRound() === handler.getData().rounds;
    };
    handler.isRoomOwner = function() {
      if (null == handler.getData()) return false;
      return handler.getData().owner === UserHandler.getId();
    };
    handler.setRoomState = function(state) {
      handler.getData().state = state;
    };
    handler.getRoomState = function() {
      return handler.getData().state;
    };
    handler.getRoomStateType = function() {
      return handler.getRoomState().type;
    };
    handler.setUserSitting = function(sit) {
      _.each(handler.getSeats(), function(seat) {
        seat.id == UserHandler.getId() && (seat.sitting = sit);
      });
      cc.log(handler.getSeats());
    };
    handler.getArea = function() {
      return handler.getData().area ? handler.getData().area : 1;
    };
    handler.setArea = function(area) {
      handler.getData().area = area;
    };
    handler.couldSit = function() {
      var count = 0;
      var isSitAndWait = false;
      _.each(handler.getSeats(), function(seat) {
        if (seat.user) {
          count++;
          seat.user.id == UserHandler.getId() && (isSitAndWait = true);
        }
      });
      if (isSitAndWait) return false;
      return true;
    };
    handler.isSelfPlaying = function() {
      return handler.isPlayerPlaying(UserHandler.getId());
    };
    handler.isPlayerPlaying = function(id) {
      var isPlaying = false;
      _.each(handler.getSeats(), function(seat, sid) {
        seat.user && seat.user.id == id && (isPlaying = null != seat.hand);
      });
      return isPlaying;
    };
    handler.getSeats = function() {
      return handler.getData().seats;
    };
    handler.getSeatBySid = function(sid) {
      return handler.getSeats()[sid];
    };
    handler.getSeatByCid = function(cid) {
      return handler.getSeatBySid(handler.getSid(cid));
    };
    handler.setSeatBySid = function(sid, seat) {
      handler.getData().seats[sid] = seat;
      cc.log(handler.getData());
    };
    handler.getSeatStateBySid = function(sid, key) {
      return handler.getSeatBySid(sid)[key];
    };
    handler.getSeatStateByCid = function(cid, key) {
      return handler.getSeatStateBySid(handler.getSid(cid), key);
    };
    handler.setSeatStateBySid = function(sid, key, value) {
      handler.getSeatBySid(sid)[key] = value;
    };
    handler.getUserBySid = function(sid) {
      if (!handler.getSeats()) return null;
      if (!handler.getSeatBySid(sid)) return null;
      if (!handler.getSeatBySid(sid).user) return null;
      return handler.getSeatBySid(sid).user;
    };
    handler.getUserByCid = function(cid) {
      return handler.getUserBySid(handler.getSid(cid));
    };
    handler.setUserBySid = function(sid, user) {
      handler.getSeatBySid(sid).user = user;
    };
    handler.getUserStateBySid = function(sid, key) {
      return handler.getUserBySid(sid)[key];
    };
    handler.setUserStateBySid = function(sid, key, value) {
      handler.getUserBySid(sid)[key] = value;
    };
    handler.getBankerSid = function() {
      return handler.getData().state.banker;
    };
    handler.getHandBySid = function(sid) {
      return handler.getSeatBySid(sid).hand;
    };
    handler.getCardsByCid = function(cid) {
      return handler.getHandBySid(handler.getSid(cid)).cards;
    };
    handler.setCardsBySid = function(sid, cards) {
      handler.getHandBySid(sid).cards = cards;
    };
    handler.pushCardsBySid = function(sid, cards) {
      handler.getHandBySid(sid).cards = handler.getHandBySid(sid).cards.concat(cards);
    };
    handler.getCardTypeBySid = function(sid) {
      return handler.getHandBySid(sid).formation;
    };
    handler.getCardTypeByCid = function(cid) {
      return handler.getCardTypeBySid(handler.getSid(cid));
    };
    handler.setCardTypeBySid = function(sid, formation) {
      handler.getHandBySid(sid).formation = formation;
    };
    handler.getDismiss = function() {
      return handler.getData().dismiss;
    };
    handler.setDismiss = function(dis) {
      handler.getData().dismiss = dis;
    };
    handler.voteDismiss = function(sid, vote) {
      handler.getDismiss().voters[sid] = vote;
    };
    handler.updateSeatIds = function() {
      $G.gSData.gSids = [];
      $G.gSData.gCids = [];
      var mySid = 0;
      var len = _.size(handler.getSeats());
      for (var i = 0; i < len; i++) {
        if (!handler.getSeatBySid(i)) continue;
        if (!handler.getUserBySid(i)) continue;
        if (handler.getUserBySid(i).id === UserHandler.getId()) {
          mySid = i;
          break;
        }
      }
      _.times(len, function(i) {
        $G.gSData.gSids[i] = (mySid + i) % len;
        $G.gSData.gCids[(mySid + i) % len] = i;
      });
    };
    handler.getSid = function(cid) {
      return $G.gSData.gSids[cid];
    };
    handler.getCid = function(sid) {
      return $G.gSData.gCids[sid];
    };
    handler.getStateResult = function() {
      return handler.getData().result ? handler.getData().result.seats : null;
    };
    handler.setStateResult = function(result) {
      handler.getData().result = result;
    };
    handler.setRoomResult = function(roomSult) {
      handler.getData().roomSult = roomSult;
    };
    handler.getRoomResult = function() {
      return handler.getData().roomSult;
    };
    handler.getRoomOwner = function() {
      return handler.getData().owner;
    };
    handler.setRoomCost = function(costs) {
      handler.getData().roomCosts = costs;
    };
    handler.getRoomCost = function() {
      return handler.getData().roomCosts;
    };
    handler.isPlayerShowHandOver = function() {
      var bPlayerShowHandOver = false;
      bPlayerShowHandOver = _.find(handler.getSeats(), function(seat, sid) {
        if (seat && seat.user) {
          var isPlaying = handler.isPlayerPlaying(seat.user.id);
          if (isPlaying) {
            var _bPlayerShowHandOver = handler.getSeatStateBySid(sid, "played");
            return false == _bPlayerShowHandOver;
          }
        }
      });
      return !bPlayerShowHandOver;
    };
    handler.canRubCard = function() {
      return handler.getData().canPlay;
    };
    cc._RF.pop();
  }, {} ],
  GameMsgLogic_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "641eds3ueZB3IvfEdBkOUtq", "GameMsgLogic_NN");
    "use strict";
    var handler = module.exports;
    handler.onHandleMsg_Data = function(action) {
      var OnAction = ServerRouters.OnAction_FKNN;
      var name = action.name;
      cc.log("@FKNN :【 " + name + "】" + TimeHelper.getCTime());
      cc.log(action.msg);
      if (name === OnAction.PLAYER_ENTER_ROOM) {
        GameMsgHandler.setData(action.msg);
        $G.gCData.gRoomLeaved = false;
        return;
      }
      if (name === OnAction.LEAVE_ROOM) {
        UserHandler.getData()["room"] = null;
        $G.gCData.gRoomLeaved = true;
        7 == action.msg;
        return;
      }
      if (name === OnAction.DISMISS_START) {
        GameMsgHandler.setDismiss(action.msg);
        cc.log("【解散的状态】", GameMsgHandler.getDismiss(action.msg));
        return;
      }
      if (name === OnAction.DISMISS_VOTE) return;
      if (name === OnAction.DISMISS_STOP) return;
      if (name === OnAction.CHANGE_ROOM) return;
      if (name === OnAction.ROOM_CHANGE_STATE) {
        GameMsgHandler.setRoomState(action.msg);
        var type = action.msg.type;
        switch (type) {
         case 1:
          GameMsgHandler.resetData();
        }
        return;
      }
      if (name === OnAction.RoomStateTimerStart) {
        GameMsgHandler.getData().state.timer = action.msg;
        return;
      }
      if (name === OnAction.RoomStateTimerStop) {
        GameMsgHandler.getData().state.timer = action.msg;
        return;
      }
      if (name === OnAction.PLAYER_HOST) {
        GameMsgHandler.getSeatBySid(action.msg.seat).hosting = action.msg.hosting;
        return;
      }
      if (name === OnAction.ADD_PLAYER) {
        GameMsgHandler.setSeatBySid(action.msg.index, action.msg);
        return;
      }
      if (name === OnAction.REMOVE_PLAYER) {
        GameMsgHandler.setUserBySid(action.msg, null);
        return;
      }
      if (name === OnAction.PLAYER_READY) {
        GameMsgHandler.setSeatStateBySid(action.msg.seat, "ready", action.msg.ready);
        return;
      }
      if (name === OnAction.PLAYER_BANKER) {
        GameMsgHandler.setSeatStateBySid(action.msg.seat, "banker", action.msg.banker);
        return;
      }
      if (name === OnAction.ROOM_BANKER) {
        GameMsgHandler.getData().state.banker = action.msg;
        return;
      }
      if (name === OnAction.PLAYER_BID) {
        GameMsgHandler.setSeatStateBySid(action.msg.seat, "bid", action.msg.bid);
        return;
      }
      if (name === OnAction.PLAYER_ADD_CARDS) {
        GameMsgHandler.pushCardsBySid(GameMsgHandler.getSid(0), action.msg);
        return;
      }
      if (name === OnAction.PLAYER_PLAY) {
        GameMsgHandler.setSeatStateBySid(action.msg.seat, "played", action.msg.played);
        return;
      }
      if (name === OnAction.PLAYER_SHOW_HAND) {
        var formations = action.msg;
        _.each(formations, function(formation, sid) {
          if (formation) {
            GameMsgHandler.setSeatStateBySid(sid, "showed", true);
            GameMsgHandler.setCardTypeBySid(sid, formation);
            GameMsgHandler.setCardsBySid(sid, formation.cards);
          }
        });
        return;
      }
      if (name === OnAction.ROOM_RESULT) {
        cc.log("【大结算存入的数据】", action.msg);
        GameMsgHandler.setRoomResult(action.msg);
        return;
      }
      if (name === OnAction.RoundResult) {
        GameMsgHandler.setStateResult(action.msg);
        return;
      }
      if (name === OnAction.ROOM_CHAT) {
        ChatHandler.addChatMessage(action.msg.seat, action.msg.type, action.msg.content);
        return;
      }
      if (name === OnAction.PLAYER_SIT) {
        if (false == action.msg) return;
        GameMsgHandler.setUserSitting(action.msg);
        return;
      }
      if (name === OnAction.ROUND_BEGIN) {
        GameMsgHandler.getData().state.round = action.msg;
        GameMsgHandler.resetDataHands();
        return;
      }
      if (name === OnAction.PlayerScore) {
        _.each(GameMsgHandler.getData().seats, function(seat, sid) {
          if (null == seat.user) return;
          seat.user.id == action.msg.id && (seat.user.score = action.msg.score);
        });
        return;
      }
    };
    cc._RF.pop();
  }, {} ],
  GameMsgServer_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ff073+AqtJsZYNeIvmPraV", "GameMsgServer_NN");
    "use strict";
    var server = module.exports;
    server._send = function(route, param) {
      var cb1 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var cbError = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var showLoading = arguments[4];
      SocketHelper.request(route, param, cb1, function() {}, false);
    };
    server.sit = function(cb) {
      SocketHelper.request(ServerRouters.RqGame_FKNN.sit, {}, cb, false);
    };
    server.ready = function() {
      server._send(ServerRouters.RqGame_FKNN.ready, {
        name: ServerRouters.OnAction_FKNN.PLAYER_READY
      });
    };
    server.callBanker = function(bankerValue) {
      server._send(ServerRouters.RqGame_FKNN.callBanker, {
        name: ServerRouters.OnAction_FKNN.PLAYER_BANKER,
        banker: bankerValue
      });
    };
    server.bet = function(bid) {
      server._send(ServerRouters.RqGame_FKNN.bet, {
        name: ServerRouters.OnAction_FKNN.PLAYER_BID,
        bid: bid
      });
    };
    server.finish = function() {
      server._send(ServerRouters.RqGame_FKNN.play, {
        name: ServerRouters.OnAction_FKNN.PLAYER_PLAY
      });
    };
    server.play = function() {
      server._send(ServerRouters.RqGame_FKNN.play, {
        name: ServerRouters.OnAction_FKNN.PLAYER_SHOW_HAND
      });
    };
    server.chat = function(type, content) {
      this.funcChat || (this.funcChat = _.throttle(function(type, content) {
        server._send(ServerRouters.RqGame_FKNN.chat, {
          name: ServerRouters.OnAction_FKNN.ROOM_CHAT,
          type: type,
          content: content
        });
      }, 2e3, {
        trailing: false
      }));
      this.funcChat(type, content);
    };
    cc._RF.pop();
  }, {} ],
  GameNetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9545659TARKZLMoHGqXoY2N", "GameNetMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        dataEventHandler: null,
        roomId: null,
        maxNumOfGames: 0,
        numOfGames: 0,
        numOfMJ: 0,
        seatIndex: -1,
        seats: null,
        turn: -1,
        button: -1,
        dingque: -1,
        chupai: -1,
        isDingQueing: false,
        isHuanSanZhang: false,
        gamestate: "",
        isOver: false,
        dissoveData: null
      },
      reset: function reset() {
        this.turn = -1;
        this.chupai = -1, this.dingque = -1;
        this.button = -1;
        this.gamestate = "";
        this.dingque = -1;
        this.isDingQueing = false;
        this.isHuanSanZhang = false;
        this.curaction = null;
        for (var i = 0; i < this.seats.length; ++i) {
          this.seats[i].holds = [];
          this.seats[i].folds = [];
          this.seats[i].pengs = [];
          this.seats[i].angangs = [];
          this.seats[i].diangangs = [];
          this.seats[i].wangangs = [];
          this.seats[i].dingque = -1;
          this.seats[i].ready = false;
          this.seats[i].hued = false;
          this.seats[i].huanpais = null;
          this.huanpaimethod = -1;
        }
      },
      clear: function clear() {
        this.dataEventHandler = null;
        if (null == this.isOver) {
          this.seats = null;
          this.roomId = null;
          this.maxNumOfGames = 0;
          this.numOfGames = 0;
        }
      },
      dispatchEvent: function dispatchEvent(event, data) {
        this.dataEventHandler && this.dataEventHandler.emit(event, data);
      },
      getSeatIndexByID: function getSeatIndexByID(userId) {
        for (var i = 0; i < this.seats.length; ++i) {
          var s = this.seats[i];
          if (s.userid == userId) return i;
        }
        return -1;
      },
      isOwner: function isOwner() {
        return 0 == this.seatIndex;
      },
      getSeatByID: function getSeatByID(userId) {
        var seatIndex = this.getSeatIndexByID(userId);
        var seat = this.seats[seatIndex];
        return seat;
      },
      getSelfData: function getSelfData() {
        return this.seats[this.seatIndex];
      },
      getLocalIndex: function getLocalIndex(index) {
        var ret = (index - this.seatIndex + 4) % 4;
        return ret;
      },
      prepareReplay: function prepareReplay(roomInfo, detailOfGame) {
        this.roomId = roomInfo.id;
        this.seats = roomInfo.seats;
        this.turn = detailOfGame.base_info.button;
        var baseInfo = detailOfGame.base_info;
        for (var i = 0; i < this.seats.length; ++i) {
          var s = this.seats[i];
          s.seatindex = i;
          s.score = null;
          s.holds = baseInfo.game_seats[i];
          s.pengs = [];
          s.angangs = [];
          s.diangangs = [];
          s.wangangs = [];
          s.folds = [];
          console.log(s);
          cc.vv.userMgr.userId == s.userid && (this.seatIndex = i);
        }
        this.conf = {
          type: baseInfo.type
        };
        null == this.conf.type && "xzdd" == this.conf.type;
      },
      getWanfa: function getWanfa() {
        var conf = this.conf;
        if (conf && null != conf.maxGames && null != conf.maxFan) {
          var strArr = [];
          strArr.push(conf.maxGames + "局");
          strArr.push(conf.maxFan + "番封顶");
          conf.hsz && strArr.push("换三张");
          1 == conf.zimo ? strArr.push("自摸加番") : strArr.push("自摸加底");
          conf.jiangdui && strArr.push("将对");
          1 == conf.dianganghua ? strArr.push("点杠花(自摸)") : strArr.push("点杠花(放炮)");
          conf.menqing && strArr.push("门清、中张");
          conf.tiandihu && strArr.push("天地胡");
          return strArr.join(" ");
        }
        return "";
      },
      initHandlers: function initHandlers() {
        var self = this;
        return;
      },
      doGuo: function doGuo(seatIndex, pai) {
        var seatData = this.seats[seatIndex];
        var folds = seatData.folds;
        folds.push(pai);
        this.dispatchEvent("guo_notify", seatData);
      },
      doMopai: function doMopai(seatIndex, pai) {
        var seatData = this.seats[seatIndex];
        if (seatData.holds) {
          seatData.holds.push(pai);
          this.dispatchEvent("game_mopai", {
            seatIndex: seatIndex,
            pai: pai
          });
        }
      },
      doChupai: function doChupai(seatIndex, pai) {
        this.chupai = pai;
        var seatData = this.seats[seatIndex];
        if (seatData.holds) {
          var idx = seatData.holds.indexOf(pai);
          seatData.holds.splice(idx, 1);
        }
        this.dispatchEvent("game_chupai_notify", {
          seatData: seatData,
          pai: pai
        });
      },
      doPeng: function doPeng(seatIndex, pai) {
        var seatData = this.seats[seatIndex];
        if (seatData.holds) for (var i = 0; i < 2; ++i) {
          var idx = seatData.holds.indexOf(pai);
          seatData.holds.splice(idx, 1);
        }
        var pengs = seatData.pengs;
        pengs.push(pai);
        this.dispatchEvent("peng_notify", seatData);
      },
      getGangType: function getGangType(seatData, pai) {
        if (-1 != seatData.pengs.indexOf(pai)) return "wangang";
        var cnt = 0;
        for (var i = 0; i < seatData.holds.length; ++i) seatData.holds[i] == pai && cnt++;
        return 3 == cnt ? "diangang" : "angang";
      },
      doGang: function doGang(seatIndex, pai, gangtype) {
        var seatData = this.seats[seatIndex];
        gangtype || (gangtype = this.getGangType(seatData, pai));
        if ("wangang" == gangtype) {
          if (-1 != seatData.pengs.indexOf(pai)) {
            var idx = seatData.pengs.indexOf(pai);
            -1 != idx && seatData.pengs.splice(idx, 1);
          }
          seatData.wangangs.push(pai);
        }
        if (seatData.holds) for (var i = 0; i <= 4; ++i) {
          var idx = seatData.holds.indexOf(pai);
          if (-1 == idx) break;
          seatData.holds.splice(idx, 1);
        }
        "angang" == gangtype ? seatData.angangs.push(pai) : "diangang" == gangtype && seatData.diangangs.push(pai);
        this.dispatchEvent("gang_notify", {
          seatData: seatData,
          gangtype: gangtype
        });
      },
      doHu: function doHu(data) {
        this.dispatchEvent("hupai", data);
      },
      doTurnChange: function doTurnChange(si) {
        var data = {
          last: this.turn,
          turn: si
        };
        this.turn = si;
        this.dispatchEvent("game_chupai", data);
      },
      connectGameServer: function connectGameServer(data) {
        this.dissoveData = null;
        cc.vv.net.ip = data.ip + ":" + data.port;
        console.log(cc.vv.net.ip);
        var self = this;
        var onConnectOK = function onConnectOK() {
          console.log("onConnectOK");
          var sd = {
            token: data.token,
            roomid: data.roomid,
            time: data.time,
            sign: data.sign
          };
          cc.vv.net.send("login", sd);
        };
        var onConnectFailed = function onConnectFailed() {
          console.log("failed.");
          cc.vv.wc.hide();
        };
        cc.vv.wc.show("正在进入房间");
        cc.vv.net.connect(onConnectOK, onConnectFailed);
      }
    });
    cc._RF.pop();
  }, {} ],
  GameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "facfdljnx5F+rFDAq5Qbmqa", "GameOver");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _gameover: null,
        _gameresult: null,
        _seats: [],
        _isGameEnd: false,
        _pingju: null,
        _win: null,
        _lose: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        if (null == cc.vv.gameNetMgr.conf) return;
        "xzdd" == cc.vv.gameNetMgr.conf.type ? this._gameover = this.node.getChildByName("game_over") : this._gameover = this.node.getChildByName("game_over_xlch");
        this._gameover.active = false;
        this._pingju = this._gameover.getChildByName("pingju");
        this._win = this._gameover.getChildByName("win");
        this._lose = this._gameover.getChildByName("lose");
        this._gameresult = this.node.getChildByName("game_result");
        var wanfa = this._gameover.getChildByName("wanfa").getComponent(cc.Label);
        wanfa.string = cc.vv.gameNetMgr.getWanfa();
        var listRoot = this._gameover.getChildByName("result_list");
        for (var i = 1; i <= 4; ++i) {
          var s = "s" + i;
          var sn = listRoot.getChildByName(s);
          var viewdata = {};
          viewdata.username = sn.getChildByName("username").getComponent(cc.Label);
          viewdata.reason = sn.getChildByName("reason").getComponent(cc.Label);
          var f = sn.getChildByName("fan");
          null != f && (viewdata.fan = f.getComponent(cc.Label));
          viewdata.score = sn.getChildByName("score").getComponent(cc.Label);
          viewdata.hu = sn.getChildByName("hu");
          viewdata.mahjongs = sn.getChildByName("pai");
          viewdata.zhuang = sn.getChildByName("zhuang");
          viewdata.hupai = sn.getChildByName("hupai");
          viewdata._pengandgang = [];
          this._seats.push(viewdata);
        }
        var self = this;
        this.node.on("game_over", function(data) {
          self.onGameOver(data.detail);
        });
        this.node.on("game_end", function(data) {
          self._isGameEnd = true;
        });
      },
      onGameOver: function onGameOver(data) {
        "xzdd" == cc.vv.gameNetMgr.conf.type ? this.onGameOver_XZDD(data) : this.onGameOver_XLCH(data);
      },
      onGameOver_XZDD: function onGameOver_XZDD(data) {
        console.log(data);
        if (0 == data.length) {
          this._gameresult.active = true;
          return;
        }
        this._gameover.active = true;
        this._pingju.active = false;
        this._win.active = false;
        this._lose.active = false;
        var myscore = data[cc.vv.gameNetMgr.seatIndex].score;
        myscore > 0 ? this._win.active = true : myscore < 0 ? this._lose.active = true : this._pingju.active = true;
        for (var i = 0; i < 4; ++i) {
          var seatView = this._seats[i];
          var userData = data[i];
          var hued = false;
          var numOfGangs = userData.angangs.length + userData.wangangs.length + userData.diangangs.length;
          var numOfGen = userData.numofgen;
          var actionArr = [];
          var is7pairs = false;
          var ischadajiao = false;
          for (var j = 0; j < userData.actions.length; ++j) {
            var ac = userData.actions[j];
            if ("zimo" == ac.type || "ganghua" == ac.type || "dianganghua" == ac.type || "hu" == ac.type || "gangpaohu" == ac.type || "qiangganghu" == ac.type || "chadajiao" == ac.type) {
              "7pairs" == userData.pattern ? actionArr.push("七对") : "l7pairs" == userData.pattern ? actionArr.push("龙七对") : "j7pairs" == userData.pattern ? actionArr.push("将七对") : "duidui" == userData.pattern ? actionArr.push("碰碰胡") : "jiangdui" == userData.pattern && actionArr.push("将对");
              "zimo" == ac.type ? actionArr.push("自摸") : "ganghua" == ac.type ? actionArr.push("杠上花") : "dianganghua" == ac.type ? actionArr.push("点杠花") : "gangpaohu" == ac.type ? actionArr.push("杠炮胡") : "qiangganghu" == ac.type ? actionArr.push("抢杠胡") : "chadajiao" == ac.type && (ischadajiao = true);
              hued = true;
            } else "fangpao" == ac.type ? actionArr.push("放炮") : "angang" == ac.type ? actionArr.push("暗杠") : "diangang" == ac.type ? actionArr.push("明杠") : "wangang" == ac.type ? actionArr.push("弯杠") : "fanggang" == ac.type ? actionArr.push("放杠") : "zhuanshougang" == ac.type ? actionArr.push("转手杠") : "beiqianggang" == ac.type ? actionArr.push("被抢杠") : "beichadajiao" == ac.type && actionArr.push("被查叫");
          }
          if (hued) {
            userData.qingyise && actionArr.push("清一色");
            userData.menqing && actionArr.push("门清");
            userData.zhongzhang && actionArr.push("中张");
            userData.jingouhu && actionArr.push("金钩胡");
            userData.haidihu && actionArr.push("海底胡");
            userData.tianhu && actionArr.push("天胡");
            userData.dihu && actionArr.push("地胡");
            numOfGen > 0 && actionArr.push("根x" + numOfGen);
            ischadajiao && actionArr.push("查大叫");
          }
          for (var o = 0; o < 3; ++o) seatView.hu.children[o].active = false;
          userData.huorder >= 0 && (seatView.hu.children[userData.huorder].active = true);
          seatView.username.string = cc.vv.gameNetMgr.seats[i].name;
          seatView.zhuang.active = cc.vv.gameNetMgr.button == i;
          seatView.reason.string = actionArr.join("、");
          var fan = 0;
          hued && (fan = userData.fan);
          seatView.fan.string = fan + "番";
          userData.score > 0 ? seatView.score.string = "+" + userData.score : seatView.score.string = userData.score;
          var hupai = -1;
          hued && (hupai = userData.holds.pop());
          cc.vv.mahjongmgr.sortMJ(userData.holds, userData.dingque);
          hued && userData.holds.push(hupai);
          for (var k = 0; k < seatView.mahjongs.childrenCount; ++k) {
            var n = seatView.mahjongs.children[k];
            n.active = false;
          }
          var lackingNum = 3 * (userData.pengs.length + numOfGangs);
          for (var k = 0; k < userData.holds.length; ++k) {
            var pai = userData.holds[k];
            var n = seatView.mahjongs.children[k + lackingNum];
            n.active = true;
            var sprite = n.getComponent(cc.Sprite);
            sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", pai);
          }
          for (var k = 0; k < seatView._pengandgang.length; ++k) seatView._pengandgang[k].active = false;
          var index = 0;
          var gangs = userData.angangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "angang");
            index++;
          }
          var gangs = userData.diangangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "diangang");
            index++;
          }
          var gangs = userData.wangangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "wangang");
            index++;
          }
          var pengs = userData.pengs;
          if (pengs) for (var k = 0; k < pengs.length; ++k) {
            var mjid = pengs[k];
            this.initPengAndGangs(seatView, index, mjid, "peng");
            index++;
          }
        }
      },
      onGameOver_XLCH: function onGameOver_XLCH(data) {
        console.log(data);
        if (0 == data.length) {
          this._gameresult.active = true;
          return;
        }
        this._gameover.active = true;
        this._pingju.active = false;
        this._win.active = false;
        this._lose.active = false;
        var myscore = data[cc.vv.gameNetMgr.seatIndex].score;
        myscore > 0 ? this._win.active = true : myscore < 0 ? this._lose.active = true : this._pingju.active = true;
        for (var i = 0; i < 4; ++i) {
          var seatView = this._seats[i];
          var userData = data[i];
          var hued = false;
          var actionArr = [];
          var is7pairs = false;
          var ischadajiao = false;
          var hupaiRoot = seatView.hupai;
          for (var j = 0; j < hupaiRoot.children.length; ++j) hupaiRoot.children[j].active = false;
          var hi = 0;
          for (var j = 0; j < userData.huinfo.length; ++j) {
            var info = userData.huinfo[j];
            hued = hued || info.ishupai;
            if (info.ishupai && hi < hupaiRoot.children.length) {
              var hupaiView = hupaiRoot.children[hi];
              hupaiView.active = true;
              hupaiView.getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("B_", info.pai);
              hi++;
            }
            var str = "";
            var sep = "";
            var dataseat = userData;
            if (info.ishupai) "hu" == info.action ? str = "接炮胡" : "zimo" == info.action ? str = "自摸" : "ganghua" == info.action ? str = "杠上花" : "dianganghua" == info.action ? str = "点杠花" : "gangpaohu" == info.action ? str = "杠炮胡" : "qiangganghu" == info.action ? str = "抢杠胡" : "chadajiao" == info.action && (str = "查大叫"); else {
              str = "fangpao" == info.action ? "放炮" : "gangpao" == info.action ? "杠上炮" : "beiqianggang" == info.action ? "被抢杠" : "被查大叫";
              dataseat = data[info.target];
              info = dataseat.huinfo[info.index];
            }
            str += "(";
            if ("7pairs" == info.pattern) {
              str += "七对";
              sep = "、";
            } else if ("l7pairs" == info.pattern) {
              str += "龙七对";
              sep = "、";
            } else if ("j7pairs" == info.pattern) {
              str += "将七对";
              sep = "、";
            } else if ("duidui" == info.pattern) {
              str += "碰碰胡";
              sep = "、";
            } else if ("jiangdui" == info.pattern) {
              str += "将对";
              sep = "、";
            }
            if (info.haidihu) {
              str += sep + "海底胡";
              sep = "、";
            }
            if (info.tianhu) {
              str += sep + "天胡";
              sep = "、";
            }
            if (info.dihu) {
              str += sep + "地胡";
              sep = "、";
            }
            if (dataseat.qingyise) {
              str += sep + "清一色";
              sep = "、";
            }
            if (dataseat.menqing) {
              str += sep + "门清";
              sep = "、";
            }
            if (dataseat.jingouhu) {
              str += sep + "金钩胡";
              sep = "、";
            }
            if (dataseat.zhongzhang) {
              str += sep + "中张";
              sep = "、";
            }
            if (info.numofgen > 0) {
              str += sep + "根x" + info.numofgen;
              sep = "、";
            }
            "" == sep && (str += "平胡");
            str += "、" + info.fan + "番";
            str += ")";
            actionArr.push(str);
          }
          seatView.hu.active = hued;
          userData.angangs.length && actionArr.push("暗杠x" + userData.angangs.length);
          userData.diangangs.length && actionArr.push("明杠x" + userData.diangangs.length);
          userData.wangangs.length && actionArr.push("巴杠x" + userData.wangangs.length);
          seatView.username.string = cc.vv.gameNetMgr.seats[i].name;
          seatView.zhuang.active = cc.vv.gameNetMgr.button == i;
          seatView.reason.string = actionArr.join("、");
          userData.score > 0 ? seatView.score.string = "+" + userData.score : seatView.score.string = userData.score;
          for (var k = 0; k < seatView.mahjongs.childrenCount; ++k) {
            var n = seatView.mahjongs.children[k];
            n.active = false;
          }
          cc.vv.mahjongmgr.sortMJ(userData.holds, userData.dingque);
          var numOfGangs = userData.angangs.length + userData.wangangs.length + userData.diangangs.length;
          var lackingNum = 3 * (userData.pengs.length + numOfGangs);
          for (var k = 0; k < userData.holds.length; ++k) {
            var pai = userData.holds[k];
            var n = seatView.mahjongs.children[k + lackingNum];
            n.active = true;
            var sprite = n.getComponent(cc.Sprite);
            sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", pai);
          }
          for (var k = 0; k < seatView._pengandgang.length; ++k) seatView._pengandgang[k].active = false;
          var index = 0;
          var gangs = userData.angangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "angang");
            index++;
          }
          var gangs = userData.diangangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "diangang");
            index++;
          }
          var gangs = userData.wangangs;
          for (var k = 0; k < gangs.length; ++k) {
            var mjid = gangs[k];
            this.initPengAndGangs(seatView, index, mjid, "wangang");
            index++;
          }
          var pengs = userData.pengs;
          if (pengs) for (var k = 0; k < pengs.length; ++k) {
            var mjid = pengs[k];
            this.initPengAndGangs(seatView, index, mjid, "peng");
            index++;
          }
        }
      },
      initPengAndGangs: function initPengAndGangs(seatView, index, mjid, flag) {
        var pgroot = null;
        if (seatView._pengandgang.length <= index) {
          pgroot = cc.instantiate(cc.vv.mahjongmgr.pengPrefabSelf);
          seatView._pengandgang.push(pgroot);
          seatView.mahjongs.addChild(pgroot);
        } else {
          pgroot = seatView._pengandgang[index];
          pgroot.active = true;
        }
        var sprites = pgroot.getComponentsInChildren(cc.Sprite);
        for (var s = 0; s < sprites.length; ++s) {
          var sprite = sprites[s];
          if ("gang" == sprite.node.name) {
            var isGang = "peng" != flag;
            sprite.node.active = isGang;
            sprite.node.scaleX = 1;
            sprite.node.scaleY = 1;
            if ("angang" == flag) {
              sprite.spriteFrame = cc.vv.mahjongmgr.getEmptySpriteFrame("myself");
              sprite.node.scaleX = 1.4;
              sprite.node.scaleY = 1.4;
            } else sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("B_", mjid);
          } else sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("B_", mjid);
        }
        pgroot.x = 55 * index * 3 + 10 * index;
      },
      onBtnReadyClicked: function onBtnReadyClicked() {
        console.log("onBtnReadyClicked");
        this._isGameEnd ? this._gameresult.active = true : cc.vv.net.send("ready");
        this._gameover.active = false;
      },
      onBtnShareClicked: function onBtnShareClicked() {
        console.log("onBtnShareClicked");
      }
    });
    cc._RF.pop();
  }, {} ],
  GameResult: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b08d8pm0VBDLYlZIdfLuPS", "GameResult");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _gameresult: null,
        _seats: []
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this._gameresult = this.node.getChildByName("game_result");
        var seats = this._gameresult.getChildByName("seats");
        for (var i = 0; i < seats.children.length; ++i) this._seats.push(seats.children[i].getComponent("Seat"));
        var btnClose = cc.find("Canvas/game_result/btnClose");
        btnClose && cc.vv.utils.addClickEvent(btnClose, this.node, "GameResult", "onBtnCloseClicked");
        var btnShare = cc.find("Canvas/game_result/btnShare");
        btnShare && cc.vv.utils.addClickEvent(btnShare, this.node, "GameResult", "onBtnShareClicked");
        var self = this;
        this.node.on("game_end", function(data) {
          self.onGameEnd(data.detail);
        });
      },
      showResult: function showResult(seat, info, isZuiJiaPaoShou) {
        seat.node.getChildByName("zuijiapaoshou").active = isZuiJiaPaoShou;
        seat.node.getChildByName("zimocishu").getComponent(cc.Label).string = info.numzimo;
        seat.node.getChildByName("jiepaocishu").getComponent(cc.Label).string = info.numjiepao;
        seat.node.getChildByName("dianpaocishu").getComponent(cc.Label).string = info.numdianpao;
        seat.node.getChildByName("angangcishu").getComponent(cc.Label).string = info.numangang;
        seat.node.getChildByName("minggangcishu").getComponent(cc.Label).string = info.numminggang;
        seat.node.getChildByName("chajiaocishu").getComponent(cc.Label).string = info.numchadajiao;
      },
      onGameEnd: function onGameEnd(endinfo) {
        var seats = cc.vv.gameNetMgr.seats;
        var maxscore = -1;
        var maxdianpao = 0;
        var dianpaogaoshou = -1;
        for (var i = 0; i < seats.length; ++i) {
          var seat = seats[i];
          seat.score > maxscore && (maxscore = seat.score);
          if (endinfo[i].numdianpao > maxdianpao) {
            maxdianpao = endinfo[i].numdianpao;
            dianpaogaoshou = i;
          }
        }
        for (var i = 0; i < seats.length; ++i) {
          var seat = seats[i];
          var isBigwin = false;
          seat.score > 0 && (isBigwin = seat.score == maxscore);
          this._seats[i].setInfo(seat.name, seat.score, isBigwin);
          this._seats[i].setID(seat.userid);
          var isZuiJiaPaoShou = dianpaogaoshou == i;
          this.showResult(this._seats[i], endinfo[i], isZuiJiaPaoShou);
        }
      },
      onBtnCloseClicked: function onBtnCloseClicked() {
        cc.vv.wc.show("正在返回游戏大厅");
        cc.director.loadScene("hall");
      },
      onBtnShareClicked: function onBtnShareClicked() {
        cc.vv.anysdkMgr.shareResult();
      }
    });
    cc._RF.pop();
  }, {} ],
  GameScene_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a136cLqGSVOn6YgH94rH0gZ", "GameScene_NN");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onDestroy: function onDestroy() {
        NotifyHelper.clearAll();
        gGameScene = null;
        GameMsgHandler.clearData();
        $G.gCData.gComPlayers = [];
        $G.gCData.gSids = [];
        $G.gCData.gCids = [];
      },
      start: function start() {
        MsgHelper.resumeMsgHelper();
        MsgHelper.check();
      },
      onLoad: function onLoad() {
        gGameScene = this;
        this._load();
      },
      _load: function _load() {
        this._ui = this.getComponent("FKNN_UI");
        this._ctl = this.addComponent("FKNN_Ctl");
        this._logic = require("FKNN_Logic");
        this._ntf = this.addComponent("ComNotify");
        this._comScheduler = this.addComponent("ComScheduler");
        NPHelper.initHelper();
        this._ui.initNodes();
        this._ctl.initDealer();
        this._ctl.initPlayers();
        var state = GameMsgHandler.getRoomStateType();
        this._ctl.jumpRoomState(state);
        this._ctl.updatePlayers();
        this._ctl.updateSelfBtns();
        this._ctl.initNotifys();
        this._ui.updateTable();
      },
      onButtonClicked: function onButtonClicked(event, custom) {
        var _this = this;
        switch (custom) {
         case "gamerules":
          GameHelper.addGameRulesView(true);
          break;

         case "invite":
          var names = GameMsgHandler.getRoomInfoNames();
          var title = Configs.APPName + "【房号" + names.id + "】";
          var content = GameMsgHandler.getRoomParamsOneLineByNames(names, "、");
          WXHelper.inviteJoinRoom(names.id, title, content);
          break;

         case "copy":
          var _names = GameMsgHandler.getRoomInfoNames();
          var _content = "准入：" + GameMsgHandler.getData().scoreMin + "、底注：" + GameMsgHandler.getData().baseScore + "、";
          var text = Configs.APPName + "【房号" + _names.id + "】\n" + _content + "(复制此消息后粘贴房号可快速进入房间)";
          var info = "房间" + _names.id + "复制成功，快分享给好友吧";
          MsgHelper.pushToast(info);
          cc.log(text);
          PlatformHelper.copyToClipboard(text);
          break;

         case "dismiss":
          var gameState = this._ctl.gameStart;
          var owner = GameMsgHandler.getRoomOwner();
          var user = GameMsgHandler.getUserByCid(0).id;
          owner == user ? this._ui.ndAskDisRoom.active = true : gameState ? this._ui.ndAskDisRoom.active = true : RoomServer.leaveRoom(function() {
            GameLogic.leaveRoom();
          });
          break;

         case "leave":
          RoomServer.leaveRoom(function() {
            GameLogic.leaveRoom();
          });
          break;

         case "sure":
          RoomServer.dismissRoom(function() {
            RoomServer.dismissVote(true);
          });
          this._ui.ndAskDisRoom.active = false;
          break;

         case "cancel":
          this._ui.ndAskDisRoom.active = false;
          break;

         case "disSure":
          RoomServer.dismissVote(true);
          break;

         case "disCancel":
          RoomServer.dismissVote(false);
          break;

         case "sit":
          GameMsgServer.sit(function() {
            _this._ui.showSitBtn(false);
          });
          break;

         case "ready":
          GameMsgServer.ready();
          break;

         case "rob":
          GameMsgServer.callBanker(1);
          break;

         case "unRob":
          GameMsgServer.callBanker(0);
          break;

         case "bet1":
          GameMsgServer.bet(1);
          break;

         case "bet2":
          GameMsgServer.bet(2);
          break;

         case "bet3":
          GameMsgServer.bet(3);
          break;

         case "hasOx":
          this._ctl.handlerBtnPlay("hasOx");
          break;

         case "noOx":
          this._ctl.handlerBtnPlay("noOx");
          break;

         case "autoOx":
          if (GameMsgHandler.canRubCard()) {
            this._ui.ndBtnsOfPlayer[3].active = false;
            if ($G.gCData.gComPlayers[0].ndCardHolderContainer.children[4].getComponent("PbCard").spPoint.node.active) GameMsgServer.finish(); else {
              $G.gCData.gComPlayers[0].ndCardHolderContainer.children[4].getComponent("PbCard").showCardFrontWithFlipAction();
              this._comScheduler.once("autoOx", function() {
                GameMsgServer.finish();
              }, 1);
            }
          } else GameMsgServer.finish();
          break;

         case "rubCard":
          cc.log("###FGGGGGGGG", 1);
          if (cc.sys.isNative) {
            cc.log("###FGGGGGGGG", 2);
            if ($G.gCData.gComPlayers[0].ndCardHolderContainer.children[4].getComponent("PbCard").spPoint.node.active) {
              cc.log("###FGGGGGGGG", 4);
              GameMsgServer.finish();
            } else {
              cc.log("###FGGGGGGGG", 5);
              PBHelper.addNode("DlgRubCard");
            }
          } else {
            cc.log("###FGGGGGGGG", 3);
            this._ui.ndBtnsOfPlayer[3].active = false;
            if ($G.gCData.gComPlayers[0].ndCardHolderContainer.children[4].getComponent("PbCard").spPoint.node.active) {
              cc.log("###FGGGGGGGG", 6);
              GameMsgServer.finish();
            } else {
              cc.log("###FGGGGGGGG", 7);
              $G.gCData.gComPlayers[0].ndCardHolderContainer.children[4].getComponent("PbCard").showCardFrontWithFlipAction();
              this._comScheduler.once("autoOx", function() {
                GameMsgServer.finish();
              }, 1);
            }
          }
          break;

         case "setting":
          PBHelper.addNode("DlgSetting");
          break;

         case "chat":
          $G.gCData.gChatType = "text";
          PBHelper.addNode("DlgChat", null, null, 1e4);
          break;

         case "emoji":
          $G.gCData.gChatType = "face";
          PBHelper.addNode("DlgChat");
          break;

         case "moreOpen":
          this._ui.ndMoreBtns.active = true;
          break;

         case "moreClose":
          this._ui.ndMoreBtns.active = false;
          break;

         case "leave":
          break;

         case "changeTable":
          this._ctl.changeTable();
          break;

         case "stand":
          cc.log("stand");
          break;

         case "cardCountOpen":
          this._ui.ndCardCountBtns.active = true;
          break;

         case "cardCountClose":
          this._ui.ndCardCountBtns.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {
    FKNN_Logic: "FKNN_Logic"
  } ],
  GamesMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e02c8mFBftAqrKzZg1Zu9UR", "GamesMgr");
    "use strict";
    var helper = module.exports;
    var currentLogic = null;
    var currentGame = "";
    helper.initGame = function() {
      var game = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nn";
      var relogin = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      cc.log("@ GamesMgr initGame :" + game);
      currentGame = game;
      helper._initHandler();
      helper._initNetListeners();
      relogin && UserServer.relogin(game);
    };
    helper.exitGame = function() {
      cc.log("@ GamesMgr exitGame :" + currentGame);
      currentGame = "";
      currentLogic = null;
      helper._removeNetListeners();
    };
    helper._initNetListeners = function() {
      helper._removeNetListeners();
      SocketHelper.onNetListener(ServerRouters.OnAction_ROOM.ROUTE, helper._onHandleMsg);
    };
    helper._removeNetListeners = function() {
      SocketHelper.offNetListener(ServerRouters.OnAction_ROOM.ROUTE, helper._onHandleMsg);
    };
    helper._onHandleMsg = function(action) {
      if (null == currentLogic) {
        cc.log("未定义游戏");
        return;
      }
      currentLogic.onHandleMsg_Data(action);
      NotifyHelper.notify(action.name, action.msg);
    };
    helper._initHandler = function() {
      var game = currentGame;
      switch (game) {
       case "nn":
        currentLogic = require("GameMsgLogic_NN");
        window.GameMsgHandler = require("GameMsgHandler_NN");
        window.GameMsgServer = require("GameMsgServer_NN");
        window.GameLogic = require("GameLogic_NN");
        window.AudioMgr_Game = require("AudioMgr_NN");
      }
    };
    cc._RF.pop();
  }, {
    AudioMgr_NN: "AudioMgr_NN",
    GameLogic_NN: "GameLogic_NN",
    GameMsgHandler_NN: "GameMsgHandler_NN",
    GameMsgLogic_NN: "GameMsgLogic_NN",
    GameMsgServer_NN: "GameMsgServer_NN"
  } ],
  GlobalGameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4668eagXDBOjJGNpYJy8dIc", "GlobalGameData");
    "use strict";
    var global = module.exports;
    global.init = function() {
      window.$G = {};
      $G.gStrings = require("SimpleChinese");
      global._initNtfs();
      global._initCData();
      global._initSData();
    };
    global._initSData = function() {
      window.$G.gSData = {};
      $G.gSData.gCData = null;
      $G.gSData.gRoom = null;
      $G.gSData.gRoomResult = null;
      $G.gSData.gWallet = {};
      $G.gSData.gShare = {};
      $G.gSData.gNotice = {};
      $G.gSData.gRankList = {};
      $G.gSData.gRankSelf = {};
      $G.gSData.gSids = [];
      $G.gSData.gCids = [];
      $G.gSData.gHistory = null;
      $G.gSData.gGroup = null;
    };
    global._initCData = function() {
      $G.gCData = {};
      $G.gCData.gIsLogined = false;
      $G.gCData.gIsGameDownloading = false;
      $G.gCData.gameChecked = {};
      $G.gCData.gMagicWindow = null;
      $G.gCData.gCurrentMusic = null;
      $G.gCData.gNoticeAutoShowed = false;
      $G.gCData.gIsVoiceRecordOrPlay = false;
      $G.gCData.gRoomLeaved = false;
      $G.gCData.gIsLogined = false;
      $G.gCData.gMagicWindow = null;
      $G.gCData.gCurrentMusic = null;
      $G.gCData.gLastUpdateInvite = 0;
      $G.gCData.gAreaType = 0;
      $G.gCData.gRoomLeaved = false;
      $G.gCData.gComPlayers = [];
      $G.gCData.gSids = [];
      $G.gCData.gCids = [];
      $G.gCData.gChatType = "emoji";
      $G.gCData.gRoomChoices = {
        nn: [ 0, 0 ],
        dz: [ 0, 0 ],
        bjl: [ 0, 0 ],
        zjh: [ 0, 0 ]
      };
      $G.gCData.CreateRoom_BaseScore = {
        nn: [ 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 7500, 1e4, 2e4, 3e4, 5e4, 1e5 ],
        dz: [ 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 7500, 1e4, 2e4, 3e4, 5e4, 1e5 ],
        bjl: [ 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 7500, 1e4, 2e4, 3e4, 5e4, 1e5 ],
        zjh: [ 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 7500, 1e4, 2e4, 3e4, 5e4, 1e5 ]
      };
      $G.gCData.CreateRoom_MinScore = {
        nn: [],
        dz: [],
        bjl: [],
        zjh: []
      };
      _.each($G.gCData.CreateRoom_BaseScore.nn, function(score) {
        $G.gCData.CreateRoom_MinScore.nn.push(100 * score);
      });
      _.each($G.gCData.CreateRoom_BaseScore.dz, function(score) {
        $G.gCData.CreateRoom_MinScore.dz.push(10 * score);
      });
      _.each($G.gCData.CreateRoom_BaseScore.bjl, function(score) {
        $G.gCData.CreateRoom_MinScore.bjl.push(10 * score);
      });
      _.each($G.gCData.CreateRoom_BaseScore.zjh, function(score) {
        $G.gCData.CreateRoom_MinScore.zjh.push(10 * score);
      });
      $G.gCData.Head_Max = 12;
      $G.gCData.Chat_FaceMax = 53;
      $G.gCData.Chat_TextList = [ "伐好意思，刚接了个电话", "房间没满，房主在找几个嘛", "爆发吧我得小宇宙，这把我要通吃", "哥这桩一柱擎天，稳如泰山啊", "别磨蹭了，时间就是金钱", "哎呦我滴妈，手气有点旺哈哈", "把把都是赢，你咋不上天呐", "这...这牌，气得我手直抖", "四五六七八，嘿嘿，要的就是发", "放学别走，我要跟你再战三百回合" ];
    };
    global._initNtfs = function() {
      window.NOTIFY_UPDATE_ROOMCARD = "NOTIFY_UPDATE_ROOMCARD";
      window.NOTIFY_UPDATE_EMAIL = "NOTIFY_UPDATE_EMAIL";
      window.NOTIFY_CHECK_EMAIL = "NOTIFY_CHECK_EMAIL";
      window.NOTIFY_MAGIC_WINDOW = "NOTIFY_MAGIC_WINDOW";
      window.NOTIFY_GAME_IN = "NOTIFY_GAME_IN";
      window.NOTIFY_GAME_OUT = "NOTIFY_GAME_OUT";
      window.NOTIFY_ON_CLIPBOARD = "NOTIFY_ON_CLIPBOARD";
      window.NOTIFY_KEY_BACK = "NOTIFY_KEY_BACK";
      window.NOTIFY_LOGINED = "NOTIFY_LOGINED";
      window.NOTIFY_RECORDS_ADD = "NOTIFY_RECORDS_ADD";
      window.NOTIFY_RECORDS_REMOVE = "NOTIFY_RECORDS_REMOVE";
      window.NOTIFY_RECORDS_COMMAND_CHANGE_PLAYING = "NOTIFY_RECORDS_COMMAND_CHANGE_PLAYING";
      window.NOTIFY_RECORDS_COMMAND_CHANGE_PLAYER = "NOTIFY_RECORDS_COMMAND_CHANGE_PLAYER";
      window.NOTIFY_RECORDS_COMMAND_CHANGE_PLAYER_READY = "NOTIFY_RECORDS_COMMAND_CHANGE_PLAYER_READY";
      window.NOTIFY_GROUP_APPLY_ADD = "NOTIFY_GROUP_ADD";
      window.NOTIFY_GROUP_APPLY_REMOVE = "NOTIFY_GROUP_APPLY_REMOVE";
      window.NOTIFY_USER_SETHEAD = "NOTIFY_USER_SETHEAD";
      window.NOTIFY_ETH_UPDATE = "NOTIFY_ETH_UPDATE";
      window.NOTIFY_CANDY_UPDATE = "NOTIFY_CANDY_UPDATE";
      window.NOTIFY_VOICE_RECORD_START = "NOTIFY_VOICE_RECORD_START";
      window.NOTIFY_VOICE_RECORD_CANCEL_ALERT = "NOTIFY_VOICE_RECORD_CANCEL_ALERT";
      window.NOTIFY_VOICE_RECORD_END = "NOTIFY_VOICE_RECORD_END";
      window.NOTIFY_VOICE_RECORD_CANCEL = "NOTIFY_VOICE_RECORD_CANCEL";
      window.NOTIFY_VOICE_RECORD_TOOSHORT = "NOTIFY_VOICE_RECORD_TOOSHORT";
      window.NOTIFY_VOICE_PLAY_START = "NOTIFY_VOICE_PLAY_START";
      window.NOTIFY_VOICE_PLAY_END = "NOTIFY_VOICE_PLAY_END";
      window.NOTIFY_CHANGE_FOLLOW = "NOTIFY_CHANGE_FOLLOW";
      window.NOTIFY_UPDATE_NICK = "NOTIFY_UPDATE_NICK";
      window.NOTIFY_UPDATE_BANKERBTN = "NOTIFY_UPDATE_BANKERBTN";
      window.NOTIFY_SHOW_321 = "NOTIFY_SHOW_321";
      window.NOTIFY_CLOSE_CHAT = "NOTIFY_CLOSE_CHAT";
      window.PLAYER_MY_BID = "PLAYER_MY_BID";
    };
    cc._RF.pop();
  }, {
    SimpleChinese: "SimpleChinese"
  } ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24e30ZJLgdH3rs1R1CvqN8U", "Global");
    "use strict";
    var Global = cc.Class({
      extends: cc.Component,
      statics: {
        isstarted: false,
        netinited: false,
        userguid: 0,
        nickname: "",
        money: 0,
        lv: 0,
        roomId: 0
      }
    });
    cc._RF.pop();
  }, {} ],
  HTTP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90ae61J525JQIt5taF3Nce2", "HTTP");
    "use strict";
    var URL = "http://118.25.176.115:9000";
    var HTTP = cc.Class({
      extends: cc.Component,
      statics: {
        sessionId: 0,
        userId: 0,
        master_url: URL,
        url: URL,
        sendRequest: function sendRequest(path, data, handler, extraUrl) {
          var xhr = cc.loader.getXMLHttpRequest();
          xhr.timeout = 5e3;
          null == extraUrl && (extraUrl = HTTP.url);
          var requestURL = extraUrl;
          console.log("RequestURL:" + requestURL);
          xhr.open("GET", requestURL, true);
          cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
          xhr.onreadystatechange = function() {
            if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300) {
              console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
              try {
                var ret = JSON.parse(xhr.responseText);
                null !== handler && handler(ret);
              } catch (e) {
                console.log("err:" + e);
              } finally {
                cc.vv && cc.vv.wc;
              }
            }
          };
          cc.vv && cc.vv.wc;
          xhr.send();
          return xhr;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Hall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6edb3jjx+FBepS1mk1xKDF2", "Hall");
    "use strict";
    var Net = require("Net");
    var Global = require("Global");
    cc.Class({
      extends: cc.Component,
      properties: {
        lblName: cc.Label,
        lblMoney: cc.Label,
        lblGems: cc.Label,
        lblID: cc.Label,
        lblNotice: cc.Label,
        joinGameWin: cc.Node,
        createRoomWin: cc.Node,
        settingsWin: cc.Node,
        helpWin: cc.Node,
        xiaoxiWin: cc.Node,
        btnJoinGame: cc.Node,
        btnReturnGame: cc.Node,
        sprHeadImg: cc.Sprite
      },
      initNetHandlers: function initNetHandlers() {
        var self = this;
      },
      onShare: function onShare() {
        cc.vv.anysdkMgr.share("天天麻将", "天天麻将，包含了血战到底、血流成河等多种四川流行麻将玩法。");
      },
      onLoad: function onLoad() {
        GamesMgr.initGame("nn");
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        if (!cc.vv) {
          cc.director.loadScene("loading");
          return;
        }
        this.initLabels();
        if (null == cc.vv.gameNetMgr.roomId) {
          this.btnJoinGame.active = true;
          this.btnReturnGame.active = false;
        } else {
          this.btnJoinGame.active = false;
          this.btnReturnGame.active = true;
        }
        var roomId = cc.vv.userMgr.oldRoomId;
        if (null != roomId) {
          cc.vv.userMgr.oldRoomId = null;
          cc.vv.userMgr.enterRoom(roomId);
        }
        var imgLoader = this.sprHeadImg.node.getComponent("ImageLoader");
        imgLoader.setUserID(cc.vv.userMgr.userId);
        cc.vv.utils.addClickEvent(this.sprHeadImg.node, this.node, "Hall", "onBtnClicked");
        this.addComponent("UserInfoShow");
        this.initButtonHandler("Canvas/right_bottom/btn_shezhi");
        this.initButtonHandler("Canvas/right_bottom/btn_help");
        this.initButtonHandler("Canvas/right_bottom/btn_xiaoxi");
        this.helpWin.addComponent("OnBack");
        this.xiaoxiWin.addComponent("OnBack");
        cc.vv.audioMgr.playBGM("bgMain.mp3");
        cc.vv.utils.addEscEvent(this.node);
      },
      refreshInfo: function refreshInfo() {
        var self = this;
        var onGet = function onGet(ret) {
          0 !== ret.errcode ? console.log(ret.errmsg) : null != ret.gems && (this.lblGems.string = ret.gems);
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign
        };
      },
      refreshGemsTip: function refreshGemsTip() {
        var self = this;
        var onGet = function onGet(ret) {
          if (0 !== ret.errcode) console.log(ret.errmsg); else {
            cc.vv.userMgr.gemstip.version = ret.version;
            cc.vv.userMgr.gemstip.msg = ret.msg.replace("<newline>", "\n");
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign,
          type: "fkgm",
          version: cc.vv.userMgr.gemstip.version
        };
      },
      refreshNotice: function refreshNotice() {
        var self = this;
        var onGet = function onGet(ret) {
          ret.msg = "地瓜啤酒工作室出品，必属精品";
          if (0 !== ret.errcode) console.log(ret.errmsg); else {
            cc.vv.userMgr.notice.version = ret.version;
            cc.vv.userMgr.notice.msg = ret.msg;
            cc.log("22222222222222222", ret.msg);
            this.lblNotice.string = ret.msg;
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign,
          type: "notice",
          version: cc.vv.userMgr.notice.version
        };
      },
      initButtonHandler: function initButtonHandler(btnPath) {
        var btn = cc.find(btnPath);
        cc.vv.utils.addClickEvent(btn, this.node, "Hall", "onBtnClicked");
      },
      initLabels: function initLabels() {
        this.lblName.string = UserHandler.getNick();
        this.lblID.string = "ID:" + UserHandler.getId();
      },
      onBtnClicked: function onBtnClicked(event) {
        "btn_shezhi" == event.target.name ? this.settingsWin.active = true : "btn_help" == event.target.name ? this.helpWin.active = true : "btn_xiaoxi" == event.target.name ? this.xiaoxiWin.active = true : "head" == event.target.name && cc.vv.userinfoShow.show(cc.vv.userMgr.userName, cc.vv.userMgr.userId, this.sprHeadImg, cc.vv.userMgr.sex, cc.vv.userMgr.ip);
      },
      onJoinGameClicked: function onJoinGameClicked() {
        this.joinGameWin.active = true;
      },
      onReturnGameClicked: function onReturnGameClicked() {
        cc.vv.wc.show("正在返回游戏房间");
        cc.director.loadScene("mjgame");
      },
      onBtnAddGemsClicked: function onBtnAddGemsClicked() {
        cc.vv.alert.show("提示", cc.vv.userMgr.gemstip.msg, function() {
          this.onBtnTaobaoClicked();
        }.bind(this));
        this.refreshInfo();
      },
      onCreateRoomClicked: function onCreateRoomClicked() {
        this.createRoomWin.active = true;
      },
      onBtnTaobaoClicked: function onBtnTaobaoClicked() {
        cc.sys.openURL("https://shop596732896.taobao.com/");
      },
      update: function update(dt) {
        var x = this.lblNotice.node.x;
        x -= 100 * dt;
        x + this.lblNotice.node.width < -1e3 && (x = 500);
        this.lblNotice.node.x = x;
        if (cc.vv && null != cc.vv.userMgr.roomData) {
          cc.vv.userMgr.enterRoom(cc.vv.userMgr.roomData);
          cc.vv.userMgr.roomData = null;
        }
      }
    });
    cc._RF.pop();
  }, {
    Global: "Global",
    Net: "Net"
  } ],
  History: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "4d7bci0LUxMT6MJKXJDj89w", "History");
      "use strict";
      cc.Class({
        extends: cc.Component,
        properties: {
          HistoryItemPrefab: {
            default: null,
            type: cc.Prefab
          },
          _history: null,
          _viewlist: null,
          _content: null,
          _viewitemTemp: null,
          _historyData: null,
          _curRoomInfo: null,
          _emptyTip: null
        },
        onLoad: function onLoad() {
          this._history = this.node.getChildByName("history");
          this._history.active = false;
          this._emptyTip = this._history.getChildByName("emptyTip");
          this._emptyTip.active = true;
          this._viewlist = this._history.getChildByName("viewlist");
          this._content = cc.find("view/content", this._viewlist);
          this._viewitemTemp = this._content.children[0];
          this._content.removeChild(this._viewitemTemp);
          var node = cc.find("Canvas/btn_zhanji");
          this.addClickEvent(node, this.node, "History", "onBtnHistoryClicked");
          var node = cc.find("Canvas/history/btn_back");
          this.addClickEvent(node, this.node, "History", "onBtnBackClicked");
        },
        addClickEvent: function addClickEvent(node, target, component, handler) {
          var eventHandler = new cc.Component.EventHandler();
          eventHandler.target = target;
          eventHandler.component = component;
          eventHandler.handler = handler;
          var clickEvents = node.getComponent(cc.Button).clickEvents;
          clickEvents.push(eventHandler);
        },
        onBtnBackClicked: function onBtnBackClicked() {
          if (null == this._curRoomInfo) {
            this._historyData = null;
            this._history.active = false;
          } else this.initRoomHistoryList(this._historyData);
        },
        onBtnHistoryClicked: function onBtnHistoryClicked() {
          this._history.active = true;
          var self = this;
          cc.vv.userMgr.getHistoryList(function(data) {
            data.sort(function(a, b) {
              return a.time < b.time;
            });
            self._historyData = data;
            for (var i = 0; i < data.length; ++i) for (var j = 0; j < 4; ++j) {
              var s = data[i].seats[j];
              s.name = new Buffer(s.name, "base64").toString();
            }
            self.initRoomHistoryList(data);
          });
        },
        dateFormat: function dateFormat(time) {
          var date = new Date(time);
          var datetime = "{0}-{1}-{2} {3}:{4}:{5}";
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          month = month >= 10 ? month : "0" + month;
          var day = date.getDate();
          day = day >= 10 ? day : "0" + day;
          var h = date.getHours();
          h = h >= 10 ? h : "0" + h;
          var m = date.getMinutes();
          m = m >= 10 ? m : "0" + m;
          var s = date.getSeconds();
          s = s >= 10 ? s : "0" + s;
          datetime = datetime.format(year, month, day, h, m, s);
          return datetime;
        },
        initRoomHistoryList: function initRoomHistoryList(data) {
          for (var i = 0; i < data.length; ++i) {
            var node = this.getViewItem(i);
            node.idx = i;
            var titleId = "" + (i + 1);
            node.getChildByName("title").getComponent(cc.Label).string = titleId;
            node.getChildByName("roomNo").getComponent(cc.Label).string = "房间ID:" + data[i].id;
            var datetime = this.dateFormat(1e3 * data[i].time);
            node.getChildByName("time").getComponent(cc.Label).string = datetime;
            var btnOp = node.getChildByName("btnOp");
            btnOp.idx = i;
            btnOp.getChildByName("Label").getComponent(cc.Label).string = "详情";
            for (var j = 0; j < 4; ++j) {
              var s = data[i].seats[j];
              var info = s.name + ":" + s.score;
              node.getChildByName("info" + j).getComponent(cc.Label).string = info;
            }
          }
          this._emptyTip.active = 0 == data.length;
          this.shrinkContent(data.length);
          this._curRoomInfo = null;
        },
        initGameHistoryList: function initGameHistoryList(roomInfo, data) {
          data.sort(function(a, b) {
            return a.create_time < b.create_time;
          });
          for (var i = 0; i < data.length; ++i) {
            var node = this.getViewItem(i);
            var idx = data.length - i - 1;
            node.idx = idx;
            var titleId = "" + (idx + 1);
            node.getChildByName("title").getComponent(cc.Label).string = titleId;
            node.getChildByName("roomNo").getComponent(cc.Label).string = "房间ID:" + roomInfo.id;
            var datetime = this.dateFormat(1e3 * data[i].create_time);
            node.getChildByName("time").getComponent(cc.Label).string = datetime;
            var btnOp = node.getChildByName("btnOp");
            btnOp.idx = idx;
            btnOp.getChildByName("Label").getComponent(cc.Label).string = "回放";
            var result = JSON.parse(data[i].result);
            for (var j = 0; j < 4; ++j) {
              var s = roomInfo.seats[j];
              var info = s.name + ":" + result[j];
              node.getChildByName("info" + j).getComponent(cc.Label).string = info;
            }
          }
          this.shrinkContent(data.length);
          this._curRoomInfo = roomInfo;
        },
        getViewItem: function getViewItem(index) {
          var content = this._content;
          if (content.childrenCount > index) return content.children[index];
          var node = cc.instantiate(this._viewitemTemp);
          content.addChild(node);
          return node;
        },
        shrinkContent: function shrinkContent(num) {
          while (this._content.childrenCount > num) {
            var lastOne = this._content.children[this._content.childrenCount - 1];
            this._content.removeChild(lastOne, true);
          }
        },
        getGameListOfRoom: function getGameListOfRoom(idx) {
          var self = this;
          var roomInfo = this._historyData[idx];
          cc.vv.userMgr.getGamesOfRoom(roomInfo.uuid, function(data) {
            null != data && data.length > 0 && self.initGameHistoryList(roomInfo, data);
          });
        },
        getDetailOfGame: function getDetailOfGame(idx) {
          var self = this;
          var roomUUID = this._curRoomInfo.uuid;
          cc.vv.userMgr.getDetailOfGame(roomUUID, idx, function(data) {
            data.base_info = JSON.parse(data.base_info);
            data.action_records = JSON.parse(data.action_records);
            cc.vv.gameNetMgr.prepareReplay(self._curRoomInfo, data);
            cc.vv.replayMgr.init(data);
            cc.director.loadScene("mjgame");
          });
        },
        onViewItemClicked: function onViewItemClicked(event) {
          var idx = event.target.idx;
          console.log(idx);
          null == this._curRoomInfo ? this.getGameListOfRoom(idx) : this.getDetailOfGame(idx);
        },
        onBtnOpClicked: function onBtnOpClicked(event) {
          var idx = event.target.parent.idx;
          console.log(idx);
          null == this._curRoomInfo ? this.getGameListOfRoom(idx) : this.getDetailOfGame(idx);
        }
      });
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    buffer: 2
  } ],
  HotUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b7febf1wZPXrDRh/yPbuw5", "HotUpdate");
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
  HttpHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c893cREu1OxZQD2SWox2BG", "HttpHandler");
    "use strict";
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var HttpHandler = function() {
      function HttpHandler() {
        _classCallCheck(this, HttpHandler);
      }
      _createClass(HttpHandler, [ {
        key: "setConfigs",
        value: function setConfigs(msg) {
          this._configs = msg;
        }
      }, {
        key: "getConfigs",
        value: function getConfigs() {
          return this._configs;
        }
      }, {
        key: "getConfig",
        value: function getConfig(key) {
          var value = this.getConfigs()[key];
          return value || "";
        }
      } ]);
      return HttpHandler;
    }();
    module.exports = new HttpHandler();
    cc._RF.pop();
  }, {} ],
  HttpHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bc5bFkxttDTJTTWdI5sKJB", "HttpHelper");
    "use strict";
    var log = function log(info) {
      cc.log(info);
    };
    var state = {
      INITED: 1,
      REQUESTING: 2,
      FINISH: 3,
      CANCEL: 4,
      TIMEOUT: 5
    };
    function HttpHelper() {
      this.state = state.INITED;
      this.host = null;
      this.port = null;
      this.router = null;
      this.params = null;
    }
    module.exports = new HttpHelper();
    HttpHelper.prototype.initNet = function() {
      this.state = state.INITED;
      this.serverList = HttpHandler.getConfig("HttpList");
      this.setAServer();
    };
    HttpHelper.prototype.setAServer = function() {
      var index = _.random(0, _.size(this.serverList) - 1);
      this.host = this.serverList[index].host;
      this.port = this.serverList[index].port;
    };
    HttpHelper.prototype.getAServer = function() {
      return {
        host: this.host,
        port: this.port
      };
    };
    HttpHelper.prototype.getUrl = function(host, port, router, params) {
      var isPost = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      var isNoKey = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      var url = "http://" + host + ":" + port + "/" + router;
      if (isPost) return url;
      if (isNoKey) return url + "/" + encodeURIComponent(params);
      var query = "";
      _.each(params, function(value, key) {
        _.isEmpty(query) || (query += "&");
        query += key + "=" + encodeURIComponent(value);
      });
      url += _.isEmpty(query) ? "" : "?" + query;
      return url;
    };
    HttpHelper.prototype.getDefaultUrl = function(router, params) {
      var isPost = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      var isNoKey = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      return this.getUrl(this.host, this.port, router, params, isPost, isNoKey);
    };
    HttpHelper.prototype.request = function(routerObj, cbYes, cbDone2, cbError) {
      var isPost = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      var _this = this;
      var showLoading = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      var isNoKey = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      if (this.state < state.INITED) {
        cc.error("Error: http not inited");
        return;
      }
      showLoading = null == gLoadingScene && showLoading;
      var cbDone = cbDone2;
      if (showLoading) {
        cbDone = function cbDone() {
          MsgHelper.removeLoading();
          cbDone2 && cbDone2();
        };
        MsgHelper.pushLoading();
      }
      var url = null;
      var params = null;
      if (_.isString(routerObj)) url = routerObj; else {
        url = this.getUrl(this.host, this.port, routerObj.router, routerObj.params, isPost, isNoKey);
        params = routerObj.params;
      }
      this.state = state.REQUESTING;
      var xhr = new XMLHttpRequest();
      var timeout = Configs.Http_Timeout;
      var isTimeout = false;
      var ontimeout = function ontimeout() {
        cc.log("timeout :" + url);
        isTimeout = true;
        xhr.abort();
        cbDone && cbDone();
      };
      var timer = setTimeout(ontimeout, timeout);
      xhr.onerror = function() {
        return _this.onError(cbError);
      };
      xhr.onreadystatechange = function() {
        if (4 != xhr.readyState) return;
        if (isTimeout) return;
        clearTimeout(timer);
        this.state = state.FINISH;
        if (200 == xhr.status) {
          var pRes = isNoKey ? xhr.response : JSON.parse(xhr.response);
          cbYes && cbYes(pRes);
          cbDone && cbDone();
          cc.log(pRes);
        } else {
          cbDone && cbDone();
          cbError && cbError();
        }
      };
      var log = "HttpRequest : " + (isPost ? "Post : " : "Get : ") + url;
      cc.log(log);
      if (isPost) {
        xhr.open("POST", url, true);
        if (isNoKey) {
          xhr.responseType = "text";
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
          xhr.send(params);
        } else {
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify(params));
        }
      } else {
        xhr.open("GET", url, true);
        xhr.send();
      }
    };
    HttpHelper.prototype.onError = function(cbError) {
      if (this.state !== state.REQUESTING) return;
      cc.log("请求错误");
      cbError && cbError();
      MsgHelper.removeLoading();
    };
    cc._RF.pop();
  }, {} ],
  HuanSanZhang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a096oAgU5HwrxX05ZPNYtW", "HuanSanZhang");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _huanpaitip: null,
        _huanpaiArr: []
      },
      onLoad: function onLoad() {
        this._huanpaitip = cc.find("Canvas/huansanzhang");
        this._huanpaitip.active = cc.vv.gameNetMgr.isHuanSanZhang;
        this._huanpaitip.active && this.showHuanpai(null == cc.vv.gameNetMgr.getSelfData().huanpais);
        this.initHuaipaiInfo();
        var btnOk = cc.find("Canvas/huansanzhang/btn_ok");
        btnOk && cc.vv.utils.addClickEvent(btnOk, this.node, "HuanSanZhang", "onHuanSanZhang");
        var self = this;
        this.node.on("game_begin", function(data) {
          self.initHuaipaiInfo();
        });
        this.node.on("game_huanpai", function(data) {
          self._huanpaitip.active = true;
          self.showHuanpai(true);
        });
        this.node.on("huanpai_notify", function(data) {
          data.detail.seatindex == cc.vv.gameNetMgr.seatIndex && self.initHuaipaiInfo();
        });
        this.node.on("game_huanpai_over", function(data) {
          self._huanpaitip.active = false;
          for (var i = 0; i < self._huanpaiArr.length; ++i) self._huanpaiArr[i].y = 0;
          self._huanpaiArr = [];
          self.initHuaipaiInfo();
        });
        this.node.on("game_huanpai_result", function(data) {
          cc.vv.gameNetMgr.isHuanSanZhang = false;
          self._huanpaitip.active = false;
          for (var i = 0; i < self._huanpaiArr.length; ++i) self._huanpaiArr[i].y = 0;
          self._huanpaiArr = [];
        });
        this.node.on("mj_clicked", function(data) {
          var target = data.detail;
          var idx = self._huanpaiArr.indexOf(target);
          if (-1 != idx) {
            target.y = 0;
            self._huanpaiArr.splice(idx, 1);
          } else if (self._huanpaiArr.length < 3) {
            self._huanpaiArr.push(target);
            target.y = 15;
          }
        });
      },
      showHuanpai: function showHuanpai(interactable) {
        this._huanpaitip.getChildByName("info").getComponent(cc.Label).string = interactable ? "请选择三张一样花色的牌" : "等待其他玩家选牌...";
        this._huanpaitip.getChildByName("btn_ok").getComponent(cc.Button).interactable = interactable;
        this._huanpaitip.getChildByName("mask").active = false;
      },
      initHuaipaiInfo: function initHuaipaiInfo() {
        var huaipaiinfo = cc.find("Canvas/game/huanpaiinfo");
        var seat = cc.vv.gameNetMgr.getSelfData();
        if (null == seat.huanpais) {
          huaipaiinfo.active = false;
          return;
        }
        huaipaiinfo.active = true;
        for (var i = 0; i < seat.huanpais.length; ++i) huaipaiinfo.getChildByName("hp" + (i + 1)).getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", seat.huanpais[i]);
        var hpm = huaipaiinfo.getChildByName("hpm");
        hpm.active = true;
        0 == cc.vv.gameNetMgr.huanpaimethod ? hpm.rotation = 90 : 1 == cc.vv.gameNetMgr.huanpaimethod ? hpm.rotation = 0 : 2 == cc.vv.gameNetMgr.huanpaimethod ? hpm.rotation = 180 : hpm.active = false;
      },
      onHuanSanZhang: function onHuanSanZhang(event) {
        if (3 != this._huanpaiArr.length) return;
        var type = null;
        for (var i = 0; i < this._huanpaiArr.length; ++i) {
          var pai = this._huanpaiArr[i].mjId;
          var nt = cc.vv.mahjongmgr.getMahjongType(pai);
          if (null == type) type = nt; else if (type != nt) return;
        }
        var data = {
          p1: this._huanpaiArr[0].mjId,
          p2: this._huanpaiArr[1].mjId,
          p3: this._huanpaiArr[2].mjId
        };
        this._huanpaitip.getChildByName("info").getComponent(cc.Label).string = "等待其他玩家选牌...";
        this._huanpaitip.getChildByName("btn_ok").getComponent(cc.Button).interactable = false;
        this._huanpaitip.getChildByName("mask").active = true;
        cc.vv.net.send("huanpai", data);
      }
    });
    cc._RF.pop();
  }, {} ],
  ImageLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed057Bgp8FHlJbGI+ljAN7d", "ImageLoader");
    "use strict";
    function loadImage(url, code, callback) {
      cc.loader.load(url, function(err, tex) {
        var spriteFrame = new cc.SpriteFrame(tex, cc.Rect(0, 0, tex.width, tex.height));
        callback(code, spriteFrame);
      });
    }
    function getBaseInfo(userid, callback) {
      null == cc.vv.baseInfoMap && (cc.vv.baseInfoMap = {});
      null != cc.vv.baseInfoMap[userid] ? callback(userid, cc.vv.baseInfoMap[userid]) : cc.vv.http.sendRequest("/base_info", {
        userid: userid
      }, function(ret) {
        var url = null;
        ret.headimgurl && (url = ret.headimgurl + ".jpg");
        var info = {
          name: ret.name,
          sex: ret.sex,
          url: url
        };
        cc.vv.baseInfoMap[userid] = info;
        callback(userid, info);
      }, cc.vv.http.master_url);
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.setupSpriteFrame();
      },
      setUserID: function setUserID(userid) {
        if (false == cc.sys.isNative) return;
        if (!userid) return;
        null == cc.vv.images && (cc.vv.images = {});
        var self = this;
        getBaseInfo(userid, function(code, info) {
          info && info.url && loadImage(info.url, userid, function(err, spriteFrame) {
            self._spriteFrame = spriteFrame;
            self.setupSpriteFrame();
          });
        });
      },
      setupSpriteFrame: function setupSpriteFrame() {
        if (this._spriteFrame) {
          var spr = this.getComponent(cc.Sprite);
          spr && (spr.spriteFrame = this._spriteFrame);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  JoinGameInput: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10a1c8jz95Ju4NnpkOWUfin", "JoinGameInput");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nums: {
          default: [],
          type: [ cc.Label ]
        },
        _inputIndex: 0
      },
      onLoad: function onLoad() {},
      onEnable: function onEnable() {
        this.onResetClicked();
      },
      onInputFinished: function onInputFinished(roomId) {
        RoomServer.joinRoom($G.gCData.gAreaType, roomId, function() {
          cc.director.loadScene("GameScene_NN");
        });
      },
      onInput: function onInput(num) {
        if (this._inputIndex >= this.nums.length) return;
        this.nums[this._inputIndex].string = num;
        this._inputIndex += 1;
        if (this._inputIndex == this.nums.length) {
          var roomId = this.parseRoomID();
          console.log("ok:" + roomId);
          this.onInputFinished(roomId);
        }
      },
      onN0Clicked: function onN0Clicked() {
        this.onInput(0);
      },
      onN1Clicked: function onN1Clicked() {
        this.onInput(1);
      },
      onN2Clicked: function onN2Clicked() {
        this.onInput(2);
      },
      onN3Clicked: function onN3Clicked() {
        this.onInput(3);
      },
      onN4Clicked: function onN4Clicked() {
        this.onInput(4);
      },
      onN5Clicked: function onN5Clicked() {
        this.onInput(5);
      },
      onN6Clicked: function onN6Clicked() {
        this.onInput(6);
      },
      onN7Clicked: function onN7Clicked() {
        this.onInput(7);
      },
      onN8Clicked: function onN8Clicked() {
        this.onInput(8);
      },
      onN9Clicked: function onN9Clicked() {
        this.onInput(9);
      },
      onResetClicked: function onResetClicked() {
        for (var i = 0; i < this.nums.length; ++i) this.nums[i].string = "";
        this._inputIndex = 0;
      },
      onDelClicked: function onDelClicked() {
        if (this._inputIndex > 0) {
          this._inputIndex -= 1;
          this.nums[this._inputIndex].string = "";
        }
      },
      onCloseClicked: function onCloseClicked() {
        this.node.active = false;
      },
      parseRoomID: function parseRoomID() {
        var str = "";
        for (var i = 0; i < this.nums.length; ++i) str += this.nums[i].string;
        return str;
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadingLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "350d3Ry9aVIqJR27fP2H/z1", "LoadingLogic");
    "use strict";
    cc.loader.loadResAll || (cc.loader.loadResAll = cc.loader.loadResDir);
    cc.Class({
      extends: cc.Component,
      properties: {
        tipLabel: cc.Label,
        _stateStr: "",
        _progress: 0,
        _splash: null,
        _isLoading: false
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        this.tipLabel.string = this._stateStr;
        this.startPreloading();
      },
      startPreloading: function startPreloading() {
        this._stateStr = "正在加载资源，请稍候";
        this._isLoading = true;
        var self = this;
        cc.loader.onProgress = function(completedCount, totalCount, item) {
          self._isLoading && (self._progress = completedCount / totalCount);
        };
        cc.loader.loadResAll("textures", function(err, assets) {
          self.onLoadComplete();
        });
      },
      onLoadComplete: function onLoadComplete() {
        this._isLoading = false;
        this._stateStr = "准备登陆";
        cc.director.loadScene("login");
        cc.loader.onComplete = null;
      },
      update: function update(dt) {
        if (0 == this._stateStr.length) return;
        this.tipLabel.string = this._stateStr + " ";
        if (this._isLoading) this.tipLabel.string += Math.floor(100 * this._progress) + "%"; else {
          var t = Math.floor(Date.now() / 1e3) % 4;
          for (var i = 0; i < t; ++i) this.tipLabel.string += ".";
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "572a7Qfh69N9ZLXkNthANfi", "Login");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    String.prototype.format = function(args) {
      if (arguments.length > 0) {
        var result = this;
        if (1 == arguments.length && "object" == ("undefined" === typeof args ? "undefined" : _typeof(args))) for (var key in args) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        } else for (var i = 0; i < arguments.length; i++) {
          if (void 0 == arguments[i]) return "";
          var reg = new RegExp("({[" + i + "]})", "g");
          result = result.replace(reg, arguments[i]);
        }
        return result;
      }
      return this;
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        _mima: null,
        _mimaIndex: 0,
        ebAccountL: cc.EditBox
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        if (!cc.vv) {
          cc.director.loadScene("loading");
          return;
        }
        cc.vv.audioMgr.playBGM("bgMain.mp3");
        this._mima = [ "A", "A", "B", "B", "A", "B", "A", "B", "A", "A", "A", "B", "B", "B" ];
        if (cc.sys.isNative && cc.sys.os != cc.sys.OS_WINDOWS) {
          cc.find("Canvas/btn_yk").active = false;
          cc.find("Canvas/btn_weixin").active = true;
        } else {
          cc.find("Canvas/btn_yk").active = true;
          cc.find("Canvas/btn_weixin").active = false;
        }
        gLocalData.userInfo.account && (this.ebAccountL.string = gLocalData.userInfo.account);
      },
      start: function start() {
        var account = cc.sys.localStorage.getItem("wx_account");
        var sign = cc.sys.localStorage.getItem("wx_sign");
        if (null != account && null != sign) {
          var ret = {
            errcode: 0,
            account: account,
            sign: sign
          };
          cc.vv.userMgr.onAuth(ret);
        }
      },
      onBtnQuickStartClicked: function onBtnQuickStartClicked() {},
      onBtnWeichatClicked: function onBtnWeichatClicked() {
        var self = this;
        cc.vv.anysdkMgr.login();
      },
      onBtnMIMAClicked: function onBtnMIMAClicked(event) {
        if (this._mima[this._mimaIndex] == event.target.name) {
          this._mimaIndex++;
          this._mimaIndex == this._mima.length && (cc.find("Canvas/btn_yk").active = true);
        } else {
          console.log("oh ho~~~");
          this._mimaIndex = 0;
        }
      },
      randomLogin: function randomLogin() {
        UserServer.guestLogin(_.random(1e5, 999999) + "", function(event) {
          cc.director.loadScene("hall");
          gLocalData.userInfo.account = UserHandler.getData().account;
          DataHelper.saveAllData();
        });
      },
      debugLogin: function debugLogin() {
        this.ebAccountL.string.length > 5 && UserServer.guestLogin(this.ebAccountL.string, function(event) {
          cc.director.loadScene("hall");
          gLocalData.userInfo.account = UserHandler.getData().account;
          DataHelper.saveAllData();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  MJGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fa8fcvrqFOj6lhh6xHzd3c", "MJGame");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        gameRoot: {
          default: null,
          type: cc.Node
        },
        prepareRoot: {
          default: null,
          type: cc.Node
        },
        _myMJArr: [],
        _options: null,
        _selectedMJ: null,
        _chupaiSprite: [],
        _mjcount: null,
        _gamecount: null,
        _hupaiTips: [],
        _hupaiLists: [],
        _playEfxs: [],
        _opts: [],
        lbRoomId: cc.Label,
        ndBetScoreArr: cc.Node,
        ndSureNiuButton: cc.Node
      },
      onLoad: function onLoad() {
        this._initRoomInfo();
        return;
        var cvs;
      },
      _initRoomInfo: function _initRoomInfo() {
        this.lbRoomId.string = GameMsgHandler.getRoomInfos();
      },
      initView: function initView() {
        var gameChild = this.node.getChildByName("game");
        this._mjcount = gameChild.getChildByName("mjcount").getComponent(cc.Label);
        this._mjcount.string = "剩余" + cc.vv.gameNetMgr.numOfMJ + "张";
        this._gamecount = gameChild.getChildByName("gamecount").getComponent(cc.Label);
        this._gamecount.string = cc.vv.gameNetMgr.numOfGames + "/" + cc.vv.gameNetMgr.maxNumOfGames + "局";
        var myselfChild = gameChild.getChildByName("myself");
        var myholds = myselfChild.getChildByName("holds");
        this._chupaidrag = gameChild.getChildByName("chupaidrag");
        this._chupaidrag.active = false;
        for (var i = 0; i < myholds.children.length; ++i) {
          var sprite = myholds.children[i].getComponent(cc.Sprite);
          this._myMJArr.push(sprite);
          sprite.spriteFrame = null;
          this.initDragStuffs(sprite.node);
        }
        var realwidth = cc.director.getVisibleSize().width;
        myholds.scaleX *= realwidth / 1280;
        myholds.scaleY *= realwidth / 1280;
        var sides = [ "myself", "right", "up", "left" ];
        for (var i = 0; i < sides.length; ++i) {
          var side = sides[i];
          var sideChild = gameChild.getChildByName(side);
          this._hupaiTips.push(sideChild.getChildByName("HuPai"));
          this._hupaiLists.push(sideChild.getChildByName("hupailist"));
          this._playEfxs.push(sideChild.getChildByName("play_efx").getComponent(cc.Animation));
          this._chupaiSprite.push(sideChild.getChildByName("ChuPai").children[0].getComponent(cc.Sprite));
          var opt = sideChild.getChildByName("opt");
          opt.active = false;
          var sprite = opt.getChildByName("pai").getComponent(cc.Sprite);
          var data = {
            node: opt,
            sprite: sprite
          };
          this._opts.push(data);
        }
        var opts = gameChild.getChildByName("ops");
        this._options = opts;
        this.hideOptions();
        this.hideChupai();
      },
      start: function start() {
        this.checkIp();
      },
      checkIp: function checkIp() {
        if ("" == cc.vv.gameNetMgr.gamestate) return;
        var selfData = cc.vv.gameNetMgr.getSelfData();
        var ipMap = {};
        for (var i = 0; i < cc.vv.gameNetMgr.seats.length; ++i) {
          var seatData = cc.vv.gameNetMgr.seats[i];
          null != seatData.ip && seatData.userid > 0 && seatData != selfData && (ipMap[seatData.ip] ? ipMap[seatData.ip].push(seatData.name) : ipMap[seatData.ip] = [ seatData.name ]);
        }
        for (var k in ipMap) {
          var d = ipMap[k];
          if (d.length >= 2) {
            var str = d.join("\n") + "\n\n正在使用同一IP地址进行游戏!";
            cc.vv.alert.show("注意", str);
            return;
          }
        }
      },
      initDragStuffs: function initDragStuffs(node) {
        node.on(cc.Node.EventType.TOUCH_START, function(event) {
          console.log("cc.Node.EventType.TOUCH_START");
          if (cc.vv.gameNetMgr.turn != cc.vv.gameNetMgr.seatIndex) return;
          node.interactable = node.getComponent(cc.Button).interactable;
          if (!node.interactable) return;
          node.opacity = 255;
          this._chupaidrag.active = false;
          this._chupaidrag.getComponent(cc.Sprite).spriteFrame = node.getComponent(cc.Sprite).spriteFrame;
          this._chupaidrag.x = event.getLocationX() - cc.director.getVisibleSize().width / 2;
          this._chupaidrag.y = event.getLocationY() - cc.director.getVisibleSize().height / 2;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          console.log("cc.Node.EventType.TOUCH_MOVE");
          if (cc.vv.gameNetMgr.turn != cc.vv.gameNetMgr.seatIndex) return;
          if (!node.interactable) return;
          if (Math.abs(event.getDeltaX()) + Math.abs(event.getDeltaY()) < .5) return;
          this._chupaidrag.active = true;
          node.opacity = 150;
          this._chupaidrag.opacity = 255;
          this._chupaidrag.scaleX = 1;
          this._chupaidrag.scaleY = 1;
          this._chupaidrag.x = event.getLocationX() - cc.director.getVisibleSize().width / 2;
          this._chupaidrag.y = event.getLocationY() - cc.director.getVisibleSize().height / 2;
          node.y = 0;
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (cc.vv.gameNetMgr.turn != cc.vv.gameNetMgr.seatIndex) return;
          if (!node.interactable) return;
          console.log("cc.Node.EventType.TOUCH_END");
          this._chupaidrag.active = false;
          node.opacity = 255;
          event.getLocationY() >= 200 && this.shoot(node.mjId);
        }.bind(this));
        node.on(cc.Node.EventType.TOUCH_CANCEL, function(event) {
          if (cc.vv.gameNetMgr.turn != cc.vv.gameNetMgr.seatIndex) return;
          if (!node.interactable) return;
          console.log("cc.Node.EventType.TOUCH_CANCEL");
          this._chupaidrag.active = false;
          node.opacity = 255;
          event.getLocationY() >= 200 ? this.shoot(node.mjId) : event.getLocationY() >= 150;
        }.bind(this));
      },
      hideChupai: function hideChupai() {
        for (var i = 0; i < this._chupaiSprite.length; ++i) this._chupaiSprite[i].node.active = false;
      },
      initEventHandlers: function initEventHandlers() {
        cc.vv.gameNetMgr.dataEventHandler = this.node;
        var self = this;
        this.node.on("game_holds", function(data) {
          self.initMahjongs();
          self.checkQueYiMen();
        });
        this.node.on("game_begin", function(data) {
          self.onGameBeign();
          1 == cc.vv.gameNetMgr.numOfGames && self.checkIp();
        });
        this.node.on("check_ip", function(data) {
          self.checkIp();
        });
        this.node.on("game_sync", function(data) {
          self.onGameBeign();
          self.checkIp();
        });
        this.node.on("game_chupai", function(data) {
          data = data.detail;
          self.hideChupai();
          self.checkQueYiMen();
          data.last != cc.vv.gameNetMgr.seatIndex && self.initMopai(data.last, null);
          cc.vv.replayMgr.isReplay() || data.turn == cc.vv.gameNetMgr.seatIndex || self.initMopai(data.turn, -1);
        });
        this.node.on("game_mopai", function(data) {
          self.hideChupai();
          data = data.detail;
          var pai = data.pai;
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(data.seatIndex);
          if (0 == localIndex) {
            var index = 13;
            var sprite = self._myMJArr[index];
            self.setSpriteFrameByMJID("M_", sprite, pai, index);
            sprite.node.mjId = pai;
          } else cc.vv.replayMgr.isReplay() && self.initMopai(data.seatIndex, pai);
        });
        this.node.on("game_action", function(data) {
          self.showAction(data.detail);
        });
        this.node.on("hupai", function(data) {
          var data = data.detail;
          var seatIndex = data.seatindex;
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatIndex);
          var hupai = self._hupaiTips[localIndex];
          hupai.active = true;
          0 == localIndex && self.hideOptions();
          var seatData = cc.vv.gameNetMgr.seats[seatIndex];
          seatData.hued = true;
          if ("xlch" == cc.vv.gameNetMgr.conf.type) {
            hupai.getChildByName("sprHu").active = true;
            hupai.getChildByName("sprZimo").active = false;
            self.initHupai(localIndex, data.hupai);
            if (data.iszimo) if (seatData.seatindex == cc.vv.gameNetMgr.seatIndex) {
              seatData.holds.pop();
              self.initMahjongs();
            } else self.initOtherMahjongs(seatData);
          } else {
            hupai.getChildByName("sprHu").active = !data.iszimo;
            hupai.getChildByName("sprZimo").active = data.iszimo;
            data.iszimo && 0 == localIndex || self.initMopai(seatIndex, data.hupai);
          }
          if (true == cc.vv.replayMgr.isReplay() && "xlch" != cc.vv.gameNetMgr.conf.type) {
            var opt = self._opts[localIndex];
            opt.node.active = true;
            opt.sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", data.hupai);
          }
          data.iszimo ? self.playEfx(localIndex, "play_zimo") : self.playEfx(localIndex, "play_hu");
          cc.vv.audioMgr.playSFX("nv/hu.mp3");
        });
        this.node.on("mj_count", function(data) {
          self._mjcount.string = "剩余" + cc.vv.gameNetMgr.numOfMJ + "张";
        });
        this.node.on("game_num", function(data) {
          self._gamecount.string = cc.vv.gameNetMgr.numOfGames + "/" + cc.vv.gameNetMgr.maxNumOfGames + "局";
        });
        this.node.on("game_over", function(data) {
          self.gameRoot.active = false;
          self.prepareRoot.active = true;
        });
        this.node.on("game_chupai_notify", function(data) {
          self.hideChupai();
          var seatData = data.detail.seatData;
          seatData.seatindex == cc.vv.gameNetMgr.seatIndex ? self.initMahjongs() : self.initOtherMahjongs(seatData);
          self.showChupai();
          var audioUrl = cc.vv.mahjongmgr.getAudioURLByMJID(data.detail.pai);
          cc.vv.audioMgr.playSFX(audioUrl);
        });
        this.node.on("guo_notify", function(data) {
          self.hideChupai();
          self.hideOptions();
          var seatData = data.detail;
          seatData.seatindex == cc.vv.gameNetMgr.seatIndex && self.initMahjongs();
          cc.vv.audioMgr.playSFX("give.mp3");
        });
        this.node.on("guo_result", function(data) {
          self.hideOptions();
        });
        this.node.on("game_dingque_finish", function(data) {
          self.initMahjongs();
        });
        this.node.on("peng_notify", function(data) {
          self.hideChupai();
          var seatData = data.detail;
          seatData.seatindex == cc.vv.gameNetMgr.seatIndex ? self.initMahjongs() : self.initOtherMahjongs(seatData);
          var localIndex = self.getLocalIndex(seatData.seatindex);
          self.playEfx(localIndex, "play_peng");
          cc.vv.audioMgr.playSFX("nv/peng.mp3");
          self.hideOptions();
        });
        this.node.on("gang_notify", function(data) {
          self.hideChupai();
          var data = data.detail;
          var seatData = data.seatData;
          var gangtype = data.gangtype;
          seatData.seatindex == cc.vv.gameNetMgr.seatIndex ? self.initMahjongs() : self.initOtherMahjongs(seatData);
          var localIndex = self.getLocalIndex(seatData.seatindex);
          if ("wangang" == gangtype) {
            self.playEfx(localIndex, "play_guafeng");
            cc.vv.audioMgr.playSFX("guafeng.mp3");
          } else {
            self.playEfx(localIndex, "play_xiayu");
            cc.vv.audioMgr.playSFX("rain.mp3");
          }
        });
        this.node.on("hangang_notify", function(data) {
          var data = data.detail;
          var localIndex = self.getLocalIndex(data);
          self.playEfx(localIndex, "play_gang");
          cc.vv.audioMgr.playSFX("nv/gang.mp3");
          self.hideOptions();
        });
        this.node.on("login_result", function() {
          self.gameRoot.active = false;
          self.prepareRoot.active = true;
          console.log("login_result");
        });
      },
      showChupai: function showChupai() {
        var pai = cc.vv.gameNetMgr.chupai;
        if (pai >= 0) {
          var localIndex = this.getLocalIndex(cc.vv.gameNetMgr.turn);
          var sprite = this._chupaiSprite[localIndex];
          sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", pai);
          sprite.node.active = true;
        }
      },
      addOption: function addOption(btnName, pai) {
        for (var i = 0; i < this._options.childrenCount; ++i) {
          var child = this._options.children[i];
          if ("op" == child.name && false == child.active) {
            child.active = true;
            var sprite = child.getChildByName("opTarget").getComponent(cc.Sprite);
            sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID("M_", pai);
            var btn = child.getChildByName(btnName);
            btn.active = true;
            btn.pai = pai;
            return;
          }
        }
      },
      hideOptions: function hideOptions(data) {
        this._options.active = false;
        for (var i = 0; i < this._options.childrenCount; ++i) {
          var child = this._options.children[i];
          if ("op" == child.name) {
            child.active = false;
            child.getChildByName("btnPeng").active = false;
            child.getChildByName("btnGang").active = false;
            child.getChildByName("btnHu").active = false;
          }
        }
      },
      showAction: function showAction(data) {
        this._options.active && this.hideOptions();
        if (data && (data.hu || data.gang || data.peng)) {
          this._options.active = true;
          data.hu && this.addOption("btnHu", data.pai);
          data.peng && this.addOption("btnPeng", data.pai);
          if (data.gang) for (var i = 0; i < data.gangpai.length; ++i) {
            var gp = data.gangpai[i];
            this.addOption("btnGang", gp);
          }
        }
      },
      initWanfaLabel: function initWanfaLabel() {
        var wanfa = cc.find("Canvas/infobar/wanfa").getComponent(cc.Label);
        wanfa.string = cc.vv.gameNetMgr.getWanfa();
      },
      initHupai: function initHupai(localIndex, pai) {
        if ("xlch" == cc.vv.gameNetMgr.conf.type) {
          var hupailist = this._hupaiLists[localIndex];
          for (var i = 0; i < hupailist.children.length; ++i) {
            var hupainode = hupailist.children[i];
            if (false == hupainode.active) {
              var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
              hupainode.getComponent(cc.Sprite).spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, pai);
              hupainode.active = true;
              break;
            }
          }
        }
      },
      playEfx: function playEfx(index, name) {
        this._playEfxs[index].node.active = true;
        this._playEfxs[index].play(name);
      },
      onGameBeign: function onGameBeign() {
        for (var i = 0; i < this._playEfxs.length; ++i) this._playEfxs[i].node.active = false;
        for (var i = 0; i < this._hupaiLists.length; ++i) for (var j = 0; j < this._hupaiLists[i].childrenCount; ++j) this._hupaiLists[i].children[j].active = false;
        for (var i = 0; i < cc.vv.gameNetMgr.seats.length; ++i) {
          var seatData = cc.vv.gameNetMgr.seats[i];
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(i);
          var hupai = this._hupaiTips[localIndex];
          hupai.active = seatData.hued;
          if (seatData.hued) {
            hupai.getChildByName("sprHu").active = !seatData.iszimo;
            hupai.getChildByName("sprZimo").active = seatData.iszimo;
          }
          if (seatData.huinfo) for (var j = 0; j < seatData.huinfo.length; ++j) {
            var info = seatData.huinfo[j];
            info.ishupai && this.initHupai(localIndex, info.pai);
          }
        }
        this.hideChupai();
        this.hideOptions();
        var sides = [ "right", "up", "left" ];
        var gameChild = this.node.getChildByName("game");
        for (var i = 0; i < sides.length; ++i) {
          var sideChild = gameChild.getChildByName(sides[i]);
          var holds = sideChild.getChildByName("holds");
          for (var j = 0; j < holds.childrenCount; ++j) {
            var nc = holds.children[j];
            nc.active = true;
            nc.scaleX = 1;
            nc.scaleY = 1;
            var sprite = nc.getComponent(cc.Sprite);
            sprite.spriteFrame = cc.vv.mahjongmgr.holdsEmpty[i + 1];
          }
        }
        if ("" == cc.vv.gameNetMgr.gamestate && false == cc.vv.replayMgr.isReplay()) return;
        this.gameRoot.active = true;
        this.prepareRoot.active = false;
        this.initMahjongs();
        var seats = cc.vv.gameNetMgr.seats;
        for (var i in seats) {
          var seatData = seats[i];
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(i);
          if (0 != localIndex) {
            this.initOtherMahjongs(seatData);
            i == cc.vv.gameNetMgr.turn ? this.initMopai(i, -1) : this.initMopai(i, null);
          }
        }
        this.showChupai();
        if (null != cc.vv.gameNetMgr.curaction) {
          this.showAction(cc.vv.gameNetMgr.curaction);
          cc.vv.gameNetMgr.curaction = null;
        }
        this.checkQueYiMen();
      },
      onMJClicked: function onMJClicked(event) {
        if (cc.vv.gameNetMgr.isHuanSanZhang) {
          this.node.emit("mj_clicked", event.target);
          return;
        }
        if (cc.vv.gameNetMgr.turn != cc.vv.gameNetMgr.seatIndex) {
          console.log("not your turn." + cc.vv.gameNetMgr.turn);
          return;
        }
        for (var i = 0; i < this._myMJArr.length; ++i) if (event.target == this._myMJArr[i].node) {
          if (event.target == this._selectedMJ) {
            this.shoot(this._selectedMJ.mjId);
            this._selectedMJ.y = 0;
            this._selectedMJ = null;
            return;
          }
          null != this._selectedMJ && (this._selectedMJ.y = 0);
          event.target.y = 15;
          this._selectedMJ = event.target;
          return;
        }
      },
      shoot: function shoot(mjId) {
        if (null == mjId) return;
        cc.vv.net.send("chupai", mjId);
      },
      getMJIndex: function getMJIndex(side, index) {
        if ("right" == side || "up" == side) return 13 - index;
        return index;
      },
      initMopai: function initMopai(seatIndex, pai) {
        var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatIndex);
        var side = cc.vv.mahjongmgr.getSide(localIndex);
        var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
        var gameChild = this.node.getChildByName("game");
        var sideChild = gameChild.getChildByName(side);
        var holds = sideChild.getChildByName("holds");
        var lastIndex = this.getMJIndex(side, 13);
        var nc = holds.children[lastIndex];
        nc.scaleX = 1;
        nc.scaleY = 1;
        if (null == pai) nc.active = false; else if (pai >= 0) {
          nc.active = true;
          if ("up" == side) {
            nc.scaleX = .73;
            nc.scaleY = .73;
          }
          var sprite = nc.getComponent(cc.Sprite);
          sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, pai);
        } else if (null != pai) {
          nc.active = true;
          if ("up" == side) {
            nc.scaleX = 1;
            nc.scaleY = 1;
          }
          var sprite = nc.getComponent(cc.Sprite);
          sprite.spriteFrame = cc.vv.mahjongmgr.getHoldsEmptySpriteFrame(side);
        }
      },
      initEmptySprites: function initEmptySprites(seatIndex) {
        var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatIndex);
        var side = cc.vv.mahjongmgr.getSide(localIndex);
        var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
        var gameChild = this.node.getChildByName("game");
        var sideChild = gameChild.getChildByName(side);
        var holds = sideChild.getChildByName("holds");
        var spriteFrame = cc.vv.mahjongmgr.getEmptySpriteFrame(side);
        for (var i = 0; i < holds.childrenCount; ++i) {
          var nc = holds.children[i];
          nc.scaleX = 1;
          nc.scaleY = 1;
          var sprite = nc.getComponent(cc.Sprite);
          sprite.spriteFrame = spriteFrame;
        }
      },
      initOtherMahjongs: function initOtherMahjongs(seatData) {
        var localIndex = this.getLocalIndex(seatData.seatindex);
        if (0 == localIndex) return;
        var side = cc.vv.mahjongmgr.getSide(localIndex);
        var game = this.node.getChildByName("game");
        var sideRoot = game.getChildByName(side);
        var sideHolds = sideRoot.getChildByName("holds");
        var num = seatData.pengs.length + seatData.angangs.length + seatData.diangangs.length + seatData.wangangs.length;
        num *= 3;
        for (var i = 0; i < num; ++i) {
          var idx = this.getMJIndex(side, i);
          sideHolds.children[idx].active = false;
        }
        var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
        var holds = this.sortHolds(seatData);
        if (null != holds && holds.length > 0) {
          for (var i = 0; i < holds.length; ++i) {
            var idx = this.getMJIndex(side, i + num);
            var sprite = sideHolds.children[idx].getComponent(cc.Sprite);
            if ("up" == side) {
              sprite.node.scaleX = .73;
              sprite.node.scaleY = .73;
            }
            sprite.node.active = true;
            sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, holds[i]);
          }
          if (holds.length + num == 13) {
            var lasetIdx = this.getMJIndex(side, 13);
            sideHolds.children[lasetIdx].active = false;
          }
        }
      },
      sortHolds: function sortHolds(seatData) {
        var holds = seatData.holds;
        if (null == holds) return null;
        var mopai = null;
        var l = holds.length;
        2 != l && 5 != l && 8 != l && 11 != l && 14 != l || (mopai = holds.pop());
        var dingque = seatData.dingque;
        cc.vv.mahjongmgr.sortMJ(holds, dingque);
        null != mopai && holds.push(mopai);
        return holds;
      },
      initMahjongs: function initMahjongs() {
        var seats = cc.vv.gameNetMgr.seats;
        var seatData = seats[cc.vv.gameNetMgr.seatIndex];
        var holds = this.sortHolds(seatData);
        if (null == holds) return;
        var lackingNum = 3 * (seatData.pengs.length + seatData.angangs.length + seatData.diangangs.length + seatData.wangangs.length);
        for (var i = 0; i < holds.length; ++i) {
          var mjid = holds[i];
          var sprite = this._myMJArr[i + lackingNum];
          sprite.node.mjId = mjid;
          sprite.node.y = 0;
          this.setSpriteFrameByMJID("M_", sprite, mjid);
        }
        for (var i = 0; i < lackingNum; ++i) {
          var sprite = this._myMJArr[i];
          sprite.node.mjId = null;
          sprite.spriteFrame = null;
          sprite.node.active = false;
        }
        for (var i = lackingNum + holds.length; i < this._myMJArr.length; ++i) {
          var sprite = this._myMJArr[i];
          sprite.node.mjId = null;
          sprite.spriteFrame = null;
          sprite.node.active = false;
        }
      },
      setSpriteFrameByMJID: function setSpriteFrameByMJID(pre, sprite, mjid) {
        sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, mjid);
        sprite.node.active = true;
      },
      checkQueYiMen: function checkQueYiMen() {
        if (null != cc.vv.gameNetMgr.conf && "xlch" == cc.vv.gameNetMgr.conf.type && cc.vv.gameNetMgr.getSelfData().hued) if (cc.vv.gameNetMgr.seatIndex == cc.vv.gameNetMgr.turn) for (var i = 0; i < 14; ++i) {
          var sprite = this._myMJArr[i];
          true == sprite.node.active && (sprite.node.getComponent(cc.Button).interactable = 13 == i);
        } else for (var i = 0; i < 14; ++i) {
          var sprite = this._myMJArr[i];
          true == sprite.node.active && (sprite.node.getComponent(cc.Button).interactable = true);
        } else {
          var dingque = cc.vv.gameNetMgr.dingque;
          var hasQue = false;
          if (cc.vv.gameNetMgr.seatIndex == cc.vv.gameNetMgr.turn) for (var i = 0; i < this._myMJArr.length; ++i) {
            var sprite = this._myMJArr[i];
            if (null != sprite.node.mjId) {
              var type = cc.vv.mahjongmgr.getMahjongType(sprite.node.mjId);
              if (type == dingque) {
                hasQue = true;
                break;
              }
            }
          }
          for (var i = 0; i < this._myMJArr.length; ++i) {
            var sprite = this._myMJArr[i];
            if (null != sprite.node.mjId) {
              var type = cc.vv.mahjongmgr.getMahjongType(sprite.node.mjId);
              sprite.node.getComponent(cc.Button).interactable = !hasQue || type == dingque;
            }
          }
        }
      },
      getLocalIndex: function getLocalIndex(index) {
        var ret = (index - cc.vv.gameNetMgr.seatIndex + 4) % 4;
        return ret;
      },
      onOptionClicked: function onOptionClicked(event) {
        console.log(event.target.pai);
        "btnPeng" == event.target.name ? cc.vv.net.send("peng") : "btnGang" == event.target.name ? cc.vv.net.send("gang", event.target.pai) : "btnHu" == event.target.name ? cc.vv.net.send("hu") : "btnGuo" == event.target.name && cc.vv.net.send("guo");
      },
      update: function update(dt) {},
      onDestroy: function onDestroy() {
        console.log("onDestroy");
        cc.vv && cc.vv.gameNetMgr.clear();
      }
    });
    cc._RF.pop();
  }, {} ],
  MJRoom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "921dfQJZddJ+5GFUXqxmMmT", "MJRoom");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lblRoomNo: {
          default: null,
          type: cc.Label
        },
        _seats: [],
        _seats2: [],
        _timeLabel: null,
        _voiceMsgQueue: [],
        _lastPlayingSeat: null,
        _playingSeat: null,
        _lastPlayTime: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this.initView();
        this.initSeats();
        this.initEventHandlers();
      },
      initView: function initView() {
        var prepare = this.node.getChildByName("prepare");
        var seats = prepare.getChildByName("seats");
        for (var i = 0; i < seats.children.length; ++i) this._seats.push(seats.children[i].getComponent("Seat"));
        this.refreshBtns();
        this.lblRoomNo = cc.find("Canvas/infobar/Z_room_txt/New Label").getComponent(cc.Label);
        this._timeLabel = cc.find("Canvas/infobar/time").getComponent(cc.Label);
        this.lblRoomNo.string = cc.vv.gameNetMgr.roomId;
        var gameChild = this.node.getChildByName("game");
        var sides = [ "myself", "right", "up", "left" ];
        for (var i = 0; i < sides.length; ++i) {
          var sideNode = gameChild.getChildByName(sides[i]);
          var seat = sideNode.getChildByName("seat");
          this._seats2.push(seat.getComponent("Seat"));
        }
        var btnWechat = cc.find("Canvas/prepare/btnWeichat");
        btnWechat && cc.vv.utils.addClickEvent(btnWechat, this.node, "MJRoom", "onBtnWeichatClicked");
        var titles = cc.find("Canvas/typeTitle");
        for (var i = 0; i < titles.children.length; ++i) titles.children[i].active = false;
        if (cc.vv.gameNetMgr.conf) {
          var type = cc.vv.gameNetMgr.conf.type;
          null != type && "" != type || (type = "xzdd");
          titles.getChildByName(type).active = true;
        }
      },
      refreshBtns: function refreshBtns() {
        var prepare = this.node.getChildByName("prepare");
        var btnExit = prepare.getChildByName("btnExit");
        var btnDispress = prepare.getChildByName("btnDissolve");
        var btnWeichat = prepare.getChildByName("btnWeichat");
        var btnBack = prepare.getChildByName("btnBack");
        var isIdle = 0 == cc.vv.gameNetMgr.numOfGames;
        btnExit.active = !cc.vv.gameNetMgr.isOwner() && isIdle;
        btnDispress.active = cc.vv.gameNetMgr.isOwner() && isIdle;
        btnWeichat.active = isIdle;
        btnBack.active = isIdle;
      },
      initEventHandlers: function initEventHandlers() {
        var self = this;
        this.node.on("new_user", function(data) {
          self.initSingleSeat(data.detail);
        });
        this.node.on("user_state_changed", function(data) {
          self.initSingleSeat(data.detail);
        });
        this.node.on("game_begin", function(data) {
          self.refreshBtns();
          self.initSeats();
        });
        this.node.on("game_num", function(data) {
          self.refreshBtns();
        });
        this.node.on("game_huanpai", function(data) {
          for (var i in self._seats2) self._seats2[i].refreshXuanPaiState();
        });
        this.node.on("huanpai_notify", function(data) {
          var idx = data.detail.seatindex;
          var localIdx = cc.vv.gameNetMgr.getLocalIndex(idx);
          self._seats2[localIdx].refreshXuanPaiState();
        });
        this.node.on("game_huanpai_over", function(data) {
          for (var i in self._seats2) self._seats2[i].refreshXuanPaiState();
        });
        this.node.on("voice_msg", function(data) {
          var data = data.detail;
          self._voiceMsgQueue.push(data);
          self.playVoice();
        });
        this.node.on("chat_push", function(data) {
          var data = data.detail;
          var idx = cc.vv.gameNetMgr.getSeatIndexByID(data.sender);
          var localIdx = cc.vv.gameNetMgr.getLocalIndex(idx);
          self._seats[localIdx].chat(data.content);
          self._seats2[localIdx].chat(data.content);
        });
        this.node.on("quick_chat_push", function(data) {
          var data = data.detail;
          var idx = cc.vv.gameNetMgr.getSeatIndexByID(data.sender);
          var localIdx = cc.vv.gameNetMgr.getLocalIndex(idx);
          var index = data.content;
          var info = cc.vv.chat.getQuickChatInfo(index);
          self._seats[localIdx].chat(info.content);
          self._seats2[localIdx].chat(info.content);
          cc.vv.audioMgr.playSFX(info.sound);
        });
        this.node.on("emoji_push", function(data) {
          var data = data.detail;
          var idx = cc.vv.gameNetMgr.getSeatIndexByID(data.sender);
          var localIdx = cc.vv.gameNetMgr.getLocalIndex(idx);
          console.log(data);
          self._seats[localIdx].emoji(data.content);
          self._seats2[localIdx].emoji(data.content);
        });
      },
      initSeats: function initSeats() {
        var seats = cc.vv.gameNetMgr.seats;
        for (var i = 0; i < seats.length; ++i) this.initSingleSeat(seats[i]);
      },
      initSingleSeat: function initSingleSeat(seat) {
        var index = cc.vv.gameNetMgr.getLocalIndex(seat.seatindex);
        var isOffline = !seat.online;
        var isZhuang = seat.seatindex == cc.vv.gameNetMgr.button;
        console.log("isOffline:" + isOffline);
        this._seats[index].setInfo(seat.name, seat.score);
        this._seats[index].setReady(seat.ready);
        this._seats[index].setOffline(isOffline);
        this._seats[index].setID(seat.userid);
        this._seats[index].voiceMsg(false);
        this._seats2[index].setInfo(seat.name, seat.score);
        this._seats2[index].setZhuang(isZhuang);
        this._seats2[index].setOffline(isOffline);
        this._seats2[index].setID(seat.userid);
        this._seats2[index].voiceMsg(false);
        this._seats2[index].refreshXuanPaiState();
      },
      onBtnSettingsClicked: function onBtnSettingsClicked() {
        cc.vv.popupMgr.showSettings();
      },
      onBtnBackClicked: function onBtnBackClicked() {
        cc.vv.alert.show("返回大厅", "返回大厅房间仍会保留，快去邀请大伙来玩吧！", function() {
          cc.vv.wc.show("正在返回游戏大厅");
          cc.director.loadScene("hall");
        }, true);
      },
      onBtnChatClicked: function onBtnChatClicked() {},
      onBtnWeichatClicked: function onBtnWeichatClicked() {
        var title = "<血战到底>";
        if ("xlch" == cc.vv.gameNetMgr.conf.type) var title = "<血流成河>";
        cc.vv.anysdkMgr.share("天天麻将" + title, "房号:" + cc.vv.gameNetMgr.roomId + " 玩法:" + cc.vv.gameNetMgr.getWanfa());
      },
      onBtnDissolveClicked: function onBtnDissolveClicked() {
        cc.vv.alert.show("解散房间", "解散房间不扣房卡，是否确定解散？", function() {
          cc.vv.net.send("dispress");
        }, true);
      },
      onBtnExit: function onBtnExit() {
        cc.vv.net.send("exit");
      },
      playVoice: function playVoice() {
        if (null == this._playingSeat && this._voiceMsgQueue.length) {
          console.log("playVoice2");
          var data = this._voiceMsgQueue.shift();
          var idx = cc.vv.gameNetMgr.getSeatIndexByID(data.sender);
          var localIndex = cc.vv.gameNetMgr.getLocalIndex(idx);
          this._playingSeat = localIndex;
          this._seats[localIndex].voiceMsg(true);
          this._seats2[localIndex].voiceMsg(true);
          var msgInfo = JSON.parse(data.content);
          var msgfile = "voicemsg.amr";
          console.log(msgInfo.msg.length);
          cc.vv.voiceMgr.writeVoice(msgfile, msgInfo.msg);
          cc.vv.voiceMgr.play(msgfile);
          this._lastPlayTime = Date.now() + msgInfo.time;
        }
      },
      update: function update(dt) {
        var minutes = Math.floor(Date.now() / 1e3 / 60);
        if (this._lastMinute != minutes) {
          this._lastMinute = minutes;
          var date = new Date();
          var h = date.getHours();
          h = h < 10 ? "0" + h : h;
          var m = date.getMinutes();
          m = m < 10 ? "0" + m : m;
          this._timeLabel.string = h + ":" + m;
        }
        if (null != this._lastPlayTime) {
          if (Date.now() > this._lastPlayTime + 200) {
            this.onPlayerOver();
            this._lastPlayTime = null;
          }
        } else this.playVoice();
      },
      onPlayerOver: function onPlayerOver() {
        cc.vv.audioMgr.resumeAll();
        console.log("onPlayCallback:" + this._playingSeat);
        var localIndex = this._playingSeat;
        this._playingSeat = null;
        this._seats[localIndex].voiceMsg(false);
        this._seats2[localIndex].voiceMsg(false);
      },
      onDestroy: function onDestroy() {
        cc.vv.voiceMgr.stop();
      }
    });
    cc._RF.pop();
  }, {} ],
  MahjongMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ecea6X+IFIK5XFdJe38hXa", "MahjongMgr");
    "use strict";
    var mahjongSprites = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        leftAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        rightAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        bottomAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        bottomFoldAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        pengPrefabSelf: {
          default: null,
          type: cc.Prefab
        },
        pengPrefabLeft: {
          default: null,
          type: cc.Prefab
        },
        emptyAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        holdsEmpty: {
          default: [],
          type: [ cc.SpriteFrame ]
        },
        _sides: null,
        _pres: null,
        _foldPres: null,
        ndList: cc.Node,
        ndItem: cc.Node
      },
      onLoad: function onLoad() {
        return;
        var i;
        var i;
        var i;
      },
      getMahjongSpriteByID: function getMahjongSpriteByID(id) {
        return mahjongSprites[id];
      },
      getMahjongType: function getMahjongType(id) {
        if (id >= 0 && id < 9) return 0;
        if (id >= 9 && id < 18) return 1;
        if (id >= 18 && id < 27) return 2;
      },
      getSpriteFrameByMJID: function getSpriteFrameByMJID(pre, mjid) {
        var spriteFrameName = this.getMahjongSpriteByID(mjid);
        spriteFrameName = pre + spriteFrameName;
        if ("M_" == pre) return this.bottomAtlas.getSpriteFrame(spriteFrameName);
        if ("B_" == pre) return this.bottomFoldAtlas.getSpriteFrame(spriteFrameName);
        if ("L_" == pre) return this.leftAtlas.getSpriteFrame(spriteFrameName);
        if ("R_" == pre) return this.rightAtlas.getSpriteFrame(spriteFrameName);
      },
      getAudioURLByMJID: function getAudioURLByMJID(id) {
        var realId = 0;
        id >= 0 && id < 9 ? realId = id + 21 : id >= 9 && id < 18 ? realId = id - 8 : id >= 18 && id < 27 && (realId = id - 7);
        return "nv/" + realId + ".mp3";
      },
      getEmptySpriteFrame: function getEmptySpriteFrame(side) {
        if ("up" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_up");
        if ("myself" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_bottom");
        if ("left" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_left");
        if ("right" == side) return this.emptyAtlas.getSpriteFrame("e_mj_b_right");
      },
      getHoldsEmptySpriteFrame: function getHoldsEmptySpriteFrame(side) {
        if ("up" == side) return this.emptyAtlas.getSpriteFrame("e_mj_up");
        if ("myself" == side) return null;
        if ("left" == side) return this.emptyAtlas.getSpriteFrame("e_mj_left");
        if ("right" == side) return this.emptyAtlas.getSpriteFrame("e_mj_right");
      },
      sortMJ: function sortMJ(mahjongs, dingque) {
        var self = this;
        mahjongs.sort(function(a, b) {
          if (dingque >= 0) {
            var t1 = self.getMahjongType(a);
            var t2 = self.getMahjongType(b);
            if (t1 != t2) {
              if (dingque == t1) return 1;
              if (dingque == t2) return -1;
            }
          }
          return a - b;
        });
      },
      getSide: function getSide(localIndex) {
        return this._sides[localIndex];
      },
      getPre: function getPre(localIndex) {
        return this._pres[localIndex];
      },
      getFoldPre: function getFoldPre(localIndex) {
        return this._foldPres[localIndex];
      },
      addCard: function addCard() {
        var _this = this;
        cc.loader.loadRes("hall/prefabs/NodePools/pbCard", function(err, prefab) {
          var newNode = cc.instantiate(prefab);
          _this.comNodePool.putNode(newNode);
          _.each(_this.cards, function(card, index) {
            var ndItem = _this.comNodePool.getNode(newNode);
            var com = ndItem.getComponent("PbCard");
            com.init(card.suit, card.point, true);
            _this.ndList.addChild(ndItem);
          });
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  MsgHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5db3d91ikhLEqjUX9xED0Xc", "MsgHelper");
    "use strict";
    var MsgType = cc.Enum({
      eNULL: -1,
      eToast: -1,
      eTopInfo: -1,
      eLoading: -1,
      eDialog: -1
    });
    var DlgType = cc.Enum({
      eNULL: -1,
      eGetItem: -1
    });
    var msgList = [];
    var msgIsBusy = false;
    function initHelper() {
      msgList = [];
      msgIsBusy = false;
      return module.exports;
    }
    function pauseMsgHelper() {
      msgIsBusy = true;
    }
    function resumeMsgHelper() {
      msgIsBusy = false;
    }
    function push(msg) {
      var mode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      switch (mode) {
       case 0:
        msgList.push(msg);
        check();
        break;

       case 1:
        _handleMsg(msg);
      }
    }
    function pushToast(title) {
      var mode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      var msg = getMsg(MsgType.eToast, [ title, mode ]);
      push(msg, mode);
    }
    function pushTopInfo(title) {
      var mode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var msg = getMsg(MsgType.eTopInfo, [ title, mode ]);
      push(msg, mode);
    }
    function pushLoading() {
      var seconds = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    }
    function removeLoading() {
      if (isLoadingScene) return;
      if (window.gComLoading) {
        NPHelper.putNode("PbLoading", window.gComLoading.node);
        window.gComLoading = null;
      }
    }
    function pushDialog(param) {
      var mode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var msg = getMsg(MsgType.eDialog, param);
      push(msg, mode);
    }
    function pushDlgGetItem(type, count) {
      var mode = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      pushDialog([ DlgType.eGetItem, type, count ], mode);
    }
    function onMsgFinished() {
      msgIsBusy = false;
      check();
    }
    function getMsg(pType, pBody) {
      var msg = {
        type: pType,
        body: pBody
      };
      return msg;
    }
    function check() {
      if (msgIsBusy) return;
      var list = msgList;
      if (0 === list.length) return;
      msgIsBusy = true;
      var msg = _pop();
      _handleMsg(msg);
    }
    function _handleMsg(msg) {
      var com = null;
      switch (msg.type) {
       case MsgType.eNULL:
        break;

       case MsgType.eToast:
        var node = NPHelper.getNode("PbToast");
        com = node.getComponent("PbToast");
        com.init(msg.body[0], msg.body[1]);
        node.setPosition(cc.v2(cc.director.getVisibleSize().width / 2, .2 * cc.director.getVisibleSize().height));
        break;

       case MsgType.eTopInfo:
        var _node = NPHelper.getNode("PbTopInfo");
        com = _node.getComponent("PbTopInfo");
        com.init(msg.body[0], msg.body[1]);
        _node.setPosition(cc.v2(cc.director.getVisibleSize().width / 2, .8 * cc.director.getVisibleSize().height));
        break;

       case MsgType.eLoading:
        var _node2 = NPHelper.getNode("PbLoading");
        com = _node2.getComponent("PbLoading");
        com.init(msg.body[0], msg.body[1]);
        window.gComLoading = com;
        _node2.setPosition(cc.v2(cc.director.getVisibleSize().width / 2, .5 * cc.director.getVisibleSize().height));
        break;

       case MsgType.eDialog:
        var dType = msg.body[0];
        switch (dType) {
         case DlgType.eGetItem:
          var _node3 = NPHelper.getNode("DlgGetItem");
          com = _node3.getComponent("DlgGetItem");
          com.init(msg.body[1], msg.body[2]);
        }
      }
      if (null != com) {
        var base = cc.director.getScene();
        base.addChild(com.node, 1e4);
      }
    }
    function _pop() {
      return msgList.splice(0, 1)[0];
    }
    module.exports = {
      initHelper: initHelper,
      MsgType: MsgType,
      DlgType: DlgType,
      push: push,
      pushToast: pushToast,
      pushTopInfo: pushTopInfo,
      pushLoading: pushLoading,
      removeLoading: removeLoading,
      pushDlgGetItem: pushDlgGetItem,
      pauseMsgHelper: pauseMsgHelper,
      resumeMsgHelper: resumeMsgHelper,
      check: check,
      getMsg: getMsg,
      onMsgFinished: onMsgFinished
    };
    cc._RF.pop();
  }, {} ],
  NPHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1690W0gA9OI4l4JM9PtTNZ", "NPHelper");
    "use strict";
    var Paths = {
      PbToast: "hall/prefabs/NodePools/pbToast",
      PbCard: "hall/prefabs/NodePools/pbCard"
    };
    var ndPoolList = {};
    var ndNodeBackup = {};
    function testLog() {
      var info = "";
      _.each(ndPoolList, function(pool, i) {
        info += i + " :";
        info += pool._pool.length;
        info += " ";
      });
      info = "@@ POOL: " + info;
      cc.log(info);
    }
    function initHelper() {
      var cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      var loaded = 0;
      _.each(Paths, function(value, key) {
        CCLoaderHelper.getRes(value, cc.Prefab, function(err, prefab) {
          cc.log("@ NPHelper: <" + key + "> is loaded");
          loaded++;
          ndNodeBackup[key] = cc.instantiate(prefab);
          if (loaded >= _.size(Paths)) {
            _initPool();
            cb && cb();
            return;
          }
        });
      });
    }
    function _initPool() {
      for (var name in Paths) {
        ndPoolList[name] = new cc.NodePool(name);
        ndPoolList[name].put(getNode(name));
      }
    }
    function clearPool() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      if (null === name) for (var _name in Paths) _clearAPool(_name); else _clearAPool(name);
    }
    function _clearAPool(name) {
      var pool = ndPoolList[name];
      if (null === pool) return;
      var count = pool._pool.length;
      if (count <= 1) return;
      for (var i = 1; i < count; ++i) pool._pool[i].destroy();
      pool._pool.length = 1;
    }
    function putNode(name, node) {
      ndPoolList[name].put(node);
    }
    function getNode() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "PbCard";
      testLog();
      try {
        var item = ndPoolList[name].get();
        item || (item = cc.instantiate(ndNodeBackup[name]));
        item.x = 0;
        item.y = 0;
        item.scale = 1;
        item.skewY = 0;
        item.skewX = 0;
        return item;
      } catch (err) {
        cc.log("@ NPHelper Error! err : " + name);
        cc.log(err);
        return module.exports.getNode(name);
      }
    }
    module.exports = {
      testLog: testLog,
      initHelper: initHelper,
      getNode: getNode,
      putNode: putNode,
      clearPool: clearPool
    };
    cc._RF.pop();
  }, {} ],
  Net: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1cc9yRd15CXqFg0vTGKZUk", "Net");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    null == window.io && (window.io = require("socket-io"));
    var Global = cc.Class({
      extends: cc.Component,
      statics: {
        ip: "",
        sio: null,
        isPinging: false,
        fnDisconnect: null,
        handlers: {},
        addHandler: function addHandler(event, fn) {
          return;
          var handler;
        },
        connect: function connect(fnConnect, fnError) {
          var self = this;
          var opts = {
            reconnection: false,
            "force new connection": true,
            transports: [ "websocket", "polling" ]
          };
          this.sio = window.io.connect(this.ip, opts);
          this.sio.on("reconnect", function() {
            console.log("reconnection");
          });
          this.sio.on("connect", function(data) {
            self.sio.connected = true;
            fnConnect(data);
          });
          this.sio.on("disconnect", function(data) {
            console.log("disconnect");
            self.sio.connected = false;
            self.close();
          });
          this.sio.on("connect_failed", function() {
            console.log("connect_failed");
          });
          for (var key in this.handlers) {
            var value = this.handlers[key];
            if ("function" == typeof value) if ("disconnect" == key) this.fnDisconnect = value; else {
              console.log("register:function " + key);
              this.sio.on(key, value);
            }
          }
          this.startHearbeat();
        },
        startHearbeat: function startHearbeat() {
          this.sio.on("game_pong", function() {
            console.log("game_pong");
            self.lastRecieveTime = Date.now();
            self.delayMS = self.lastRecieveTime - self.lastSendTime;
          });
          this.lastRecieveTime = Date.now();
          var self = this;
          console.log(1);
          if (!self.isPinging) {
            self.isPinging = true;
            cc.game.on(cc.game.EVENT_HIDE, function() {
              self.ping();
            });
            setInterval(function() {
              self.sio && self.ping();
            }.bind(this), 5e3);
            setInterval(function() {
              self.sio && Date.now() - self.lastRecieveTime > 1e4 && self.close();
            }.bind(this), 500);
          }
        },
        send: function send(event, data) {
          if (this.sio.connected) {
            null != data && "object" == ("undefined" === typeof data ? "undefined" : _typeof(data)) && (data = JSON.stringify(data));
            this.sio.emit(event, data);
          }
        },
        ping: function ping() {
          if (this.sio) {
            this.lastSendTime = Date.now();
            this.send("game_ping");
          }
        },
        close: function close() {
          console.log("close");
          this.delayMS = null;
          if (this.sio && this.sio.connected) {
            this.sio.connected = false;
            this.sio.disconnect();
          }
          this.sio = null;
          if (this.fnDisconnect) {
            this.fnDisconnect();
            this.fnDisconnect = null;
          }
        },
        test: function test(fnResult) {
          var xhr = null;
          var fn = function fn(ret) {
            fnResult(ret.isonline);
            xhr = null;
          };
          var arr = this.ip.split(":");
          var data = {
            account: cc.vv.userMgr.account,
            sign: cc.vv.userMgr.sign,
            ip: arr[0],
            port: arr[1]
          };
          xhr = cc.vv.http.sendRequest("/is_server_online", data, fn);
          setTimeout(function() {
            if (xhr) {
              xhr.abort();
              fnResult(false);
            }
          }, 1500);
        }
      }
    });
    cc._RF.pop();
  }, {
    "socket-io": "socket-io"
  } ],
  NoticeTip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df61b4+FzFDvbpO5g8UNVIM", "NoticeTip");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _guohu: null,
        _info: null,
        _guohuTime: -1
      },
      onLoad: function onLoad() {
        this._guohu = cc.find("Canvas/tip_notice");
        this._guohu.active = false;
        this._info = cc.find("Canvas/tip_notice/info").getComponent(cc.Label);
        var self = this;
        this.node.on("push_notice", function(data) {
          var data = data.detail;
          self._guohu.active = true;
          self._guohuTime = data.time;
          self._info.string = data.info;
        });
      },
      update: function update(dt) {
        if (this._guohuTime > 0) {
          this._guohuTime -= dt;
          this._guohuTime < 0 && (this._guohu.active = false);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  NotifyHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b8adIerBNFiYbhUiny5/te", "NotifyHelper");
    "use strict";
    module.exports = new cc.EventTarget();
    var helper = module.exports;
    helper.checkError = function(name) {};
    helper.debugLog = function(name) {};
    helper.clearAll = function() {};
    helper.register = function() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      this.on(name, cb);
      this.debugLog(name);
    };
    helper.registerOnce = function() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      this.once(name, cb);
    };
    helper.notify = function() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var detail = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      cc.log(name);
      this.emit(name, detail);
    };
    helper.remove = function() {
      var name = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      this.off(name, cb);
    };
    cc._RF.pop();
  }, {} ],
  OnBack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fd982Tyi5NOYJWt/fGY8Lj", "OnBack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var btn = this.node.getChildByName("btn_back");
        cc.vv.utils.addClickEvent(btn, this.node, "OnBack", "onBtnClicked");
      },
      onBtnClicked: function onBtnClicked(event) {
        "btn_back" == event.target.name && (this.node.active = false);
      }
    });
    cc._RF.pop();
  }, {} ],
  PBHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "785436iQGRDUrKYTX6QhbaK", "PBHelper");
    "use strict";
    var _Paths;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    var prePath = "hall/prefabs/Dlgs/";
    var prePathGroup = "hall/prefabs/Dlgs/Group/";
    var prePathMJ = "hall/prefabs/Dlgs/MJ/";
    var prePathComs = "hall/prefabs/coms/";
    var prePathGameShares = "hall/gameshares/prefabs/";
    var prePathBulletScreen = "hall/prefabs/";
    var Paths = (_Paths = {
      DlgRankRewardRank: prePath + "DlgRankRewardRank",
      DlgRankRewardMain: prePath + "DlgRankRewardMain",
      DlgNotice: prePath + "DlgNotice",
      DlgNotice2: prePath + "DlgNotice2",
      DlgCreateRoom: prePath + "DlgCreateRoom",
      DlgJoinRoom: prePath + "DlgJoinRoom",
      DlgJoinRoom2: prePath + "DlgJoinRoom2",
      DlgViewRoom: prePath + "DlgViewRoom",
      DlgResult: prePath + "DlgResult",
      DlgResultFinal: prePath + "DlgResultFinal",
      DlgHistory: prePath + "DlgHistory",
      DlgPlayerInfo: prePath + "DlgPlayerInfo",
      DlgSetting: prePath + "DlgSetting",
      DlgChat: prePath + "DlgChat",
      DlgHelp: prePath + "DlgHelp",
      DlgShare: prePath + "DlgShare",
      DlgCreatedRecords: prePath + "DlgCreatedRecords",
      DlgCreateSuccess: prePath + "DlgCreateSuccess",
      DlgInviteInfo: prePath + "DlgInviteInfo",
      DlgInviteMyList: prePath + "DlgInviteMyList",
      DlgInviteBind: prePath + "DlgInviteBind",
      DlgInviteCash: prePath + "DlgInviteCash",
      DlgBuyCard: prePath + "DlgBuyCard",
      DlgCharge: prePath + "DlgCharge",
      DlgRubCard: prePath + "DlgRubCard",
      DlgTurntable: prePath + "DlgTurntable",
      DlgGiveDiamonds: prePath + "DlgGiveDiamonds",
      DlgGiveDiamondsHistory: prePath + "DlgGiveDiamondsHistory",
      DlgMails: prePath + "DlgMails",
      DlgGetItems: prePath + "DlgGetItems",
      DlgPhoneRegister: prePath + "DlgPhoneRegister",
      DlgRevisePassword: prePath + "DlgRevisePassword",
      DlgHeads: prePath + "DlgHeads",
      DlgWebView: prePath + "DlgWebView",
      DlgMyWallet: prePath + "DlgMyWallet",
      DlgWalletRecharge: prePath + "DlgWalletRecharge",
      DlgWalletWithdraw: prePath + "DlgWalletWithdraw",
      DlgWalletConvert: prePath + "DlgWalletConvert",
      DlgWalletToEth: prePath + "DlgWalletToEth",
      DlgWalletUPGDesc: prePath + "DlgWalletUPGDesc",
      DlgShare2: prePath + "DlgShare2",
      DlgInvitationDetails: prePath + "DlgInvitationDetails",
      DlgService: prePath + "DlgService",
      DlgWalletRecordAll: prePath + "DlgWalletRecordAll",
      DlgWalletRecordIn: prePath + "DlgWalletRecordIn",
      DlgWalletRecordOut: prePath + "DlgWalletRecordOut",
      DlgShareSpecQR: prePath + "DlgShareSpecQR",
      DlgCheckCode: prePath + "DlgCheckCode",
      DlgGameNeedDownload: prePath + "DlgGameNeedDownload",
      DlgShareOut: prePath + "DlgShareOut",
      DlgShareOutDetail: prePath + "DlgShareOutDetail",
      DlgShareOutHistory: prePath + "DlgShareOutHistory",
      DlgShareOutHistoryDetail: prePath + "DlgShareOutHistoryDetail",
      DlgGetCandy: prePath + "DlgGetCandy",
      DlgPublicNotice: prePath + "DlgPublicNotice",
      DlgSupplement: prePath + "DlgSupplement",
      DlgGroupList: prePathGroup + "DlgGroupList",
      DlgGroupMain: prePathGroup + "DlgGroupMain",
      DlgGroupApply: prePathGroup + "DlgGroupApply",
      DlgGroupEditNotice: prePathGroup + "DlgGroupEditNotice",
      DlgGroupInvite: prePathGroup + "DlgGroupInvite",
      DlgGroupInvited: prePathGroup + "DlgGroupInvited",
      DlgGroupMatch: prePathGroup + "DlgGroupMatch",
      DlgGroupMatchRank: prePathGroup + "DlgGroupMatchRank",
      DlgGroupMembers: prePathGroup + "DlgGroupMembers",
      DlgGroupCreate: prePathGroup + "DlgGroupCreate",
      DlgGroupJoin: prePathGroup + "DlgGroupJoin",
      DlgGroupChangeScore: prePathGroup + "DlgGroupChangeScore"
    }, _defineProperty(_Paths, "DlgGroupApply", prePathGroup + "DlgGroupApply"), _defineProperty(_Paths, "DlgGroupScoreHistory", prePathGroup + "DlgGroupScoreHistory"), 
    _defineProperty(_Paths, "DlgGroupBlacklist", prePathGroup + "DlgGroupBlacklist"), 
    _defineProperty(_Paths, "DlgGroupSetting", prePathGroup + "DlgGroupSetting"), _defineProperty(_Paths, "DlgGroupFundSetting", prePathGroup + "DlgGroupFundSetting"), 
    _defineProperty(_Paths, "DlgGroupFundRecords", prePathGroup + "DlgGroupFundRecords"), 
    _defineProperty(_Paths, "DlgBindPhone", prePath + "DlgBindPhone"), _defineProperty(_Paths, "DlgMJResult", prePathMJ + "DlgMJResult"), 
    _defineProperty(_Paths, "DlgMJResult2", prePathMJ + "DlgMJResult2"), _defineProperty(_Paths, "DlgMJTurntable", prePathMJ + "DlgMJTurntable"), 
    _defineProperty(_Paths, "DlgMJCreateRoom", prePathMJ + "DlgMJCreateRoom"), _defineProperty(_Paths, "DlgMJResultFinal", prePathMJ + "DlgMJResultFinal"), 
    _defineProperty(_Paths, "DlgMJDissolution", prePathMJ + "DlgMJDissolution"), _defineProperty(_Paths, "DlgMJDissolutionTrue", prePathMJ + "DlgMJDissolutionTrue"), 
    _defineProperty(_Paths, "DlgMJRoomDetail", prePathMJ + "DlgMJRoomDetail"), _defineProperty(_Paths, "DlgMJHistory", prePathMJ + "DlgMJHistory"), 
    _defineProperty(_Paths, "DlgMJHistoryVideo", prePathMJ + "DlgMJHistoryVideo"), _defineProperty(_Paths, "DlgMJHelp", prePathMJ + "DlgMJHelp"), 
    _defineProperty(_Paths, "DlgMJAgent", prePathMJ + "DlgMJAgent"), _defineProperty(_Paths, "DlgMJPlayAgain", prePathMJ + "DlgMJPlayAgain"), 
    _defineProperty(_Paths, "DlgMJHistoryView", prePathMJ + "DlgMJHistoryView"), _defineProperty(_Paths, "PbBadgeView", prePathGameShares + "PbBadgeView"), 
    _defineProperty(_Paths, "PbVoiceState", prePathGameShares + "PbVoiceState"), _defineProperty(_Paths, "PbClock", prePathGameShares + "PbClock"), 
    _defineProperty(_Paths, "PbGoldActionLayer", prePathGameShares + "PbGoldActionLayer"), 
    _defineProperty(_Paths, "PbBulletScreen", prePathBulletScreen + "PbBulletScreen"), 
    _Paths);
    module.exports.addNode = function(name) {
      var parent = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var cb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var zorder = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 9999;
      module.exports.getNode(name, function(node) {
        null === parent && (parent = cc.director.getScene().getChildByName("Canvas"));
        parent.getChildByTag(zorder) && parent.getChildByTag(zorder).destroy();
        parent.addChild(node, zorder, zorder);
        cb && cb(node);
      });
    };
    module.exports.getNode = function(name) {
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var setShowLoading = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var cbDone = cb;
      CCLoaderHelper.getRes(Paths[name], cc.Prefab, function(err, res) {
        var node = cc.instantiate(cc.loader.getRes(Paths[name]));
        cbDone && cbDone(node);
        return node;
      });
    };
    module.exports.releaseNode = function() {
      var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      var _release = function _release(key) {
        cc.log("@Release:" + key);
        var deps = cc.loader.getDependsRecursively(Paths[key]);
        cc.loader.release(deps);
      };
      if (null === key) for (var _key in Paths) _release(_key); else _release(key);
    };
    cc._RF.pop();
  }, {} ],
  PbCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "139f2zMTQxFToqqHmDWORIh", "PbCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spPoint: cc.Sprite,
        lbPoint: cc.Label,
        spSuit: cc.Sprite,
        spMain: cc.Sprite,
        spBg: cc.Sprite,
        ndBanker: cc.Node,
        ndFold: cc.Node,
        colorRed: cc.Color.RED,
        colorBlack: cc.Color.BLACK,
        colorLaizi: cc.Color.YELLOW,
        sfBgCover: cc.SpriteFrame,
        sfBgBlank: cc.SpriteFrame,
        sfFaces: {
          default: [],
          type: cc.SpriteFrame
        },
        sfLaiziIcon: cc.SpriteFrame,
        sfSuits: {
          default: [],
          type: cc.SpriteFrame
        },
        sfPoints: {
          default: [],
          type: cc.SpriteFrame
        }
      },
      onLoad: function onLoad() {},
      init: function init(suit, point) {
        var isFront = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var isBanker = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var isLaizi = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.suit = suit;
        this.point = point;
        this.choosed = false;
        this.hitted = false;
        this.showChoosed(false);
        this.showHitted(false);
        this.node.active = true;
        this.spPoint.node.active = true;
        this.spPoint.spriteFrame = this.sfPoints[point - 1];
        var isFaceCard = point > 10;
        this.spMain.spriteFrame = isFaceCard ? this.sfFaces[point - 11] : this.sfSuits[suit - 1];
        if (suit <= 4) {
          this.spSuit.node.active = true;
          this.spSuit.spriteFrame = this.sfSuits[suit - 1];
        }
        this.baseColor = 2 === suit || 4 === suit ? this.colorBlack : this.colorRed;
        this.mainColor = isFaceCard ? cc.Color.WHITE : this.baseColor;
        if (point >= 14) {
          this.spSuit.node.active = false;
          this.baseColor = 14 === point ? this.colorBlack : this.colorRed;
        }
        this.spPoint.node.color = this.baseColor;
        this.spSuit.node.color = this.baseColor;
        this.spMain.node.color = this.mainColor;
        this.ndBanker.active = isBanker;
        isLaizi && this.showLaizi();
        this.spSuit.node.scale = isLaizi ? .55 : .35;
        this.spMain.node.scale = isLaizi ? 1.15 : 1;
        this.showCardFront(isFront);
      },
      showLaizi: function showLaizi() {
        this.spMain.spriteFrame = this.sfLaiziIcon;
        this.spSuit.spriteFrame = this.sfLaiziIcon;
        this.spSuit.node.color = cc.Color.WHITE;
        this.spPoint.node.color = this.colorLaizi;
        this.spMain.node.color = cc.Color.WHITE;
        this.spPoint.node.active = true;
        this.spSuit.node.active = true;
        this.spSuit.node.scale = .55;
        this.spMain.node.scale = 1.15;
      },
      showBanker: function showBanker(show) {
        this.ndBanker.active = show;
      },
      showChoosed: function showChoosed(show) {
        if (null === show) this.choosed = !this.choosed; else {
          if (show === this.choosed) return;
          this.choosed = show;
        }
        this.choosed ? this.node.y = 50 : this.node.y = 0;
      },
      showHitted: function showHitted(show) {
        if (null === show) this.hitted = !this.hitted; else {
          show === this.hitted;
          this.hitted = show;
        }
        var num = 255;
        if (this.hitted) {
          num = 220;
          this.ndFold.active = true;
        } else this.ndFold.active = false;
        this.spMain.node.opacity = num;
        this.spPoint.node.opacity = num;
        this.spSuit.node.opacity = num;
      },
      showCardFront: function showCardFront() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.spPoint.node.active = show;
        this.spSuit.node.active = show;
        this.spMain.node.active = show;
        this.spBg.spriteFrame = show ? this.sfBgBlank : this.sfBgCover;
      },
      showCardFrontWithFlipAction: function showCardFrontWithFlipAction() {
        var _this = this;
        var _cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        var cb = function cb() {
          _this.showCardFront();
          _cb && _cb();
        };
        this.node.runAction(ActionHelper.getFlip(cb, this.node.scaleX));
      }
    });
    cc._RF.pop();
  }, {} ],
  PbClock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb8e2OwQ59FjY8mmfTa+Uh4", "PbClock");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lbCenter: cc.Label,
        pbarLight: cc.ProgressBar
      },
      onLoad: function onLoad() {
        this.scheduleActive = false;
      },
      onDisable: function onDisable() {
        cc.log("@clock disable");
        this.removeSchedule();
      },
      update: function update(dt) {
        this.scheduleActive && this.updateLight(dt);
      },
      initTime: function initTime(time) {
        if (time < 0) return;
        this.timeOri = time;
        this.timeInt = time;
        this.timeFloat = time;
        this.lbCenter.string = time;
        this.scheduleActive = true;
      },
      updateTime: function updateTime() {
        this.timeInt--;
        this.lbCenter.string = this.timeInt;
        3 == this.timeInt && NotifyHelper.notify(NOTIFY_SHOW_321);
        if (this.timeInt <= 3 && "bjl" == cc.currentGame) return;
        if (this.timeInt <= 2 && "bjl" == cc.currentGame) return;
      },
      updateLight: function updateLight(dt) {
        this.timeFloat -= dt;
        if (this.timeFloat < 0) {
          this.removeSchedule();
          this.node.active = false;
          return;
        }
        var timeInt = Math.ceil(this.timeFloat);
        timeInt != this.timeInt && this.updateTime();
      },
      removeSchedule: function removeSchedule() {
        this.scheduleActive = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  PbGoldActionLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ff75s9hidIEouvZrs7A3eb", "PbGoldActionLayer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndGoldItem: cc.Node
      },
      onLoad: function onLoad() {
        var _this = this;
        this.ndGoldItem.active = false;
        this._maxGoldCount = 30;
        this.playerToBankerTime = .4;
        this.bankerToPlayerTime = .4;
        this.delayTime = .3;
        this.timeSum = .6;
        this.speed = 3500;
        this.offset = 30;
        this._comScheduler = this.addComponent("ComScheduler");
        this.comNodePool = this.addComponent("ComNodePool");
        _.times(400, function() {
          _this._putNode(cc.instantiate(_this.ndGoldItem));
        });
      },
      onDestroy: function onDestroy() {
        this._comScheduler.clearAll();
      },
      onBtnClick: function onBtnClick() {
        this.playerMoveBanker(5, cc.v2(0, 0), cc.v2(_.random(-500, 500), _.random(-500, 500)));
      },
      playerMoveBanker: function playerMoveBanker(winTimes, playerPos, bankerPos) {
        var _this2 = this;
        this._actionAll(winTimes, function() {
          _this2._goldActionPlayerMoveBanker(playerPos, bankerPos, 100);
          _this2._goldActionPlayerMoveBanker(playerPos, bankerPos, 255);
        }, playerPos, bankerPos);
      },
      bankerMovePlayer: function bankerMovePlayer(winTimes, bankerPos, playerPos) {
        var _this3 = this;
        var time = this.playerToBankerTime + this.timeSum + this.delayTime;
        this._comScheduler.once("bankerMovePlayer", function() {
          _this3._actionAll(winTimes, function() {
            _this3._goldActionBankerMovePlayer(bankerPos, playerPos, 100);
            _this3._goldActionBankerMovePlayer(bankerPos, playerPos, 255);
          });
        }, time);
      },
      _actionAll: function _actionAll(winTimes) {
        var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        var _this4 = this;
        var playerPos = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        var bankerPos = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        AudioMgr_Game.playSpecial("gold");
        winTimes = Math.min(5 * winTimes, this._maxGoldCount);
        winTimes = this._maxGoldCount;
        var time = this.timeSum / winTimes;
        var delay = 0;
        cc.log(winTimes);
        _.times(winTimes, function(i) {
          delay = time * (i + 1);
          _this4._comScheduler.once("playerMoveBanker", function() {
            cb && cb();
          }, delay);
        });
      },
      _createGold: function _createGold() {
        var pos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc.v2(0, 0);
        var opacity = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255;
        var item = this.comNodePool.getNode(this.ndGoldItem);
        item.opacity = opacity;
        item.setPosition(pos);
        item.active = true;
        this.node.addChild(item);
        return item;
      },
      _goldActionPlayerMoveBanker: function _goldActionPlayerMoveBanker(playerPos, bankerPos, opacity) {
        var _this5 = this;
        this._actionMove(this.playerToBankerTime, playerPos, bankerPos, opacity, function(gold) {
          _this5._putNode(gold);
        });
      },
      _goldActionBankerMovePlayer: function _goldActionBankerMovePlayer(bankerPos, playerPos, opacity) {
        var _this6 = this;
        this._actionMove(this.bankerToPlayerTime, bankerPos, playerPos, opacity, function(gold) {
          _this6._putNode(gold);
        });
      },
      _actionMove: function _actionMove(time, startPos, endPos, opacity, cb) {
        var random1 = _.random(-this.offset, this.offset);
        var random2 = _.random(-this.offset, this.offset);
        var gold = this._createGold(startPos, opacity);
        var _time = cc.pDistance(startPos, endPos) / this.speed;
        _time > this.playerToBankerTime && (this.playerToBankerTime = this.bankerToPlayerTime = _time);
        var moveTo = cc.moveTo(_time, cc.v2(endPos.x + random1, endPos.y + random2));
        var callFunc = cc.callFunc(function() {
          cb && cb(gold);
        });
        var delay = cc.fadeOut(this.delayTime);
        var seq = cc.sequence(moveTo, delay, callFunc);
        gold.stopAllActions();
        gold.runAction(seq);
      },
      _putNode: function _putNode(node) {
        node.opacity = 255;
        this.comNodePool.putNode(node);
      }
    });
    cc._RF.pop();
  }, {} ],
  PbPlayer_NN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a13284XvmBM9Y/8Kjt1IVT9", "PbPlayer_NN");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndHead: cc.Node,
        lbName: cc.Label,
        lbScore: cc.Label,
        spHead: cc.Sprite,
        ndMiss: cc.Node,
        ndBanker: cc.Node,
        ndBankerLight: cc.Node,
        ndOxBg: cc.Node,
        spOxResult: cc.Sprite,
        spState: cc.Sprite,
        sfReady: cc.SpriteFrame,
        sfFinish: cc.SpriteFrame,
        sfRob: cc.SpriteFrame,
        sfUnRob: cc.SpriteFrame,
        sfBet1: cc.SpriteFrame,
        sfBet2: cc.SpriteFrame,
        sfBet3: cc.SpriteFrame,
        ndCardHolderContainer: cc.Node,
        ndCardShowContainer: cc.Node,
        ndChatFace: cc.Node,
        ndChatInfo: cc.Node,
        ndLoseScore: cc.Node,
        ndWinScore: cc.Node,
        ndChatBubble: cc.Node
      },
      onLoad: function onLoad() {
        var _this = this;
        var effHead = this.node.getChildByName("eff_head");
        this.defaultNickFontSize = this.ndChatInfo.getChildByName("info").getComponent(cc.Label).fontSize;
        effHead && (effHead.active = false);
        this.ndChatBubble.active = false;
        this.ndLoseScore.getChildByName("score").opacity = 0;
        this.ndWinScore.getChildByName("score").opacity = 0;
        this.ndLoseScore.active = false;
        this.ndWinScore.active = false;
        this._oxResultScale = this.spOxResult.node.scale;
        this._bankerScale = this.ndBanker.scale;
        this._chatSche = null;
        this.scoreTime = .5;
        this.waitTime = 4;
        this.startPos = cc.v2(this.ndLoseScore.getChildByName("score").getPosition().x, this.ndLoseScore.getChildByName("score").getPosition().y - 40);
        this._comScheduler = this.addComponent("ComScheduler");
        this._ntf = this.addComponent("ComNotify");
        this._ntf.register(NOTIFY_VOICE_PLAY_START, function(event) {
          event.detail.cid == _this.cid;
        });
        this._ntf.register(NOTIFY_VOICE_PLAY_END, function(event) {
          _this.ndChatBubble.active = false;
        });
        this.resetAll();
      },
      onDestroy: function onDestroy() {
        this._comScheduler.clearAll();
      },
      start: function start() {},
      init: function init(cid) {
        this.cid = cid;
      },
      updateRoundScore: function updateRoundScore(score, cb) {
        var _this2 = this;
        this.ndLoseScore.active = score <= 0;
        this.ndWinScore.active = score > 0;
        score = StringHelper.getValueChinese(score);
        var ndLoseScore = this.ndLoseScore.getChildByName("score");
        var ndWinScore = this.ndWinScore.getChildByName("score");
        this.ndLoseScore.active && (ndLoseScore.getComponent(cc.Label).string = score);
        this.ndWinScore.active && (ndWinScore.getComponent(cc.Label).string = "+" + score);
        var seq = ActionHelper.getFadeInToFadeOut(this.scoreTime, this.waitTime, function() {
          ndLoseScore.opacity = 0;
          ndWinScore.opacity = 0;
          _this2.ndLoseScore.active = false;
          _this2.ndWinScore.active = false;
        });
        if (this.ndLoseScore.active) {
          ndLoseScore.stopAllActions();
          ndLoseScore.setPosition(this.startPos);
          ndLoseScore.runAction(seq);
        }
        if (this.ndWinScore.active) {
          ndWinScore.stopAllActions();
          ndWinScore.setPosition(this.startPos);
          ndWinScore.runAction(seq);
        }
      },
      showAnimation: function showAnimation() {
        var effHead = this.node.getChildByName("eff_head");
        if (effHead) {
          effHead.active = true;
          effHead.getComponent(cc.Animation).play();
        }
      },
      resetPart: function resetPart() {
        this.showOxResult(-1, false);
        this.showBanker(false);
        this.showState(null, false);
        this.removeCards(2);
        this.removeCards(1);
      },
      resetAll: function resetAll() {
        var effHead = this.node.getChildByName("eff_head");
        effHead.active = false;
        this.ndLoseScore.active = false;
        this.ndWinScore.active = false;
        this.resetPart();
        this.showMiss(false);
        this.showChat(false);
      },
      setRightMode: function setRightMode() {
        this.isRightModeEnabled = true;
        this.ndHead.x *= -1;
        this.ndMiss.x *= -1;
        this.ndBanker.x *= -1;
        this.spState.node.x *= -1;
        this.spOxResult.node.x *= -1;
        this.ndOxBg.x *= -1;
        this.ndCardShowContainer.x *= -1;
        this.ndCardHolderContainer.x *= -1;
        this.ndChatFace.x *= -1;
        this.ndChatInfo.x *= -1;
        this.ndLoseScore.x *= -1;
        this.ndWinScore.x *= -1;
        this.ndChatBubble.x *= -1;
        this.node.getChildByName("eff_head").x *= -1;
      },
      onHeadClicked: function onHeadClicked(event, custom) {
        var _this3 = this;
        var user = GameMsgHandler.getUserByCid(this.cid);
        if (!user) return;
        PBHelper.addNode("DlgPlayerInfo", gGameScene.node, function(node) {
          var com = node.getComponent("DlgPlayerInfo");
          com.initWithData(user.nick, user.id, user.ip, user.head, user.desp ? user.desp : "", user.sex, 0 == _this3.cid);
        });
      },
      showName: function showName(name) {
        this.lbName.string = name;
      },
      showScore: function showScore(money) {
        var m = money;
        this.lbScore.string = m;
      },
      showHead: function showHead(head) {
        head = "" == head ? 0 : head;
        this._isPositiveInteger(head);
      },
      showMiss: function showMiss() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.ndMiss.active === show) return;
        this.ndMiss.active = show;
      },
      showBanker: function showBanker() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.ndBanker.active != show && (this.ndBanker.active = show);
        this.ndBankerLight.active != show && (this.ndBankerLight.active = show);
        if (show) {
          var scale = this._bankerScale;
          var action = cc.spawn(ActionHelper.getBigToSmall(.6, 2 * scale, scale), cc.rotateBy(.6, 360));
          this.ndBanker.rotation = 0;
          this.ndBanker.scale = scale;
          this.ndBanker.runAction(action);
        }
      },
      hideBankerAction: function hideBankerAction() {
        this.ndBankerLight.active = false;
      },
      showBankerAction: function showBankerAction() {
        this.ndBankerLight.active = true;
      },
      showState: function showState() {
        var sf = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        var show = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        show = null != sf && show;
        true == show && (this.spState.spriteFrame = sf);
        this.spState.node.active != show && (this.spState.node.active = show);
      },
      showReady: function showReady() {
        var show = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        cc.log("showReady " + show);
        this.showState(this.sfReady, show);
      },
      showRob: function showRob() {
        var rob = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        var show = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var sf = rob ? this.sfRob : this.sfUnRob;
        this.showState(sf, show);
      },
      showCallScore: function showCallScore(scoreValue) {
        var show = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        var sfs = [ this.sfBet1, this.sfBet2, this.sfBet3 ];
        this.showState(sfs[scoreValue - 1], show);
      },
      showOxResult: function showOxResult() {
        var result = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        var show = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        cc.log("@showOxResult: " + result + " show: " + show);
        if (this.spOxResult.node.active && show && -1 === result) return;
        this.spOxResult.node.active != show && (this.spOxResult.node.active = show);
        this.ndOxBg.active != show && (this.ndOxBg.active = show);
        if (show) {
          this.spOxResult.spriteFrame = -1 === result ? this.sfFinish : TexHelper.getOXType(result);
          this.spOxResult.node.scale = 3 * this._oxResultScale;
          this.spOxResult.node.runAction(ActionHelper.getScaleTo(.2, this._oxResultScale));
        }
      },
      addCards: function addCards(posType, cards) {
        var _this4 = this;
        var isFront = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var showAction = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        _.each(cards, function(card) {
          _this4.addCard(posType, card, isFront, showAction);
        });
      },
      addCard: function addCard(posType, card) {
        var isFront = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var showAction = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var container = 1 === posType ? this.ndCardHolderContainer : this.ndCardShowContainer;
        var com = NPHelper.getNode("PbCard").getComponent("PbCard");
        com.init(card.suit, card.point, isFront);
        container.addChild(com.node);
        showAction && com.showCardFrontWithFlipAction();
        return com;
      },
      removeCards: function removeCards(posType) {
        var container = 1 === posType ? this.ndCardHolderContainer : this.ndCardShowContainer;
        for (var i = container.children.length; i > 0; i--) NPHelper.putNode("PbCard", container.children[i - 1]);
      },
      moveCardsToShowArea: function moveCardsToShowArea() {
        if (_.size(this.ndCardHolderContainer.children) <= 0 && _.size(this.ndCardShowContainer.children) <= 0) this.addCards(2, [ {
          point: 1
        }, {
          point: 1
        }, {
          point: 1
        }, {
          point: 1
        }, {
          point: 1
        } ], false, false); else while (_.size(this.ndCardHolderContainer.children) > 0) {
          var node = this.ndCardHolderContainer.children[0];
          node.removeFromParent();
          node.parent = this.ndCardShowContainer;
          var com = node.getComponent("PbCard");
          com.showCardFront(false);
          com.showChoosed(false);
        }
      },
      getCardsCount: function getCardsCount(posType) {
        var container = 1 === posType ? this.ndCardHolderContainer : this.ndCardShowContainer;
        return _.size(container.children);
      },
      chooseCards: function chooseCards() {
        var _this5 = this;
        var indexs = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        _.each(this.ndCardHolderContainer.children, function(node) {
          var card = node.getComponent("PbCard");
          card.showChoosed(false);
        });
        if (null === indexs) return;
        _.each(indexs, function(i) {
          var node = _this5.ndCardHolderContainer.children[i];
          void 0 != node && null != node && node.getComponent("PbCard").showChoosed(true);
        });
      },
      showChat: function showChat(show, type, value) {
        var _this6 = this;
        if (4 == type) {
          this.ndChatBubble.active = show;
          return;
        }
        this.ndChatFace.active = show;
        this.ndChatInfo.active = show;
        if (!show) return;
        var bg1 = this.ndChatInfo.getChildByName("bg1");
        var bg2 = this.ndChatFace.getChildByName("bg2");
        var icon = this.ndChatFace.getChildByName("icon");
        var info = this.ndChatInfo.getChildByName("info");
        info.getComponent(cc.Label).fontSize = this.defaultNickFontSize;
        info.getComponent(cc.Label).lineHeight = this.defaultNickFontSize;
        icon.active = 1 === type;
        bg2.active = 1 === type;
        info.active = type >= 2;
        bg1.active = type >= 2;
        var time = 6;
        switch (type) {
         case 1:
          var tex = this._sfChatFace.getSf(value);
          if (!tex) return;
          icon.getComponent(cc.Sprite).spriteFrame = tex;
          break;

         case 2:
          info.getComponent(cc.Label).string = $G.gCData.Chat_TextList[value - 1];
          break;

         case 3:
          info.getComponent(cc.Label).string = value;
          time = 12;
        }
        this.ndChatInfo.active && this.ndChatInfo.runAction(ActionHelper.getDlgShow());
        this.ndChatFace.active && this.ndChatFace.runAction(ActionHelper.getDlgShow());
        this._chatSche && this.unschedule(this._chatSche);
        this._chatSche = function() {
          _this6.showChat(false);
          _this6._chatSche = null;
        };
        this.scheduleOnce(this._chatSche, time);
      },
      _isPositiveInteger: function _isPositiveInteger(s) {
        var re = /^[0-9]+$/;
        return re.test(s);
      }
    });
    cc._RF.pop();
  }, {} ],
  PbToast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef6ddvR61lMB7FjtR8aiK8O", "PbToast");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Sprite,
        title: cc.Label
      },
      onLoad: function onLoad() {},
      init: function init() {
        var info = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        var msgMode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.title.string = info;
        this.msgMode = msgMode;
        this.node.y = .38 * cc.director.getScene().getChildByName("Canvas").height * -.35;
        this._resizeBg();
        this._show();
      },
      _resizeBg: function _resizeBg() {},
      _show: function _show() {
        var offset = 80;
        var a1 = cc.moveBy(1.5, cc.p(0, offset));
        a1.easing(cc.easeExponentialOut(1));
        var cb = cc.callFunc(this._removeSelf, this);
        var seq = cc.sequence(a1, cb);
        this.node.y -= offset;
        this.node.runAction(seq);
      },
      _removeSelf: function _removeSelf() {
        NPHelper.putNode("PbToast", this.node);
        0 === this.msgMode && MsgHelper.onMsgFinished();
      }
    });
    cc._RF.pop();
  }, {} ],
  PengGangs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "279d9pNFGRB3rD/ngr1LIXQ", "PengGangs");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        if (!cc.vv) return;
        var gameChild = this.node.getChildByName("game");
        var myself = gameChild.getChildByName("myself");
        var pengangroot = myself.getChildByName("penggangs");
        var realwidth = cc.director.getVisibleSize().width;
        var scale = realwidth / 1280;
        pengangroot.scaleX *= scale;
        pengangroot.scaleY *= scale;
        var self = this;
        this.node.on("peng_notify", function(data) {
          var data = data.detail;
          self.onPengGangChanged(data);
        });
        this.node.on("gang_notify", function(data) {
          var data = data.detail;
          self.onPengGangChanged(data.seatData);
        });
        this.node.on("game_begin", function(data) {
          self.onGameBein();
        });
        var seats = cc.vv.gameNetMgr.seats;
        for (var i in seats) this.onPengGangChanged(seats[i]);
      },
      onGameBein: function onGameBein() {
        this.hideSide("myself");
        this.hideSide("right");
        this.hideSide("up");
        this.hideSide("left");
      },
      hideSide: function hideSide(side) {
        var gameChild = this.node.getChildByName("game");
        var myself = gameChild.getChildByName(side);
        var pengangroot = myself.getChildByName("penggangs");
        if (pengangroot) for (var i = 0; i < pengangroot.childrenCount; ++i) pengangroot.children[i].active = false;
      },
      onPengGangChanged: function onPengGangChanged(seatData) {
        if (null == seatData.angangs && null == seatData.diangangs && null == seatData.wangangs && null == seatData.pengs) return;
        var localIndex = cc.vv.gameNetMgr.getLocalIndex(seatData.seatindex);
        var side = cc.vv.mahjongmgr.getSide(localIndex);
        var pre = cc.vv.mahjongmgr.getFoldPre(localIndex);
        console.log("onPengGangChanged" + localIndex);
        var gameChild = this.node.getChildByName("game");
        var myself = gameChild.getChildByName(side);
        var pengangroot = myself.getChildByName("penggangs");
        for (var i = 0; i < pengangroot.childrenCount; ++i) pengangroot.children[i].active = false;
        var index = 0;
        var gangs = seatData.angangs;
        for (var i = 0; i < gangs.length; ++i) {
          var mjid = gangs[i];
          this.initPengAndGangs(pengangroot, side, pre, index, mjid, "angang");
          index++;
        }
        var gangs = seatData.diangangs;
        for (var i = 0; i < gangs.length; ++i) {
          var mjid = gangs[i];
          this.initPengAndGangs(pengangroot, side, pre, index, mjid, "diangang");
          index++;
        }
        var gangs = seatData.wangangs;
        for (var i = 0; i < gangs.length; ++i) {
          var mjid = gangs[i];
          this.initPengAndGangs(pengangroot, side, pre, index, mjid, "wangang");
          index++;
        }
        var pengs = seatData.pengs;
        if (pengs) for (var i = 0; i < pengs.length; ++i) {
          var mjid = pengs[i];
          this.initPengAndGangs(pengangroot, side, pre, index, mjid, "peng");
          index++;
        }
      },
      initPengAndGangs: function initPengAndGangs(pengangroot, side, pre, index, mjid, flag) {
        var pgroot = null;
        if (pengangroot.childrenCount <= index) {
          pgroot = "left" == side || "right" == side ? cc.instantiate(cc.vv.mahjongmgr.pengPrefabLeft) : cc.instantiate(cc.vv.mahjongmgr.pengPrefabSelf);
          pengangroot.addChild(pgroot);
        } else {
          pgroot = pengangroot.children[index];
          pgroot.active = true;
        }
        if ("left" == side) pgroot.y = -25 * index * 3; else if ("right" == side) {
          pgroot.y = 25 * index * 3;
          pgroot.setLocalZOrder(-index);
        } else pgroot.x = "myself" == side ? 55 * index * 3 + 10 * index : -55 * index * 3;
        var sprites = pgroot.getComponentsInChildren(cc.Sprite);
        for (var s = 0; s < sprites.length; ++s) {
          var sprite = sprites[s];
          if ("gang" == sprite.node.name) {
            var isGang = "peng" != flag;
            sprite.node.active = isGang;
            sprite.node.scaleX = 1;
            sprite.node.scaleY = 1;
            if ("angang" == flag) {
              sprite.spriteFrame = cc.vv.mahjongmgr.getEmptySpriteFrame(side);
              if ("myself" == side || "up" == side) {
                sprite.node.scaleX = 1.4;
                sprite.node.scaleY = 1.4;
              }
            } else sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, mjid);
          } else sprite.spriteFrame = cc.vv.mahjongmgr.getSpriteFrameByMJID(pre, mjid);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  PlatformHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2e9dkmW7JOVpg6QxQnfafx", "PlatformHelper");
    "use strict";
    var helper = module.exports;
    var VOID = "void";
    var BOOL = "boolean";
    var INT = "int";
    var FLOAT = "float";
    var STRING = "string";
    var ClassName_Android = "com/helper/StaticHelper";
    var ClassName_IOS = "StaticHelper";
    var Func_SetGLGameState = "setGLGameState";
    var Func_CopyToClipboard = "copyToClipboard";
    var Func_GetFromClipboard = "getFromClipboard";
    var Func_GetBattery = "getBattery";
    var Func_GetGPSInfo = "getGPSInfo";
    var Func_GetGPSDistance = "getGPSDistance";
    var Func_LoginByPlatform = "loginByPlatform";
    var Func_ShareLocalImage = "shareLocalImage";
    var Func_ShareUrlImage = "shareUrlImage";
    var Func_ShareText = "shareText";
    helper.getPlatformType = function() {
      if (cc.sys.isBrowser) return 1;
      if (cc.sys.os === cc.sys.OS_ANDROID) return 2;
      if (cc.sys.os === cc.sys.OS_IOS) return 3;
      if (cc.sys.os === cc.sys.OS_OSX) return 4;
      if (cc.sys.os === cc.sys.OS_WINDOWS) return 5;
      return -1;
    };
    helper.isMobile = function() {
      var type = helper.getPlatformType();
      return 2 === type || 3 === type;
    };
    helper.setGLGameState = function() {
      var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
      helper._callNative(Func_SetGLGameState, VOID, state);
    };
    helper.copyToClipboard = function(content) {
      helper._callNative(Func_CopyToClipboard, VOID, content);
      cc.sys.isBrowser && (window.clipboardData = content);
    };
    helper.getFromClipboard = function() {
      if (cc.sys.isBrowser) return window.clipboardData;
      return helper._callNative(Func_GetFromClipboard, STRING);
    };
    helper.getBattery = function() {
      var battery = helper._callNative(Func_GetBattery, FLOAT);
      return battery || 50;
    };
    helper.getGPSInfo = function() {
      var info = helper._callNative(Func_GetGPSInfo, STRING);
      return info;
    };
    helper.onGPSSuccess = function(info) {
      MsgHelper.pushToast(info);
    };
    helper.getGPSDistance = function(latitude1, longitude1, latitude2, longitude2) {
      var dis = helper._callNative(Func_GetGPSDistance, FLOAT, latitude1, longitude1, latitude2, longitude2);
    };
    helper.loginByPlatform = function(platformName) {
      helper._callNative(Func_LoginByPlatform, VOID, platformName);
    };
    helper.onLoginSuccess = function(uid, nick, head, sex) {
      nick = StringHelper.filterString(nick);
      UserServer.platformLogin("line", "tm", uid, nick, head, sex);
    };
    helper.shareText = function(platformName, text) {
      cc.log("shareText: " + text);
      helper._callNative(Func_ShareText, VOID, platformName, text);
    };
    helper.shareLocalImage = function(platformName, path, channel) {
      helper._callNative(Func_ShareLocalImage, VOID, platformName, path, channel);
    };
    helper._callNative = function(funcName, retType) {
      var args = Array.prototype.slice.call(arguments);
      if (cc.sys.isBrowser) return;
      if (cc.sys.os === cc.sys.OS_IOS) args.splice(0, 0, ClassName_IOS); else {
        if (cc.sys.os !== cc.sys.OS_ANDROID) return;
        args.splice(0, 0, ClassName_Android);
      }
      return NativeHelper.callClz.apply(NativeHelper, args);
    };
    helper.wxShareUrl = function(title, content, url) {
      var channel = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "friends";
      if (cc.sys.os === cc.sys.OS_IOS) {
        cc.log("wxShareUrl ios");
        _callStaticMethod_ios(ClassName_IOS, Func_WxShareUrl_IOS, 4, title, content, url, channel);
      } else cc.sys.os === cc.sys.OS_ANDROID && _callStaticMethod_android(ClassName_Android, Func_WxShareUrl_Android, 4, title, content, url, channel);
    };
    helper.onMagicWindow = function(action, value) {
      var debugInfo = "微信回调 onMagicWindow()-> value :" + value;
      cc.log(debugInfo);
      $G.gCData.gMagicWindow = {
        action: action,
        value: value
      };
      NotifyHelper.notify(NOTIFY_MAGIC_WINDOW, $G.gCData.gMagicWindow);
    };
    helper.wxShareImage = function(path, channel) {
      if (cc.sys.os === cc.sys.OS_IOS) {
        cc.log("wxShareImage ios");
        _callStaticMethod_ios(ClassName_IOS, Func_WxShareImage_IOS, 2, path, channel);
      } else {
        if (cc.sys.os !== cc.sys.OS_ANDROID) return;
        cc.log("wxShareImage android");
        _callStaticMethod_android(ClassName_Android, Func_WxShareImage_Android, 2, path, channel);
      }
    };
    helper.payByName = function(name) {
      if (cc.sys.os === cc.sys.OS_IOS) {
        cc.log("payByName ios" + name);
        _callStaticMethod_ios(ClassName_IOS, Func_PayByName_IOS, 1, name);
      } else {
        if (cc.sys.os !== cc.sys.OS_ANDROID) return;
        MsgHelper.pushToast($G.gStrings.Error.RefuseAndroid);
      }
    };
    helper.onPayCallback = function(name) {
      cc.log("CCCC:onMaiCallback:" + name);
      OldHttpServer.addCard(UserHandler.getId(), 34, function() {
        MsgHelper.pushToast($G.gStrings.CommonTips.BuySuccess, 0);
        MsgHelper.pushToast($G.gStrings.CommonTips.ToastSuccess, 0);
      });
    };
    cc._RF.pop();
  }, {} ],
  PopupMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc0d2VLgL1Avo166tHLsjCJ", "PopupMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _popuproot: null,
        _settings: null,
        _dissolveNotice: null,
        _endTime: -1,
        _extraInfo: null,
        _noticeLabel: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        cc.vv.popupMgr = this;
        this._popuproot = cc.find("Canvas/popups");
        this._settings = cc.find("Canvas/popups/settings");
        this._dissolveNotice = cc.find("Canvas/popups/dissolve_notice");
        this._noticeLabel = this._dissolveNotice.getChildByName("info").getComponent(cc.Label);
        this.closeAll();
        this.addBtnHandler("settings/btn_close");
        this.addBtnHandler("settings/btn_sqjsfj");
        this.addBtnHandler("dissolve_notice/btn_agree");
        this.addBtnHandler("dissolve_notice/btn_reject");
        this.addBtnHandler("dissolve_notice/btn_ok");
        var self = this;
        this.node.on("dissolve_notice", function(event) {
          var data = event.detail;
          self.showDissolveNotice(data);
        });
        this.node.on("dissolve_cancel", function(event) {
          self.closeAll();
        });
      },
      start: function start() {
        cc.vv.gameNetMgr.dissoveData && this.showDissolveNotice(cc.vv.gameNetMgr.dissoveData);
      },
      addBtnHandler: function addBtnHandler(btnName) {
        var btn = cc.find("Canvas/popups/" + btnName);
        this.addClickEvent(btn, this.node, "PopupMgr", "onBtnClicked");
      },
      addClickEvent: function addClickEvent(node, target, component, handler) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        clickEvents.push(eventHandler);
      },
      onBtnClicked: function onBtnClicked(event) {
        this.closeAll();
        var btnName = event.target.name;
        "btn_agree" == btnName ? cc.vv.net.send("dissolve_agree") : "btn_reject" == btnName ? cc.vv.net.send("dissolve_reject") : "btn_sqjsfj" == btnName && cc.vv.net.send("dissolve_request");
      },
      closeAll: function closeAll() {
        this._popuproot.active = false;
        this._settings.active = false;
        this._dissolveNotice.active = false;
      },
      showSettings: function showSettings() {
        this.closeAll();
        this._popuproot.active = true;
        this._settings.active = true;
      },
      showDissolveRequest: function showDissolveRequest() {
        this.closeAll();
        this._popuproot.active = true;
      },
      showDissolveNotice: function showDissolveNotice(data) {
        this._endTime = Date.now() / 1e3 + data.time;
        this._extraInfo = "";
        for (var i = 0; i < data.states.length; ++i) {
          var b = data.states[i];
          var name = cc.vv.gameNetMgr.seats[i].name;
          this._extraInfo += b ? "\n[已同意] " + name : "\n[待确认] " + name;
        }
        this.closeAll();
        this._popuproot.active = true;
        this._dissolveNotice.active = true;
      },
      update: function update(dt) {
        if (this._endTime > 0) {
          var lastTime = this._endTime - Date.now() / 1e3;
          lastTime < 0 && (this._endTime = -1);
          var m = Math.floor(lastTime / 60);
          var s = Math.ceil(lastTime - 60 * m);
          var str = "";
          m > 0 && (str += m + "分");
          this._noticeLabel.string = str + s + "秒后房间将自动解散" + this._extraInfo;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RadioButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d571y2U+9AiKntO+TSf0Fb", "RadioButton");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        target: cc.Node,
        sprite: cc.SpriteFrame,
        checkedSprite: cc.SpriteFrame,
        checked: false,
        groupId: -1
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        if (null == cc.vv.radiogroupmgr) {
          var RadioGroupMgr = require("RadioGroupMgr");
          cc.vv.radiogroupmgr = new RadioGroupMgr();
          cc.vv.radiogroupmgr.init();
        }
        console.log(_typeof(cc.vv.radiogroupmgr.add));
        cc.vv.radiogroupmgr.add(this);
        this.refresh();
      },
      refresh: function refresh() {
        var targetSprite = this.target.getComponent(cc.Sprite);
        this.checked ? targetSprite.spriteFrame = this.checkedSprite : targetSprite.spriteFrame = this.sprite;
      },
      check: function check(value) {
        this.checked = value;
        this.refresh();
      },
      onClicked: function onClicked() {
        cc.vv.radiogroupmgr.check(this);
      },
      onDestroy: function onDestroy() {
        cc.vv && cc.vv.radiogroupmgr && cc.vv.radiogroupmgr.del(this);
      }
    });
    cc._RF.pop();
  }, {
    RadioGroupMgr: "RadioGroupMgr"
  } ],
  RadioGroupMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "824eapeRYNKY4RJzg2Z4YA2", "RadioGroupMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _groups: null
      },
      init: function init() {
        this._groups = {};
      },
      add: function add(radioButton) {
        var groupId = radioButton.groupId;
        var buttons = this._groups[groupId];
        if (null == buttons) {
          buttons = [];
          this._groups[groupId] = buttons;
        }
        buttons.push(radioButton);
      },
      del: function del(radioButton) {
        var groupId = radioButton.groupId;
        var buttons = this._groups[groupId];
        if (null == buttons) return;
        var idx = buttons.indexOf(radioButton);
        -1 != idx && buttons.splice(idx, 1);
        0 == buttons.length && delete this._groups[groupId];
      },
      check: function check(radioButton) {
        var groupId = radioButton.groupId;
        var buttons = this._groups[groupId];
        if (null == buttons) return;
        for (var i = 0; i < buttons.length; ++i) {
          var btn = buttons[i];
          btn == radioButton ? btn.check(true) : btn.check(false);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RandomListHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "daebeXrQalJNJXFK5hC0JBI", "RandomListHelper");
    "use strict";
    module.exports.getListFromArray = function(targetId, totalNum, cbOrArray) {
      if (_.isNull(cbOrArray)) return null;
      if (_.isNaN(targetId) || _.isNaN(totalNum) || _.isNull(targetId) || _.isNull(totalNum)) return null;
      var _list = [];
      if (_.isFunction(cbOrArray)) {
        if (_.isNull(cbOrArray())) return null;
        _list = cbOrArray();
      } else _list = cbOrArray;
      return module.exports._getSequenceList(targetId, totalNum, _list);
    };
    module.exports.getTimeList = function() {
      var totalNum = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20;
      var startTime = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .05;
      var interval = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
      var timeList = [];
      timeList = _.range(startTime, startTime + totalNum * interval, interval);
      return timeList;
    };
    module.exports._getSequenceList = function(targetId, totalNum, list) {
      var _list = [];
      list.reverse();
      var bTemp = false;
      _.each(list, function(id, index) {
        id == targetId && (bTemp = true);
        bTemp && _list.push(id);
      });
      var index = 0;
      while (_.size(_list) < totalNum) {
        index > _.size(list) - 1 && (index = 0);
        _list.push(list[index]);
        index++;
      }
      _list.reverse();
      return _list;
    };
    cc._RF.pop();
  }, {} ],
  ReConnect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f553G0boRH6KrTE7wACaXx", "ReConnect");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _reconnect: null,
        _lblTip: null,
        _loading_image: null,
        _lastPing: 0
      },
      onLoad: function onLoad() {
        this._reconnect = cc.find("Canvas/reconnect");
        this._loading_image = this._reconnect.getChildByName("loading_image");
        var self = this;
        var fnTestServerOn = function fnTestServerOn() {
          cc.vv.net.test(function(ret) {
            if (ret) {
              cc.vv.gameNetMgr.reset();
              var roomId = cc.vv.userMgr.oldRoomId;
              if (null != roomId) {
                cc.vv.userMgr.oldRoomId = null;
                cc.vv.userMgr.enterRoom(roomId, function(ret) {
                  if (0 != ret.errcode) {
                    cc.vv.gameNetMgr.roomId = null;
                    cc.director.loadScene("hall");
                  }
                });
              }
            } else setTimeout(fnTestServerOn, 3e3);
          });
        };
        var fn = function fn(data) {
          self.node.off("disconnect", fn);
          self._reconnect.active = true;
          fnTestServerOn();
        };
        console.log("adasfdasdfsdf");
        this.node.on("login_finished", function() {
          self._reconnect.active = false;
          self.node.on("disconnect", fn);
        });
        this.node.on("disconnect", fn);
      },
      update: function update(dt) {
        this._reconnect.active && (this._loading_image.rotation = this._loading_image.rotation - 45 * dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  ReplayCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21e6a+ajGNDTJwDHbV3A72m", "ReplayCtrl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _nextPlayTime: 1,
        _replay: null,
        _isPlaying: true
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this._replay = cc.find("Canvas/replay");
        this._replay.active = cc.vv.replayMgr.isReplay();
      },
      onBtnPauseClicked: function onBtnPauseClicked() {
        this._isPlaying = false;
      },
      onBtnPlayClicked: function onBtnPlayClicked() {
        this._isPlaying = true;
      },
      onBtnBackClicked: function onBtnBackClicked() {
        cc.vv.replayMgr.clear();
        cc.vv.gameNetMgr.reset();
        cc.vv.gameNetMgr.roomId = null;
        cc.vv.wc.show("正在返回游戏大厅");
        cc.director.loadScene("hall");
      },
      update: function update(dt) {
        if (cc.vv && this._isPlaying && true == cc.vv.replayMgr.isReplay() && this._nextPlayTime > 0) {
          this._nextPlayTime -= dt;
          this._nextPlayTime < 0 && (this._nextPlayTime = cc.vv.replayMgr.takeAction());
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ReplayMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a6a1p86NFL6KZEZCnbu7tt", "ReplayMgr");
    "use strict";
    var ACTION_CHUPAI = 1;
    var ACTION_MOPAI = 2;
    var ACTION_PENG = 3;
    var ACTION_GANG = 4;
    var ACTION_HU = 5;
    cc.Class({
      extends: cc.Component,
      properties: {
        _lastAction: null,
        _actionRecords: null,
        _currentIndex: 0
      },
      onLoad: function onLoad() {},
      clear: function clear() {
        this._lastAction = null;
        this._actionRecords = null;
        this._currentIndex = 0;
      },
      init: function init(data) {
        this._actionRecords = data.action_records;
        null == this._actionRecords && (this._actionRecords = {});
        this._currentIndex = 0;
        this._lastAction = null;
      },
      isReplay: function isReplay() {
        return null != this._actionRecords;
      },
      getNextAction: function getNextAction() {
        if (this._currentIndex >= this._actionRecords.length) return null;
        var si = this._actionRecords[this._currentIndex++];
        var action = this._actionRecords[this._currentIndex++];
        var pai = this._actionRecords[this._currentIndex++];
        return {
          si: si,
          type: action,
          pai: pai
        };
      },
      takeAction: function takeAction() {
        var action = this.getNextAction();
        null != this._lastAction && this._lastAction.type == ACTION_CHUPAI && null != action && action.type != ACTION_PENG && action.type != ACTION_GANG && action.type != ACTION_HU && cc.vv.gameNetMgr.doGuo(this._lastAction.si, this._lastAction.pai);
        this._lastAction = action;
        if (null == action) return -1;
        var nextActionDelay = 1;
        if (action.type == ACTION_CHUPAI) {
          cc.vv.gameNetMgr.doChupai(action.si, action.pai);
          return 1;
        }
        if (action.type == ACTION_MOPAI) {
          cc.vv.gameNetMgr.doMopai(action.si, action.pai);
          cc.vv.gameNetMgr.doTurnChange(action.si);
          return .5;
        }
        if (action.type == ACTION_PENG) {
          cc.vv.gameNetMgr.doPeng(action.si, action.pai);
          cc.vv.gameNetMgr.doTurnChange(action.si);
          return 1;
        }
        if (action.type == ACTION_GANG) {
          cc.vv.gameNetMgr.dispatchEvent("hangang_notify", action.si);
          cc.vv.gameNetMgr.doGang(action.si, action.pai);
          cc.vv.gameNetMgr.doTurnChange(action.si);
          return 1;
        }
        if (action.type == ACTION_HU) {
          cc.vv.gameNetMgr.doHu({
            seatindex: action.si,
            hupai: action.pai,
            iszimo: false
          });
          return 1.5;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RoomServer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64c93Z8qg1DHoR8iyGITVYu", "RoomServer");
    "use strict";
    var server = module.exports;
    server.getZone = function(cb, cbError) {
      var req = ServerRouters.RqGroup_YTNN.getZone;
      SocketHelper.request(req, {}, function(msg) {
        cb && cb(msg);
      }, function() {
        cbError && cbError();
      });
    };
    server.match = function(areaId, cb) {
      var req = ServerRouters.RqGroup_YTNN.match;
      SocketHelper.request(req, {
        area: areaId
      }, function(msg) {
        cb && cb();
      }, true);
    };
    server.createRoom = function(params, cb) {
      var req = ServerRouters.RqRoom.createRoom;
      SocketHelper.request(req, params, function(msg) {
        cb && cb();
      }, true);
    };
    server.joinRoom = function() {
      var areaType = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      var roomId = arguments[1];
      var cb = arguments[2];
      var req = ServerRouters.RqRoom.joinRoom;
      SocketHelper.request(req, {
        id: roomId
      }, function(msg) {
        cb && cb();
      }, function(data) {
        if (10007 == data.code) {
          PBHelper.addNode("DlgViewRoom", null, function(dlgnode) {
            dlgnode.getComponent("DlgViewRoom").init(areaType, roomId);
          }, 1e4);
          return;
        }
        var info = data.msg;
        MsgHelper.pushToast(info);
      }, true);
    };
    server.viewRoom = function(areaType, roomId, cb) {
      var req = 0 == areaType ? ServerRouters.RqRoom.viewRoom : ServerRouters.RqGroup.viewRoom;
      SocketHelper.request(req, {
        id: roomId
      }, function(msg) {
        cb && cb();
      }, true);
    };
    server.reconnectRoom = function() {
      GamesMgr.initGame(cc.currentGame, false);
      SocketHelper.request(ServerRouters.RqRoom.reconnectRoom, {}, function(msg) {}, true);
    };
    server.leaveRoom = function(cb) {
      SocketHelper.request(ServerRouters.RqRoom.leaveRoom, {}, cb, true);
    };
    server.dismissRoom = function(cb) {
      SocketHelper.request(ServerRouters.RqRoom.dismissRoom, {}, cb, true);
    };
    server.dismissStart = function(cb) {
      SocketHelper.request(ServerRouters.RqGame_TWMJ.sendDismiss, {}, cb, true);
    };
    server.dismissVote = function() {
      var agree = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      var cb = arguments[1];
      SocketHelper.request(ServerRouters.RqRoom.dismissVote, {
        vote: agree
      }, cb, true);
    };
    cc._RF.pop();
  }, {} ],
  Seat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "820870ltMZNDYlvzr+qCDEJ", "Seat");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _sprIcon: null,
        _zhuang: null,
        _ready: null,
        _offline: null,
        _lblName: null,
        _lblScore: null,
        _scoreBg: null,
        _nddayingjia: null,
        _voicemsg: null,
        _chatBubble: null,
        _emoji: null,
        _lastChatTime: -1,
        _userName: "",
        _score: 0,
        _dayingjia: false,
        _isOffline: false,
        _isReady: false,
        _isZhuang: false,
        _userId: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this._sprIcon = this.node.getChildByName("icon").getComponent("ImageLoader");
        this._lblName = this.node.getChildByName("name").getComponent(cc.Label);
        this._lblScore = this.node.getChildByName("score").getComponent(cc.Label);
        this._voicemsg = this.node.getChildByName("voicemsg");
        this._xuanpai = this.node.getChildByName("xuanpai");
        this.refreshXuanPaiState();
        this._voicemsg && (this._voicemsg.active = false);
        this._sprIcon && this._sprIcon.getComponent(cc.Button) && cc.vv.utils.addClickEvent(this._sprIcon, this.node, "Seat", "onIconClicked");
        this._offline = this.node.getChildByName("offline");
        this._ready = this.node.getChildByName("ready");
        this._zhuang = this.node.getChildByName("zhuang");
        this._scoreBg = this.node.getChildByName("Z_money_frame");
        this._nddayingjia = this.node.getChildByName("dayingjia");
        this._chatBubble = this.node.getChildByName("ChatBubble");
        null != this._chatBubble && (this._chatBubble.active = false);
        this._emoji = this.node.getChildByName("emoji");
        null != this._emoji && (this._emoji.active = false);
        this.refresh();
        this._sprIcon && this._userId && this._sprIcon.setUserID(this._userId);
      },
      onIconClicked: function onIconClicked() {
        var iconSprite = this._sprIcon.node.getComponent(cc.Sprite);
        if (null != this._userId && this._userId > 0) {
          var seat = cc.vv.gameNetMgr.getSeatByID(this._userId);
          var sex = 0;
          if (cc.vv.baseInfoMap) {
            var info = cc.vv.baseInfoMap[this._userId];
            info && (sex = info.sex);
          }
          cc.vv.userinfoShow.show(seat.name, seat.userid, iconSprite, sex, seat.ip);
        }
      },
      refresh: function refresh() {
        null != this._lblName && (this._lblName.string = this._userName);
        null != this._lblScore && (this._lblScore.string = this._score);
        null != this._nddayingjia && (this._nddayingjia.active = true == this._dayingjia);
        this._offline && (this._offline.active = this._isOffline && "" != this._userName);
        this._ready && (this._ready.active = this._isReady && cc.vv.gameNetMgr.numOfGames > 0);
        this._zhuang && (this._zhuang.active = this._isZhuang);
        this.node.active = null != this._userName && "" != this._userName;
      },
      setInfo: function setInfo(name, score, dayingjia) {
        this._userName = name;
        this._score = score;
        null == this._score && (this._score = 0);
        this._dayingjia = dayingjia;
        null != this._scoreBg && (this._scoreBg.active = null != this._score);
        null != this._lblScore && (this._lblScore.node.active = null != this._score);
        this.refresh();
      },
      setZhuang: function setZhuang(value) {
        this._isZhuang = value;
        this._zhuang && (this._zhuang.active = value);
      },
      setReady: function setReady(isReady) {
        this._isReady = isReady;
        this._ready && (this._ready.active = this._isReady && cc.vv.gameNetMgr.numOfGames > 0);
      },
      setID: function setID(id) {
        var idNode = this.node.getChildByName("id");
        if (idNode) {
          var lbl = idNode.getComponent(cc.Label);
          lbl.string = "ID:" + id;
        }
        this._userId = id;
        this._sprIcon && this._sprIcon.setUserID(id);
      },
      setOffline: function setOffline(isOffline) {
        this._isOffline = isOffline;
        this._offline && (this._offline.active = this._isOffline && "" != this._userName);
      },
      chat: function chat(content) {
        if (null == this._chatBubble || null == this._emoji) return;
        this._emoji.active = false;
        this._chatBubble.active = true;
        this._chatBubble.getComponent(cc.Label).string = content;
        this._chatBubble.getChildByName("New Label").getComponent(cc.Label).string = content;
        this._lastChatTime = 3;
      },
      emoji: function emoji(_emoji) {
        if (null == this._emoji || null == this._emoji) return;
        console.log(_emoji);
        this._chatBubble.active = false;
        this._emoji.active = true;
        this._emoji.getComponent(cc.Animation).play(_emoji);
        this._lastChatTime = 3;
      },
      voiceMsg: function voiceMsg(show) {
        this._voicemsg && (this._voicemsg.active = show);
      },
      refreshXuanPaiState: function refreshXuanPaiState() {
        if (null == this._xuanpai) return;
        this._xuanpai.active = cc.vv.gameNetMgr.isHuanSanZhang;
        if (false == cc.vv.gameNetMgr.isHuanSanZhang) return;
        this._xuanpai.getChildByName("xz").active = false;
        this._xuanpai.getChildByName("xd").active = false;
        var seat = cc.vv.gameNetMgr.getSeatByID(this._userId);
        seat && (null == seat.huanpais ? this._xuanpai.getChildByName("xz").active = true : this._xuanpai.getChildByName("xd").active = true);
      },
      update: function update(dt) {
        if (this._lastChatTime > 0) {
          this._lastChatTime -= dt;
          if (this._lastChatTime < 0) {
            this._chatBubble.active = false;
            this._emoji.active = false;
            this._emoji.getComponent(cc.Animation).stop();
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  ServerRouters: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab541srLBBOwYiGtn6k2VTo", "ServerRouters");
    "use strict";
    module.exports.RqUser = {};
    module.exports.RqUser.login = "connector.authorizationHandler.login";
    module.exports.RqUser.relogin = "connector.authorizationHandler.relogin";
    module.exports.RqUser.logout = "user.userHandler.logout";
    module.exports.RqUser.bindRecommender = "user.userHandler.bindRecommender";
    module.exports.RqUser.applyMoney = "user.userHandler.applyMoney";
    module.exports.RqUser.charge = "user.userHandler.charge";
    module.exports.RqUser.tradeItem = "user.userHandler.tradeItem";
    module.exports.RqUser.setDesp = "user.userHandler.setDesp";
    module.exports.RqUser.platformLogin = "connector.authorizationHandler.login";
    module.exports.RqUser.platformLoginFast = "connector.authorizationHandler.fastLogin";
    module.exports.RqUser.guestLogin = "connector.authorizationHandler.login";
    module.exports.RqUser.sendRegisterCode = "connector.authorizationHandler.sendRegister";
    module.exports.RqUser.commitRegister = "connector.authorizationHandler.commitRegister";
    module.exports.RqUser.authLogin = "connector.authorizationHandler.auth";
    module.exports.RqUser.setHead = "user.userHandler.setHead";
    module.exports.RqUser.setNick = "user.userHandler.setNick";
    module.exports.RqUser.setGPS = "user.userHandler.setGps";
    module.exports.OnAction_User = {};
    module.exports.OnAction_User.ROUTE = "user.attribute.action";
    module.exports.OnAction_Item = {};
    module.exports.OnAction_Item.ROUTE = "item.action";
    module.exports.OnAction_Broadcast = {};
    module.exports.OnAction_Broadcast.ACTION = "broadcast.action";
    module.exports.OnAction_Broadcast.PUBLIC_NOTICE = "broadcast.announce";
    module.exports.OnAction_Broadcast.EMAIL = "push.mail.action";
    module.exports.OnAction_History = {};
    module.exports.OnAction_ApplyNotify = {};
    module.exports.OnAction_ApplyNotify.ROUTE = "guild.apply.action";
    module.exports.OnAction_ApplyNotify.ADD = "ADD";
    module.exports.OnAction_ApplyNotify.REMOVE = "REMOVE";
    module.exports.OnAction_ApplyNotify.SUBSCRIBE_ADD = "SUBSCRIBE_ADD";
    module.exports.OnAction_ApplyNotify.SUBSCRIBE_REMOVE = "SUBSCRIBE_REMOVE";
    module.exports.OnAction_CreatedRecords = {};
    module.exports.OnAction_CreatedRecords.ROUTE = "room.agent.action";
    module.exports.OnAction_CreatedRecords.ADD = "ADD";
    module.exports.OnAction_CreatedRecords.REMOVE = "REMOVE";
    module.exports.OnAction_CreatedRecords.COMMAND = "COMMAND";
    module.exports.OnAction_CreatedRecords.COMMAND_CHANGE_PLAYING = 1;
    module.exports.OnAction_CreatedRecords.COMMAND_CHANGE_PLAYER = 2;
    module.exports.OnAction_CreatedRecords.COMMAND_CHANGE_PLAYER_READY = 3;
    module.exports.RqState = {};
    module.exports.RqGroup_YTNN = {};
    module.exports.RqGroup_YTNN.getZone = "zone.matchHandler.getZone";
    module.exports.RqGroup_YTNN.match = "zone.matchHandler.match";
    module.exports.RqRoom = {};
    module.exports.RqRoom.createRoom = "zone.privateHandler.createRoom";
    module.exports.RqRoom.joinRoom = "zone.privateHandler.enterRoom";
    module.exports.RqRoom.viewRoom = "zone.privateHandler.viewRoom";
    module.exports.RqRoom.dismissRoom = "room.playHandler.dismiss";
    module.exports.RqRoom.leaveRoom = "room.playHandler.leave";
    module.exports.RqRoom.reconnectRoom = "room.playHandler.reconnect";
    module.exports.RqRoom.dismissVote = "room.playHandler.dismissVote";
    module.exports.RqGroup = {};
    module.exports.RqGroup.createRoom = "guild.roomHandler.createRoom";
    module.exports.RqGroup.joinRoom = "zone.privateHandler.enterRoom";
    module.exports.RqGroup.viewRoom = "zone.privateHandler.viewRoom";
    module.exports.RqGroup.dismissRoom = "zone.privateHandler.dismissRoom";
    module.exports.RqGroup.getList = "guild.guildHandler.getGuilds";
    module.exports.RqGroup.createGroup = "guild.guildHandler.createGuild";
    module.exports.RqGroup.joinDirectly = "guild.guildHandler.joinGuild";
    module.exports.RqGroup.joinApply = "guild.guildHandler.applyGuild";
    module.exports.RqGroup.commitApply = "guild.guildHandler.commitApply";
    module.exports.RqGroup.adminCommitApply = "guild.guildHandler.commitApply";
    module.exports.RqGroup.setNotice = "guild.guildHandler.setAnnoucement";
    module.exports.RqGroup.listenGroup = "guild.guildHandler.subscribeGuild";
    module.exports.RqGroup.unlistenGroup = "guild.guildHandler.unsubscribeGuild";
    module.exports.RqGroup.changeScore = "guild.memberHandler.changeScore";
    module.exports.RqGroup.changeScoreByPlayer = "guild.memberHandler.returnScore";
    module.exports.RqGroup.kickMember = "guild.memberHandler.kickMember";
    module.exports.RqGroup.quitGroup = "guild.memberHandler.quitGuild";
    module.exports.RqGroup.levelMember = "guild.memberHandler.levelMember";
    module.exports.RqGroup.setAdnimistrator = "guild.memberHandler.setAdministrator";
    module.exports.RqGroup.removeBlacklist = "guild.memberHandler.removeBlacklist";
    module.exports.RqGroup.listenGroupApplyNotify = "guild.applyHandler.subscribe";
    module.exports.RqGroup.unlistenGroupApplyNotify = "guild.applyHandler.unsubscribe";
    module.exports.RqGroup.setAutoCommitApply = "guild.guildHandler.setAutoCommitApply";
    module.exports.RqGroup.enterGuild = "guild.guildHandler.enterGuild";
    module.exports.RqGroup.enterArea = "guild.guildHandler.enterArea";
    module.exports.RqGroup.leaveArea = "guild.guildHandler.leaveArea";
    module.exports.RqGroup.pushFund = "guild.guildHandler.pushFund";
    module.exports.RqGroup.popFund = "guild.guildHandler.popFund";
    module.exports.RqGroup.setFundBaseLimit = "guild.guildHandler.setFundBaseLimit";
    module.exports.OnAction_Group = {};
    module.exports.OnAction_ROOM = {};
    module.exports.OnAction_ROOM.ROUTE = "room.action";
    module.exports.OnAction_TWMJ = {};
    module.exports.OnAction_TWMJ.ROUTE = "room.action";
    module.exports.OnAction_TWMJ.PLAYERINVITE = "PlayerInvite";
    module.exports.OnAction_TWMJ.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_TWMJ.PLAYER_LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_TWMJ.PLAYER_READY = "PlayerReady";
    module.exports.OnAction_TWMJ.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_TWMJ.SEAT_ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_TWMJ.SEAT_REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_TWMJ.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_TWMJ.ROUND_RESULT = "RoundResult";
    module.exports.OnAction_TWMJ.ROUND_END = "RoundEnd";
    module.exports.OnAction_TWMJ.ROOM_CHAT = "Chat";
    module.exports.OnAction_TWMJ.ROOM_STATE_ROLL_DICE = "RoomStateRollDice";
    module.exports.OnAction_TWMJ.SEAT_SHUFFLE = "SeatShuffle";
    module.exports.OnAction_TWMJ.TURN_START = "TurnStart";
    module.exports.OnAction_TWMJ.PLAYER_DEAL = "PlayerDeal";
    module.exports.OnAction_TWMJ.PLAYER_DEAL_FLOWER = "PlayerDealFlower";
    module.exports.OnAction_TWMJ.PLAYER_DRAW = "PlayerDraw";
    module.exports.OnAction_TWMJ.PLAYER_FLOWER = "PlayerFlower";
    module.exports.OnAction_TWMJ.PLAYER_GROUP = "PlayerGroup";
    module.exports.OnAction_TWMJ.PLAYER_LISTEN = "PlayerListen";
    module.exports.OnAction_TWMJ.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_TWMJ.PLAYER_PASS = "PlayerPass";
    module.exports.OnAction_TWMJ.DISMISS_START = "DismissStart";
    module.exports.OnAction_TWMJ.DISMISS_VOTE = "DismissVote";
    module.exports.OnAction_TWMJ.DISMISS_STOP = "DismissStop";
    module.exports.OnAction_TWMJ.ROOM_RESULT = "RoomResult";
    module.exports.OnAction_TWMJ.ROOM_STATE_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_TWMJ.PLAYER_WIN = "PlayerWin";
    module.exports.OnAction_TWMJ.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_TWMJ.PLAYER_RESET = "PlayerReset";
    module.exports.OnAction_TWMJ.ROOM_STATE_BANKER = "RoomStateBanker";
    module.exports.RqGame_TWMJ = {};
    module.exports.RqGame_TWMJ.dismissVote = "room.playHandler.dismissVote";
    module.exports.RqGame_TWMJ.sendDismiss = "room.playHandler.dismiss";
    module.exports.RqGame_TWMJ.play = "room.playHandler.action";
    module.exports.RqGame_TWMJ.ready = "room.playHandler.action";
    module.exports.RqGame_TWMJ.chat = "room.playHandler.chat";
    module.exports.RqGame_FKNN = {};
    module.exports.RqGame_FKNN.roomAction = "room.playHandler.action";
    module.exports.RqGame_FKNN.ready = "room.playHandler.action";
    module.exports.RqGame_FKNN.callBanker = "room.playHandler.action";
    module.exports.RqGame_FKNN.bet = "room.playHandler.action";
    module.exports.RqGame_FKNN.finish = "room.playHandler.action";
    module.exports.RqGame_FKNN.play = "room.playHandler.action";
    module.exports.RqGame_FKNN.sit = "room.playHandler.sit";
    module.exports.RqGame_FKNN.chat = "room.playHandler.chat";
    module.exports.RqGame_FKNN.call = "room.playHandler.action";
    module.exports.RqGame_BJL = {};
    module.exports.RqGame_BJL.playerBid = "room.playHandler.action";
    module.exports.RqGame_BJL.upBanker = "room.playHandler.action";
    module.exports.RqGame_BJL.downBanker = "room.playHandler.action";
    module.exports.RqGame_BJL.bankerList = "room.playHandler.action";
    module.exports.RqGame_BJL.roadList = "room.playHandler.action";
    module.exports.RqGame_BJL.playerBidRepeat = "room.playHandler.action";
    module.exports.RqGame_BCBM = {};
    module.exports.RqGame_BCBM.playerBid = "room.playHandler.action";
    module.exports.RqGame_BCBM.upBanker = "room.playHandler.action";
    module.exports.RqGame_BCBM.downBanker = "room.playHandler.action";
    module.exports.RqGame_BCBM.bankerList = "room.playHandler.action";
    module.exports.RqGame_BCBM.roadList = "room.playHandler.action";
    module.exports.RqGame_BCBM.playerBidRepeat = "room.playHandler.action";
    module.exports.RqGame_ZJH = {};
    module.exports.RqGame_ZJH.roomAction = "room.playHandler.action";
    module.exports.RqGame_ZJH.ready = "room.playHandler.action";
    module.exports.RqGame_ZJH.callBanker = "room.playHandler.action";
    module.exports.RqGame_ZJH.bet = "room.playHandler.action";
    module.exports.RqGame_ZJH.finish = "room.playHandler.action";
    module.exports.RqGame_ZJH.play = "room.playHandler.action";
    module.exports.RqGame_ZJH.sit = "room.playHandler.sit";
    module.exports.RqGame_ZJH.chat = "room.playHandler.chat";
    module.exports.RqGame_ZJH.look = "room.playHandler.chat";
    module.exports.RqGame_ZJH.call = "room.playHandler.action";
    module.exports.RqGame_YYBF = {};
    module.exports.RqGame_YYBF.playerBid = "room.playHandler.action";
    module.exports.RqGame_YYBF.upBanker = "room.playHandler.action";
    module.exports.RqGame_YYBF.downBanker = "room.playHandler.action";
    module.exports.RqGame_YYBF.bankerList = "room.playHandler.action";
    module.exports.RqGame_YYBF.roadList = "room.playHandler.action";
    module.exports.RqGame_YYBF.playerBidRepeat = "room.playHandler.action";
    module.exports.RqGame_LX9 = {};
    module.exports.RqGame_LX9.roomAction = "room.playHandler.action";
    module.exports.RqGame_LX9.playerBid = "room.playHandler.action";
    module.exports.RqGame_LX9.upBanker = "room.playHandler.action";
    module.exports.RqGame_LX9.downBanker = "room.playHandler.action";
    module.exports.RqGame_LX9.bankerList = "room.playHandler.action";
    module.exports.RqGame_LX9.roadList = "room.playHandler.action";
    module.exports.RqGame_LX9.playerBidRepeat = "room.playHandler.action";
    module.exports.RqGame_LX9.playerOpen = "room.playHandler.action";
    module.exports.RqGame_SLWH = {};
    module.exports.RqGame_SLWH.playerBid = "room.playHandler.action";
    module.exports.RqGame_SLWH.upBanker = "room.playHandler.action";
    module.exports.RqGame_SLWH.downBanker = "room.playHandler.action";
    module.exports.RqGame_SLWH.bankerList = "room.playHandler.action";
    module.exports.RqGame_SLWH.roadList = "room.playHandler.action";
    module.exports.RqGame_SLWH.playerBidRepeat = "room.playHandler.action";
    module.exports.OnAction_FKNN = {};
    module.exports.OnAction_FKNN.ROUTE = "room.action";
    module.exports.OnAction_FKNN.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_FKNN.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_FKNN.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_FKNN.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_FKNN.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_FKNN.PLAYER_READY = "PlayerReady";
    module.exports.OnAction_FKNN.ROOM_BANKER = "RoomStateBanker";
    module.exports.OnAction_FKNN.PLAYER_BANKER = "PlayerBanker";
    module.exports.OnAction_FKNN.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_FKNN.PLAYER_ADD_CARDS = "PlayerAddCards";
    module.exports.OnAction_FKNN.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_FKNN.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_FKNN.RoundResult = "RoundResult";
    module.exports.OnAction_FKNN.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_FKNN.PLAYER_SIT = "PlayerSit";
    module.exports.OnAction_FKNN.DISMISS_VOTE = "DismissVote";
    module.exports.OnAction_FKNN.DISMISS_START = "DismissStart";
    module.exports.OnAction_FKNN.DISMISS_STOP = "DismissStop";
    module.exports.OnAction_FKNN.ROOM_RESULT = "RoomResult";
    module.exports.OnAction_FKNN.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_FKNN.ROOM_CHAT = "Chat";
    module.exports.OnAction_FKNN.PLAYER_DEAL = "PlayerDeal";
    module.exports.OnAction_FKNN.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_FKNN.TURN_START = "TurnStart";
    module.exports.OnAction_FKNN.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_FKNN.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_FKNN.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_FKNN.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_FKNN.PlayerScore = "PlayerScore";
    module.exports.OnAction_FKNN.ROUND_END = "RoundEnd";
    module.exports.OnAction_FKNN.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_FKNN.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_FKNN.PlayerReset = "PlayerReset";
    module.exports.OnAction_FKNN.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_FKNN.PLAYER_SHOW_HAND = "PlayerShowHand";
    module.exports.OnAction_BJL = {};
    module.exports.OnAction_BJL.ROUTE = "room.action";
    module.exports.OnAction_BJL.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_BJL.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_BJL.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_BJL.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_BJL.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_BJL.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_BJL.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_BJL.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_BJL.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_BJL.ROOM_CHAT = "Chat";
    module.exports.OnAction_BJL.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_BJL.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_BJL.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_BJL.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_BJL.PlayerScore = "PlayerScore";
    module.exports.OnAction_BJL.ROUND_END = "RoundEnd";
    module.exports.OnAction_BJL.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_BJL.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_BJL.PlayerReset = "PlayerReset";
    module.exports.OnAction_BJL.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_BJL.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_BJL.PLAYER_MY_SCORE = "PlayerMyScore";
    module.exports.OnAction_BJL.BankerList = "BankerList";
    module.exports.OnAction_BJL.UpBanker = "UpBanker";
    module.exports.OnAction_BJL.DownBanker = "DownBanker";
    module.exports.OnAction_BJL.RoadList = "RoadList";
    module.exports.OnAction_BJL.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_BJL.RoomStateBet = "RoomStateBet";
    module.exports.OnAction_BJL.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_BCBM = {};
    module.exports.OnAction_BCBM.ROUTE = "room.action";
    module.exports.OnAction_BCBM.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_BCBM.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_BCBM.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_BCBM.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_BCBM.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_BCBM.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_BCBM.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_BCBM.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_BCBM.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_BCBM.ROOM_CHAT = "Chat";
    module.exports.OnAction_BCBM.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_BCBM.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_BCBM.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_BCBM.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_BCBM.PlayerScore = "PlayerScore";
    module.exports.OnAction_BCBM.ROUND_END = "RoundEnd";
    module.exports.OnAction_BCBM.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_BCBM.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_BCBM.PlayerReset = "PlayerReset";
    module.exports.OnAction_BCBM.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_BCBM.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_BCBM.PLAYER_MY_SCORE = "PlayerMyScore";
    module.exports.OnAction_BCBM.BankerList = "BankerList";
    module.exports.OnAction_BCBM.UpBanker = "UpBanker";
    module.exports.OnAction_BCBM.DownBanker = "DownBanker";
    module.exports.OnAction_BCBM.RoadList = "RoadList";
    module.exports.OnAction_BCBM.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_BCBM.RoomStateBet = "RoomStateBet";
    module.exports.OnAction_ZJH = {};
    module.exports.OnAction_ZJH.ROUTE = "room.action";
    module.exports.OnAction_ZJH.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_ZJH.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_ZJH.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_ZJH.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_ZJH.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_ZJH.PLAYER_READY = "PlayerReady";
    module.exports.OnAction_ZJH.ROOM_BANKER = "RoomStateBanker";
    module.exports.OnAction_ZJH.PLAYER_BANKER = "PlayerBanker";
    module.exports.OnAction_ZJH.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_ZJH.PLAYER_ADD_CARDS = "PlayerAddCards";
    module.exports.OnAction_ZJH.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_ZJH.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_ZJH.ROOM_RESULT = "ROOM_RESULT";
    module.exports.OnAction_ZJH.RoundResult = "RoundResult";
    module.exports.OnAction_ZJH.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_ZJH.PLAYER_SIT = "PlayerSit";
    module.exports.OnAction_ZJH.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_ZJH.ROOM_CHAT = "Chat";
    module.exports.OnAction_ZJH.PLAYER_DEAL = "PlayerDeal";
    module.exports.OnAction_ZJH.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_ZJH.TURN_START = "TurnStart";
    module.exports.OnAction_ZJH.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_ZJH.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_ZJH.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_ZJH.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_ZJH.PlayerScore = "PlayerScore";
    module.exports.OnAction_ZJH.ROUND_END = "RoundEnd";
    module.exports.OnAction_ZJH.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_ZJH.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_ZJH.PlayerReset = "PlayerReset";
    module.exports.OnAction_ZJH.PlayerLook = "PlayerLook";
    module.exports.OnAction_ZJH.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_ZJH.PLAYER_SHOW_HAND = "PlayerShowHand";
    module.exports.OnAction_ZJH.PlayerCompare = "PlayerCompare";
    module.exports.OnAction_ZJH.RoomStateOpen = "RoomStateOpen";
    module.exports.OnAction_ZJH.RoundChange = "RoundChange";
    module.exports.OnAction_ZJH.PlayerAction = "PlayerAction";
    module.exports.OnAction_ZJH.PlayerActionTypeLook = 1e3;
    module.exports.OnAction_ZJH.PlayerActionTypeShowHand = 1001;
    module.exports.OnAction_LX9 = {};
    module.exports.OnAction_LX9.ROUTE = "room.action";
    module.exports.OnAction_LX9.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_LX9.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_LX9.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_LX9.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_LX9.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_LX9.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_LX9.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_LX9.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_LX9.PLAYER_MY_SCORE = "PlayerMyScore";
    module.exports.OnAction_LX9.PlayerOpen = "PlayerOpen";
    module.exports.OnAction_YYBF = {};
    module.exports.OnAction_YYBF.ROUTE = "room.action";
    module.exports.OnAction_YYBF.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_YYBF.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_YYBF.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_YYBF.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_YYBF.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_YYBF.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_YYBF.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_YYBF.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_YYBF.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_YYBF.ROOM_CHAT = "Chat";
    module.exports.OnAction_YYBF.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_YYBF.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_YYBF.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_YYBF.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_YYBF.PlayerScore = "PlayerScore";
    module.exports.OnAction_YYBF.ROUND_END = "RoundEnd";
    module.exports.OnAction_YYBF.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_YYBF.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_YYBF.PlayerReset = "PlayerReset";
    module.exports.OnAction_YYBF.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_YYBF.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_YYBF.PLAYER_MY_SCORE = "PlayerMyScore";
    module.exports.OnAction_YYBF.BankerList = "BankerList";
    module.exports.OnAction_YYBF.UpBanker = "UpBanker";
    module.exports.OnAction_YYBF.DownBanker = "DownBanker";
    module.exports.OnAction_YYBF.RoadList = "RoadList";
    module.exports.OnAction_YYBF.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_YYBF.RoomStateBet = "RoomStateBet";
    module.exports.OnAction_YYBF.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_SLWH = {};
    module.exports.OnAction_SLWH.ROUTE = "room.action";
    module.exports.OnAction_SLWH.PLAYER_ENTER_ROOM = "PlayerEnterRoom";
    module.exports.OnAction_SLWH.LEAVE_ROOM = "PlayerLeaveRoom";
    module.exports.OnAction_SLWH.CHANGE_ROOM = "CHANGE_ROOM";
    module.exports.OnAction_SLWH.ADD_PLAYER = "SeatAddPlayer";
    module.exports.OnAction_SLWH.REMOVE_PLAYER = "SeatRemovePlayer";
    module.exports.OnAction_SLWH.PLAYER_PLAY = "PlayerPlay";
    module.exports.OnAction_SLWH.PLAYER_SHOW_CARDS = "PlayerShowCards";
    module.exports.OnAction_SLWH.PLAYER_HOST = "PlayerHost";
    module.exports.OnAction_SLWH.DISMISS_ROOM = "DismissRoom";
    module.exports.OnAction_SLWH.ROOM_CHAT = "Chat";
    module.exports.OnAction_SLWH.ROOM_STATE_DEAL = "RoomStateDeal";
    module.exports.OnAction_SLWH.ROOM_PLAYING = "RoomPlaying";
    module.exports.OnAction_SLWH.ROUND_BEGIN = "RoundBegin";
    module.exports.OnAction_SLWH.ROOM_CHANGE_STATE = "RoomStateChangeState";
    module.exports.OnAction_SLWH.PlayerScore = "PlayerScore";
    module.exports.OnAction_SLWH.ROUND_END = "RoundEnd";
    module.exports.OnAction_SLWH.RoomStateTimerStart = "RoomStateTimerStart";
    module.exports.OnAction_SLWH.RoomStateTimerStop = "RoomStateTimerStop";
    module.exports.OnAction_SLWH.PlayerReset = "PlayerReset";
    module.exports.OnAction_SLWH.RoomStateShowHand = "RoomStateShowHand";
    module.exports.OnAction_SLWH.PLAYER_BID = "PlayerBid";
    module.exports.OnAction_SLWH.PLAYER_MY_SCORE = "PlayerMyScore";
    module.exports.OnAction_SLWH.BankerList = "BankerList";
    module.exports.OnAction_SLWH.UpBanker = "UpBanker";
    module.exports.OnAction_SLWH.DownBanker = "DownBanker";
    module.exports.OnAction_SLWH.RoadList = "RoadList";
    module.exports.OnAction_SLWH.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.OnAction_SLWH.RoomStateBet = "RoomStateBet";
    module.exports.OnAction_SLWH.PlayerBidRepeat = "PlayerBidRepeat";
    module.exports.RoomAction = {};
    module.exports.RoomAction.DISMISS_VOTE = "DismissVote";
    cc._RF.pop();
  }, {} ],
  Settings: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c04fyd89JAZY7qGjvubi+f", "Settings");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _btnYXOpen: null,
        _btnYXClose: null,
        _btnYYOpen: null,
        _btnYYClose: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this._btnYXOpen = this.node.getChildByName("yinxiao").getChildByName("btn_yx_open");
        this._btnYXClose = this.node.getChildByName("yinxiao").getChildByName("btn_yx_close");
        this._btnYYOpen = this.node.getChildByName("yinyue").getChildByName("btn_yy_open");
        this._btnYYClose = this.node.getChildByName("yinyue").getChildByName("btn_yy_close");
        this.initButtonHandler(this.node.getChildByName("btn_close"));
        this.initButtonHandler(this.node.getChildByName("btn_exit"));
        this.initButtonHandler(this._btnYXOpen);
        this.initButtonHandler(this._btnYXClose);
        this.initButtonHandler(this._btnYYOpen);
        this.initButtonHandler(this._btnYYClose);
        var slider = this.node.getChildByName("yinxiao").getChildByName("progress");
        cc.vv.utils.addSlideEvent(slider, this.node, "Settings", "onSlided");
        var slider = this.node.getChildByName("yinyue").getChildByName("progress");
        cc.vv.utils.addSlideEvent(slider, this.node, "Settings", "onSlided");
        this.refreshVolume();
      },
      onSlided: function onSlided(slider) {
        "yinxiao" == slider.node.parent.name ? cc.vv.audioMgr.setSFXVolume(slider.progress) : "yinyue" == slider.node.parent.name && cc.vv.audioMgr.setBGMVolume(slider.progress);
        this.refreshVolume();
      },
      initButtonHandler: function initButtonHandler(btn) {
        cc.vv.utils.addClickEvent(btn, this.node, "Settings", "onBtnClicked");
      },
      refreshVolume: function refreshVolume() {
        this._btnYXClose.active = cc.vv.audioMgr.sfxVolume > 0;
        this._btnYXOpen.active = !this._btnYXClose.active;
        var yx = this.node.getChildByName("yinxiao");
        var width = 430 * cc.vv.audioMgr.sfxVolume;
        var progress = yx.getChildByName("progress");
        progress.getComponent(cc.Slider).progress = cc.vv.audioMgr.sfxVolume;
        progress.getChildByName("progress").width = width;
        this._btnYYClose.active = cc.vv.audioMgr.bgmVolume > 0;
        this._btnYYOpen.active = !this._btnYYClose.active;
        var yy = this.node.getChildByName("yinyue");
        var width = 430 * cc.vv.audioMgr.bgmVolume;
        var progress = yy.getChildByName("progress");
        progress.getComponent(cc.Slider).progress = cc.vv.audioMgr.bgmVolume;
        progress.getChildByName("progress").width = width;
      },
      onBtnClicked: function onBtnClicked(event) {
        if ("btn_close" == event.target.name) this.node.active = false; else if ("btn_exit" == event.target.name) UserServer.logout(function() {
          cc.director.loadScene("login");
        }); else if ("btn_yx_open" == event.target.name) {
          cc.vv.audioMgr.setSFXVolume(1);
          this.refreshVolume();
        } else if ("btn_yx_close" == event.target.name) {
          cc.vv.audioMgr.setSFXVolume(0);
          this.refreshVolume();
        } else if ("btn_yy_open" == event.target.name) {
          cc.vv.audioMgr.setBGMVolume(1);
          this.refreshVolume();
        } else if ("btn_yy_close" == event.target.name) {
          cc.vv.audioMgr.setBGMVolume(0);
          this.refreshVolume();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  SimpleChinese: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ed65EHtjhMpZNJtgvXxtL3", "SimpleChinese");
    "use strict";
    var strings = module.exports = {};
    var constants = require("Constants");
    strings.Common = {};
    strings.Common.tai = "台";
    strings.Common.lastMj = "剩余牌数";
    strings.Common.success = "成功";
    strings.Common.copy = "复制";
    strings.Common.remove = "移除";
    strings.Common.operate = "操作";
    strings.Common.found = "创建";
    strings.Common.modify = "修改";
    strings.Common.extraction = "取出";
    strings.Common.deposit = "存入";
    strings.Common.set = "设置";
    strings.Common.quit = "退出";
    strings.Common.tiren = "踢人";
    strings.Common.upgrade = "升级";
    strings.Common.downgrade = "降级";
    strings.Common.dontPass = "以内";
    strings.Common.nick = "昵称";
    strings.Common.remarks = "备注";
    strings.Common.noRemarks = "无备注";
    strings.Common.totalCalc = "总计";
    strings.Common.wait = "等待";
    strings.Common.around = "圈";
    strings.Common.score = "分";
    strings.Common.base = "底";
    strings.Common.second = "秒";
    strings.Common.noLimit = "无限制";
    strings.Common.roomId = "房号";
    strings.Common.room = "房间";
    strings.Common.number = "号";
    strings.Common.player = "玩家";
    strings.Common.code = "码";
    strings.Common.recordCode = "回放码";
    strings.Common.downUrl = "下载地址";
    strings.Common.door = "门";
    strings.Common.bindAgent = "绑定代理";
    strings.Common.roomCard = "GCoin";
    strings.Room = {};
    strings.Room.names = [ "羊毛场", "韭菜场", "币民场", "大佬场", "V神场", "中本聪" ];
    strings.States = {};
    strings.States.wfeeStates = {
      "-1": "排队重发",
      0: "排队提交",
      1: "等待发送",
      2: "等待发送",
      3: "等待发送",
      4: "发送成功",
      5: "已确认",
      11: "排队中",
      12: "排队打款"
    };
    strings.Reasons = {};
    strings.Reasons.reason = {
      1: "提wfee",
      2: "充wfee",
      3: "wfee换GCoin",
      4: "GCoin换wfee",
      5: "提币取消"
    };
    strings.Dealer = {};
    strings.Dealer.Speaks = [ [ "不要怂，就是干！", "全梭哈！梭哈！梭哈！！", "赢了会所嫩模，输了下海干活！", "不要跟我说什么技术分析！", "老夫玩币都是一把梭！", "老夫玩了几十年牌，少扯有的没的！", "告诉你们玩牌就是一把梭！", "老夫都是一把梭，没怂过！", "一把梭下去，一点压力都没有！", "钱不多，一把梭！", "听我的，一把梭，梭完了你就等涨吧！", "两眼一闭，随便梭！梭完就涨停！", "不用考虑，一个字，梭！", "今天你梭哈了吗！", "想要逆袭吗，一把梭！", "一把梭，集中赢！", "一把梭哈轻松多了！", "玩把梭哈！你有胆量吗？", "一把梭哈，谁怂谁吃亏！", "拼一拼，搏一搏，单车变摩托！", "一把梭！玩的就是心跳！", "任性起来一把梭哈！", "一币一嫩模，一币一別墅！", "瀑布算个球，富贵险中求！", "玩币我只知道梭哈，一梭到底!", "没有梭哈的人生是不完整的!" ], [ "没有韭菜，就没有社区！", "没有社区，就没有行业！", "没有行业，大家没饭吃！", "韭菜不能割！韭菜要勤施肥!", "培养未来新韭菜，使劲浇水！", "欢迎来韭菜庄园做客", "韭菜们还在门口站着", "还有无数人准备踏足而入", "买一个比特币留给孩子", "等你孩子结婚的时候送他一个比特币", "有生之年比特币不到100万美金，我直播吃鸡鸡！", "希望大家记住我是一个‘三俗’分子", "我是只知道挣钱的那种人", "我只对一个事情感兴趣，那就是挣钱", "在币圈你不用崇拜任何人", "记住我”暴发户”的草根形象", "总而言之，买比特币就对了", "记住！我们的目标是睡遍全世界！", "我们的目标是再造新中国！", "去购买一个比特币吧，一个就够了", "最好的挣钱方式是持有赌场的股份", "事儿都是勇敢者干出来的", "这是一个勇敢者的游戏", "亏了赚了不说，重要的是参与过了", "醒醒！起来割韭菜了！" ], [ "比特币现金有自己独立的路线", "对前景和未来，要有不同的理解", "要么赔光，要么赚一百倍！", "钱只能投一次，不成功就倾家荡产了！", "区块链是一种低成本构建信任关系的工具", "区块链能构建一个很权威的信任机制", "区块链的功能正在快速迭代和发展", "区块链将来会被应用到很多方面", "推动币价上涨最好的方法就是多烧几柱香啦！", "比特币是从一个社区开始成长", "比特币比Q币会得到更广泛的承认", "比特币是无国界的", "比特币在100多个国家都有流通和兑换", "比特币是人类历史中没有过的金融创新", "投资比特币是在对抗潜在的通货膨胀风险", "比特币是集成电路的一个细分行业", "我把比特币当做风险投资实践", "社区会变得更加经济理性", "比特币还需要在用户普及上做更多努力" ], [ "不要相信运气", "更不要相信“机不可失，时不再来！”", "打造人脉不如打造自己！", "妄图想要当庄的“庄”，其实都他妈的是“装”", "我们是没有办法回到没有比特币的世界", "我并没有把比特币当作钱", "比特币是一个伟大的社会实验", "我把比特币当作一个美丽的主意", "每天做思考，做验证，其乐无穷！", "但愿更多的投资者能够听懂", "本来是想吃肉，别到市场转一圈，剩下骂娘了！" ], [ "我们是编写代码的推动者", "这是观察事物的不同的方式", "当前是社会对区块链有着极大关注的时代", "一切都有可能会发生天翻地覆的改变", "如今只是刚刚开始", "未来将会是一个去中心化的世界", "区块链构建的是充满效率和信任的世界", "我们要创造一种可以探索的科技", "我们要创造很多有趣的事物", "我们要创造自己想象的未来", "以太坊就是一个通用的区块链", "世界上许多政府都对以太坊感兴趣", "区块链是完全开放的系统", "区块链人人可参与", "参与区块链还有很多不用的途径" ], [ "传统货币最根本的问题在于信任", "中央银行必须让人信任它不会让货币贬值", "银行无法让人确信它能管理好钱财", "银行会用货币来制造信贷泡沫", "中央银行不让货币贬值的可信度是不存在的", "比特币诞生于英国财政大臣纾解银行危机之时", "比特币这样的系统从理论上是可行的" ], [ "我们炒币的可以要饭，但是不能卖币！", "未来的一切都可能被改变", "或许将来货币的流通方式会被改变", "不可能真正禁止比特币", "一定要重视区块链", "未来区块链有可能和互联网一样伟大", "区块链的火爆并非“一时兴起”", "区块链技术将有颠覆性的应用", "区块链的应用值得期待", "解决实际问题，加速行业变革", "比特币是一场关于可行性的实验", "区块链不再限于货币了，是价值在利用它", "保障合约将是区块链的下一步发展", "本是要创造新货币，结果创造了新商业", "区块链将颠覆金融世界的规则", "我相信我们正迈向一个新的时代" ] ];
    strings.Mahjong = {};
    strings.Mahjong.East = "东";
    strings.Mahjong.South = "南";
    strings.Mahjong.West = "西";
    strings.Mahjong.North = "北";
    strings.Mahjong.Dirs = [ strings.Mahjong.East, strings.Mahjong.South, strings.Mahjong.West, strings.Mahjong.North ];
    strings.Mahjong.Wind = "风";
    strings.Mahjong.RoundBanker = "局";
    strings.Mahjong.payModeRoom = "房主付";
    strings.Mahjong.payModeAA = "AA付";
    strings.Mahjong.payModeZiMo = "自摸付";
    strings.Mahjong.eightPair = "呖咕呖咕";
    strings.Mahjong.drawPing = "自摸平胡";
    strings.Mahjong.tianListening = "天听";
    strings.Mahjong.diListening = "地听";
    strings.Mahjong.sevenFlower = "七抢一";
    strings.Chats = [ "你太牛啦", "哈哈！手气真好", "快点出牌呦", "今天真高兴", "这个吃的好", "你放炮，我不胡", "你家里是开银行的吧", "不好意思，我有事要先走一步啦", "你的牌打的太好了", "大家好很高兴见到各位", "怎麽又断线啦，网络怎麽这麽差呀" ];
    strings.CommonTips = {};
    strings.CommonTips.copySuccess = "已复制";
    strings.CommonTips.BreakRoom = "该房间已被房主解散";
    strings.CommonTips.BuySuccess = "购买成功";
    strings.CommonTips.ToastSuccess = "34张GCoin已到您帐护";
    strings.CommonTips.NoMail = "您没有邮件";
    strings.CommonTips.InputNum = "请随便输入一个6位长度的帐号";
    strings.CommonTips.RemindCheck = "请检查遗漏的开房选项";
    strings.CommonTips.GiveSuccess = "赠送成功";
    strings.CommonTips.LastPage = "当前已是第一页或最后一页";
    strings.CommonTips.InputId = "请先输入邀请人ID";
    strings.CommonTips.BindSuccess = "绑定成功";
    strings.CommonTips.ApplySuccess = "申请成功";
    strings.CommonTips.RemindFill = "请填写完信息再提交";
    strings.CommonTips.InputMoney = "请填写金额";
    strings.CommonTips.ScreenShot = "截图生成完毕:";
    strings.CommonTips.GiveUpPeng = "放弃碰";
    strings.CommonTips.GiveUpHu = "放弃胡";
    strings.CommonTips.InputInviterId = "请先输入邀请人ID";
    strings.CommonTips.BindSuccessCard = "绑定成功";
    strings.CommonTips.ReceiveItems = "请先领取邮件物品";
    strings.CommonTips.AlreadyReceive = "已经领取";
    strings.CommonTips.CanNotLotteryDraw = "抽奖次数不足";
    strings.CommonTips.CanNotRoomCard = "GCoin不足";
    strings.CommonTips.RefuseApply = "已拒绝该玩家的入会申请";
    strings.CommonTips.AgreeApply = "已同意该玩家的入会申请";
    strings.CommonTips.InputPlus = "必须填写正数";
    strings.CommonTips.InputName = "名称不能为空";
    strings.CommonTips.CanNotPhone = "手机号不能为空";
    strings.CommonTips.CanNotEmpty = "输入不能为空";
    strings.CommonTips.CanNotNick = "昵称不能为空";
    strings.CommonTips.CanNotPassWord = "密码不能为空";
    strings.CommonTips.CanNotCaptcha = "验证码不能为空";
    strings.CommonTips.SidnInOk = "注册成功";
    strings.CommonTips.InputToastNum = "请填入GCoin数量";
    strings.CommonTips.SendApplication = "已发送申请，等待审批中...";
    strings.CommonTips.WithoutMan = "无此成员";
    strings.CommonTips.President = "仅会长可以操作";
    strings.CommonTips.NoSet = "设置未变动";
    strings.CommonTips.copySuccessAndShare = "复制成功，快分享给好友吧";
    strings.CommonTips.pasteRoomTips = "複製此文字后贴上房号即可加入该房间";
    strings.CommonTips.viewRecordTips = "复制本消息-点击战绩-查看他人回放-贴入即可";
    strings.CommonTips.shareRecord = "分享了游戏录像，快来查看吧！";
    strings.CommonTips.shareGame = "邀请你来最好玩的麻将游戏";
    strings.CommonTips.letsFight = "快来战到天亮吧！";
    strings.CommonTips.phoneCodeSended = "验证码已发送，请耐心等待";
    strings.CommonTips.adminDissRoom = "您的房间已被管理员解散";
    strings.CommonTips.noData = "没有数据";
    strings.Error = {};
    strings.Error.CanNotPlay = "不允许打本张牌";
    strings.Error.CanNotWin = "不允许胡";
    strings.Error.CanNotGroup = "不允许鸣牌";
    strings.Error.dismissStop = "解散房间失败";
    strings.Error.StillClose = "该功能即将开放";
    strings.Error.UnableWin = "当前牌型无法胡牌";
    strings.Error.RefuseAndroid = "暂不支持android";
    strings.Error.AccountError = "您的帐号已被别人登录";
    strings.Error.LoadingNet = "您的网络太差，请稍后再试";
    strings.Error.NetError = "网络似乎已断开";
    strings.Error.CanNotBind = "不能邦定您自己的邀请码";
    strings.Error.CanNotRepetBind = "不能重复邦定邀请码";
    strings.Error.InputError = "您输入的邀请码有误，请重新输入";
    strings.Error.CanNotGive = "不能赠送给自己";
    strings.Error.NoPaste = "剪贴板是空的哦";
    strings.Error.NoNumbers = "没有数字可供复制";
    cc._RF.pop();
  }, {
    Constants: "Constants"
  } ],
  SocketHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f3dcBs7f5JYYWBoVpSWM3L", "SocketHelper");
    "use strict";
    var log = function log(info) {
      cc.log(info);
    };
    var state = {
      INITED: 0,
      CONNECTING: 1,
      CONNECTED: 2,
      RECONNECTING: 3,
      REQUESTING: 4,
      DISCONNECT: 5,
      CLOSED: 6,
      HEARTBEATOUT: 7
    };
    function SocketHelper() {
      this.state = state.INITED;
      this.host = null;
      this.port = null;
      this.timer = null;
      this.onKicked = false;
      this.disconnectSelf = false;
    }
    module.exports = new SocketHelper();
    SocketHelper.prototype.initNet = function(cb) {
      var _this = this;
      this.state = state.INITED;
      this.serverList = [ {
        host: "118.25.176.115",
        port: "31101"
      } ];
      this.connect(cb, function() {
        _this.onListeners();
      });
    };
    SocketHelper.prototype.setAServer = function() {
      var index = 0;
      this.host = this.serverList[index].host;
      this.port = this.serverList[index].port;
      return index;
    };
    SocketHelper.prototype.connect = function(cbConnected, cbDone) {
      var _this2 = this;
      cc.log("@ check connecting ");
      if (this.state != state.INITED && this.state != state.DISCONNECT) return;
      this.state = state.CONNECTING;
      this.setAServer();
      pomelo.init({
        host: this.host,
        port: this.port
      }, function() {
        _this2.onConnected();
        cbConnected && cbConnected();
      });
      cbDone && cbDone();
      log("@ connecting host:" + this.host + " port:" + this.port);
    };
    SocketHelper.prototype.onListeners = function() {
      pomelo.on("close", this.onClose.bind(this));
      pomelo.on("disconnect", this.onDisconnect.bind(this));
      pomelo.on("heartbeat timeout", this.onHeartbeatTimeout.bind(this));
      pomelo.on("onKick", this.onKick.bind(this));
    };
    SocketHelper.prototype.onConnected = function() {
      log("@ server connected ");
      this.state = state.CONNECTED;
      this.clearHandler();
    };
    SocketHelper.prototype.onReConnected = function() {
      log("@ server reconnected ");
      GameHelper.autoLogin();
    };
    SocketHelper.prototype.onLoginSuccess = function() {
      log("@ login success ");
      this.onKicked = false;
    };
    SocketHelper.prototype.onKick = function() {
      this.onKicked = true;
      GameHelper.loadLoginScene(function() {
        MsgHelper.pushToast($G.gStrings.Error.AccountError);
      });
    };
    SocketHelper.prototype.disconnect = function() {
      $G.gCData.gIsLogined = false;
      this.state = state.DISCONNECT;
      pomelo.disconnect();
    };
    SocketHelper.prototype.onHeartbeatTimeout = function() {
      cc.log("@ onHeartbeatTimeout");
      this.state = state.HEARTBEATOUT;
    };
    SocketHelper.prototype.onDisconnect = function() {
      cc.log("@ onDisconnect");
      this.state = state.DISCONNECT;
      this.reconnect();
    };
    SocketHelper.prototype.onClose = function() {
      log("@ onClose State : ");
      this.state = state.CLOSED;
    };
    SocketHelper.prototype.clearHandler = function() {
      if (null == this.timer) return;
      clearTimeout(this.timer);
      this.timer = null;
    };
    SocketHelper.prototype.reconnect = function() {
      if (null != this.timer) return;
      this.retryConnect();
      this.timer = setTimeout(this.retryConnect.bind(this), 1e3);
    };
    SocketHelper.prototype.retryConnect = function() {
      cc.log("@ retry connect ");
      this.clearHandler();
      this.connect(this.onReConnected.bind(this));
    };
    SocketHelper.prototype.isConnected = function() {
      return this.state === state.CONNECTED;
    };
    SocketHelper.prototype.request = function(route) {
      var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var cb1 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var _this3 = this;
      var cbError = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var showLoading = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      log("@ prepare to request : " + route + " State: " + this.state);
      this.state === state.CONNECTED && (this.state = state.REQUESTING);
      log("@ request sended : " + route);
      cc.log("params ------- ", params);
      pomelo.request(route, params, function(data) {
        if (_this3.state === state.REQUESTING) {
          _this3.state = state.CONNECTED;
          if (200 === data.code) {
            log(data.msg);
            cb1 && _.isFunction(cb1) && cb1(data.msg);
          } else {
            log("@ request error : " + route + " Error code : " + data.code + " : " + data.msg);
            if (cbError && _.isFunction(cbError)) cbError(data); else {
              var info = data.msg;
              MsgHelper.pushToast(info);
            }
          }
        }
      });
    };
    SocketHelper.prototype.onNetListener = function(route, callback) {
      pomelo.on(route, callback);
    };
    SocketHelper.prototype.offNetListener = function(route, callback) {
      pomelo.off(route, callback);
    };
    cc._RF.pop();
  }, {} ],
  Status: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd3edE3qshGh6sGwORSirVf", "Status");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _status: null
      },
      start: function start() {
        this._status = cc.find("Canvas/status");
        this.red = new cc.Color(205, 0, 0);
        this.green = new cc.Color(0, 205, 0);
        this.yellow = new cc.Color(255, 200, 0);
      },
      update: function update(dt) {
        var delay = this._status.getChildByName("delay");
        if (null != cc.vv.net.delayMS) {
          delay.getComponent(cc.Label).string = cc.vv.net.delayMS + "ms";
          cc.vv.net.delayMS > 800 ? delay.color = this.red : cc.vv.net.delayMS > 300 ? delay.color = this.yellow : delay.color = this.green;
        } else {
          delay.getComponent(cc.Label).string = "N/A";
          delay.color = this.red;
        }
        var power = this._status.getChildByName("power");
        power.scaleX = cc.vv.anysdkMgr.getBatteryPercent();
      }
    });
    cc._RF.pop();
  }, {} ],
  TexHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59ac6e3XeVEYbfDwhlU/ess", "TexHelper");
    "use strict";
    var prePathGame_NN = "resources/type/";
    module.exports._getSF = function(path) {
      var url = cc.url.raw(path);
      var tex = cc.textureCache.addImage(url);
      return new cc.SpriteFrame(tex);
    };
    module.exports.setSpriteByUrl = function(sprite, url) {
      var cb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      var tType = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "jpg";
      var showLoading = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if ("" === url || null == url) {
        cb && cb();
        return;
      }
      cc.loader.load({
        url: url,
        type: tType
      }, function(err, texture) {
        var frame = new cc.SpriteFrame(texture);
        sprite.spriteFrame = frame;
        cb && cb();
      });
    };
    module.exports.getOXType = function(type) {
      var name = prePathGame_NN + "ox_" + type + ".png";
      return module.exports._getSF(name);
    };
    module.exports.getFace = function(id) {
      var name = "resources/hall/textures/Chat/face_" + id + ".png";
      return module.exports._getSF(name);
    };
    module.exports.getHead = function(id) {
      return module.exports._getSF(name);
    };
    module.exports.getTables = function(index) {
      return module.exports._getSF(file);
    };
    module.exports.getTableBg = function() {
      return module.exports._getSF(file);
    };
    module.exports.getDealer = function(index) {
      return module.exports._getSF(file);
    };
    cc._RF.pop();
  }, {} ],
  TimeHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8cf4kCGv9LTaMf3VH3gHrR", "TimeHelper");
    "use strict";
    module.exports.getSTime = function() {};
    module.exports.getSTimeHM = function() {
      return module.exports.getHourMinute(module.exports.getSTime());
    };
    module.exports.getCTimeHM = function() {
      return module.exports.getHourMinute(module.exports.getCTime());
    };
    module.exports.getCTime = function() {
      return Date.now();
    };
    module.exports.formatTimeByString = function(str) {
      str = str.replace(/-/g, "/");
      return module.exports.getFullDate(new Date(str));
    };
    module.exports.getHourMinute = function(ms) {
      var date = new Date();
      date.setTime(ms);
      return module.exports._formatZero(date.getHours()) + ":" + module.exports._formatZero(date.getMinutes());
    };
    module.exports._formatZero = function(time) {
      time += "";
      return 1 === time.length ? "0" + time : time;
    };
    module.exports.parseSTime = function(time) {
      var results = time.split("-");
      _.each(results, function(t, i) {
        results[i] = module.exports._formatZero(t);
      });
      return results;
    };
    module.exports.getDate = function(ms) {
      var date = new Date();
      date.setTime(ms);
      var ret = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      return ret;
    };
    module.exports.getFullDate = function(ms) {
      var date = new Date();
      date.setTime(ms);
      var ret = date.getFullYear() + "-" + module.exports._formatZero(date.getMonth() + 1) + "-" + module.exports._formatZero(date.getDate());
      ret += "  ";
      ret += module.exports._formatZero(date.getHours()) + ":" + module.exports._formatZero(date.getMinutes());
      return ret;
    };
    module.exports.getDateHourMinute = function(ms) {
      var date = new Date();
      date.setTime(ms);
      var ret = module.exports._formatZero(date.getMonth() + 1) + "-" + module.exports._formatZero(date.getDate()) + " " + module.exports.getHourMinute(ms);
      return ret;
    };
    cc._RF.pop();
  }, {} ],
  TimePointer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b586erPK1H5bFfrMKWs+Y6", "TimePointer");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _arrow: null,
        _pointer: null,
        _timeLabel: null,
        _time: -1,
        _alertTime: -1
      },
      onLoad: function onLoad() {
        var gameChild = this.node.getChildByName("game");
        this._arrow = gameChild.getChildByName("arrow");
        this._pointer = this._arrow.getChildByName("pointer");
        this.initPointer();
        this._timeLabel = this._arrow.getChildByName("lblTime").getComponent(cc.Label);
        this._timeLabel.string = "00";
        var self = this;
        this.node.on("game_begin", function(data) {
          self.initPointer();
        });
        this.node.on("game_chupai", function(data) {
          self.initPointer();
          self._time = 10;
          self._alertTime = 3;
        });
      },
      initPointer: function initPointer() {
        if (null == cc.vv) return;
        this._arrow.active = "playing" == cc.vv.gameNetMgr.gamestate;
        if (!this._arrow.active) return;
        var turn = cc.vv.gameNetMgr.turn;
        var localIndex = cc.vv.gameNetMgr.getLocalIndex(turn);
        for (var i = 0; i < this._pointer.children.length; ++i) this._pointer.children[i].active = i == localIndex;
      },
      update: function update(dt) {
        if (this._time > 0) {
          this._time -= dt;
          if (this._alertTime > 0 && this._time < this._alertTime) {
            cc.vv.audioMgr.playSFX("timeup_alarm.mp3");
            this._alertTime = -1;
          }
          var pre = "";
          this._time < 0 && (this._time = 0);
          var t = Math.ceil(this._time);
          t < 10 && (pre = "0");
          this._timeLabel.string = pre + t;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  UserHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c93c9zY4VNLD4BIi6jP1ntI", "UserHandler");
    "use strict";
    var handler = module.exports;
    handler.setData = function(msg) {
      $G.gSData.gCData = msg;
      if (handler.getData().account) {
        gLocalData.userInfo.account = handler.getData().account;
        DataHelper.saveAllData();
      }
    };
    handler.getData = function() {
      return $G.gSData.gCData;
    };
    handler.getId = function() {
      return handler.getData().id ? handler.getData().id : 0;
    };
    handler.getRecommender = function() {
      return handler.getData().agentId;
    };
    handler.getAgentId = function() {
      return handler.getData().agentId;
    };
    handler.getAgentNick = function() {
      return handler.getData().agentNick;
    };
    handler.getPhone = function() {
      return handler.getData().phone;
    };
    handler.getName = function() {
      return handler.getData().name;
    };
    handler.setDataRecordAll = function(recordAll) {
      handler.getData().recordAll = recordAll;
    };
    handler.getDataRecordAll = function() {
      return handler.getData().recordAll;
    };
    handler.setDataRecordIn = function(recordIn) {
      handler.getData().recordIn = recordIn;
    };
    handler.getDataRecordIn = function() {
      return handler.getData().recordIn;
    };
    handler.setDataRecordOut = function(recordOut) {
      handler.getData().recordOut = recordOut;
    };
    handler.getDataRecordOut = function() {
      return handler.getData().recordOut;
    };
    handler.setAddress = function(address) {
      handler.getData().address = address;
    };
    handler.getAddress = function() {
      return handler.getData().address;
    };
    handler.setVairdropType = function(VairdropType) {
      handler.getData().VairdropType = VairdropType;
    };
    handler.getVairdropType = function() {
      return handler.getData().VairdropType;
    };
    handler.setEth = function(eth) {
      handler.getData().eth = eth;
    };
    handler.getEth = function() {
      return handler.getData().eth;
    };
    handler.setGold = function(Gold) {
      handler.getData().Gold = Gold;
    };
    handler.getGold = function() {
      return handler.getData().Gold;
    };
    handler.setFee = function(Fee) {
      handler.getData().Fee = Fee;
    };
    handler.getFee = function() {
      return handler.getData().Fee;
    };
    handler.setRecommender = function(id) {
      handler.getData().agentId = id;
    };
    handler.getToken = function() {
      return handler.getData().token;
    };
    handler.getWxOpenID = function() {
      if (handler.getData().wx && handler.getData().wx.openId) return handler.getData().wx.openId;
      return null;
    };
    handler.getIP = function() {
      return handler.getData().ip ? handler.getData().ip : "no ip";
    };
    handler.getDesp = function() {
      return handler.getData().desp ? handler.getData().desp : "";
    };
    handler.setDesp = function(desp) {
      handler.getData().desp = desp;
    };
    handler.getNick = function() {
      cc.log("【handler.getData()】", handler.getData().nick);
      return handler.getData().nick ? handler.getData().nick : handler.getData().account;
    };
    handler.setNick = function(nick) {
      handler.getData().nick = nick;
    };
    handler.getSex = function() {
      return handler.getData().sex;
    };
    handler.setHead = function(head) {
      handler.getData().head = head;
    };
    handler.getHead = function() {
      return handler.getData().head;
    };
    handler.getDiamondsAll = function() {
      var card = handler.getData().bag[4] ? handler.getData().bag[4] : 0;
      var bindedCard = handler.getData().bag[5] ? handler.getData().bag[5] : 0;
      var count = card + bindedCard;
      void 0 != count && null != count || (count = 0);
      count = parseFloat(count.toFixed(3));
      return count;
    };
    handler.getScore = function() {
      var count = handler.getData().bag[1] ? handler.getData().bag[1] : 0;
      return count;
    };
    handler.getRoomCardsAll = function() {
      var card = handler.getData().bag[2] ? handler.getData().bag[2] : 0;
      var bindedCard = handler.getData().bag[3] ? handler.getData().bag[3] : 0;
      var count = card + bindedCard;
      void 0 != count && null != count || (count = 0);
      return count;
    };
    handler.getRoomCard = function() {
      var count = handler.getData().bag[2] ? handler.getData().bag[2] : 0;
      return count;
    };
    handler.getRoomCardBind = function() {
      var count = handler.getData().bag[3] ? handler.getData().bag[3] : 0;
      return count;
    };
    handler.getDiamond1 = function() {
      var count = handler.getData().bag[4] ? handler.getData().bag[4] : 0;
      return parseFloat(count.toFixed(3));
    };
    handler.getDiamond2 = function() {
      var count = handler.getData().bag[5] ? handler.getData().bag[5] : 0;
      return parseFloat(count.toFixed(3));
    };
    handler.shouldReconnect = function() {
      null != handler.getData().room && (cc.currentGame = handler.getData().room.game);
      return null != handler.getData().room;
    };
    handler.shouldReconnectNow = function() {
      return handler.shouldReconnect() && handler.getData().room.playing;
    };
    handler.getHistory = function() {
      return handler.getData().historys;
    };
    handler.addHistory = function(item) {
      10 === _.size(handler.getHistory()) && handler.getHistory().splice(0, 1);
      handler.getHistory().push(item);
    };
    handler.setDataGiveDiamondsHistory = function(msg) {
      handler.getData().giveDiamondsHistory = msg;
    };
    handler.getDataGiveDiamondsHistory = function() {
      return $G.gSData.gCData.giveDiamondsHistory;
    };
    handler.getDataEmailData = function() {
      handler.getData().redShow;
    };
    handler.initNetListeners = function() {
      handler.removeNetListeners();
      SocketHelper.onNetListener(ServerRouters.OnAction_User.ROUTE, handler._onHandleUser);
      SocketHelper.onNetListener(ServerRouters.OnAction_Item.ROUTE, handler._onHandleItem);
      SocketHelper.onNetListener(ServerRouters.OnAction_Broadcast.ROUTE, handler._onHandleBroadcast);
      SocketHelper.onNetListener(ServerRouters.OnAction_Broadcast.ACTION, handler._onBroadcastACTION);
      SocketHelper.onNetListener(ServerRouters.OnAction_History.ROUTE, handler._onHandleHistory);
      SocketHelper.onNetListener(ServerRouters.OnAction_Broadcast.EMAIL, handler._onEmailReceive);
      SocketHelper.onNetListener(ServerRouters.RoomAction.DISMISS_VOTE, handler._onVoteReceive);
    };
    handler.removeNetListeners = function() {
      SocketHelper.offNetListener(ServerRouters.OnAction_User.ROUTE, handler._onHandleUser);
      SocketHelper.offNetListener(ServerRouters.OnAction_Item.ROUTE, handler._onHandleItem);
      SocketHelper.offNetListener(ServerRouters.OnAction_Broadcast.ROUTE, handler._onHandleBroadcast);
      SocketHelper.offNetListener(ServerRouters.OnAction_Broadcast.ACTION, handler._onBroadcastACTION);
      SocketHelper.offNetListener(ServerRouters.RqRoom.dismissVote, handler._onHandleHistory);
      SocketHelper.offNetListener(ServerRouters.OnAction_Broadcast.EMAIL, handler._onEmailReceive);
      SocketHelper.offNetListener(ServerRouters.RqRoom.dismissVote, handler._onVoteReceive);
    };
    handler._onHandleUser = function(action) {
      var OnAction = ServerRouters.OnAction_User;
      cc.log("@@@@ OnAction : " + action);
      cc.log(action);
      _.each(action.msg, function(v, k) {
        cc.log(v + k);
        handler.getData()[k] = v;
      });
    };
    handler._onHandleItem = function(action) {
      cc.log("@@@_onHandleItem : from " + handler.getData().bag[action.msg.id] + " to " + action.msg.count);
      cc.log(action);
      handler.getData().bag[action.msg.id] = action.msg.count;
      NotifyHelper.notify(NOTIFY_UPDATE_ROOMCARD);
    };
    handler._onHandleBroadcast = function(action) {
      cc.log("@@@Broadcast :");
      cc.log(action);
      MsgHelper.pushTopInfo(action.content);
    };
    handler._onHandleHistory = function(action) {
      cc.log("@@@Histroy :");
      cc.log(action);
      UserHandler.addHistory(action);
    };
    handler._onBroadcastACTION = function(action) {
      cc.log("@@@Histroy :");
      cc.log(action);
      MsgHelper.pushTopInfo(action.msg);
    };
    handler._onEmailReceive = function() {
      handler.getData().redPoint.mail = true;
      NotifyHelper.notify(NOTIFY_UPDATE_EMAIL);
      cc.log("邮件消息收到");
    };
    handler._onVoteReceive = function() {
      cc.log("【請求解散房间】");
    };
    cc._RF.pop();
  }, {} ],
  UserInfoShow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe4f16CAmpBlZphnpsH1ETv", "UserInfoShow");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _userinfo: null
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return;
        this._userinfo = cc.find("Canvas/userinfo");
        this._userinfo.active = false;
        cc.vv.utils.addClickEvent(this._userinfo, this.node, "UserInfoShow", "onClicked");
        cc.vv.userinfoShow = this;
      },
      show: function show(name, userId, iconSprite, sex, ip) {
        if (null != userId && userId > 0) {
          this._userinfo.active = true;
          this._userinfo.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = iconSprite.spriteFrame;
          this._userinfo.getChildByName("name").getComponent(cc.Label).string = name;
          this._userinfo.getChildByName("ip").getComponent(cc.Label).string = "IP: " + ip.replace("::ffff:", "");
          this._userinfo.getChildByName("id").getComponent(cc.Label).string = "ID: " + userId;
          var sex_female = this._userinfo.getChildByName("sex_female");
          sex_female.active = false;
          var sex_male = this._userinfo.getChildByName("sex_male");
          sex_male.active = false;
          1 == sex ? sex_male.active = true : 2 == sex && (sex_female.active = true);
        }
      },
      onClicked: function onClicked() {
        this._userinfo.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  UserMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74d78JBqHdDKY6hckY2YuL+", "UserMgr");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        account: null,
        userId: null,
        userName: null,
        lv: 0,
        exp: 0,
        coins: 0,
        gems: 0,
        sign: 0,
        ip: "",
        sex: 0,
        roomData: null,
        oldRoomId: null
      },
      guestAuth: function guestAuth() {
        var account = _.random(1e5, 999999) + "";
        null == account && (account = cc.sys.localStorage.getItem("account"));
        if (null == account) {
          account = Date.now();
          cc.sys.localStorage.setItem("account", account);
        }
        var guestLogin = "connector.authorizationHandler.login";
        cc.vv.http.sendRequest(guestLogin, {
          type: 0,
          account: account,
          game: cc.currentGame ? cc.currentGame : "nn"
        }, this.onAuth);
      },
      onAuth: function onAuth(ret) {
        var self = cc.vv.userMgr;
        if (0 !== ret.errcode) console.log(ret.errmsg); else {
          self.account = ret.account;
          self.sign = ret.sign;
          cc.vv.http.url = "http://" + cc.vv.SI.hall;
          self.login();
        }
      },
      login: function login() {
        cc.director.loadScene("hall");
      },
      create: function create(name) {
        var self = this;
        var onCreate = function onCreate(ret) {
          0 !== ret.errcode ? console.log(ret.errmsg) : self.login();
        };
        var data = {
          account: this.account,
          sign: this.sign,
          name: name
        };
        cc.vv.http.sendRequest("/create_user", data, onCreate);
      },
      enterRoom: function enterRoom(roomId, callback) {
        var self = this;
        var onEnter = function onEnter(ret) {
          if (0 !== ret.errcode) if (-1 == ret.errcode) setTimeout(function() {
            self.enterRoom(roomId, callback);
          }, 5e3); else {
            cc.vv.wc.hide();
            null != callback && callback(ret);
          } else {
            cc.vv.wc.hide();
            null != callback && callback(ret);
            cc.vv.gameNetMgr.connectGameServer(ret);
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign,
          roomid: roomId
        };
        cc.vv.wc.show("正在进入房间 " + roomId);
        cc.vv.http.sendRequest("/enter_private_room", data, onEnter);
      },
      getHistoryList: function getHistoryList(callback) {
        var self = this;
        var onGet = function onGet(ret) {
          if (0 !== ret.errcode) console.log(ret.errmsg); else {
            console.log(ret.history);
            null != callback && callback(ret.history);
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign
        };
        cc.vv.http.sendRequest("/get_history_list", data, onGet);
      },
      getGamesOfRoom: function getGamesOfRoom(uuid, callback) {
        var self = this;
        var onGet = function onGet(ret) {
          if (0 !== ret.errcode) console.log(ret.errmsg); else {
            console.log(ret.data);
            callback(ret.data);
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign,
          uuid: uuid
        };
        cc.vv.http.sendRequest("/get_games_of_room", data, onGet);
      },
      getDetailOfGame: function getDetailOfGame(uuid, index, callback) {
        var self = this;
        var onGet = function onGet(ret) {
          if (0 !== ret.errcode) console.log(ret.errmsg); else {
            console.log(ret.data);
            callback(ret.data);
          }
        };
        var data = {
          account: cc.vv.userMgr.account,
          sign: cc.vv.userMgr.sign,
          uuid: uuid,
          index: index
        };
        cc.vv.http.sendRequest("/get_detail_of_game", data, onGet);
      }
    });
    cc._RF.pop();
  }, {} ],
  UserServer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "555c3pzL+JCrY2TjP/BGaYy", "UserServer");
    "use strict";
    var server = module.exports;
    server.platformLogin = function(platformName, game, account, nick, head, sex, cb) {
      cc.log("platformLogin:" + account);
      sex = parseInt(sex);
      server._sendLogin(ServerRouters.RqUser.platformLogin, {
        type: 2,
        game: cc.currentGame ? cc.currentGame : "nn",
        account: account,
        nick: nick,
        head: head,
        sex: sex,
        gps: null
      }, cb);
    };
    server.platformLoginFast = function(account, cb) {
      cc.log("platformLoginFast:" + account);
      server._sendLogin(ServerRouters.RqUser.platformLoginFast, {
        account: account,
        game: cc.currentGame ? cc.currentGame : "nn"
      }, cb);
    };
    server.guestLogin = function(account, cb) {
      cc.log("guestLogin:" + account);
      server._sendLogin(ServerRouters.RqUser.guestLogin, {
        type: 0,
        account: account,
        game: cc.currentGame ? cc.currentGame : "nn"
      }, cb);
    };
    server.relogin = function(game) {
      cc.log("@relogin:" + game);
      var router = ServerRouters.RqUser.relogin;
      SocketHelper.request(router, {
        game: game
      }, function(msg) {});
    };
    server.sendRegisterCode = function(account, cb) {
      cc.log("sendRegisterCode:" + account);
      SocketHelper.request(ServerRouters.RqUser.sendRegisterCode, {
        account: account
      }, function(msg) {
        cb && cb(msg);
      });
    };
    server.commitRegister = function(account, code, password, nick, sex, cb) {
      cc.log("commitRegister:" + account);
      SocketHelper.request(ServerRouters.RqUser.commitRegister, {
        account: account,
        code: code,
        password: password,
        nick: nick,
        sex: sex
      }, function(msg) {
        cb && cb(msg);
      });
    };
    server.authLogin = function(account, password, cb) {
      cc.log("authLogin:" + account);
      server._sendLogin(ServerRouters.RqUser.authLogin, {
        game: cc.currentGame ? cc.currentGame : "nn",
        account: account,
        password: password,
        gps: null
      }, cb);
    };
    server.bindRecommender = function(id, cb) {
      id = parseInt(id);
      SocketHelper.request(ServerRouters.RqUser.bindRecommender, {
        recommender: id
      }, function() {
        cb && cb();
      }, true);
    };
    server.setHead = function(head, cb) {
      SocketHelper.request(ServerRouters.RqUser.setHead, {
        head: head
      }, function() {
        UserHandler.setHead(head);
        cb && cb();
      }, true);
    };
    server.applyMoney = function(money, type, account, banker, bankerAccount, phone, cb) {
      money = parseFloat(money);
      type = parseInt(type);
      SocketHelper.request(ServerRouters.RqUser.applyMoney, {
        money: money,
        type: type,
        account: account,
        banker: banker,
        bankerAccount: bankerAccount,
        phone: phone
      }, function() {
        cb && cb();
      }, true);
    };
    server.logout = function(cb) {
      SocketHelper.request(ServerRouters.RqUser.logout, {}, function(msg) {
        $G.gCData.gIsLogined = false;
        UserHandler.removeNetListeners();
        cb && cb();
      }, true);
    };
    server._sendLogin = function(route, param, cb) {
      SocketHelper.request(route, param, function(msg) {
        UserHandler.setData(msg);
        server._onLoginSuccess(msg);
        MsgHelper.initHelper();
        cb && cb();
      }, function(action) {
        server._onLoginFailed(action);
      }, true);
    };
    server._onLoginSuccess = function(msg) {
      $G.gCData.gIsLogined = true;
      UserHandler.setData(msg);
      UserHandler.initNetListeners();
      SocketHelper.onLoginSuccess();
      if (!UserHandler.shouldReconnect()) {
        gGameScene ? GameHelper.loadHallScene(function() {}) : GameHelper.loadChooseScene(function() {});
        return;
      }
      RoomServer.reconnectRoom();
      FuncHelper.execute();
    };
    server._onLoginFailed = function(action) {
      if (10004 == action.code) {
        gLocalData.userInfo.account = "";
        PlatformHelper.loginByPlatform("line");
        return;
      }
      if (404 == action.code || "404" == action.code) return;
      var info = action.msg;
      MsgHelper.pushToast(info);
    };
    server.charge = function(type, count) {
      SocketHelper.request(ServerRouters.RqUser.charge, {
        type: type,
        count: count
      }, function(msg) {
        cc.log(msg);
        cc.log(msg.url);
        cc.sys.openURL(msg.url);
      }, true);
    };
    server.tradeItem = function(target, itemId, count, cbSuccess) {
      SocketHelper.request(ServerRouters.RqUser.tradeItem, {
        target: target,
        itemId: itemId,
        count: count
      }, function(msg) {
        cbSuccess && cbSuccess();
      }, true);
    };
    server.setDesp = function(desp, cbSuccess) {
      SocketHelper.request(ServerRouters.RqUser.setDesp, {
        desp: desp
      }, function(msg) {
        cbSuccess && cbSuccess(msg);
      }, true);
    };
    server.setNick = function(nick, cbSuccess) {
      SocketHelper.request(ServerRouters.RqUser.setNick, {
        nick: nick
      }, function(msg) {
        cbSuccess && cbSuccess(msg);
      }, true);
    };
    server.getGiveDiamondsHistory = function(userId) {
      var page = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var cbYes = arguments[2];
      var cbDone = arguments[3];
      var url = Configs.http_GiveDiamondsHistory + "userId=" + userId + "&page=" + page;
      OldHttpServer._getHttpWithLoading(url, function(text) {
        UserHandler.setDataGiveDiamondsHistory(JSON.parse(text).msg);
        cbYes && cbYes();
      }, cbDone);
    };
    server.sendPhone = function(phone, userId, cbYes, cbDone, cbError) {
      HttpRouters.RqBind.sendPhoneCode.params.phone = phone;
      HttpRouters.RqBind.sendPhoneCode.params.userId = userId;
      HttpServer.request(HttpRouters.RqBind.sendPhoneCode, cbYes, cbDone, cbError);
    };
    server.bindPhone = function(userId, phone, code, name, cbYes, cbDone, cbError) {
      HttpRouters.RqBind.bindPhone.params.userId = userId;
      HttpRouters.RqBind.bindPhone.params.phone = phone;
      HttpRouters.RqBind.bindPhone.params.code = code;
      HttpRouters.RqBind.bindPhone.params.name = name;
      HttpServer.request(HttpRouters.RqBind.bindPhone, cbYes, cbDone, cbError);
    };
    server.bindAgent = function(userId, agentId, cbYes, cbDone, cbError) {
      HttpRouters.RqBind.bindAgent.params.userId = userId;
      HttpRouters.RqBind.bindAgent.params.agentId = agentId;
      HttpServer.request(HttpRouters.RqBind.bindAgent, cbYes, cbDone, cbError);
    };
    server.getThumbnail = function(userId, cbYes, cbDone, cbError) {
      HttpRouters.RqRecommender.getThumbnail.params.userId = userId;
      HttpServer.request(HttpRouters.RqRecommender.getThumbnail, function(action) {
        200 == action.code ? cbYes && cbYes(action.msg) : MsgHelper.pushToast(action.msg);
      });
    };
    server.getDetails = function(userId, pindex, psize, cbYes, cbDone, cbError) {
      HttpRouters.RqRecommender.getDetails.params.userId = userId;
      HttpRouters.RqRecommender.getDetails.params.pindex = pindex;
      HttpRouters.RqRecommender.getDetails.params.psize = psize;
      HttpServer.request(HttpRouters.RqRecommender.getDetails, function(action) {
        200 == action.code ? cbYes && cbYes(action.msg) : MsgHelper.pushToast(action.msg);
      });
    };
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b717fzww0hNzIqvNbb1t9wx", "Utils");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      addClickEvent: function addClickEvent(node, target, component, handler) {
        console.log(component + ":" + handler);
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        clickEvents.push(eventHandler);
      },
      addSlideEvent: function addSlideEvent(node, target, component, handler) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        var slideEvents = node.getComponent(cc.Slider).slideEvents;
        slideEvents.push(eventHandler);
      },
      addEscEvent: function addEscEvent(node) {
        cc.eventManager.addListener({
          event: cc.EventListener.KEYBOARD,
          onKeyPressed: function onKeyPressed(keyCode, event) {},
          onKeyReleased: function onKeyReleased(keyCode, event) {
            keyCode == cc.KEY.back && cc.vv.alert.show("提示", "确定要退出游戏吗？", function() {
              cc.game.end();
            }, true);
          }
        }, node);
      }
    });
    cc._RF.pop();
  }, {} ],
  VoiceMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f066RbLAxKGJZtkDFO2kq/", "VoiceMgr");
    "use strict";
    var radix = 12;
    var base = 128 - radix;
    function crypto(value) {
      value -= base;
      var h = Math.floor(value / radix) + base;
      var l = value % radix + base;
      return String.fromCharCode(h) + String.fromCharCode(l);
    }
    var encodermap = {};
    var decodermap = {};
    for (var i = 0; i < 256; ++i) {
      var code = null;
      var v = i + 1;
      code = v >= base ? crypto(v) : String.fromCharCode(v);
      encodermap[i] = code;
      decodermap[code] = i;
    }
    function encode(data) {
      var content = "";
      var len = data.length;
      var a = len >> 24 & 255;
      var b = len >> 16 & 255;
      var c = len >> 8 & 255;
      var d = 255 & len;
      content += encodermap[a];
      content += encodermap[b];
      content += encodermap[c];
      content += encodermap[d];
      for (var i = 0; i < data.length; ++i) content += encodermap[data[i]];
      return content;
    }
    function getCode(content, index) {
      var c = content.charCodeAt(index);
      c = c >= base ? content.charAt(index) + content.charAt(index + 1) : content.charAt(index);
      return c;
    }
    function decode(content) {
      var index = 0;
      var len = 0;
      for (var i = 0; i < 4; ++i) {
        var c = getCode(content, index);
        index += c.length;
        var v = decodermap[c];
        len |= v << 8 * (3 - i);
      }
      var newData = new Uint8Array(len);
      var cnt = 0;
      while (index < content.length) {
        var c = getCode(content, index);
        index += c.length;
        newData[cnt] = decodermap[c];
        cnt++;
      }
      return newData;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        onPlayCallback: null,
        _voiceMediaPath: null
      },
      init: function init() {
        if (cc.sys.isNative) {
          this._voiceMediaPath = jsb.fileUtils.getWritablePath() + "/voicemsgs/";
          this.setStorageDir(this._voiceMediaPath);
        }
      },
      prepare: function prepare(filename) {
        if (!cc.sys.isNative) return;
        cc.vv.audioMgr.pauseAll();
        this.clearCache(filename);
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "prepare", "(Ljava/lang/String;)V", filename) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:", filename);
      },
      release: function release() {
        if (!cc.sys.isNative) return;
        cc.vv.audioMgr.resumeAll();
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "release", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord");
      },
      cancel: function cancel() {
        if (!cc.sys.isNative) return;
        cc.vv.audioMgr.resumeAll();
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "cancel", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord");
      },
      writeVoice: function writeVoice(filename, voiceData) {
        if (!cc.sys.isNative) return;
        if (voiceData && voiceData.length > 0) {
          var fileData = decode(voiceData);
          var url = this._voiceMediaPath + filename;
          this.clearCache(filename);
          jsb.fileUtils.writeDataToFile(fileData, url);
        }
      },
      clearCache: function clearCache(filename) {
        if (cc.sys.isNative) {
          var url = this._voiceMediaPath + filename;
          jsb.fileUtils.isFileExist(url) && jsb.fileUtils.removeFile(url);
          jsb.fileUtils.isFileExist(url + ".wav") && jsb.fileUtils.removeFile(url + ".wav");
        }
      },
      play: function play(filename) {
        if (!cc.sys.isNative) return;
        cc.vv.audioMgr.pauseAll();
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/babykylin/VoicePlayer", "play", "(Ljava/lang/String;)V", filename) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "play:", filename);
      },
      stop: function stop() {
        if (!cc.sys.isNative) return;
        cc.vv.audioMgr.resumeAll();
        cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/babykylin/VoicePlayer", "stop", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "stopPlay");
      },
      getVoiceLevel: function getVoiceLevel(maxLevel) {
        return Math.floor(Math.random() * maxLevel + 1);
      },
      getVoiceData: function getVoiceData(filename) {
        if (cc.sys.isNative) {
          var url = this._voiceMediaPath + filename;
          console.log("getVoiceData:" + url);
          var fileData = jsb.fileUtils.getDataFromFile(url);
          if (fileData) {
            var content = encode(fileData);
            return content;
          }
        }
        return "";
      },
      download: function download() {},
      setStorageDir: function setStorageDir(dir) {
        if (!cc.sys.isNative) return;
        if (cc.sys.os == cc.sys.OS_ANDROID) jsb.reflection.callStaticMethod("com/babykylin/VoiceRecorder", "setStorageDir", "(Ljava/lang/String;)V", dir); else if (cc.sys.os == cc.sys.OS_IOS) {
          jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:", dir);
          jsb.fileUtils.isDirectoryExist(dir) || jsb.fileUtils.createDirectory(dir);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Voice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6db9z0CxdEzpRVgU569dDu", "Voice");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _lastTouchTime: null,
        _voice: null,
        _volume: null,
        _voice_failed: null,
        _lastCheckTime: -1,
        _timeBar: null,
        MAX_TIME: 15e3
      },
      onLoad: function onLoad() {
        this._voice = cc.find("Canvas/voice");
        this._voice.active = false;
        this._voice_failed = cc.find("Canvas/voice/voice_failed");
        this._voice_failed.active = false;
        this._timeBar = cc.find("Canvas/voice/time");
        this._timeBar.scaleX = 0;
        this._volume = cc.find("Canvas/voice/volume");
        for (var i = 1; i < this._volume.children.length; ++i) this._volume.children[i].active = false;
        var btnVoice = cc.find("Canvas/voice/voice_failed/btn_ok");
        btnVoice && cc.vv.utils.addClickEvent(btnVoice, this.node, "Voice", "onBtnOKClicked");
        var self = this;
        var btnVoice = cc.find("Canvas/btn_voice");
        if (btnVoice) {
          btnVoice.on(cc.Node.EventType.TOUCH_START, function() {
            console.log("cc.Node.EventType.TOUCH_START");
            cc.vv.voiceMgr.prepare("record.amr");
            self._lastTouchTime = Date.now();
            self._voice.active = true;
            self._voice_failed.active = false;
          });
          btnVoice.on(cc.Node.EventType.TOUCH_MOVE, function() {
            console.log("cc.Node.EventType.TOUCH_MOVE");
          });
          btnVoice.on(cc.Node.EventType.TOUCH_END, function() {
            console.log("cc.Node.EventType.TOUCH_END");
            if (Date.now() - self._lastTouchTime < 1e3) {
              self._voice_failed.active = true;
              cc.vv.voiceMgr.cancel();
            } else self.onVoiceOK();
            self._lastTouchTime = null;
          });
          btnVoice.on(cc.Node.EventType.TOUCH_CANCEL, function() {
            console.log("cc.Node.EventType.TOUCH_CANCEL");
            cc.vv.voiceMgr.cancel();
            self._lastTouchTime = null;
            self._voice.active = false;
          });
        }
      },
      onVoiceOK: function onVoiceOK() {
        if (null != this._lastTouchTime) {
          cc.vv.voiceMgr.release();
          var time = Date.now() - this._lastTouchTime;
          var msg = cc.vv.voiceMgr.getVoiceData("record.amr");
          cc.vv.net.send("voice_msg", {
            msg: msg,
            time: time
          });
        }
        this._voice.active = false;
      },
      onBtnOKClicked: function onBtnOKClicked() {
        this._voice.active = false;
      },
      update: function update(dt) {
        if (true == this._voice.active && false == this._voice_failed.active && Date.now() - this._lastCheckTime > 300) {
          for (var i = 0; i < this._volume.children.length; ++i) this._volume.children[i].active = false;
          var v = cc.vv.voiceMgr.getVoiceLevel(7);
          v >= 1 && v <= 7 && (this._volume.children[v - 1].active = true);
          this._lastCheckTime = Date.now();
        }
        if (this._lastTouchTime) {
          var time = Date.now() - this._lastTouchTime;
          if (time >= this.MAX_TIME) {
            this.onVoiceOK();
            this._lastTouchTime = null;
          } else {
            var percent = time / this.MAX_TIME;
            this._timeBar.scaleX = 1 - percent;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  WaitingConnection: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10e32jDstpLhIGHWrQEq2vN", "WaitingConnection");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        target: cc.Node,
        _isShow: false,
        lblContent: cc.Label
      },
      onLoad: function onLoad() {
        if (null == cc.vv) return null;
        cc.vv.wc = this;
        this.node.active = this._isShow;
      },
      update: function update(dt) {
        this.target.rotation = this.target.rotation - 45 * dt;
      },
      show: function show(content) {
        this._isShow = true;
        this.node && (this.node.active = this._isShow);
        if (this.lblContent) {
          null == content && (content = "");
          this.lblContent.string = content;
        }
      },
      hide: function hide() {
        this._isShow = false;
        this.node && (this.node.active = this._isShow);
      }
    });
    cc._RF.pop();
  }, {} ],
  game_result: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d61acmAOn9B+K14YAO9hM0P", "game_result");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndList: cc.Node,
        ndItem: cc.Node
      },
      onLoad: function onLoad() {
        this.init();
      },
      init: function init() {
        this.comNodePool = this.addComponent("ComNodePool");
        this._removeChild();
        this._initPlayerInfo();
      },
      _removeChild: function _removeChild() {
        if (this.ndList.children) {
          var ndList_children = this.ndList.children;
          while (ndList_children.length > 0) this.comNodePool.putNode(ndList_children[0]);
        }
      },
      _initPlayerInfo: function _initPlayerInfo() {
        var _this = this;
        var result = GameMsgHandler.getRoomResult();
        _.each(result, function(player, index) {
          _this._addItem(player);
        });
      },
      _addItem: function _addItem() {
        var ndItem = this.comNodePool.getNode(this.ndItem);
        this.ndList.addChild(ndItem);
        var msg = GameMsgHandler.getRoomResult();
        cc.log("【大结算里的 消息。。。。】", msg);
      },
      onButtonClick: function onButtonClick() {
        RoomServer.leaveRoom(function() {
          GameLogic.leaveRoom();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  pbActionCompareCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6329+6ikZMiIjh+ygQBNL3", "pbActionCompareCard");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        ndPoker: cc.Node
      },
      onLoad: function onLoad() {
        this.ndPoker.active = false;
        this.comNodePool = this.addComponent("ComNodePool");
        this._time = .2;
      },
      init: function init(com) {
        this._target = com;
        this.winCid = 0;
        this.loseCid = 0;
        this._time || (this._time = .2);
        this.comNodePool || (this.comNodePool = this.addComponent("ComNodePool"));
        return this;
      },
      runCompareCard: function runCompareCard(cid1, cid2, winCid, cb) {
        var _this = this;
        var cids = this._rowCid(cid1, cid2);
        _.each(cids, function(cid, index) {
          var isWin = winCid == cid;
          var startPos = _this._getStartPos(cid);
          var endPos = _this._getEndPos(index);
          $G.gCData.gComPlayers[cid].actionHideBigCard();
          _this._runAction(startPos, endPos, cid, isWin, index, function() {
            0 == index && cb();
          });
        });
      },
      _rowCid: function _rowCid(cid1, cid2) {
        var arr = [ cid1, cid2 ];
        0 == cid1 || 0 == cid2 ? cid1 > 2 || 0 == cid1 || (arr = [ cid2, cid1 ]) : cid2 > cid1 && (arr = [ cid2, cid1 ]);
        return arr;
      },
      _getStartPos: function _getStartPos(cid) {
        var sid = GameMsgHandler.getSid(cid);
        var pos = this._target.node.getComponent("ZJH_Ctl").getBigCardParentPosBySid(sid);
        return pos;
      },
      _getEndPos: function _getEndPos(index) {
        var pos = this._target.node.getComponent("ZJH_Ctl").getComparePosByIndex(index);
        return pos;
      },
      _runAction: function _runAction(startPos, endPos, cid) {
        var isWin = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var _this2 = this;
        var index = arguments[4];
        var cb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        var scaleByTime = 1;
        var scaleToTime = .5;
        var scaleToTime2 = .2;
        var delayTime = 3;
        var poker = this._createPoker(startPos, 0 == cid);
        var startScale = poker.children[0].scale;
        var scaleBy = cc.scaleBy(scaleByTime, 1.3);
        var callFunc1 = cc.callFunc(function() {
          poker.children[1].active = false;
        });
        var _scaleTo = cc.scaleTo(scaleToTime, 1.6);
        var _moveTo = cc.moveTo(scaleToTime, endPos);
        var spawn = cc.spawn(_moveTo, _scaleTo);
        var hideAction = cc.hide();
        var callFunc2 = cc.callFunc(function() {
          if (isWin) _this2._target.showCompareActionByindex(index, false, true); else {
            _this2._target.showCompareActionBg(false, true);
            _this2._target.showCompareActionByindex(index, true, true);
          }
        });
        var showAction = cc.show();
        var delay = cc.delayTime(delayTime);
        var callFunc4 = cc.callFunc(function() {
          _this2._target.showCompareActionBg(true, true);
          _this2._target.showCompareActionByindex(index, false, false);
        });
        var _scaleTo2 = cc.scaleTo(scaleToTime2, startScale);
        var _moveTo2 = cc.moveTo(scaleToTime2, startPos);
        var spawn2 = cc.spawn(_scaleTo2, _moveTo2);
        var callFunc3 = cc.callFunc(function() {
          $G.gCData.gComPlayers[cid].actionShowBigCard();
          isWin || $G.gCData.gComPlayers[cid].showIsLookCard(true, 1);
          poker.children[0].scale = 1;
          poker.children[1].active = false;
          _this2._putNode(poker);
          cb && cb();
        });
        var seq2 = cc.sequence(scaleBy, callFunc1, spawn, hideAction, callFunc2);
        var seq = cc.sequence(seq2, delay, showAction, callFunc4, spawn2, callFunc3);
        poker.stopAllActions();
        poker.runAction(seq);
      },
      _createPoker: function _createPoker(startPos, cidIsZero) {
        var _this3 = this;
        var type = 3;
        var item = this.comNodePool.getNode(this.ndPoker);
        item.setPosition(startPos);
        cidIsZero = false;
        item.scale = cidIsZero ? 1.5 : 1;
        item.active = true;
        item.children[1].active = true;
        this.node.addChild(item);
        _.times(type, function(index) {
          _this3.addCard(item.children[0].children[index], {
            suit: 1,
            point: 1
          }, false, false);
        });
        return item;
      },
      addCard: function addCard(nd, card) {
        var isFront = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var showAction = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        var container = nd;
        var com = cc.vv.NPHelper.getNode("PbCard").getComponent("PbCard");
        com.init(card.suit, card.point, isFront);
        container.addChild(com.node);
        showAction && com.showCardFrontWithFlipAction();
        return com;
      },
      _putNode: function _putNode(node) {
        node.opacity = 255;
        this.comNodePool.putNode(node);
      },
      showCard: function showCard() {
        var _this4 = this;
        var cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        $G.gCData.gComPlayers[0].actionHideBigCard();
        var endScale = 1.6;
        var time = .2;
        var delayTime = 2;
        var endPos = cc.p(0, 0);
        var poker = this._creatCard();
        var moveAction = cc.moveTo(time, endPos).easing(cc.easeCubicActionIn());
        var scareAction = cc.scaleTo(time, endScale);
        var delay = cc.delayTime(delayTime);
        var callFunc = cc.callFunc(function() {
          poker.getChildByName("frame").active = true;
          poker.children[0].scale = 1;
          _this4._putNode(poker);
          cb && cb();
        });
        var spawn = cc.spawn(moveAction, scareAction);
        var action = cc.sequence(spawn, delay, callFunc);
        poker.runAction(action);
      },
      _creatCard: function _creatCard() {
        var _this5 = this;
        var cardData = GameMsgHandler.getCardsByCid(0);
        var startPos = this._getStartPos(0);
        var cidIsZero = 1;
        var type = 3;
        var item = this.comNodePool.getNode(this.ndPoker);
        item.setPosition(startPos);
        item.scale = cidIsZero;
        item.active = true;
        item.getChildByName("frame").active = false;
        this.node.addChild(item);
        _.each(cardData, function(card, index) {
          _this5.addCard(item.children[0].children[index], card, true, false);
        });
        return item;
      }
    });
    cc._RF.pop();
  }, {} ],
  pomelo: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "d6d66m8VxFMV6l1uWDn3wa3", "pomelo");
      "use strict";
      module.exports = Emitter;
      window.EventEmitter = Emitter;
      function Emitter(obj) {
        if (obj) return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter.prototype) obj[key] = Emitter.prototype[key];
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        if (this.hasListeners(event)) return;
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        var self = this;
        this._callbacks = this._callbacks || {};
        function on() {
          self.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks[event];
        if (!callbacks) return this;
        if (1 == arguments.length) {
          delete this._callbacks[event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) callbacks[i].apply(this, args);
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
      (function(exports, global) {
        var Protobuf = exports;
        Protobuf.init = function(opts) {
          Protobuf.encoder.init(opts.encoderProtos);
          Protobuf.decoder.init(opts.decoderProtos);
        };
        Protobuf.encode = function(key, msg) {
          return Protobuf.encoder.encode(key, msg);
        };
        Protobuf.decode = function(key, msg) {
          return Protobuf.decoder.decode(key, msg);
        };
        module.exports = Protobuf;
        "undefined" != typeof window && (window.protobuf = Protobuf);
      })(module.exports, void 0);
      (function(exports, global) {
        var constants = exports.constants = {};
        constants.TYPES = {
          uInt32: 0,
          sInt32: 0,
          int32: 0,
          double: 1,
          string: 2,
          message: 2,
          float: 5
        };
      })("undefined" !== typeof protobuf ? protobuf : module.exports, void 0);
      (function(exports, global) {
        var Util = exports.util = {};
        Util.isSimpleType = function(type) {
          return "uInt32" === type || "sInt32" === type || "int32" === type || "uInt64" === type || "sInt64" === type || "float" === type || "double" === type;
        };
      })("undefined" !== typeof protobuf ? protobuf : module.exports, void 0);
      (function(exports, global) {
        var Codec = exports.codec = {};
        var buffer = new ArrayBuffer(8);
        var float32Array = new Float32Array(buffer);
        var float64Array = new Float64Array(buffer);
        var uInt8Array = new Uint8Array(buffer);
        Codec.encodeUInt32 = function(n) {
          var n = parseInt(n);
          if (isNaN(n) || n < 0) return null;
          var result = [];
          do {
            var tmp = n % 128;
            var next = Math.floor(n / 128);
            0 !== next && (tmp += 128);
            result.push(tmp);
            n = next;
          } while (0 !== n);
          return result;
        };
        Codec.encodeSInt32 = function(n) {
          var n = parseInt(n);
          if (isNaN(n)) return null;
          n = n < 0 ? 2 * Math.abs(n) - 1 : 2 * n;
          return Codec.encodeUInt32(n);
        };
        Codec.decodeUInt32 = function(bytes) {
          var n = 0;
          for (var i = 0; i < bytes.length; i++) {
            var m = parseInt(bytes[i]);
            n += (127 & m) * Math.pow(2, 7 * i);
            if (m < 128) return n;
          }
          return n;
        };
        Codec.decodeSInt32 = function(bytes) {
          var n = this.decodeUInt32(bytes);
          var flag = n % 2 === 1 ? -1 : 1;
          n = (n % 2 + n) / 2 * flag;
          return n;
        };
        Codec.encodeFloat = function(float) {
          float32Array[0] = float;
          return uInt8Array;
        };
        Codec.decodeFloat = function(bytes, offset) {
          if (!bytes || bytes.length < offset + 4) return null;
          for (var i = 0; i < 4; i++) uInt8Array[i] = bytes[offset + i];
          return float32Array[0];
        };
        Codec.encodeDouble = function(double) {
          float64Array[0] = double;
          return uInt8Array.subarray(0, 8);
        };
        Codec.decodeDouble = function(bytes, offset) {
          if (!bytes || bytes.length < 8 + offset) return null;
          for (var i = 0; i < 8; i++) uInt8Array[i] = bytes[offset + i];
          return float64Array[0];
        };
        Codec.encodeStr = function(bytes, offset, str) {
          for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            var codes = encode2UTF8(code);
            for (var j = 0; j < codes.length; j++) {
              bytes[offset] = codes[j];
              offset++;
            }
          }
          return offset;
        };
        Codec.decodeStr = function(bytes, offset, length) {
          var array = [];
          var end = offset + length;
          while (offset < end) {
            var code = 0;
            if (bytes[offset] < 128) {
              code = bytes[offset];
              offset += 1;
            } else if (bytes[offset] < 224) {
              code = ((63 & bytes[offset]) << 6) + (63 & bytes[offset + 1]);
              offset += 2;
            } else {
              code = ((15 & bytes[offset]) << 12) + ((63 & bytes[offset + 1]) << 6) + (63 & bytes[offset + 2]);
              offset += 3;
            }
            array.push(code);
          }
          var str = "";
          for (var i = 0; i < array.length; ) {
            str += String.fromCharCode.apply(null, array.slice(i, i + 1e4));
            i += 1e4;
          }
          return str;
        };
        Codec.byteLength = function(str) {
          if ("string" !== typeof str) return -1;
          var length = 0;
          for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            length += codeLength(code);
          }
          return length;
        };
        function encode2UTF8(charCode) {
          return charCode <= 127 ? [ charCode ] : charCode <= 2047 ? [ 192 | charCode >> 6, 128 | 63 & charCode ] : [ 224 | charCode >> 12, 128 | (4032 & charCode) >> 6, 128 | 63 & charCode ];
        }
        function codeLength(code) {
          return code <= 127 ? 1 : code <= 2047 ? 2 : 3;
        }
      })("undefined" !== typeof protobuf ? protobuf : module.exports, void 0);
      (function(exports, global) {
        var protobuf = exports;
        var MsgEncoder = exports.encoder = {};
        var codec = protobuf.codec;
        var constant = protobuf.constants;
        var util = protobuf.util;
        MsgEncoder.init = function(protos) {
          this.protos = protos || {};
        };
        MsgEncoder.encode = function(route, msg) {
          var protos = this.protos[route];
          if (!checkMsg(msg, protos)) return null;
          var length = codec.byteLength(JSON.stringify(msg));
          var buffer = new ArrayBuffer(length);
          var uInt8Array = new Uint8Array(buffer);
          var offset = 0;
          if (!!protos) {
            offset = encodeMsg(uInt8Array, offset, protos, msg);
            if (offset > 0) return uInt8Array.subarray(0, offset);
          }
          return null;
        };
        function checkMsg(msg, protos) {
          if (!protos) return false;
          for (var name in protos) {
            var proto = protos[name];
            switch (proto.option) {
             case "required":
              if ("undefined" === typeof msg[name]) return false;

             case "optional":
              "undefined" !== typeof msg[name] && (!protos.__messages[proto.type] || checkMsg(msg[name], protos.__messages[proto.type]));
              break;

             case "repeated":
              if (!!msg[name] && !!protos.__messages[proto.type]) for (var i = 0; i < msg[name].length; i++) if (!checkMsg(msg[name][i], protos.__messages[proto.type])) return false;
            }
          }
          return true;
        }
        function encodeMsg(buffer, offset, protos, msg) {
          for (var name in msg) if (!!protos[name]) {
            var proto = protos[name];
            switch (proto.option) {
             case "required":
             case "optional":
              offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
              offset = encodeProp(msg[name], proto.type, offset, buffer, protos);
              break;

             case "repeated":
              msg[name].length > 0 && (offset = encodeArray(msg[name], proto, offset, buffer, protos));
            }
          }
          return offset;
        }
        function encodeProp(value, type, offset, buffer, protos) {
          switch (type) {
           case "uInt32":
            offset = writeBytes(buffer, offset, codec.encodeUInt32(value));
            break;

           case "int32":
           case "sInt32":
            offset = writeBytes(buffer, offset, codec.encodeSInt32(value));
            break;

           case "float":
            writeBytes(buffer, offset, codec.encodeFloat(value));
            offset += 4;
            break;

           case "double":
            writeBytes(buffer, offset, codec.encodeDouble(value));
            offset += 8;
            break;

           case "string":
            var length = codec.byteLength(value);
            offset = writeBytes(buffer, offset, codec.encodeUInt32(length));
            codec.encodeStr(buffer, offset, value);
            offset += length;
            break;

           default:
            if (!!protos.__messages[type]) {
              var tmpBuffer = new ArrayBuffer(codec.byteLength(JSON.stringify(value)));
              var length = 0;
              length = encodeMsg(tmpBuffer, length, protos.__messages[type], value);
              offset = writeBytes(buffer, offset, codec.encodeUInt32(length));
              for (var i = 0; i < length; i++) {
                buffer[offset] = tmpBuffer[i];
                offset++;
              }
            }
          }
          return offset;
        }
        function encodeArray(array, proto, offset, buffer, protos) {
          var i = 0;
          if (util.isSimpleType(proto.type)) {
            offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
            offset = writeBytes(buffer, offset, codec.encodeUInt32(array.length));
            for (i = 0; i < array.length; i++) offset = encodeProp(array[i], proto.type, offset, buffer);
          } else for (i = 0; i < array.length; i++) {
            offset = writeBytes(buffer, offset, encodeTag(proto.type, proto.tag));
            offset = encodeProp(array[i], proto.type, offset, buffer, protos);
          }
          return offset;
        }
        function writeBytes(buffer, offset, bytes) {
          for (var i = 0; i < bytes.length; i++, offset++) buffer[offset] = bytes[i];
          return offset;
        }
        function encodeTag(type, tag) {
          var value = constant.TYPES[type] || 2;
          return codec.encodeUInt32(tag << 3 | value);
        }
      })("undefined" !== typeof protobuf ? protobuf : module.exports, void 0);
      (function(exports, global) {
        var protobuf = exports;
        var MsgDecoder = exports.decoder = {};
        var codec = protobuf.codec;
        var util = protobuf.util;
        var buffer;
        var offset = 0;
        MsgDecoder.init = function(protos) {
          this.protos = protos || {};
        };
        MsgDecoder.setProtos = function(protos) {
          !protos || (this.protos = protos);
        };
        MsgDecoder.decode = function(route, buf) {
          var protos = this.protos[route];
          buffer = buf;
          offset = 0;
          if (!!protos) return decodeMsg({}, protos, buffer.length);
          return null;
        };
        function decodeMsg(msg, protos, length) {
          while (offset < length) {
            var head = getHead();
            var type = head.type;
            var tag = head.tag;
            var name = protos.__tags[tag];
            switch (protos[name].option) {
             case "optional":
             case "required":
              msg[name] = decodeProp(protos[name].type, protos);
              break;

             case "repeated":
              msg[name] || (msg[name] = []);
              decodeArray(msg[name], protos[name].type, protos);
            }
          }
          return msg;
        }
        function isFinish(msg, protos) {
          return !protos.__tags[peekHead().tag];
        }
        function getHead() {
          var tag = codec.decodeUInt32(getBytes());
          return {
            type: 7 & tag,
            tag: tag >> 3
          };
        }
        function peekHead() {
          var tag = codec.decodeUInt32(peekBytes());
          return {
            type: 7 & tag,
            tag: tag >> 3
          };
        }
        function decodeProp(type, protos) {
          switch (type) {
           case "uInt32":
            return codec.decodeUInt32(getBytes());

           case "int32":
           case "sInt32":
            return codec.decodeSInt32(getBytes());

           case "float":
            var float = codec.decodeFloat(buffer, offset);
            offset += 4;
            return float;

           case "double":
            var double = codec.decodeDouble(buffer, offset);
            offset += 8;
            return double;

           case "string":
            var length = codec.decodeUInt32(getBytes());
            var str = codec.decodeStr(buffer, offset, length);
            offset += length;
            return str;

           default:
            if (!!protos && !!protos.__messages[type]) {
              var length = codec.decodeUInt32(getBytes());
              var msg = {};
              decodeMsg(msg, protos.__messages[type], offset + length);
              return msg;
            }
          }
        }
        function decodeArray(array, type, protos) {
          if (util.isSimpleType(type)) {
            var length = codec.decodeUInt32(getBytes());
            for (var i = 0; i < length; i++) array.push(decodeProp(type));
          } else array.push(decodeProp(type, protos));
        }
        function getBytes(flag) {
          var bytes = [];
          var pos = offset;
          flag = flag || false;
          var b;
          do {
            b = buffer[pos];
            bytes.push(b);
            pos++;
          } while (b >= 128);
          flag || (offset = pos);
          return bytes;
        }
        function peekBytes() {
          return getBytes(true);
        }
      })("undefined" !== typeof protobuf ? protobuf : module.exports, void 0);
      (function(exports, ByteArray, global) {
        var Protocol = exports;
        var PKG_HEAD_BYTES = 4;
        var MSG_FLAG_BYTES = 1;
        var MSG_ROUTE_CODE_BYTES = 2;
        var MSG_ID_MAX_BYTES = 5;
        var MSG_ROUTE_LEN_BYTES = 1;
        var MSG_ROUTE_CODE_MAX = 65535;
        var MSG_COMPRESS_ROUTE_MASK = 1;
        var MSG_TYPE_MASK = 7;
        var Package = Protocol.Package = {};
        var Message = Protocol.Message = {};
        Package.TYPE_HANDSHAKE = 1;
        Package.TYPE_HANDSHAKE_ACK = 2;
        Package.TYPE_HEARTBEAT = 3;
        Package.TYPE_DATA = 4;
        Package.TYPE_KICK = 5;
        Message.TYPE_REQUEST = 0;
        Message.TYPE_NOTIFY = 1;
        Message.TYPE_RESPONSE = 2;
        Message.TYPE_PUSH = 3;
        Protocol.strencode = function(str) {
          var byteArray = new ByteArray(3 * str.length);
          var offset = 0;
          for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            var codes = null;
            codes = charCode <= 127 ? [ charCode ] : charCode <= 2047 ? [ 192 | charCode >> 6, 128 | 63 & charCode ] : [ 224 | charCode >> 12, 128 | (4032 & charCode) >> 6, 128 | 63 & charCode ];
            for (var j = 0; j < codes.length; j++) {
              byteArray[offset] = codes[j];
              ++offset;
            }
          }
          var _buffer = new ByteArray(offset);
          copyArray(_buffer, 0, byteArray, 0, offset);
          return _buffer;
        };
        Protocol.strdecode = function(buffer) {
          var bytes = new ByteArray(buffer);
          var array = [];
          var offset = 0;
          var charCode = 0;
          var end = bytes.length;
          while (offset < end) {
            if (bytes[offset] < 128) {
              charCode = bytes[offset];
              offset += 1;
            } else if (bytes[offset] < 224) {
              charCode = ((63 & bytes[offset]) << 6) + (63 & bytes[offset + 1]);
              offset += 2;
            } else {
              charCode = ((15 & bytes[offset]) << 12) + ((63 & bytes[offset + 1]) << 6) + (63 & bytes[offset + 2]);
              offset += 3;
            }
            array.push(charCode);
          }
          return String.fromCharCode.apply(null, array);
        };
        Package.encode = function(type, body) {
          var length = body ? body.length : 0;
          var buffer = new ByteArray(PKG_HEAD_BYTES + length);
          var index = 0;
          buffer[index++] = 255 & type;
          buffer[index++] = length >> 16 & 255;
          buffer[index++] = length >> 8 & 255;
          buffer[index++] = 255 & length;
          body && copyArray(buffer, index, body, 0, length);
          return buffer;
        };
        Package.decode = function(buffer) {
          var offset = 0;
          var bytes = new ByteArray(buffer);
          var length = 0;
          var rs = [];
          while (offset < bytes.length) {
            var type = bytes[offset++];
            length = (bytes[offset++] << 16 | bytes[offset++] << 8 | bytes[offset++]) >>> 0;
            var body = length ? new ByteArray(length) : null;
            copyArray(body, 0, bytes, offset, length);
            offset += length;
            rs.push({
              type: type,
              body: body
            });
          }
          return 1 === rs.length ? rs[0] : rs;
        };
        Message.encode = function(id, type, compressRoute, route, msg) {
          var idBytes = msgHasId(type) ? caculateMsgIdBytes(id) : 0;
          var msgLen = MSG_FLAG_BYTES + idBytes;
          if (msgHasRoute(type)) if (compressRoute) {
            if ("number" !== typeof route) throw new Error("error flag for number route!");
            msgLen += MSG_ROUTE_CODE_BYTES;
          } else {
            msgLen += MSG_ROUTE_LEN_BYTES;
            if (route) {
              route = Protocol.strencode(route);
              if (route.length > 255) throw new Error("route maxlength is overflow");
              msgLen += route.length;
            }
          }
          msg && (msgLen += msg.length);
          var buffer = new ByteArray(msgLen);
          var offset = 0;
          offset = encodeMsgFlag(type, compressRoute, buffer, offset);
          msgHasId(type) && (offset = encodeMsgId(id, buffer, offset));
          msgHasRoute(type) && (offset = encodeMsgRoute(compressRoute, route, buffer, offset));
          msg && (offset = encodeMsgBody(msg, buffer, offset));
          return buffer;
        };
        Message.decode = function(buffer) {
          var bytes = new ByteArray(buffer);
          var bytesLen = bytes.length || bytes.byteLength;
          var offset = 0;
          var id = 0;
          var route = null;
          var flag = bytes[offset++];
          var compressRoute = flag & MSG_COMPRESS_ROUTE_MASK;
          var type = flag >> 1 & MSG_TYPE_MASK;
          if (msgHasId(type)) {
            var m = parseInt(bytes[offset]);
            var i = 0;
            do {
              var m = parseInt(bytes[offset]);
              id += (127 & m) * Math.pow(2, 7 * i);
              offset++;
              i++;
            } while (m >= 128);
          }
          if (msgHasRoute(type)) if (compressRoute) route = bytes[offset++] << 8 | bytes[offset++]; else {
            var routeLen = bytes[offset++];
            if (routeLen) {
              route = new ByteArray(routeLen);
              copyArray(route, 0, bytes, offset, routeLen);
              route = Protocol.strdecode(route);
            } else route = "";
            offset += routeLen;
          }
          var bodyLen = bytesLen - offset;
          var body = new ByteArray(bodyLen);
          copyArray(body, 0, bytes, offset, bodyLen);
          return {
            id: id,
            type: type,
            compressRoute: compressRoute,
            route: route,
            body: body
          };
        };
        var copyArray = function copyArray(dest, doffset, src, soffset, length) {
          if ("function" === typeof src.copy) src.copy(dest, doffset, soffset, soffset + length); else for (var index = 0; index < length; index++) dest[doffset++] = src[soffset++];
        };
        var msgHasId = function msgHasId(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_RESPONSE;
        };
        var msgHasRoute = function msgHasRoute(type) {
          return type === Message.TYPE_REQUEST || type === Message.TYPE_NOTIFY || type === Message.TYPE_PUSH;
        };
        var caculateMsgIdBytes = function caculateMsgIdBytes(id) {
          var len = 0;
          do {
            len += 1;
            id >>= 7;
          } while (id > 0);
          return len;
        };
        var encodeMsgFlag = function encodeMsgFlag(type, compressRoute, buffer, offset) {
          if (type !== Message.TYPE_REQUEST && type !== Message.TYPE_NOTIFY && type !== Message.TYPE_RESPONSE && type !== Message.TYPE_PUSH) throw new Error("unkonw message type: " + type);
          buffer[offset] = type << 1 | (compressRoute ? 1 : 0);
          return offset + MSG_FLAG_BYTES;
        };
        var encodeMsgId = function encodeMsgId(id, buffer, offset) {
          do {
            var tmp = id % 128;
            var next = Math.floor(id / 128);
            0 !== next && (tmp += 128);
            buffer[offset++] = tmp;
            id = next;
          } while (0 !== id);
          return offset;
        };
        var encodeMsgRoute = function encodeMsgRoute(compressRoute, route, buffer, offset) {
          if (compressRoute) {
            if (route > MSG_ROUTE_CODE_MAX) throw new Error("route number is overflow");
            buffer[offset++] = route >> 8 & 255;
            buffer[offset++] = 255 & route;
          } else if (route) {
            buffer[offset++] = 255 & route.length;
            copyArray(buffer, offset, route, 0, route.length);
            offset += route.length;
          } else buffer[offset++] = 0;
          return offset;
        };
        var encodeMsgBody = function encodeMsgBody(msg, buffer, offset) {
          copyArray(buffer, offset, msg, 0, msg.length);
          return offset + msg.length;
        };
        module.exports = Protocol;
        "undefined" != typeof window && (window.Protocol = Protocol);
      })(module.exports, "undefined" == typeof window ? Buffer : Uint8Array, void 0);
      (function() {
        var JS_WS_CLIENT_TYPE = "js-socketio";
        var JS_WS_CLIENT_VERSION = "0.0.1";
        var Protocol = window.Protocol;
        var Package = Protocol.Package;
        var Message = Protocol.Message;
        var EventEmitter = window.EventEmitter;
        "undefined" != typeof window && "undefined" != typeof sys && sys.localStorage && (window.localStorage = sys.localStorage);
        var RES_OK = 200;
        var RES_FAIL = 500;
        var RES_OLD_CLIENT = 501;
        "function" !== typeof Object.create && (Object.create = function(o) {
          function F() {}
          F.prototype = o;
          return new F();
        });
        var root = window;
        var pomelo = Object.create(EventEmitter.prototype);
        root.pomelo = pomelo;
        var socket = null;
        var reqId = 0;
        var callbacks = {};
        var handlers = {};
        var routeMap = {};
        var heartbeatInterval = 0;
        var heartbeatTimeout = 0;
        var nextHeartbeatTimeout = 0;
        var gapThreshold = 100;
        var heartbeatId = null;
        var heartbeatTimeoutId = null;
        var handshakeCallback = null;
        var decode = null;
        var encode = null;
        var useCrypto;
        var handshakeBuffer = {
          sys: {
            type: JS_WS_CLIENT_TYPE,
            version: JS_WS_CLIENT_VERSION
          },
          user: {}
        };
        var initCallback = null;
        pomelo.init = function(params, cb) {
          initCallback = cb;
          var host = params.host;
          var port = params.port;
          var url = "ws://" + host;
          port && (url += ":" + port);
          handshakeBuffer.user = params.user;
          handshakeCallback = params.handshakeCallback;
          initWebSocket(url, cb);
        };
        var initWebSocket = function initWebSocket(url, cb) {
          var onopen = function onopen(event) {
            var obj = Package.encode(Package.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(handshakeBuffer)));
            send(obj);
          };
          var onmessage = function onmessage(event) {
            processPackage(Package.decode(event.data), cb);
            heartbeatTimeout && (nextHeartbeatTimeout = Date.now() + heartbeatTimeout);
          };
          var onerror = function onerror(event) {
            pomelo.emit("io-error", event);
            cc.error("socket error: ", event);
          };
          var onclose = function onclose(event) {
            pomelo.emit("close", event);
            pomelo.emit("disconnect", event);
            cc.error("socket close: ", event);
          };
          socket = new WebSocket(url);
          socket.binaryType = "arraybuffer";
          socket.onopen = onopen;
          socket.onmessage = onmessage;
          socket.onerror = onerror;
          socket.onclose = onclose;
        };
        pomelo.disconnect = function() {
          if (socket) {
            socket.disconnect && socket.disconnect();
            socket.close && socket.close();
            cc.log("disconnect");
            socket = null;
          }
          if (heartbeatId) {
            clearTimeout(heartbeatId);
            heartbeatId = null;
          }
          if (heartbeatTimeoutId) {
            clearTimeout(heartbeatTimeoutId);
            heartbeatTimeoutId = null;
          }
        };
        pomelo.request = function(route, msg, cb) {
          if (2 === arguments.length && "function" === typeof msg) {
            cb = msg;
            msg = {};
          } else msg = msg || {};
          route = route || msg.route;
          if (!route) return;
          reqId++;
          sendMessage(reqId, route, msg);
          callbacks[reqId] = cb;
          routeMap[reqId] = route;
        };
        pomelo.notify = function(route, msg) {
          msg = msg || {};
          sendMessage(0, route, msg);
        };
        var sendMessage = function sendMessage(reqId, route, msg) {
          var type = reqId ? Message.TYPE_REQUEST : Message.TYPE_NOTIFY;
          var protos = !pomelo.data.protos ? {} : pomelo.data.protos.client;
          msg = protos[route] ? protobuf.encode(route, msg) : Protocol.strencode(JSON.stringify(msg));
          var compressRoute = 0;
          if (pomelo.dict && pomelo.dict[route]) {
            route = pomelo.dict[route];
            compressRoute = 1;
          }
          msg = Message.encode(reqId, type, compressRoute, route, msg);
          var packet = Package.encode(Package.TYPE_DATA, msg);
          send(packet);
        };
        var send = function send(packet) {
          socket.send(packet.buffer);
        };
        var handler = {};
        var heartbeat = function heartbeat(data) {
          if (!heartbeatInterval) return;
          var obj = Package.encode(Package.TYPE_HEARTBEAT);
          if (heartbeatTimeoutId) {
            clearTimeout(heartbeatTimeoutId);
            heartbeatTimeoutId = null;
          }
          if (heartbeatId) return;
          heartbeatId = setTimeout(function() {
            heartbeatId = null;
            send(obj);
            nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
            heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, heartbeatTimeout);
          }, heartbeatInterval);
        };
        var heartbeatTimeoutCb = function heartbeatTimeoutCb() {
          var gap = nextHeartbeatTimeout - Date.now();
          if (gap > gapThreshold) heartbeatTimeoutId = setTimeout(heartbeatTimeoutCb, gap); else {
            cc.error("server heartbeat timeout");
            pomelo.emit("heartbeat timeout");
            pomelo.disconnect();
          }
        };
        var handshake = function handshake(data) {
          data = JSON.parse(Protocol.strdecode(data));
          if (data.code === RES_OLD_CLIENT) {
            pomelo.emit("error", "client version not fullfill");
            return;
          }
          if (data.code !== RES_OK) {
            pomelo.emit("error", "handshake fail");
            return;
          }
          handshakeInit(data);
          var obj = Package.encode(Package.TYPE_HANDSHAKE_ACK);
          send(obj);
          if (initCallback) {
            initCallback(socket);
            initCallback = null;
          }
        };
        var onData = function onData(data) {
          var msg = Message.decode(data);
          if (msg.id > 0) {
            msg.route = routeMap[msg.id];
            delete routeMap[msg.id];
            if (!msg.route) return;
          }
          msg.body = deCompose(msg);
          processMessage(pomelo, msg);
        };
        var onKick = function onKick(data) {
          data = JSON.parse(Protocol.strdecode(data));
          pomelo.emit("onKick", data);
        };
        handlers[Package.TYPE_HANDSHAKE] = handshake;
        handlers[Package.TYPE_HEARTBEAT] = heartbeat;
        handlers[Package.TYPE_DATA] = onData;
        handlers[Package.TYPE_KICK] = onKick;
        var processPackage = function processPackage(msgs) {
          if (Array.isArray(msgs)) for (var i = 0; i < msgs.length; i++) {
            var msg = msgs[i];
            handlers[msg.type](msg.body);
          } else handlers[msgs.type](msgs.body);
        };
        var processMessage = function processMessage(pomelo, msg) {
          msg.id || pomelo.emit(msg.route, msg.body);
          var cb = callbacks[msg.id];
          delete callbacks[msg.id];
          if ("function" !== typeof cb) return;
          cb(msg.body);
          return;
        };
        var processMessageBatch = function processMessageBatch(pomelo, msgs) {
          for (var i = 0, l = msgs.length; i < l; i++) processMessage(pomelo, msgs[i]);
        };
        var deCompose = function deCompose(msg) {
          var protos = !pomelo.data.protos ? {} : pomelo.data.protos.server;
          var abbrs = pomelo.data.abbrs;
          var route = msg.route;
          if (msg.compressRoute) {
            if (!abbrs[route]) return {};
            route = msg.route = abbrs[route];
          }
          return protos[route] ? protobuf.decode(route, msg.body) : JSON.parse(Protocol.strdecode(msg.body));
        };
        var handshakeInit = function handshakeInit(data) {
          if (data.sys && data.sys.heartbeat) {
            heartbeatInterval = 1e3 * data.sys.heartbeat;
            heartbeatTimeout = 2 * heartbeatInterval;
          } else {
            heartbeatInterval = 0;
            heartbeatTimeout = 0;
          }
          initData(data);
          "function" === typeof handshakeCallback && handshakeCallback(data.user);
        };
        var initData = function initData(data) {
          if (!data || !data.sys) return;
          pomelo.data = pomelo.data || {};
          var dict = data.sys.dict;
          var protos = data.sys.protos;
          if (dict) {
            pomelo.data.dict = dict;
            pomelo.data.abbrs = {};
            for (var route in dict) pomelo.data.abbrs[dict[route]] = route;
          }
          if (protos) {
            pomelo.data.protos = {
              server: protos.server || {},
              client: protos.client || {}
            };
            !protobuf || protobuf.init({
              encoderProtos: protos.client,
              decoderProtos: protos.server
            });
          }
        };
        module.exports = pomelo;
      })();
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    buffer: 2
  } ],
  "socket-io": [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "393290vPc1IIYfh8FrmxcNZ", "socket-io");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      false;
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  underscore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "828b12flH1HFLVl0u+AeWXp", "underscore");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function() {
      var root = exports;
      var previousUnderscore = root._;
      var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
      var push = ArrayProto.push, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
      var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind, nativeCreate = Object.create;
      var Ctor = function Ctor() {};
      var _ = function _(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
      };
      module.exports = _;
      _.VERSION = "1.8.3";
      var optimizeCb = function optimizeCb(func, context, argCount) {
        if (void 0 === context) return func;
        switch (null == argCount ? 3 : argCount) {
         case 1:
          return function(value) {
            return func.call(context, value);
          };

         case 2:
          return function(value, other) {
            return func.call(context, value, other);
          };

         case 3:
          return function(value, index, collection) {
            return func.call(context, value, index, collection);
          };

         case 4:
          return function(accumulator, value, index, collection) {
            return func.call(context, accumulator, value, index, collection);
          };
        }
        return function() {
          return func.apply(context, arguments);
        };
      };
      var cb = function cb(value, context, argCount) {
        if (null == value) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matcher(value);
        return _.property(value);
      };
      _.iteratee = function(value, context) {
        return cb(value, context, Infinity);
      };
      var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
        return function(obj) {
          var length = arguments.length;
          if (length < 2 || null == obj) return obj;
          for (var index = 1; index < length; index++) {
            var source = arguments[index], keys = keysFunc(source), l = keys.length;
            for (var i = 0; i < l; i++) {
              var key = keys[i];
              undefinedOnly && void 0 !== obj[key] || (obj[key] = source[key]);
            }
          }
          return obj;
        };
      };
      var baseCreate = function baseCreate(prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor();
        Ctor.prototype = null;
        return result;
      };
      var property = function property(key) {
        return function(obj) {
          return null == obj ? void 0 : obj[key];
        };
      };
      var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
      var getLength = property("length");
      var isArrayLike = function isArrayLike(collection) {
        var length = getLength(collection);
        return "number" == typeof length && length >= 0 && length <= MAX_ARRAY_INDEX;
      };
      _.each = _.forEach = function(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) for (i = 0, length = obj.length; i < length; i++) iteratee(obj[i], i, obj); else {
          var keys = _.keys(obj);
          for (i = 0, length = keys.length; i < length; i++) iteratee(obj[keys[i]], keys[i], obj);
        }
        return obj;
      };
      _.map = _.collect = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, results = Array(length);
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          results[index] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
      };
      function createReduce(dir) {
        function iterator(obj, iteratee, memo, keys, index, length) {
          for (;index >= 0 && index < length; index += dir) {
            var currentKey = keys ? keys[index] : index;
            memo = iteratee(memo, obj[currentKey], currentKey, obj);
          }
          return memo;
        }
        return function(obj, iteratee, memo, context) {
          iteratee = optimizeCb(iteratee, context, 4);
          var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, index = dir > 0 ? 0 : length - 1;
          if (arguments.length < 3) {
            memo = obj[keys ? keys[index] : index];
            index += dir;
          }
          return iterator(obj, iteratee, memo, keys, index, length);
        };
      }
      _.reduce = _.foldl = _.inject = createReduce(1);
      _.reduceRight = _.foldr = createReduce(-1);
      _.find = _.detect = function(obj, predicate, context) {
        var key;
        key = isArrayLike(obj) ? _.findIndex(obj, predicate, context) : _.findKey(obj, predicate, context);
        if (void 0 !== key && -1 !== key) return obj[key];
      };
      _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function(value, index, list) {
          predicate(value, index, list) && results.push(value);
        });
        return results;
      };
      _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
      };
      _.every = _.all = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (!predicate(obj[currentKey], currentKey, obj)) return false;
        }
        return true;
      };
      _.some = _.any = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length;
        for (var index = 0; index < length; index++) {
          var currentKey = keys ? keys[index] : index;
          if (predicate(obj[currentKey], currentKey, obj)) return true;
        }
        return false;
      };
      _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
        isArrayLike(obj) || (obj = _.values(obj));
        ("number" != typeof fromIndex || guard) && (fromIndex = 0);
        return _.indexOf(obj, item, fromIndex) >= 0;
      };
      _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
          var func = isFunc ? method : value[method];
          return null == func ? func : func.apply(value, args);
        });
      };
      _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
      };
      _.where = function(obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
      };
      _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matcher(attrs));
      };
      _.max = function(obj, iteratee, context) {
        var result = -Infinity, lastComputed = -Infinity, value, computed;
        if (null == iteratee && null != obj) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            value > result && (result = value);
          }
        } else {
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index, list) {
            computed = iteratee(value, index, list);
            if (computed > lastComputed || -Infinity === computed && -Infinity === result) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };
      _.min = function(obj, iteratee, context) {
        var result = Infinity, lastComputed = Infinity, value, computed;
        if (null == iteratee && null != obj) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            value < result && (result = value);
          }
        } else {
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index, list) {
            computed = iteratee(value, index, list);
            if (computed < lastComputed || Infinity === computed && Infinity === result) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };
      _.shuffle = function(obj) {
        var set = isArrayLike(obj) ? obj : _.values(obj);
        var length = set.length;
        var shuffled = Array(length);
        for (var index = 0, rand; index < length; index++) {
          rand = _.random(0, index);
          rand !== index && (shuffled[index] = shuffled[rand]);
          shuffled[rand] = set[index];
        }
        return shuffled;
      };
      _.sample = function(obj, n, guard) {
        if (null == n || guard) {
          isArrayLike(obj) || (obj = _.values(obj));
          return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
      };
      _.sortBy = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
          return {
            value: value,
            index: index,
            criteria: iteratee(value, index, list)
          };
        }).sort(function(left, right) {
          var a = left.criteria;
          var b = right.criteria;
          if (a !== b) {
            if (a > b || void 0 === a) return 1;
            if (a < b || void 0 === b) return -1;
          }
          return left.index - right.index;
        }), "value");
      };
      var group = function group(behavior) {
        return function(obj, iteratee, context) {
          var result = {};
          iteratee = cb(iteratee, context);
          _.each(obj, function(value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
          });
          return result;
        };
      };
      _.groupBy = group(function(result, value, key) {
        _.has(result, key) ? result[key].push(value) : result[key] = [ value ];
      });
      _.indexBy = group(function(result, value, key) {
        result[key] = value;
      });
      _.countBy = group(function(result, value, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
      });
      _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (isArrayLike(obj)) return _.map(obj, _.identity);
        return _.values(obj);
      };
      _.size = function(obj) {
        if (null == obj) return 0;
        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
      };
      _.partition = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [], fail = [];
        _.each(obj, function(value, key, obj) {
          (predicate(value, key, obj) ? pass : fail).push(value);
        });
        return [ pass, fail ];
      };
      _.first = _.head = _.take = function(array, n, guard) {
        if (null == array) return;
        if (null == n || guard) return array[0];
        return _.initial(array, array.length - n);
      };
      _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (null == n || guard ? 1 : n)));
      };
      _.last = function(array, n, guard) {
        if (null == array) return;
        if (null == n || guard) return array[array.length - 1];
        return _.rest(array, Math.max(0, array.length - n));
      };
      _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, null == n || guard ? 1 : n);
      };
      _.compact = function(array) {
        return _.filter(array, _.identity);
      };
      var flatten = function flatten(input, shallow, strict, startIndex) {
        var output = [], idx = 0;
        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
          var value = input[i];
          if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
            shallow || (value = flatten(value, shallow, strict));
            var j = 0, len = value.length;
            output.length += len;
            while (j < len) output[idx++] = value[j++];
          } else strict || (output[idx++] = value);
        }
        return output;
      };
      _.flatten = function(array, shallow) {
        return flatten(array, shallow, false);
      };
      _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
      };
      _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
          context = iteratee;
          iteratee = isSorted;
          isSorted = false;
        }
        null != iteratee && (iteratee = cb(iteratee, context));
        var result = [];
        var seen = [];
        for (var i = 0, length = getLength(array); i < length; i++) {
          var value = array[i], computed = iteratee ? iteratee(value, i, array) : value;
          if (isSorted) {
            i && seen === computed || result.push(value);
            seen = computed;
          } else if (iteratee) {
            if (!_.contains(seen, computed)) {
              seen.push(computed);
              result.push(value);
            }
          } else _.contains(result, value) || result.push(value);
        }
        return result;
      };
      _.union = function() {
        return _.uniq(flatten(arguments, true, true));
      };
      _.intersection = function(array) {
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = getLength(array); i < length; i++) {
          var item = array[i];
          if (_.contains(result, item)) continue;
          for (var j = 1; j < argsLength; j++) if (!_.contains(arguments[j], item)) break;
          j === argsLength && result.push(item);
        }
        return result;
      };
      _.difference = function(array) {
        var rest = flatten(arguments, true, true, 1);
        return _.filter(array, function(value) {
          return !_.contains(rest, value);
        });
      };
      _.zip = function() {
        return _.unzip(arguments);
      };
      _.unzip = function(array) {
        var length = array && _.max(array, getLength).length || 0;
        var result = Array(length);
        for (var index = 0; index < length; index++) result[index] = _.pluck(array, index);
        return result;
      };
      _.object = function(list, values) {
        var result = {};
        for (var i = 0, length = getLength(list); i < length; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
        return result;
      };
      function createPredicateIndexFinder(dir) {
        return function(array, predicate, context) {
          predicate = cb(predicate, context);
          var length = getLength(array);
          var index = dir > 0 ? 0 : length - 1;
          for (;index >= 0 && index < length; index += dir) if (predicate(array[index], index, array)) return index;
          return -1;
        };
      }
      _.findIndex = createPredicateIndexFinder(1);
      _.findLastIndex = createPredicateIndexFinder(-1);
      _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          iteratee(array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
      };
      function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function(array, item, idx) {
          var i = 0, length = getLength(array);
          if ("number" == typeof idx) dir > 0 ? i = idx >= 0 ? idx : Math.max(idx + length, i) : length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1; else if (sortedIndex && idx && length) {
            idx = sortedIndex(array, item);
            return array[idx] === item ? idx : -1;
          }
          if (item !== item) {
            idx = predicateFind(slice.call(array, i, length), _.isNaN);
            return idx >= 0 ? idx + i : -1;
          }
          for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) if (array[idx] === item) return idx;
          return -1;
        };
      }
      _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
      _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
      _.range = function(start, stop, step) {
        if (null == stop) {
          stop = start || 0;
          start = 0;
        }
        step = step || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);
        for (var idx = 0; idx < length; idx++, start += step) range[idx] = start;
        return range;
      };
      var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype);
        var result = sourceFunc.apply(self, args);
        if (_.isObject(result)) return result;
        return self;
      };
      _.bind = function(func, context) {
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError("Bind must be called on a function");
        var args = slice.call(arguments, 2);
        var bound = function bound() {
          return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
        };
        return bound;
      };
      _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        var bound = function bound() {
          var position = 0, length = boundArgs.length;
          var args = Array(length);
          for (var i = 0; i < length; i++) args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
          while (position < arguments.length) args.push(arguments[position++]);
          return executeBound(func, bound, this, this, args);
        };
        return bound;
      };
      _.bindAll = function(obj) {
        var i, length = arguments.length, key;
        if (length <= 1) throw new Error("bindAll must be passed function names");
        for (i = 1; i < length; i++) {
          key = arguments[i];
          obj[key] = _.bind(obj[key], obj);
        }
        return obj;
      };
      _.memoize = function(func, hasher) {
        var memoize = function memoize(key) {
          var cache = memoize.cache;
          var address = "" + (hasher ? hasher.apply(this, arguments) : key);
          _.has(cache, address) || (cache[address] = func.apply(this, arguments));
          return cache[address];
        };
        memoize.cache = {};
        return memoize;
      };
      _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
          return func.apply(null, args);
        }, wait);
      };
      _.defer = _.partial(_.delay, _, 1);
      _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function later() {
          previous = false === options.leading ? 0 : _.now();
          timeout = null;
          result = func.apply(context, args);
          timeout || (context = args = null);
        };
        return function() {
          var now = _.now();
          previous || false !== options.leading || (previous = now);
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            timeout || (context = args = null);
          } else timeout || false === options.trailing || (timeout = setTimeout(later, remaining));
          return result;
        };
      };
      _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        var later = function later() {
          var last = _.now() - timestamp;
          if (last < wait && last >= 0) timeout = setTimeout(later, wait - last); else {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
              timeout || (context = args = null);
            }
          }
        };
        return function() {
          context = this;
          args = arguments;
          timestamp = _.now();
          var callNow = immediate && !timeout;
          timeout || (timeout = setTimeout(later, wait));
          if (callNow) {
            result = func.apply(context, args);
            context = args = null;
          }
          return result;
        };
      };
      _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
      };
      _.negate = function(predicate) {
        return function() {
          return !predicate.apply(this, arguments);
        };
      };
      _.compose = function() {
        var args = arguments;
        var start = args.length - 1;
        return function() {
          var i = start;
          var result = args[start].apply(this, arguments);
          while (i--) result = args[i].call(this, result);
          return result;
        };
      };
      _.after = function(times, func) {
        return function() {
          if (--times < 1) return func.apply(this, arguments);
        };
      };
      _.before = function(times, func) {
        var memo;
        return function() {
          --times > 0 && (memo = func.apply(this, arguments));
          times <= 1 && (func = null);
          return memo;
        };
      };
      _.once = _.partial(_.before, 2);
      var hasEnumBug = !{
        toString: null
      }.propertyIsEnumerable("toString");
      var nonEnumerableProps = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
      function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length;
        var constructor = obj.constructor;
        var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
        var prop = "constructor";
        _.has(obj, prop) && !_.contains(keys, prop) && keys.push(prop);
        while (nonEnumIdx--) {
          prop = nonEnumerableProps[nonEnumIdx];
          prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop) && keys.push(prop);
        }
      }
      _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) _.has(obj, key) && keys.push(key);
        hasEnumBug && collectNonEnumProps(obj, keys);
        return keys;
      };
      _.allKeys = function(obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        hasEnumBug && collectNonEnumProps(obj, keys);
        return keys;
      };
      _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) values[i] = obj[keys[i]];
        return values;
      };
      _.mapObject = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        var keys = _.keys(obj), length = keys.length, results = {}, currentKey;
        for (var index = 0; index < length; index++) {
          currentKey = keys[index];
          results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
        }
        return results;
      };
      _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) pairs[i] = [ keys[i], obj[keys[i]] ];
        return pairs;
      };
      _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) result[obj[keys[i]]] = keys[i];
        return result;
      };
      _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) _.isFunction(obj[key]) && names.push(key);
        return names.sort();
      };
      _.extend = createAssigner(_.allKeys);
      _.extendOwn = _.assign = createAssigner(_.keys);
      _.findKey = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var keys = _.keys(obj), key;
        for (var i = 0, length = keys.length; i < length; i++) {
          key = keys[i];
          if (predicate(obj[key], key, obj)) return key;
        }
      };
      _.pick = function(object, oiteratee, context) {
        var result = {}, obj = object, iteratee, keys;
        if (null == obj) return result;
        if (_.isFunction(oiteratee)) {
          keys = _.allKeys(obj);
          iteratee = optimizeCb(oiteratee, context);
        } else {
          keys = flatten(arguments, false, false, 1);
          iteratee = function iteratee(value, key, obj) {
            return key in obj;
          };
          obj = Object(obj);
        }
        for (var i = 0, length = keys.length; i < length; i++) {
          var key = keys[i];
          var value = obj[key];
          iteratee(value, key, obj) && (result[key] = value);
        }
        return result;
      };
      _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) iteratee = _.negate(iteratee); else {
          var keys = _.map(flatten(arguments, false, false, 1), String);
          iteratee = function iteratee(value, key) {
            return !_.contains(keys, key);
          };
        }
        return _.pick(obj, iteratee, context);
      };
      _.defaults = createAssigner(_.allKeys, true);
      _.create = function(prototype, props) {
        var result = baseCreate(prototype);
        props && _.extendOwn(result, props);
        return result;
      };
      _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
      };
      _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
      };
      _.isMatch = function(object, attrs) {
        var keys = _.keys(attrs), length = keys.length;
        if (null == object) return !length;
        var obj = Object(object);
        for (var i = 0; i < length; i++) {
          var key = keys[i];
          if (attrs[key] !== obj[key] || !(key in obj)) return false;
        }
        return true;
      };
      var eq = function eq(a, b, aStack, bStack) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof _ && (a = a._wrapped);
        b instanceof _ && (b = b._wrapped);
        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
         case "[object RegExp]":
         case "[object String]":
          return "" + a === "" + b;

         case "[object Number]":
          if (+a !== +a) return +b !== +b;
          return 0 === +a ? 1 / +a === 1 / b : +a === +b;

         case "[object Date]":
         case "[object Boolean]":
          return +a === +b;
        }
        var areArrays = "[object Array]" === className;
        if (!areArrays) {
          if ("object" != ("undefined" === typeof a ? "undefined" : _typeof(a)) || "object" != ("undefined" === typeof b ? "undefined" : _typeof(b))) return false;
          var aCtor = a.constructor, bCtor = b.constructor;
          if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return false;
        }
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) if (aStack[length] === a) return bStack[length] === b;
        aStack.push(a);
        bStack.push(b);
        if (areArrays) {
          length = a.length;
          if (length !== b.length) return false;
          while (length--) if (!eq(a[length], b[length], aStack, bStack)) return false;
        } else {
          var keys = _.keys(a), key;
          length = keys.length;
          if (_.keys(b).length !== length) return false;
          while (length--) {
            key = keys[length];
            if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
          }
        }
        aStack.pop();
        bStack.pop();
        return true;
      };
      _.isEqual = function(a, b) {
        return eq(a, b);
      };
      _.isEmpty = function(obj) {
        if (null == obj) return true;
        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return 0 === obj.length;
        return 0 === _.keys(obj).length;
      };
      _.isElement = function(obj) {
        return !!(obj && 1 === obj.nodeType);
      };
      _.isArray = nativeIsArray || function(obj) {
        return "[object Array]" === toString.call(obj);
      };
      _.isObject = function(obj) {
        var type = "undefined" === typeof obj ? "undefined" : _typeof(obj);
        return "function" === type || "object" === type && !!obj;
      };
      _.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(name) {
        _["is" + name] = function(obj) {
          return toString.call(obj) === "[object " + name + "]";
        };
      });
      _.isArguments(arguments) || (_.isArguments = function(obj) {
        return _.has(obj, "callee");
      });
      "function" != typeof /./ && "object" != ("undefined" === typeof Int8Array ? "undefined" : _typeof(Int8Array)) && (_.isFunction = function(obj) {
        return "function" == typeof obj || false;
      });
      _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
      };
      _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj;
      };
      _.isBoolean = function(obj) {
        return true === obj || false === obj || "[object Boolean]" === toString.call(obj);
      };
      _.isNull = function(obj) {
        return null === obj;
      };
      _.isUndefined = function(obj) {
        return void 0 === obj;
      };
      _.has = function(obj, key) {
        return null != obj && hasOwnProperty.call(obj, key);
      };
      _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
      };
      _.identity = function(value) {
        return value;
      };
      _.constant = function(value) {
        return function() {
          return value;
        };
      };
      _.noop = function() {};
      _.property = property;
      _.propertyOf = function(obj) {
        return null == obj ? function() {} : function(key) {
          return obj[key];
        };
      };
      _.matcher = _.matches = function(attrs) {
        attrs = _.extendOwn({}, attrs);
        return function(obj) {
          return _.isMatch(obj, attrs);
        };
      };
      _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
      };
      _.random = function(min, max) {
        if (null == max) {
          max = min;
          min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
      };
      _.now = Date.now || function() {
        return new Date().getTime();
      };
      var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      var unescapeMap = _.invert(escapeMap);
      var createEscaper = function createEscaper(map) {
        var escaper = function escaper(match) {
          return map[match];
        };
        var source = "(?:" + _.keys(map).join("|") + ")";
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, "g");
        return function(string) {
          string = null == string ? "" : "" + string;
          return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
      };
      _.escape = createEscaper(escapeMap);
      _.unescape = createEscaper(unescapeMap);
      _.result = function(object, property, fallback) {
        var value = null == object ? void 0 : object[property];
        void 0 === value && (value = fallback);
        return _.isFunction(value) ? value.call(object) : value;
      };
      var idCounter = 0;
      _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
      };
      _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var noMatch = /(.)^/;
      var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
      var escapeChar = function escapeChar(match) {
        return "\\" + escapes[match];
      };
      _.template = function(text, settings, oldSettings) {
        !settings && oldSettings && (settings = oldSettings);
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
          source += text.slice(index, offset).replace(escaper, escapeChar);
          index = offset + match.length;
          escape ? source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" : interpolate ? source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" : evaluate && (source += "';\n" + evaluate + "\n__p+='");
          return match;
        });
        source += "';\n";
        settings.variable || (source = "with(obj||{}){\n" + source + "}\n");
        source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
          var render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
          e.source = source;
          throw e;
        }
        var template = function template(data) {
          return render.call(this, data, _);
        };
        var argument = settings.variable || "obj";
        template.source = "function(" + argument + "){\n" + source + "}";
        return template;
      };
      _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = true;
        return instance;
      };
      var result = function result(instance, obj) {
        return instance._chain ? _(obj).chain() : obj;
      };
      _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
          var func = _[name] = obj[name];
          _.prototype[name] = function() {
            var args = [ this._wrapped ];
            push.apply(args, arguments);
            return result(this, func.apply(_, args));
          };
        });
      };
      _.mixin(_);
      _.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          var obj = this._wrapped;
          method.apply(obj, arguments);
          "shift" !== name && "splice" !== name || 0 !== obj.length || delete obj[0];
          return result(this, obj);
        };
      });
      _.each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
          return result(this, method.apply(this._wrapped, arguments));
        };
      });
      _.prototype.value = function() {
        return this._wrapped;
      };
      _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
      _.prototype.toString = function() {
        return "" + this._wrapped;
      };
      "function" === typeof define && define.amd && define("underscore", [], function() {
        return _;
      });
    }).call(void 0);
    cc._RF.pop();
  }, {} ]
}, {}, [ "FKNN_Ctl", "FKNN_Logic", "FKNN_UI", "FKNN_UIComs", "GameScene_NN", "PbPlayer_NN", "game_result", "socket-io", "AnysdkMgr", "AudioMgr", "GameNetMgr", "Global", "HTTP", "HotUpdate", "MahjongMgr", "Net", "PbToast", "ReplayMgr", "UserMgr", "Utils", "VoiceMgr", "Alert", "AppStart", "Chat", "CheckBox", "CreateRole", "CreateRoom", "DingQue", "Folds", "GameOver", "GameResult", "Hall", "History", "HuanSanZhang", "ImageLoader", "JoinGameInput", "LoadingLogic", "Login", "MJGame", "MJRoom", "NoticeTip", "OnBack", "PengGangs", "PopupMgr", "RadioButton", "RadioGroupMgr", "ReConnect", "ReplayCtrl", "Seat", "Settings", "Status", "TimePointer", "UserInfoShow", "Voice", "WaitingConnection", "ComNodePool", "ComNotify", "pbActionCompareCard", "NPHelper", "NotifyHelper", "SocketHelper", "pomelo", "underscore", "AudioMgr_NN", "GameLogic_NN", "GameMsgHandler_NN", "GameMsgLogic_NN", "GameMsgServer_NN", "PbCard", "ActionHelper", "AudioHelper", "CCLoaderHelper", "ComFuncChecker", "ComRandomBanker", "ComScheduler", "ComTime", "ComVoicePlayer", "ComVoiceRecorder", "Constants", "CryptUtil", "DataHelper", "FuncHelper", "GameDownComponent", "GameHelper", "GamesMgr", "GlobalGameData", "HttpHandler", "HttpHelper", "MsgHelper", "PBHelper", "PbClock", "PbGoldActionLayer", "PlatformHelper", "RandomListHelper", "RoomServer", "ServerRouters", "SimpleChinese", "TexHelper", "TimeHelper", "UserHandler", "UserServer" ]);