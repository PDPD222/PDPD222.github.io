window.__require=function t(e,n,i){function c(a,s){if(!n[a]){if(!e[a]){var r=a.split("/");if(r=r[r.length-1],!e[r]){var u="function"==typeof __require&&__require;if(!s&&u)return u(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+a+"'")}}var h=n[a]={exports:{}};e[a][0].call(h.exports,function(t){return c(e[a][1][t]||t)},h,h.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<i.length;a++)c(i[a]);return c}({game:[function(t,e,n){"use strict";cc._RF.push(e,"b7958j9K9dBk5LetGZPNdMS","game"),cc.Class({extends:cc.Component,properties:{player:{default:null,type:cc.Node},guanguan1Prefab:{default:null,type:cc.Prefab},guanguan2Prefab:{default:null,type:cc.Prefab},guanguan3Prefab:{default:null,type:cc.Prefab}},spawnNewGuan:function(){var t=Math.random();console.log(t);var e=cc.instantiate(this.guanguan1Prefab);t<.3?(e=cc.instantiate(this.guanguan1Prefab),this.node.addChild(e),e.setPosition(this.getNewGuanPosition()),e.getComponent("guanguan").game=this):t>.3&&t<.6?(e=cc.instantiate(this.guanguan2Prefab),this.node.addChild(e),e.setPosition(this.getNewGuanPosition()),e.getComponent("guanguan").game=this):(e=cc.instantiate(this.guanguan3Prefab),this.node.addChild(e),e.setPosition(this.getNewGuanPosition()),e.getComponent("guanguan").game=this)},getNewGuanPosition:function(){var t=this.player.x+400;return cc.v2(t,307)},onLoad:function(){cc.director.getCollisionManager().enable=!0,this.timer=0},start:function(){cc.director.getCollisionManager().enabled=!0},update:function(t){this.timer>3&&(this.spawnNewGuan(),this.timer=0),this.timer+=t}}),cc._RF.pop()},{}],guanguan:[function(t,e,n){"use strict";cc._RF.push(e,"519e2ZzrNVO1KHiahg+awvb","guanguan"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.timer=0},onCollisionEnter:function(t,e){cc.director.loadScene("scene")},update:function(t){this.timer>7&&this.node.destroy(),this.timer+=t,!this.played&&this.playerx>this.node.x+100&&cc.audioEngine.playEffect(this.game.scoreAudio,!1)}}),cc._RF.pop()},{}],leiwenjie:[function(t,e,n){"use strict";cc._RF.push(e,"6e637ZTArtHOJGK2Ug5ZG3f","leiwenjie"),cc.Class({extends:cc.Component,properties:{accelx:0,accely:0,camera:{default:null,type:cc.Camera},score:{default:null,type:cc.Label},jumpAudio:{default:null,type:cc.AudioClip}},setRotateAction:function(){var t=cc.rotateBy(1,-30),e=cc.rotateBy(1,30),n=cc.repeat(e,2).easing(cc.easeCubicActionInOut()),i=cc.repeat(t,2).easing(cc.easeCubicActionInOut());return cc.repeatForever(cc.sequence(n,i))},setGuiChu:function(){cc.rotateTo(),cc.rotateTo()},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},playStartSound:function(){cc.audioEngine.playEffect(this.startAudio,!1)},onKeyDown:function(t){switch(t.keyCode){case cc.macro.KEY.space:this.fire||(this.node.stopAction(this.initRo),this.node.runAction(cc.callFunc(this.playStartSound,this)),this.rb=this.node.addComponent(cc.RigidBody),this.rb.applyLinearImpulse(cc.v2(200,800),cc.v2(-390,-227)),this.rb.gravityScale=15),this.fire=!0}},onKeyUp:function(t){switch(t.keyCode){case cc.macro.KEY.space:this.node.runAction(cc.callFunc(this.playJumpSound,this)),this.rb.linearVelocity=cc.v2(this.rb.linearVelocity.x,950)}},onLoad:function(){cc.director.getPhysicsManager().enabled=!0,this.initRo=this.setRotateAction(),this.node.runAction(this.initRo),this.scoredTime=0,this.dtSave=0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.fire=!1},update:function(t){this.camera.node.position=cc.v2(this.node.position.x+220,this.camera.node.position.y),this.score.node.position=cc.v2(this.node.position.x-100,this.score.node.position.y),this.fire&&(this.node.rotation=-Math.atan(this.rb.linearVelocity.y/this.rb.linearVelocity.x)/Math.PI*180+50),this.score.string="Score:"+this.scoredTime,this.dtSave+=t,this.dtSave>=1&&(this.scoredTime++,this.dtSave=0)}}),cc._RF.pop()},{}]},{},["game","guanguan","leiwenjie"]);