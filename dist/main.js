!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t(require,exports,module):e.gulpWrapUmd=t()}(this,function(){var e,t,r,n={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeArrayBuffer:function(e){var t=e.length/4*3,r=new ArrayBuffer(t);return this.decode(e,r),r},decode:function(e,t){var r=this._keyStr.indexOf(e.charAt(e.length-1)),n=this._keyStr.indexOf(e.charAt(e.length-2)),i=e.length/4*3;64==r&&i--,64==n&&i--;var a,c,h,l,d,f,o,s,u=0,y=0;for(a=t?new Uint8Array(t):new Uint8Array(i),e=e.replace(/[^A-Za-z0-9\+\/=]/g,""),u=0;i>u;u+=3)d=this._keyStr.indexOf(e.charAt(y++)),f=this._keyStr.indexOf(e.charAt(y++)),o=this._keyStr.indexOf(e.charAt(y++)),s=this._keyStr.indexOf(e.charAt(y++)),c=d<<2|f>>4,h=(15&f)<<4|o>>2,l=(3&o)<<6|s,a[u]=c,64!=o&&(a[u+1]=h),64!=s&&(a[u+2]=l);return a}};return e=function(t){var r;return t.length>0?(r=t.length,t[r-1]+(e(t.slice(0,r-1))<<8)):0},t=function(e){var t;return function(){var r,n,i;for(i=[],r=0,n=e.length;n>r;r++)t=e[r],i.push(String.fromCharCode(t));return i}().join("")},r=function(r){var i,a,c,h,l;return r=r.replace("\n","").split(" "),2<=(l=r.length)&&3>=l?"ssh-rsa"===r[0]?(h=n.decode(r[1]),7===e(h.slice(0,4))?"ssh-rsa"===t(h.slice(4,11))?(a=e(h.slice(11,15)),i=15+a,c=e(h.slice(i,i+4)),i+=4+c,i===h.length?!0:"invalid key length"):"invalid key type: "+t(h.slice(4,11)):"invalid key type length"):"invalid key type: "+r[0]:"invalid key structure"}});