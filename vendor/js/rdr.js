/*! RDR 1.0.0 (Development) compiled on 2014-10-22 */
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Handlebars = root.Handlebars || factory();
  }
}(this, function () {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  /* istanbul ignore next */
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (string == null) {
      return "";
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  __exports__.appendContextPath = appendContextPath;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "2.0.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn) {
      if (toString.call(name) === objectType) {
        if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function(name) {
      delete this.helpers[name];
    },

    registerPartial: function(name, partial) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function(name) {
      delete this.partials[name];
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(/* [args, ]options */) {
      if(arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
      } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }

          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }

        return fn(context, options);
      }
    });

    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new Exception('Must pass iterator to #each');
      }

      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      var contextPath;
      if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));

              if (contextPath) {
                data.contextPath = contextPath + i;
              }
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) {
                data.key = key;
                data.index = i;
                data.first = (i === 0);

                if (contextPath) {
                  data.contextPath = contextPath + key;
                }
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      var fn = options.fn;

      if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
          options = {data:data};
        }

        return fn(context, options);
      } else {
        return options.inverse(this);
      }
    });

    instance.registerHelper('log', function(message, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, message);
    });

    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, message) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, message);
        }
      }
    }
  };
  __exports__.logger = logger;
  var log = logger.log;
  __exports__.log = log;
  var createFrame = function(object) {
    var frame = Utils.extend({}, object);
    frame._parent = object;
    return frame;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
  var createFrame = __dependency3__.createFrame;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new Exception("No environment passed to template");
    }
    if (!templateSpec || !templateSpec.main) {
      throw new Exception('Unknown template object: ' + typeof templateSpec);
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
      if (hash) {
        context = Utils.extend({}, context, hash);
      }

      var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

      if (result == null && env.compile) {
        var options = { helpers: helpers, partials: partials, data: data, depths: depths };
        partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
        result = partials[name](context, options);
      }
      if (result != null) {
        if (indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      lookup: function(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function(i) {
        return templateSpec[i];
      },

      programs: [],
      program: function(i, data, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths) {
          programWrapper = program(this, i, fn, data, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(this, i, fn);
        }
        return programWrapper;
      },

      data: function(data, depth) {
        while (data && depth--) {
          data = data._parent;
        }
        return data;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = Utils.extend({}, common, param);
        }

        return ret;
      },

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    var ret = function(context, options) {
      options = options || {};
      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths;
      if (templateSpec.useDepths) {
        depths = options.depths ? [context].concat(options.depths) : [context];
      }

      return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
    };
    ret.isTop = true;

    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);

        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
      }
    };

    ret._child = function(i, data, depths) {
      if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
      }

      return program(container, i, templateSpec[i], data, depths);
    };
    return ret;
  }

  __exports__.template = template;function program(container, i, fn, data, depths) {
    var prog = function(context, options) {
      options = options || {};

      return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
    };
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo) {
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = strip;
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = !!(params.length || hash);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      this.eligibleHelper = this.isHelper || id.isSimple;

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, hash, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.hash = hash;
      this.strip = strip;

      this.strip.inlineStandalone = true;
    },

    BlockNode: function(mustache, program, inverse, strip, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;
      this.strip = strip;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    RawBlockNode: function(mustache, content, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if (mustache.sexpr.id.original !== close) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close, this);
      }

      content = new AST.ContentNode(content, locInfo);

      this.type = 'block';
      this.mustache = mustache;
      this.program = new AST.ProgramNode([content], {}, locInfo);
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.original = this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0,
          depthString = '';

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
            depthString += '../';
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;
      this.idName   = depthString + this.string;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
      this.stringModeValue = id.stringModeValue;
      this.idName = '@' + id.stringModeValue;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    NumberNode: function(number, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "NUMBER";
      this.original =
        this.number = number;
      this.stringModeValue = Number(number);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;

      this.strip = {
        inlineStandalone: true
      };
    }
  };


  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* istanbul ignore next */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"CONTENT":12,"COMMENT":13,"openRawBlock":14,"END_RAW_BLOCK":15,"OPEN_RAW_BLOCK":16,"sexpr":17,"CLOSE_RAW_BLOCK":18,"openBlock":19,"block_option0":20,"closeBlock":21,"openInverse":22,"block_option1":23,"OPEN_BLOCK":24,"CLOSE":25,"OPEN_INVERSE":26,"inverseAndProgram":27,"INVERSE":28,"OPEN_ENDBLOCK":29,"path":30,"OPEN":31,"OPEN_UNESCAPED":32,"CLOSE_UNESCAPED":33,"OPEN_PARTIAL":34,"partialName":35,"param":36,"partial_option0":37,"partial_option1":38,"sexpr_repetition0":39,"sexpr_option0":40,"dataName":41,"STRING":42,"NUMBER":43,"BOOLEAN":44,"OPEN_SEXPR":45,"CLOSE_SEXPR":46,"hash":47,"hash_repetition_plus0":48,"hashSegment":49,"ID":50,"EQUALS":51,"DATA":52,"pathSegments":53,"SEP":54,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},
  productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: yy.prepareProgram($$[$0-1].statements, true); return $$[$0-1]; 
  break;
  case 2:this.$ = new yy.ProgramNode(yy.prepareProgram($$[$0]), {}, this._$);
  break;
  case 3:this.$ = $$[$0];
  break;
  case 4:this.$ = $$[$0];
  break;
  case 5:this.$ = $$[$0];
  break;
  case 6:this.$ = $$[$0];
  break;
  case 7:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 8:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 9:this.$ = new yy.RawBlockNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 10:this.$ = new yy.MustacheNode($$[$0-1], null, '', '', this._$);
  break;
  case 11:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
  break;
  case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
  break;
  case 13:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 14:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 15:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
  break;
  case 16:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = new yy.PartialNode($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), this._$);
  break;
  case 20:this.$ = new yy.PartialNode($$[$0-2], undefined, $$[$0-1], yy.stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 22:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 23:this.$ = $$[$0];
  break;
  case 24:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 25:this.$ = new yy.NumberNode($$[$0], this._$);
  break;
  case 26:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 27:this.$ = $$[$0];
  break;
  case 28:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 29:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 30:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 31:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 32:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 33:this.$ = new yy.PartialNameNode(new yy.NumberNode($$[$0], this._$));
  break;
  case 34:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 36: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 37:this.$ = [{part: $$[$0]}];
  break;
  case 38:this.$ = [];
  break;
  case 39:$$[$0-1].push($$[$0]);
  break;
  case 48:this.$ = [];
  break;
  case 49:$$[$0-1].push($$[$0]);
  break;
  case 52:this.$ = [$$[$0]];
  break;
  case 53:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],
  defaultActions: {4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };
  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 12;
                                   
  break;
  case 1:return 12;
  break;
  case 2:
                                     this.popState();
                                     return 12;
                                   
  break;
  case 3:
                                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                    this.popState();
                                    return 15;
                                   
  break;
  case 4: return 12; 
  break;
  case 5:strip(0,4); this.popState(); return 13;
  break;
  case 6:return 45;
  break;
  case 7:return 46;
  break;
  case 8: return 16; 
  break;
  case 9:
                                    this.popState();
                                    this.begin('raw');
                                    return 18;
                                   
  break;
  case 10:return 34;
  break;
  case 11:return 24;
  break;
  case 12:return 29;
  break;
  case 13:this.popState(); return 28;
  break;
  case 14:this.popState(); return 28;
  break;
  case 15:return 26;
  break;
  case 16:return 26;
  break;
  case 17:return 32;
  break;
  case 18:return 31;
  break;
  case 19:this.popState(); this.begin('com');
  break;
  case 20:strip(3,5); this.popState(); return 13;
  break;
  case 21:return 31;
  break;
  case 22:return 51;
  break;
  case 23:return 50;
  break;
  case 24:return 50;
  break;
  case 25:return 54;
  break;
  case 26:// ignore whitespace
  break;
  case 27:this.popState(); return 33;
  break;
  case 28:this.popState(); return 25;
  break;
  case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 42;
  break;
  case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 42;
  break;
  case 31:return 52;
  break;
  case 32:return 44;
  break;
  case 33:return 44;
  break;
  case 34:return 43;
  break;
  case 35:return 50;
  break;
  case 36:yy_.yytext = strip(1,2); return 50;
  break;
  case 37:return 'INVALID';
  break;
  case 38:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,38],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/helpers.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(close.length-3) === '~'
    };
  }

  __exports__.stripFlags = stripFlags;
  function prepareBlock(mustache, program, inverseAndProgram, close, inverted, locInfo) {
    /*jshint -W040 */
    if (mustache.sexpr.id.original !== close.path.original) {
      throw new Exception(mustache.sexpr.id.original + ' doesn\'t match ' + close.path.original, mustache);
    }

    var inverse = inverseAndProgram && inverseAndProgram.program;

    var strip = {
      left: mustache.strip.left,
      right: close.strip.right,

      // Determine the standalone candiacy. Basically flag our content as being possibly standalone
      // so our parent can determine if we actually are standalone
      openStandalone: isNextWhitespace(program.statements),
      closeStandalone: isPrevWhitespace((inverse || program).statements)
    };

    if (mustache.strip.right) {
      omitRight(program.statements, null, true);
    }

    if (inverse) {
      var inverseStrip = inverseAndProgram.strip;

      if (inverseStrip.left) {
        omitLeft(program.statements, null, true);
      }
      if (inverseStrip.right) {
        omitRight(inverse.statements, null, true);
      }
      if (close.strip.left) {
        omitLeft(inverse.statements, null, true);
      }

      // Find standalone else statments
      if (isPrevWhitespace(program.statements)
          && isNextWhitespace(inverse.statements)) {

        omitLeft(program.statements);
        omitRight(inverse.statements);
      }
    } else {
      if (close.strip.left) {
        omitLeft(program.statements, null, true);
      }
    }

    if (inverted) {
      return new this.BlockNode(mustache, inverse, program, strip, locInfo);
    } else {
      return new this.BlockNode(mustache, program, inverse, strip, locInfo);
    }
  }

  __exports__.prepareBlock = prepareBlock;
  function prepareProgram(statements, isRoot) {
    for (var i = 0, l = statements.length; i < l; i++) {
      var current = statements[i],
          strip = current.strip;

      if (!strip) {
        continue;
      }

      var _isPrevWhitespace = isPrevWhitespace(statements, i, isRoot, current.type === 'partial'),
          _isNextWhitespace = isNextWhitespace(statements, i, isRoot),

          openStandalone = strip.openStandalone && _isPrevWhitespace,
          closeStandalone = strip.closeStandalone && _isNextWhitespace,
          inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

      if (strip.right) {
        omitRight(statements, i, true);
      }
      if (strip.left) {
        omitLeft(statements, i, true);
      }

      if (inlineStandalone) {
        omitRight(statements, i);

        if (omitLeft(statements, i)) {
          // If we are on a standalone node, save the indent info for partials
          if (current.type === 'partial') {
            current.indent = (/([ \t]+$)/).exec(statements[i-1].original) ? RegExp.$1 : '';
          }
        }
      }
      if (openStandalone) {
        omitRight((current.program || current.inverse).statements);

        // Strip out the previous content node if it's whitespace only
        omitLeft(statements, i);
      }
      if (closeStandalone) {
        // Always strip the next node
        omitRight(statements, i);

        omitLeft((current.inverse || current.program).statements);
      }
    }

    return statements;
  }

  __exports__.prepareProgram = prepareProgram;function isPrevWhitespace(statements, i, isRoot) {
    if (i === undefined) {
      i = statements.length;
    }

    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = statements[i-1],
        sibling = statements[i-2];
    if (!prev) {
      return isRoot;
    }

    if (prev.type === 'content') {
      return (sibling || !isRoot ? (/\r?\n\s*?$/) : (/(^|\r?\n)\s*?$/)).test(prev.original);
    }
  }
  function isNextWhitespace(statements, i, isRoot) {
    if (i === undefined) {
      i = -1;
    }

    var next = statements[i+1],
        sibling = statements[i+2];
    if (!next) {
      return isRoot;
    }

    if (next.type === 'content') {
      return (sibling || !isRoot ? (/^\s*?\r?\n/) : (/^\s*?(\r?\n|$)/)).test(next.original);
    }
  }

  // Marks the node to the right of the position as omitted.
  // I.e. {{foo}}' ' will mark the ' ' node as omitted.
  //
  // If i is undefined, then the first child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitRight(statements, i, multiple) {
    var current = statements[i == null ? 0 : i + 1];
    if (!current || current.type !== 'content' || (!multiple && current.rightStripped)) {
      return;
    }

    var original = current.string;
    current.string = current.string.replace(multiple ? (/^\s+/) : (/^[ \t]*\r?\n?/), '');
    current.rightStripped = current.string !== original;
  }

  // Marks the node to the left of the position as omitted.
  // I.e. ' '{{foo}} will mark the ' ' node as omitted.
  //
  // If i is undefined then the last child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitLeft(statements, i, multiple) {
    var current = statements[i == null ? statements.length - 1 : i - 1];
    if (!current || current.type !== 'content' || (!multiple && current.leftStripped)) {
      return;
    }

    // We omit the last node if it's whitespace only and not preceeded by a non-content node.
    var original = current.string;
    current.string = current.string.replace(multiple ? (/\s+$/) : (/[ \t]+$/), '');
    current.leftStripped = current.string !== original;
    return current.leftStripped;
  }
  return __exports__;
})(__module5__);

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;
  var Helpers = __dependency3__;
  var extend = __dependency4__.extend;

  __exports__.parser = parser;

  var yy = {};
  extend(yy, Helpers, AST);

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if (input.constructor === AST.ProgramNode) { return input; }

    parser.yy = yy;

    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__, __module10__, __module3__);

// handlebars/compiler/compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;
  var isArray = __dependency2__.isArray;

  var slice = [].slice;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
          return false;
        }
      }

      // We know that length is the same between the two arrays because they are directly tied
      // to the opcode behavior above.
      len = this.children.length;
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;
      this.stringParams = options.stringParams;
      this.trackIds = options.trackIds;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true,
        'lookup': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      return this[node.type](node);
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue', sexpr.id.original);
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, i, l;

      this.opcode('pushHash');

      for(i=0, l=pairs.length; i<l; i++) {
        this.pushParam(pairs[i][1]);
      }
      while(i--) {
        this.opcode('assignToHash', pairs[i][0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if (partial.hash) {
        this.accept(partial.hash);
      } else {
        this.opcode('push', 'undefined');
      }

      if (partial.context) {
        this.accept(partial.context);
      } else {
        this.opcode('getContext', 0);
        this.opcode('pushContext');
      }

      this.opcode('invokePartial', partialName.name, partial.indent || '');
      this.opcode('append');
    },

    content: function(content) {
      if (content.string) {
        this.opcode('appendContent', content.string);
      }
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.ID(id);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          id = sexpr.id,
          name = id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        id.falsy = true;

        this.ID(id);
        this.opcode('invokeHelper', params.length, id.original, id.isSimple);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts, id.falsy, id.isScoped);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      this.opcode('lookupData', data.id.depth, data.id.parts);
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    NUMBER: function(number) {
      this.opcode('pushLiteral', number.number);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: slice.call(arguments, 1) });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      for(var i=0, l=params.length; i<l; i++) {
        this.pushParam(params[i]);
      }
    },

    pushParam: function(val) {
      if (this.stringParams) {
        if(val.depth) {
          this.addDepth(val.depth);
        }
        this.opcode('getContext', val.depth || 0);
        this.opcode('pushStringParam', val.stringModeValue, val.type);

        if (val.type === 'sexpr') {
          // Subexpressions get evaluated and passed in
          // in string params mode.
          this.sexpr(val);
        }
      } else {
        if (this.trackIds) {
          this.opcode('pushId', val.type, val.idName || val.stringModeValue);
        }
        this.accept(val);
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }
    if (options.compat) {
      options.useDepths = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    var ret = function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
    ret._setup = function(options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._setup(options);
    };
    ret._child = function(i, data, depths) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled._child(i, data, depths);
    };
    return ret;
  }

  __exports__.compile = compile;function argEquals(a, b) {
    if (a === b) {
      return true;
    }

    if (isArray(a) && isArray(b) && a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (!argEquals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
  }
  return __exports__;
})(__module5__, __module3__);

