webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n#typing{\n  background-color: transparent;\n    font-size: 15px;\n    color: grey;\n    position: relative;\n    top: -35.2vw;\n    margin-left: 33vw;\n    font-family: lato;\n  display: none;\n\n}\n#gif {\n  background-color: transparent;\n  position: relative;\n  top: 0vw;\n  left: -25vw;\n  width: 12vw;\n}\n*\n{\n  background-color:#eaeaea;\n  margin:0;\n  padding:0;\n}\nb,.input_value\n{\n  background-color: white;\n}\n.header\n{\n  position: relative;\n  overflow: hidden;\nwidth:100%;\nheight:4vw;\nfont-size:20px;\nfont-family:lato;\nbackground-color: white;\nbox-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);\n}\n.header_p\n{\n  position: relative;\n  overflow: hidden;\n  top:1vw;\n  left:42vw;\n      color: #0c495e;\n  font-size:20px;\nfont-family:lato;\nbackground-color: white;\n}\n.qua\n{\n\tcolor:#eb1f23;\n\tbackground-color:transparent;\n}\n.chatbox\n{\n  position: relative;\n\n top:40vw;\n left:14vw;\ntransition: left 1s;\n  width:62vw;\n}\n.icon3{\n  position: absolute;\n    top: 0.5vw;\n    left: 15vw;\n    display: block;\n    font-size: 25px;\n}\n\n.input_value\n{\n\nposition: absolute;\ntop: 0vw;\nleft: 18vw;\npadding-left: 20px;\nwidth: 37vw;\nheight: 2.7vw;\nborder: 0px;\nborder-radius: 50px;\nbox-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);\n}\n.sendbtn\n{\n  background-color: #c7c7c7;\n  position: absolute;\n  font-family: lato;\n  font-size: 18px;\n  top: 0vw;\n  left: 58vw;\n  width: 8vw;\n  height: 2.7vw;\n  border: 0px;\n  border-radius: 50px;\n}\n.sidebox{\n\nwidth:0vw;\nposition: relative;\noverflow: hidden;\ntransition: width 1s;\ntop: 0.05vw;\ndisplay:block;\nheight:47.7vw;\nbackground-color: white;\nbox-shadow: -2px 4px 3px rgba(0, 0, 0, 0.12);\n}\n\n\n\n.lady\n{ position: fixed;\n  overflow: hidden;\n  top:10vw;\n  transition: width 1s;\n  left: 2vw;\n  width: 0vw;\n  height: 25vw;\n  border-radius: 50%;\n  box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.12);\n}\n\n\n.icon{\n  position: relative;\n  overflow: hidden;\ntop:1vw;\ncolor:#c7c7c7;\nleft:21vw;\nfont-size:30px;\nbackground-color: white;\n\n}\n\n.start{\nposition: absolute;\ntop:-30vw;\nleft:20vw;\ncolor:rgba(0, 0, 0, 0.7);\n\nfont-size:.920rem;\nfont-family: lato;\n\n}\n\n.start_p{\nmargin-left: 100px;\n    font-size: 1.7rem;\n  font-family: lato;\n\n  }\n.icon2{\n position: absolute;\n    top: -26vw;\n    left: 40vw;\n    font-size: 50px;\n}\n.icon4{\n  position: absolute;\n  top: 37vw;\n    left: 10vw;\n  font-size: 50px;\n  background-color: white;\n\n  }\n.logo\n{\n    background-color: white;\n    position: absolute;\n    top: -0.3vw;\n    left: 0.5vw;\n    width: 4.5vw;\n\n}\n.head_pic\n{\n\tbackground-color: transparent;\n    width: 30%;\n    position: absolute;\n    top: 1vw;\n    left: 35vw;\n}\n/* { */\n     /* position: absolute; */\n    /* top: -0.2vw; */\n    /* left: 1vw; */\n    /* width: 13vw; */\n/* } */\n.chat\n{\n  overflow-y: auto;\n  position: absolute;\n    top: -38vw;\n    left: 14vw;\n  width:53vw;\n    max-height: 37vw;\n    /* display: flex;\n    flex-direction: column-reverse; */\n\n}\n.user\n{\n\n\tposition: relative;\n    /* padding-top: 2.5px; */\n    padding-left: 15px;\n    padding-right: 25px;\n    top: 0.2vw;\n    width: 27vw;\n    height: auto;\n    left: 18vw;\n    margin-bottom: 0.5vw;\n    border-radius: 50px;\n    background-color: lightblue;\n\n}\n.bot\n{\n  position: relative;\n  margin-top: 8px;\n  /* padding-top: 2.5px; */\n  padding-left: 15px;\n  padding-right: 25px;\n  width: 27vw;\n  height: auto;\n  left: 3.5vw;\n  margin-bottom: 0.5vw;\n  border-radius: 50px;\n  background-color: #cbcbcd;\n}\n.U{\n\n  width: 2vw;\n  padding-top: 5px;\n  padding-left: 10px;\n  margin-top: -25px;\n  margin-left: 339px;\n  height: 2.4vw;\n  border-radius: 50%;\n  background-color: white;\n  font-size: 20px;\n  font-family: lato;\n}\n.C\n{\n  width: 2vw;\n    padding-top: 2px;\n    padding-left: 10px;\n    margin-top: -20px;\n    margin-left: -49px;\n    height: 2.4vw;\n    border-radius: 50%;\n    background-color: white;\n    font-size: 20px;\n    font-family: lato;\n}\n#start, .icon2{\n  display:block;\n}\n.write\n{\n  position: relative;\n  top: 0.35vw;\n\n  left: 0.7vw;\n  background-color: transparent;\n  font-size: 14px;\n  font-family: lato;\n}\n #card\n{\n  position: relative;\n  overflow: hidden;\n  float: left;\n  width: 12vw;\n  background-color: transparent;\n  border-radius: 0px;\n  margin-top: -20px;\n  margin-right: 30px;\n\n}\n#btn\n{\n  position: relative;\n  float: left;\n  overflow: hidden;\n  font-size: 13px;\n  font-family: lato;\n  padding-left: 46.5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 46.5px;\n  margin-left: 25px;\n  margin-bottom: 5px;\n  border: 2px solid darkgrey;\n  border-radius: 20px;\n  background-color: white;\n}\n\n\n.menu\n{\n  position: relative;\n  overflow: hidden;\n  display: block;\n  background-color: transparent;\n  top: -46vw;\n  margin-left: 30px;\n}\n.icon5{\n font-size:40px;\nbackground-color: transparent;\n\n}\n.icon6\n{ position: relative;\n  margin-left: 80px;\n  top: -3vw;\n  animation: point 2s infinite;\n  display:block;\n  background-color: transparent;\n  font-size: 30px;\n\n}\n@keyframes point {\n  from{margin-left:80px;}\n  to{margin-left:40px;}\n\n}\n.amanda\n{     width: 190px;\n  margin-left: 110px;\n    margin-top: -65px;\n  font-size:15px;\n  display: block;\n  background-color: transparent;\n  font-family: monospace;\n}\n.icon7{\n  position: absolute;\n  top: 37vw;\n    left: 10vw;\n  font-size: 50px;\n  background-color: white;\n}\n.card_image   {\n  width: 10vw;\n  height: 10vw;\n\n\n}\n.info\n{\n  font-size: 13px;\n  font-family: lato;\n  padding-left: 35px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 35px;\n  margin-left: 10px;\n  border: 2px solid darkgrey;\n  border-radius: 20px;\n  background-color: white;\n}\n.set{\n\n  padding-bottom: 180px;\n    padding-top: 30px;\n    padding-left: 40px;\n}\n.logo_pic\n{\n\tfont-size: 30px;\n    background-color: white;\n    position: relative;\n    top: 30vw;\n    left: 8.5vw;\n    font-family: lato;\n}\n.write_a\n{\n\ttop: -0.05vw;\n    text-decoration: none;\n    font-weight: bold;\n    color: #4e84c4;\n\tbackground-color: transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map