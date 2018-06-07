/*!
 * VERSION: 1.18.4
 * DATE: 2016-04-26
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.18.4",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&e(p,a,q),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.18.4",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&n(l,a,o),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&0!==this._time&&(b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=new c(null,null,1,0),j=d.prototype=new a;return j.constructor=d,j.kill()._gc=!1,d.version="1.18.4",j.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},j.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},j.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},j.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},j.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:i,useFrames:this.usesFrames(),immediateRender:!1};for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new b(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},j.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},j.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&0!==this._totalTime&&(b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},j.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},j.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},j.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},j.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},j.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},j.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},j.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},j.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},j.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},j.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},j.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},j.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.5",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);
var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._round[f]&&(i=Math.round(i)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform),i._onInitTween(l.proxy,q,g._tween),h}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.18.4",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\-|\.|\b)(\d|\.|e\-)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(a,b){return b.toUpperCase()},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=/[\s,\(]/i,I=Math.PI/180,J=180/Math.PI,K={},L=document,M=function(a){return L.createElementNS?L.createElementNS("http://www.w3.org/1999/xhtml",a):L.createElement(a)},N=M("div"),O=M("img"),P=g._internals={_specialProps:i},Q=navigator.userAgent,R=function(){var a=Q.indexOf("Android"),b=M("a");return m=-1!==Q.indexOf("Safari")&&-1===Q.indexOf("Chrome")&&(-1===a||Number(Q.substr(a+8,1))>3),o=m&&Number(Q.substr(Q.indexOf("Version/")+8,1))<6,n=-1!==Q.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),S=function(a){return v.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},T=function(a){window.console&&console.log(a)},U="",V="",W=function(a,b){b=b||N;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(V=3===d?"ms":c[d],U="-"+V.toLowerCase()+"-",V+a):null},X=L.defaultView?L.defaultView.getComputedStyle:function(){},Y=g.getStyle=function(a,b,c,d,e){var f;return R||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||X(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):S(a)},Z=P.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=D.test(c),l=a,m=N.style,n=0>d;if(n&&(d=-d),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+Y(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||L.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(N),h=parseFloat(N[k?"offsetWidth":"offsetHeight"]),l.removeChild(N),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=Z(a,c,d,e,!0))}return n?-h:h},$=P.calculateOffset=function(a,b,c){if("absolute"!==Y(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=Y(a,"margin"+d,c);return a["offset"+d]-(Z(a,b,parseFloat(e),e.replace(u,""))||0)},_=function(a,b){var c,d,e,f={};if(b=b||X(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Aa===e)&&(f[e.replace(A,C)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||za===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(A,C)]=b[c]);return R||(f.opacity=S(a)),d=Na(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ca&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},aa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(t,"")?f:0:$(a,g),void 0!==j[g]&&(h=new pa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ba={width:["Left","Right"],height:["Top","Bottom"]},ca=["marginLeft","marginRight","marginTop","marginBottom"],da=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||X(a))[b]||0;if(a.getBBox&&Ka(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ba[b],f=e.length;for(c=c||X(a,null);--f>-1;)d-=parseFloat(Y(a,"padding"+e[f],c,!0))||0,d-=parseFloat(Y(a,"border"+e[f]+"Width",c,!0))||0;return d},ea=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ea(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(t,"")),b.oy=parseFloat(f.replace(t,"")),b.v=a),b||a},fa=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ga=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ha=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:J)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ia={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ja=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ka=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ia[a])c=ia[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(q),b){if(-1!==a.indexOf("="))return a.match(r)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ja(g+1/3,d,e),c[1]=ja(g,d,e),c[2]=ja(g-1/3,d,e);else c=a.match(q)||ia.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ia.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},la=function(a,b){var c,d,e,f=a.match(ma)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ka(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ma="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ia)ma+="|"+j+"\\b";ma=new RegExp(ma+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];ma.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=la(a[0],b),a[1]=la(a[1],b)),ma.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var na=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ma)||[""])[0]:"",g=a.split(f).join("").match(s)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(q,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(o=a.replace(G,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ma)||[f])[0],m=a.split(b).join("").match(s)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(f=a.replace(G,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(s)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},oa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},pa=(P._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),qa=(P._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=K;for(c._transform=null,K=b,d=k=c.parse(a,b,d,e),K=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new pa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new pa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},P.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof qa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ra=function(a,b,c,d,e,f){var g=new qa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},sa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"",h=new qa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ma.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,s,t,u,v,w,x,y,z,A,B=c.split(", ").join(",").split(" "),C=d.split(", ").join(",").split(" "),D=B.length,E=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(B=B.join(" ").replace(G,", ").split(" "),C=C.join(" ").replace(G,", ").split(" "),D=B.length),D!==C.length&&(B=(f||"").split(" "),D=B.length),h.plugin=j,h.setRatio=l,ma.lastIndex=0,m=0;D>m;m++)if(p=B[m],s=C[m],v=parseFloat(p),v||0===v)h.appendXtra("",v,fa(s,v),s.replace(r,""),E&&-1!==s.indexOf("px"),!0);else if(e&&ma.test(p))z=s.indexOf(")")+1,z=")"+(z?s.substr(z):""),A=-1!==s.indexOf("hsl")&&R,p=ka(p,A),s=ka(s,A),w=p.length+s.length>6,w&&!R&&0===s[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(C[m]).join("transparent")):(R||(w=!1),A?h.appendXtra(w?"hsla(":"hsl(",p[0],fa(s[0],p[0]),",",!1,!0).appendXtra("",p[1],fa(s[1],p[1]),"%,",!1).appendXtra("",p[2],fa(s[2],p[2]),w?"%,":"%"+z,!1):h.appendXtra(w?"rgba(":"rgb(",p[0],s[0]-p[0],",",!0,!0).appendXtra("",p[1],s[1]-p[1],",",!0).appendXtra("",p[2],s[2]-p[2],w?",":z,!0),w&&(p=p.length<4?1:p[3],h.appendXtra("",p,(s.length<4?1:s[3])-p,z,!1))),ma.lastIndex=0;else if(t=p.match(q)){if(u=s.match(r),!u||u.length!==t.length)return h;for(o=0,n=0;n<t.length;n++)y=t[n],x=p.indexOf(y,o),h.appendXtra(p.substr(o,x-o),Number(y),fa(u[n],y),"",E&&"px"===p.substr(x+y.length,2),0===n),o=x+y.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+s:s;if(-1!==d.indexOf("=")&&h.data){for(z=h.xs0+h.data.s,m=1;m<h.l;m++)z+=h["xs"+m]+h.data["xn"+m];h.e=z+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ta=9;for(j=qa.prototype,j.l=j.pr=0;--ta>0;)j["xn"+ta]=0,j["xs"+ta]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new qa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ua=function(a,b){b=b||{},this.p=b.prefix?W(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||na(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},va=P._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new ua(f[d],b)},wa=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";va(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(T("Error: "+b+" js file not loaded."),f)}})}};j=ua.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(G.test(c)||G.test(b)?(h=b.replace(G,"|").split("|"),i=c.replace(G,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return sa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(Y(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){va(a,{parser:function(a,d,e,f,g,h,i){var j=new qa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var xa,ya="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),za=W("transform"),Aa=U+"transform",Ba=W("transformOrigin"),Ca=null!==W("perspective"),Da=P.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ca?g.defaultForce3D||"auto":!1},Ea=window.SVGElement,Fa=function(a,b,c){var d,e=L.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ga=L.documentElement,Ha=function(){var a,b,c,d=p||/Android/i.test(Q)&&!window.chrome;return L.createElementNS&&!d&&(a=Fa("svg",Ga),b=Fa("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ba]="50% 50%",b.style[za]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ca),Ga.removeChild(a)),d}(),Ia=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Ma(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ea(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==La&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ja=function(a){try{return a.getBBox()}catch(a){}},Ka=function(a){return!!(Ea&&a.getBBox&&a.getCTM&&Ja(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},La=[1,0,0,1,0,0],Ma=function(a,b){var c,d,e,f,g,h=a._gsTransform||new Da,i=1e5;if(za?d=Y(a,Aa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(E),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x||0,h.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,(h.svg||a.getBBox&&Ka(a))&&(c&&-1!==(a.style[za]+"").indexOf("matrix")&&(d=a.style[za],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return La;for(e=(d||"").match(q)||[],ta=e.length;--ta>-1;)f=Number(e[ta]),e[ta]=(g=f-(f|=0))?(g*i+(0>g?-.5:.5)|0)/i+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Na=P.getTransform=function(a,c,d,f){if(a._gsTransform&&d&&!f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform||new Da:new Da,o=n.scaleX<0,p=2e-5,q=1e5,r=Ca?parseFloat(Y(a,Ba,c,!1,"0 0 0").split(" ")[2])||n.zOrigin||0:0,s=parseFloat(g.defaultTransformPerspective)||0;if(n.svg=!(!a.getBBox||!Ka(a)),n.svg&&(Ia(a,Y(a,Ba,e,!1,"50% 50%")+"",n,a.getAttribute("data-svg-origin")),xa=g.useSVGTransformAttr||Ha),h=Ma(a),h!==La){if(16===h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],I=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,I);n.zOrigin&&(M=-n.zOrigin,K=G*M-h[12],L=H*M-h[13],M=I*M+n.zOrigin-h[14]),n.rotationX=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=C*w+G*x,u=D*w+H*x,v=E*w+I*x,G=C*-x+G*w,H=D*-x+H*w,I=E*-x+I*w,N=F*-x+N*w,C=t,D=u,E=v),O=Math.atan2(-A,I),n.rotationY=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=y*w-G*x,u=z*w-H*x,v=A*w-I*x,H=z*x+H*w,I=A*x+I*w,N=B*x+N*w,y=t,z=u,A=v),O=Math.atan2(z,y),n.rotation=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),y=y*w+C*x,u=z*w+D*x,D=z*-x+D*w,E=A*-x+E*w,z=u),n.rotationX&&Math.abs(n.rotationX)+Math.abs(n.rotation)>359.9&&(n.rotationX=n.rotation=0,n.rotationY=180-n.rotationY),n.scaleX=(Math.sqrt(y*y+z*z)*q+.5|0)/q,n.scaleY=(Math.sqrt(D*D+H*H)*q+.5|0)/q,n.scaleZ=(Math.sqrt(E*E+I*I)*q+.5|0)/q,n.skewX=C||D?Math.atan2(C,D)*J+n.rotation:n.skewX||0,Math.abs(n.skewX)>90&&Math.abs(n.skewX)<270&&(o?(n.scaleX*=-1,n.skewX+=n.rotation<=0?180:-180,n.rotation+=n.rotation<=0?180:-180):(n.scaleY*=-1,n.skewX+=n.skewX<=0?180:-180)),n.perspective=N?1/(0>N?-N:N):0,n.x=K,n.y=L,n.z=M,n.svg&&(n.x-=n.xOrigin-(n.xOrigin*y-n.yOrigin*C),n.y-=n.yOrigin-(n.yOrigin*z-n.xOrigin*D))}else if((!Ca||f||!h.length||n.x!==h[4]||n.y!==h[5]||!n.rotationX&&!n.rotationY)&&(void 0===n.x||"none"!==Y(a,"display",c))){var P=h.length>=6,Q=P?h[0]:1,R=h[1]||0,S=h[2]||0,T=P?h[3]:1;n.x=h[4]||0,n.y=h[5]||0,j=Math.sqrt(Q*Q+R*R),k=Math.sqrt(T*T+S*S),l=Q||R?Math.atan2(R,Q)*J:n.rotation||0,m=S||T?Math.atan2(S,T)*J+l:n.skewX||0,Math.abs(m)>90&&Math.abs(m)<270&&(o?(j*=-1,m+=0>=l?180:-180,l+=0>=l?180:-180):(k*=-1,m+=0>=m?180:-180)),n.scaleX=j,n.scaleY=k,n.rotation=l,n.skewX=m,Ca&&(n.rotationX=n.rotationY=n.z=0,n.perspective=s,n.scaleZ=1),n.svg&&(n.x-=n.xOrigin-(n.xOrigin*Q+n.yOrigin*S),n.y-=n.yOrigin-(n.xOrigin*R+n.yOrigin*T))}n.zOrigin=r;for(i in n)n[i]<p&&n[i]>-p&&(n[i]=0)}return d&&(a._gsTransform=n,n.svg&&(xa&&a.style[za]?b.delayedCall(.001,function(){Ra(a.style,za)}):!xa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),n},Oa=function(a){var b,c,d=this.data,e=-d.rotation*I,f=e+d.skewX*I,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,w=d.x+q*d.xPercent/100,x=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,w+=n-(n*h+o*i),x+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+w)+", Dy="+(o-(n*j+o*k)+x)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(F,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||v.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+w),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+x),ta=0;4>ta;ta++)z=ca[ta],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):Z(this.t,z,parseFloat(y),y.replace(u,""))||0,A=c!==d[z]?2>ta?-d.ieOffsetX:-d.ieOffsetY:2>ta?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ta||2===ta?1:B)))+"px"}}},Pa=P.set3DTransformRatio=P.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!K&&!M&&!D&&!C&&1===G||xa&&L||!Ca)return void(B||z.skewX||L?(B*=I,x=z.skewX*I,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,xa&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,J+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>J&&J>-p&&(J=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+J+")",L&&xa?this.t.setAttribute("transform","matrix("+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+J+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=I,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*I,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan(z.skewX*I),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+J+"px,"+K+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*I,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*I,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,J+=g*-o,K+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>J&&J>-p&&(J=w),p>K&&K>-p&&(K=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+J+v+K+v+(M?1+-K/M:1)+")",A[za]=u};j=Da.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=ya.length,x=i,y={},z="transformOrigin";if(i.display?(l=Y(a,"display"),u.display="block",j=Na(a,e,!0,i.parseTransform),u.display=l):j=Na(a,e,!0,i.parseTransform),d._transform=j,"string"==typeof x.transform&&za)l=N.style,l[za]=x.transform,l.display="block",l.position="absolute",L.body.appendChild(N),k=Na(N,null,!1),j.svg&&(q=j.xOrigin,r=j.yOrigin,k.x-=j.xOffset,k.y-=j.yOffset,(x.transformOrigin||x.svgOrigin)&&(m={},Ia(a,ea(x.transformOrigin),m,x.svgOrigin,x.smoothOrigin,!0),q=m.xOrigin,r=m.yOrigin,k.x-=m.xOffset-j.xOffset,k.y-=m.yOffset-j.yOffset),(q||r)&&(s=Ma(N),k.x-=q-(q*s[0]+r*s[2]),k.y-=r-(q*s[1]+r*s[3]))),L.body.removeChild(N),k.perspective||(k.perspective=j.perspective),null!=x.xPercent&&(k.xPercent=ga(x.xPercent,j.xPercent)),null!=x.yPercent&&(k.yPercent=ga(x.yPercent,j.yPercent));else if("object"==typeof x){if(k={scaleX:ga(null!=x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:ga(null!=x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:ga(x.scaleZ,j.scaleZ),x:ga(x.x,j.x),y:ga(x.y,j.y),z:ga(x.z,j.z),xPercent:ga(x.xPercent,j.xPercent),yPercent:ga(x.yPercent,j.yPercent),perspective:ga(x.transformPerspective,j.perspective)},p=x.directionalRotation,null!=p)if("object"==typeof p)for(l in p)x[l]=p[l];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(k.x=0,k.xPercent=ga(x.x,j.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(k.y=0,k.yPercent=ga(x.y,j.yPercent)),k.rotation=ha("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:j.rotation-j.skewY,j.rotation-j.skewY,"rotation",y),Ca&&(k.rotationX=ha("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":j.rotationX||0,j.rotationX,"rotationX",y),k.rotationY=ha("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":j.rotationY||0,j.rotationY,"rotationY",y)),k.skewX=ha(x.skewX,j.skewX-j.skewY),(k.skewY=ha(x.skewY,j.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ca&&null!=x.force3D&&(j.force3D=x.force3D,o=!0),j.skewType=x.skewType||j.skewType||g.defaultSkewType,n=j.force3D||j.z||j.rotationX||j.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,n||null==x.scale||(k.scaleZ=1);--w>-1;)c=ya[w],m=k[c]-j[c],(m>v||-v>m||null!=x[c]||null!=K[c])&&(o=!0,f=new qa(j,c,j[c],m,f),c in y&&(f.e=y[c]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return m=x.transformOrigin,j.svg&&(m||x.svgOrigin)&&(q=j.xOffset,r=j.yOffset,Ia(a,ea(m),k,x.svgOrigin,x.smoothOrigin),f=ra(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f=ra(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(q!==j.xOffset||r!==j.yOffset)&&(f=ra(j,"xOffset",t?q:j.xOffset,j.xOffset,f,z),f=ra(j,"yOffset",t?r:j.yOffset,j.yOffset,f,z)),m=xa?null:"0px 0px"),(m||Ca&&n&&j.zOrigin)&&(za?(o=!0,c=Ba,m=(m||Y(a,c,e,!1,"50% 50%"))+"",f=new qa(u,c,0,0,f,-1,z),f.b=u[c],f.plugin=h,Ca?(l=j.zOrigin,m=m.split(" "),j.zOrigin=(m.length>2&&(0===l||"0px"!==m[2])?parseFloat(m[2]):l)||0,f.xs0=f.e=m[0]+" "+(m[1]||"50%")+" 0px",f=new qa(j,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=j.zOrigin):f.xs0=f.e=m):ea(m+"",j)),o&&(d._transformType=j.svg&&xa||!n&&3!==this._transformType?2:3),f},prefix:!0}),va("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),va("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;
for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=W(y[j])),m=l=Y(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=Z(a,"borderLeft",o,t),w=Z(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=Z(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=sa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:na("0px 0px 0px 0px",!1,!0)}),va("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return sa(a.style,c,this.format(Y(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:na("0px 0px",!1,!0)}),va("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||X(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=Y(a,"backgroundImage").replace(B,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),O.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-O.width:a.offsetHeight-O.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ea}),va("backgroundSize",{defaultValue:"0 0",formatter:ea}),va("perspective",{defaultValue:"0px",prefix:!0}),va("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),va("transformStyle",{prefix:!0}),va("backfaceVisibility",{prefix:!0}),va("userSelect",{prefix:!0}),va("margin",{parser:oa("marginTop,marginRight,marginBottom,marginLeft")}),va("padding",{parser:oa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),va("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(Y(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),va("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),va("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),va("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(Y(a,"borderTopWidth",e,!1,"0px")+" "+Y(a,"borderTopStyle",e,!1,"solid")+" "+Y(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ma)||["#000"])[0]}}),va("borderWidth",{parser:oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),va("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new qa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Qa=function(a){var b,c=this.t,d=c.filter||Y(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!Y(this.data,"filter")):(c.filter=d.replace(x,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(v,"opacity="+e))};va("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(Y(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===Y(a,"visibility",e)&&0!==b&&(h=0),R?f=new qa(i,"opacity",h,b-h,f):(f=new qa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Qa),j&&(f=new qa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ra=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b))},Sa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ra(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};va("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new qa(a,d,0,0,g,2),g.setRatio=Sa,g.pr=-11,c=!0,g.b=o,k=_(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=aa(a,k,_(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Ta=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ba:i[c].p),Ra(g,c);e&&(Ra(g,za),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(va("clearProps",{parser:function(a,b,d,e,f){return f=new qa(a,d,0,0,f,2),f.setRatio=Ta,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ta=j.length;ta--;)wa(j[ta]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=X(a,""),f=this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if(l&&""===x.zIndex&&(j=Y(a,"zIndex",e),("auto"===j||""===j)&&this._addLazySet(x,"zIndex",0)),"string"==typeof b&&(q=x.cssText,j=_(a,e),x.cssText=q+";"+b,j=aa(a,j,_(a)).difs,!R&&w.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,x.cssText=q),b.className?this._firstPT=n=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=n=this.parse(a,b,null),this._transformType){for(v=3===this._transformType,za?m&&(l=!0,""===x.zIndex&&(t=Y(a,"zIndex",e),("auto"===t||""===t)&&this._addLazySet(x,"zIndex",0)),o&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(v?"visible":"hidden"))):x.zoom=1,p=n;p&&p._next;)p=p._next;u=new qa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio=za?Pa:Oa,u.data=this._transform||Na(a,e,!0),u.tween=h,u.pr=-1,f.pop()}if(c){for(;n;){for(s=n._next,p=q;p&&p.pr>n.pr;)p=p._next;(n._prev=p?p._prev:r)?n._prev._next=n:q=n,(n._next=p)?p._prev=n:r=n,n=s}this._firstPT=q}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b)n=b[g],h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=Y(a,g,e)+"",q="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||q&&y.test(n)?(q||(n=ka(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=sa(s,g,m,n,!0,"transparent",c,0,f)):q&&H.test(n)?c=sa(s,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=da(a,g,e),o="px"):"left"===g||"top"===g?(j=$(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(u,"")):(l=parseFloat(n),p=q?n.replace(u,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(r?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=Z(a,g,j,o),"%"===p?(j/=Z(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=Z(a,g,1,p):"px"!==p&&(l=Z(a,g,l,p),p="px"),r&&(l||0===l)&&(n=l+j+p)),r&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==s[g]&&(n||n+""!="NaN"&&null!=n)?(c=new qa(s,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):T("invalid "+g+" tween value: "+b[g]):(c=new qa(s,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Na(this._target,e,!0),this._transformType=this._transform.svg&&xa||!a&&3!==this._transformType?2:3};var Ua=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new qa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ua,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}return b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),a.prototype._kill.call(this,f)};var Va=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Va(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(_(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Va(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Va(a,k,m),i.render(c,!0,!0),Va(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=aa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.r=1),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=1;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._roundProps(h,!0):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(a,b,c){var d;if("function"!=typeof a.setAttribute)return!1;for(d in b)this._addTween(a,"setAttribute",a.getAttribute(d)+"",b[d]+"",d,!1,d),this._overwriteProps.push(d);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(a,b,c){"object"!=typeof b&&(b={rotation:b}),this.finals={};var d,e,f,g,h,i,j=b.useRadians===!0?2*Math.PI:360,k=1e-6;for(d in b)"useRadians"!==d&&(i=(b[d]+"").split("_"),e=i[0],f=parseFloat("function"!=typeof a[d]?a[d]:a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]()),g=this.finals[d]="string"==typeof e&&"="===e.charAt(1)?f+parseInt(e.charAt(0)+"1",10)*Number(e.substr(2)):Number(e)||0,h=g-f,i.length&&(e=i.join("_"),-1!==e.indexOf("short")&&(h%=j,h!==h%(j/2)&&(h=0>h?h+j:h-j)),-1!==e.indexOf("_cw")&&0>h?h=(h+9999999999*j)%j-(h/j|0)*j:-1!==e.indexOf("ccw")&&h>0&&(h=(h-9999999999*j)%j-(h/j|0)*j)),(h>k||-k>h)&&(this._addTween(a,d,f,f+h,d),this._overwriteProps.push(d)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!c.TweenLite){var d,e,f,g,h,i=function(a){var b,d=a.split("."),e=c;for(b=0;b<d.length;b++)e[d[b]]=e=e[d[b]]||{};return e},j=i("com.greensock"),k=1e-10,l=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},m=function(){},n=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),o={},p=function(d,e,f,g){this.sc=o[d]?o[d].sc:[],o[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(j){for(var k,l,m,n,q,r=e.length,s=r;--r>-1;)(k=o[e[r]]||new p(e[r],[])).gsClass?(h[r]=k.gsClass,s--):j&&k.sc.push(this);if(0===s&&f)for(l=("com.greensock."+d).split("."),m=l.pop(),n=i(l.join("."))[m]=this.gsClass=f.apply(f,h),g&&(c[m]=n,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return n}):d===b&&q&&(module.exports=n)),r=0;r<this.sc.length;r++)this.sc[r].check()},this.check(!0)},q=a._gsDefine=function(a,b,c,d){return new p(a,b,c,d)},r=j._class=function(a,b,c){return b=b||function(){},q(a,[],function(){return b},c),b};q.globals=c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?s.concat(b):s},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--k>-1;)for(f=i[k],e=d?r("easing."+f,null,!0):j.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(f=u.prototype,f._calcEnd=!1,f.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},d=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=d.length;--e>-1;)f=d[e]+",Power"+e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn"+(0===e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear=j.easing.Linear.easeIn,v.swing=j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});f=x.prototype,f.addEventListener=function(a,b,c,d,e){e=e||0;var f,i,j=this._listeners[a],k=0;for(null==j&&(this._listeners[a]=j=[]),i=j.length;--i>-1;)f=j[i],f.c===b&&f.s===c?j.splice(i,1):0===k&&f.pr<e&&(k=i+1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this!==g||h||g.wake()},f.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},f.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(d=["ms","moz","webkit","o"],e=d.length;--e>-1&&!y;)y=a[d[e]+"RequestAnimationFrame"],z=a[d[e]+"CancelAnimationFrame"]||a[d[e]+"CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,g,h=A()-B;h>o&&(l+=h-p),B+=h,j.time=(B-l)/1e3,b=j.time-i,(!c||b>0||a===!0)&&(j.frame++,i+=b+(b>=f?.004:f-b),g=!0),a!==!0&&(e=d(r)),g&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/k,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(n&&z?z(e):clearTimeout(e),d=m,e=null,j===g&&(h=!1))},j.wake=function(a){null!==e?j.sleep():a?l+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?m:n&&y?y:function(a){return setTimeout(a,1e3*(i-j.time)+1|0)},j===g&&(h=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),i=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),n=a,void j.fps(c)):n},j.fps(a),setTimeout(function(){"auto"===n&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),f=j.Ticker.prototype=new j.events.EventDispatcher,f.constructor=j.Ticker;var C=r("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){h||g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});g=C.ticker=new j.Ticker,f=C.prototype,f._dirty=f._gc=f._initted=f._paused=!1,f._totalTime=f._time=0,f._rawPrevTime=-1,f._next=f._last=f._onUpdate=f._timeline=f.timeline=null,f._paused=!1;var D=function(){h&&A()-B>2e3&&g.wake(),setTimeout(D,2e3)};D(),f.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},f.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},f.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},f.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},f.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},f.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},f.render=function(a,b,c){},f.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},f.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},f._enabled=function(a,b){return h||g.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},f._kill=function(a,b){return this._enabled(!1,!1)},f.kill=function(a,b){return this._kill(a,b),this},f._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},f._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},f._callback=function(a){var b=this.vars;b[a].apply(b[a+"Scope"]||b.callbackScope||this,b[a+"Params"]||t)},f.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=n(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},f.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},f.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},f.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},f.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},f.totalTime=function(a,b,c){if(h||g.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},f.progress=f.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},f.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},f.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},f.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||k,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},f.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},f.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(h||a||g.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});f=E.prototype=new C,f.constructor=E,f.kill()._gc=!1,f._first=f._last=f._recent=null,f._sortChildren=!1,f.add=f.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},f._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},f.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},f.rawTime=function(){return h||g.wake(),this._totalTime};var F=r("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&n(b))&&"number"!=typeof b[0])for(this._targets=g=l(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(l(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-k,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};f=F.prototype=new C,f.constructor=F,f.kill()._gc=!1,f.ratio=0,f._firstPT=f._targets=f._overwrittenProps=f._startAt=null,f._notifyPluginsOfEnabled=f._lazy=!1,F.version="1.18.4",F.defaultEase=f._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=g,F.autoSleep=120,F.lagSmoothing=function(a,b){g.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.r?b=Math.round(b):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,r:o&&4>o}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h){var i,j,k="get"===c?a[b]:c,l=typeof a[b],m="string"==typeof d&&"="===d.charAt(1),n={t:a,p:b,s:k,f:"function"===l,pg:0,n:e||b,r:f,pr:0,c:m?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-k||0};return"number"!==l&&("function"===l&&"get"===c&&(j=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),
n.s=k=g?a[j](g):a[j]()),"string"==typeof k&&(g||isNaN(k))?(n.fp=g,i=M(k,d,h||F.defaultStringFilter,n),n={t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0}):m||(n.s=parseFloat(k),n.c=parseFloat(d)-n.s||0)),n.c?((n._next=this._firstPT)&&(n._next._prev=n),this._firstPT=n,n):void 0},O=F._internals={isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=g.time,U._startTime=g.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((g.time-V._startTime)*V._timeScale,!1,!1),U.render((g.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),g.frame>=W){W=g.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===g._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||g.sleep()}}},g.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,l=b._startTime+k,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=l&&h._startTime+h.totalDuration()/h._timeScale>l&&((o||!h._initted)&&l-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*k>f-b?k:(f+=a.totalDuration()/a._timeScale/e)>b+k?0:f-b-k};f._init=function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in f.startAt)e[d]=f.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=i&&f.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),i)if(this._time>0)this._startAt=null;else if(0!==h)return}else if(f.runBackwards&&0!==h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(i=!1),c={};for(d in f)S[d]&&"autoCSS"!==d||(c[d]=f[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=i&&f.lazy!==!1,c.immediateRender=i,this._startAt=F.to(this.target,0,c),i){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=j=j?j instanceof u?j:"function"==typeof j?new u(j,f.easeParams):v[j]||F.defaultEase:F.defaultEase,f.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,f.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length;--a>-1;)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],g?g[a]:null)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,g);if(b&&F._onPluginEvent("_onInitAllProps",this),g&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),f.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=f.onUpdate,this._initted=!0},f._initProps=function(b,c,d,e){var f,g,h,i,j,k;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(f in this.vars)if(k=this.vars[f],S[f])k&&(k instanceof Array||k.push&&n(k))&&-1!==k.join("").indexOf("{self}")&&(this.vars[f]=k=this._swapSelfInParams(k,this));else if(P[f]&&(i=new P[f])._onInitTween(b,this.vars[f],this)){for(this._firstPT=j={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g=i._overwriteProps.length;--g>-1;)c[i._overwriteProps[g]]=this._firstPT;(i._priority||i._onInitAllProps)&&(h=!0),(i._onDisable||i._onEnable)&&(this._notifyPluginsOfEnabled=!0),j._next&&(j._next._prev=j)}else c[f]=N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e&&this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),h)},f.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===k&&"isPause"!==this.data)&&j!==a&&(c=!0,j>k&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:k);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==k||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:k)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var l=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===n?l*=l:2===n?l*=l*l:3===n?l*=l*l*l:4===n&&(l*=l*l*l*l),1===m?this.ratio=1-l:2===m?this.ratio=l:.5>a/i?this.ratio=l/2:this.ratio=1-l/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===k&&g!==k&&(this._rawPrevTime=0))}},f._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((n(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},f.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-k,this.render(Math.min(0,-this._delay))),this},f._enabled=function(a,b){if(h||g.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((n(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(f=aa.prototype,aa.version="1.18.0",aa.API=2,f._firstPT=null,f._addTween=N,f.setRatio=L,f._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},f._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},q.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},d=a._gsQueue){for(e=0;e<d.length;e++)d[e]();for(f in o)o[f].func||a.console.log("GSAP encountered missing dependency: com.greensock."+f)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.notTop,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});

(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-flexbox-placeholder-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function o(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(S&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?w.className.baseVal=n:w.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function l(e,t,r,s){var o,l,f,u,d="modernizr",p=i("div"),c=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=s?s[r]:d+(r+1),p.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+d,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=u,w.offsetHeight):p.parentNode.removeChild(p),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?d(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(n[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,s,o){function a(){d&&(delete k.style,delete k.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=m(e,s);if(!r(l,"undefined"))return l}for(var d,p,c,h,v,g=["modernizr","tspan","samp"];!k.style&&g.length;)d=!0,k.modElem=i(g.shift()),k.style=k.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=k.style[h],f(h,"-")&&(h=u(h)),k.style[h]!==t){if(o||r(s,"undefined"))return a(),"pfx"==n?h:!0;try{k.style[h]=s}catch(y){}if(k.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,s,o):(a=(e+" "+E.join(i+" ")+i).split(" "),p(a,n,t))}function g(e,n,r){return v(e,t,t,n,r)}var y=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var w=n.documentElement,S="svg"===w.nodeName.toLowerCase();Modernizr.addTest("placeholder","placeholder"in i("input")&&"placeholder"in i("textarea"));var _="CSS"in e&&"supports"in e.CSS,b="supportsCSS"in e;Modernizr.addTest("supports",_||b);var T=x.testStyles=l,P="Moz O ms Webkit",z=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=z;var E=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=E;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var k={style:N.elem.style};Modernizr._q.unshift(function(){delete k.style}),x.testAllProps=v,x.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in w.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",T(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0)),s(),o(y),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);
// Resource found from http://staff.washington.edu/tft/tests/menus/index.html
// http://staff.washington.edu/tft/tests/menus/simplyaccessible/index.html
var keyCodeMap = {
        48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
        65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
        77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
        96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9"
}

$.fn.setup_navigation = function(settings) {

	settings = jQuery.extend({
		menuHoverClass: 'show-menu',
	}, settings);
	
	// Add ARIA role to menubar and menu items
	$(this).attr('role', 'menubar').find('li').attr('role', 'menuitem');
	
	var top_level_links = $(this).find('> li > a');

	// Added by Terrill: (removed temporarily: doesn't fix the JAWS problem after all)
	// Add tabindex="0" to all top-level links 
	// Without at least one of these, JAWS doesn't read widget as a menu, despite all the other ARIA
	//$(top_level_links).attr('tabindex','0');
	
	// Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
	$(top_level_links).next('ul')
		.attr('data-test','true')
		.attr({ 'aria-hidden': 'true', 'role': 'menu' })
		.find('a')
			.attr('tabIndex',-1);
	
	// Adding aria-haspopup for appropriate items
	$(top_level_links).each(function(){
		if($(this).next('ul').length > 0)
			$(this).parent('li').attr('aria-haspopup', 'true');
	});
	
	$(top_level_links).hover(function(){
		$(this).closest('ul') 
			.attr('aria-hidden', 'false')
			.find('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		$(this).next('ul')
			.attr('aria-hidden', 'false')
			.addClass(settings.menuHoverClass)
			.find('a').attr('tabIndex',0);
	});	
	$(top_level_links).focus(function(){
		$(this).closest('ul')
			// Removed by Terrill 
			// The following was adding aria-hidden="false" to root ul since menu is never hidden
			// and seemed to be causing flakiness in JAWS (needs more testing) 
			// .attr('aria-hidden', 'false') 
			.find('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		$(this).next('ul')
			.attr('aria-hidden', 'false')
			.addClass(settings.menuHoverClass)
			.find('a').attr('tabIndex',0);
	});
	
	// Bind arrow keys for navigation
	$(top_level_links).keydown(function(e){
		if(e.keyCode == 37) {
			e.preventDefault();
			// This is the first item
			if($(this).parent('li').prev('li').length == 0) {
				$(this).parents('ul').find('> li').last().find('a').first().focus();
			} else {
				$(this).parent('li').prev('li').find('a').first().focus();
			}
		} else if(e.keyCode == 38) {
			e.preventDefault();
			if($(this).parent('li').find('ul').length > 0) {
				$(this).parent('li').find('ul')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.last().focus();
			}
		} else if(e.keyCode == 39) {
			e.preventDefault();
			// This is the last item
			if($(this).parent('li').next('li').length == 0) {
				$(this).parents('ul').find('> li').first().find('a').first().focus();
			} else {
				$(this).parent('li').next('li').find('a').first().focus();
			}
		} else if(e.keyCode == 40) {
			e.preventDefault();
			if($(this).parent('li').find('ul').length > 0) {
				$(this).parent('li').find('ul')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.first().focus();
			}
		} else if(e.keyCode == 13 || e.keyCode == 32) {
			// If submenu is hidden, open it
			e.preventDefault();
			$(this).parent('li').find('ul[aria-hidden=true]')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.first().focus();
		} else if(e.keyCode == 27) {
			e.preventDefault();
			$('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		} else {
			$(this).parent('li').find('ul[aria-hidden=false] a').each(function(){
				if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
					$(this).focus();
					return false;
				}
			});
		}
	});
	
	
	var links = $(top_level_links).parent('li').find('ul').find('a');
	$(links).keydown(function(e){
		if(e.keyCode == 38) {
			e.preventDefault();
			// This is the first item
			if($(this).parent('li').prev('li').length == 0) {
				$(this).parents('ul').parents('li').find('a').first().focus();
			} else {
				$(this).parent('li').prev('li').find('a').first().focus();
			}
		} else if(e.keyCode == 40) {
			e.preventDefault();
			if($(this).parent('li').next('li').length == 0) {
				$(this).parents('ul').parents('li').find('a').first().focus();
			} else {
				$(this).parent('li').next('li').find('a').first().focus();
			}
		} else if(e.keyCode == 27 || e.keyCode == 37) {
			e.preventDefault();
			$(this)
				.parents('ul').first()
					.prev('a').focus()
					.parents('ul').first().find('.'+settings.menuHoverClass)
						.attr('aria-hidden', 'true')
						.removeClass(settings.menuHoverClass)
						.find('a')
							.attr('tabIndex',-1);
		} else if(e.keyCode == 32) {
			e.preventDefault();
			window.location = $(this).attr('href');
		} else {
			var found = false;
			$(this).parent('li').nextAll('li').find('a').each(function(){
				if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
					$(this).focus();
					found = true;
					return false;
				}
			});
			
			if(!found) {
				$(this).parent('li').prevAll('li').find('a').each(function(){
					if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
						$(this).focus();
						return false;
					}
				});
			}
		}
	});

		
	// Hide menu if click or focus occurs outside of navigation
	$(this).find('a').last().keydown(function(e){ 
		if(e.keyCode == 9) {
			// If the user tabs out of the navigation hide all menus
			$('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		}
	});
	$(document).click(function(){ $('.'+settings.menuHoverClass).attr('aria-hidden', 'true').removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1); });
	
	$(this).click(function(e){
		e.stopPropagation();
	});
}

if ($(window).width() > 979 ) {

	$('.main-menu').setup_navigation();

	$('.sub-menu').on('mouseleave', function(e) {
		if ( $(this).hasClass('show-menu') ) {
			$(this).attr('aria-hidden', 'true').removeClass('show-menu');
		};
	});

	$('.main-menu').on('mouseleave', function(e) {
		if ( $('.sub-menu').hasClass('show-menu') ) {
			$('.sub-menu').attr('aria-hidden', 'true').removeClass('show-menu');
		};
	});

};

// If there is a '#' in the URL (someone linking directly to a page with an anchor), highlight that section and set focus to it.
// The tabindex attribute is removed AFTER the user navigates away from the element to help address a nasty VoiceOver bug.

if (document.location.hash) {
	var myAnchor = document.location.hash;
	$(myAnchor).attr('tabindex', -1).on('blur focusout', function () {
		$(this).removeAttr('tabindex');
	}).focus();
}



/* This function looks for a change in the hash (activation of an in-page link) and sets focus to and 
	highlights the target element. This is necessary because webkit does not set focus as it should. If 
	the hash is empty (the user hit the back button after activating an in-page link) focus is set to body.
	*/
