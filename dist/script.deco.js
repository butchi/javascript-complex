!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=function(){function b(){c(this,b),this[0]=(arguments.length<=0?void 0:arguments[0])||0,this[1]=(arguments.length<=1?void 0:arguments[1])||0}return h(b,[{key:"abs",value:function(){return this.re*this.re+this.im*this.im}},{key:"arg",value:function(){return Math.atan2(this.im,this.re)}},{key:"re",get:function(){return this[0]}},{key:"im",get:function(){return this[1]}}]),b}();t["default"]=i},{}],2:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=function(){function b(){var u=this;if(c(this,b),this._length=0,this.source=[],0===arguments.length);else if(1===arguments.length){var t=arguments.length<=0?void 0:arguments[0];"number"==typeof t?this._length=t:t instanceof Array?(this._length=t.length,this.source=t):this._length=0}this._buffer=new ArrayBuffer(this._length*b.BYTES_PER_ELEMENT),this._float32Array=new Float32Array(this._buffer),this._float32Array.fill(0),this.source.forEach(function(b,t){u._float32Array[2*t]=b})}return h(b,[{key:"copyWithin",value:function(){}},{key:"entries",value:function(){}},{key:"every",value:function(){}},{key:"fill",value:function(){}},{key:"filter",value:function(){}},{key:"find",value:function(){}},{key:"findIndex",value:function(){}},{key:"forEach",value:function(){}},{key:"includes",value:function(){}},{key:"indexOf",value:function(){}},{key:"join",value:function(){}},{key:"keys",value:function(){}},{key:"lastIndexOf",value:function(){}},{key:"map",value:function(){}},{key:"move",value:function(){}},{key:"reduce",value:function(){}},{key:"reduceRight",value:function(){}},{key:"reverse",value:function(){}},{key:"set",value:function(){var b=this,u=(arguments.length<=0?void 0:arguments[0])||[],t=(arguments.length<=1?void 0:arguments[1])||0;u.forEach(function(u,c){u instanceof Complex?(b._float32Array[2*(c+t)]=u.re,b._float32Array[2*(c+t)+1]=u.im):b._float32Array[2*(c+t)]=u})}},{key:"slice",value:function(){}},{key:"some",value:function(){}},{key:"sort",value:function(){}},{key:"subarray",value:function(){}},{key:"values",value:function(){}},{key:"toLocaleString",value:function(){}},{key:"toString",value:function(){return this._float32Array.toString()}},{key:"valueOf",value:function(){return this._float32Array}},{key:"buffer",get:function(){return this._buffer}},{key:"byteLength",get:function(){}},{key:"byteOffset",get:function(){}},{key:"length",get:function(){return this._length}}]),b}();i.BYTES_PER_ELEMENT=8,t["default"]=i},{}],3:[function(b,u,t){(function(u){"use strict";function t(b){return b&&b.__esModule?b:{"default":b}}var c=b("./module/Complex"),h=t(c),i=b("./module/Complex64Array"),bb=t(i);!function(){u.Complex=h["default"],u.Complex64Array=bb["default"]}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./module/Complex":1,"./module/Complex64Array":2}]},{},[3]);