/*
 AngularJS v1.2.0-rc.2
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(C,n,D){'use strict';n.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(A,t){var u=n.noop,v=n.forEach,B=t.$$selectors,p="$$ngAnimateState",z={running:!0};A.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope",function(r,n,t,g,m,h){function w(a){if(a){var e=[],d={};a=a.substr(1).split(".");a.push("");for(var b=0;b<a.length;b++){var s=a[b],f=B[s];f&&!d[s]&&(e.push(n.get(f)),d[s]=!0)}return e}}function f(a,e,d,b,f,h){function n(a){v(a,
    function(a){(a.endFn||u)(!0)})}function c(){c.hasBeenRun||(c.hasBeenRun=!0,d.removeData(p),(h||u)())}var l=(" "+((d.attr("class")||"")+" "+e)).replace(/\s+/g,"."),k=[];v(w(l),function(c,d){k.push({start:c[a]})});b||(b=f?f.parent():d.parent());f={running:!0};(b.inheritedData(p)||f).running?m(h||u,0,!1):(b=d.data(p)||{},b.running&&(n(b.animations),b.done()),d.data(p,{running:!0,animations:k,done:c}),v(k,function(b,f){var l=function(){a:{k[f].done=!0;(k[f].endFn||u)();for(var a=0;a<k.length;a++)if(!k[a].done)break a;
    c()}};b.start?b.endFn="addClass"==a||"removeClass"==a?b.start(d,e,l):b.start(d,l):l()}))}g.data(p,z);return{enter:function(a,e,d,b){r.enter(a,e,d);h.$$postDigest(function(){f("enter","ng-enter",a,e,d,function(){b&&m(b,0,!1)})})},leave:function(a,e){h.$$postDigest(function(){f("leave","ng-leave",a,null,null,function(){r.leave(a,e)})})},move:function(a,e,d,b){r.move(a,e,d);h.$$postDigest(function(){f("move","ng-move",a,null,null,function(){b&&m(b,0,!1)})})},addClass:function(a,e,d){f("addClass",e,a,
    null,null,function(){r.addClass(a,e,d)})},removeClass:function(a,e,d){f("removeClass",e,a,null,null,function(){r.removeClass(a,e,d)})},enabled:function(a){arguments.length&&(z.running=!a);return!z.running}}}]);t.register("",["$window","$sniffer","$timeout",function(r,p,u){function g(c,l,k){function q(a){var c=0;a=n.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){c=Math.max(parseFloat(a)||0,c)});return c}if(p.transitions||p.animations){if(-1==["ng-enter","ng-leave","ng-move"].indexOf(l)){var g=0;
    h(c,function(a){a.nodeType==v&&(a=r.getComputedStyle(a)||{},g=Math.max(q(a[f+d]),q(a[e+d]),g))});if(0<g){k();return}}c.addClass(l);var m=0;h(c,function(c){if(c.nodeType==v){c=r.getComputedStyle(c)||{};var l=Math.max(q(c[f+b]),q(c[e+b])),k=Math.max(q(c[w+b]),q(c[a+b])),h=Math.max(q(c[f+d]),q(c[e+d])),g=Math.max(q(c[w+d]),q(c[a+d]));0<g&&(g*=Math.max(parseInt(c[w+t])||0,parseInt(c[a+t])||0,1));m=Math.max(k+g,l+h,m)}});if(0<m){var x=c[0];x.style[f+s]="none";x.style[e+s]="none";var y="";h(l.split(" "),
    function(a,c){y+=(0<c?" ":"")+a+"-active"});c.prop("clientWidth");x.style[f+s]="";x.style[e+s]="";c.addClass(y);u(k,1E3*m,!1);return function(a){c.removeClass(l);c.removeClass(y);a&&k()}}c.removeClass(l)}k()}function m(a,d){var b="";a=n.isArray(a)?a:a.split(/\s+/);h(a,function(a,c){a&&0<a.length&&(b+=(0<c?" ":"")+a+d)});return b}var h=n.forEach,w="animation",f="transition",a=p.vendorPrefix+"Animation",e=p.vendorPrefix+"Transition",d="Duration",b="Delay",s="Property",t="IterationCount",v=1;return{enter:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        b){return g(a,"ng-enter",b)},leave:function(a,b){return g(a,"ng-leave",b)},move:function(a,b){return g(a,"ng-move",b)},addClass:function(a,b,d){return g(a,m(b,"-add"),d)},removeClass:function(a,b,d){return g(a,m(b,"-remove"),d)}}}])}])})(window,window.angular);
/*
 //@ sourceMappingURL=angular-animate.min.js.map
 */