$(window).bind('hashchange', function() {
	var hash = "#"+window.location.hash.replace(/^#/,'');
	if (hash!="#") {
		$(hash).attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
		}).focus();
	}
	else {
		$("#header").attr('tabindex', -1).on('blur focusout', function () {
			$(this).removeAttr('tabindex');
		}).focus();
	}
});

/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);
/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+abap+actionscript+ada+apacheconf+apl+applescript+asciidoc+aspnet+autoit+autohotkey+bash+basic+batch+c+brainfuck+bro+bison+csharp+cpp+coffeescript+ruby+css-extras+d+dart+django+diff+docker+eiffel+elixir+erlang+fsharp+fortran+gherkin+git+glsl+go+graphql+groovy+haml+handlebars+haskell+haxe+http+icon+inform7+ini+j+jade+java+jolie+json+julia+keyman+kotlin+latex+less+livescript+lolcode+lua+makefile+markdown+matlab+mel+mizar+monkey+nasm+nginx+nim+nix+nsis+objectivec+ocaml+oz+parigp+parser+pascal+perl+php+php-extras+powershell+processing+prolog+properties+protobuf+puppet+pure+python+q+qore+r+jsx+reason+rest+rip+roboconf+crystal+rust+sas+sass+scss+scala+scheme+smalltalk+smarty+sql+stylus+swift+tcl+textile+twig+typescript+vbnet+verilog+vhdl+vim+wiki+xojo+yaml&plugins=line-numbers+unescaped-markup */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},matchGrammar:function(e,t,a,r,i,l,o){var s=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var g=a[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,S=t.length;S>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,N=w.slice(0,A),C=w.slice(j),E=[b,P];N&&(++b,k+=N.length,E.push(N));var L=new s(u,f?n.tokenize(_,f):_,y,_,m);if(E.push(L),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=P&&n.matchGrammar(e,t,a,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,!document.addEventListener||n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.abap={comment:/^\*.*/m,string:/(`|')(\\?.)*?\1/m,"string-template":{pattern:/(\||\})(\\?.)*?(?=\||\{)/,lookbehind:!0,alias:"string"},"eol-comment":{pattern:/(^|\s)".*/m,lookbehind:!0,alias:"comment"},keyword:{pattern:/(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,lookbehind:!0},number:/\b\d+\b/,operator:{pattern:/(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,lookbehind:!0},"string-operator":{pattern:/(\s)&&?(?=\s)/,lookbehind:!0,alias:"keyword"},"token-operator":[{pattern:/(\w)(?:->?|=>|[~|{}])(?=\w)/,lookbehind:!0,alias:"punctuation"},{pattern:/[|{}]/,alias:"punctuation"}],punctuation:/[,.:()]/};
Prism.languages.actionscript=Prism.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),Prism.languages.actionscript["class-name"].alias="function",Prism.languages.markup&&Prism.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\\1|\\?(?!\1)[\s\S])*\2)*\s*\/?>/,lookbehind:!0,inside:{rest:Prism.languages.markup}}});
Prism.languages.ada={comment:/--.*/,string:/"(?:""|[^"\r\f\n])*"/i,number:[{pattern:/\b\d(?:_?\d)*#[0-9A-F](?:_?[0-9A-F])*(?:\.[0-9A-F](?:_?[0-9A-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i},{pattern:/\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i}],"attr-name":/\b'\w+/i,keyword:/\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,"boolean":/\b(?:true|false)\b/i,operator:/<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,punctuation:/\.\.?|[,;():]/,"char":/'.'/,variable:/\b[a-z](?:[_a-z\d])*\b/i};
Prism.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(\w,?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/}},variable:/(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,regex:/\^?.*\$|\^.*\$?/};
Prism.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:{pattern:/'(?:[^'\r\n]|'')*'/,greedy:!0},number:/¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[\+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,"function":/[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸@⌺]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}};
Prism.languages.applescript={comment:[/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/,/--.+/,/#.+/],string:/"(?:\\?.)*?"/,number:/\b-?\d*\.?\d+([Ee]-?\d+)?\b/,operator:[/[&=≠≤≥*+\-\/÷^]|[<>]=?/,/\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],keyword:/\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,"class":{pattern:/\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,alias:"builtin"},punctuation:/[{}():,¬«»《》]/};
!function(a){var i={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}};a.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:i,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{"function":/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:i.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:i,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|TM|R)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}},i.inside.interpreted.inside.rest={macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity},a.languages.asciidoc["passthrough-block"].inside.rest={macro:a.languages.asciidoc.macro},a.languages.asciidoc["literal-block"].inside.rest={callout:a.languages.asciidoc.callout},a.languages.asciidoc.table.inside.rest={"comment-block":a.languages.asciidoc["comment-block"],"passthrough-block":a.languages.asciidoc["passthrough-block"],"literal-block":a.languages.asciidoc["literal-block"],"other-block":a.languages.asciidoc["other-block"],"list-punctuation":a.languages.asciidoc["list-punctuation"],"indented-block":a.languages.asciidoc["indented-block"],comment:a.languages.asciidoc.comment,title:a.languages.asciidoc.title,"attribute-entry":a.languages.asciidoc["attribute-entry"],attributes:a.languages.asciidoc.attributes,hr:a.languages.asciidoc.hr,"page-break":a.languages.asciidoc["page-break"],admonition:a.languages.asciidoc.admonition,"list-label":a.languages.asciidoc["list-label"],callout:a.languages.asciidoc.callout,macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity,"line-continuation":a.languages.asciidoc["line-continuation"]},a.languages.asciidoc["other-block"].inside.rest={table:a.languages.asciidoc.table,"list-punctuation":a.languages.asciidoc["list-punctuation"],"indented-block":a.languages.asciidoc["indented-block"],comment:a.languages.asciidoc.comment,"attribute-entry":a.languages.asciidoc["attribute-entry"],attributes:a.languages.asciidoc.attributes,hr:a.languages.asciidoc.hr,"page-break":a.languages.asciidoc["page-break"],admonition:a.languages.asciidoc.admonition,"list-label":a.languages.asciidoc["list-label"],macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity,"line-continuation":a.languages.asciidoc["line-continuation"]},a.languages.asciidoc.title.inside.rest={macro:a.languages.asciidoc.macro,inline:a.languages.asciidoc.inline,replacement:a.languages.asciidoc.replacement,entity:a.languages.asciidoc.entity},a.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})}(Prism);
Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive tag":{pattern:/<%\s*@.*%>/i,inside:{"page-directive tag":/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,rest:Prism.languages.markup.tag.inside}},"directive tag":{pattern:/<%.*%>/i,inside:{"directive tag":/<%\s*?[$=%#:]{0,2}|%>/i,rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,Prism.languages.insertBefore("inside","punctuation",{"directive tag":Prism.languages.aspnet["directive tag"]},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp comment":/<%--[\s\S]*?--%>/}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp script":{pattern:/(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.csharp||{}}});
Prism.languages.autoit={comment:[/;.*/,{pattern:/(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,lookbehind:!0}],url:{pattern:/(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^\s*)#\w+/m,lookbehind:!0,alias:"keyword"},"function":/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,"boolean":/\b(?:True|False)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,punctuation:/[\[\]().,:]/};
Prism.languages.autohotkey={comment:{pattern:/(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,lookbehind:!0},string:/"(([^"\n\r]|"")*)"/m,"function":/[^\(\); \t,\n\+\*\-=\?>:\\\/<&%\[\]]+?(?=\()/m,tag:/^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,variable:/%\w+%/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,punctuation:/[\{}[\]\(\):,]/,"boolean":/\b(true|false)\b/,selector:/\b(AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,constant:/\b(a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,builtin:/\b(abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,symbol:/\b(alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,important:/#\b(AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,keyword:/\b(Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i};
!function(e){var t={variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,"function":{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},"boolean":{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var a=t.variable[1].inside;a["function"]=e.languages.bash["function"],a.keyword=e.languages.bash.keyword,a.boolean=e.languages.bash.boolean,a.operator=e.languages.bash.operator,a.punctuation=e.languages.bash.punctuation}(Prism);
Prism.languages.basic={string:/"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,comment:{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},number:/(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,keyword:/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,"function":/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,punctuation:/[,;:()]/};
!function(e){var r=/%%?[~:\w]+%?|!\S+!/,t={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},n=/"[^"]*"/,i=/(?:\b|-)\d+\b/;e.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/^for\b|\b(?:in|do)\b/i,string:n,parameter:t,variable:r,number:i,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,lookbehind:!0,inside:{keyword:/^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,string:n,parameter:t,variable:r,number:i,operator:/\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:n,parameter:t,variable:[r,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:i,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^\w+\b/i,string:n,parameter:t,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:r,number:i,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(Prism);
Prism.languages.c=Prism.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0},directive:{pattern:/(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,lookbehind:!0,alias:"keyword"}}},constant:/\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/}),delete Prism.languages.c["class-name"],delete Prism.languages.c["boolean"];
Prism.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/};
Prism.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(TODO|FIXME|XXX)\b/}},string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"boolean":/\b(T|F)\b/,"function":{pattern:/(?:function|hook|event) [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/,inside:{keyword:/^(?:function|hook|event)/}},variable:{pattern:/(?:global|local) [a-zA-Z0-9_]+/i,inside:{keyword:/(?:global|local)/}},builtin:/(@(load(-(sigs|plugin))?|unload|prefixes|ifn?def|else|(end)?if|DIR|FILENAME))|(&?(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,constant:{pattern:/const [a-zA-Z0-9_]+/i,inside:{keyword:/const/}},keyword:/\b(break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,punctuation:/[{}[\];(),.:]/};
Prism.languages.bison=Prism.languages.extend("c",{}),Prism.languages.insertBefore("bison","comment",{bison:{pattern:/^[\s\S]*?%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:Prism.languages.c}},comment:Prism.languages.c.comment,string:Prism.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}});
Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[{pattern:/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,greedy:!0},{pattern:/("|')(\\?.)*?\1/,greedy:!0}],number:/\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i}),Prism.languages.insertBefore("csharp","keyword",{"generic-method":{pattern:/[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,alias:"function",inside:{keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});
Prism.languages.cpp=Prism.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),Prism.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}});
!function(e){var t=/#(?!\{).+/,n={pattern:/#\{[^}]+\}/,alias:"variable"};e.languages.coffeescript=e.languages.extend("javascript",{comment:t,string:[{pattern:/'(?:\\?[^\\])*?'/,greedy:!0},{pattern:/"(?:\\?[^\\])*?"/,greedy:!0,inside:{interpolation:n}}],keyword:/\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),e.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:t,interpolation:n}}}),e.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\?[\s\S])*?`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},rest:e.languages.javascript}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:n}}]}),e.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete e.languages.coffeescript["template-string"]}(Prism);
!function(e){e.languages.ruby=e.languages.extend("clike",{comment:[/#(?!\{[^\r\n]*?\}).*/,/^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m],keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var n={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,greedy:!0,inside:{interpolation:n}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,greedy:!0,inside:{interpolation:n}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0,inside:{interpolation:n}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,greedy:!0,inside:{interpolation:n}}]}(Prism);
Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:\.\w]+/,id:/#[-:\.\w]+/,attribute:/\[[^\]]+\]/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/});
Prism.languages.d=Prism.languages.extend("clike",{string:[/\b[rx]"(\\.|[^\\"])*"[cwd]?/,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/,/\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/,/\bq"(.)[\s\S]*?\1"/,/'(?:\\'|\\?[^']+)'/,/(["`])(\\.|(?!\1)[^\\])*\1[cwd]?/],number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,lookbehind:!0}],keyword:/\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),Prism.languages.d.comment=[/^\s*#!.+/,{pattern:/(^|[^\\])\/\+(?:\/\+[\s\S]*?\+\/|[\s\S])*?\+\//,lookbehind:!0}].concat(Prism.languages.d.comment),Prism.languages.insertBefore("d","comment",{"token-string":{pattern:/\bq\{(?:|\{[^}]*\}|[^}])*\}/,alias:"string"}}),Prism.languages.insertBefore("d","keyword",{property:/\B@\w*/}),Prism.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}});
Prism.languages.dart=Prism.languages.extend("clike",{string:[{pattern:/r?("""|''')[\s\S]*?\1/,greedy:!0},{pattern:/r?("|')(\\?.)*?\1/,greedy:!0}],keyword:[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/],operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),Prism.languages.insertBefore("dart","function",{metadata:{pattern:/@\w+/,alias:"symbol"}});
var _django_template={property:{pattern:/(?:{{|{%)[\s\S]*?(?:%}|}})/g,greedy:!0,inside:{string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},keyword:/\b(?:\||load|verbatim|widthratio|ssi|firstof|for|url|ifchanged|csrf_token|lorem|ifnotequal|autoescape|now|templatetag|debug|cycle|ifequal|regroup|comment|filter|endfilter|if|spaceless|with|extends|block|include|else|empty|endif|endfor|as|endblock|endautoescape|endverbatim|trans|endtrans|[Tt]rue|[Ff]alse|[Nn]one|in|is|static|macro|endmacro|call|endcall|set|endset|raw|endraw)\b/,operator:/[-+=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,"function":/\b(?:_|abs|add|addslashes|attr|batch|callable|capfirst|capitalize|center|count|cut|d|date|default|default_if_none|defined|dictsort|dictsortreversed|divisibleby|e|equalto|escape|escaped|escapejs|even|filesizeformat|first|float|floatformat|force_escape|forceescape|format|get_digit|groupby|indent|int|iriencode|iterable|join|last|length|length_is|linebreaks|linebreaksbr|linenumbers|list|ljust|lower|make_list|map|mapping|number|odd|phone2numeric|pluralize|pprint|random|reject|rejectattr|removetags|replace|reverse|rjust|round|safe|safeseq|sameas|select|selectattr|sequence|slice|slugify|sort|string|stringformat|striptags|sum|time|timesince|timeuntil|title|trim|truncate|truncatechars|truncatechars_html|truncatewords|truncatewords_html|undefined|unordered_list|upper|urlencode|urlize|urlizetrunc|wordcount|wordwrap|xmlattr|yesno)\b/,important:/\b-?\d+(?:\.\d+)?\b/,variable:/\b\w+?\b/,punctuation:/[[\];(),.:]/}}};Prism.languages.django=Prism.languages.extend("markup",{comment:/(?:<!--|{#)[\s\S]*?(?:#}|-->)/}),Prism.languages.django.tag.pattern=/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^>=]+))?)*\s*\/?>/i,Prism.languages.insertBefore("django","entity",_django_template),Prism.languages.insertBefore("inside","tag",_django_template,Prism.languages.django.tag),Prism.languages.javascript&&(Prism.languages.insertBefore("inside","string",_django_template,Prism.languages.django.script),Prism.languages.django.script.inside.string.inside=_django_template),Prism.languages.css&&(Prism.languages.insertBefore("inside","atrule",{tag:_django_template.property},Prism.languages.django.style),Prism.languages.django.style.inside.string.inside=_django_template),Prism.languages.jinja2=Prism.languages.django;
Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m],deleted:/^[-<].*$/m,inserted:/^[+>].*$/m,diff:{pattern:/^!(?!!).+$/m,alias:"important"}};
Prism.languages.docker={keyword:{pattern:/(^\s*)(?:ONBUILD|FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|COPY|VOLUME|USER|WORKDIR|CMD|LABEL|ENTRYPOINT)(?=\s)/mi,lookbehind:true},string:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,comment:/#.*/,punctuation:/---|\.\.\.|[:[\]{}\-,|>?]/};Prism.languages.dockerfile=Prism.languages.docker;
Prism.languages.eiffel={string:[/"([^[]*)\[[\s\S]+?\]\1"/,/"([^{]*)\{[\s\S]+?\}\1"/,/"(?:%\s+%|%"|.)*?"/],comment:/--.*/,"char":/'(?:%'|.)+?'/,keyword:/\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,"boolean":/\b(?:True|False)\b/i,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/};
Prism.languages.elixir={comment:{pattern:/(^|[^#])#(?![{#]).*/m,lookbehind:!0},regex:/~[rR](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|[^}])+\}|<(?:\\>|[^>])+>)[uismxfr]*/,string:[{pattern:/~[cCsSwW](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|#\{[^}]+\}|[^}])+\}|<(?:\\>|[^>])+>)[csa]?/,greedy:!0,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,greedy:!0,inside:{}},{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:"symbol"},"attr-name":/\w+:(?!:)/,capture:{pattern:/(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,lookbehind:!0,alias:"function"},argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:"variable"},attribute:{pattern:/@[\S]+/,alias:"variable"},number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,"boolean":/\b(?:true|false|nil)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},Prism.languages.elixir.string.forEach(function(e){e.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:Prism.util.clone(Prism.languages.elixir)}}}});
Prism.languages.erlang={comment:/%.+/,string:{pattern:/"(?:\\?.)*?"/,greedy:!0},"quoted-function":{pattern:/'(?:\\.|[^'\\])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^'\\])+'/,alias:"atom"},"boolean":/\b(?:true|false)\b/,keyword:/\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,number:[/\$\\?./,/\d+#[a-z0-9]+/i,/(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/],"function":/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/};
Prism.languages.fsharp=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*[\s\S]*?\*\)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,greedy:!0},number:[/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/,/\b-?0b[01]+(y|uy)?\b/,/\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/,/\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/]}),Prism.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/^[^\r\n\S]*#.*/m,alias:"property",inside:{directive:{pattern:/(\s*#)\b(else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}});
Prism.languages.fortran={"quoted-number":{pattern:/[BOZ](['"])[A-F0-9]+\1/i,alias:"number"},string:{pattern:/(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,inside:{comment:{pattern:/(&(?:\r\n?|\n)\s*)!.*/,lookbehind:!0}}},comment:/!.*/,"boolean":/\.(?:TRUE|FALSE)\.(?:_\w+)?/i,number:/(?:\b|[+-])(?:\d+(?:\.\d*)?|\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,keyword:[/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i,/\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,/\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,/\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],operator:[/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,{pattern:/(^|(?!\().)\/(?!\))/,lookbehind:!0}],punctuation:/\(\/|\/\)|[(),;:&]/};
Prism.languages.gherkin={pystring:{pattern:/("""|''')[\s\S]+?\1/,alias:"string"},comment:{pattern:/((^|\r?\n|\r)[ \t]*)#.*/,lookbehind:!0},tag:{pattern:/((^|\r?\n|\r)[ \t]*)@\S*/,lookbehind:!0},feature:{pattern:/((^|\r?\n|\r)[ \t]*)(Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):([^:]+(?:\r?\n|\r|$))*/,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]+/,lookbehind:!0},keyword:/[^:\r\n]+:/}},scenario:{pattern:/((^|\r?\n|\r)[ \t]*)(Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|ghantoH|Grundlage|Hannergrond|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|Lýsing Atburðarásar|Lýsing Dæma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]*/,lookbehind:!0},keyword:/[^:\r\n]+:/}},"table-body":{pattern:/((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,lookbehind:!0,inside:{outline:{pattern:/<[^>]+?>/,alias:"variable"},td:{pattern:/\s*[^\s|][^|]*/,alias:"string"},punctuation:/\|/}},"table-head":{pattern:/((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)/,inside:{th:{pattern:/\s*[^\s|][^|]*/,alias:"variable"},punctuation:/\|/}},atrule:{pattern:/((?:\r?\n|\r)[ \t]+)('ach|'a|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cando|Cand|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|Entonces|En|Epi|E|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kadar|Kada|Kad|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|ugeholl|Und|Un|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t]+)/,lookbehind:!0},string:{pattern:/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/,inside:{outline:{pattern:/<[^>]+?>/,alias:"variable"}}},outline:{pattern:/<[^>]+?>/,alias:"variable"}};
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.glsl=Prism.languages.extend("clike",{comment:[/\/\*[\s\S]*?\*\//,/\/\/(?:\\(?:\r\n|[\s\S])|.)*/],number:/\b(?:0x[\da-f]+|(?:\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?)[ulf]*\b/i,keyword:/\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/}),Prism.languages.insertBefore("glsl","comment",{preprocessor:{pattern:/(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,lookbehind:!0,alias:"builtin"}});
Prism.languages.go=Prism.languages.extend("clike",{keyword:/\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,builtin:/\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,"boolean":/\b(_|iota|nil|true|false)\b/,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,number:/\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,string:{pattern:/("|'|`)(\\?.|\r|\n)*?\1/,greedy:!0}}),delete Prism.languages.go["class-name"];
Prism.languages.graphql={comment:/#.*/,string:{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,"boolean":/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":/[a-z_]\w*(?=\s*:)/i,keyword:[{pattern:/(fragment\s+(?!on)[a-z_]\w*\s+|\.\.\.\s*)on\b/,lookbehind:!0},/\b(?:query|fragment|mutation)\b/],operator:/!|=|\.{3}/,punctuation:/[!(){}\[\]:=,]/};
Prism.languages.groovy=Prism.languages.extend("clike",{keyword:/\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,string:[{pattern:/("""|''')[\s\S]*?\1|(\$\/)(\$\/\$|[\s\S])*?\/\$/,greedy:!0},{pattern:/("|'|\/)(?:\\?.)*?\1/,greedy:!0}],number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),Prism.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(setup|given|when|then|and|cleanup|expect|where):/}),Prism.languages.insertBefore("groovy","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}}),Prism.hooks.add("wrap",function(e){if("groovy"===e.language&&"string"===e.type){var t=e.content[0];if("'"!=t){var n=/([^\\])(\$(\{.*?\}|[\w\.]+))/;"$"===t&&(n=/([^\$])(\$(\{.*?\}|[\w\.]+))/),e.content=e.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),e.content=Prism.highlight(e.content,{expression:{pattern:n,lookbehind:!0,inside:Prism.languages.groovy}}),e.classes.push("/"===t?"regex":"gstring")}}});
!function(e){e.languages.haml={"multiline-comment":{pattern:/((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*((?:\r?\n|\r)\2[\t ]+.+)*/,lookbehind:!0,alias:"comment"},"multiline-code":[{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*((?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*((?:\r?\n|\r)\2[\t ]+.+)/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*((?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,lookbehind:!0,inside:{rest:e.languages.ruby}}],filter:{pattern:/((?:^|\r?\n|\r)([\t ]*)):[\w-]+((?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},markup:{pattern:/((?:^|\r?\n|\r)[\t ]*)<.+/,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,lookbehind:!0},tag:{pattern:/((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,lookbehind:!0,inside:{attributes:[{pattern:/(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,lookbehind:!0,inside:{rest:e.languages.ruby}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,lookbehind:!0},"attr-name":/[\w:-]+(?=\s*!?=|\s*[,)])/,punctuation:/[=(),]/}},{pattern:/\[[^\]]+\]/,inside:{rest:e.languages.ruby}}],punctuation:/[<>]/}},code:{pattern:/((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,lookbehind:!0,inside:{rest:e.languages.ruby}},interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.ruby}},punctuation:{pattern:/((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,lookbehind:!0}};for(var t="((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+",r=["css",{filter:"coffee",language:"coffeescript"},"erb","javascript","less","markdown","ruby","scss","textile"],n={},a=0,i=r.length;i>a;a++){var l=r[a];l="string"==typeof l?{filter:l,language:l}:l,e.languages[l.language]&&(n["filter-"+l.filter]={pattern:RegExp(t.replace("{{filter_name}}",l.filter)),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[l.language]}})}e.languages.insertBefore("haml","filter",n)}(Prism);
!function(e){var a=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:a,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(\\?.)*?\1/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,"boolean":/\b(true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\s\S]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(a,function(a){for(var n=e.tokenStack.length;-1!==e.backupCode.indexOf("___HANDLEBARS"+n+"___");)++n;return e.tokenStack[n]=a,"___HANDLEBARS"+n+"___"}))}),e.hooks.add("before-insert",function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(a){if("handlebars"===a.language){for(var n=0,t=Object.keys(a.tokenStack);n<t.length;++n){var r=t[n],o=a.tokenStack[r];a.highlightedCode=a.highlightedCode.replace("___HANDLEBARS"+r+"___",e.highlight(o,a.grammar,"handlebars").replace(/\$/g,"$$$$"))}a.element.innerHTML=a.highlightedCode}})}(Prism);
Prism.languages.haskell={comment:{pattern:/(^|[^-!#$%*+=?&@|~.:<>^\\\/])(--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,lookbehind:!0},"char":/'([^\\']|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,string:{pattern:/"([^\\"]|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,greedy:!0},keyword:/\b(case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,import_statement:{pattern:/(\r?\n|\r|^)\s*import\s+(qualified\s+)?([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*(\s+as\s+([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*)?(\s+hiding\b)?/m,inside:{keyword:/\b(import|qualified|as|hiding)\b/}},builtin:/\b(abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,number:/\b(\d+(\.\d+)?(e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,operator:/\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*`/,hvariable:/\b([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*\b/,constant:/\b([A-Z][_a-zA-Z0-9']*\.)*[A-Z][_a-zA-Z0-9']*\b/,punctuation:/[{}[\];(),.:]/};
Prism.languages.haxe=Prism.languages.extend("clike",{string:{pattern:/(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^}]+\})/,lookbehind:!0,inside:{interpolation:{pattern:/^\$\w*/,alias:"variable"}}}}},keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,operator:/\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/}),Prism.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,greedy:!0}}),Prism.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#\w+/,alias:"builtin"},metadata:{pattern:/@:?\w+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"variable"}}),Prism.languages.haxe.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.haxe),delete Prism.languages.haxe["class-name"];
Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)};
Prism.languages.icon={comment:/#.*/,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.|_(?:\r?\n|\r))*\1/,greedy:!0},number:/\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,"builtin-keyword":{pattern:/&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,alias:"variable"},directive:{pattern:/\$\w+/,alias:"builtin"},keyword:/\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,"function":/(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,operator:/[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,punctuation:/[\[\](){},;]/};
Prism.languages.inform7={string:{pattern:/"[^"]*"/,inside:{substitution:{pattern:/\[[^\]]+\]/,inside:{delimiter:{pattern:/\[|\]/,alias:"punctuation"}}}}},comment:{pattern:/\[[^\]]+\]/,greedy:!0},title:{pattern:/^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,alias:"important"},number:{pattern:/(^|[^-])(?:(?:\b|-)\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,lookbehind:!0},verb:{pattern:/(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,lookbehind:!0},property:{pattern:/(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,lookbehind:!0,alias:"symbol"},position:{pattern:/(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,lookbehind:!0,alias:"variable"},punctuation:/[.,:;(){}]/},Prism.languages.inform7.string.inside.substitution.inside.rest=Prism.util.clone(Prism.languages.inform7),Prism.languages.inform7.string.inside.substitution.inside.rest.text={pattern:/\S(?:\s*\S)*/,alias:"comment"};
Prism.languages.ini={comment:/^[ \t]*;.*$/m,selector:/^[ \t]*\[.*?\]/m,constant:/^[ \t]*[^\s=]+?(?=[ \t]*=)/m,"attr-value":{pattern:/=.*/,inside:{punctuation:/^[=]/}}};
Prism.languages.j={comment:/\bNB\..*/,string:{pattern:/'(?:''|[^'\r\n])*'/,greedy:!0},keyword:/\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,verb:{pattern:/(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[\^?]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,alias:"keyword"},number:/\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,adverb:{pattern:/[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,alias:"builtin"},operator:/[=a][.:]|_\./,conjunction:{pattern:/&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,alias:"variable"},punctuation:/[()]/};
!function(e){e.languages.jade={comment:{pattern:/(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},filter:{pattern:/(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"}}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:{rest:e.languages.markup}},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:if|unless|else|case|when|default|while)\b/,alias:"keyword"},rest:e.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,"function":/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:e.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:{rest:e.languages.javascript}},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:{rest:e.languages.javascript}},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:{rest:e.languages.javascript}}],punctuation:/[.\-!=|]+/};for(var t="(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+",n=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","hogan","less","livescript","markdown","mustache","plates",{filter:"sass",language:"scss"},"stylus","swig"],a={},i=0,r=n.length;r>i;i++){var s=n[i];s="string"==typeof s?{filter:s,language:s}:s,e.languages[s.language]&&(a["filter-"+s.filter]={pattern:RegExp(t.replace("{{filter_name}}",s.filter),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},rest:e.languages[s.language]}})}e.languages.insertBefore("jade","filter",a)}(Prism);
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),Prism.languages.insertBefore("java","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}});
Prism.languages.jolie=Prism.languages.extend("clike",{keyword:/\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|extender|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/g,builtin:/\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,number:/\b\d*\.?\d+(?:e[+-]?\d+)?l?\b/i,operator:/->|<<|[!+-<>=*]?=|[:<>!?*\/%^]|&&|\|\||--?|\+\+?/g,symbol:/[|;@]/,punctuation:/[,.]/,string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0}}),delete Prism.languages.jolie["class-name"],delete Prism.languages.jolie["function"],Prism.languages.insertBefore("jolie","keyword",{"function":{pattern:/((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,lookbehind:!0},aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{withExtension:{pattern:/\bwith\s+\w+/,inside:{keyword:/\bwith\b/}},"function":{pattern:/\w+/},punctuation:{pattern:/,/}}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:{pattern:/,/},"function":{pattern:/\w+/g},symbol:{pattern:/=>/g}}}});
Prism.languages.json={property:/"(?:\\.|[^\\"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^\\"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,"boolean":/\b(true|false)\b/gi,"null":/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json;
Prism.languages.julia={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,keyword:/\b(abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|let|local|macro|module|print|println|quote|return|try|type|typealias|using|while)\b/,"boolean":/\b(true|false)\b/,number:/\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?\b/i,operator:/\+=?|-=?|\*=?|\/[\/=]?|\\=?|\^=?|%=?|÷=?|!=?=?|&=?|\|[=>]?|\$=?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.keyman={comment:/\bc\s.*/i,"function":/\[\s*((CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*([TKU]_[a-z0-9_?]+|".+?"|'.+?')\s*\]/i,string:/("|')((?!\1).)*\1/,bold:[/&(baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,/\b(bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],keyword:/\b(any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,atrule:/\b(ansi|begin|unicode|group|using keys|match|nomatch)\b/i,number:/\b(U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\,()]/,tag:/\$(keyman|kmfl|weaver|keymanweb|keymanonly):/i};
!function(n){n.languages.kotlin=n.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,lookbehind:!0},"function":[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete n.languages.kotlin["class-name"],n.languages.insertBefore("kotlin","string",{"raw-string":{pattern:/(["'])\1\1[\s\S]*?\1{3}/,alias:"string"}}),n.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),n.languages.insertBefore("kotlin","function",{label:{pattern:/\w+@|@\w+/,alias:"symbol"}});var e=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:"variable"},rest:n.util.clone(n.languages.kotlin)}},{pattern:/\$\w+/,alias:"variable"}];n.languages.kotlin.string.inside=n.languages.kotlin["raw-string"].inside={interpolation:e}}(Prism);
!function(a){var e=/\\([^a-z()[\]]|[a-z\*]+)/i,n={"equation-command":{pattern:e,alias:"regex"}};a.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})([\s\S]*?)(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$(?:\\?[\s\S])*?\$|\\\((?:\\?[\s\S])*?\\\)|\\\[(?:\\?[\s\S])*?\\\]/,inside:n,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\s\S]*?)(?=\\end\{\2\})/,lookbehind:!0,inside:n,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},"function":{pattern:e,alias:"selector"},punctuation:/[[\]{}&]/}}(Prism);
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less.function}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}});
Prism.languages.livescript={"interpolated-string":{pattern:/("""|")(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,inside:{variable:{pattern:/(^|[^\\])#[a-z_](?:-?[a-z]|\d)*/m,lookbehind:!0},interpolation:{pattern:/(^|[^\\])#\{[^}]+\}/m,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^#\{|\}$/,alias:"variable"}}},string:/[\s\S]+/}},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0}],string:[{pattern:/('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/<\[[\s\S]*?\]>/,greedy:!0},/\\[^\s,;\])}]+/],regex:[{pattern:/\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,greedy:!0,inside:{comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0}}},{pattern:/\/(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}/,greedy:!0}],keyword:{pattern:/(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,lookbehind:!0},"keyword-operator":{pattern:/(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,lookbehind:!0,alias:"operator"},"boolean":{pattern:/(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,lookbehind:!0},argument:{pattern:/(^|(?!\.&\.)[^&])&(?!&)\d*/m,lookbehind:!0,alias:"variable"},number:/\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,identifier:/[a-z_](?:-?[a-z]|\d)*/i,operator:[{pattern:/( )\.(?= )/,lookbehind:!0},/\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],punctuation:/[(){}\[\]|.,:;`]/},Prism.languages.livescript["interpolated-string"].inside.interpolation.inside.rest=Prism.languages.livescript;
Prism.languages.lolcode={comment:[/\bOBTW\s+[\s\S]*?\s+TLDR\b/,/\bBTW.+/],string:{pattern:/"(?::.|[^"])*"/,inside:{variable:/:\{[^}]+\}/,symbol:[/:\([a-f\d]+\)/i,/:\[[^\]]+\]/,/:[)>o":]/]},greedy:!0},number:/(-|\b)\d*\.?\d+/,symbol:{pattern:/(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,lookbehind:!0,inside:{keyword:/A(?=\s)/}},label:{pattern:/((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,lookbehind:!0,alias:"string"},"function":{pattern:/((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,lookbehind:!0},keyword:[{pattern:/(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,lookbehind:!0},/'Z(?=\s|,|$)/],"boolean":{pattern:/(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,lookbehind:!0},variable:{pattern:/(^|\s)IT(?=\s|,|$)/,lookbehind:!0},operator:{pattern:/(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,lookbehind:!0},punctuation:/\.{3}|…|,|!/};
Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,"function":/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/};
Prism.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},builtin:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,symbol:{pattern:/^[^:=\r\n]+(?=\s*:(?!=))/m,inside:{variable:/\$+(?:[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:[/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,{pattern:/(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,lookbehind:!0}],operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/};
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold);
Prism.languages.matlab={string:/\B'(?:''|[^'\n])*'/,comment:[/%\{[\s\S]*?\}%/,/%.+/],number:/\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,keyword:/\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,"function":/(?!\d)\w+(?=\s*\()/,operator:/\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,punctuation:/\.{3}|[.,;\[\](){}!]/};
Prism.languages.mel={comment:/\/\/.*/,code:{pattern:/`(?:\\.|[^\\`\r\n])*`/,greedy:!0,alias:"italic",inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"}}},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},variable:/\$\w+/,number:/(?:\b|-)(?:0x[\da-fA-F]+|\d+\.?\d*)/,flag:{pattern:/-[^\d\W]\w*/,alias:"operator"},keyword:/\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,"function":/\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,operator:[/\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,:;?\[\](){}]/},Prism.languages.mel.code.inside.rest=Prism.util.clone(Prism.languages.mel);
Prism.languages.mizar={comment:/::.+/,keyword:/@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,parameter:{pattern:/\$(?:10|\d)/,alias:"variable"},variable:/\w+(?=:)/,number:/(?:\b|-)\d+\b/,operator:/\.\.\.|->|&|\.?=/,punctuation:/\(#|#\)|[,:;\[\](){}]/};
Prism.languages.monkey={string:/"[^"\r\n]*"/,comment:[/^#Rem\s+[\s\S]*?^#End/im,/'.+/],preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,alias:"comment"},"function":/\w+(?=\()/,"type-char":{pattern:/(\w)[?%#$]/,lookbehind:!0,alias:"variable"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+((?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/};
Prism.languages.nasm={comment:/;.*$/m,string:/("|'|`)(\\?.)*?\1/m,label:{pattern:/(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,lookbehind:!0,alias:"function"},keyword:[/\[?BITS (16|32|64)\]?/m,{pattern:/(^\s*)section\s*[a-zA-Z\.]+:?/im,lookbehind:!0},/(?:extern|global)[^;\r\n]*/im,/(?:CPU|FLOAT|DEFAULT).*$/m],register:{pattern:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(bp|sp|si|di)|[cdefgs]s)\b/i,alias:"variable"},number:/(\b|-|(?=\$))(0[hx][\da-f]*\.?[\da-f]+(p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-\/%<>=&|$!]/};
Prism.languages.nginx=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},keyword:/\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i}),Prism.languages.insertBefore("nginx","keyword",{variable:/\$[a-z_]+/i});
Prism.languages.nim={comment:/#.*/,string:{pattern:/(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,greedy:!0},number:/\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,keyword:/\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,"function":{pattern:/(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,inside:{operator:/\*$/}},ignore:{pattern:/`[^`\r\n]+`/,inside:{punctuation:/`/}},operator:{pattern:/(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,lookbehind:!0},punctuation:/[({\[]\.|\.[)}\]]|[`(){}\[\],:]/};
Prism.languages.nix={comment:/\/\*[\s\S]*?\*\/|#.*/,string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,greedy:!0,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,lookbehind:!0,inside:{antiquotation:{pattern:/^\$(?=\{)/,alias:"variable"}}}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:"variable"},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,"function":/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,"boolean":/\b(?:true|false)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},Prism.languages.nix.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.nix);
Prism.languages.nsis={comment:{pattern:/(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,lookbehind:!0},string:{pattern:/("|')(\\?.)*?\1/,greedy:!0},keyword:{pattern:/(^\s*)(Abort|Add(BrandingImage|Size)|AdvSplash|Allow(RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(Font|Gradient|Image)|BrandingText|BringToFront|Call(InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(Directory|Font|ShortCut)|Delete(INISec|INIStr|RegKey|RegValue)?|Detail(Print|sButtonText)|Dialer|Dir(Text|Var|Verify)|EnableWindow|Enum(RegKey|RegValue)|Exch|Exec(Shell|Wait)?|ExpandEnvStrings|File(BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(Close|First|Next|Window)|FlushINI|Get(CurInstType|CurrentAddress|DlgItem|DLLVersion(Local)?|ErrorLevel|FileTime(Local)?|FullPathName|Function(Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(ButtonText|Colors|Dir(RegKey)?)|InstProgressFlags|Inst(Type(GetText|SetText)?)|Int(CmpU?|Fmt|Op)|IsWindow|Lang(DLL|String)|License(BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(Set|Text)|Manifest(DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(Dialogs|Exec)|NSISdl|OutFile|Page(Callbacks)?|Pop|Push|Quit|Read(EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(AutoClose|BrandingImage|Compress|Compressor(DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|RebootFlag|RegView|ShellVarContext|Silent)|Show(InstDetails|UninstDetails|Window)|Silent(Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(INIStr|RegBin|RegDWORD|RegExpandStr|RegStr|Uninstaller)|XPStyle)\b/m,lookbehind:!0},property:/\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(CR|CU|DD|LM|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,constant:/\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,variable:/\$\w+/i,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/--?|\+\+?|<=?|>=?|==?=?|&&?|\|?\||[?*\/~^%]/,punctuation:/[{}[\];(),.:]/,important:{pattern:/(^\s*)!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)\b/im,lookbehind:!0}};
Prism.languages.objectivec=Prism.languages.extend("c",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,string:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/});
Prism.languages.ocaml={comment:/\(\*[\s\S]*?\*\)/,string:[{pattern:/"(?:\\.|[^\\\r\n"])*"/,greedy:!0},{pattern:/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,greedy:!0}],number:/\b-?(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,type:{pattern:/\B['`][a-z\d_]*/i,alias:"variable"},directive:{pattern:/\B#[a-z\d_]+/i,alias:"function"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,"boolean":/\b(?:false|true)\b/,operator:/:=|[=<>@^|&+\-*\/$%!?~][!$%&\*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,punctuation:/[(){}\[\]|_.,:;]/};
Prism.languages.oz={comment:/\/\*[\s\S]*?\*\/|%.*/,string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},atom:{pattern:/'(?:[^'\\]|\\.)*'/,greedy:!0,alias:"builtin"},keyword:/[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,"function":[/[a-z][A-Za-z\d]*(?=\()/,{pattern:/(\{)[A-Z][A-Za-z\d]*/,lookbehind:!0}],number:/\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,variable:/\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,"attr-name":/\w+(?=:)/,operator:/:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,punctuation:/[\[\](){}.:;?]/};
Prism.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},keyword:function(){var r=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return r=r.map(function(r){return r.split("").join(" *")}).join("|"),RegExp("\\b(?:"+r+")\\b")}(),"function":/\w[\w ]*?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/};
Prism.languages.parser=Prism.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.\{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},"function":{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/}),Prism.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,greedy:!0,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:Prism.languages.parser.keyword,variable:Prism.languages.parser.variable,"function":Prism.languages.parser.function,"boolean":/\b(?:true|false)\b/,number:/\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,escape:Prism.languages.parser.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:Prism.languages.parser.punctuation}}}),Prism.languages.insertBefore("inside","punctuation",{expression:Prism.languages.parser.expression,keyword:Prism.languages.parser.keyword,variable:Prism.languages.parser.variable,"function":Prism.languages.parser.function,escape:Prism.languages.parser.escape,"parser-punctuation":{pattern:Prism.languages.parser.punctuation,alias:"punctuation"}},Prism.languages.parser.tag.inside["attr-value"]);
Prism.languages.pascal={comment:[/\(\*[\s\S]+?\*\)/,/\{[\s\S]+?\}/,/\/\/.*/],string:{pattern:/(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,greedy:!0},keyword:[{pattern:/(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,lookbehind:!0}],number:[/[+-]?(?:[&%]\d+|\$[a-f\d]+)/i,/([+-]|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],operator:[/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,{pattern:/(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,lookbehind:!0}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/};
Prism.languages.perl={comment:[{pattern:/(^\s*)=\w+[\s\S]*?=cut.*/m,lookbehind:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0}],string:[{pattern:/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,greedy:!0},{pattern:/\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,greedy:!0},{pattern:/("|`)(?:[^\\]|\\[\s\S])*?\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,greedy:!0},{pattern:/\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*>|\b_\b/,alias:"symbol"},vstring:{pattern:/v\d+(\.\d+)*|\d+(\.\d+){2,}/,alias:"string"},"function":{pattern:/sub [a-z0-9_]+/i,inside:{keyword:/sub/}},keyword:/\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,punctuation:/[{}[\];(),:]/};
Prism.languages.php=Prism.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),Prism.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),Prism.languages.insertBefore("php","keyword",{delimiter:{pattern:/\?>|<\?(?:php|=)?/i,alias:"important"},variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),Prism.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),Prism.languages.markup&&(Prism.hooks.add("before-highlight",function(e){"php"===e.language&&/(?:<\?php|<\?)/gi.test(e.code)&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi,function(a){for(var n=e.tokenStack.length;-1!==e.backupCode.indexOf("___PHP"+n+"___");)++n;return e.tokenStack[n]=a,"___PHP"+n+"___"}),e.grammar=Prism.languages.markup)}),Prism.hooks.add("before-insert",function(e){"php"===e.language&&e.backupCode&&(e.code=e.backupCode,delete e.backupCode)}),Prism.hooks.add("after-highlight",function(e){if("php"===e.language&&e.tokenStack){e.grammar=Prism.languages.php;for(var a=0,n=Object.keys(e.tokenStack);a<n.length;++a){var t=n[a],r=e.tokenStack[t];e.highlightedCode=e.highlightedCode.replace("___PHP"+t+"___",'<span class="token php language-php">'+Prism.highlight(r,e.grammar,"php").replace(/\$/g,"$$$$")+"</span>")}e.element.innerHTML=e.highlightedCode}}));
Prism.languages.insertBefore("php","variable",{"this":/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/(static|self|parent)/,punctuation:/(::|\\)/}}});
Prism.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(`?[\s\S])*?"/,greedy:!0,inside:{"function":{pattern:/[^`]\$\(.*?\)/,inside:{}}}},{pattern:/'([^']|'')*'/,greedy:!0}],namespace:/\[[a-z][\s\S]*?\]/i,"boolean":/\$(true|false)\b/i,variable:/\$\w+\b/i,"function":[/\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(Csv|Json|StringData)|Convert-Path|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-Process|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(Command|Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(Job|PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(Computer|Service)|Restore-Computer|Resume-(Job|Service)|Save-Help|Select-(Object|String|Xml)|Send-MailMessage|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-Object|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData|Help|List|TypeData)|Use-Transaction|Wait-(Event|Job|Process)|Where-Object|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i,/\b(ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(\W?)(!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(and|x?or)|(Not)?(Like|Match|Contains|In)|Replace|Join|is(Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/},Prism.languages.powershell.string[0].inside.boolean=Prism.languages.powershell.boolean,Prism.languages.powershell.string[0].inside.variable=Prism.languages.powershell.variable,Prism.languages.powershell.string[0].inside.function.inside=Prism.util.clone(Prism.languages.powershell);
Prism.languages.processing=Prism.languages.extend("clike",{keyword:/\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),Prism.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z][A-Za-z\d_]*)\b/,alias:"variable"}}),Prism.languages.processing["function"].pattern=/[a-z0-9_]+(?=\s*\()/i,Prism.languages.processing["class-name"].alias="variable";
Prism.languages.prolog={comment:[/%.+/,/\/\*[\s\S]*?\*\//],string:{pattern:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,variable:/\b[A-Z_]\w*/,"function":/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+\.?\d*/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/};
Prism.languages.properties={comment:/^[ \t]*[#!].*$/m,"attr-value":{pattern:/(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|.)+/m,lookbehind:!0},"attr-name":/^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[ =:]| )/m,punctuation:/[=:]/};
Prism.languages.protobuf=Prism.languages.extend("clike",{keyword:/\b(package|import|message|enum)\b/,builtin:/\b(required|repeated|optional|reserved)\b/,primitive:{pattern:/\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,alias:"symbol"}});
!function(e){e.languages.puppet={heredoc:[{pattern:/(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,alias:"string",inside:{punctuation:{pattern:/(\().+?(?=\))/,lookbehind:!0}}}],"multiline-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},regex:{pattern:/((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,lookbehind:!0,inside:{"extended-regex":{pattern:/^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,inside:{comment:/#.*/}}}},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,inside:{"double-quoted":{pattern:/^"[\s\S]*"$/,inside:{}}}},variable:{pattern:/\$(?:::)?\w+(?:::\w+)*/,inside:{punctuation:/::/}},"attr-name":/(?:\w+|\*)(?=\s*=>)/,"function":[{pattern:/(\.)(?!\d)\w+/,lookbehind:!0},/\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],number:/\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,"boolean":/\b(?:true|false)\b/,keyword:/\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,datatype:{pattern:/\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,alias:"symbol"},operator:/=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,punctuation:/[\[\]{}().,;]|:+/};var n=[{pattern:/(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,lookbehind:!0,inside:{"short-variable":{pattern:/(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}},delimiter:{pattern:/^\$/,alias:"variable"},rest:e.util.clone(e.languages.puppet)}},{pattern:/(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}}];e.languages.puppet.heredoc[0].inside.interpolation=n,e.languages.puppet.string.inside["double-quoted"].inside.interpolation=n}(Prism);
!function(e){e.languages.pure={"inline-lang":{pattern:/%<[\s\S]+?%>/,inside:{lang:{pattern:/(^%< *)-\*-.+?-\*-/,lookbehind:!0,alias:"comment"},delimiter:{pattern:/^%<.*|%>$/,alias:"punctuation"}}},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,greedy:!0,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0},/#!.+/],string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},number:{pattern:/((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,lookbehind:!0},keyword:/\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,"function":/\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,special:{pattern:/\b__[a-z]+__\b/i,alias:"builtin"},operator:/(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,punctuation:/[(){}\[\];,|]/};var t=["c",{lang:"c++",alias:"cpp"},"fortran","ats","dsp"],a="%< *-\\*- *{lang}\\d* *-\\*-[\\s\\S]+?%>";t.forEach(function(t){var r=t;if("string"!=typeof t&&(r=t.alias,t=t.lang),e.languages[r]){var i={};i["inline-lang-"+r]={pattern:RegExp(a.replace("{lang}",t.replace(/([.+*?\/\\(){}\[\]])/g,"\\$1")),"i"),inside:e.util.clone(e.languages.pure["inline-lang"].inside)},i["inline-lang-"+r].inside.rest=e.util.clone(e.languages[r]),e.languages.insertBefore("pure","inline-lang",i)}}),e.languages.c&&(e.languages.pure["inline-lang"].inside.rest=e.util.clone(e.languages.c))}(Prism);
Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/};
Prism.languages.q={string:/"(?:\\.|[^"\\\r\n])*"/,comment:[{pattern:/([\t )\]}])\/.*/,lookbehind:!0},{pattern:/(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,lookbehind:!0},/^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,/^#!.+/m],symbol:/`(?::\S+|[\w.]*)/,datetime:{pattern:/0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,alias:"number"},number:/\b-?(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,keyword:/\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,adverb:{pattern:/['\/\\]:?|\beach\b/,alias:"function"},verb:{pattern:/(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,alias:"operator"},punctuation:/[(){}\[\];.]/};
Prism.languages.qore=Prism.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\])*\1/,greedy:!0},variable:/\$(?!\d)\w+\b/,keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,"boolean":/\b(?:true|false)\b/i,operator:{pattern:/(^|[^\.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},"function":/\$?\b(?!\d)\w+(?=\()/});
Prism.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\?.)*?\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},"boolean":/\b(?:TRUE|FALSE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:NaN|Inf)\b/,/\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/],keyword:/\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/};
!function(a){var e=a.util.clone(a.languages.javascript);a.languages.jsx=a.languages.extend("markup",e),a.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+(?:[\w\.:-]+(?:=(?:("|')(\\?[\s\S])*?\1|[^\s'">=]+|(\{[\s\S]*?\})))?|\{\.{3}\w+\}))*\s*\/?>/i,a.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,a.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}\w+\}/,inside:{punctuation:/\{|\}|\./,"attr-value":/\w+/}}},a.languages.jsx.tag);var s=a.util.clone(a.languages.jsx);delete s.punctuation,s=a.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:s}),a.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:s,alias:"language-javascript"}},a.languages.jsx.tag)}(Prism);
Prism.languages.reason=Prism.languages.extend("clike",{comment:{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},string:{pattern:/"(\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/}),Prism.languages.insertBefore("reason","class-name",{character:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'])'/,alias:"string"},constructor:{pattern:/\b[A-Z]\w*\b(?!\s*\.)/,alias:"variable"},label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete Prism.languages.reason.function;
Prism.languages.rest={table:[{pattern:/(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,lookbehind:!0,inside:{punctuation:/\||(?:\+[=-]+)+\+/}},{pattern:/(\s*)(?:=+ +)+=+((?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,lookbehind:!0,inside:{punctuation:/[=-]+/}}],"substitution-def":{pattern:/(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,lookbehind:!0,inside:{substitution:{pattern:/^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,alias:"attr-value",inside:{punctuation:/^\||\|$/}},directive:{pattern:/( +)[^:]+::/,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}}}},"link-target":[{pattern:/(^\s*\.\. )\[[^\]]+\]/m,lookbehind:!0,alias:"string",inside:{punctuation:/^\[|\]$/}},{pattern:/(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,lookbehind:!0,alias:"string",inside:{punctuation:/^_|:$/}}],directive:{pattern:/(^\s*\.\. )[^:]+::/m,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}},comment:{pattern:/(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,lookbehind:!0},title:[{pattern:/^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,inside:{punctuation:/^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}},{pattern:/(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,lookbehind:!0,inside:{punctuation:/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}}],hr:{pattern:/((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,lookbehind:!0,alias:"punctuation"},field:{pattern:/(^\s*):[^:\r\n]+:(?= )/m,lookbehind:!0,alias:"attr-name"},"command-line-option":{pattern:/(^\s*)(?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,lookbehind:!0,alias:"symbol"},"literal-block":{pattern:/::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,inside:{"literal-block-punctuation":{pattern:/^::/,alias:"punctuation"}}},"quoted-literal-block":{pattern:/::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,inside:{"literal-block-punctuation":{pattern:/^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,alias:"punctuation"}}},"list-bullet":{pattern:/(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,lookbehind:!0,alias:"punctuation"},"doctest-block":{pattern:/(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,lookbehind:!0,inside:{punctuation:/^>>>/}},inline:[{pattern:/(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,lookbehind:!0,inside:{bold:{pattern:/(^\*\*).+(?=\*\*$)/,lookbehind:!0},italic:{pattern:/(^\*).+(?=\*$)/,lookbehind:!0},"inline-literal":{pattern:/(^``).+(?=``$)/,lookbehind:!0,alias:"symbol"},role:{pattern:/^:[^:]+:|:[^:]+:$/,alias:"function",inside:{punctuation:/^:|:$/}},"interpreted-text":{pattern:/(^`).+(?=`$)/,lookbehind:!0,alias:"attr-value"},substitution:{pattern:/(^\|).+(?=\|$)/,lookbehind:!0,alias:"attr-value"},punctuation:/\*\*?|``?|\|/}}],link:[{pattern:/\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,alias:"string",inside:{punctuation:/^\[|\]_$/}},{pattern:/(?:\b[a-z\d](?:[_.:+]?[a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,alias:"string",inside:{punctuation:/^_?`|`$|`?_?_$/}}],punctuation:{pattern:/(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,lookbehind:!0}};
Prism.languages.rip={comment:/#.*/,keyword:/(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,builtin:/@|\bSystem\b/,"boolean":/\b(?:true|false)\b/,date:/\b\d{4}-\d{2}-\d{2}\b/,time:/\b\d{2}:\d{2}:\d{2}\b/,datetime:/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,character:/\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},symbol:/:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,string:{pattern:/("|')(\\?.)*?\1/,greedy:!0},number:/[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,punctuation:/(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,reference:/[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/};
Prism.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*)[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/};
!function(e){e.languages.crystal=e.languages.extend("ruby",{keyword:[/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[0-9a-fA-F_]*[0-9a-fA-F]|(?:\d(?:[0-9_]*\d)?)(?:\.[0-9_]*\d)?(?:[eE][+-]?[0-9_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/});var t=e.util.clone(e.languages.crystal);e.languages.insertBefore("crystal","string",{attribute:{pattern:/@\[.+?\]/,alias:"attr-name",inside:{delimiter:{pattern:/^@\[|\]$/,alias:"tag"},rest:t}},expansion:[{pattern:/\{\{.+?\}\}/,inside:{delimiter:{pattern:/^\{\{|\}\}$/,alias:"tag"},rest:t}},{pattern:/\{%.+?%\}/,inside:{delimiter:{pattern:/^\{%|%\}$/,alias:"tag"},rest:t}}]})}(Prism);
Prism.languages.rust={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:[{pattern:/b?r(#*)"(?:\\?.)*?"\1/,greedy:!0},{pattern:/b?("|')(?:\\?.)*?\1/,greedy:!0}],keyword:/\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,attribute:{pattern:/#!?\[.+?\]/,greedy:!0,alias:"attr-name"},"function":[/[a-z0-9_]+(?=\s*\()/i,/[a-z0-9_]+!(?=\s*\(|\[)/i],"macro-rules":{pattern:/[a-z0-9_]+!/i,alias:"function"},number:/\b-?(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,"closure-params":{pattern:/\|[^|]*\|(?=\s*[{-])/,inside:{punctuation:/[\|:,]/,operator:/[&*]/}},punctuation:/[{}[\];(),:]|\.+|->/,operator:/[-+*\/%!^=]=?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/};
Prism.languages.sas={datalines:{pattern:/^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,alias:"string",inside:{keyword:{pattern:/^(\s*)(?:(?:data)?lines|cards)/i,lookbehind:!0},punctuation:/;/}},comment:[{pattern:/(^\s*|;\s*)\*.*;/m,lookbehind:!0},/\/\*[\s\S]+?\*\//],datetime:{pattern:/'[^']+'(?:dt?|t)\b/i,alias:"number"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},keyword:/\b(?:data|else|format|if|input|proc\s\w+|quit|run|then)\b/i,number:/(?:\B-|\b)(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,operator:/\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,punctuation:/[$%@.(){}\[\];,\\]/};
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete e.languages.sass.atrule;var a=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:a,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:a,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,delete e.languages.sass.selector,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-_\w]+/,variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-_\w]+|#\{\$[-_\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-_\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},"boolean":/\b(?:true|false)\b/,"null":/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.util.clone(Prism.languages.scss);
Prism.languages.scala=Prism.languages.extend("java",{keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0}],builtin:/\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,number:/\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,symbol:/'[^\d\s\\]\w*/}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala["function"];
Prism.languages.scheme={comment:/;.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*?"|'[^('\s]*/,greedy:!0},keyword:{pattern:/(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,lookbehind:!0},builtin:{pattern:/(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,lookbehind:!0},number:{pattern:/(\s|\))[-+]?\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?\b/,lookbehind:!0},"boolean":/#[tf]/,operator:{pattern:/(\()(?:[-+*%\/]|[<>]=?|=>?)/,lookbehind:!0},"function":{pattern:/(\()[^\s()]*(?=\s)/,lookbehind:!0},punctuation:/[()]/};
Prism.languages.smalltalk={comment:/"(?:""|[^"])+"/,string:/'(?:''|[^'])+'/,symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*?\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:nil|true|false|self|super|new)\b/,character:{pattern:/\$./,alias:"string"},number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/};
!function(e){var t=/\{\*[\s\S]+?\*\}|\{[\s\S]+?\}/g,a="{literal}",n="{/literal}",o=!1;e.languages.smarty=e.languages.extend("markup",{smarty:{pattern:t,inside:{delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\?.)*?\1/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],"function":[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|\->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/}}}),e.languages.insertBefore("smarty","tag",{"smarty-comment":{pattern:/\{\*[\s\S]*?\*\}/,alias:["smarty","comment"]}}),e.hooks.add("before-highlight",function(e){"smarty"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(t,function(t){if(t===n&&(o=!1),!o){t===a&&(o=!0);for(var r=e.tokenStack.length;-1!==e.backupCode.indexOf("___SMARTY"+r+"___");)++r;return e.tokenStack[r]=t,"___SMARTY"+r+"___"}return t}))}),e.hooks.add("before-insert",function(e){"smarty"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(t){if("smarty"===t.language){for(var a=0,n=Object.keys(t.tokenStack);a<n.length;++a){var o=n[a],r=t.tokenStack[o];t.highlightedCode=t.highlightedCode.replace("___SMARTY"+o+"___",e.highlight(r,t.grammar,"smarty").replace(/\$/g,"$$$$"))}t.element.innerHTML=t.highlightedCode}})}(Prism);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,greedy:!0,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,"function":/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,"boolean":/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
!function(n){var t={url:/url\((["']?).*?\1\)/i,string:{pattern:/("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,number:/\b\d+(?:\.\d+)?%?/,"boolean":/\b(?:true|false)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],punctuation:/[{}()\[\];:,]/};t.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:n.util.clone(t)},t.func={pattern:/[\w-]+\([^)]*\).*/,inside:{"function":/^[^(]+/,rest:n.util.clone(t)}},n.languages.stylus={comment:{pattern:/(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},"atrule-declaration":{pattern:/(^\s*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:t}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:t}},statement:{pattern:/(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:t}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:t.interpolation}},rest:t}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,lookbehind:!0,inside:{interpolation:t.interpolation,punctuation:/[{},]/}},func:t.func,string:t.string,interpolation:t.interpolation,punctuation:/[{}()\[\];:.]/}}(Prism);
Prism.languages.swift=Prism.languages.extend("clike",{string:{pattern:/("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/\\\((?:[^()]|\([^)]+\))+\)/,inside:{delimiter:{pattern:/^\\\(|\)$/,alias:"variable"}}}}},keyword:/\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,number:/\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,constant:/\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,atrule:/@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,builtin:/\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/}),Prism.languages.swift.string.inside.interpolation.inside.rest=Prism.util.clone(Prism.languages.swift);
Prism.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/,lookbehind:!0},{pattern:/(\$){[^}]+}/,lookbehind:!0},{pattern:/(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/m,lookbehind:!0}],"function":{pattern:/(^\s*proc[ \t]+)[^\s]+/m,lookbehind:!0},builtin:[{pattern:/(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,lookbehind:!0},/\b(elseif|else)\b/],scope:{pattern:/(^\s*)(global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^\s*|\[)(after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,punctuation:/[{}()\[\]]/};
!function(e){var i="(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",n={css:{pattern:/\{[^}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^)]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/};e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:RegExp("^[a-z]\\w*(?:"+i+"|[<>=()])*\\."),inside:{modifier:{pattern:RegExp("(^[a-z]\\w*)(?:"+i+"|[<>=()])+(?=\\.)"),lookbehind:!0,inside:e.util.clone(n)},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:RegExp("^[*#]+(?:"+i+")?\\s+.+","m"),inside:{modifier:{pattern:RegExp("(^[*#]+)"+i),lookbehind:!0,inside:e.util.clone(n)},punctuation:/^[*#]+/}},table:{pattern:RegExp("^(?:(?:"+i+"|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:"+i+"|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|","m"),inside:{modifier:{pattern:RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:"+i+"|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),lookbehind:!0,inside:e.util.clone(n)},punctuation:/\||^\./}},inline:{pattern:RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:"+i+")?.+?\\1"),inside:{bold:{pattern:RegExp("((^\\*\\*?)(?:"+i+")?).+?(?=\\2)"),lookbehind:!0},italic:{pattern:RegExp("((^__?)(?:"+i+")?).+?(?=\\2)"),lookbehind:!0},cite:{pattern:RegExp("(^\\?\\?(?:"+i+")?).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:RegExp("(^@(?:"+i+")?).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:RegExp("(^\\+(?:"+i+")?).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:RegExp("(^-(?:"+i+")?).+?(?=-)"),lookbehind:!0},span:{pattern:RegExp("(^%(?:"+i+")?).+?(?=%)"),lookbehind:!0},modifier:{pattern:RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])"+i),lookbehind:!0,inside:e.util.clone(n)},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:RegExp('"(?:'+i+')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:RegExp('(^"(?:'+i+')?)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:RegExp('(^")'+i),lookbehind:!0,inside:e.util.clone(n)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:RegExp("!(?:"+i+"|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:RegExp("(^!(?:"+i+"|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:RegExp("(^!)(?:"+i+"|[<>=()])+"),lookbehind:!0,inside:e.util.clone(n)},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^)]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((TM|R|C)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}});var t={inline:e.util.clone(e.languages.textile.phrase.inside.inline),link:e.util.clone(e.languages.textile.phrase.inside.link),image:e.util.clone(e.languages.textile.phrase.inside.image),footnote:e.util.clone(e.languages.textile.phrase.inside.footnote),acronym:e.util.clone(e.languages.textile.phrase.inside.acronym),mark:e.util.clone(e.languages.textile.phrase.inside.mark)};e.languages.textile.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.textile.phrase.inside.inline.inside.bold.inside=t,e.languages.textile.phrase.inside.inline.inside.italic.inside=t,e.languages.textile.phrase.inside.inline.inside.inserted.inside=t,e.languages.textile.phrase.inside.inline.inside.deleted.inside=t,e.languages.textile.phrase.inside.inline.inside.span.inside=t,e.languages.textile.phrase.inside.table.inside.inline=t.inline,e.languages.textile.phrase.inside.table.inside.link=t.link,e.languages.textile.phrase.inside.table.inside.image=t.image,e.languages.textile.phrase.inside.table.inside.footnote=t.footnote,e.languages.textile.phrase.inside.table.inside.acronym=t.acronym,e.languages.textile.phrase.inside.table.inside.mark=t.mark}(Prism);
Prism.languages.twig={comment:/\{#[\s\S]*?#\}/,tag:{pattern:/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,inside:{ld:{pattern:/^(?:\{\{\-?|\{%\-?\s*\w+)/,inside:{punctuation:/^(?:\{\{|\{%)\-?/,keyword:/\w+/}},rd:{pattern:/\-?(?:%\}|\}\})$/,inside:{punctuation:/.*/}},string:{pattern:/("|')(?:\\?.)*?\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,"boolean":/\b(?:true|false|null)\b/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,operator:[{pattern:/(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],property:/\b[a-zA-Z_][a-zA-Z0-9_]*\b/,punctuation:/[()\[\]{}:.,]/}},other:{pattern:/\S(?:[\s\S]*\S)?/,inside:Prism.languages.markup}};
Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|false|true|module|declare|constructor|string|Function|any|number|boolean|Array|enum|symbol|namespace|abstract|require|type)\b/}),Prism.languages.ts=Prism.languages.typescript;
Prism.languages.vbnet=Prism.languages.extend("basic",{keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0}]});
Prism.languages.verilog={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},property:/\B\$\w+\b/,constant:/\B`\w+\b/,"function":/[a-z\d_]+(?=\()/i,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/};
Prism.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\\r\n]|\\?(?:\r\n|[\s\S]))*?"/,constant:/\b(?:use|library)\b/i,keyword:/\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,"boolean":/\b(?:true|false)\b/i,"function":/[a-z0-9_]+(?=\()/i,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*\/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,punctuation:/[{}[\];(),.:]/};
Prism.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,"function":/\w+(?=\()/,keyword:/\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/};
Prism.languages.wiki=Prism.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+).+?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?}}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:Prism.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),Prism.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,inside:Prism.languages.markup.tag.inside}}}});
Prism.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,inside:{keyword:/^Rem/i}},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],symbol:/#(?:If|Else|ElseIf|Endif|Pragma)\b/i,keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,punctuation:/[.,;:()]/};
Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:/(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,lookbehind:!0,greedy:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./};
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var n,a=e.code.match(/\n(?!$)/g),l=a?a.length+1:1,r=new Array(l+1);r=r.join("<span></span>"),n=document.createElement("span"),n.setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=r,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){if("markup"==e.language){if(e.element.matches("script[type='text/plain']")){var t=document.createElement("code"),n=document.createElement("pre");return n.className=t.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"</script>"),t.textContent=e.code,n.appendChild(t),e.element.parentNode.replaceChild(n,e.element),e.element=t,void 0}var n=e.element.parentNode;!e.code&&n&&"pre"==n.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}}))}();

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),w=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(w=a.watchers.length;w--;)a.watchers[w].recalculateLocation();p=a.documentHeight}}function c(){for(u=a.watchers.length;u--;)a.watchers[u].update();for(u=a.watchers.length;u--;)a.watchers[u].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,w,u;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener):this.item.addEventListener("scroll",this.DOMListener),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=w},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)T=t[E],T.callback.call(s,e,s),T.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||u.top,bottom:i.bottom||u.bottom}:this.offsets=u,this.callbacks={};for(var d=0,f=w.length;d<f;d++)s.callbacks[w[d]]=[];this.locked=!1;var m,v,b,I,E,T;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,w=s.eventTypes,u=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+w.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+w.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=w.length;i<o;i++)e.callbacks[w[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=w.length;f<m;f++){var v=w[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
function a(a,b){if(b){var c=!a.getAttribute("viewBox")&&b.getAttribute("viewBox"),d=document.createDocumentFragment(),e=b.cloneNode(!0);for(c&&a.setAttribute("viewBox",c);e.childNodes.length;)d.appendChild(e.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=document.createElement("x");c.innerHTML=b.responseText,b.s.splice(0).map(function(b){a(b[0],c.querySelector("#"+b[1].replace(/(\W)/g,"\\$1")))})}},b.onreadystatechange()}function c(c){function d(){for(var c;c=e[0];){var j=c.parentNode;if(j&&/svg/i.test(j.nodeName)){var k=c.getAttribute("xlink:href");if(f&&(!g||g(k,j,c))){var l=k.split("#"),m=l[0],n=l[1];if(j.removeChild(c),m.length){var o=i[m]=i[m]||new XMLHttpRequest;o.s||(o.s=[],o.open("GET",m),o.send()),o.s.push([j,n]),b(o)}else a(j,document.getElementById(n))}}}h(d,17)}c=c||{};var e=document.getElementsByTagName("use"),f="shim"in c?c.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,g=c.validate,h=window.requestAnimationFrame||setTimeout,i={};f&&d()}return c});
//# sourceMappingURL=maps/plugins.js.map
