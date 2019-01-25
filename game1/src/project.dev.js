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
  dragon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b465bvKnixEo65m92WLl9lL", "dragon");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay);
        this._armature = this._armatureDisPlay.armature();
        this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this.animationEventHandler, this);
        this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this.animationEventHandler, this);
      },
      walk: function walk() {
        cc.log("走");
        this._armature.animation.fadeIn("walk", -1, -1, 0, "hit");
      },
      jump: function jump() {
        cc.log("跳");
        this._armatureDisPlay.playAnimation("jump", 1);
      },
      animationEventHandler: function animationEventHandler(event) {
        event.type == dragonBones.EventObject.FADE_IN_COMPLETE ? cc.log(event.detail.animationName + " fade in complete") : event.type == dragonBones.EventObject.FADE_OUT_COMPLETE && cc.log(event.detail.animationName + " fade out complete");
      },
      backHall: function backHall() {
        cc.log("返回");
        cc.director.loadScene("helloworld");
      },
      openPrefab: function openPrefab() {
        cc.loader.loadRes("prefabA", cc.Prefab, function(err, prefab) {
          if (err) console.log("加载失败"); else {
            var prefabA = cc.instantiate(prefab);
            cc.find("Canvas").addChild(prefabA);
          }
        });
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "dragon" ]);