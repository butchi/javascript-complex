!function b(u,t,c){function h(bb,ub){if(!t[bb]){if(!u[bb]){var tb="function"==typeof require&&require;if(!ub&&tb)return tb(bb,!0);if(i)return i(bb,!0);var cb=new Error("Cannot find module '"+bb+"'");throw cb.code="MODULE_NOT_FOUND",cb}var hb=t[bb]={exports:{}};u[bb][0].call(hb.exports,function(b){var t=u[bb][1][b];return h(t?t:b)},hb,hb.exports,b,u,t,c)}return t[bb].exports}for(var i="function"==typeof require&&require,bb=0;bb<c.length;bb++)h(c[bb]);return h}({1:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}function h(){if(null==(arguments.length<=1?void 0:arguments[1])){var b=arguments.length<=0?void 0:arguments[0],u=bb.get(b);if(u)return u;var t=new Complex(b);return bb.set(b,t),t}var c=new Complex(arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1]),h=c.valueOf(),i=bb.get(h);return i?i:(bb.set(h,c),c)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),bb=new Map,ub=function(){function b(){if(c(this,b),null==(arguments.length<=1?void 0:arguments[1])){var u=new Float64Array(1);u[0]=arguments.length<=0?void 0:arguments[0],this._float32Array=new Float32Array(u.buffer)}else this._float32Array=new Float32Array(2),this._float32Array[0]=arguments.length<=0?void 0:arguments[0],this._float32Array[1]=arguments.length<=1?void 0:arguments[1]}return i(b,[{key:"abs",value:function(){return this.re*this.re+this.im*this.im}},{key:"arg",value:function(){return Math.atan2(this.im,this.re)}},{key:"toString",value:function(){var b=this.re,u=this.im;return 0===b?0===u?"0":1===u?"i":-1===u?"-i":u+"i":0===u?""+b:0>u?b+"-"+Math.abs(u)+"i":b+"+"+u+"i"}},{key:"valueOf",value:function(){var b=new Float64Array(this._float32Array.buffer);return b[0]}},{key:"re",get:function(){return this._float32Array[0]}},{key:"im",get:function(){return this._float32Array[1]}}]),b}(),tb=function(b,u){return this?new ub(b,u):h(b,u)};tb.prototype=ub.prototype,t["default"]=tb},{}],2:[function(b,u,t){"use strict";function c(b,u){if(!(b instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function b(b,u){for(var t=0;t<u.length;t++){var c=u[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(b,c.key,c)}}return function(u,t,c){return t&&b(u.prototype,t),c&&b(u,c),u}}(),i=function(){function b(){var u=this;c(this,b),this._length=0;var t=[];if(0===arguments.length);else if(1===arguments.length){var h=arguments.length<=0?void 0:arguments[0];"number"==typeof h?this._length=h:h instanceof Array?(this._length=h.length,t=h):this._length=0}this._buffer=new ArrayBuffer(this._length*b.BYTES_PER_ELEMENT),this._float32Array=new Float32Array(this._buffer),this._float32Array.fill(0),t.forEach(function(b,t){u._float32Array[2*t]=b})}return h(b,[{key:"copyWithin",value:function(){}},{key:"entries",value:function(){}},{key:"every",value:function(){}},{key:"fill",value:function(){}},{key:"filter",value:function(){}},{key:"find",value:function(){}},{key:"findIndex",value:function(){}},{key:"forEach",value:function(){}},{key:"includes",value:function(){}},{key:"indexOf",value:function(){}},{key:"join",value:function(){}},{key:"keys",value:function(){}},{key:"lastIndexOf",value:function(){}},{key:"map",value:function(){}},{key:"move",value:function(){}},{key:"reduce",value:function(){}},{key:"reduceRight",value:function(){}},{key:"reverse",value:function(){}},{key:"set",value:function(){var b=this,u=(arguments.length<=0?void 0:arguments[0])||[],t=(arguments.length<=1?void 0:arguments[1])||0;u.forEach(function(u,c){u instanceof Complex?(b._float32Array[2*(c+t)]=u.re,b._float32Array[2*(c+t)+1]=u.im):b._float32Array[2*(c+t)]=u})}},{key:"slice",value:function(){}},{key:"some",value:function(){}},{key:"sort",value:function(){}},{key:"subarray",value:function(){}},{key:"values",value:function(){}},{key:"toLocaleString",value:function(){}},{key:"toString",value:function(){for(var b=[],u=0;u<this.length;u++)b.push(this.getItem(u));return b.join(",")}},{key:"valueOf",value:function(){return this._float32Array}},{key:"getItem",value:function(b){var u=this._float32Array[2*b],t=this._float32Array[2*b+1],c=Complex(u,t);return c}},{key:"buffer",get:function(){return this._buffer}},{key:"byteLength",get:function(){}},{key:"byteOffset",get:function(){}},{key:"length",get:function(){return this._length}},{key:"re",get:function(){for(var b=Math.ceil(this.length/2),u=new Float32Array(b),t=0;b>t;t++)u[t]=this._float32Array[2*t];return u}},{key:"im",get:function(){for(var b=Math.ceil(this.length/2),u=new Float32Array(b),t=0;b>t;t++)u[t]=this._float32Array[2*t+1];return u}}]),b}();i.BYTES_PER_ELEMENT=8,t["default"]=i},{}],3:[function(b,u,t){(function(u){"use strict";function t(b){return b&&b.__esModule?b:{"default":b}}var c=b("./module/Complex"),h=t(c),i=b("./module/Complex64Array"),bb=t(i);!function(){u.Complex=h["default"],u.Complex64Array=bb["default"]}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./module/Complex":1,"./module/Complex64Array":2}]},{},[3]);