// handlebars/compiler/javascript-compiler.js
var __module12__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        return parent + "." + name;
      } else {
        return parent + "['" + name + "']";
      }
    },
    depthedLookup: function(name) {
      this.aliases.lookup = 'this.lookup';

      return 'lookup(depths, "' + name + '")';
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return [revision, versions];
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options;
      this.stringParams = this.options.stringParams;
      this.trackIds = this.options.trackIds;
      this.precompile = !asObject;

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: []
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.aliases = {};
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      this.useDepths = this.useDepths || environment.depths.list.length || this.options.compat;

      var opcodes = environment.opcodes,
          opcode,
          i,
          l;

      for (i = 0, l = opcodes.length; i < l; i++) {
        opcode = opcodes[i];

        this[opcode.opcode].apply(this, opcode.args);
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      /* istanbul ignore next */
      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      var fn = this.createFunctionContext(asObject);
      if (!this.isChild) {
        var ret = {
          compiler: this.compilerInfo(),
          main: fn
        };
        var programs = this.context.programs;
        for (i = 0, l = programs.length; i < l; i++) {
          if (programs[i]) {
            ret[i] = programs[i];
          }
        }

        if (this.environment.usePartial) {
          ret.usePartial = true;
        }
        if (this.options.data) {
          ret.useData = true;
        }
        if (this.useDepths) {
          ret.useDepths = true;
        }
        if (this.options.compat) {
          ret.compat = true;
        }

        if (!asObject) {
          ret.compiler = JSON.stringify(ret.compiler);
          ret = this.objectLiteral(ret);
        }

        return ret;
      } else {
        return fn;
      }
    },

    preamble: function() {
      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = [];
    },

    createFunctionContext: function(asObject) {
      var varDeclarations = '';

      var locals = this.stackVars.concat(this.registers.list);
      if(locals.length > 0) {
        varDeclarations += ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      for (var alias in this.aliases) {
        if (this.aliases.hasOwnProperty(alias)) {
          varDeclarations += ', ' + alias + '=' + this.aliases[alias];
        }
      }

      var params = ["depth0", "helpers", "partials", "data"];

      if (this.useDepths) {
        params.push('depths');
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource(varDeclarations);

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        return 'function(' + params.join(',') + ') {\n  ' + source + '}';
      }
    },
    mergeSource: function(varDeclarations) {
      var source = '',
          buffer,
          appendOnly = !this.forceBuffer,
          appendFirst;

      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            if (!source) {
              appendFirst = true;
              source = buffer + ';\n  ';
            } else {
              source += 'buffer += ' + buffer + ';\n  ';
            }
            buffer = undefined;
          }
          source += line + '\n  ';

          if (!this.environment.isSimple) {
            appendOnly = false;
          }
        }
      }

      if (appendOnly) {
        if (buffer || !source) {
          source += 'return ' + (buffer || '""') + ';\n';
        }
      } else {
        varDeclarations += ", buffer = " + (appendFirst ? '' : this.initializeBuffer());
        if (buffer) {
          source += 'return buffer + ' + buffer + ';\n';
        } else {
          source += 'return buffer;\n';
        }
      }

      if (varDeclarations) {
        source = 'var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n  ') + source;
      }

      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function(name) {
      this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = [this.contextName(0)];
      this.setupParams(name, 0, params);

      var blockName = this.popStack();
      params.splice(1, 0, blockName);

      this.push('blockHelperMissing.call(' + params.join(', ') + ')');
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      // We're being a bit cheeky and reusing the options value from the prior exec
      var params = [this.contextName(0)];
      this.setupParams('', 0, params, true);

      this.flushInline();

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }

      this.pendingContent = content;
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource('if (' + local + ' != null) { ' + this.appendToBuffer(local) + ' }');
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      this.lastContext = depth;
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral(this.contextName(this.lastContext));
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(parts, falsy, scoped) {
      /*jshint -W083 */
      var i = 0,
          len = parts.length;

      if (!scoped && this.options.compat && !this.lastContext) {
        // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
      } else {
        this.pushContext();
      }

      for (; i < len; i++) {
        this.replaceStack(function(current) {
          var lookup = this.nameLookup(current, parts[i], 'context');
          // We want to ensure that zero and false are handled properly if the context (falsy flag)
          // needs to have the special handling for these values.
          if (!falsy) {
            return ' != null ? ' + lookup + ' : ' + current;
          } else {
            // Otherwise we can use generic falsy handling
            return ' && ' + lookup;
          }
        });
      }
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function(depth, parts) {
      /*jshint -W083 */
      if (!depth) {
        this.pushStackLiteral('data');
      } else {
        this.pushStackLiteral('this.data(data, ' + depth + ')');
      }

      var len = parts.length;
      for (var i = 0; i < len; i++) {
        this.replaceStack(function(current) {
          return ' && ' + this.nameLookup(current, parts[i], 'data');
        });
      }
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.aliases.lambda = 'this.lambda';

      this.push('lambda(' + this.popStack() + ', ' + this.contextName(0) + ')');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushContext();
      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.trackIds) {
        this.push('{}'); // hashIds
      }
      if (this.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: [], ids: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.trackIds) {
        this.push('{' + hash.ids.join(',') + '}');
      }
      if (this.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isSimple) {
      this.aliases.helperMissing = 'helpers.helperMissing';

      var nonHelper = this.popStack();
      var helper = this.setupHelper(paramSize, name);

      var lookup = (isSimple ? helper.name + ' || ' : '') + nonHelper + ' || helperMissing';
      this.push('((' + lookup + ').call(' + helper.callParams + '))');
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.aliases.functionType = '"function"';
      this.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var nonHelper = this.popStack();

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      this.push(
        '((helper = (helper = ' + helperName + ' || ' + nonHelper + ') != null ? helper : helperMissing'
          + (helper.paramsInit ? '),(' + helper.paramsInit : '') + '),'
        + '(typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper))');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name, indent) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + indent + "'", "'" + name + "'", this.popStack(), this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      } else if (this.options.compat) {
        params.push('undefined');
      }
      if (this.options.compat) {
        params.push('depths');
      }

      this.push("this.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type,
          id;

      if (this.trackIds) {
        id = this.popStack();
      }
      if (this.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      if (id) {
        hash.ids.push("'" + key + "': " + id);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    pushId: function(type, name) {
      if (type === 'ID' || type === 'DATA') {
        this.pushString(name);
      } else if (type === 'sexpr') {
        this.pushStackLiteral('true');
      } else {
        this.pushStackLiteral('null');
      }
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
          this.context.environments[index] = child;

          this.useDepths = this.useDepths || compiler.useDepths;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      var child = this.environment.children[guid],
          depths = child.depths.list,
          useDepths = this.useDepths,
          depth;

      var programParams = [child.index, 'data'];

      if (useDepths) {
        programParams.push('depths');
      }

      return 'this.program(' + programParams.join(', ') + ')';
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      this.pushSource(stack + " = " + item + ";");
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      /* istanbul ignore next */
      if (!this.isInline()) {
        throw new Exception('replaceStack on non-inline');
      }

      // We want to merge the inline statement into the replacement statement via ','
      var top = this.popStack(true);

      if (top instanceof Literal) {
        // Literals do not need to be inlined
        prefix = stack = top.value;
        usedLiteral = true;
      } else {
        // Get or create the current stack name for use by the inline
        createdStack = !this.stackSlot;
        var name = !createdStack ? this.topStackName() : this.incrStack();

        prefix = '(' + this.push(name) + ' = ' + top + ')';
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (!usedLiteral) {
        this.popStack();
      }
      if (createdStack) {
        this.stackSlot--;
      }
      this.push('(' + prefix + item + ')');
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          /* istanbul ignore next */
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function() {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },

    contextName: function(context) {
      if (this.useDepths && context) {
        return 'depths[' + context + ']';
      } else {
        return 'depth' + context;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    objectLiteral: function(obj) {
      var pairs = [];

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          pairs.push(this.quotedString(key) + ':' + obj[key]);
        }
      }

      return '{' + pairs.join(',') + '}';
    },

    setupHelper: function(paramSize, name, blockHelper) {
      var params = [],
          paramsInit = this.setupParams(name, paramSize, params, blockHelper);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: [this.contextName(0)].concat(params).join(", ")
      };
    },

    setupOptions: function(helper, paramSize, params) {
      var options = {}, contexts = [], types = [], ids = [], param, inverse, program;

      options.name = this.quotedString(helper);
      options.hash = this.popStack();

      if (this.trackIds) {
        options.hashIds = this.popStack();
      }
      if (this.stringParams) {
        options.hashTypes = this.popStack();
        options.hashContexts = this.popStack();
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          program = 'this.noop';
        }

        if (!inverse) {
          inverse = 'this.noop';
        }

        options.fn = program;
        options.inverse = inverse;
      }

      // The parameters go on to the stack in order (making sure that they are evaluated in order)
      // so we need to pop them off the stack in reverse order
      var i = paramSize;
      while (i--) {
        param = this.popStack();
        params[i] = param;

        if (this.trackIds) {
          ids[i] = this.popStack();
        }
        if (this.stringParams) {
          types[i] = this.popStack();
          contexts[i] = this.popStack();
        }
      }

      if (this.trackIds) {
        options.ids = "[" + ids.join(",") + "]";
      }
      if (this.stringParams) {
        options.types = "[" + types.join(",") + "]";
        options.contexts = "[" + contexts.join(",") + "]";
      }

      if (this.options.data) {
        options.data = "data";
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(helperName, paramSize, params, useRegister) {
      var options = this.objectLiteral(this.setupOptions(helperName, paramSize, params));

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module11__, __module12__);

  return __module0__;
}));

/*
    Swag v0.6.1 <http://elving.github.com/swag/>
    Copyright 2012 Elving Rodriguez <http://elving.me/>
    Available under MIT license <https://raw.github.com/elving/swag/master/LICENSE>
*/
!function(){var e,r,n,t,a=[].indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(r in this&&this[r]===e)return r;return-1};"undefined"!=typeof window&&null!==window?window.Swag=n={}:"undefined"!=typeof module&&null!==module&&(module.exports=n={}),n.helpers={},n.addHelper=function(e,r,a){return null==a&&(a=[]),a instanceof Array||(a=[a]),n.helpers[e]=function(){var n,i,u,s,o;for(t.verify(e,arguments,a),i=Array.prototype.slice.apply(arguments),u=[],s=0,o=i.length;o>s;s++)n=i[s],t.isHandlebarsSpecific(n)||(n=t.result(n)),u.push(n);return r.apply(this,u)}},n.registerHelpers=function(e){var r,t,a,i;e?n.Handlebars=e:"undefined"!=typeof window&&null!==window?n.Handlebars=null!=window.Ember?Ember.Handlebars:window.Handlebars:"undefined"!=typeof module&&null!==module&&(n.Handlebars=require("handlebars")),n.registerHelper=function(e,r){return"undefined"!=typeof window&&null!==window&&window.Ember?n.Handlebars.helper(e,r):n.Handlebars.registerHelper(e,r)},a=n.helpers,i=[];for(t in a)r=a[t],i.push(n.registerHelper(t,r));return i},n.Config={partialsPath:"",precompiledTemplates:!0},t={},t.isHandlebarsSpecific=function(e){return e&&null!=e.fn||e&&null!=e.hash},t.isUndefined=function(e){return void 0===e||null===e||t.isHandlebarsSpecific(e)},t.safeString=function(e){return new n.Handlebars.SafeString(e)},t.trim=function(e){var r;return r=/\S/.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,e.toString().replace(r,"")},t.isFunc=function(e){return"function"==typeof e},t.isString=function(e){return"string"==typeof e},t.result=function(e){return t.isFunc(e)?e():e},t.err=function(e){throw new Error(e)},t.verify=function(e,r,n){var a,i,u,s,o,d;for(null==n&&(n=[]),r=Array.prototype.slice.apply(r).slice(0,n.length),d=[],i=s=0,o=r.length;o>s;i=++s)a=r[i],u="{{"+e+"}} requires "+n.length+" arguments "+n.join(", ")+".",n[i].indexOf("safe:")>-1?t.isHandlebarsSpecific(a)?d.push(t.err(u)):d.push(void 0):t.isUndefined(a)?d.push(t.err(u)):d.push(void 0);return d},n.addHelper("lowercase",function(e){return e.toLowerCase()},"string"),n.addHelper("uppercase",function(e){return e.toUpperCase()},"string"),n.addHelper("capitalizeFirst",function(e){return e.charAt(0).toUpperCase()+e.slice(1)},"string"),n.addHelper("capitalizeEach",function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1)})},"string"),n.addHelper("titleize",function(e){var r,n,t,a;return n=e.replace(/[ \-_]+/g," "),a=n.match(/\w+/g)||[],r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},function(){var e,n,i;for(i=[],e=0,n=a.length;n>e;e++)t=a[e],i.push(r(t));return i}().join(" ")},"string"),n.addHelper("sentence",function(e){return e.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},"string"),n.addHelper("reverse",function(e){return e.split("").reverse().join("")},"string"),n.addHelper("truncate",function(e,r,n){return t.isUndefined(n)&&(n=""),e.length>r?e.substring(0,r-n.length)+n:e},["string","number"]),n.addHelper("center",function(e,r){var n,a;for(r=t.result(r),a="",n=0;r>n;)a+="&nbsp;",n++;return""+a+e+a},"string"),n.addHelper("newLineToBr",function(e){return e.replace(/\r?\n|\r/g,"<br>")},"string"),n.addHelper("sanitize",function(e,r){return t.isUndefined(r)&&(r="-"),e.replace(/[^a-z0-9]/gi,r)},"string"),n.addHelper("first",function(e,r){return t.isUndefined(r)||(r=parseFloat(r)),t.isUndefined(r)?e[0]:e.slice(0,r)},"array"),n.addHelper("withFirst",function(e,r,n){var a,i;if(t.isUndefined(r)||(r=parseFloat(r)),t.isUndefined(r))return n=r,n.fn(e[0]);e=e.slice(0,r),i="";for(a in e)i+=n.fn(e[a]);return i},"array"),n.addHelper("last",function(e,r){return t.isUndefined(r)||(r=parseFloat(r)),t.isUndefined(r)?e[e.length-1]:e.slice(-r)},"array"),n.addHelper("withLast",function(e,r,n){var a,i;if(t.isUndefined(r)||(r=parseFloat(r)),t.isUndefined(r))return n=r,n.fn(e[e.length-1]);e=e.slice(-r),i="";for(a in e)i+=n.fn(e[a]);return i},"array"),n.addHelper("after",function(e,r){return t.isUndefined(r)||(r=parseFloat(r)),e.slice(r)},["array","number"]),n.addHelper("withAfter",function(e,r,n){var a,i;t.isUndefined(r)||(r=parseFloat(r)),e=e.slice(r),i="";for(a in e)i+=n.fn(e[a]);return i},["array","number"]),n.addHelper("before",function(e,r){return t.isUndefined(r)||(r=parseFloat(r)),e.slice(0,-r)},["array","number"]),n.addHelper("withBefore",function(e,r,n){var a,i;t.isUndefined(r)||(r=parseFloat(r)),e=e.slice(0,-r),i="";for(a in e)i+=n.fn(e[a]);return i},["array","number"]),n.addHelper("join",function(e,r){return e.join(t.isUndefined(r)?" ":r)},"array"),n.addHelper("sort",function(e,r){return t.isUndefined(r)?e.sort():e.sort(function(e,n){return e[r]>n[r]})},"array"),n.addHelper("withSort",function(e,r,n){var a,i,u,s;if(i="",t.isUndefined(r))for(n=r,e=e.sort(),u=0,s=e.length;s>u;u++)a=e[u],i+=n.fn(a);else{e=e.sort(function(e,n){return e[r]>n[r]});for(a in e)i+=n.fn(e[a])}return i},"array"),n.addHelper("length",function(e){return e.length},"array"),n.addHelper("lengthEqual",function(e,r,n){return t.isUndefined(r)||(r=parseFloat(r)),e.length===r?n.fn(this):n.inverse(this)},["array","number"]),n.addHelper("empty",function(e,r){return!e||e.length<=0?r.fn(this):r.inverse(this)},"safe:array"),n.addHelper("any",function(e,r){return e&&e.length>0?r.fn(this):r.inverse(this)},"safe:array"),n.addHelper("inArray",function(e,r,n){return a.call(e,r)>=0?n.fn(this):n.inverse(this)},["array","string|number"]),n.addHelper("eachIndex",function(e,r){var n,t,a,i,u;for(t="",n=i=0,u=e.length;u>i;n=++i)a=e[n],t+=r.fn({item:a,index:n});return t},"array"),n.addHelper("eachProperty",function(e,r){var n,t,a;t="";for(n in e)a=e[n],t+=r.fn({key:n,value:a});return t},"object"),n.addHelper("add",function(e,r){return e=parseFloat(e),r=parseFloat(r),e+r},["number","number"]),n.addHelper("subtract",function(e,r){return e=parseFloat(e),r=parseFloat(r),e-r},["number","number"]),n.addHelper("divide",function(e,r){return e=parseFloat(e),r=parseFloat(r),e/r},["number","number"]),n.addHelper("multiply",function(e,r){return e=parseFloat(e),r=parseFloat(r),e*r},["number","number"]),n.addHelper("floor",function(e){return e=parseFloat(e),Math.floor(e)},"number"),n.addHelper("ceil",function(e){return e=parseFloat(e),Math.ceil(e)},"number"),n.addHelper("round",function(e){return e=parseFloat(e),Math.round(e)},"number"),n.addHelper("toFixed",function(e,r){return e=parseFloat(e),r=t.isUndefined(r)?0:r,e.toFixed(r)},"number"),n.addHelper("toPrecision",function(e,r){return e=parseFloat(e),r=t.isUndefined(r)?1:r,e.toPrecision(r)},"number"),n.addHelper("toExponential",function(e,r){return e=parseFloat(e),r=t.isUndefined(r)?0:r,e.toExponential(r)},"number"),n.addHelper("toInt",function(e){return parseInt(e,10)},"number"),n.addHelper("toFloat",function(e){return parseFloat(e)},"number"),n.addHelper("digitGrouping",function(e,r){return e=parseFloat(e),r=t.isUndefined(r)?",":r,e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+r)},"number"),n.addHelper("is",function(e,r,n){return e&&e===r?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("isnt",function(e,r,n){return e&&e===r?n.inverse(this):n.fn(this)},["safe:string|number","safe:string|number"]),n.addHelper("gt",function(e,r,n){return e>r?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("gte",function(e,r,n){return e>=r?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("lt",function(e,r,n){return r>e?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("lte",function(e,r,n){return r>=e?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("or",function(e,r,n){return e||r?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),n.addHelper("and",function(e,r,n){return e&&r?n.fn(this):n.inverse(this)},["safe:string|number","safe:string|number"]),e={},e.padNumber=function(e,r,n){var t,a;if("undefined"==typeof n&&(n="0"),t=r-String(e).length,a="",t>0)for(;t--;)a+=n;return a+e},e.dayOfYear=function(e){var r;return r=new Date(e.getFullYear(),0,1),Math.ceil((e-r)/864e5)},e.weekOfYear=function(e){var r;return r=new Date(e.getFullYear(),0,1),Math.ceil(((e-r)/864e5+r.getDay()+1)/7)},e.isoWeekOfYear=function(e){var r,n,t,a;return a=new Date(e.valueOf()),n=(e.getDay()+6)%7,a.setDate(a.getDate()-n+3),t=new Date(a.getFullYear(),0,4),r=(a-t)/864e5,1+Math.ceil(r/7)},e.tweleveHour=function(e){return e.getHours()>12?e.getHours()-12:e.getHours()},e.timeZoneOffset=function(r){var n,t;return n=-r.getTimezoneOffset()/60,t=e.padNumber(Math.abs(n),4),(n>0?"+":"-")+t},e.format=function(r,n){return n.replace(e.formats,function(n,t){switch(t){case"a":return e.abbreviatedWeekdays[r.getDay()];case"A":return e.fullWeekdays[r.getDay()];case"b":return e.abbreviatedMonths[r.getMonth()];case"B":return e.fullMonths[r.getMonth()];case"c":return r.toLocaleString();case"C":return Math.round(r.getFullYear()/100);case"d":return e.padNumber(r.getDate(),2);case"D":return e.format(r,"%m/%d/%y");case"e":return e.padNumber(r.getDate(),2," ");case"F":return e.format(r,"%Y-%m-%d");case"h":return e.format(r,"%b");case"H":return e.padNumber(r.getHours(),2);case"I":return e.padNumber(e.tweleveHour(r),2);case"j":return e.padNumber(e.dayOfYear(r),3);case"k":return e.padNumber(r.getHours(),2," ");case"l":return e.padNumber(e.tweleveHour(r),2," ");case"L":return e.padNumber(r.getMilliseconds(),3);case"m":return e.padNumber(r.getMonth()+1,2);case"M":return e.padNumber(r.getMinutes(),2);case"n":return"\n";case"p":return r.getHours()>11?"PM":"AM";case"P":return e.format(r,"%p").toLowerCase();case"r":return e.format(r,"%I:%M:%S %p");case"R":return e.format(r,"%H:%M");case"s":return r.getTime()/1e3;case"S":return e.padNumber(r.getSeconds(),2);case"t":return"	";case"T":return e.format(r,"%H:%M:%S");case"u":return 0===r.getDay()?7:r.getDay();case"U":return e.padNumber(e.weekOfYear(r),2);case"v":return e.format(r,"%e-%b-%Y");case"V":return e.padNumber(e.isoWeekOfYear(r),2);case"W":return e.padNumber(e.weekOfYear(r),2);case"w":return e.padNumber(r.getDay(),2);case"x":return r.toLocaleDateString();case"X":return r.toLocaleTimeString();case"y":return String(r.getFullYear()).substring(2);case"Y":return r.getFullYear();case"z":return e.timeZoneOffset(r);default:return match}})},e.formats=/%(a|A|b|B|c|C|d|D|e|F|h|H|I|j|k|l|L|m|M|n|p|P|r|R|s|S|t|T|u|U|v|V|W|w|x|X|y|Y|z)/g,e.abbreviatedWeekdays=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],e.fullWeekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.abbreviatedMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.fullMonths=["January","February","March","April","May","June","July","August","September","October","November","December"],n.addHelper("formatDate",function(r,n){return r=new Date(r),e.format(r,n)},["string|number|date","string"]),n.addHelper("now",function(r){var n;return n=new Date,t.isUndefined(r)?n:e.format(n,r)}),n.addHelper("timeago",function(e){var r,n;return e=new Date(e),n=Math.floor((new Date-e)/1e3),r=Math.floor(n/31536e3),r>1?""+r+" years ago":(r=Math.floor(n/2592e3),r>1?""+r+" months ago":(r=Math.floor(n/86400),r>1?""+r+" days ago":(r=Math.floor(n/3600),r>1?""+r+" hours ago":(r=Math.floor(n/60),r>1?""+r+" minutes ago":0===Math.floor(n)?"Just now":Math.floor(n)+" seconds ago"))))},"string|number|date"),n.addHelper("inflect",function(e,r,n,a){var i;return e=parseFloat(e),i=e>1||0===e?n:r,t.isUndefined(a)||a===!1?i:""+e+" "+i},["number","string","string"]),n.addHelper("ordinalize",function(e){var r,n;if(e=parseFloat(e),r=Math.abs(Math.round(e)),n=r%100,a.call([11,12,13],n)>=0)return""+e+"th";switch(r%10){case 1:return""+e+"st";case 2:return""+e+"nd";case 3:return""+e+"rd";default:return""+e+"th"}},"number"),r={},r.parseAttributes=function(e){return Object.keys(e).map(function(r){return""+r+'="'+e[r]+'"'}).join(" ")},n.addHelper("ul",function(e,n){return"<ul "+r.parseAttributes(n.hash)+">"+e.map(function(e){return"<li>"+n.fn(t.result(e))+"</li>"}).join("\n")+"</ul>"}),n.addHelper("ol",function(e,n){return"<ol "+r.parseAttributes(n.hash)+">"+e.map(function(e){return"<li>"+n.fn(t.result(e))+"</li>"}).join("\n")+"</ol>"}),n.addHelper("br",function(e){var r,n;if(r="<br>",!t.isUndefined(e))for(n=0;n<parseFloat(e)-1;)r+="<br>",n++;return t.safeString(r)}),n.addHelper("log",function(e){return console.log(e)},"string|number|boolean|array|object"),n.addHelper("debug",function(e){return console.log("Context: ",this),t.isUndefined(e)||console.log("Value: ",e),console.log("-----------------------------------------------")}),n.addHelper("default",function(e,r){return e||r},"safe:string|number","string|number"),("undefined"==typeof Ember||null===Ember)&&n.addHelper("partial",function(e,r,a){var i;return i=n.Config.partialsPath+e,null==n.Handlebars.partials[e]&&(t.isUndefined(a)?"undefined"!=typeof define&&null!==define&&t.isFunc(define)&&define.amd?(n.Config.precompiledTemplates||(i="!text"+i),require([i],function(r){return t.isString(r)&&(r=n.Handlebars.compile(r)),n.Handlebars.registerPartial(e,r)})):"undefined"!=typeof require&&null!==require?(a=require(i),t.isString(a)&&(a=n.Handlebars.compile(a)),n.Handlebars.registerPartial(e,a)):t.err("{{partial}} no amd or commonjs module support found."):(t.isString(a)&&(a=n.Handlebars.compile(a)),n.Handlebars.registerPartial(e,a))),t.safeString(n.Handlebars.partials[e](r))},"string")}.call(this);
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    // Turn off strict mode for this function so we can assign to global.Q
    /* jshint strict: false */

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else {
        Q = definition();
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;

    function flush() {
        /* jshint loopfunc: true */

        while (head.next) {
            head = head.next;
            var task = head.task;
            head.task = void 0;
            var domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }

            try {
                task();

            } catch (e) {
                if (isNodeJS) {
                    // In node, uncaught exceptions are considered fatal errors.
                    // Re-throw them synchronously to interrupt flushing!

                    // Ensure continuation if the uncaught exception is suppressed
                    // listening "uncaughtException" events (as domains does).
                    // Continue in next event to avoid tick recursion.
                    if (domain) {
                        domain.exit();
                    }
                    setTimeout(flush, 0);
                    if (domain) {
                        domain.enter();
                    }

                    throw e;

                } else {
                    // In browsers, uncaught exceptions are not fatal.
                    // Re-throw them asynchronously to avoid slow-downs.
                    setTimeout(function() {
                       throw e;
                    }, 0);
                }
            }

            if (domain) {
                domain.exit();
            }
        }

        flushing = false;
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process !== "undefined" && process.nextTick) {
        // Node.js before 0.9. Note that some fake-Node environments, like the
        // Mocha test runner, introduce a `process` global without a `nextTick`.
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }

    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become fulfilled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be fulfilled
 */
Q.race = race;
function race(answerPs) {
    return promise(function(resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function(answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return isObject(object) &&
        typeof object.promiseDispatch === "function" &&
        typeof object.inspect === "function";
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var countDown = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++countDown;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--countDown === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (countDown === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

/*! @license Firebase v1.1.0 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var k,ba=this;function l(a){return void 0!==a}function ca(){}function da(a){a.ib=function(){return a.Ld?a.Ld:a.Ld=new a}}
function ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function fa(a){return"array"==ea(a)}function ga(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ha(a){return"number"==typeof a}function ia(a){return"function"==ea(a)}function ja(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return q.apply(null,arguments)}var ma=Date.now||function(){return+new Date};
function na(a,b){var c=a.split("."),d=ba;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&l(b)?d[e]=b:d=d[e]?d[e]:d[e]={}}function oa(a,b){function c(){}c.prototype=b.prototype;a.df=b.prototype;a.prototype=new c;a.$e=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function pa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function qa(){this.Ec=void 0}
function ra(a,b,c){switch(typeof b){case "string":sa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(fa(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],ra(a,a.Ec?a.Ec.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),sa(f,c),
c.push(":"),ra(a,a.Ec?a.Ec.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ta={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ua=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function sa(a,b){b.push('"',a.replace(ua,function(a){if(a in ta)return ta[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ta[a]=e+b.toString(16)}),'"')};function va(a){return"undefined"!==typeof JSON&&l(JSON.parse)?JSON.parse(a):pa(a)}function u(a){if("undefined"!==typeof JSON&&l(JSON.stringify))a=JSON.stringify(a);else{var b=[];ra(new qa,a,b);a=b.join("")}return a};function wa(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,v(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var xa={};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}
function y(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:ya.assert(!1,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a=a+" failed: "+(d+" argument ")}function z(a,b,c,d){if((!d||l(c))&&!ia(c))throw Error(y(a,b,d)+"must be a valid function.");}function za(a,b,c){if(l(c)&&(!ja(c)||null===c))throw Error(y(a,b,!0)+"must be a valid context object.");};function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function B(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Aa(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function Ba(a){var b={};Aa(a,function(a,d){b[a]=d});return b};var ya={},Ca=/[\[\].#$\/\u0000-\u001F\u007F]/,Da=/[\[\].#$\u0000-\u001F\u007F]/;function Ea(a){return p(a)&&0!==a.length&&!Ca.test(a)}function Fa(a,b,c){c&&!l(b)||Ga(y(a,1,c),b)}
function Ga(a,b,c,d){c||(c=0);d=d||[];if(!l(b))throw Error(a+"contains undefined"+Ha(d));if(ia(b))throw Error(a+"contains a function"+Ha(d)+" with contents: "+b.toString());if(Ia(b))throw Error(a+"contains "+b.toString()+Ha(d));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<wa(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Ha(d)+" ('"+b.substring(0,50)+"...')");if(ja(b))for(var e in b)if(A(b,
e)){var f=b[e];if(".priority"!==e&&".value"!==e&&".sv"!==e&&!Ea(e))throw Error(a+" contains an invalid key ("+e+")"+Ha(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');d.push(e);Ga(a,f,c+1,d);d.pop()}}function Ha(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Ja(a,b){if(!ja(b)||fa(b))throw Error(y(a,1,!1)+" must be an Object containing the children to replace.");Fa(a,b,!1)}
function Ka(a,b,c,d){if(!d||l(c)){if(Ia(c))throw Error(y(a,b,d)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, or null).");if(!(null===c||ha(c)||p(c)||ja(c)&&A(c,".sv")))throw Error(y(a,b,d)+"must be a valid Firebase priority (a string, finite number, or null).");}}
function La(a,b,c){if(!c||l(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(y(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ma(a,b){if(l(b)&&!Ea(b))throw Error(y(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Na(a,b){if(!p(b)||0===b.length||Da.test(b))throw Error(y(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function C(a,b){if(".info"===D(b))throw Error(a+" failed: Can't modify data under /.info/");}function Oa(a,b){if(!p(b))throw Error(y(a,1,!1)+"must be a valid credential (a string).");}function Pa(a,b,c){if(!p(c))throw Error(y(a,b,!1)+"must be a valid string.");}
function E(a,b,c,d){if(!d||l(c))if(!ja(c)||null===c)throw Error(y(a,b,d)+"must be a valid object.");}function Qa(a,b,c){if(!ja(b)||null===b||!A(b,c))throw Error(y(a,1,!1)+'must contain the key "'+c+'"');if(!p(B(b,c)))throw Error(y(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function F(a,b,c,d,e,f,g){this.i=a;this.path=b;this.Ga=c;this.fa=d;this.za=e;this.Ea=f;this.fb=g;if(l(this.fa)&&l(this.Ea)&&l(this.Ga))throw"Query: Can't combine startAt(), endAt(), and limit().";}F.prototype.rd=function(){x("Query.ref",0,0,arguments.length);return new G(this.i,this.path)};F.prototype.ref=F.prototype.rd;
F.prototype.Ta=function(a,b){x("Query.on",2,4,arguments.length);La("Query.on",a,!1);z("Query.on",2,b,!1);var c=Ra("Query.on",arguments[2],arguments[3]);this.i.ec(this,a,b,c.cancel,c.$);return b};F.prototype.on=F.prototype.Ta;F.prototype.nb=function(a,b,c){x("Query.off",0,3,arguments.length);La("Query.off",a,!0);z("Query.off",2,b,!0);za("Query.off",3,c);this.i.Dc(this,a,b,c)};F.prototype.off=F.prototype.nb;
F.prototype.Ke=function(a,b){function c(g){f&&(f=!1,e.nb(a,c),b.call(d.$,g))}x("Query.once",2,4,arguments.length);La("Query.once",a,!1);z("Query.once",2,b,!1);var d=Ra("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.Ta(a,c,function(b){e.nb(a,c);d.cancel&&d.cancel.call(d.$,b)})};F.prototype.once=F.prototype.Ke;
F.prototype.ze=function(a){x("Query.limit",1,1,arguments.length);if(!ha(a)||Math.floor(a)!==a||0>=a)throw"Query.limit: First argument must be a positive integer.";return new F(this.i,this.path,a,this.fa,this.za,this.Ea,this.fb)};F.prototype.limit=F.prototype.ze;F.prototype.ae=function(a,b){x("Query.startAt",0,2,arguments.length);Ka("Query.startAt",1,a,!0);Ma("Query.startAt",b);l(a)||(b=a=null);return new F(this.i,this.path,this.Ga,a,b,this.Ea,this.fb)};F.prototype.startAt=F.prototype.ae;
F.prototype.Hd=function(a,b){x("Query.endAt",0,2,arguments.length);Ka("Query.endAt",1,a,!0);Ma("Query.endAt",b);return new F(this.i,this.path,this.Ga,this.fa,this.za,a,b)};F.prototype.endAt=F.prototype.Hd;F.prototype.se=function(a,b){x("Query.equalTo",1,2,arguments.length);Ka("Query.equalTo",1,a,!1);Ma("Query.equalTo",b);return this.ae(a,b).Hd(a,b)};F.prototype.equalTo=F.prototype.se;
function Sa(a){var b={};l(a.fa)&&(b.sp=a.fa);l(a.za)&&(b.sn=a.za);l(a.Ea)&&(b.ep=a.Ea);l(a.fb)&&(b.en=a.fb);l(a.Ga)&&(b.l=a.Ga);l(a.fa)&&l(a.za)&&null===a.fa&&null===a.za&&(b.vf="l");return b}F.prototype.Wa=function(){var a=Ta(Sa(this));return"{}"===a?"default":a};
function Ra(a,b,c){var d={};if(b&&c)d.cancel=b,z(a,3,d.cancel,!0),d.$=c,za(a,4,d.$);else if(b)if("object"===typeof b&&null!==b)d.$=b;else if("function"===typeof b)d.cancel=b;else throw Error(xa.af(a,3,!0)+"must either be a cancel callback or a context object.");return d};function H(a,b){if(1==arguments.length){this.u=a.split("/");for(var c=0,d=0;d<this.u.length;d++)0<this.u[d].length&&(this.u[c]=this.u[d],c++);this.u.length=c;this.W=0}else this.u=a,this.W=b}function D(a){return a.W>=a.u.length?null:a.u[a.W]}function Ua(a){var b=a.W;b<a.u.length&&b++;return new H(a.u,b)}function Va(a){return a.W<a.u.length?a.u[a.u.length-1]:null}k=H.prototype;k.toString=function(){for(var a="",b=this.W;b<this.u.length;b++)""!==this.u[b]&&(a+="/"+this.u[b]);return a||"/"};
k.parent=function(){if(this.W>=this.u.length)return null;for(var a=[],b=this.W;b<this.u.length-1;b++)a.push(this.u[b]);return new H(a,0)};k.J=function(a){for(var b=[],c=this.W;c<this.u.length;c++)b.push(this.u[c]);if(a instanceof H)for(c=a.W;c<a.u.length;c++)b.push(a.u[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new H(b,0)};k.f=function(){return this.W>=this.u.length};k.length=function(){return this.u.length-this.W};
function Wa(a,b){var c=D(a);if(null===c)return b;if(c===D(b))return Wa(Ua(a),Ua(b));throw"INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")";}k.contains=function(a){var b=this.W,c=a.W;if(this.length()>a.length())return!1;for(;b<this.u.length;){if(this.u[b]!==a.u[c])return!1;++b;++c}return!0};function Xa(){this.children={};this.gc=0;this.value=null}function Ya(a,b,c){this.Ha=a?a:"";this.Rb=b?b:null;this.A=c?c:new Xa}function I(a,b){for(var c=b instanceof H?b:new H(b),d=a,e;null!==(e=D(c));)d=new Ya(e,d,B(d.A.children,e)||new Xa),c=Ua(c);return d}k=Ya.prototype;k.k=function(){return this.A.value};function Za(a,b){v("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;$a(a)}k.clear=function(){this.A.value=null;this.A.children={};this.A.gc=0;$a(this)};
k.Gb=function(){return 0<this.A.gc};k.f=function(){return null===this.k()&&!this.Gb()};k.B=function(a){for(var b in this.A.children)a(new Ya(b,this,this.A.children[b]))};function ab(a,b,c,d){c&&!d&&b(a);a.B(function(a){ab(a,b,!0,d)});c&&d&&b(a)}function bb(a,b,c){for(a=c?a:a.parent();null!==a;){if(b(a))return!0;a=a.parent()}return!1}k.path=function(){return new H(null===this.Rb?this.Ha:this.Rb.path()+"/"+this.Ha)};k.name=function(){return this.Ha};k.parent=function(){return this.Rb};
function $a(a){if(null!==a.Rb){var b=a.Rb,c=a.Ha,d=a.f(),e=A(b.A.children,c);d&&e?(delete b.A.children[c],b.A.gc--,$a(b)):d||e||(b.A.children[c]=a.A,b.A.gc++,$a(b))}};function cb(a,b){this.ab=a?a:db;this.ea=b?b:eb}function db(a,b){return a<b?-1:a>b?1:0}k=cb.prototype;k.ta=function(a,b){return new cb(this.ab,this.ea.ta(a,b,this.ab).M(null,null,!1,null,null))};k.remove=function(a){return new cb(this.ab,this.ea.remove(a,this.ab).M(null,null,!1,null,null))};k.get=function(a){for(var b,c=this.ea;!c.f();){b=this.ab(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function gb(a,b){for(var c,d=a.ea,e=null;!d.f();){c=a.ab(b,d.key);if(0===c){if(d.left.f())return e?e.key:null;for(d=d.left;!d.right.f();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}k.f=function(){return this.ea.f()};k.count=function(){return this.ea.count()};k.Mb=function(){return this.ea.Mb()};k.lb=function(){return this.ea.lb()};k.Fa=function(a){return this.ea.Fa(a)};k.Xa=function(a){return this.ea.Xa(a)};
k.jb=function(a){return new hb(this.ea,a)};function hb(a,b){this.Wd=b;for(this.pc=[];!a.f();)this.pc.push(a),a=a.left}function ib(a){if(0===a.pc.length)return null;var b=a.pc.pop(),c;c=a.Wd?a.Wd(b.key,b.value):{key:b.key,value:b.value};for(b=b.right;!b.f();)a.pc.push(b),b=b.left;return c}function jb(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:eb;this.right=null!=e?e:eb}k=jb.prototype;
k.M=function(a,b,c,d,e){return new jb(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};k.count=function(){return this.left.count()+1+this.right.count()};k.f=function(){return!1};k.Fa=function(a){return this.left.Fa(a)||a(this.key,this.value)||this.right.Fa(a)};k.Xa=function(a){return this.right.Xa(a)||a(this.key,this.value)||this.left.Xa(a)};function kb(a){return a.left.f()?a:kb(a.left)}k.Mb=function(){return kb(this).key};
k.lb=function(){return this.right.f()?this.key:this.right.lb()};k.ta=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.M(null,null,null,e.left.ta(a,b,c),null):0===d?e.M(null,b,null,null,null):e.M(null,null,null,null,e.right.ta(a,b,c));return lb(e)};function mb(a){if(a.left.f())return eb;a.left.R()||a.left.left.R()||(a=nb(a));a=a.M(null,null,null,mb(a.left),null);return lb(a)}
k.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.f()||c.left.R()||c.left.left.R()||(c=nb(c)),c=c.M(null,null,null,c.left.remove(a,b),null);else{c.left.R()&&(c=ob(c));c.right.f()||c.right.R()||c.right.left.R()||(c=pb(c),c.left.left.R()&&(c=ob(c),c=pb(c)));if(0===b(a,c.key)){if(c.right.f())return eb;d=kb(c.right);c=c.M(d.key,d.value,null,null,mb(c.right))}c=c.M(null,null,null,null,c.right.remove(a,b))}return lb(c)};k.R=function(){return this.color};
function lb(a){a.right.R()&&!a.left.R()&&(a=qb(a));a.left.R()&&a.left.left.R()&&(a=ob(a));a.left.R()&&a.right.R()&&(a=pb(a));return a}function nb(a){a=pb(a);a.right.left.R()&&(a=a.M(null,null,null,null,ob(a.right)),a=qb(a),a=pb(a));return a}function qb(a){return a.right.M(null,null,a.color,a.M(null,null,!0,null,a.right.left),null)}function ob(a){return a.left.M(null,null,a.color,null,a.M(null,null,!0,a.left.right,null))}
function pb(a){return a.M(null,null,!a.color,a.left.M(null,null,!a.left.color,null,null),a.right.M(null,null,!a.right.color,null,null))}function rb(){}k=rb.prototype;k.M=function(){return this};k.ta=function(a,b){return new jb(a,b,null)};k.remove=function(){return this};k.count=function(){return 0};k.f=function(){return!0};k.Fa=function(){return!1};k.Xa=function(){return!1};k.Mb=function(){return null};k.lb=function(){return null};k.R=function(){return!1};var eb=new rb;function sb(a){this.Db=a;this.zc="firebase:"}k=sb.prototype;k.set=function(a,b){null==b?this.Db.removeItem(this.zc+a):this.Db.setItem(this.zc+a,u(b))};k.get=function(a){a=this.Db.getItem(this.zc+a);return null==a?null:va(a)};k.remove=function(a){this.Db.removeItem(this.zc+a)};k.Nd=!1;k.toString=function(){return this.Db.toString()};function tb(){this.zb={}}tb.prototype.set=function(a,b){null==b?delete this.zb[a]:this.zb[a]=b};tb.prototype.get=function(a){return A(this.zb,a)?this.zb[a]:null};tb.prototype.remove=function(a){delete this.zb[a]};tb.prototype.Nd=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new sb(b)}}catch(c){}return new tb}var xb=wb("localStorage"),K=wb("sessionStorage");function yb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Ya=b;this.Sa=c;this.Ye=d;this.yc=e||"";this.ia=xb.get("host:"+a)||this.host}function zb(a,b){b!==a.ia&&(a.ia=b,"s-"===a.ia.substr(0,2)&&xb.set("host:"+a.host,a.ia))}yb.prototype.toString=function(){var a=(this.Ya?"https://":"http://")+this.host;this.yc&&(a+="<"+this.yc+">");return a};function Ab(){this.ra=-1};function Bb(){this.ra=-1;this.ra=64;this.F=[];this.Sc=[];this.ge=[];this.vc=[];this.vc[0]=128;for(var a=1;a<this.ra;++a)this.vc[a]=0;this.Kc=this.kb=0;this.reset()}oa(Bb,Ab);Bb.prototype.reset=function(){this.F[0]=1732584193;this.F[1]=4023233417;this.F[2]=2562383102;this.F[3]=271733878;this.F[4]=3285377520;this.Kc=this.kb=0};
function Cb(a,b,c){c||(c=0);var d=a.ge;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.F[0];c=a.F[1];for(var g=a.F[2],h=a.F[3],m=a.F[4],n,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),n=1518500249):(f=c^g^h,n=1859775393):60>e?(f=c&g|h&(c|g),n=2400959708):(f=c^g^h,n=3395469782),f=(b<<
5|b>>>27)+f+m+n+d[e]&4294967295,m=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.F[0]=a.F[0]+b&4294967295;a.F[1]=a.F[1]+c&4294967295;a.F[2]=a.F[2]+g&4294967295;a.F[3]=a.F[3]+h&4294967295;a.F[4]=a.F[4]+m&4294967295}
Bb.prototype.update=function(a,b){l(b)||(b=a.length);for(var c=b-this.ra,d=0,e=this.Sc,f=this.kb;d<b;){if(0==f)for(;d<=c;)Cb(this,a,d),d+=this.ra;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.ra){Cb(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.ra){Cb(this,e);f=0;break}}this.kb=f;this.Kc+=b};function Db(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ma()).toString(36)};var L=Array.prototype,Eb=L.indexOf?function(a,b,c){return L.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Fb=L.forEach?function(a,b,c){L.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Gb=L.filter?function(a,b,c){return L.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},Hb=L.map?function(a,b,c){return L.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ib=L.reduce?function(a,b,c,d){d&&(b=q(b,d));return L.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Fb(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Jb=L.every?function(a,b,c){return L.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Kb(a,b){var c;a:{c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}function Lb(a,b){a.sort(b||Mb)}function Mb(a,b){return a>b?1:a<b?-1:0};var Nb;a:{var Ob=ba.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function Qb(a){return-1!=Nb.indexOf(a)};var Rb=Qb("Opera")||Qb("OPR"),Sb=Qb("Trident")||Qb("MSIE"),Tb=Qb("Gecko")&&-1==Nb.toLowerCase().indexOf("webkit")&&!(Qb("Trident")||Qb("MSIE")),Ub=-1!=Nb.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Rb&&ba.opera)return a=ba.opera.version,ia(a)?a():a;Tb?b=/rv\:([^\);]+)(\)|;)/:Sb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ub&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Nb))?a[1]:"");return Sb&&(b=(b=ba.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Vb=null,Wb=null;
function Xb(a,b){if(!ga(a))throw Error("encodeByteArray takes an array as a parameter");if(!Vb){Vb={};Wb={};for(var c=0;65>c;c++)Vb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Wb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)}for(var c=b?Wb:Vb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,h=g?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,r=f>>2,f=(f&3)<<4|h>>4,h=(h&15)<<2|n>>6,n=n&63;m||(n=64,g||(h=64));d.push(c[r],c[f],c[h],c[n])}return d.join("")}
;var Yb=function(){var a=1;return function(){return a++}}();function v(a,b){if(!a)throw Error("Firebase INTERNAL ASSERT FAILED:"+b);}function Zb(a){try{if("undefined"!==typeof atob)return atob(a)}catch(b){M("base64DecodeIfNativeSupport failed: ",b)}return null}
function $b(a){var b=wa(a);a=new Bb;a.update(b);var b=[],c=8*a.Kc;56>a.kb?a.update(a.vc,56-a.kb):a.update(a.vc,a.ra-(a.kb-56));for(var d=a.ra-1;56<=d;d--)a.Sc[d]=c&255,c/=256;Cb(a,a.Sc);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.F[d]>>e&255,++c;return Xb(b)}function ac(a){for(var b="",c=0;c<arguments.length;c++)b=ga(arguments[c])?b+ac.apply(null,arguments[c]):"object"===typeof arguments[c]?b+u(arguments[c]):b+arguments[c],b+=" ";return b}var bc=null,cc=!0;
function M(a){!0===cc&&(cc=!1,null===bc&&!0===K.get("logging_enabled")&&dc(!0));if(bc){var b=ac.apply(null,arguments);bc(b)}}function ec(a){return function(){M(a,arguments)}}function fc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+ac.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function gc(a){var b=ac.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}
function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+ac.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function hc(a){var b="",c="",d="",e=!0,f="https",g="";if(p(a)){var h=a.indexOf("//");0<=h&&(f=a.substring(0,h-1),a=a.substring(h+2));h=a.indexOf("/");-1===h&&(h=a.length);b=a.substring(0,h);a=a.substring(h+1);var m=b.split(".");if(3===m.length){h=m[2].indexOf(":");e=0<=h?"https"===f||"wss"===f:!0;c=m[1];d=m[0];g="";a=("/"+a).split("/");for(h=0;h<a.length;h++)if(0<a[h].length){m=a[h];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(n){}g+="/"+m}d=d.toLowerCase()}else 2===m.length&&(c=m[0])}return{host:b,
domain:c,Ve:d,Ya:e,scheme:f,pb:g}}function Ia(a){return ha(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function ic(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function jc(a,b){return a!==b?null===a?-1:null===b?1:typeof a!==typeof b?"number"===typeof a?-1:1:a>b?1:-1:0}function kc(a,b){if(a===b)return 0;var c=lc(a),d=lc(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function mc(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+u(b));}
function Ta(a){if("object"!==typeof a||null===a)return u(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=u(b[d]),c+=":",c+=Ta(a[b[d]]);return c+"}"}function nc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function oc(a,b){if(fa(a))for(var c=0;c<a.length;++c)b(c,a[c]);else pc(a,b)}function qc(a,b){return b?q(a,b):a}
function rc(a){v(!Ia(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}function sc(a){var b="Unknown Error";"too_big"===a?b="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==a?b="Client doesn't have permission to access the desired data.":"unavailable"==a&&(b="The service is unavailable");b=Error(a+": "+b);b.code=a.toUpperCase();return b}var tc=/^-?\d{1,10}$/;function lc(a){return tc.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}
function uc(a){try{a()}catch(b){setTimeout(function(){throw b;},Math.floor(0))}}function P(a,b){if(ia(a)){var c=Array.prototype.slice.call(arguments,1).slice();uc(function(){a.apply(null,c)})}};function vc(a,b){this.H=a;v(null!==this.H,"LeafNode shouldn't be created with null value.");this.qb="undefined"!==typeof b?b:null}k=vc.prototype;k.Q=function(){return!0};k.m=function(){return this.qb};k.Ka=function(a){return new vc(this.H,a)};k.P=function(){return Q};k.N=function(a){return null===D(a)?this:Q};k.ha=function(){return null};k.K=function(a,b){return(new R).K(a,b).Ka(this.qb)};k.Ba=function(a,b){var c=D(a);return null===c?b:this.K(c,Q.Ba(Ua(a),b))};k.f=function(){return!1};k.qc=function(){return 0};
k.X=function(a){return a&&null!==this.m()?{".value":this.k(),".priority":this.m()}:this.k()};k.hash=function(){var a="";null!==this.m()&&(a+="priority:"+wc(this.m())+":");var b=typeof this.H,a=a+(b+":"),a="number"===b?a+rc(this.H):a+this.H;return $b(a)};k.k=function(){return this.H};k.toString=function(){return"string"===typeof this.H?this.H:'"'+this.H+'"'};function xc(a,b){return jc(a.la,b.la)||kc(a.name,b.name)}function yc(a,b){return kc(a.name,b.name)}function zc(a,b){return kc(a,b)};function R(a,b){this.o=a||new cb(zc);this.qb="undefined"!==typeof b?b:null}k=R.prototype;k.Q=function(){return!1};k.m=function(){return this.qb};k.Ka=function(a){return new R(this.o,a)};k.K=function(a,b){var c=this.o.remove(a);b&&b.f()&&(b=null);null!==b&&(c=c.ta(a,b));return b&&null!==b.m()?new Ac(c,null,this.qb):new R(c,this.qb)};k.Ba=function(a,b){var c=D(a);if(null===c)return b;var d=this.P(c).Ba(Ua(a),b);return this.K(c,d)};k.f=function(){return this.o.f()};k.qc=function(){return this.o.count()};
var Bc=/^(0|[1-9]\d*)$/;k=R.prototype;k.X=function(a){if(this.f())return null;var b={},c=0,d=0,e=!0;this.B(function(f,g){b[f]=g.X(a);c++;e&&Bc.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&null!==this.m()&&(b[".priority"]=this.m());return b};k.hash=function(){var a="";null!==this.m()&&(a+="priority:"+wc(this.m())+":");this.B(function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});return""===a?"":$b(a)};
k.P=function(a){a=this.o.get(a);return null===a?Q:a};k.N=function(a){var b=D(a);return null===b?this:this.P(b).N(Ua(a))};k.ha=function(a){return gb(this.o,a)};k.Jd=function(){return this.o.Mb()};k.Kd=function(){return this.o.lb()};k.B=function(a){return this.o.Fa(a)};k.$c=function(a){return this.o.Xa(a)};k.jb=function(){return this.o.jb()};k.toString=function(){var a="{",b=!0;this.B(function(c,d){b?b=!1:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};var Q=new R;function Ac(a,b,c){R.call(this,a,c);null===b&&(b=new cb(xc),a.Fa(function(a,c){b=b.ta({name:a,la:c.m()},c)}));this.ya=b}oa(Ac,R);k=Ac.prototype;k.K=function(a,b){var c=this.P(a),d=this.o,e=this.ya;null!==c&&(d=d.remove(a),e=e.remove({name:a,la:c.m()}));b&&b.f()&&(b=null);null!==b&&(d=d.ta(a,b),e=e.ta({name:a,la:b.m()},b));return new Ac(d,e,this.m())};k.ha=function(a,b){var c=gb(this.ya,{name:a,la:b.m()});return c?c.name:null};k.B=function(a){return this.ya.Fa(function(b,c){return a(b.name,c)})};
k.$c=function(a){return this.ya.Xa(function(b,c){return a(b.name,c)})};k.jb=function(){return this.ya.jb(function(a,b){return{key:a.name,value:b}})};k.Jd=function(){return this.ya.f()?null:this.ya.Mb().name};k.Kd=function(){return this.ya.f()?null:this.ya.lb().name};function S(a,b){if(null===a)return Q;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);v(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new vc(a,c);if(a instanceof Array){var d=Q,e=a;pc(e,function(a,b){if(A(e,b)&&"."!==b.substring(0,1)){var c=S(a);if(c.Q()||!c.f())d=
d.K(b,c)}});return d.Ka(c)}var f=[],g={},h=!1,m=a;oc(m,function(a,b){if("string"!==typeof b||"."!==b.substring(0,1)){var c=S(m[b]);c.f()||(h=h||null!==c.m(),f.push({name:b,la:c.m()}),g[b]=c)}});var n=Cc(f,g,!1);if(h){var r=Cc(f,g,!0);return new Ac(n,r,c)}return new R(n,c)}var Dc=Math.log(2);function Ec(a){this.count=parseInt(Math.log(a+1)/Dc,10);this.Fd=this.count-1;this.pe=a+1&parseInt(Array(this.count+1).join("1"),2)}function Fc(a){var b=!(a.pe&1<<a.Fd);a.Fd--;return b}
function Cc(a,b,c){function d(e,f){var m=f-e;if(0==m)return null;if(1==m){var m=a[e].name,n=c?a[e]:m;return new jb(n,b[m],!1,null,null)}var n=parseInt(m/2,10)+e,r=d(e,n),s=d(n+1,f),m=a[n].name,n=c?a[n]:m;return new jb(n,b[m],!1,r,s)}var e=c?xc:yc;a.sort(e);var f=function(e){function f(e,g){var h=r-e,t=r;r-=e;var s=a[h].name,h=new jb(c?a[h]:s,b[s],g,null,d(h+1,t));m?m.left=h:n=h;m=h}for(var m=null,n=null,r=a.length,s=0;s<e.count;++s){var t=Fc(e),w=Math.pow(2,e.count-(s+1));t?f(w,!1):(f(w,!1),f(w,!0))}return n}(new Ec(a.length)),
e=c?xc:zc;return null!==f?new cb(e,f):new cb(e)}function wc(a){return"number"===typeof a?"number:"+rc(a):"string:"+a};function T(a,b){this.A=a;this.Cc=b}T.prototype.X=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.X()};T.prototype.val=T.prototype.X;T.prototype.te=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.X(!0)};T.prototype.exportVal=T.prototype.te;T.prototype.J=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);ha(a)&&(a=String(a));Na("Firebase.DataSnapshot.child",a);var b=new H(a),c=this.Cc.J(b);return new T(this.A.N(b),c)};
T.prototype.child=T.prototype.J;T.prototype.ed=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Na("Firebase.DataSnapshot.hasChild",a);var b=new H(a);return!this.A.N(b).f()};T.prototype.hasChild=T.prototype.ed;T.prototype.m=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.m()};T.prototype.getPriority=T.prototype.m;
T.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);z("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.Q())return!1;var b=this;return this.A.B(function(c,d){return a(new T(d,b.Cc.J(c)))})};T.prototype.forEach=T.prototype.forEach;T.prototype.Gb=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.Q()?!1:!this.A.f()};T.prototype.hasChildren=T.prototype.Gb;
T.prototype.name=function(){x("Firebase.DataSnapshot.name",0,0,arguments.length);return this.Cc.name()};T.prototype.name=T.prototype.name;T.prototype.qc=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.qc()};T.prototype.numChildren=T.prototype.qc;T.prototype.rd=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.Cc};T.prototype.ref=T.prototype.rd;function Gc(a){v(fa(a)&&0<a.length,"Requires a non-empty array");this.he=a;this.Kb={}}Gc.prototype.Mc=function(a,b){for(var c=this.Kb[a]||[],d=0;d<c.length;d++)c[d].ca.apply(c[d].$,Array.prototype.slice.call(arguments,1))};Gc.prototype.Ta=function(a,b,c){Hc(this,a);this.Kb[a]=this.Kb[a]||[];this.Kb[a].push({ca:b,$:c});(a=this.cd(a))&&b.apply(c,a)};Gc.prototype.nb=function(a,b,c){Hc(this,a);a=this.Kb[a]||[];for(var d=0;d<a.length;d++)if(a[d].ca===b&&(!c||c===a[d].$)){a.splice(d,1);break}};
function Hc(a,b){v(Kb(a.he,function(a){return a===b}),"Unknown event: "+b)};function Ic(){Gc.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.yb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.yb&&(c.yb=b,c.Mc("visible",b))},!1)}}oa(Ic,Gc);da(Ic);Ic.prototype.cd=function(a){v("visible"===a,"Unknown event type: "+a);return[this.yb]};function Jc(){Gc.call(this,["online"]);this.Pb=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Pb||a.Mc("online",!0);a.Pb=!0},!1);window.addEventListener("offline",function(){a.Pb&&a.Mc("online",!1);a.Pb=!1},!1)}}oa(Jc,Gc);da(Jc);Jc.prototype.cd=function(a){v("online"===a,"Unknown event type: "+a);return[this.Pb]};function pc(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Kc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Lc(a){for(var b in a)return!1;return!0}function Mc(a){var b={},c;for(c in a)b[c]=a[c];return b}var Nc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Pc(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Nc.length;f++)c=Nc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Qc(){this.Cb={}}function Rc(a,b,c){l(c)||(c=1);A(a.Cb,b)||(a.Cb[b]=0);a.Cb[b]+=c}Qc.prototype.get=function(){return Mc(this.Cb)};function Sc(a){this.qe=a;this.mc=null}Sc.prototype.get=function(){var a=this.qe.get(),b=Mc(a);if(this.mc)for(var c in this.mc)b[c]-=this.mc[c];this.mc=a;return b};function Tc(a,b){this.yd={};this.Hc=new Sc(a);this.n=b;var c=1E4+2E4*Math.random();setTimeout(q(this.Ud,this),Math.floor(c))}Tc.prototype.Ud=function(){var a=this.Hc.get(),b={},c=!1,d;for(d in a)0<a[d]&&A(this.yd,d)&&(b[d]=a[d],c=!0);c&&(a=this.n,a.T&&(b={c:b},a.e("reportStats",b),a.Ia("s",b)));setTimeout(q(this.Ud,this),Math.floor(6E5*Math.random()))};var Uc={},Vc={};function Wc(a){a=a.toString();Uc[a]||(Uc[a]=new Qc);return Uc[a]}function Xc(a,b){var c=a.toString();Vc[c]||(Vc[c]=b());return Vc[c]};var Yc=null;"undefined"!==typeof MozWebSocket?Yc=MozWebSocket:"undefined"!==typeof WebSocket&&(Yc=WebSocket);function Zc(a,b,c){this.Wc=a;this.e=ec(this.Wc);this.frames=this.Ib=null;this.Ma=this.Na=this.Ad=0;this.ga=Wc(b);this.Ca=(b.Ya?"wss://":"ws://")+b.ia+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.Ca+="&r=f");b.host!==b.ia&&(this.Ca=this.Ca+"&ns="+b.Sa);c&&(this.Ca=this.Ca+"&s="+c)}var $c;
Zc.prototype.open=function(a,b){this.ka=b;this.Ge=a;this.e("Websocket connecting to "+this.Ca);this.Y=new Yc(this.Ca);this.Eb=!1;xb.set("previous_websocket_failure",!0);var c=this;this.Y.onopen=function(){c.e("Websocket connected.");c.Eb=!0};this.Y.onclose=function(){c.e("Websocket connection was disconnected.");c.Y=null;c.Va()};this.Y.onmessage=function(a){if(null!==c.Y)if(a=a.data,c.Ma+=a.length,Rc(c.ga,"bytes_received",a.length),ad(c),null!==c.frames)bd(c,a);else{a:{v(null===c.frames,"We already have a frame buffer");
if(6>=a.length){var b=Number(a);if(!isNaN(b)){c.Ad=b;c.frames=[];a=null;break a}}c.Ad=1;c.frames=[]}null!==a&&bd(c,a)}};this.Y.onerror=function(a){c.e("WebSocket error.  Closing connection.");(a=a.message||a.data)&&c.e(a);c.Va()}};Zc.prototype.start=function(){};Zc.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Yc&&!$c};
Zc.responsesRequiredToBeHealthy=2;Zc.healthyTimeout=3E4;k=Zc.prototype;k.nc=function(){xb.remove("previous_websocket_failure")};function bd(a,b){a.frames.push(b);if(a.frames.length==a.Ad){var c=a.frames.join("");a.frames=null;c=va(c);a.Ge(c)}}k.send=function(a){ad(this);a=u(a);this.Na+=a.length;Rc(this.ga,"bytes_sent",a.length);a=nc(a,16384);1<a.length&&this.Y.send(String(a.length));for(var b=0;b<a.length;b++)this.Y.send(a[b])};
k.ac=function(){this.Qa=!0;this.Ib&&(clearInterval(this.Ib),this.Ib=null);this.Y&&(this.Y.close(),this.Y=null)};k.Va=function(){this.Qa||(this.e("WebSocket is closing itself"),this.ac(),this.ka&&(this.ka(this.Eb),this.ka=null))};k.close=function(){this.Qa||(this.e("WebSocket is being closed"),this.ac())};function ad(a){clearInterval(a.Ib);a.Ib=setInterval(function(){a.Y&&a.Y.send("0");ad(a)},Math.floor(45E3))};function cd(a){this.ob=a;this.xc=[];this.eb=0;this.Vc=-1;this.Ua=null}function dd(a,b,c){a.Vc=b;a.Ua=c;a.Vc<a.eb&&(a.Ua(),a.Ua=null)}function ed(a,b,c){for(a.xc[b]=c;a.xc[a.eb];){var d=a.xc[a.eb];delete a.xc[a.eb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;uc(function(){f.ob(d[e])})}if(a.eb===a.Vc){a.Ua&&(clearTimeout(a.Ua),a.Ua(),a.Ua=null);break}a.eb++}};function fd(){this.set={}}k=fd.prototype;k.add=function(a,b){this.set[a]=null!==b?b:!0};k.contains=function(a){return A(this.set,a)};k.get=function(a){return this.contains(a)?this.set[a]:void 0};k.remove=function(a){delete this.set[a]};k.clear=function(){this.set={}};k.f=function(){return Lc(this.set)};k.count=function(){var a=this.set,b=0,c;for(c in a)b++;return b};function gd(a,b){pc(a.set,function(a,d){b(d,a)})}k.keys=function(){var a=[];pc(this.set,function(b,c){a.push(c)});return a};function hd(a,b,c){this.Wc=a;this.e=ec(a);this.Ma=this.Na=0;this.ga=Wc(b);this.Gc=c;this.Eb=!1;this.dc=function(a){b.host!==b.ia&&(a.ns=b.Sa);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.Ya?"https://":"http://")+b.ia+"/.lp?"+c.join("&")}}var id,jd;
hd.prototype.open=function(a,b){this.Ed=0;this.U=b;this.Od=new cd(a);this.Qa=!1;var c=this;this.Oa=setTimeout(function(){c.e("Timed out trying to connect.");c.Va();c.Oa=null},Math.floor(3E4));ic(function(){if(!c.Qa){c.na=new kd(function(a,b,d,h,m){ld(c,arguments);if(c.na)if(c.Oa&&(clearTimeout(c.Oa),c.Oa=null),c.Eb=!0,"start"==a)c.id=b,c.Td=d;else if("close"===a)b?(c.na.Fc=!1,dd(c.Od,b,function(){c.Va()})):c.Va();else throw Error("Unrecognized command received: "+a);},function(a,b){ld(c,arguments);
ed(c.Od,a,b)},function(){c.Va()},c.dc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.na.Nc&&(a.cb=c.na.Nc);a.v="5";c.Gc&&(a.s=c.Gc);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.dc(a);c.e("Connecting via long-poll to "+a);md(c.na,a,function(){})}})};
hd.prototype.start=function(){var a=this.na,b=this.Td;a.Be=this.id;a.Ce=b;for(a.Qc=!0;nd(a););a=this.id;b=this.Td;this.mb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.mb.src=this.dc(c);this.mb.style.display="none";document.body.appendChild(this.mb)};hd.isAvailable=function(){return!jd&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Ze)&&(id||!0)};k=hd.prototype;
k.nc=function(){};k.ac=function(){this.Qa=!0;this.na&&(this.na.close(),this.na=null);this.mb&&(document.body.removeChild(this.mb),this.mb=null);this.Oa&&(clearTimeout(this.Oa),this.Oa=null)};k.Va=function(){this.Qa||(this.e("Longpoll is closing itself"),this.ac(),this.U&&(this.U(this.Eb),this.U=null))};k.close=function(){this.Qa||(this.e("Longpoll is being closed."),this.ac())};
k.send=function(a){a=u(a);this.Na+=a.length;Rc(this.ga,"bytes_sent",a.length);a=wa(a);a=Xb(a,!0);a=nc(a,1840);for(var b=0;b<a.length;b++){var c=this.na;c.Tb.push({Pe:this.Ed,We:a.length,Gd:a[b]});c.Qc&&nd(c);this.Ed++}};function ld(a,b){var c=u(b).length;a.Ma+=c;Rc(a.ga,"bytes_received",c)}
function kd(a,b,c,d){this.dc=d;this.ka=c;this.od=new fd;this.Tb=[];this.Yc=Math.floor(1E8*Math.random());this.Fc=!0;this.Nc=Yb();window["pLPCommand"+this.Nc]=a;window["pRTLPCB"+this.Nc]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||M("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.Da=a.contentDocument:a.contentWindow?a.Da=a.contentWindow.document:a.document&&(a.Da=a.document);this.aa=a;a="";this.aa.src&&"javascript:"===this.aa.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.aa.Da.open(),this.aa.Da.write(a),this.aa.Da.close()}catch(f){M("frame writing exception"),f.stack&&M(f.stack),M(f)}}
kd.prototype.close=function(){this.Qc=!1;if(this.aa){this.aa.Da.body.innerHTML="";var a=this;setTimeout(function(){null!==a.aa&&(document.body.removeChild(a.aa),a.aa=null)},Math.floor(0))}var b=this.ka;b&&(this.ka=null,b())};
function nd(a){if(a.Qc&&a.Fc&&a.od.count()<(0<a.Tb.length?2:1)){a.Yc++;var b={};b.id=a.Be;b.pw=a.Ce;b.ser=a.Yc;for(var b=a.dc(b),c="",d=0;0<a.Tb.length;)if(1870>=a.Tb[0].Gd.length+30+c.length){var e=a.Tb.shift(),c=c+"&seg"+d+"="+e.Pe+"&ts"+d+"="+e.We+"&d"+d+"="+e.Gd;d++}else break;od(a,b+c,a.Yc);return!0}return!1}function od(a,b,c){function d(){a.od.remove(c);nd(a)}a.od.add(c);var e=setTimeout(d,Math.floor(25E3));md(a,b,function(){clearTimeout(e);d()})}
function md(a,b,c){setTimeout(function(){try{if(a.Fc){var d=a.aa.Da.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){M("Long-poll script failed to load: "+b);a.Fc=!1;a.close()};a.aa.Da.body.appendChild(d)}}catch(e){}},Math.floor(1))};function pd(a){qd(this,a)}var rd=[hd,Zc];function qd(a,b){var c=Zc&&Zc.isAvailable(),d=c&&!(xb.Nd||!0===xb.get("previous_websocket_failure"));b.Ye&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.bc=[Zc];else{var e=a.bc=[];oc(rd,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function sd(a){if(0<a.bc.length)return a.bc[0];throw Error("No transports available");};function td(a,b,c,d,e,f){this.id=a;this.e=ec("c:"+this.id+":");this.ob=c;this.Ob=d;this.U=e;this.md=f;this.D=b;this.wc=[];this.Dd=0;this.ce=new pd(b);this.oa=0;this.e("Connection created");ud(this)}
function ud(a){var b=sd(a.ce);a.C=new b("c:"+a.id+":"+a.Dd++,a.D);a.qd=b.responsesRequiredToBeHealthy||0;var c=vd(a,a.C),d=wd(a,a.C);a.cc=a.C;a.$b=a.C;a.w=null;a.Ra=!1;setTimeout(function(){a.C&&a.C.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.kc=setTimeout(function(){a.kc=null;a.Ra||(a.C&&102400<a.C.Ma?(a.e("Connection exceeded healthy timeout but has received "+a.C.Ma+" bytes.  Marking connection healthy."),a.Ra=!0,a.C.nc()):a.C&&10240<a.C.Na?a.e("Connection exceeded healthy timeout but has sent "+
a.C.Na+" bytes.  Leaving connection alive."):(a.e("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function wd(a,b){return function(c){b===a.C?(a.C=null,c||0!==a.oa?1===a.oa&&a.e("Realtime connection lost."):(a.e("Realtime connection failed."),"s-"===a.D.ia.substr(0,2)&&(xb.remove("host:"+a.D.host),a.D.ia=a.D.host)),a.close()):b===a.w?(a.e("Secondary connection lost."),c=a.w,a.w=null,a.cc!==c&&a.$b!==c||a.close()):a.e("closing an old connection")}}
function vd(a,b){return function(c){if(2!=a.oa)if(b===a.$b){var d=mc("t",c);c=mc("d",c);if("c"==d){if(d=mc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Gc=c.s;zb(a.D,f);0==a.oa&&(a.C.start(),xd(a,a.C,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.ce,(c=1<c.bc.length?c.bc[1]:null)&&yd(a,c))}else if("n"===d){a.e("recvd end transmission on primary");a.$b=a.w;for(c=0;c<a.wc.length;++c)a.tc(a.wc[c]);a.wc=[];zd(a)}else"s"===d?(a.e("Connection shutdown command received. Shutting down..."),
a.md&&(a.md(c),a.md=null),a.U=null,a.close()):"r"===d?(a.e("Reset packet received.  New host: "+c),zb(a.D,c),1===a.oa?a.close():(Ad(a),ud(a))):"e"===d?fc("Server Error: "+c):"o"===d?(a.e("got pong on primary."),Dd(a),Ed(a)):fc("Unknown control packet command: "+d)}else"d"==d&&a.tc(c)}else if(b===a.w)if(d=mc("t",c),c=mc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Fd(a):"r"===c?(a.e("Got a reset on secondary, closing it"),a.w.close(),a.cc!==a.w&&a.$b!==a.w||a.close()):"o"===c&&(a.e("got pong on secondary."),
a.Yd--,Fd(a)));else if("d"==d)a.wc.push(c);else throw Error("Unknown protocol layer: "+d);else a.e("message on old connection")}}td.prototype.Zd=function(a){Gd(this,{t:"d",d:a})};function zd(a){a.cc===a.w&&a.$b===a.w&&(a.e("cleaning up and promoting a connection: "+a.w.Wc),a.C=a.w,a.w=null)}
function Fd(a){0>=a.Yd?(a.e("Secondary connection is healthy."),a.Ra=!0,a.w.nc(),a.w.start(),a.e("sending client ack on secondary"),a.w.send({t:"c",d:{t:"a",d:{}}}),a.e("Ending transmission on primary"),a.C.send({t:"c",d:{t:"n",d:{}}}),a.cc=a.w,zd(a)):(a.e("sending ping on secondary."),a.w.send({t:"c",d:{t:"p",d:{}}}))}td.prototype.tc=function(a){Dd(this);this.ob(a)};function Dd(a){a.Ra||(a.qd--,0>=a.qd&&(a.e("Primary connection is healthy."),a.Ra=!0,a.C.nc()))}
function yd(a,b){a.w=new b("c:"+a.id+":"+a.Dd++,a.D,a.Gc);a.Yd=b.responsesRequiredToBeHealthy||0;a.w.open(vd(a,a.w),wd(a,a.w));setTimeout(function(){a.w&&(a.e("Timed out trying to upgrade."),a.w.close())},Math.floor(6E4))}function xd(a,b,c){a.e("Realtime connection established.");a.C=b;a.oa=1;a.Ob&&(a.Ob(c),a.Ob=null);0===a.qd?(a.e("Primary connection is healthy."),a.Ra=!0):setTimeout(function(){Ed(a)},Math.floor(5E3))}
function Ed(a){a.Ra||1!==a.oa||(a.e("sending ping on primary."),Gd(a,{t:"c",d:{t:"p",d:{}}}))}function Gd(a,b){if(1!==a.oa)throw"Connection is not connected";a.cc.send(b)}td.prototype.close=function(){2!==this.oa&&(this.e("Closing realtime connection."),this.oa=2,Ad(this),this.U&&(this.U(),this.U=null))};function Ad(a){a.e("Shutting down all connections");a.C&&(a.C.close(),a.C=null);a.w&&(a.w.close(),a.w=null);a.kc&&(clearTimeout(a.kc),a.kc=null)};function Hd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=va(Zb(f[0])||""),c=va(Zb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{cf:b,Uc:c,data:d,Ue:e}}function Id(a){a=Hd(a).Uc;return"object"===typeof a&&a.hasOwnProperty("iat")?B(a,"iat"):null}function Jd(a){a=Hd(a);var b=a.Uc;return!!a.Ue&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Kd(a,b,c,d,e){this.id=Ld++;this.e=ec("p:"+this.id+":");this.Za=!0;this.ja={};this.V=[];this.Qb=0;this.Nb=[];this.T=!1;this.va=1E3;this.oc=3E5;this.uc=b||ca;this.sc=c||ca;this.nd=d||ca;this.dd=e||ca;this.D=a;this.ud=null;this.Xb={};this.Oe=0;this.Jb=this.hd=null;Md(this,0);Ic.ib().Ta("visible",this.Je,this);-1===a.host.indexOf("fblocal")&&Jc.ib().Ta("online",this.He,this)}var Ld=0,Nd=0;k=Kd.prototype;
k.Ia=function(a,b,c){var d=++this.Oe;a={r:d,a:a,b:b};this.e(u(a));v(this.T,"sendRequest_ call when we're not connected not allowed.");this.ma.Zd(a);c&&(this.Xb[d]=c)};function Od(a,b,c){var d=b.toString(),e=b.path().toString();a.ja[e]=a.ja[e]||{};v(!a.ja[e][d],"listen() called twice for same path/queryId.");a.ja[e][d]={rb:b.rb(),G:c};a.T&&Pd(a,e,d,b.rb(),c)}
function Pd(a,b,c,d,e){a.e("Listen on "+b+" for "+c);var f={p:b};d=Hb(d,function(a){return Sa(a)});"{}"!==c&&(f.q=d);f.h=a.dd(b);a.Ia("l",f,function(d){a.e("listen response",d);d=d.s;"ok"!==d&&Qd(a,b,c);e&&e(d)})}k.I=function(a,b,c){this.bb={re:a,Id:!1,ca:b,fc:c};this.e("Authenticating using credential: "+a);Rd(this);(b=40==a.length)||(a=Hd(a).Uc,b="object"===typeof a&&!0===B(a,"admin"));b&&(this.e("Admin auth credential detected.  Reducing max reconnect time."),this.oc=3E4)};
k.Bd=function(a){delete this.bb;this.T&&this.Ia("unauth",{},function(b){a(b.s,b.d)})};function Rd(a){var b=a.bb;a.T&&b&&a.Ia("auth",{cred:b.re},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.bb===b&&delete a.bb;b.Id?"ok"!==d&&b.fc&&b.fc(d,c):(b.Id=!0,b.ca&&b.ca(d,c))})}function Sd(a,b,c,d){b=b.toString();Qd(a,b,c)&&a.T&&Td(a,b,c,d)}function Td(a,b,c,d){a.e("Unlisten on "+b+" for "+c);b={p:b};d=Hb(d,function(a){return Sa(a)});"{}"!==c&&(b.q=d);a.Ia("u",b)}
function Ud(a,b,c,d){a.T?Vd(a,"o",b,c,d):a.Nb.push({pb:b,action:"o",data:c,G:d})}function Wd(a,b,c,d){a.T?Vd(a,"om",b,c,d):a.Nb.push({pb:b,action:"om",data:c,G:d})}k.ld=function(a,b){this.T?Vd(this,"oc",a,null,b):this.Nb.push({pb:a,action:"oc",data:null,G:b})};function Vd(a,b,c,d,e){c={p:c,d:d};a.e("onDisconnect "+b,c);a.Ia(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}k.put=function(a,b,c,d){Xd(this,"p",a,b,c,d)};function Yd(a,b,c,d){Xd(a,"m",b,c,d,void 0)}
function Xd(a,b,c,d,e,f){c={p:c,d:d};l(f)&&(c.h=f);a.V.push({action:b,Vd:c,G:e});a.Qb++;b=a.V.length-1;a.T&&Zd(a,b)}function Zd(a,b){var c=a.V[b].action,d=a.V[b].Vd,e=a.V[b].G;a.V[b].Le=a.T;a.Ia(c,d,function(d){a.e(c+" response",d);delete a.V[b];a.Qb--;0===a.Qb&&(a.V=[]);e&&e(d.s,d.d)})}
k.tc=function(a){if("r"in a){this.e("from server: "+u(a));var b=a.r,c=this.Xb[b];c&&(delete this.Xb[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.e("handleServerMessage",b,c),"d"===b?this.uc(c.p,c.d,!1):"m"===b?this.uc(c.p,c.d,!0):"c"===b?$d(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.bb,delete this.bb,c&&c.fc&&c.fc(a,b)):"sd"===b?this.ud?this.ud(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n","\nFIREBASE: ")):
fc("Unrecognized action received from server: "+u(b)+"\nAre you using the latest client?"))}};k.Ob=function(a){this.e("connection ready");this.T=!0;this.Jb=(new Date).getTime();this.nd({serverTimeOffset:a-(new Date).getTime()});Rd(this);for(var b in this.ja)for(var c in this.ja[b])a=this.ja[b][c],Pd(this,b,c,a.rb,a.G);for(b=0;b<this.V.length;b++)this.V[b]&&Zd(this,b);for(;this.Nb.length;)b=this.Nb.shift(),Vd(this,b.action,b.pb,b.data,b.G);this.sc(!0)};
function Md(a,b){v(!a.ma,"Scheduling a connect when we're already connected/ing?");a.gb&&clearTimeout(a.gb);a.gb=setTimeout(function(){a.gb=null;ae(a)},Math.floor(b))}k.Je=function(a){a&&!this.yb&&this.va===this.oc&&(this.e("Window became visible.  Reducing delay."),this.va=1E3,this.ma||Md(this,0));this.yb=a};
k.He=function(a){a?(this.e("Browser went online.  Reconnecting."),this.va=1E3,this.Za=!0,this.ma||Md(this,0)):(this.e("Browser went offline.  Killing connection; don't reconnect."),this.Za=!1,this.ma&&this.ma.close())};
k.Qd=function(){this.e("data client disconnected");this.T=!1;this.ma=null;for(var a=0;a<this.V.length;a++){var b=this.V[a];b&&"h"in b.Vd&&b.Le&&(b.G&&b.G("disconnect"),delete this.V[a],this.Qb--)}0===this.Qb&&(this.V=[]);if(this.Za)this.yb?this.Jb&&(3E4<(new Date).getTime()-this.Jb&&(this.va=1E3),this.Jb=null):(this.e("Window isn't visible.  Delaying reconnect."),this.va=this.oc,this.hd=(new Date).getTime()),a=Math.max(0,this.va-((new Date).getTime()-this.hd)),a*=Math.random(),this.e("Trying to reconnect in "+
a+"ms"),Md(this,a),this.va=Math.min(this.oc,1.3*this.va);else for(var c in this.Xb)delete this.Xb[c];this.sc(!1)};function ae(a){if(a.Za){a.e("Making a connection attempt");a.hd=(new Date).getTime();a.Jb=null;var b=q(a.tc,a),c=q(a.Ob,a),d=q(a.Qd,a),e=a.id+":"+Nd++;a.ma=new td(e,a.D,b,c,d,function(b){O(b+" ("+a.D.toString()+")");a.Za=!1})}}k.Pa=function(){this.Za=!1;this.ma?this.ma.close():(this.gb&&(clearTimeout(this.gb),this.gb=null),this.T&&this.Qd())};
k.ub=function(){this.Za=!0;this.va=1E3;this.T||Md(this,0)};function $d(a,b,c){c=c?Hb(c,function(a){return Ta(a)}).join("$"):"{}";(a=Qd(a,b,c))&&a.G&&a.G("permission_denied")}function Qd(a,b,c){b=(new H(b)).toString();c||(c="{}");var d=a.ja[b][c];delete a.ja[b][c];return d};function be(){this.o=this.H=null}be.prototype.sb=function(a,b){if(a.f())this.H=b,this.o=null;else if(null!==this.H)this.H=this.H.Ba(a,b);else{null==this.o&&(this.o=new fd);var c=D(a);this.o.contains(c)||this.o.add(c,new be);c=this.o.get(c);a=Ua(a);c.sb(a,b)}};
function ce(a,b){if(b.f())return a.H=null,a.o=null,!0;if(null!==a.H){if(a.H.Q())return!1;var c=a.H;a.H=null;c.B(function(b,c){a.sb(new H(b),c)});return ce(a,b)}return null!==a.o?(c=D(b),b=Ua(b),a.o.contains(c)&&ce(a.o.get(c),b)&&a.o.remove(c),a.o.f()?(a.o=null,!0):!1):!0}function de(a,b,c){null!==a.H?c(b,a.H):a.B(function(a,e){var f=new H(b.toString()+"/"+a);de(e,f,c)})}be.prototype.B=function(a){null!==this.o&&gd(this.o,function(b,c){a(b,c)})};function ee(){this.ba=Q}function U(a,b){return a.ba.N(b)}function V(a,b,c){a.ba=a.ba.Ba(b,c)}ee.prototype.toString=function(){return this.ba.toString()};function fe(){this.wa=new ee;this.O=new ee;this.qa=new ee;this.Sb=new Ya}function ge(a,b,c){V(a.wa,b,c);return he(a,b)}function he(a,b){for(var c=U(a.wa,b),d=U(a.O,b),e=I(a.Sb,b),f=!1,g=e;null!==g;){if(null!==g.k()){f=!0;break}g=g.parent()}if(f)return!1;c=ie(c,d,e);return c!==d?(V(a.O,b,c),!0):!1}function ie(a,b,c){if(c.f())return a;if(null!==c.k())return b;a=a||Q;c.B(function(d){d=d.name();var e=a.P(d),f=b.P(d),g=I(c,d),e=ie(e,f,g);a=a.K(d,e)});return a}
fe.prototype.set=function(a,b){var c=this,d=[];Fb(b,function(a){var b=a.path;a=a.ua;var g=Yb();Za(I(c.Sb,b),g);V(c.O,b,a);d.push({path:b,Re:g})});return d};function je(a,b){Fb(b,function(b){var d=b.Re;b=I(a.Sb,b.path);var e=b.k();v(null!==e,"pendingPut should not be null.");e===d&&Za(b,null)})};function ke(a,b){return a&&"object"===typeof a?(v(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function le(a,b){var c=new be;de(a,new H(""),function(a,e){c.sb(a,me(e,b))});return c}function me(a,b){var c=ke(a.m(),b),d;if(a.Q()){var e=ke(a.k(),b);return e!==a.k()||c!==a.m()?new vc(e,c):a}d=a;c!==a.m()&&(d=d.Ka(c));a.B(function(a,c){var e=me(c,b);e!==c&&(d=d.K(a,e))});return d};var ne="auth.firebase.com";function oe(a,b,c){this.hc=a||{};this.Lc=b||{};this.vb=c||{};this.hc.remember||(this.hc.remember="default")}var pe=["remember","redirectTo"];function qe(a){var b={},c={};Aa(a||{},function(a,e){0<=Eb(pe,a)?b[a]=e:c[a]=e});return new oe(b,{},c)};var re={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function W(a){var b=Error(B(re,a),a);b.code=a;return b};function se(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function te(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function ue(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function ve(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function we(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=B(a,c);if(fa(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(B(a,c)))}return b.join("&")}function xe(){var a=hc(ne);return a.scheme+"://"+a.host+"/v2"};function ye(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function ze(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function Ae(a){a=a||{};a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Ae.prototype.open=function(a,b,c){function d(){c&&(c(W("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;te(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=va(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(W("SERVER_ERROR")):c(W("NETWORK_ERROR"));c=null;ue(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+we(b),g=null;else{var h=this.options.headers.content_type;
"application/json"===h&&(g=u(b));"application/x-www-form-urlencoded"===h&&(g=we(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Pc(a,this.options.headers);for(var m in a)e.setRequestHeader(m,a[m]);e.send(g)};Ae.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||ze())};Ae.prototype.Bb=function(){return"json"};function Be(a){a=a||{};this.Yb=Db()+Db()+Db();this.Rd=a||{}}
Be.prototype.open=function(a,b,c){function d(){c&&(c(W("USER_CANCELLED")),c=null)}var e=this,f=hc(ne),g;b.requestId=this.Yb;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=we(b);(g=window.open(a,"_blank","location=no"))&&ia(g.addEventListener)?(g.addEventListener("loadstart",function(a){a&&a.url&&(a=hc(a.url),a.host===ne&&"/blank/page.html"===a.pb&&(g.removeEventListener("exit",d),g.close(),a=new oe(null,null,{requestId:e.Yb}),e.Rd.requestWithCredential("/auth/session",
a,c),c=null))}),g.addEventListener("exit",d)):c(W("TRANSPORT_UNAVAILABLE"))};na("fb.login.transports.CordovaInAppBrowser.prototype.open",Be.prototype.open);Be.isAvailable=function(){return ye()};Be.prototype.Bb=function(){return"redirect"};function Ce(a){a=a||{};if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");a.relay_url||(a.relay_url=xe()+"/auth/channel");this.options=a}
Ce.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);r&&(r=clearInterval(r));ue(window,"message",e);ue(window,"unload",d);if(n&&!a)try{n.close()}catch(b){h.postMessage("die",m)}n=h=void 0}function e(a){if(a.origin===m)try{var b=va(a.data);"ready"===b.a?h.postMessage(s,m):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.bf),c&&(c(null,b.d),c=null))}catch(e){}}var f=ze(),g,h,m=ve(a);if(m!==ve(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},
0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),h=g.contentWindow);a+=(/\?/.test(a)?"":"?")+we(b);var n=window.open(a,this.options.window_name,this.options.window_features);h||(h=n);var r=setInterval(function(){n&&n.closed&&(d(!1),c&&(c(W("USER_CANCELLED")),c=null))},500),s=u({a:"request",d:b});te(window,"unload",d);te(window,"message",e)}};
na("fb.login.transports.Popup.prototype.open",Ce.prototype.open);Ce.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(ye()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};Ce.prototype.Bb=function(){return"popup"};function De(a){a=a||{};a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_login_jsonp=window.__firebase_login_jsonp||{}}
De.prototype.open=function(a,b,c){function d(){c&&(c(W("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){delete window.__firebase_login_jsonp[f];Lc(window.__firebase_login_jsonp)&&delete window.__firebase_login_jsonp;try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);ue(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_login_jsonp."+f;a+=(/\?/.test(a)?"":"?")+we(b);
te(window,"beforeunload",d);window.__firebase_login_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Ee(f,a,c)};
function Ee(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(W("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(W("NETWORK_ERROR"))}},0)}De.isAvailable=function(){return!ye()};De.prototype.Bb=function(){return"json"};function Fe(a,b){this.pd=["session",a.yc,a.Sa].join(":");this.Ic=b}Fe.prototype.set=function(a,b){if(!b)if(this.Ic.length)b=this.Ic[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.pd,a)};Fe.prototype.get=function(){var a=Hb(this.Ic,q(this.we,this)),a=Gb(a,function(a){return null!==a});Lb(a,function(a,c){return Id(c.token)-Id(a.token)});return 0<a.length?a.shift():null};Fe.prototype.we=function(a){try{var b=a.get(this.pd);if(b&&b.token)return b}catch(c){}return null};
Fe.prototype.clear=function(){var a=this;Fb(this.Ic,function(b){b.remove(a.pd)})};function Ge(a){a=a||{};this.Yb=Db()+Db()+Db();this.Rd=a||{}}Ge.prototype.open=function(a,b){K.set("redirect_request_id",this.Yb);b.requestId=this.Yb;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+we(b);window.location=a};na("fb.login.transports.Redirect.prototype.open",Ge.prototype.open);Ge.isAvailable=function(){return!/^file:\//.test(location.href)&&!ye()};Ge.prototype.Bb=function(){return"redirect"};function He(a,b,c,d){Gc.call(this,["auth_status"]);this.D=a;this.Cd=b;this.Xe=c;this.jd=d;this.wb=new Fe(a,[xb,K]);this.La=null;Ie(this)}oa(He,Gc);k=He.prototype;k.bd=function(){return this.La||null};function Ie(a){K.get("redirect_request_id")&&Je(a);var b=a.wb.get();b&&b.token?(Ke(a,b),a.Cd(b.token,function(c,d){Le(a,c,d,!1,b.token,b)},function(b,d){Me(a,"resumeSession()",b,d)})):Ke(a,null)}
function Ne(a,b,c,d,e,f){"firebaseio-demo.com"===a.D.domain&&O("FirebaseRef.auth() not supported on demo Firebases (*.firebaseio-demo.com). Please use on production Firebases only (*.firebaseio.com).");a.Cd(b,function(f,h){Le(a,f,h,!0,b,c,d||{},e)},function(b,c){Me(a,"auth()",b,c,f)})}function Oe(a,b){a.wb.clear();Ke(a,null);a.Xe(function(a,d){if("ok"===a)P(b);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;P(b,f)}})}
function Le(a,b,c,d,e,f,g,h){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Jd(e)?e:"",c=null,b&&A(b,"uid")?c=B(b,"uid"):A(f,"uid")&&(c=B(f,"uid")),f.uid=c,c="custom",b&&A(b,"provider")?c=B(b,"provider"):A(f,"provider")&&(c=B(f,"provider")),f.provider=c,a.wb.clear(),Jd(e)&&(g=g||{},c=xb,"sessionOnly"===g.remember&&(c=K),"none"!==g.remember&&a.wb.set(f,c)),Ke(a,f)),P(h,null,f)):(a.wb.clear(),Ke(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,P(h,f))}
function Me(a,b,c,d,e){O(b+" was canceled: "+d);a.wb.clear();Ke(a,null);a=Error(d);a.code=c.toUpperCase();P(e,a)}function Pe(a,b,c,d){Qe(a);var e=[Ae,De];c=qe(c);Re(a,e,"/auth/"+b,c,d)}
function Se(a,b,c,d){Qe(a);var e=[Ce,Be];c=qe(c);"anonymous"===b||"password"===b?setTimeout(function(){P(d,W("TRANSPORT_UNAVAILABLE"))},0):(c.Lc.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Lc.relay_url=xe()+"/"+a.D.Sa+"/auth/channel",c.Lc.requestWithCredential=q(a.Zb,a),Re(a,e,"/auth/"+b,c,d))}
function Je(a){var b=K.get("redirect_request_id");if(b){var c=K.get("redirect_client_options");K.remove("redirect_request_id");K.remove("redirect_client_options");var d=[Ae,De],b=new oe(c,{},{requestId:b});Re(a,d,"/auth/session",b)}}k.Xc=function(a,b){Qe(this);var c=qe(a);c.vb._method="POST";this.Zb("/users",c,function(a){P(b,a)})};
k.sd=function(a,b){var c=this;Qe(this);var d="/users/"+encodeURIComponent(a.email),e=qe(a);e.vb._method="DELETE";this.Zb(d,e,function(a,d){!a&&d&&d.uid&&c.La&&c.La.uid&&c.La.uid===d.uid&&Oe(c);P(b,a)})};k.Tc=function(a,b){Qe(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=qe(a);d.vb._method="PUT";d.vb.password=a.newPassword;this.Zb(c,d,function(a){P(b,a)})};
k.td=function(a,b){Qe(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=qe(a);d.vb._method="POST";this.Zb(c,d,function(a){P(b,a)})};k.Zb=function(a,b,c){Te(this,[Ae,De],a,b,c)};function Re(a,b,c,d,e){Te(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Ne(a,c.token,c,d.hc,function(a,b){a?P(e,a):P(e,null,b)}):P(e,b||W("UNKNOWN_ERROR"))})}
function Te(a,b,c,d,e){b=Gb(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){P(e,W("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Lc),d=Ba(d.vb),d.v="js-1.1.0",d.transport=b.Bb(),d.suppress_status_codes=!0,a=xe()+"/"+a.D.Sa+c,b.open(a,d,function(a,b){if(a)P(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;P(e,c)}else P(e,null,b)}))}
function Ke(a,b){var c=null!==a.La||null!==b;a.La=b;c&&a.Mc("auth_status",b);a.jd(null!==b)}k.cd=function(a){v("auth_status"===a,'initial event must be of type "auth_status"');return[this.La]};function Qe(a){var b=a.D;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===ne)throw Error("This custom Firebase server ('"+a.D.domain+"') does not support delegated login.");};function Ue(){this.hb=[]}function Ve(a,b){if(0!==b.length)for(var c=0;c<b.length;c++)a.hb.push(b[c])}Ue.prototype.Vb=function(){for(var a=0;a<this.hb.length;a++)if(this.hb[a]){var b=this.hb[a];this.hb[a]=null;We(b)}this.hb=[]};function We(a){var b=a.ca,c=a.$d,d=a.Ub;uc(function(){b(c,d)})};function X(a,b,c,d){this.type=a;this.xa=b;this.da=c;this.Ub=d};function Xe(a){this.S=a;this.sa=[];this.Zc=new Ue}function Ye(a,b,c,d,e){a.sa.push({type:b,ca:c,cancel:d,$:e});d=[];var f=Ze(a.j);a.Hb&&f.push(new X("value",a.j));for(var g=0;g<f.length;g++)if(f[g].type===b){var h=new G(a.S.i,a.S.path);f[g].da&&(h=h.J(f[g].da));d.push({ca:qc(c,e),$d:new T(f[g].xa,h),Ub:f[g].Ub})}Ve(a.Zc,d)}Xe.prototype.Ac=function(a,b){b=this.Bc(a,b);null!=b&&$e(this,b)};
function $e(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e.type,g=new G(a.S.i,a.S.path);b[d].da&&(g=g.J(b[d].da));g=new T(b[d].xa,g);"value"!==e.type||g.Gb()?"value"!==e.type&&(f+=" "+g.name()):f+="("+g.X()+")";M(a.S.i.n.id+": event:"+a.S.path+":"+a.S.Wa()+":"+f);for(f=0;f<a.sa.length;f++){var h=a.sa[f];b[d].type===h.type&&c.push({ca:qc(h.ca,h.$),$d:g,Ub:e.Ub})}}Ve(a.Zc,c)}Xe.prototype.Vb=function(){this.Zc.Vb()};
function Ze(a){var b=[];if(!a.Q()){var c=null;a.B(function(a,e){b.push(new X("child_added",e,a,c));c=a})}return b}function af(a){a.Hb||(a.Hb=!0,$e(a,[new X("value",a.j)]))};function bf(a,b){Xe.call(this,a);this.j=b}oa(bf,Xe);bf.prototype.Bc=function(a,b){this.j=a;this.Hb&&null!=b&&b.push(new X("value",this.j));return b};bf.prototype.Fb=function(){return{}};function cf(a,b){this.jc=a;this.kd=b}function df(a,b,c,d,e){var f=a.N(c),g=b.N(c);d=new cf(d,e);e=ef(d,c,f,g);g=!f.f()&&!g.f()&&f.m()!==g.m();if(e||g)for(f=c,c=e;null!==f.parent();){var h=a.N(f);e=b.N(f);var m=f.parent();if(!d.jc||I(d.jc,m).k()){var n=b.N(m),r=[],f=Va(f);h.f()?(h=n.ha(f,e),r.push(new X("child_added",e,f,h))):e.f()?r.push(new X("child_removed",h,f)):(h=n.ha(f,e),g&&r.push(new X("child_moved",e,f,h)),c&&r.push(new X("child_changed",e,f,h)));d.kd(m,n,r)}g&&(g=!1,c=!0);f=m}}
function ef(a,b,c,d){var e,f=[];c===d?e=!1:c.Q()&&d.Q()?e=c.k()!==d.k():c.Q()?(ff(a,b,Q,d,f),e=!0):d.Q()?(ff(a,b,c,Q,f),e=!0):e=ff(a,b,c,d,f);e?a.kd(b,d,f):c.m()!==d.m()&&a.kd(b,d,null);return e}
function ff(a,b,c,d,e){var f=!1,g=!a.jc||!I(a.jc,b).f(),h=[],m=[],n=[],r=[],s={},t={},w,aa,J,N;w=c.jb();J=ib(w);aa=d.jb();for(N=ib(aa);null!==J||null!==N;){c=N;c=null===J?1:null===c?-1:J.key===c.key?0:xc({name:J.key,la:J.value.m()},{name:c.key,la:c.value.m()});if(0>c)f=B(s,J.key),l(f)?(n.push({ad:J,zd:h[f]}),h[f]=null):(t[J.key]=m.length,m.push(J)),f=!0,J=ib(w);else{if(0<c)f=B(t,N.key),l(f)?(n.push({ad:m[f],zd:N}),m[f]=null):(s[N.key]=h.length,h.push(N)),f=!0;else{c=b.J(N.key);if(c=ef(a,c,J.value,
N.value))r.push(N),f=!0;J.value.m()!==N.value.m()&&(n.push({ad:J,zd:N}),f=!0);J=ib(w)}N=ib(aa)}if(!g&&f)return!0}for(g=0;g<m.length;g++)if(s=m[g])c=b.J(s.key),ef(a,c,s.value,Q),e.push(new X("child_removed",s.value,s.key));for(g=0;g<h.length;g++)if(s=h[g])c=b.J(s.key),m=d.ha(s.key,s.value),ef(a,c,Q,s.value),e.push(new X("child_added",s.value,s.key,m));for(g=0;g<n.length;g++)s=n[g].ad,h=n[g].zd,c=b.J(h.key),m=d.ha(h.key,h.value),e.push(new X("child_moved",h.value,h.key,m)),(c=ef(a,c,s.value,h.value))&&
r.push(h);for(g=0;g<r.length;g++)a=r[g],m=d.ha(a.key,a.value),e.push(new X("child_changed",a.value,a.key,m));return f};function gf(){this.Z=this.Aa=null;this.set={}}oa(gf,fd);k=gf.prototype;k.setActive=function(a){this.Aa=a};function hf(a,b,c){a.add(b,c);a.Z||(a.Z=c.S.path)}function jf(a){var b=a.Aa;a.Aa=null;return b}function kf(a){return a.contains("default")}function lf(a){return null!=a.Aa&&kf(a)}k.defaultView=function(){return kf(this)?this.get("default"):null};k.path=function(){return this.Z};k.toString=function(){return Hb(this.keys(),function(a){return"default"===a?"{}":a}).join("$")};
k.rb=function(){var a=[];gd(this,function(b,c){a.push(c.S)});return a};function mf(a,b){Xe.call(this,a);this.j=Q;this.Bc(b,Ze(b))}oa(mf,Xe);
mf.prototype.Bc=function(a,b){if(null===b)return b;var c=[],d=this.S;l(d.fa)&&(l(d.za)&&null!=d.za?c.push(function(a,b){var c=jc(b,d.fa);return 0<c||0===c&&0<=kc(a,d.za)}):c.push(function(a,b){return 0<=jc(b,d.fa)}));l(d.Ea)&&(l(d.fb)?c.push(function(a,b){var c=jc(b,d.Ea);return 0>c||0===c&&0>=kc(a,d.fb)}):c.push(function(a,b){return 0>=jc(b,d.Ea)}));var e=null,f=null;if(l(this.S.Ga))if(l(this.S.fa)){if(e=nf(a,c,this.S.Ga,!1)){var g=a.P(e).m();c.push(function(a,b){var c=jc(b,g);return 0>c||0===c&&
0>=kc(a,e)})}}else if(f=nf(a,c,this.S.Ga,!0)){var h=a.P(f).m();c.push(function(a,b){var c=jc(b,h);return 0<c||0===c&&0<=kc(a,f)})}for(var m=[],n=[],r=[],s=[],t=0;t<b.length;t++){var w=b[t].da,aa=b[t].xa;switch(b[t].type){case "child_added":of(c,w,aa)&&(this.j=this.j.K(w,aa),n.push(b[t]));break;case "child_removed":this.j.P(w).f()||(this.j=this.j.K(w,null),m.push(b[t]));break;case "child_changed":!this.j.P(w).f()&&of(c,w,aa)&&(this.j=this.j.K(w,aa),s.push(b[t]));break;case "child_moved":var J=!this.j.P(w).f(),
N=of(c,w,aa);J?N?(this.j=this.j.K(w,aa),r.push(b[t])):(m.push(new X("child_removed",this.j.P(w),w)),this.j=this.j.K(w,null)):N&&(this.j=this.j.K(w,aa),n.push(b[t]))}}var Bd=e||f;if(Bd){var Cd=(t=null!==f)?this.j.Jd():this.j.Kd(),Oc=!1,ub=!1,vb=this;(t?a.$c:a.B).call(a,function(a,b){ub||null!==Cd||(ub=!0);if(ub&&Oc)return!0;Oc?(m.push(new X("child_removed",vb.j.P(a),a)),vb.j=vb.j.K(a,null)):ub&&(n.push(new X("child_added",b,a)),vb.j=vb.j.K(a,b));Cd===a&&(ub=!0);a===Bd&&(Oc=!0)})}for(t=0;t<n.length;t++)c=
n[t],w=this.j.ha(c.da,c.xa),m.push(new X("child_added",c.xa,c.da,w));for(t=0;t<r.length;t++)c=r[t],w=this.j.ha(c.da,c.xa),m.push(new X("child_moved",c.xa,c.da,w));for(t=0;t<s.length;t++)c=s[t],w=this.j.ha(c.da,c.xa),m.push(new X("child_changed",c.xa,c.da,w));this.Hb&&0<m.length&&m.push(new X("value",this.j));return m};function nf(a,b,c,d){if(a.Q())return null;var e=null;(d?a.$c:a.B).call(a,function(a,d){if(of(b,a,d)&&(e=a,c--,0===c))return!0});return e}
function of(a,b,c){for(var d=0;d<a.length;d++)if(!a[d](b,c.m()))return!1;return!0}mf.prototype.ed=function(a){return this.j.P(a)!==Q};
mf.prototype.Fb=function(a,b,c){var d={};this.j.Q()||this.j.B(function(a){d[a]=3});var e=this.j;c=U(c,new H(""));var f=new Ya;Za(I(f,this.S.path),!0);b=Q.Ba(a,b);var g=this;df(c,b,a,f,function(a,b,c){null!==c&&a.toString()===g.S.path.toString()&&g.Bc(b,c)});this.j.Q()?pc(d,function(a,b){d[b]=2}):(this.j.B(function(a){A(d,a)||(d[a]=1)}),pc(d,function(a,b){g.j.P(b).f()&&(d[b]=2)}));this.j=e;return d};function pf(a,b){this.n=a;this.g=b;this.rc=b.ba;this.pa=new Ya}pf.prototype.ec=function(a,b,c,d,e){var f=a.path,g=I(this.pa,f),h=g.k();null===h?(h=new gf,Za(g,h)):v(!h.f(),"We shouldn't be storing empty QueryMaps");var m=a.Wa();if(h.contains(m))a=h.get(m),Ye(a,b,c,d,e);else{var n=this.g.ba.N(f);a=qf(a,n);rf(this,g,h,m,a);Ye(a,b,c,d,e);(b=(b=bb(I(this.pa,f),function(a){var b;if(b=a.k()&&a.k().defaultView())b=a.k().defaultView().Hb;if(b)return!0},!0))||null===this.n&&!U(this.g,f).f())&&af(a)}a.Vb()};
function sf(a,b,c,d,e){var f=a.get(b),g;if(g=f){g=!1;for(var h=f.sa.length-1;0<=h;h--){var m=f.sa[h];if(!(c&&m.type!==c||d&&m.ca!==d||e&&m.$!==e)&&(f.sa.splice(h,1),g=!0,c&&d))break}}(c=g&&!(0<f.sa.length))&&a.remove(b);return c}function tf(a,b,c,d,e){b=b?b.Wa():null;var f=[];b&&"default"!==b?sf(a,b,c,d,e)&&f.push(b):Fb(a.keys(),function(b){sf(a,b,c,d,e)&&f.push(b)});return f}pf.prototype.Dc=function(a,b,c,d){var e=I(this.pa,a.path).k();return null===e?null:uf(this,e,a,b,c,d)};
function uf(a,b,c,d,e,f){var g=b.path(),g=I(a.pa,g);c=tf(b,c,d,e,f);b.f()&&Za(g,null);d=vf(g);if(0<c.length&&!d){d=g;e=g.parent();for(c=!1;!c&&e;){if(f=e.k()){v(!lf(f));var h=d.name(),m=!1;gd(f,function(a,b){m=b.ed(h)||m});m&&(c=!0)}d=e;e=e.parent()}d=null;lf(b)||(b=jf(b),d=wf(a,g),b&&b());return c?null:d}return null}function xf(a,b,c){ab(I(a.pa,b),function(a){(a=a.k())&&gd(a,function(a,b){af(b)})},c,!0)}
function yf(a,b,c){function d(a){do{if(g[a.toString()])return!0;a=a.parent()}while(null!==a);return!1}var e=a.rc,f=a.g.ba;a.rc=f;for(var g={},h=0;h<c.length;h++)g[c[h].toString()]=!0;df(e,f,b,a.pa,function(c,e,f){if(b.contains(c)){var g=d(c);g&&xf(a,c,!1);a.Ac(c,e,f);g&&xf(a,c,!0)}else a.Ac(c,e,f)});d(b)&&xf(a,b,!0);zf(a,b)}function zf(a,b){var c=I(a.pa,b);ab(c,function(a){(a=a.k())&&gd(a,function(a,b){b.Vb()})},!0,!0);bb(c,function(a){(a=a.k())&&gd(a,function(a,b){b.Vb()})},!1)}
pf.prototype.Ac=function(a,b,c){a=I(this.pa,a).k();null!==a&&gd(a,function(a,e){e.Ac(b,c)})};function vf(a){return bb(a,function(a){return a.k()&&lf(a.k())})}function rf(a,b,c,d,e){if(lf(c)||vf(b))hf(c,d,e);else{var f,g;c.f()||(f=c.toString(),g=c.rb());hf(c,d,e);c.setActive(Af(a,c));f&&g&&Sd(a.n,c.path(),f,g)}lf(c)&&ab(b,function(a){if(a=a.k())a.Aa&&a.Aa(),a.Aa=null})}
function wf(a,b){function c(b){var f=b.k();if(f&&kf(f))d.push(f.path()),null==f.Aa&&f.setActive(Af(a,f));else{if(f){null!=f.Aa||f.setActive(Af(a,f));var g={};gd(f,function(a,b){b.j.B(function(a){A(g,a)||(g[a]=!0,a=f.path().J(a),d.push(a))})})}b.B(c)}}var d=[];c(b);return d}
function Af(a,b){if(a.n){var c=a.n,d=b.path(),e=b.toString(),f=b.rb(),g,h=b.keys(),m=kf(b);Od(a.n,b,function(c){"ok"!==c?(c=sc(c),O("on() or once() for "+b.path().toString()+" failed: "+c.toString()),Bf(a,b,c)):g||(m?xf(a,b.path(),!0):Fb(h,function(a){(a=b.get(a))&&af(a)}),zf(a,b.path()))});return function(){g=!0;Sd(c,d,e,f)}}return ca}function Bf(a,b,c){b&&(gd(b,function(a,b){for(var f=0;f<b.sa.length;f++){var g=b.sa[f];g.cancel&&qc(g.cancel,g.$)(c)}}),uf(a,b))}
function qf(a,b){return"default"===a.Wa()?new bf(a,b):new mf(a,b)}pf.prototype.Fb=function(a,b,c,d){function e(a){pc(a,function(a,b){f[b]=3===a?3:(B(f,b)||a)===a?a:3})}var f={};gd(b,function(b,f){e(f.Fb(a,c,d))});c.Q()||c.B(function(a){A(f,a)||(f[a]=4)});return f};function Cf(a,b,c,d,e){var f=b.path();b=a.Fb(f,b,d,e);var g=Q,h=[];pc(b,function(b,n){var r=new H(n);3===b||1===b?g=g.K(n,d.N(r)):(2===b&&h.push({path:f.J(n),ua:Q}),h=h.concat(Df(a,d.N(r),I(c,r),e)))});return[{path:f,ua:g}].concat(h)}
function Ef(a,b,c,d){var e;a:{var f=I(a.pa,b);e=f.parent();for(var g=[];null!==e;){var h=e.k();if(null!==h){if(kf(h)){e=[{path:b,ua:c}];break a}h=a.Fb(b,h,c,d);f=B(h,f.name());if(3===f||1===f){e=[{path:b,ua:c}];break a}2===f&&g.push({path:b,ua:Q})}f=e;e=e.parent()}e=g}if(1==e.length&&(!e[0].ua.f()||c.f()))return e;g=I(a.pa,b);f=g.k();null!==f?kf(f)?e.push({path:b,ua:c}):e=e.concat(Cf(a,f,g,c,d)):e=e.concat(Df(a,c,g,d));return e}
function Df(a,b,c,d){var e=c.k();if(null!==e)return kf(e)?[{path:c.path(),ua:b}]:Cf(a,e,c,b,d);var f=[];c.B(function(c){var e=b.Q()?Q:b.P(c.name());c=Df(a,e,c,d);f=f.concat(c)});return f};function Ff(a){this.D=a;this.ga=Wc(a);this.n=new Kd(this.D,q(this.uc,this),q(this.sc,this),q(this.nd,this),q(this.dd,this));this.be=Xc(a,q(function(){return new Tc(this.ga,this.n)},this));this.$a=new Ya;this.Ja=new ee;this.g=new fe;this.L=new pf(this.n,this.g.qa);this.fd=new ee;this.gd=new pf(null,this.fd);Gf(this,"connected",!1);this.U=new be;this.I=new He(a,q(this.n.I,this.n),q(this.n.Bd,this.n),q(this.jd,this));this.ic=0}k=Ff.prototype;
k.toString=function(){return(this.D.Ya?"https://":"http://")+this.D.host};k.name=function(){return this.D.Sa};function Hf(a){a=U(a.fd,new H(".info/serverTimeOffset")).X()||0;return(new Date).getTime()+a}function If(a){a=a={timestamp:Hf(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
k.uc=function(a,b,c){this.ic++;this.Md&&(b=this.Md(a,b));var d,e,f=[];9<=a.length&&a.lastIndexOf(".priority")===a.length-9?(d=new H(a.substring(0,a.length-9)),e=U(this.g.wa,d).Ka(b),f.push(d)):c?(d=new H(a),e=U(this.g.wa,d),pc(b,function(a,b){var c=new H(b);".priority"===b?e=e.Ka(a):(e=e.Ba(c,S(a)),f.push(d.J(b)))})):(d=new H(a),e=S(b),f.push(d));a=Ef(this.L,d,e,this.g.O);b=!1;for(c=0;c<a.length;++c){var g=a[c];b=ge(this.g,g.path,g.ua)||b}b&&(d=Jf(this,d));yf(this.L,d,f)};
k.sc=function(a){Gf(this,"connected",a);!1===a&&Kf(this)};k.nd=function(a){var b=this;oc(a,function(a,d){Gf(b,d,a)})};k.dd=function(a){a=new H(a);return U(this.g.wa,a).hash()};k.jd=function(a){Gf(this,"authenticated",a)};function Gf(a,b,c){b=new H("/.info/"+b);V(a.fd,b,S(c));yf(a.gd,b,[b])}
k.xb=function(a,b,c,d){this.e("set",{path:a.toString(),value:b,la:c});var e=If(this);b=S(b,c);var e=me(b,e),e=Ef(this.L,a,e,this.g.O),f=this.g.set(a,e),g=this;this.n.put(a.toString(),b.X(!0),function(b,c){"ok"!==b&&O("set at "+a+" failed: "+b);je(g.g,f);he(g.g,a);var e=Jf(g,a);yf(g.L,e,[]);Lf(d,b,c)});e=Mf(this,a);Jf(this,e);yf(this.L,e,[a])};
k.update=function(a,b,c){this.e("update",{path:a.toString(),value:b});var d=U(this.g.qa,a),e=!0,f=[],g=If(this),h=[],m;for(m in b){var e=!1,n=S(b[m]),n=me(n,g),d=d.K(m,n),r=a.J(m);f.push(r);n=Ef(this.L,r,n,this.g.O);h=h.concat(this.g.set(a,n))}if(e)M("update() called with empty data.  Don't do anything."),Lf(c,"ok");else{var s=this;Yd(this.n,a.toString(),b,function(b,d){"ok"!==b&&O("update at "+a+" failed: "+b);je(s.g,h);he(s.g,a);var e=Jf(s,a);yf(s.L,e,[]);Lf(c,b,d)});b=Mf(this,a);Jf(this,b);yf(s.L,
b,f)}};k.vd=function(a,b,c){this.e("setPriority",{path:a.toString(),la:b});var d=If(this),d=ke(b,d),d=U(this.g.O,a).Ka(d),d=Ef(this.L,a,d,this.g.O),e=this.g.set(a,d),f=this;this.n.put(a.toString()+"/.priority",b,function(b,d){"permission_denied"===b&&O("setPriority at "+a+" failed: "+b);je(f.g,e);he(f.g,a);var m=Jf(f,a);yf(f.L,m,[]);Lf(c,b,d)});b=Jf(this,a);yf(f.L,b,[])};
function Kf(a){a.e("onDisconnectEvents");var b=[],c=If(a);de(le(a.U,c),new H(""),function(c,e){var f=Ef(a.L,c,e,a.g.O);b.push.apply(b,a.g.set(c,f));f=Mf(a,c);Jf(a,f);yf(a.L,f,[c])});je(a.g,b);a.U=new be}k.ld=function(a,b){var c=this;this.n.ld(a.toString(),function(d,e){"ok"===d&&ce(c.U,a);Lf(b,d,e)})};function Nf(a,b,c,d){var e=S(c);Ud(a.n,b.toString(),e.X(!0),function(c,g){"ok"===c&&a.U.sb(b,e);Lf(d,c,g)})}
function Of(a,b,c,d,e){var f=S(c,d);Ud(a.n,b.toString(),f.X(!0),function(c,d){"ok"===c&&a.U.sb(b,f);Lf(e,c,d)})}function Pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(M("onDisconnect().update() called with empty data.  Don't do anything."),Lf(d,"ok")):Wd(a.n,b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var n=S(c[m]);a.U.sb(b.J(m),n)}Lf(d,e,f)})}function Qf(a){Rc(a.ga,"deprecated_on_disconnect");a.be.yd.deprecated_on_disconnect=!0}
k.ec=function(a,b,c,d,e){".info"===D(a.path)?this.gd.ec(a,b,c,d,e):this.L.ec(a,b,c,d,e)};k.Dc=function(a,b,c,d){if(".info"===D(a.path))this.gd.Dc(a,b,c,d);else{b=this.L.Dc(a,b,c,d);if(c=null!==b){c=this.g;d=a.path;for(var e=[],f=0;f<b.length;++f)e[f]=U(c.wa,b[f]);V(c.wa,d,Q);for(f=0;f<b.length;++f)V(c.wa,b[f],e[f]);c=he(c,d)}c&&(v(this.g.qa.ba===this.L.rc,"We should have raised any outstanding events by now.  Else, we'll blow them away."),V(this.g.qa,a.path,U(this.g.O,a.path)),this.L.rc=this.g.qa.ba)}};
k.Pa=function(){this.n.Pa()};k.ub=function(){this.n.ub()};k.wd=function(a){if("undefined"!==typeof console){a?(this.Hc||(this.Hc=new Sc(this.ga)),a=this.Hc.get()):a=this.ga.get();var b=Ib(Kc(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};k.xd=function(a){Rc(this.ga,a);this.be.yd[a]=!0};k.e=function(){M("r:"+this.n.id+":",arguments)};
function Lf(a,b,c){a&&uc(function(){if("ok"==b)a(null,c);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Rf(a,b,c,d,e){function f(){}a.e("transaction on "+b);var g=new G(a,b);g.Ta("value",f);c={path:b,update:c,G:d,status:null,Sd:Yb(),Rc:e,Xd:0,Oc:function(){g.nb("value",f)},Pc:null};a.Ja.ba=Sf(a,a.Ja.ba,a.g.O.ba,a.$a);d=c.update(U(a.Ja,b).X());if(l(d)){Ga("transaction failed: Data returned ",d);c.status=1;e=I(a.$a,b);var h=e.k()||[];h.push(c);Za(e,h);h="object"===typeof d&&null!==d&&A(d,".priority")?d[".priority"]:U(a.g.O,b).m();e=If(a);d=S(d,h);d=me(d,e);V(a.Ja,b,d);c.Rc&&(V(a.g.qa,b,d),yf(a.L,
b,[b]));Tf(a)}else c.Oc(),c.G&&(a=Uf(a,b),c.G(null,!1,a))}function Tf(a,b){var c=b||a.$a;b||Vf(a,c);if(null!==c.k()){var d=Wf(a,c);v(0<d.length);Jb(d,function(a){return 1===a.status})&&Xf(a,c.path(),d)}else c.Gb()&&c.B(function(b){Tf(a,b)})}
function Xf(a,b,c){for(var d=0;d<c.length;d++)v(1===c[d].status,"tryToSendTransactionQueue_: items in queue should all be run."),c[d].status=2,c[d].Xd++;var e=U(a.g.O,b).hash();V(a.g.O,b,U(a.g.qa,b));for(var f=U(a.Ja,b).X(!0),g=Yb(),h=Yf(c),d=0;d<h.length;d++)Za(I(a.g.Sb,h[d]),g);a.n.put(b.toString(),f,function(e){a.e("transaction put response",{path:b.toString(),status:e});for(d=0;d<h.length;d++){var f=I(a.g.Sb,h[d]),r=f.k();v(null!==r,"sendTransactionQueue_: pendingPut should not be null.");r===
g&&(Za(f,null),V(a.g.O,h[d],U(a.g.wa,h[d])))}if("ok"===e){e=[];for(d=0;d<c.length;d++)c[d].status=3,c[d].G&&(f=Uf(a,c[d].path),e.push(q(c[d].G,null,null,!0,f))),c[d].Oc();Vf(a,I(a.$a,b));Tf(a);for(d=0;d<e.length;d++)uc(e[d])}else{if("datastale"===e)for(d=0;d<c.length;d++)c[d].status=4===c[d].status?5:1;else for(O("transaction at "+b+" failed: "+e),d=0;d<c.length;d++)c[d].status=5,c[d].Pc=e;e=Jf(a,b);yf(a.L,e,[b])}},e)}
function Yf(a){for(var b={},c=0;c<a.length;c++)a[c].Rc&&(b[a[c].path.toString()]=a[c].path);a=[];for(var d in b)a.push(b[d]);return a}
function Jf(a,b){var c=Zf(a,b),d=c.path(),c=Wf(a,c);V(a.g.qa,d,U(a.g.O,d));V(a.Ja,d,U(a.g.O,d));if(0!==c.length){for(var e=U(a.g.qa,d),f=e,g=[],h=0;h<c.length;h++){var m=Wa(d,c[h].path),n=!1,r;v(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===c[h].status)n=!0,r=c[h].Pc;else if(1===c[h].status)if(25<=c[h].Xd)n=!0,r="maxretry";else{var s=e.N(m),t=c[h].update(s.X());if(l(t)){Ga("transaction failed: Data returned ",t);var w=S(t);"object"===typeof t&&null!=t&&A(t,".priority")||
(w=w.Ka(s.m()));e=e.Ba(m,w);c[h].Rc&&(f=f.Ba(m,w))}else n=!0,r="nodata"}n&&(c[h].status=3,setTimeout(c[h].Oc,Math.floor(0)),c[h].G&&(n=new G(a,c[h].path),m=new T(e.N(m),n),"nodata"===r?g.push(q(c[h].G,null,null,!1,m)):g.push(q(c[h].G,null,Error(r),!1,m))))}V(a.Ja,d,e);V(a.g.qa,d,f);Vf(a,a.$a);for(h=0;h<g.length;h++)uc(g[h]);Tf(a)}return d}function Zf(a,b){for(var c,d=a.$a;null!==(c=D(b))&&null===d.k();)d=I(d,c),b=Ua(b);return d}
function Wf(a,b){var c=[];$f(a,b,c);c.sort(function(a,b){return a.Sd-b.Sd});return c}function $f(a,b,c){var d=b.k();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.B(function(b){$f(a,b,c)})}function Vf(a,b){var c=b.k();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Za(b,0<c.length?c:null)}b.B(function(b){Vf(a,b)})}function Mf(a,b){var c=Zf(a,b).path(),d=I(a.$a,b);bb(d,function(a){ag(a)});ag(d);ab(d,function(a){ag(a)});return c}
function ag(a){var b=a.k();if(null!==b){for(var c=[],d=-1,e=0;e<b.length;e++)4!==b[e].status&&(2===b[e].status?(v(d===e-1,"All SENT items should be at beginning of queue."),d=e,b[e].status=4,b[e].Pc="set"):(v(1===b[e].status),b[e].Oc(),b[e].G&&c.push(q(b[e].G,null,Error("set"),!1,null))));-1===d?Za(a,null):b.length=d+1;for(e=0;e<c.length;e++)uc(c[e])}}function Uf(a,b){var c=new G(a,b);return new T(U(a.Ja,b),c)}
function Sf(a,b,c,d){if(d.f())return c;if(null!=d.k())return b;var e=c;d.B(function(d){var g=d.name(),h=new H(g);d=Sf(a,b.N(h),c.N(h),d);e=e.K(g,d)});return e};function Y(){this.tb={}}da(Y);Y.prototype.Pa=function(){for(var a in this.tb)this.tb[a].Pa()};Y.prototype.interrupt=Y.prototype.Pa;Y.prototype.ub=function(){for(var a in this.tb)this.tb[a].ub()};Y.prototype.resume=Y.prototype.ub;function bg(a){var b=this;this.Ab=a;this.Jc="*";ze()?this.Lb=this.lc=se():(this.Lb=window.opener,this.lc=window);if(!b.Lb)throw"Unable to find relay frame";te(this.lc,"message",q(this.ob,this));te(this.lc,"message",q(this.Pd,this));try{cg(this,{a:"ready"})}catch(c){te(this.Lb,"load",function(){cg(b,{a:"ready"})})}te(window,"unload",q(this.Ie,this))}function cg(a,b){b=u(b);ze()?a.Lb.doPost(b,a.Jc):a.Lb.postMessage(b,a.Jc)}
bg.prototype.ob=function(a){var b=this,c;try{c=va(a.data)}catch(d){}c&&"request"===c.a&&(ue(window,"message",this.ob),this.Jc=a.origin,this.Ab&&setTimeout(function(){b.Ab(b.Jc,c.d,function(a,c){b.oe=!c;b.Ab=void 0;cg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};bg.prototype.Ie=function(){try{ue(this.lc,"message",this.Pd)}catch(a){}this.Ab&&(cg(this,{a:"error",d:"unknown closed window"}),this.Ab=void 0);try{window.close()}catch(b){}};bg.prototype.Pd=function(a){if(this.oe&&"die"===a.data)try{window.close()}catch(b){}};var Z={xe:function(a){var b=R.prototype.hash;R.prototype.hash=a;var c=vc.prototype.hash;vc.prototype.hash=a;return function(){R.prototype.hash=b;vc.prototype.hash=c}}};Z.hijackHash=Z.xe;Z.Wa=function(a){return a.Wa()};Z.queryIdentifier=Z.Wa;Z.Ae=function(a){return a.i.n.ja};Z.listens=Z.Ae;Z.Me=function(a){return a.i.n.ma};Z.refConnection=Z.Me;Z.ee=Kd;Z.DataConnection=Z.ee;Kd.prototype.sendRequest=Kd.prototype.Ia;Kd.prototype.interrupt=Kd.prototype.Pa;Z.fe=td;Z.RealTimeConnection=Z.fe;
td.prototype.sendRequest=td.prototype.Zd;td.prototype.close=td.prototype.close;Z.de=yb;Z.ConnectionTarget=Z.de;Z.ue=function(){id=$c=!0};Z.forceLongPolling=Z.ue;Z.ve=function(){jd=!0};Z.forceWebSockets=Z.ve;Z.Te=function(a,b){a.i.n.ud=b};Z.setSecurityDebugCallback=Z.Te;Z.wd=function(a,b){a.i.wd(b)};Z.stats=Z.wd;Z.xd=function(a,b){a.i.xd(b)};Z.statsIncrementCounter=Z.xd;Z.ic=function(a){return a.i.ic};Z.dataUpdateCount=Z.ic;Z.ye=function(a,b){a.i.Md=b};Z.interceptServerData=Z.ye;Z.Fe=function(a){new bg(a)};
Z.onPopupOpen=Z.Fe;Z.Qe=function(a){ne=a};Z.setAuthenticationServer=Z.Qe;function $(a,b,c){this.Wb=a;this.Z=b;this.Ha=c}$.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);z("Firebase.onDisconnect().cancel",1,a,!0);this.Wb.ld(this.Z,a)};$.prototype.cancel=$.prototype.cancel;$.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);C("Firebase.onDisconnect().remove",this.Z);z("Firebase.onDisconnect().remove",1,a,!0);Nf(this.Wb,this.Z,null,a)};$.prototype.remove=$.prototype.remove;
$.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);C("Firebase.onDisconnect().set",this.Z);Fa("Firebase.onDisconnect().set",a,!1);z("Firebase.onDisconnect().set",2,b,!0);Nf(this.Wb,this.Z,a,b)};$.prototype.set=$.prototype.set;
$.prototype.xb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);C("Firebase.onDisconnect().setWithPriority",this.Z);Fa("Firebase.onDisconnect().setWithPriority",a,!1);Ka("Firebase.onDisconnect().setWithPriority",2,b,!1);z("Firebase.onDisconnect().setWithPriority",3,c,!0);if(".length"===this.Ha||".keys"===this.Ha)throw"Firebase.onDisconnect().setWithPriority failed: "+this.Ha+" is a read-only object.";Of(this.Wb,this.Z,a,b,c)};$.prototype.setWithPriority=$.prototype.xb;
$.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);C("Firebase.onDisconnect().update",this.Z);if(fa(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ja("Firebase.onDisconnect().update",a);z("Firebase.onDisconnect().update",2,b,!0);Pf(this.Wb,
this.Z,a,b)};$.prototype.update=$.prototype.update;var dg=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);v(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);v(20===c.length,"NextPushId: Length should be 20.");
return c}}();function G(a,b){var c,d,e;if(a instanceof Ff)c=a,d=b;else{x("new Firebase",1,2,arguments.length);d=hc(arguments[0]);c=d.Ve;"firebase"===d.domain&&gc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||gc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.Ya||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new yb(d.host,d.Ya,c,"ws"===d.scheme||"wss"===d.scheme);d=new H(d.pb);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Ea(c.Sa))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Da.test(e)));if(f)throw Error(y("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Y)e=b;else if(p(b))e=Y.ib(),c.yc=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=Y.ib();f=c.toString();var g=B(e.tb,f);g||(g=new Ff(c),e.tb[f]=g);c=g}F.call(this,c,d)}oa(G,F);na("Firebase",G);G.prototype.name=function(){x("Firebase.name",0,0,arguments.length);return this.path.f()?null:Va(this.path)};G.prototype.name=G.prototype.name;
G.prototype.J=function(a){x("Firebase.child",1,1,arguments.length);if(ha(a))a=String(a);else if(!(a instanceof H))if(null===D(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Na("Firebase.child",b)}else Na("Firebase.child",a);return new G(this.i,this.path.J(a))};G.prototype.child=G.prototype.J;G.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new G(this.i,a)};G.prototype.parent=G.prototype.parent;
G.prototype.root=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};G.prototype.root=G.prototype.root;G.prototype.toString=function(){x("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.i.toString();else{a=this.parent().toString()+"/";var b=this.name();a+=encodeURIComponent(String(b))}return a};G.prototype.toString=G.prototype.toString;
G.prototype.set=function(a,b){x("Firebase.set",1,2,arguments.length);C("Firebase.set",this.path);Fa("Firebase.set",a,!1);z("Firebase.set",2,b,!0);this.i.xb(this.path,a,null,b)};G.prototype.set=G.prototype.set;
G.prototype.update=function(a,b){x("Firebase.update",1,2,arguments.length);C("Firebase.update",this.path);if(fa(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ja("Firebase.update",a);z("Firebase.update",2,b,!0);if(A(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.i.update(this.path,a,b)};G.prototype.update=G.prototype.update;G.prototype.xb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);C("Firebase.setWithPriority",this.path);Fa("Firebase.setWithPriority",a,!1);Ka("Firebase.setWithPriority",2,b,!1);z("Firebase.setWithPriority",3,c,!0);if(".length"===this.name()||".keys"===this.name())throw"Firebase.setWithPriority failed: "+this.name()+" is a read-only object.";this.i.xb(this.path,a,b,c)};G.prototype.setWithPriority=G.prototype.xb;
G.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length);C("Firebase.remove",this.path);z("Firebase.remove",1,a,!0);this.set(null,a)};G.prototype.remove=G.prototype.remove;
G.prototype.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);C("Firebase.transaction",this.path);z("Firebase.transaction",1,a,!1);z("Firebase.transaction",2,b,!0);if(l(c)&&"boolean"!=typeof c)throw Error(y("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.name()||".keys"===this.name())throw"Firebase.transaction failed: "+this.name()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Rf(this.i,this.path,a,b,c)};G.prototype.transaction=G.prototype.transaction;
G.prototype.vd=function(a,b){x("Firebase.setPriority",1,2,arguments.length);C("Firebase.setPriority",this.path);Ka("Firebase.setPriority",1,a,!1);z("Firebase.setPriority",2,b,!0);this.i.vd(this.path,a,b)};G.prototype.setPriority=G.prototype.vd;G.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length);C("Firebase.push",this.path);Fa("Firebase.push",a,!0);z("Firebase.push",2,b,!0);var c=Hf(this.i),c=dg(c),c=this.J(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
G.prototype.push=G.prototype.push;G.prototype.ka=function(){return new $(this.i,this.path,this.name())};G.prototype.onDisconnect=G.prototype.ka;G.prototype.Ne=function(){O("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");this.ka().remove();Qf(this.i)};G.prototype.removeOnDisconnect=G.prototype.Ne;
G.prototype.Se=function(a){O("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");this.ka().set(a);Qf(this.i)};G.prototype.setOnDisconnect=G.prototype.Se;G.prototype.I=function(a,b,c){O("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");x("Firebase.auth",1,3,arguments.length);Oa("Firebase.auth",a);z("Firebase.auth",2,b,!0);z("Firebase.auth",3,b,!0);Ne(this.i.I,a,{},{remember:"none"},b,c)};
G.prototype.auth=G.prototype.I;G.prototype.Bd=function(a){x("Firebase.unauth",0,1,arguments.length);z("Firebase.unauth",1,a,!0);Oe(this.i.I,a)};G.prototype.unauth=G.prototype.Bd;G.prototype.bd=function(){x("Firebase.getAuth",0,0,arguments.length);return this.i.I.bd()};G.prototype.getAuth=G.prototype.bd;G.prototype.Ee=function(a,b){x("Firebase.onAuth",1,2,arguments.length);z("Firebase.onAuth",1,a,!1);za("Firebase.onAuth",2,b);this.i.I.Ta("auth_status",a,b)};G.prototype.onAuth=G.prototype.Ee;
G.prototype.De=function(a,b){x("Firebase.offAuth",1,2,arguments.length);z("Firebase.offAuth",1,a,!1);za("Firebase.offAuth",2,b);this.i.I.nb("auth_status",a,b)};G.prototype.offAuth=G.prototype.De;G.prototype.je=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length);Oa("Firebase.authWithCustomToken",a);z("Firebase.authWithCustomToken",2,b,!1);E("Firebase.authWithCustomToken",3,c,!0);Ne(this.i.I,a,{},c||{},b)};G.prototype.authWithCustomToken=G.prototype.je;
G.prototype.ke=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length);Pa("Firebase.authWithOAuthPopup",1,a);z("Firebase.authWithOAuthPopup",2,b,!1);E("Firebase.authWithOAuthPopup",3,c,!0);Se(this.i.I,a,c,b)};G.prototype.authWithOAuthPopup=G.prototype.ke;
G.prototype.le=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length);Pa("Firebase.authWithOAuthRedirect",1,a);z("Firebase.authWithOAuthRedirect",2,b,!1);E("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.i.I;Qe(d);var e=[Ge],f=qe(c);"anonymous"===a||"firebase"===a?P(b,W("TRANSPORT_UNAVAILABLE")):(K.set("redirect_client_options",f.hc),Re(d,e,"/auth/"+a,f,b))};G.prototype.authWithOAuthRedirect=G.prototype.le;
G.prototype.me=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length);Pa("Firebase.authWithOAuthToken",1,a);z("Firebase.authWithOAuthToken",3,c,!1);E("Firebase.authWithOAuthToken",4,d,!0);p(b)?(Pa("Firebase.authWithOAuthToken",2,b),Pe(this.i.I,a+"/token",{access_token:b},c)):(E("Firebase.authWithOAuthToken",2,b,!1),Pe(this.i.I,a+"/token",b,c))};G.prototype.authWithOAuthToken=G.prototype.me;
G.prototype.ie=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length);z("Firebase.authAnonymously",1,a,!1);E("Firebase.authAnonymously",2,b,!0);Pe(this.i.I,"anonymous",{},a)};G.prototype.authAnonymously=G.prototype.ie;
G.prototype.ne=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length);E("Firebase.authWithPassword",1,a,!1);Qa("Firebase.authWithPassword",a,"email");Qa("Firebase.authWithPassword",a,"password");z("Firebase.authAnonymously",2,b,!1);E("Firebase.authAnonymously",3,c,!0);Pe(this.i.I,"password",a,b)};G.prototype.authWithPassword=G.prototype.ne;
G.prototype.Xc=function(a,b){x("Firebase.createUser",2,2,arguments.length);E("Firebase.createUser",1,a,!1);Qa("Firebase.createUser",a,"email");Qa("Firebase.createUser",a,"password");z("Firebase.createUser",2,b,!1);this.i.I.Xc(a,b)};G.prototype.createUser=G.prototype.Xc;G.prototype.sd=function(a,b){x("Firebase.removeUser",2,2,arguments.length);E("Firebase.removeUser",1,a,!1);Qa("Firebase.removeUser",a,"email");Qa("Firebase.removeUser",a,"password");z("Firebase.removeUser",2,b,!1);this.i.I.sd(a,b)};
G.prototype.removeUser=G.prototype.sd;G.prototype.Tc=function(a,b){x("Firebase.changePassword",2,2,arguments.length);E("Firebase.changePassword",1,a,!1);Qa("Firebase.changePassword",a,"email");Qa("Firebase.changePassword",a,"oldPassword");Qa("Firebase.changePassword",a,"newPassword");z("Firebase.changePassword",2,b,!1);this.i.I.Tc(a,b)};G.prototype.changePassword=G.prototype.Tc;
G.prototype.td=function(a,b){x("Firebase.resetPassword",2,2,arguments.length);E("Firebase.resetPassword",1,a,!1);Qa("Firebase.resetPassword",a,"email");z("Firebase.resetPassword",2,b,!1);this.i.I.td(a,b)};G.prototype.resetPassword=G.prototype.td;G.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length);Y.ib().Pa()};G.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length);Y.ib().ub()};
function dc(a,b){v(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?bc=q(console.log,console):"object"===typeof console.log&&(bc=function(a){console.log(a)})),b&&K.set("logging_enabled",!0)):a?bc=a:(bc=null,K.remove("logging_enabled"))}G.enableLogging=dc;G.ServerValue={TIMESTAMP:{".sv":"timestamp"}};G.SDK_VERSION="1.1.0";G.INTERNAL=Z;G.Context=Y;})();

var RDR,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.RDR = (function() {
  function RDR() {}

  RDR.prototype.glob = {};

  RDR.prototype.vars = {};

  RDR.prototype.Controllers = {};

  RDR.prototype.Models = {};

  RDR.prototype.Templates = {};

  RDR.prototype.Routes = {};

  RDR.prototype.Initializers = [];

  RDR.prototype.DS = null;

  return RDR;

})();

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.initControllers = function(controllers) {
    var c, index, initializers, path, r, _i, _len;
    initializers = [];
    for (index = _i = 0, _len = controllers.length; _i < _len; index = ++_i) {
      c = controllers[index];
      path = this.pathForSegments(controllers, false, controllers.length - index);
      if (path === "/") {
        path = "/application";
      }
      this.Log("Controllers", "Fetching: " + path);
      if (path in this.Controllers && "init" in this.Controllers[path]) {
        initializers.push(path);
      }
    }
    r = this;
    return Q.all(initializers.map(function(c) {
      return r.Controllers[c].init();
    }));
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.DSListeners = [];

  _Class.prototype.synchronousVars = {};

  _Class.prototype.fetchSynchronousVars = function() {
    return this.denormalizeVars(true, this.vars);
  };

  _Class.prototype.save = function(attrs) {
    var k, path, r, v, variable, _results;
    r = this;
    _results = [];
    for (k in attrs) {
      v = attrs[k];
      variable = k.split("/")[0];
      path = this.varChart[variable];
      if (typeof path !== "undefined") {
        path = "" + path + (k.split(variable)[1]);
        _results.push(r.DS.child(path).set(v, function(error) {
          if (!error) {
            r.vars[k.replace(/\//, ".")] = v;
            r.synchronousVars[k.replace(/\//, ".")] = v;
            return r.Log("Vars", "Saved: " + path);
          } else {
            r.Warn("Vars", "Permission Denied: " + v);
            return r.DS.child(path).once("value", function(snapshot) {
              var value;
              value = snapshot.val();
              $("[data-rdr-bind-html='" + k + "']").html(value);
              return $("[data-rdr-bind-key='" + k + "']").each(function() {
                var attr;
                attr = $(this).attr("data-rdr-bind-attr");
                if (attr === "value") {
                  return $(this).val(value);
                } else {
                  return $(this).attr(attr, value);
                }
              });
            });
          }
        }));
      } else {
        _results.push(r.Warn("Vars", "Unable to Save: " + k));
      }
    }
    return _results;
  };

  _Class.prototype.denormalizeVars = function(synchronous, vars, path, initial) {
    var global_vars, k, v, var_path;
    if (synchronous == null) {
      synchronous = false;
    }
    if (vars == null) {
      vars = {};
    }
    if (path == null) {
      path = "";
    }
    if (initial == null) {
      initial = true;
    }
    if (typeof vars === "object") {
      global_vars = synchronous ? this.synchronousVars : this.vars;
      for (k in vars) {
        v = vars[k];
        var_path = "";
        var_path += path;
        if (var_path.length) {
          var_path += "/";
        }
        if (typeof k !== "undefined") {
          var_path += k;
        }
        if (typeof v === "object") {
          this.denormalizeVars(synchronous, v, var_path, false);
        } else {
          this.setLocalVarByPath(this.vars, var_path, v);
          if (synchronous) {
            v = "<span data-rdr-bind-html='" + var_path + "'>" + v + "</span>";
            this.setLocalVarByPath(this.synchronousVars, var_path, v);
          } else {
            $("[data-rdr-bind-html='" + var_path + "']").html(v);
            $("[data-rdr-bind-key='" + var_path + "']").each(function() {
              var attr;
              attr = $(this).attr("data-rdr-bind-attr");
              return $(this).attr(attr, v);
            });
          }
        }
      }
    }
    if (initial) {
      return global_vars;
    } else {
      return vars;
    }
  };

  _Class.prototype.updateLocalVar = function(variable, snapshot, synchronous) {
    var data, k, key, path, v, value;
    if (synchronous == null) {
      synchronous = false;
    }
    key = snapshot.name();
    value = snapshot.val();
    path = synchronous ? variable : "" + variable + "/" + key;
    if (typeof value === "object") {
      for (k in value) {
        v = value[k];
        if (typeof v === "object") {
          value[k]["_model"] = variable;
        }
      }
    } else {
      data = {};
      data[key] = value;
      data["_model"] = variable;
      value = data;
      path = variable;
    }
    this.denormalizeVars(synchronous, value, path);
    if (synchronous) {
      synchronous.resolve();
    }
    return this.Log("Vars", "Set: " + path);
  };

  _Class.prototype.DSConnect = function() {
    this.DSURL = "https://" + this.Config.firebase + ".firebaseio.com/";
    return this.DS = new Firebase(this.DSURL);
  };

  _Class.prototype.varChart = {};

  _Class.prototype.find = function(model, where, variable) {
    var cached, deferred, m, path, r;
    if (variable == null) {
      variable = false;
    }
    r = this;
    m = this.Models[model];
    if (!variable) {
      variable = this.pluralModel(model);
    }
    if (typeof m !== "undefined") {
      path = m.dataPath;
      if (typeof path === "undefined") {
        path = model;
      }
      path = Handlebars.compile(path);
      path = path(where);
      if ("id" in where) {
        path = "" + path + "/" + where.id;
      }
      this.varChart[variable] = path;
      cached = false;
      deferred = Q.defer();
      if (this.DSListeners.length && new RegExp(this.DSListeners.join("|")).test(path)) {
        deferred.resolve();
        this.Debug("Listeners", "Read From Cache: " + path);
      } else {
        this.DS.child(path).once("value", function(snapshot) {
          return r.updateLocalVar(variable, snapshot, deferred);
        });
        this.DS.child(path).on("child_added", function(snapshot) {
          return r.updateLocalVar(variable, snapshot);
        });
        this.DS.child(path).on("child_changed", function(snapshot) {
          return r.updateLocalVar(variable, snapshot);
        });
        this.DS.child(path).on("child_removed", function(snapshot) {
          return r.updateLocalVar(variable, snapshot);
        });
        this.DSListeners.push(path);
        this.Debug("Listeners", "Added: " + path);
      }
      return deferred.promise;
    }
  };

  _Class.prototype.getByPath = function(obj, desc) {
    var arr;
    obj = obj || window;
    arr = desc.split(".");
    while (arr.length) {
      obj = obj[arr.shift()];
    }
    return obj;
  };

  _Class.prototype.setLocalVarByPath = function(obj, path, value) {
    var elem, i, len, pList;
    path = path.replace(/\//g, ".");
    pList = path.split(".");
    len = pList.length;
    i = 0;
    while (i < len - 1) {
      elem = pList[i];
      if (!obj[elem]) {
        obj[elem] = {};
      }
      obj = obj[elem];
      i++;
    }
    return obj[pList[len - 1]] = value;
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.executeEvent = function(element) {
    var action, found, r;
    r = this;
    found = false;
    action = element.attr("data-rdr-bind-action");
    element.parents(".rdr-template").each(function() {
      var path;
      path = $(this).attr("data-path");
      r.Log("Actions", "Fetching Path: " + path);
      if (path in r.Controllers && "actions" in r.Controllers[path] && action in r.Controllers[path]["actions"]) {
        found = true;
        r.Controllers[path]["actions"][action](element);
        r.Log("Actions", "Path Found: " + path);
        return false;
      }
    });
    if (!found) {
      return r.Log("Actions", "No Action Found: " + action);
    }
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.escapeQuotes = function(str) {
    return ("" + str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };

  _Class.prototype.handlebarsHelpers = function() {
    var r;
    r = this;
    Handlebars.registerHelper("bind-attr", function(options) {
      var attr, attrs, is_loop, key, value, _ref;
      is_loop = "_parent" in options.data;
      attrs = "";
      _ref = options.hash;
      for (attr in _ref) {
        key = _ref[attr];
        attrs += "data-rdr-bind-attr=\"" + attr + "\" ";
        attrs += "data-rdr-bind-key=\"" + key + "\" ";
        value = r.escapeQuotes(r.getByPath(r.vars, key.replace(/\//g, ".")));
        attrs += "" + attr + "=\"" + value + "\"";
      }
      return new Handlebars.SafeString(attrs);
    });
    return Handlebars.registerHelper("action", function(options) {
      var attrs, k, v, _ref;
      attrs = "";
      _ref = options.hash;
      for (k in _ref) {
        v = _ref[k];
        attrs += "data-rdr-bind-event=\"" + k + "\" ";
        attrs += "data-rdr-bind-action=\"" + v + "\"";
      }
      return new Handlebars.SafeString(attrs);
    });
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.Logger = function(log_level, a, b) {
    var c, class_length;
    if (typeof this.Config !== "undefined" && this.Config.debug) {
      class_length = 13;
      c = new Array(class_length - a.length).join(" ");
      return console[log_level]("" + c + a + " # " + b);
    }
  };

  _Class.prototype.Log = function(a, b) {
    return this.Logger("log", a, b);
  };

  _Class.prototype.Info = function(a, b) {
    return this.Logger("info", a, b);
  };

  _Class.prototype.Debug = function(a, b) {
    return this.Logger("debug", a, b);
  };

  _Class.prototype.Warn = function(a, b) {
    return this.Logger("warn", a, b);
  };

  _Class.prototype.Error = function(a, b) {
    return this.Logger("error", a, b);
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.pluralModel = function(model) {
    if ("plural" in this.Models[model]) {
      return this.Models[model].plural;
    } else {
      return "" + model + "s";
    }
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.currentPath = "/";

  _Class.prototype.buildRoute = function(segments) {
    var r;
    r = this;
    return Q.allSettled(this.initControllers(segments)).then(function() {
      r.generateViews(segments.slice(0).reverse());
      return r.isLoading = false;
    });
  };

  _Class.prototype.pathForSegments = function(pieces, reverse, index) {
    var segments;
    if (reverse == null) {
      reverse = false;
    }
    if (index == null) {
      index = 0;
    }
    segments = pieces.slice(0);
    if (reverse) {
      segments.reverse();
    }
    segments.splice(segments.length - index, segments.length);
    return ("/" + (segments.join("/"))).replace(/\/\//g, "/");
  };

  _Class.prototype.fetchPath = function(path) {
    var new_path, r, routes, segments;
    r = this;
    this.Log("Router", "Fetching: " + path);
    segments = this.findRoute(path);
    routes = segments.slice(0).reverse();
    new_path = "/" + (segments.join("/"));
    this.markActiveRoutes(routes);
    this.showLoading(routes);
    if (new_path === this.currentPath) {
      return this.Log("Router", "Already Active: " + path);
    } else {
      this.currentPath = new_path;
      this.Log("Router", "Found: " + new_path);
      return this.buildRoute(segments);
    }
  };

  _Class.prototype.findRoute = function(path, pristine, selected_path, routes) {
    var children, folders, route;
    if (pristine == null) {
      pristine = true;
    }
    if (selected_path == null) {
      selected_path = [];
    }
    if (routes == null) {
      routes = {};
    }
    if (path[0] === "/") {
      path = path.slice(1);
    }
    if (pristine) {
      routes = this.Routes;
    }
    if (!path.length) {
      selected_path.push("index");
    } else {
      folders = path.split("/");
      for (route in routes) {
        children = routes[route];
        route = route.replace(/\//g, "");
        if (route === folders[0]) {
          selected_path.push(route);
          path = path.slice(route.length);
          if (typeof children === "object") {
            this.findRoute(path, false, selected_path, children);
          }
          break;
          false;
        }
      }
    }
    if (selected_path[selected_path.length - 1] !== "index") {
      selected_path.push("index");
    }
    return selected_path;
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.isLoading = false;

  _Class.prototype.dasherized = function(path) {
    if (path[0] === "/") {
      path = path.slice(1);
    }
    path = path.replace(/\//g, "-");
    return path;
  };

  _Class.prototype.showLoading = function(segments, placer, html) {
    var application_loading_path, dasherized_path, index, loading_path, path, segment, _i, _len, _ref, _ref1;
    if (placer == null) {
      placer = "";
    }
    if (html == null) {
      html = "";
    }
    segments = segments.slice(1).reverse();
    for (index = _i = 0, _len = segments.length; _i < _len; index = ++_i) {
      segment = segments[index];
      path = this.pathForSegments(segments, false, index);
      loading_path = ("" + path + "/loading").replace(/\/\//g, "/");
      dasherized_path = this.dasherized(path);
      this.Debug("Loading", "Fetching: " + path);
      this.Debug("Loading", "Load Path: " + loading_path);
      if (loading_path in this.Templates && $(".rdr-template-" + dasherized_path + "-outlet").length) {
        this.Log("Loading", "Found: " + loading_path);
        placer = $(".rdr-template-" + dasherized_path + "-outlet");
        _ref = this.generateView(loading_path, placer), placer = _ref[0], html = _ref[1];
        break;
      }
    }
    if (!placer.length) {
      application_loading_path = "/loading";
      if (application_loading_path in this.Templates) {
        this.Debug("Loading", "Use Application: " + application_loading_path);
        if (!placer.length) {
          placer = $(this.Config.container).find(".rdr-template-application-outlet");
        }
        _ref1 = this.generateView(application_loading_path, placer, this.Templates[application_loading_path]), placer = _ref1[0], html = _ref1[1];
      }
    }
    if (placer.length) {
      return placer.append(html);
    }
  };

  _Class.prototype.markActiveRoutes = function(segments) {
    var container, index, path, paths, segment, _i, _len;
    segments = segments.slice(0).reverse();
    paths = [];
    for (index = _i = 0, _len = segments.length; _i < _len; index = ++_i) {
      segment = segments[index];
      path = this.pathForSegments(segments, false, index);
      paths.push("a[href='#" + path + "']");
    }
    container = $(this.Config.container);
    container.find("a.active").removeClass("active");
    return container.find(paths.join(", ")).addClass("active");
  };

  _Class.prototype.generateViews = function(views, placer, html) {
    var current_path, index, path, view, _i, _len, _ref;
    if (placer == null) {
      placer = "";
    }
    if (html == null) {
      html = "";
    }
    current_path = "/" + (views.slice(0).reverse().join("/"));
    for (index = _i = 0, _len = views.length; _i < _len; index = ++_i) {
      view = views[index];
      path = this.pathForSegments(views, true, index);
      _ref = this.generateView(path, placer, html), placer = _ref[0], html = _ref[1];
    }
    if (this.currentPath !== current_path) {
      return this.Log("Routes", "Resolved, but No Longer Relevant: " + current_path);
    } else {
      if (!placer.length) {
        placer = $(this.Config.container).find(".rdr-template-application-outlet");
      }
      placer.html(html);
      this.markActiveRoutes(views);
      return this.Log("Routes", "Resolved: " + current_path);
    }
  };

  _Class.prototype.generateView = function(view_path, placer, html) {
    var dasherized_path, vars;
    if (placer == null) {
      placer = "";
    }
    if (html == null) {
      html = "";
    }
    dasherized_path = this.dasherized(view_path);
    this.Log("Views", "Fetching: " + view_path);
    if ($(".rdr-template-" + dasherized_path).length) {
      if (!placer.length) {
        placer = $(".rdr-template-" + dasherized_path + "-outlet");
      }
      this.Warn("Views", "Already Present: " + view_path);
    } else {
      if (view_path in this.Templates) {
        vars = $.extend({}, this.fetchSynchronousVars());
        vars.vars = this.vars;
        vars.outlet = html;
        html = this.buildFromTemplate(this.Templates[view_path], vars, dasherized_path);
        this.Log("Views", "Generated: " + view_path);
      } else {
        this.Warn("Views", "Not Found: " + view_path);
      }
    }
    return [placer, html];
  };

  _Class.prototype.buildFromTemplate = function(template, data, dasherized_path) {
    if (data == null) {
      data = {};
    }
    data.outlet = "<div class=\"rdr-template-" + dasherized_path + "-outlet\">" + data.outlet + "</div>";
    return "<div class=\"rdr-template rdr-template-" + dasherized_path + "\" data-path=\"/" + (dasherized_path.replace(/\-/g, "/")) + "\">" + (template(data)) + "</div>";
  };

  return _Class;

})(RDR);

RDR = (function(_super) {
  __extends(_Class, _super);

  function _Class() {
    return _Class.__super__.constructor.apply(this, arguments);
  }

  _Class.prototype.createApplicationView = function() {
    var html;
    html = this.buildFromTemplate(this.Templates["/application"], {
      outlet: ""
    }, "application");
    return $(this.Config.container).html(html);
  };

  _Class.prototype.Boot = function() {
    var index, init, r, _i, _len, _ref;
    this.Log("App", "Initializing");
    r = this;
    this.handlebarsHelpers();
    _ref = this.Initializers;
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      init = _ref[index];
      this.Warn("Booter", "Initializer Executing: #" + (index + 1));
      if (typeof init === "function") {
        init();
      }
    }
    this.Log("Booter", "Booting");
    this.createApplicationView();
    this.DSConnect();
    FastClick.attach(document.body);
    if (/\#|hash/.test(this.Config.history)) {
      this.Log("Booter", "RDR History is Now: #");
      this.Config.history = "#";
      if (window.location.hash === "") {
        window.location.hash = "#/";
      }
      $(window).bind("hashchange", function() {
        return r.fetchPath(window.location.hash.replace(/\#/g, ""));
      });
      $(window).trigger("hashchange");
    } else {
      $(this.Config.container).on("click", "a[href^='#']", function() {
        r.fetchPath($(this).attr("href").replace(/\#/g, ""));
        return false;
      });
      this.fetchPath(this.currentPath);
    }
    $(this.Config.container).on("saveAttrs", "form", function() {
      $(this).find("[data-rdr-bind-key]").each(function() {
        var attrs, path, value;
        attrs = {};
        path = $(this).attr("data-rdr-bind-key");
        value = $(this).val();
        attrs[path] = value;
        return r.save(attrs);
      });
      return false;
    });
    $(this.Config.container).on("click", "[data-rdr-bind-event='click']", function() {
      r.executeEvent($(this));
      return false;
    });
    return $(this.Config.container).on("submit", "[data-rdr-bind-event='submit']", function() {
      r.executeEvent($(this));
      return false;
    });
  };

  return _Class;

})(RDR);
