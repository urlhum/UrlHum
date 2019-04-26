/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-04-10T19:48Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	if ( documentElement.attachShadow ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) &&
					dataPriv.get( el, "click" ) === undefined ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		jQuery.event.add( el, type, returnTrue );
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = undefined;
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(

					// Support: IE <=9 - 11+
					// Extend with the prototype to reset the above stopImmediatePropagation()
					jQuery.extend( saved.shift(), jQuery.Event.prototype ),
					saved,
					this
				) );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! ./vendor/jquery/dist/jquery.min */ "./resources/js/vendor/jquery/dist/jquery.min.js"); // Workaround for jQuery to work with Webpack



window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

__webpack_require__(/*! ./vendor/anchor-js/anchor.min */ "./resources/js/vendor/anchor-js/anchor.min.js");

__webpack_require__(/*! ./vendor/bootstrap/dist/js/bootstrap.bundle.min */ "./resources/js/vendor/bootstrap/dist/js/bootstrap.bundle.min.js");

__webpack_require__(/*! ./vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min */ "./resources/js/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js");

__webpack_require__(/*! ./vendor/chart.js/dist/Chart.min */ "./resources/js/vendor/chart.js/dist/Chart.min.js");

__webpack_require__(/*! ./vendor/chart.js/dist/Chart.extension */ "./resources/js/vendor/chart.js/dist/Chart.extension.js");

__webpack_require__(/*! ./vendor/clipboard/dist/clipboard.min */ "./resources/js/vendor/clipboard/dist/clipboard.min.js");

__webpack_require__(/*! ./argon.min */ "./resources/js/argon.min.js");

__webpack_require__(/*! ./ui */ "./resources/js/ui.js");

/***/ }),

/***/ "./resources/js/argon.min.js":
/*!***********************************!*\
  !*** ./resources/js/argon.min.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!

=========================================================
* Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2018 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var map,
    lat,
    lng,
    Datepicker = function () {
  var a = $(".datepicker");
  a.length && a.each(function () {
    $(this).datepicker({
      disableTouchKeyboard: !0,
      autoclose: !1
    });
  });
}(),
    CopyIcon = function () {
  var a,
      e = ".btn-icon-clipboard",
      t = $(e);
  t.length && ((a = t).tooltip().on("mouseleave", function () {
    a.tooltip("hide");
  }), new ClipboardJS(e).on("success", function (a) {
    $(a.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), a.clearSelection();
  }));
}(),
    FormControl = function () {
  var a = $(".form-control");
  a.length && a.on("focus blur", function (a) {
    $(this).parents(".form-group").toggleClass("focused", "focus" === a.type || 0 < this.value.length);
  }).trigger("blur");
}(),
    $map = $("#map-canvas"),
    color = "#5e72e4";

function initMap() {
  map = document.getElementById("map-canvas"), lat = map.getAttribute("data-lat"), lng = map.getAttribute("data-lng");
  var a = new google.maps.LatLng(lat, lng),
      e = {
    zoom: 12,
    scrollwheel: !1,
    center: a,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#444444"
      }]
    }, {
      featureType: "landscape",
      elementType: "all",
      stylers: [{
        color: "#f2f2f2"
      }]
    }, {
      featureType: "poi",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "road",
      elementType: "all",
      stylers: [{
        saturation: -100
      }, {
        lightness: 45
      }]
    }, {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{
        visibility: "simplified"
      }]
    }, {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "transit",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "water",
      elementType: "all",
      stylers: [{
        color: color
      }, {
        visibility: "on"
      }]
    }]
  };
  map = new google.maps.Map(map, e);
  var t = new google.maps.Marker({
    position: a,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Hello World!"
  }),
      o = new google.maps.InfoWindow({
    content: '<div class="info-window-content"><h2>Argon Dashboard</h2><p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>'
  });
  google.maps.event.addListener(t, "click", function () {
    o.open(map, t);
  });
}

$map.length && google.maps.event.addDomListener(window, "load", initMap);

var Navbar = function () {
  var e = $(".navbar-nav, .navbar-nav .nav"),
      t = $(".navbar .collapse"),
      a = $(".navbar .dropdown");
  t.on({
    "show.bs.collapse": function showBsCollapse() {
      var a;
      (a = $(this)).closest(e).find(t).not(a).collapse("hide");
    }
  }), a.on({
    "hide.bs.dropdown": function hideBsDropdown() {
      var a, e;
      a = $(this), (e = a.find(".dropdown-menu")).addClass("close"), setTimeout(function () {
        e.removeClass("close");
      }, 200);
    }
  });
}(),
    NavbarCollapse = function () {
  $(".navbar-nav");
  var a = $(".navbar .collapse");
  a.length && (a.on({
    "hide.bs.collapse": function hideBsCollapse() {
      a.addClass("collapsing-out");
    }
  }), a.on({
    "hidden.bs.collapse": function hiddenBsCollapse() {
      a.removeClass("collapsing-out");
    }
  }));
}(),
    noUiSlider = function () {
  if ($(".input-slider-container")[0] && $(".input-slider-container").each(function () {
    var a = $(this).find(".input-slider"),
        e = a.attr("id"),
        t = a.data("range-value-min"),
        o = a.data("range-value-max"),
        n = $(this).find(".range-slider-value"),
        r = n.attr("id"),
        l = n.data("range-value-low"),
        i = document.getElementById(e),
        s = document.getElementById(r);
    noUiSlider.create(i, {
      start: [parseInt(l)],
      connect: [!0, !1],
      range: {
        min: [parseInt(t)],
        max: [parseInt(o)]
      }
    }), i.noUiSlider.on("update", function (a, e) {
      s.textContent = a[e];
    });
  }), $("#input-slider-range")[0]) {
    var a = document.getElementById("input-slider-range"),
        e = document.getElementById("input-slider-range-value-low"),
        t = document.getElementById("input-slider-range-value-high"),
        o = [e, t];
    noUiSlider.create(a, {
      start: [parseInt(e.getAttribute("data-range-value-low")), parseInt(t.getAttribute("data-range-value-high"))],
      connect: !0,
      range: {
        min: parseInt(a.getAttribute("data-range-value-min")),
        max: parseInt(a.getAttribute("data-range-value-max"))
      }
    }), a.noUiSlider.on("update", function (a, e) {
      o[e].textContent = a[e];
    });
  }
}(),
    Popover = function () {
  var a = $('[data-toggle="popover"]'),
      t = "";
  a.length && a.each(function () {
    !function (a) {
      a.data("color") && (t = "popover-" + a.data("color"));
      var e = {
        trigger: "focus",
        template: '<div class="popover ' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      };
      a.popover(e);
    }($(this));
  });
}(),
    ScrollTo = function () {
  var a = $(".scroll-me, [data-scroll-to], .toc-entry a");
  a.length && a.on("click", function (a) {
    var e, t, o, n;
    e = $(this), t = e.attr("href"), o = e.data("scroll-to-offset") ? e.data("scroll-to-offset") : 0, n = {
      scrollTop: $(t).offset().top - o
    }, $("html, body").stop(!0, !0).animate(n, 600), event.preventDefault();
  });
}(),
    Tooltip = function () {
  var a = $('[data-toggle="tooltip"]');
  a.length && a.tooltip();
}(),
    Charts = function () {
  var a,
      e = $('[data-toggle="chart"]'),
      t = "light",
      o = {
    base: "Open Sans"
  },
      n = {
    gray: {
      100: "#f6f9fc",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#8898aa",
      700: "#525f7f",
      800: "#32325d",
      900: "#212529"
    },
    theme: {
      "default": "#172b4d",
      primary: "#5e72e4",
      secondary: "#f4f5f7",
      info: "#11cdef",
      success: "#2dce89",
      danger: "#f5365c",
      warning: "#fb6340"
    },
    black: "#12263F",
    white: "#FFFFFF",
    transparent: "transparent"
  };

  function r(a, e) {
    for (var t in e) {
      "object" != _typeof(e[t]) ? a[t] = e[t] : r(a[t], e[t]);
    }
  }

  function l(a) {
    var e = a.data("add"),
        t = $(a.data("target")).data("chart");
    a.is(":checked") ? function a(e, t) {
      for (var o in t) {
        Array.isArray(t[o]) ? t[o].forEach(function (a) {
          e[o].push(a);
        }) : a(e[o], t[o]);
      }
    }(t, e) : function a(e, t) {
      for (var o in t) {
        Array.isArray(t[o]) ? t[o].forEach(function (a) {
          e[o].pop();
        }) : a(e[o], t[o]);
      }
    }(t, e), t.update();
  }

  function i(a) {
    var e = a.data("update"),
        t = $(a.data("target")).data("chart");
    r(t, e), function (a, e) {
      if (void 0 !== a.data("prefix") || void 0 !== a.data("prefix")) {
        var r = a.data("prefix") ? a.data("prefix") : "",
            l = a.data("suffix") ? a.data("suffix") : "";
        e.options.scales.yAxes[0].ticks.callback = function (a) {
          if (!(a % 10)) return r + a + l;
        }, e.options.tooltips.callbacks.label = function (a, e) {
          var t = e.datasets[a.datasetIndex].label || "",
              o = a.yLabel,
              n = "";
          return 1 < e.datasets.length && (n += '<span class="popover-body-label mr-auto">' + t + "</span>"), n += '<span class="popover-body-value">' + r + o + l + "</span>";
        };
      }
    }(a, t), t.update();
  }

  return window.Chart && r(Chart, (a = {
    defaults: {
      global: {
        responsive: !0,
        maintainAspectRatio: !1,
        defaultColor: n.gray[600],
        defaultFontColor: n.gray[600],
        defaultFontFamily: o.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: !1,
          position: "bottom",
          labels: {
            usePointStyle: !0,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: n.theme.primary
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: n.theme.primary,
            backgroundColor: n.transparent,
            borderCapStyle: "rounded"
          },
          rectangle: {
            backgroundColor: n.theme.warning
          },
          arc: {
            backgroundColor: n.theme.primary,
            borderColor: n.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: !1,
          mode: "index",
          intersect: !1,
          custom: function custom(o) {
            var a = $("#chart-tooltip");

            if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== o.opacity) {
              if (o.body) {
                var e = o.title || [],
                    n = o.body.map(function (a) {
                  return a.lines;
                }),
                    r = "";
                r += '<div class="arrow"></div>', e.forEach(function (a) {
                  r += '<h3 class="popover-header text-center">' + a + "</h3>";
                }), n.forEach(function (a, e) {
                  o.labelColors[e].backgroundColor;
                  var t = 1 < n.length ? "justify-content-left" : "justify-content-center";
                  r += '<div class="popover-body d-flex align-items-center ' + t + '"><span class="badge badge-dot"><i class="bg-primary"></i></span>' + a + "</div>";
                }), a.html(r);
              }

              var t = $(this._chart.canvas),
                  l = (t.outerWidth(), t.outerHeight(), t.offset().top),
                  i = t.offset().left,
                  s = a.outerWidth(),
                  d = a.outerHeight(),
                  c = l + o.caretY - d - 16,
                  p = i + o.caretX - s / 2;
              a.css({
                top: c + "px",
                left: p + "px",
                display: "block",
                "z-index": "100"
              });
            } else a.css("display", "none");
          },
          callbacks: {
            label: function label(a, e) {
              var t = e.datasets[a.datasetIndex].label || "",
                  o = a.yLabel,
                  n = "";
              return 1 < e.datasets.length && (n += '<span class="badge badge-primary mr-auto">' + t + "</span>"), n += '<span class="popover-body-value">' + o + "</span>";
            }
          }
        }
      },
      doughnut: {
        cutoutPercentage: 83,
        tooltips: {
          callbacks: {
            title: function title(a, e) {
              return e.labels[a[0].index];
            },
            label: function label(a, e) {
              var t = "";
              return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>";
            }
          }
        },
        legendCallback: function legendCallback(a) {
          var o = a.data,
              n = "";
          return o.labels.forEach(function (a, e) {
            var t = o.datasets[0].backgroundColor[e];
            n += '<span class="chart-legend-item">', n += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', n += a, n += "</span>";
          }), n;
        }
      }
    }
  }, Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: n.gray[300],
      drawBorder: !1,
      drawTicks: !1,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: n.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(a) {
        if (!(a % 10)) return a;
      }
    }
  }), Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  }), a)), e.on({
    change: function change() {
      var a = $(this);
      a.is("[data-add]") && l(a);
    },
    click: function click() {
      var a = $(this);
      a.is("[data-update]") && i(a);
    }
  }), {
    colors: n,
    fonts: o,
    mode: t
  };
}(),
    OrdersChart = function () {
  var a,
      e,
      t = $("#chart-orders");
  $('[name="ordersSelect"]');
  t.length && (a = t, e = new Chart(a, {
    type: "bar",
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return a;
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                n = "";
            return 1 < e.datasets.length && (n += '<span class="popover-body-label mr-auto">' + t + "</span>"), n += '<span class="popover-body-value">' + o + "</span>";
          }
        }
      }
    },
    data: {
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29]
      }]
    }
  }), a.data("chart", e));
}(),
    SalesChart = function () {
  var a,
      e,
      t = $("#chart-sales");
  t.length && (a = t, e = new Chart(a, {
    type: "line",
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            color: Charts.colors.gray[900],
            zeroLineColor: Charts.colors.gray[900]
          },
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                n = "";
            return 1 < e.datasets.length && (n += '<span class="popover-body-label mr-auto">' + t + "</span>"), n += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    },
    data: {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
      }]
    }
  }), a.data("chart", e));
}();

/***/ }),

/***/ "./resources/js/ui.js":
/*!****************************!*\
  !*** ./resources/js/ui.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('#options-toggle').click(function () {
    $('#options-panel').toggle(200);
  }); // Delay user input in custom url field

  function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
          args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }

  container = $('#customUrlcontainer');
  $('#customUrl').keyup(delay(function (e) {
    if ($('#customUrl').val().length <= 3) {
      container.addClass('has-danger');
      $('#customUrlResult').text('Type a longer short URL');
    } else {
      $('#customUrlResult').text('Loading...  ').append('<i class="fa fa-spinner"></i>');
      $.ajax({
        type: "POST",
        url: '/url/short',
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          'input': $('#customUrl').val()
        },
        success: function success() {
          container.removeClass('has-danger');
          container.addClass('has-success');
          $('#customUrlResult').text('Custom URL available');
        },
        error: function error(jqXHR) {
          var msg = '';

          if (jqXHR.status === 0) {
            msg = 'Can\'t connect. Check your internet connection';
          } else if (jqXHR.status == 409) {
            msg = 'Custom URL already existing';
          } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error: 500';
          }

          container.removeClass('has-success');
          container.addClass('has-danger');
          $('#customUrlResult').text(msg);
        }
      });
    }
  }, 500));
});

/***/ }),

/***/ "./resources/js/vendor/anchor-js/anchor.min.js":
/*!*****************************************************!*\
  !*** ./resources/js/vendor/anchor-js/anchor.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * AnchorJS - v4.1.1 - 2018-07-01
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2018 Bryan Braun; Licensed MIT
 */
!function (A, e) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  return function (A) {
    function d(A) {
      A.icon = A.hasOwnProperty("icon") ? A.icon : "", A.visible = A.hasOwnProperty("visible") ? A.visible : "hover", A.placement = A.hasOwnProperty("placement") ? A.placement : "right", A.ariaLabel = A.hasOwnProperty("ariaLabel") ? A.ariaLabel : "Anchor", A["class"] = A.hasOwnProperty("class") ? A["class"] : "", A.truncate = A.hasOwnProperty("truncate") ? Math.floor(A.truncate) : 64;
    }

    function f(A) {
      var e;
      if ("string" == typeof A || A instanceof String) e = [].slice.call(document.querySelectorAll(A));else {
        if (!(Array.isArray(A) || A instanceof NodeList)) throw new Error("The selector provided to AnchorJS was invalid.");
        e = [].slice.call(A);
      }
      return e;
    }

    this.options = A || {}, this.elements = [], d(this.options), this.isTouchDevice = function () {
      return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }, this.add = function (A) {
      var e,
          t,
          i,
          n,
          o,
          s,
          r,
          a,
          c,
          h,
          l,
          u = [];
      if (d(this.options), "touch" === (l = this.options.visible) && (l = this.isTouchDevice() ? "always" : "hover"), A || (A = "h2, h3, h4, h5, h6"), 0 === (e = f(A)).length) return this;

      for (function () {
        if (null === document.head.querySelector("style.anchorjs")) {
          var A,
              e = document.createElement("style");
          e.className = "anchorjs", e.appendChild(document.createTextNode("")), void 0 === (A = document.head.querySelector('[rel="stylesheet"], style')) ? document.head.appendChild(e) : document.head.insertBefore(e, A), e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length), e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length), e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length), e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length);
        }
      }(), t = document.querySelectorAll("[id]"), i = [].map.call(t, function (A) {
        return A.id;
      }), o = 0; o < e.length; o++) {
        if (this.hasAnchorJSLink(e[o])) u.push(o);else {
          if (e[o].hasAttribute("id")) n = e[o].getAttribute("id");else if (e[o].hasAttribute("data-anchor-id")) n = e[o].getAttribute("data-anchor-id");else {
            for (c = a = this.urlify(e[o].textContent), r = 0; void 0 !== s && (c = a + "-" + r), r += 1, -1 !== (s = i.indexOf(c));) {
              ;
            }

            s = void 0, i.push(c), e[o].setAttribute("id", c), n = c;
          }
          n.replace(/-/g, " "), (h = document.createElement("a")).className = "anchorjs-link " + this.options["class"], h.href = "#" + n, h.setAttribute("aria-label", this.options.ariaLabel), h.setAttribute("data-anchorjs-icon", this.options.icon), "always" === l && (h.style.opacity = "1"), "" === this.options.icon && (h.style.font = "1em/1 anchorjs-icons", "left" === this.options.placement && (h.style.lineHeight = "inherit")), "left" === this.options.placement ? (h.style.position = "absolute", h.style.marginLeft = "-1em", h.style.paddingRight = "0.5em", e[o].insertBefore(h, e[o].firstChild)) : (h.style.paddingLeft = "0.375em", e[o].appendChild(h));
        }
      }

      for (o = 0; o < u.length; o++) {
        e.splice(u[o] - o, 1);
      }

      return this.elements = this.elements.concat(e), this;
    }, this.remove = function (A) {
      for (var e, t, i = f(A), n = 0; n < i.length; n++) {
        (t = i[n].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(i[n])) && this.elements.splice(e, 1), i[n].removeChild(t));
      }

      return this;
    }, this.removeAll = function () {
      this.remove(this.elements);
    }, this.urlify = function (A) {
      return this.options.truncate || d(this.options), A.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase();
    }, this.hasAnchorJSLink = function (A) {
      var e = A.firstChild && -1 < (" " + A.firstChild.className + " ").indexOf(" anchorjs-link "),
          t = A.lastChild && -1 < (" " + A.lastChild.className + " ").indexOf(" anchorjs-link ");
      return e || t || !1;
    };
  };
});

/***/ }),

/***/ "./resources/js/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }

  function e(a, b) {
    return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate();
  }

  function f(c, d) {
    return function () {
      return d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments);
    };
  }

  function g(a) {
    return a && !isNaN(a.getTime());
  }

  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }

    var e,
        f = a(b).data(),
        g = {},
        h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
    c = new RegExp("^" + c.toLowerCase());

    for (var i in f) {
      c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
    }

    return g;
  }

  function i(b) {
    var c = {};

    if (q[b] || (b = b.split("-")[0], q[b])) {
      var d = q[b];
      return a.each(p, function (a, b) {
        b in d && (c[b] = d[b]);
      }), c;
    }
  }

  var j = function () {
    var b = {
      get: function get(a) {
        return this.slice(a)[0];
      },
      contains: function contains(a) {
        for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) {
          if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c;
        }

        return -1;
      },
      remove: function remove(a) {
        this.splice(a, 1);
      },
      replace: function replace(b) {
        b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
      },
      clear: function clear() {
        this.length = 0;
      },
      copy: function copy() {
        var a = new j();
        return a.replace(this), a;
      }
    };
    return function () {
      var c = [];
      return c.push.apply(c, arguments), a.extend(c, b), c;
    };
  }(),
      k = function k(b, c) {
    a.data(b, "datepicker", this), this._process_options(c), this.dates = new j(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
      return Number(b) + 1;
    }), this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled
    }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show();
  };

  k.prototype = {
    constructor: k,
    _resolveViewName: function _resolveViewName(b) {
      return a.each(r.viewModes, function (c, d) {
        if (b === c || a.inArray(b, d.names) !== -1) return b = c, !1;
      }), b;
    },
    _resolveDaysOfWeek: function _resolveDaysOfWeek(b) {
      return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
    },
    _check_template: function _check_template(c) {
      try {
        if (c === b || "" === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        var d = a(c);
        return d.length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function _process_options(b) {
      this._o = a.extend({}, this._o, b);
      var e = this.o = a.extend({}, this._o),
          f = e.language;
      q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
      var g = r.parseFormat(e.format);
      e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = a.map(e.datesDisabled, function (a) {
        return r.parseDate(a, g, e.language, e.assumeNearbyYear);
      });
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
          i = e.orientation.toLowerCase();
      if (h = a.grep(h, function (a) {
        return /^auto|left|right|top|bottom$/.test(a);
      }), e.orientation = {
        x: "auto",
        y: "auto"
      }, i && "auto" !== i) {
        if (1 === h.length) switch (h[0]) {
          case "top":
          case "bottom":
            e.orientation.y = h[0];
            break;

          case "left":
          case "right":
            e.orientation.x = h[0];
        } else i = a.grep(h, function (a) {
          return /^left|right$/.test(a);
        }), e.orientation.x = i[0] || "auto", i = a.grep(h, function (a) {
          return /^top|bottom$/.test(a);
        }), e.orientation.y = i[0] || "auto";
      } else ;
      if (e.defaultViewDate instanceof Date || "string" == typeof e.defaultViewDate) e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear);else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
            k = e.defaultViewDate.month || 0,
            l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d);
      }
    },
    _unapplyEvents: function _unapplyEvents(a) {
      for (var c, d, e, f = 0; f < a.length; f++) {
        c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e);
      }
    },
    _buildEvents: function _buildEvents() {
      var b = {
        keyup: a.proxy(function (b) {
          a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this)
      };
      this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
        click: a.proxy(this.show, this)
      }]] : this._events = [[this.element, {
        click: a.proxy(this.show, this),
        keydown: a.proxy(this.keydown, this)
      }]], this._events.push([this.element, "*", {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }], [this.element, {
        blur: a.proxy(function (a) {
          this._focused_from = a.target;
        }, this)
      }]), this.o.immediateUpdates && this._events.push([this.element, {
        "changeYear changeMonth": a.proxy(function (a) {
          this.update(a.date);
        }, this)
      }]), this._secondaryEvents = [[this.picker, {
        click: a.proxy(this.click, this)
      }], [this.picker, ".prev, .next", {
        click: a.proxy(this.navArrowsClick, this)
      }], [this.picker, ".day:not(.disabled)", {
        click: a.proxy(this.dayCellClick, this)
      }], [a(window), {
        resize: a.proxy(this.place, this)
      }], [a(document), {
        "mousedown touchstart": a.proxy(function (a) {
          this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide();
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(b, c) {
      var d = c || this.dates.get(-1),
          e = this._utc_to_local(d);

      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this;
    },
    hide: function hide() {
      return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this);
    },
    destroy: function destroy() {
      return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this;
    },
    paste: function paste(b) {
      var c;
      if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData("text/plain");else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData("Text");
      }
      this.setDate(c), this.update(), b.preventDefault();
    },
    _utc_to_local: function _utc_to_local(a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), b;
    },
    _local_to_utc: function _local_to_utc(a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function _zero_time(a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function _zero_utc_time(a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function getDates() {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function clearDates() {
      this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide();
    },
    setDates: function setDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this;
    },
    setUTCDates: function setUTCDates() {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
    },
    setDate: f("setDates"),
    setUTCDate: f("setUTCDates"),
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function setValue() {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function getFormattedDate(c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a.map(this.dates, function (a) {
        return r.formatDate(a, c, d);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(a) {
      return this._process_options({
        startDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(a) {
      return this._process_options({
        endDate: a
      }), this.update(), this.updateNavArrows(), this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(a) {
      return this._process_options({
        daysOfWeekDisabled: a
      }), this.update(), this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(a) {
      return this._process_options({
        daysOfWeekHighlighted: a
      }), this.update(), this;
    },
    setDatesDisabled: function setDatesDisabled(a) {
      return this._process_options({
        datesDisabled: a
      }), this.update(), this;
    },
    place: function place() {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
          c = this.picker.outerHeight(),
          d = 10,
          e = a(this.o.container),
          f = e.width(),
          g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
          h = e.offset(),
          i = [0];
      this.element.parents().each(function () {
        var b = a(this).css("z-index");
        "auto" !== b && 0 !== Number(b) && i.push(Number(b));
      });
      var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
          k = this.component ? this.component.parent().offset() : this.element.offset(),
          l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
          m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
          n = k.left - h.left,
          o = k.top - h.top;
      "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
      var p,
          q = this.o.orientation.y;

      if ("auto" === q && (p = -g + o - c, q = p < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
        var r = f - (n + m);
        this.picker.css({
          top: o,
          right: r,
          zIndex: j
        });
      } else this.picker.css({
        top: o,
        left: n,
        zIndex: j
      });

      return this;
    },
    _allow_update: !0,
    update: function update() {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
          c = [],
          d = !1;
      return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
        b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
      }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
        return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this)), c = a.grep(c, a.proxy(function (a) {
        return !this.dateWithinRange(a) || !a;
      }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"), this.element.change()), !this.dates.length && b.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this;
    },
    fillDow: function fillDow() {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
            c = "<tr>";

        for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) {
          c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
        }

        c += "</tr>", this.picker.find(".datepicker-days thead").append(c);
      }
    },
    fillMonths: function fillMonths() {
      for (var a, b = this._utc_to_local(this.viewDate), c = "", d = 0; d < 12; d++) {
        a = b && b.getMonth() === d ? " focused" : "", c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + "</span>";
      }

      this.picker.find(".datepicker-months td").html(c);
    },
    setRange: function setRange(b) {
      b && b.length ? this.range = a.map(b, function (a) {
        return a.valueOf();
      }) : delete this.range, this.fill();
    },
    getClassNames: function getClassNames(b) {
      var c = [],
          f = this.viewDate.getUTCFullYear(),
          g = this.viewDate.getUTCMonth(),
          h = d();
      return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && e(b, h) && c.push("today"), this.dates.contains(b) !== -1 && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c;
    },
    _fill_yearsView: function _fill_yearsView(c, d, e, f, g, h, i) {
      for (var j, k, l, m = "", n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function (a) {
        return Math.floor(a.getUTCFullYear() / n) * n;
      }), t = p - n; t <= q + n; t += n) {
        j = [d], k = null, t === p - n ? j.push("old") : t === q + n && j.push("new"), a.inArray(t, s) !== -1 && j.push("active"), (t < g || t > h) && j.push("disabled"), t === r && j.push("focused"), i !== a.noop && (l = i(new Date(t, 0, 1)), l === b ? l = {} : "boolean" == typeof l ? l = {
          enabled: l
        } : "string" == typeof l && (l = {
          classes: l
        }), l.enabled === !1 && j.push("disabled"), l.classes && (j = j.concat(l.classes.split(/\s+/))), l.tooltip && (k = l.tooltip)), m += '<span class="' + j.join(" ") + '"' + (k ? ' title="' + k + '"' : "") + ">" + t + "</span>";
      }

      o.find(".datepicker-switch").text(p + "-" + q), o.find("td").html(m);
    },
    fill: function fill() {
      var d,
          e,
          f = new Date(this.viewDate),
          g = f.getUTCFullYear(),
          h = f.getUTCMonth(),
          i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
          j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
          k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          m = q[this.o.language].today || q.en.today || "",
          n = q[this.o.language].clear || q.en.clear || "",
          o = q[this.o.language].titleFormat || q.en.titleFormat;

      if (!isNaN(g) && !isNaN(h)) {
        this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(n).css("display", this.o.clearBtn === !0 ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
        var p = c(g, h, 0),
            s = p.getUTCDate();
        p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7);
        var t = new Date(p);
        p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf();

        for (var u, v, w = []; p.valueOf() < t;) {
          if (u = p.getUTCDay(), u === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) {
            var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5),
                y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5),
                A = (y - z) / 864e5 / 7 + 1;
            w.push('<td class="cw">' + A + "</td>");
          }

          v = this.getClassNames(p), v.push("day");
          var B = p.getUTCDate();
          this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = {
            enabled: e
          } : "string" == typeof e && (e = {
            classes: e
          }), e.enabled === !1 && v.push("disabled"), e.classes && (v = v.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip), e.content && (B = e.content)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ' data-date="' + p.getTime().toString() + '">' + B + "</td>"), d = null, u === this.o.weekEnd && w.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1);
        }

        this.picker.find(".datepicker-days tbody").html(w.join(""));
        var C = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
            D = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? C : g).end().find("tbody span").removeClass("active");

        if (a.each(this.dates, function (a, b) {
          b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass("active");
        }), (g < i || g > k) && D.addClass("disabled"), g === i && D.slice(0, j).addClass("disabled"), g === k && D.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
          var E = this;
          a.each(D, function (c, d) {
            var e = new Date(g, c, 1),
                f = E.o.beforeShowMonth(e);
            f === b ? f = {} : "boolean" == typeof f ? f = {
              enabled: f
            } : "string" == typeof f && (f = {
              classes: f
            }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip);
          });
        }

        this._fill_yearsView(".datepicker-years", "year", 10, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, g, i, k, this.o.beforeShowCentury);
      }
    },
    updateNavArrows: function updateNavArrows() {
      if (this._allow_update) {
        var a,
            b,
            c = new Date(this.viewDate),
            d = c.getUTCFullYear(),
            e = c.getUTCMonth(),
            f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
            g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
            h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            j = 1;

        switch (this.viewMode) {
          case 4:
            j *= 10;

          case 3:
            j *= 10;

          case 2:
            j *= 10;

          case 1:
            a = Math.floor(d / j) * j < f, b = Math.floor(d / j) * j + j > h;
            break;

          case 0:
            a = d <= f && e < g, b = d >= h && e > i;
        }

        this.picker.find(".prev").toggleClass("disabled", a), this.picker.find(".next").toggleClass("disabled", b);
      }
    },
    click: function click(b) {
      b.preventDefault(), b.stopPropagation();
      var e, f, g, h;
      e = a(b.target), e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), f = 1, 1 === this.viewMode ? (h = e.parent().find("span").index(e), g = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(h)) : (h = 0, g = Number(e.text()), this.viewDate.setUTCFullYear(g)), this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from;
    },
    dayCellClick: function dayCellClick(b) {
      var c = a(b.currentTarget),
          d = c.data("date"),
          e = new Date(d);
      this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(e);
    },
    navArrowsClick: function navArrowsClick(b) {
      var c = a(b.currentTarget),
          d = c.hasClass("prev") ? -1 : 1;
      0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill();
    },
    _toggle_multidate: function _toggle_multidate(a) {
      var b = this.dates.contains(a);
      if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(a, b) {
      b && "date" !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || b && "date" !== b || this.hide();
    },
    moveDay: function moveDay(a, b) {
      var c = new Date(a);
      return c.setUTCDate(a.getUTCDate() + b), c;
    },
    moveWeek: function moveWeek(a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function moveMonth(a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
          d,
          e = new Date(a.valueOf()),
          f = e.getUTCDate(),
          h = e.getUTCMonth(),
          i = Math.abs(b);
      if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function () {
        return e.getUTCMonth() === h;
      } : function () {
        return e.getUTCMonth() !== c;
      }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12;else {
        for (var j = 0; j < i; j++) {
          e = this.moveMonth(e, b);
        }

        c = e.getUTCMonth(), e.setUTCDate(f), d = function d() {
          return c !== e.getUTCMonth();
        };
      }

      for (; d();) {
        e.setUTCDate(--f), e.setUTCMonth(c);
      }

      return e;
    },
    moveYear: function moveYear(a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function moveAvailableDate(a, b, c) {
      do {
        if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
        c = "moveDay";
      } while (this.dateIsDisabled(a));

      return a;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(b) {
      return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
    },
    dateIsDisabled: function dateIsDisabled(b) {
      return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
        return e(b, a);
      }).length > 0;
    },
    dateWithinRange: function dateWithinRange(a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function keydown(a) {
      if (!this.picker.is(":visible")) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), a.stopPropagation()));
      var b,
          c,
          d = !1,
          e = this.focusDate || this.viewDate;

      switch (a.keyCode) {
        case 27:
          this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
          break;

        case 37:
        case 38:
        case 39:
        case 40:
          if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
          b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
          break;

        case 13:
          if (!this.o.forceParse) break;
          e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
          break;

        case 9:
          this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide();
      }

      d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"));
    },
    setViewMode: function setViewMode(a) {
      this.viewMode = a, this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate));
    }
  };

  var l = function l(b, c) {
    a.data(b, "datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
      return a.jquery ? a[0] : a;
    }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
      return a.data(b, "datepicker");
    }), this.updateDates();
  };

  l.prototype = {
    updateDates: function updateDates() {
      this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      }), this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function clearDates() {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function dateUpdated(c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, "datepicker");

        if (d !== b) {
          var e = d.getUTCDate(),
              f = this.keepEmptyValues,
              g = a.inArray(c.target, this.inputs),
              h = g - 1,
              i = g + 1,
              j = this.inputs.length;

          if (g !== -1) {
            if (a.each(this.pickers, function (a, b) {
              b.getUTCDate() || b !== d && f || b.setUTCDate(e);
            }), e < this.dates[h]) for (; h >= 0 && e < this.dates[h];) {
              this.pickers[h--].setUTCDate(e);
            } else if (e > this.dates[i]) for (; i < j && e > this.dates[i];) {
              this.pickers[i++].setUTCDate(e);
            }
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function destroy() {
      a.map(this.pickers, function (a) {
        a.destroy();
      }), a(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker;
    },
    remove: f("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
  };

  var m = a.fn.datepicker,
      n = function n(c) {
    var d = Array.apply(null, arguments);
    d.shift();
    var e;
    if (this.each(function () {
      var b = a(this),
          f = b.data("datepicker"),
          g = "object" == _typeof(c) && c;

      if (!f) {
        var j = h(this, "date"),
            m = a.extend({}, o, j, g),
            n = i(m.language),
            p = a.extend({}, o, n, j, g);
        b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {
          inputs: p.inputs || b.find("input").toArray()
        }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f);
      }

      "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d));
    }), e === b || e instanceof k || e instanceof l) return this;
    if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
    return e;
  };

  a.fn.datepicker = n;
  var o = a.fn.datepicker.defaults = {
    assumeNearbyYear: !1,
    autoclose: !1,
    beforeShowDay: a.noop,
    beforeShowMonth: a.noop,
    beforeShowYear: a.noop,
    beforeShowDecade: a.noop,
    beforeShowCentury: a.noop,
    calendarWeeks: !1,
    clearBtn: !1,
    toggleActive: !1,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: 1 / 0,
    forceParse: !0,
    format: "mm/dd/yyyy",
    keepEmptyValues: !1,
    keyboardNavigation: !0,
    language: "en",
    minViewMode: 0,
    maxViewMode: 4,
    multidate: !1,
    multidateSeparator: ",",
    orientation: "auto",
    rtl: !1,
    startDate: -(1 / 0),
    startView: 0,
    todayBtn: !1,
    todayHighlight: !1,
    updateViewDate: !0,
    weekStart: 0,
    disableTouchKeyboard: !1,
    enableOnReadonly: !0,
    showOnFocus: !0,
    zIndexOffset: 10,
    container: "body",
    immediateUpdates: !1,
    title: "",
    templates: {
      leftArrow: "&#x00AB;",
      rightArrow: "&#x00BB;"
    },
    showWeekDays: !0
  },
      p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
  a.fn.datepicker.Constructor = k;
  var q = a.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  },
      r = {
    viewModes: [{
      names: ["days", "month"],
      clsName: "days",
      e: "changeMonth"
    }, {
      names: ["months", "year"],
      clsName: "months",
      e: "changeYear",
      navStep: 1
    }, {
      names: ["years", "decade"],
      clsName: "years",
      e: "changeDecade",
      navStep: 10
    }, {
      names: ["decades", "century"],
      clsName: "decades",
      e: "changeCentury",
      navStep: 100
    }, {
      names: ["centuries", "millennium"],
      clsName: "centuries",
      e: "changeMillennium",
      navStep: 1e3
    }],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(a) {
      if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
      var b = a.replace(this.validParts, "\0").split("\0"),
          c = a.match(this.validParts);
      if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
      return {
        separators: b,
        parts: c
      };
    },
    parseDate: function parseDate(c, e, f, g) {
      function h(a, b) {
        return b === !0 && (b = 10), a < 100 && (a += 2e3, a > new Date().getFullYear() + b && (a -= 100)), a;
      }

      function i() {
        var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
        return a.toLowerCase() === b.toLowerCase();
      }

      if (!c) return b;
      if (c instanceof Date) return c;
      if ("string" == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(c, e, f);
      var j,
          l,
          m,
          n,
          o,
          p = {
        d: "moveDay",
        m: "moveMonth",
        w: "moveWeek",
        y: "moveYear"
      },
          s = {
        yesterday: "-1d",
        today: "+0d",
        tomorrow: "+1d"
      };

      if (c in s && (c = s[c]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
        for (j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0; n < j.length; n++) {
          l = j[n].match(/([\-+]\d+)([dmwy])/i), m = Number(l[1]), o = p[l[2].toLowerCase()], c = k.prototype[o](c, m);
        }

        return k.prototype._zero_utc_time(c);
      }

      j = c && c.match(this.nonpunctuation) || [];
      var t,
          u,
          v = {},
          w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
          x = {
        yyyy: function yyyy(a, b) {
          return a.setUTCFullYear(g ? h(b, g) : b);
        },
        m: function m(a, b) {
          if (isNaN(a)) return a;

          for (b -= 1; b < 0;) {
            b += 12;
          }

          for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) {
            a.setUTCDate(a.getUTCDate() - 1);
          }

          return a;
        },
        d: function d(a, b) {
          return a.setUTCDate(b);
        }
      };
      x.yy = x.yyyy, x.M = x.MM = x.mm = x.m, x.dd = x.d, c = d();
      var y = e.parts.slice();

      if (j.length !== y.length && (y = a(y).filter(function (b, c) {
        return a.inArray(c, w) !== -1;
      }).toArray()), j.length === y.length) {
        var z;

        for (n = 0, z = y.length; n < z; n++) {
          if (t = parseInt(j[n], 10), l = y[n], isNaN(t)) switch (l) {
            case "MM":
              u = a(q[f].months).filter(i), t = a.inArray(u[0], q[f].months) + 1;
              break;

            case "M":
              u = a(q[f].monthsShort).filter(i), t = a.inArray(u[0], q[f].monthsShort) + 1;
          }
          v[l] = t;
        }

        var A, B;

        for (n = 0; n < w.length; n++) {
          B = w[n], B in v && !isNaN(v[B]) && (A = new Date(c), x[B](A, v[B]), isNaN(A) || (c = A));
        }
      }

      return c;
    },
    formatDate: function formatDate(b, c, d) {
      if (!b) return "";
      if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
      var e = {
        d: b.getUTCDate(),
        D: q[d].daysShort[b.getUTCDay()],
        DD: q[d].days[b.getUTCDay()],
        m: b.getUTCMonth() + 1,
        M: q[d].monthsShort[b.getUTCMonth()],
        MM: q[d].months[b.getUTCMonth()],
        yy: b.getUTCFullYear().toString().substring(2),
        yyyy: b.getUTCFullYear()
      };
      e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];

      for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) {
        f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
      }

      return b.join("");
    },
    headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + "</th></tr></thead>",
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
  };
  r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
    return a.fn.datepicker = m, this;
  }, a.fn.datepicker.version = "1.8.0", a.fn.datepicker.deprecated = function (a) {
    var b = window.console;
    b && b.warn && b.warn("DEPRECATED: " + a);
  }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
    var c = a(this);
    c.data("datepicker") || (b.preventDefault(), n.call(c, "show"));
  }), a(function () {
    n.call(a('[data-provide="datepicker-inline"]'));
  });
});

/***/ }),

/***/ "./resources/js/vendor/bootstrap/dist/js/bootstrap.bundle.min.js":
/*!***********************************************************************!*\
  !*** ./resources/js/vendor/bootstrap/dist/js/bootstrap.bundle.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e, t) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  function l(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {},
          t = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
        return Object.getOwnPropertyDescriptor(o, e).enumerable;
      }))), t.forEach(function (e) {
        var t, n, i;
        t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i;
      });
    }

    return r;
  }

  for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function (i) {
    var t = "transitionend";

    function e(e) {
      var t = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(t);
      }, e), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(e) {
        for (; e += ~~(1e6 * Math.random()), document.getElementById(e);) {
          ;
        }

        return e;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var t = e.getAttribute("data-target");
        t && "#" !== t || (t = e.getAttribute("href") || "");

        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
        if (!e) return 0;
        var t = i(e).css("transition-duration");
        return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0;
      },
      reflow: function reflow(e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(e) {
        i(e).trigger(t);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(t);
      },
      isElement: function isElement(e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(e, t, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                o = t[i],
                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
      bindType: t,
      delegateType: t,
      handle: function handle(e) {
        if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(t = t && t.hasOwnProperty("default") ? t["default"] : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, f = "alert", h = "fade", d = "show", p = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, e.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, e._getRootElement = function (e) {
      var t = we.getSelectorFromElement(e),
          n = !1;
      return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (e) {
      var t = r.Event(u.CLOSE);
      return r(e).trigger(t), t;
    }, e._removeElement = function (t) {
      var n = this;

      if (r(t).removeClass(d), r(t).hasClass(h)) {
        var e = we.getTransitionDurationFromElement(t);
        r(t).one(we.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(e);
      } else this._destroyElement(t);
    }, e._destroyElement = function (e) {
      r(e).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = r(this),
            t = e.data(o);
        t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this);
      });
    }, i._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
    return r.fn[n] = c, p._jQueryInterface;
  }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = {
    CLICK_DATA_API: "click" + v + y,
    FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y
  }, N = function () {
    function n(e) {
      this._element = e;
    }

    var e = n.prototype;
    return e.toggle = function () {
      var e = !0,
          t = !0,
          n = m(this._element).closest(S)[0];

      if (n) {
        var i = this._element.querySelector(D);

        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(b)) e = !1;else {
            var r = n.querySelector(A);
            r && m(r).removeClass(b);
          }

          if (e) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(b), m(i).trigger("change");
          }

          i.focus(), t = !1;
        }
      }

      t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b);
    }, e.dispose = function () {
      m.removeData(this._element, _), this._element = null;
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = m(this).data(_);
        e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]();
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), n;
  }(), m(document).on(O.CLICK_DATA_API, T, function (e) {
    e.preventDefault();
    var t = e.target;
    m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, T, function (e) {
    var t = m(e.target).closest(I)[0];
    m(t).toggleClass(C, /^focus(in)?$/.test(e.type));
  }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function () {
    return m.fn[g] = E, N._jQueryInterface;
  }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, W = "next", R = "prev", U = "left", B = "right", q = {
    SLIDE: "slide" + L,
    SLID: "slid" + L,
    KEYDOWN: "keydown" + L,
    MOUSEENTER: "mouseenter" + L,
    MOUSELEAVE: "mouseleave" + L,
    TOUCHEND: "touchend" + L,
    LOAD_DATA_API: "load" + L + j,
    CLICK_DATA_API: "click" + L + j
  }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function () {
    function o(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners();
    }

    var e = o.prototype;
    return e.next = function () {
      this._isSliding || this._slide(W);
    }, e.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, e.prev = function () {
      this._isSliding || this._slide(R);
    }, e.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, e.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, e.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector(X);

      var n = this._getItemIndex(this._activeElement);

      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) k(this._element).one(q.SLID, function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();
        var i = n < e ? W : R;

        this._slide(i, this._items[e]);
      }
    }, e.dispose = function () {
      k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, e._getConfig = function (e) {
      return e = l({}, M, e), we.typeCheckConfig(x, e, F), e;
    }, e._addEventListeners = function () {
      var t = this;
      this._config.keyboard && k(this._element).on(q.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(q.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), ("ontouchstart" in document.documentElement) && k(this._element).on(q.TOUCHEND, function () {
        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval);
      }));
    }, e._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;

        case 39:
          e.preventDefault(), this.next();
      }
    }, e._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e);
    }, e._getItemByDirection = function (e, t) {
      var n = e === W,
          i = e === R,
          r = this._getItemIndex(t),
          o = this._items.length - 1;

      if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
      var s = (r + (e === R ? -1 : 1)) % this._items.length;
      return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, e._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(X)),
          r = k.Event(q.SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });

      return k(this._element).trigger(r), r;
    }, e._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
        k(t).removeClass(Q);

        var n = this._indicatorsElement.children[this._getItemIndex(e)];

        n && k(n).addClass(Q);
      }
    }, e._slide = function (e, t) {
      var n,
          i,
          r,
          o = this,
          s = this._element.querySelector(X),
          a = this._getItemIndex(s),
          l = t || s && this._getItemByDirection(e, s),
          c = this._getItemIndex(l),
          u = Boolean(this._interval);

      if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
        var f = k.Event(q.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: c
        });

        if (k(this._element).hasClass(Y)) {
          k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
          var h = we.getTransitionDurationFromElement(s);
          k(s).one(we.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(f);
            }, 0);
          }).emulateTransitionEnd(h);
        } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);

        u && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var e = k(this).data(P),
            t = l({}, M, k(this).data());
        "object" == _typeof(i) && (t = l({}, t, i));
        var n = "string" == typeof i ? i : t.slide;
        if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        } else t.interval && (e.pause(), e.cycle());
      });
    }, o._dataApiClickHandler = function (e) {
      var t = we.getSelectorFromElement(this);

      if (t) {
        var n = k(t)[0];

        if (n && k(n).hasClass(K)) {
          var i = l({}, k(n).data(), k(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault();
        }
      }
    }, s(o, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return M;
      }
    }]), o;
  }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
      var i = k(e[t]);

      re._jQueryInterface.call(i, i.data());
    }
  }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function () {
    return k.fn[x] = H, re._jQueryInterface;
  }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = {
    toggle: !0,
    parent: ""
  }, fe = {
    toggle: "boolean",
    parent: "(string|element)"
  }, he = {
    SHOW: "show" + le,
    SHOWN: "shown" + le,
    HIDE: "hide" + le,
    HIDDEN: "hidden" + le,
    CLICK_DATA_API: "click" + le + ".data-api"
  }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
        var o = n[i],
            s = we.getSelectorFromElement(o),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
          return e === t;
        });
        null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var e = a.prototype;
    return e.toggle = function () {
      oe(this._element).hasClass(de) ? this.hide() : this.show();
    }, e.show = function () {
      var e,
          t,
          n = this;

      if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function (e) {
        return e.getAttribute("data-parent") === n._config.parent;
      })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
        var i = oe.Event(he.SHOW);

        if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
          e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null));

          var r = this._getDimension();

          oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
          var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = we.getTransitionDurationFromElement(this._element);
          oe(this._element).one(we.TRANSITION_END, function () {
            oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, e.hide = function () {
      var e = this;

      if (!this._isTransitioning && oe(this._element).hasClass(de)) {
        var t = oe.Event(he.HIDE);

        if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();

          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
          var i = this._triggerArray.length;
          if (0 < i) for (var r = 0; r < i; r++) {
            var o = this._triggerArray[r],
                s = we.getSelectorFromElement(o);
            if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var a = we.getTransitionDurationFromElement(this._element);
          oe(this._element).one(we.TRANSITION_END, function () {
            e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN);
          }).emulateTransitionEnd(a);
        }
      }
    }, e.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, e.dispose = function () {
      oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, e._getConfig = function (e) {
      return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e;
    }, e._getDimension = function () {
      return oe(this._element).hasClass(_e) ? _e : ve;
    }, e._getParent = function () {
      var n = this,
          e = null;
      we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          i = [].slice.call(e.querySelectorAll(t));
      return oe(i).each(function (e, t) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
      }), e;
    }, e._addAriaAndCollapsedClass = function (e, t) {
      if (e) {
        var n = oe(e).hasClass(de);
        t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (e) {
      var t = we.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var e = oe(this),
            t = e.data(ae),
            n = l({}, ue, e.data(), "object" == _typeof(i) && i ? i : {});

        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) {
          if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]();
        }
      });
    }, s(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return ue;
      }
    }]), a;
  }(), oe(document).on(he.CLICK_DATA_API, Ee, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = oe(this),
        t = we.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
    oe(i).each(function () {
      var e = oe(this),
          t = e.data(ae) ? "toggle" : n.data();

      be._jQueryInterface.call(e, t);
    });
  }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function () {
    return oe.fn[se] = ce, be._jQueryInterface;
  }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1) {
    if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
      Oe = 1;
      break;
    }
  }

  var ke = Ae && window.Promise ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, Oe));
    };
  };

  function xe(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function Pe(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n;
  }

  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function je(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;

      case "#document":
        return e.body;
    }

    var t = Pe(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e));
  }

  var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
      Me = Ae && /MSIE 10/.test(navigator.userAgent);

  function Fe(e) {
    return 11 === e ? He : 10 === e ? Me : He || Me;
  }

  function We(e) {
    if (!e) return document.documentElement;

    for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function Re(e) {
    return null !== e.parentNode ? Re(e.parentNode) : e;
  }

  function Ue(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        r = n ? t : e,
        o = document.createRange();
    o.setStart(i, 0), o.setEnd(r, 0);
    var s,
        a,
        l = o.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
    var c = Re(e);
    return c.host ? Ue(c.host, t) : Ue(e, Re(t).host);
  }

  function Be(e) {
    var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;
      return (e.ownerDocument.scrollingElement || i)[t];
    }

    return e[t];
  }

  function qe(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }

  function Ke(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }

  function Qe() {
    var e = document.body,
        t = document.documentElement,
        n = Fe(10) && getComputedStyle(t);
    return {
      height: Ke("Height", e, t, n),
      width: Ke("Width", e, t, n)
    };
  }

  var Ye = function () {
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    return function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    };
  }(),
      Ve = function Ve(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  },
      ze = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }

    return e;
  };

  function Ge(e) {
    return ze({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function Je(e) {
    var t = {};

    try {
      if (Fe(10)) {
        t = e.getBoundingClientRect();
        var n = Be(e, "top"),
            i = Be(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}

    var r = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top
    },
        o = "HTML" === e.nodeName ? Qe() : {},
        s = o.width || e.clientWidth || r.right - r.left,
        a = o.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        c = e.offsetHeight - a;

    if (l || c) {
      var u = Pe(e);
      l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c;
    }

    return Ge(r);
  }

  function Ze(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = Fe(10),
        r = "HTML" === t.nodeName,
        o = Je(e),
        s = Je(t),
        a = je(e),
        l = Pe(t),
        c = parseFloat(l.borderTopWidth, 10),
        u = parseFloat(l.borderLeftWidth, 10);
    n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
    var f = Ge({
      top: o.top - s.top - c,
      left: o.left - s.left - u,
      width: o.width,
      height: o.height
    });

    if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
      var h = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);
      f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d;
    }

    return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = Be(t, "top"),
          r = Be(t, "left"),
          o = n ? -1 : 1;
      return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e;
    }(f, t)), f;
  }

  function Xe(e) {
    if (!e || !e.parentElement || Fe()) return document.documentElement;

    for (var t = e.parentElement; t && "none" === Pe(t, "transform");) {
      t = t.parentElement;
    }

    return t || document.documentElement;
  }

  function $e(e, t, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = {
      top: 0,
      left: 0
    },
        s = r ? Xe(e) : Ue(e, t);
    if ("viewport" === i) o = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = Ze(e, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : Be(n),
          a = t ? 0 : Be(n, "left");
      return Ge({
        top: s - i.top + i.marginTop,
        left: a - i.left + i.marginLeft,
        width: r,
        height: o
      });
    }(s, r);else {
      var a = void 0;
      "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
      var l = Ze(a, s, r);
      if ("HTML" !== a.nodeName || function e(t) {
        var n = t.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t)));
      }(s)) o = l;else {
        var c = Qe(),
            u = c.height,
            f = c.width;
        o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left;
      }
    }
    return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }

  function et(e, t, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = $e(i, n, o, r),
        a = {
      top: {
        width: s.width,
        height: t.top - s.top
      },
      right: {
        width: s.right - t.right,
        height: s.height
      },
      bottom: {
        width: s.width,
        height: s.bottom - t.bottom
      },
      left: {
        width: t.left - s.left,
        height: s.height
      }
    },
        l = Object.keys(a).map(function (e) {
      return ze({
        key: e
      }, a[e], {
        area: (t = a[e], t.width * t.height)
      });
      var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= i.clientWidth && n >= i.clientHeight;
    }),
        u = 0 < c.length ? c[0].key : l[0].key,
        f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }

  function tt(e, t, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return Ze(n, i ? Xe(t) : Ue(t, n), i);
  }

  function nt(e) {
    var t = getComputedStyle(e),
        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
  }

  function it(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function rt(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
        r = {
      width: i.width,
      height: i.height
    },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";
    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r;
  }

  function ot(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function st(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var i = ot(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }(e, "name", t))).forEach(function (e) {
      e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e["function"] || e.fn;
      e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e));
    }), n;
  }

  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }

  function lt(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var r = t[i],
          o = r ? "" + r + n : e;
      if ("undefined" != typeof document.body.style[o]) return o;
    }

    return null;
  }

  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function ut(e, t, n, i) {
    n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var r = je(e);
    return function e(t, n, i, r) {
      var o = "BODY" === t.nodeName,
          s = o ? t.ownerDocument.defaultView : t;
      s.addEventListener(n, i, {
        passive: !0
      }), o || e(je(s.parentNode), n, i, r), r.push(s);
    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }

  function ft() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }

  function ht(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t;
    });
  }

  function pt(e, t, n) {
    var i = ot(e, function (e) {
      return e.name === t;
    }),
        r = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });

    if (!r) {
      var o = "`" + t + "`",
          s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }

    return r;
  }

  var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      gt = mt.slice(3);

  function _t(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = gt.indexOf(e),
        i = gt.slice(n + 1).concat(gt.slice(0, n));
    return t ? i.reverse() : i;
  }

  var vt = "flip",
      yt = "clockwise",
      Et = "counterclockwise";

  function bt(e, r, o, t) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        i = n.indexOf(ot(n, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
    return (c = c.map(function (e, t) {
      var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];
          if (!o) return e;

          if (0 === s.indexOf("%")) {
            var a = void 0;

            switch (s) {
              case "%p":
                a = n;
                break;

              case "%":
              case "%r":
              default:
                a = i;
            }

            return Ge(a)[t] / 100 * o;
          }

          if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
          return o;
        }(e, n, r, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), s;
  }

  var wt = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];

          if (i) {
            var r = e.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = {
              start: Ve({}, l, o[l]),
              end: Ve({}, l, o[l] + o[c] - s[c])
            };
            e.offsets.popper = ze({}, s, u[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              r = e.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;
          return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, i) {
          var t = i.boundariesElement || We(e.instance.popper);
          e.instance.reference === t && (t = We(t));
          var n = lt("transform"),
              r = e.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];
          r.top = "", r.left = "", r[n] = "";
          var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          r.top = o, r.left = s, r[n] = a, i.boundaries = l;
          var c = i.priority,
              u = e.offsets.popper,
              f = {
            primary: function primary(e) {
              var t = u[e];
              return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t);
            },
            secondary: function secondary(e) {
              var t = "right" === e ? "left" : "top",
                  n = u[t];
              return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n);
            }
          };
          return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            u = ze({}, u, f[t](e));
          }), e.offsets.popper = u, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              r = e.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
          return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, t) {
          var n;
          if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;

          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;

          var r = e.placement.split("-")[0],
              o = e.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              u = l ? "Top" : "Left",
              f = u.toLowerCase(),
              h = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
          a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);

          var m = a[f] + a[c] / 2 - p / 2,
              g = Pe(e.instance.popper),
              _ = parseFloat(g["margin" + u], 10),
              v = parseFloat(g["border" + u + "Width"], 10),
              y = m - e.offsets.popper[f] - _ - v;

          return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(p, m) {
          if (at(p.instance.modifiers, "inner")) return p;
          if (p.flipped && p.placement === p.originalPlacement) return p;
          var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = it(_),
              y = p.placement.split("-")[1] || "",
              E = [];

          switch (m.behavior) {
            case vt:
              E = [_, v];
              break;

            case yt:
              E = _t(_);
              break;

            case Et:
              E = _t(_, !0);
              break;

            default:
              E = m.behavior;
          }

          return E.forEach(function (e, t) {
            if (_ !== e || E.length === t + 1) return p;
            _ = p.placement.split("-")[0], v = it(_);
            var n,
                i = p.offsets.popper,
                r = p.offsets.reference,
                o = Math.floor,
                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                a = o(i.left) < o(g.left),
                l = o(i.right) > o(g.right),
                c = o(i.top) < o(g.top),
                u = o(i.bottom) > o(g.bottom),
                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                h = -1 !== ["top", "bottom"].indexOf(_),
                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip"));
          }), p;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
          return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
              n = ot(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;

          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              r = e.offsets.popper,
              o = ot(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
          void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var s = void 0 !== o ? o : t.gpuAcceleration,
              a = Je(We(e.instance.popper)),
              l = {
            position: r.position
          },
              c = {
            left: Math.floor(r.left),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            right: Math.floor(r.right)
          },
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              h = lt("transform"),
              d = void 0,
              p = void 0;
          if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";else {
            var m = "bottom" === u ? -1 : 1,
                g = "right" === f ? -1 : 1;
            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f;
          }
          var _ = {
            "x-placement": e.placement
          };
          return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          var t, n;
          return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, n, i, r) {
          var o = tt(r, t, e, n.positionFixed),
              s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", s), dt(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  },
      Ct = function () {
    function o(e, t) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return ze({
          name: e
        }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
      }), this.update();
      var r = this.options.eventsEnabled;
      r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }

    return Ye(o, [{
      key: "update",
      value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        return function () {
          return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function value() {
        return ft.call(this);
      }
    }]), o;
  }();

  Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;

  var Tt,
      St,
      Dt,
      At,
      It,
      Ot,
      Nt,
      kt,
      xt,
      Pt,
      Lt,
      jt,
      Ht,
      Mt,
      Ft,
      Wt,
      Rt,
      Ut,
      Bt,
      qt,
      Kt,
      Qt,
      Yt,
      Vt,
      zt,
      Gt,
      Jt,
      Zt,
      Xt,
      $t,
      en,
      tn,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      un,
      fn,
      hn,
      dn,
      pn,
      mn,
      gn,
      _n,
      vn,
      yn,
      En,
      bn,
      wn,
      Cn,
      Tn,
      Sn,
      Dn,
      An,
      In,
      On,
      Nn,
      kn,
      xn,
      Pn,
      Ln,
      jn,
      Hn,
      Mn,
      Fn,
      Wn,
      Rn,
      Un,
      Bn,
      qn,
      Kn,
      Qn,
      Yn,
      Vn,
      zn,
      Gn,
      Jn,
      Zn,
      Xn,
      $n,
      ei,
      ti,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      ui,
      fi,
      hi,
      di,
      pi,
      mi,
      gi,
      _i,
      vi,
      yi,
      Ei,
      bi,
      wi,
      Ci,
      Ti,
      Si,
      Di,
      Ai,
      Ii,
      Oi,
      Ni,
      ki,
      xi,
      Pi,
      Li,
      ji,
      Hi,
      Mi,
      Fi,
      Wi,
      Ri,
      Ui,
      Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = {
    HIDE: "hide" + At,
    HIDDEN: "hidden" + At,
    SHOW: "show" + At,
    SHOWN: "shown" + At,
    CLICK: "click" + At,
    CLICK_DATA_API: "click" + At + It,
    KEYDOWN_DATA_API: "keydown" + At + It,
    KEYUP_DATA_API: "keyup" + At + It
  }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Zt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Xt = function () {
    function c(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var e = c.prototype;
    return e.toggle = function () {
      if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
        var e = c._getParentFromElement(this._element),
            t = Tt(this._menu).hasClass(Pt);

        if (c._clearMenus(), !t) {
          var n = {
            relatedTarget: this._element
          },
              i = Tt.Event(kt.SHOW, n);

          if (Tt(e).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n));
          }
        }
      }
    }, e.dispose = function () {
      Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, e.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, e._addEventListeners = function () {
      var t = this;
      Tt(this._element).on(kt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, e._getConfig = function (e) {
      return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e;
    }, e._getMenuElement = function () {
      if (!this._menu) {
        var e = c._getParentFromElement(this._element);

        e && (this._menu = e.querySelector(Ut));
      }

      return this._menu;
    }, e._getPlacement = function () {
      var e = Tt(this._element.parentNode),
          t = Yt;
      return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t;
    }, e._detectNavbar = function () {
      return 0 < Tt(this._element).closest(".navbar").length;
    }, e._getPopperConfig = function () {
      var t = this,
          e = {};
      "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e;
      } : e.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: e,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, c._jQueryInterface = function (t) {
      return this.each(function () {
        var e = Tt(this).data(Dt);

        if (e || (e = new c(this, "object" == _typeof(t) ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, c._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
        var r = c._getParentFromElement(t[n]),
            o = Tt(t[n]).data(Dt),
            s = {
          relatedTarget: t[n]
        };

        if (e && "click" === e.type && (s.clickEvent = e), o) {
          var a = o._menu;

          if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
            var l = Tt.Event(kt.HIDE, s);
            Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)));
          }
        }
      }
    }, c._getParentFromElement = function (e) {
      var t,
          n = we.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, c._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
        var t = c._getParentFromElement(this),
            n = Tt(t).hasClass(Pt);

        if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
          var i = [].slice.call(t.querySelectorAll(qt));

          if (0 !== i.length) {
            var r = i.indexOf(e.target);
            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === e.which) {
            var o = t.querySelector(Wt);
            Tt(o).trigger("focus");
          }

          Tt(this).trigger("click");
        }
      }
    }, s(c, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return Jt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Zt;
      }
    }]), c;
  }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function (e) {
    e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle");
  }).on(kt.CLICK_DATA_API, Rt, function (e) {
    e.stopPropagation();
  }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function () {
    return Tt.fn[St] = Ot, Xt._jQueryInterface;
  }, Xt),
      qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, sn = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, an = {
    HIDE: "hide" + nn,
    HIDDEN: "hidden" + nn,
    SHOW: "show" + nn,
    SHOWN: "shown" + nn,
    FOCUSIN: "focusin" + nn,
    RESIZE: "resize" + nn,
    CLICK_DISMISS: "click.dismiss" + nn,
    KEYDOWN_DISMISS: "keydown.dismiss" + nn,
    MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
    CLICK_DATA_API: "click" + nn + ".data-api"
  }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function () {
    function r(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var e = r.prototype;
    return e.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, e.show = function (e) {
      var t = this;

      if (!this._isTransitioning && !this._isShown) {
        $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
        var n = $t.Event(an.SHOW, {
          relatedTarget: e
        });
        $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function (e) {
          return t.hide(e);
        }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function () {
          $t(t._element).one(an.MOUSEUP_DISMISS, function (e) {
            $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, e.hide = function (e) {
      var t = this;

      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = $t.Event(an.HIDE);

        if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = $t(this._element).hasClass(fn);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
            var r = we.getTransitionDurationFromElement(this._element);
            $t(this._element).one(we.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, e.dispose = function () {
      $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, e.handleUpdate = function () {
      this._adjustDialog();
    }, e._getConfig = function (e) {
      return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e;
    }, e._showElement = function (e) {
      var t = this,
          n = $t(this._element).hasClass(fn);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();

      var i = $t.Event(an.SHOWN, {
        relatedTarget: e
      }),
          r = function r() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i);
      };

      if (n) {
        var o = we.getTransitionDurationFromElement(this._element);
        $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, e._enforceFocus = function () {
      var t = this;
      $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus();
      });
    }, e._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS);
    }, e._setResizeEvent = function () {
      var t = this;
      this._isShown ? $t(window).on(an.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : $t(window).off(an.RESIZE);
    }, e._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN);
      });
    }, e._removeBackdrop = function () {
      this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null);
    }, e._showBackdrop = function (e) {
      var t = this,
          n = $t(this._element).hasClass(fn) ? fn : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide());
        }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return;
        if (!n) return void e();
        var i = we.getTransitionDurationFromElement(this._backdrop);
        $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        $t(this._backdrop).removeClass(hn);

        var r = function r() {
          t._removeBackdrop(), e && e();
        };

        if ($t(this._element).hasClass(fn)) {
          var o = we.getTransitionDurationFromElement(this._backdrop);
          $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else e && e();
    }, e._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, e._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, e._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, e._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(gn)),
            t = [].slice.call(document.querySelectorAll(_n));
        $t(e).each(function (e, t) {
          var n = t.style.paddingRight,
              i = $t(t).css("padding-right");
          $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), $t(t).each(function (e, t) {
          var n = t.style.marginRight,
              i = $t(t).css("margin-right");
          $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
            i = $t(document.body).css("padding-right");
        $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }
    }, e._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(gn));
      $t(e).each(function (e, t) {
        var n = $t(t).data("padding-right");
        $t(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll("" + _n));
      $t(t).each(function (e, t) {
        var n = $t(t).data("margin-right");
        "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right");
      });
      var n = $t(document.body).data("padding-right");
      $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, e._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = ln, document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var e = $t(this).data(tn),
            t = l({}, on, $t(this).data(), "object" == _typeof(n) && n ? n : {});

        if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](i);
        } else t.show && e.show(i);
      });
    }, s(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return on;
      }
    }]), r;
  }(), $t(document).on(an.CLICK_DATA_API, pn, function (e) {
    var t,
        n = this,
        i = we.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
    var o = $t(t).one(an.SHOW, function (e) {
      e.isDefaultPrevented() || o.one(an.HIDDEN, function () {
        $t(n).is(":visible") && n.focus();
      });
    });

    vn._jQueryInterface.call($t(t), r, this);
  }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function () {
    return $t.fn[en] = rn, vn._jQueryInterface;
  }, vn),
      Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(An = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(Dn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, Nn = "out", kn = {
    HIDE: "hide" + wn,
    HIDDEN: "hidden" + wn,
    SHOW: (On = "show") + wn,
    SHOWN: "shown" + wn,
    INSERTED: "inserted" + wn,
    CLICK: "click" + wn,
    FOCUSIN: "focusin" + wn,
    FOCUSOUT: "focusout" + wn,
    MOUSEENTER: "mouseenter" + wn,
    MOUSELEAVE: "mouseleave" + wn
  }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function () {
    function i(e, t) {
      if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }

    var e = i.prototype;
    return e.enable = function () {
      this._isEnabled = !0;
    }, e.disable = function () {
      this._isEnabled = !1;
    }, e.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, e.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = yn(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, e.dispose = function () {
      clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, e.show = function () {
      var t = this;
      if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = yn.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        yn(this.element).trigger(e);
        var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = we.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn);

        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);

        this.addAttachmentClass(s);
        var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
        yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, {
          placement: s,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: jn
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function onUpdate(e) {
            t._handlePopperPlacementChange(e);
          }
        }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);

        var l = function l() {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t);
        };

        if (yn(this.tip).hasClass(xn)) {
          var c = we.getTransitionDurationFromElement(this.tip);
          yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, e.hide = function (e) {
      var t = this,
          n = this.getTipElement(),
          i = yn.Event(this.constructor.Event.HIDE),
          r = function r() {
        t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
      };

      if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
          var o = we.getTransitionDurationFromElement(n);
          yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();

        this._hoverState = "";
      }
    }, e.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, e.isWithContent = function () {
      return Boolean(this.getTitle());
    }, e.addAttachmentClass = function (e) {
      yn(this.getTipElement()).addClass(Tn + "-" + e);
    }, e.getTipElement = function () {
      return this.tip = this.tip || yn(this.config.template)[0], this.tip;
    }, e.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn);
    }, e.setElementContent = function (e, t) {
      var n = this.config.html;
      "object" == _typeof(t) && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t);
    }, e.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, e._getAttachment = function (e) {
      return An[e.toUpperCase()];
    }, e._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
          return i.toggle(e);
        });else if (e !== Wn) {
          var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          yn(i.element).on(t, i.config.selector, function (e) {
            return i._enter(e);
          }).on(n, i.config.selector, function (e) {
            return i._leave(e);
          });
        }
        yn(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = l({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, e._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, e._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === On && t.show();
      }, t.config.delay.show) : t.show());
    }, e._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        t._hoverState === Nn && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, e._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }, e._getConfig = function (e) {
      return "number" == typeof (e = l({}, this.constructor.Default, yn(this.element).data(), "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e;
    }, e._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }
      return e;
    }, e._cleanTipClass = function () {
      var e = yn(this.getTipElement()),
          t = e.attr("class").match(Sn);
      null !== t && t.length && e.removeClass(t.join(""));
    }, e._handlePopperPlacementChange = function (e) {
      var t = e.instance;
      this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, e._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;
      null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = yn(this).data(bn),
            t = "object" == _typeof(n) && n;

        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return In;
      }
    }, {
      key: "NAME",
      get: function get() {
        return En;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return bn;
      }
    }, {
      key: "Event",
      get: function get() {
        return kn;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return wn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Dn;
      }
    }]), i;
  }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function () {
    return yn.fn[En] = Cn, Rn._jQueryInterface;
  }, Rn),
      Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), Gn = l({}, Ki.DefaultType, {
    content: "(string|element|function)"
  }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = {
    HIDE: "hide" + Kn,
    HIDDEN: "hidden" + Kn,
    SHOW: (Zn = "show") + Kn,
    SHOWN: "shown" + Kn,
    INSERTED: "inserted" + Kn,
    CLICK: "click" + Kn,
    FOCUSIN: "focusin" + Kn,
    FOCUSOUT: "focusout" + Kn,
    MOUSEENTER: "mouseenter" + Kn,
    MOUSELEAVE: "mouseleave" + Kn
  }, ti = function (e) {
    var t, n;

    function i() {
      return e.apply(this, arguments) || this;
    }

    n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (e) {
      Un(this.getTipElement()).addClass(Yn + "-" + e);
    }, r.getTipElement = function () {
      return this.tip = this.tip || Un(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var e = Un(this.getTipElement());
      this.setElementContent(e.find(Xn), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var e = Un(this.getTipElement()),
          t = e.attr("class").match(Vn);
      null !== t && 0 < t.length && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = Un(this).data(qn),
            t = "object" == _typeof(n) ? n : null;

        if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return zn;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Bn;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return qn;
      }
    }, {
      key: "Event",
      get: function get() {
        return ei;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return Kn;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Gn;
      }
    }]), i;
  }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function () {
    return Un.fn[Bn] = Qn, ti._jQueryInterface;
  }, ti),
      Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = {
    offset: 10,
    method: "auto",
    target: ""
  }, li = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, ci = {
    ACTIVATE: "activate" + oi,
    SCROLL: "scroll" + oi,
    LOAD_DATA_API: "load" + oi + ".data-api"
  }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function () {
    function n(e, t) {
      var n = this;
      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }

    var e = n.prototype;
    return e.refresh = function () {
      var t = this,
          e = this._scrollElement === this._scrollElement.window ? bi : wi,
          r = "auto" === this._config.method ? e : this._config.method,
          o = r === wi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            n = we.getSelectorFromElement(e);

        if (n && (t = document.querySelector(n)), t) {
          var i = t.getBoundingClientRect();
          if (i.width || i.height) return [ni(t)[r]().top + o, n];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, e.dispose = function () {
      ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, e._getConfig = function (e) {
      if ("string" != typeof (e = l({}, ai, "object" == _typeof(e) && e ? e : {})).target) {
        var t = ni(e.target).attr("id");
        t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t;
      }

      return we.typeCheckConfig(ii, e, li), e;
    }, e._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, e._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, e._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, e._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), n <= e) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, e._activate = function (t) {
      this._activeTarget = t, this._clear();

      var e = this._selector.split(",");

      e = e.map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
      n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, {
        relatedTarget: t
      });
    }, e._clear = function () {
      var e = [].slice.call(document.querySelectorAll(this._selector));
      ni(e).filter(di).removeClass(fi);
    }, n._jQueryInterface = function (t) {
      return this.each(function () {
        var e = ni(this).data(ri);

        if (e || (e = new n(this, "object" == _typeof(t) && t), ni(this).data(ri, e)), "string" == typeof t) {
          if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, s(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function get() {
        return ai;
      }
    }]), n;
  }(), ni(window).on(ci.LOAD_DATA_API, function () {
    for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
      var n = ni(e[t]);

      Ci._jQueryInterface.call(n, n.data());
    }
  }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function () {
    return ni.fn[ii] = si, Ci._jQueryInterface;
  }, Ci),
      Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = {
    HIDE: "hide" + Di,
    HIDDEN: "hidden" + Di,
    SHOW: "show" + Di,
    SHOWN: "shown" + Di,
    CLICK_DATA_API: "click" + Di + ".data-api"
  }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function () {
    function i(e) {
      this._element = e;
    }

    var e = i.prototype;
    return e.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
        var e,
            i,
            t = Ti(this._element).closest(ji)[0],
            r = we.getSelectorFromElement(this._element);

        if (t) {
          var o = "UL" === t.nodeName ? Mi : Hi;
          i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1];
        }

        var s = Ti.Event(Ii.HIDE, {
          relatedTarget: this._element
        }),
            a = Ti.Event(Ii.SHOW, {
          relatedTarget: i
        });

        if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (e = document.querySelector(r)), this._activate(this._element, t);

          var l = function l() {
            var e = Ti.Event(Ii.HIDDEN, {
              relatedTarget: n._element
            }),
                t = Ti.Event(Ii.SHOWN, {
              relatedTarget: i
            });
            Ti(i).trigger(e), Ti(n._element).trigger(t);
          };

          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, e.dispose = function () {
      Ti.removeData(this._element, Si), this._element = null;
    }, e._activate = function (e, t, n) {
      var i = this,
          r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
          o = n && r && Ti(r).hasClass(xi),
          s = function s() {
        return i._transitionComplete(e, r, n);
      };

      if (r && o) {
        var a = we.getTransitionDurationFromElement(r);
        Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, e._transitionComplete = function (e, t, n) {
      if (t) {
        Ti(t).removeClass(Pi + " " + Ni);
        var i = Ti(t.parentNode).find(Ri)[0];
        i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
        var r = Ti(e).closest(Li)[0];

        if (r) {
          var o = [].slice.call(r.querySelectorAll(Wi));
          Ti(o).addClass(Ni);
        }

        e.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var e = Ti(this),
            t = e.data(Si);

        if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, s(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.3";
      }
    }]), i;
  }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function (e) {
    e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show");
  }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function () {
    return Ti.fn.tab = Ai, Ui._jQueryInterface;
  }, Ui);

  !function (e) {
    if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/vendor/chart.js/dist/Chart.extension.js":
/*!**************************************************************!*\
  !*** ./resources/js/vendor/chart.js/dist/Chart.extension.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
// Chart extension for making the bars rounded
// Code from: https://codepen.io/jedtrow/full/ygRYgo
//
Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth; // Set Radius Here
  // If radius is large enough to cause drawing errors a max radius is imposed

  var cornerRadius = 6;

  if (!vm.horizontal) {
    // bar
    left = vm.x - vm.width / 2;
    right = vm.x + vm.width / 2;
    top = vm.y;
    bottom = vm.base;
    signX = 1;
    signY = bottom > top ? 1 : -1;
    borderSkipped = vm.borderSkipped || 'bottom';
  } else {
    // horizontal bar
    left = vm.base;
    right = vm.x;
    top = vm.y - vm.height / 2;
    bottom = vm.y + vm.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = vm.borderSkipped || 'left';
  } // Canvas doesn't allow us to stroke inside the width so we can
  // adjust the sizes to fit if we're setting a stroke on the line


  if (borderWidth) {
    // borderWidth shold be less than bar width and bar height.
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2; // Adjust borderWidth when bar top position is near vm.base(zero).

    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0); // not become a vertical line?

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    } // not become a horizontal line?


    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth; // Corner points, from bottom-left to bottom-right clockwise
  // | 1 2 |
  // | 0 3 |

  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]]; // Find first (starting) corner with fallback to 'bottom'

  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  } // Draw rectangle from 'startCorner'


  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;

    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    nextCorner = cornerAt(nextCornerId);
    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];
    var radius = cornerRadius; // Fix radius being too large

    if (radius > height / 2) {
      radius = height / 2;
    }

    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};

/***/ }),

/***/ "./resources/js/vendor/chart.js/dist/Chart.min.js":
/*!********************************************************!*\
  !*** ./resources/js/vendor/chart.js/dist/Chart.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.2
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function t(e, i, n) {
    function a(r, s) {
      if (!i[r]) {
        if (!e[r]) {
          var l = "function" == typeof require && require;
          if (!s && l) return require(r, !0);
          if (o) return o(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = i[r] = {
          exports: {}
        };
        e[r][0].call(d.exports, function (t) {
          var i = e[r][1][t];
          return a(i || t);
        }, d, d.exports, t, e, i, n);
      }

      return i[r].exports;
    }

    for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) {
      a(n[r]);
    }

    return a;
  }({
    1: [function (t, e, i) {}, {}],
    2: [function (t, e, i) {
      var n = t(6);

      function a(t) {
        if (t) {
          var e = [0, 0, 0],
              i = 1,
              a = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (a) {
            a = a[1];

            for (var o = 0; o < e.length; o++) {
              e[o] = parseInt(a[o] + a[o], 16);
            }
          } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            a = a[1];

            for (o = 0; o < e.length; o++) {
              e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16);
            }
          } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) {
              e[o] = parseInt(a[o + 1]);
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (o = 0; o < e.length; o++) {
              e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
            }

            i = parseFloat(a[4]);
          } else if (a = t.match(/(\w+)/)) {
            if ("transparent" == a[1]) return [0, 0, 0, 0];
            if (!(e = n[a[1]])) return;
          }

          for (o = 0; o < e.length; o++) {
            e[o] = d(e[o], 0, 255);
          }

          return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e;
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function r(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var i = parseFloat(e[4]);
            return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function u(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function d(t, e, i) {
        return Math.min(Math.max(e, t), i);
      }

      function c(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      e.exports = {
        getRgba: a,
        getHsla: o,
        getRgb: function getRgb(t) {
          var e = a(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = o(t);
          return e && e.slice(0, 3);
        },
        getHwb: r,
        getAlpha: function getAlpha(t) {
          var e = a(t);
          {
            if (e) return e[3];
            if (e = o(t)) return e[3];
            if (e = r(t)) return e[3];
          }
        },
        hexString: function hexString(t) {
          return "#" + c(t[0]) + c(t[1]) + c(t[2]);
        },
        rgbString: function rgbString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return s(t, e);
          return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: s,
        percentString: function percentString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return l(t, e);
          var i = Math.round(t[0] / 255 * 100),
              n = Math.round(t[1] / 255 * 100),
              a = Math.round(t[2] / 255 * 100);
          return "rgb(" + i + "%, " + n + "%, " + a + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          if (e < 1 || t[3] && t[3] < 1) return u(t, e);
          return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: u,
        hwbString: function hwbString(t, e) {
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
          return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return h[t.slice(0, 3)];
        }
      };
      var h = {};

      for (var f in n) {
        h[n[f]] = f;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, i) {
      var n = t(5),
          a = t(2),
          o = function o(t) {
        return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
        var e;
      };

      o.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
            var n = t[i] / 255;
            e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              i = t.luminosity();
          return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              i = (e[0] + t) % 360;
          return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var i = this,
              n = t,
              a = void 0 === e ? .5 : e,
              o = 2 * a - 1,
              r = i.alpha() - n.alpha(),
              s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              l = 1 - s;
          return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              i = new o(),
              n = this.values,
              a = i.values;

          for (var r in n) {
            n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
          }

          return i;
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function (t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) {
          i[t.charAt(n)] = e[t][n];
        }

        return 1 !== e.alpha && (i.a = e.alpha), i;
      }, o.prototype.setValues = function (t, e) {
        var i,
            a,
            o = this.values,
            r = this.spaces,
            s = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (i = 0; i < t.length; i++) {
            o[t][i] = e[t.charAt(i)];
          }

          l = e.a;
        } else if (void 0 !== e[r[t][0]]) {
          var u = r[t];

          for (i = 0; i < t.length; i++) {
            o[t][i] = e[u[i]];
          }

          l = e.alpha;
        }
        if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;

        for (i = 0; i < t.length; i++) {
          a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a);
        }

        for (var d in r) {
          d !== t && (o[d] = n[t][d](o[t]));
        }

        return !0;
      }, o.prototype.setSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
      }, o.prototype.setChannel = function (t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, i) {
      function n(t) {
        var e,
            i,
            n = t[0] / 255,
            a = t[1] / 255,
            o = t[2] / 255,
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i];
      }

      function a(t) {
        var e,
            i,
            n = t[0],
            a = t[1],
            o = t[2],
            r = Math.min(n, a, o),
            s = Math.max(n, a, o),
            l = s - r;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10];
      }

      function o(t) {
        var e = t[0],
            i = t[1],
            a = t[2];
        return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))];
      }

      function s(t) {
        var e,
            i = t[0] / 255,
            n = t[1] / 255,
            a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
      }

      function l(t) {
        return C[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            i = t[1] / 255,
            n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)];
      }

      function d(t) {
        var e = u(t),
            i = e[0],
            n = e[1],
            a = e[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))];
      }

      function c(t) {
        var e,
            i,
            n,
            a,
            o,
            r = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
        if (0 == s) return [o = 255 * l, o, o];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
        }

        return a;
      }

      function h(t) {
        var e = t[0] / 60,
            i = t[1] / 100,
            n = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * n * (1 - i),
            s = 255 * n * (1 - i * o),
            l = 255 * n * (1 - i * (1 - o));
        n *= 255;

        switch (a) {
          case 0:
            return [n, l, r];

          case 1:
            return [s, n, r];

          case 2:
            return [r, n, l];

          case 3:
            return [r, s, n];

          case 4:
            return [l, r, n];

          case 5:
            return [n, r, s];
        }
      }

      function f(t) {
        var e,
            i,
            n,
            a,
            o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;

        switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
          default:
          case 6:
          case 0:
            r = i, g = a, b = s;
            break;

          case 1:
            r = a, g = i, b = s;
            break;

          case 2:
            r = s, g = i, b = a;
            break;

          case 3:
            r = s, g = a, b = i;
            break;

          case 4:
            r = a, g = s, b = i;
            break;

          case 5:
            r = i, g = s, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function p(t) {
        var e = t[0] / 100,
            i = t[1] / 100,
            n = t[2] / 100,
            a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
      }

      function m(t) {
        var e,
            i,
            n,
            a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))];
      }

      function v(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))];
      }

      function x(t) {
        var e,
            i,
            n,
            a,
            o = t[0],
            r = t[1],
            s = t[2];
        return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)];
      }

      function y(t) {
        var e,
            i = t[0],
            n = t[1],
            a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
      }

      function k(t) {
        return m(x(t));
      }

      function M(t) {
        var e,
            i = t[0],
            n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)];
      }

      function w(t) {
        return S[t];
      }

      e.exports = {
        rgb2hsl: n,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: l,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: function rgb2lch(t) {
          return y(d(t));
        },
        hsl2rgb: c,
        hsl2hsv: function hsl2hsv(t) {
          var e = t[0],
              i = t[1] / 100,
              n = t[2] / 100;
          if (0 === n) return [0, 0, 0];
          return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)];
        },
        hsl2hwb: function hsl2hwb(t) {
          return o(c(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return s(c(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return l(c(t));
        },
        hsv2rgb: h,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              i,
              n = t[0],
              a = t[1] / 100,
              o = t[2] / 100;
          return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
        },
        hsv2hwb: function hsv2hwb(t) {
          return o(h(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return s(h(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return l(h(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return n(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return s(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return l(f(t));
        },
        cmyk2rgb: p,
        cmyk2hsl: function cmyk2hsl(t) {
          return n(p(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return a(p(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return o(p(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return l(p(t));
        },
        keyword2rgb: w,
        keyword2hsl: function keyword2hsl(t) {
          return n(w(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return a(w(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return o(w(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return s(w(t));
        },
        keyword2lab: function keyword2lab(t) {
          return d(w(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(w(t));
        },
        xyz2rgb: m,
        xyz2lab: v,
        xyz2lch: function xyz2lch(t) {
          return y(v(t));
        },
        lab2xyz: x,
        lab2rgb: k,
        lab2lch: y,
        lch2lab: M,
        lch2xyz: function lch2xyz(t) {
          return x(M(t));
        },
        lch2rgb: function lch2rgb(t) {
          return k(M(t));
        }
      };
      var S = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          C = {};

      for (var _ in S) {
        C[JSON.stringify(S[_])] = _;
      }
    }, {}],
    5: [function (t, e, i) {
      var n = t(4),
          a = function a() {
        return new u();
      };

      for (var o in n) {
        a[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e);
          };
        }(o);

        var r = /(\w+)2(\w+)/.exec(o),
            s = r[1],
            l = r[2];

        (a[s] = a[s] || {})[l] = a[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var i = n[t](e);
            if ("string" == typeof i || void 0 === i) return i;

            for (var a = 0; a < i.length; a++) {
              i[a] = Math.round(i[a]);
            }

            return i;
          };
        }(o);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var i = this.space,
              n = this.convs[i];
          e = a[i][t](n), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      4: 4
    }],
    6: [function (t, e, i) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, i) {
      var n = t(29)();
      n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
      var a = t(49);

      for (var o in a) {
        a.hasOwnProperty(o) && n.plugins.register(a[o]);
      }

      n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      8: 8,
      9: 9
    }],
    8: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, i) {
          return i.type = "bar", new t(e, i);
        };
      };
    }, {}],
    9: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, i) {
          return i.type = "bubble", new t(e, i);
        };
      };
    }, {}],
    10: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, i) {
          return i.type = "doughnut", new t(e, i);
        };
      };
    }, {}],
    11: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, i) {
          return i.type = "line", new t(e, i);
        };
      };
    }, {}],
    12: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, i) {
          return i.type = "polarArea", new t(e, i);
        };
      };
    }, {}],
    13: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, i) {
          return i.type = "radar", new t(e, i);
        };
      };
    }, {}],
    14: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, i) {
          return i.type = "scatter", new t(e, i);
        };
      };
    }, {}],
    15: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), n._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var i = "";
              return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: a.Rectangle,
          initialize: function initialize() {
            var e;
            t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                i,
                n = this.getMeta().data;

            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) {
              this.updateElement(n[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                r = n.getMeta(),
                s = n.getDataset(),
                l = t.custom || {},
                u = a.options.elements.rectangle;
            t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
              datasetLabel: s.label,
              label: a.data.labels[e],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
            }, n.updateElementGeometry(t, e, i), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, i) {
            var n = this,
                a = t._model,
                o = n.getValueScale(),
                r = o.getBasePixel(),
                s = o.isHorizontal(),
                l = n._ruler || n.getRuler(),
                u = n.calculateBarValuePixels(n.index, e),
                d = n.calculateBarIndexPixels(n.index, e, l);
            a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          _getStacks: function _getStacks(t) {
            var e,
                i,
                n = this.chart,
                a = this.getIndexScale().options.stacked,
                o = void 0 === t ? n.data.datasets.length : t + 1,
                r = [];

            for (e = 0; e < o; ++e) {
              (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
            }

            return r;
          },
          getStackCount: function getStackCount() {
            return this._getStacks().length;
          },
          getStackIndex: function getStackIndex(t, e) {
            var i = this._getStacks(t),
                n = void 0 !== e ? i.indexOf(e) : -1;

            return -1 === n ? i.length - 1 : n;
          },
          getRuler: function getRuler() {
            var t,
                e,
                i = this.getIndexScale(),
                n = this.getStackCount(),
                a = this.index,
                r = i.isHorizontal(),
                s = r ? i.left : i.top,
                l = s + (r ? i.width : i.height),
                u = [];

            for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
              u.push(i.getPixelForValue(null, t, a));
            }

            return {
              min: o.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                var i,
                    n,
                    a,
                    o,
                    r = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();

                for (a = 1, o = e.length; a < o; ++a) {
                  r = Math.min(r, e[a] - e[a - 1]);
                }

                for (a = 0, o = s.length; a < o; ++a) {
                  n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
                }

                return r;
              }(i, u) : -1,
              pixels: u,
              start: s,
              end: l,
              stackCount: n,
              scale: i
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var i,
                n,
                a,
                o,
                r,
                s,
                l = this.chart,
                u = this.getMeta(),
                d = this.getValueScale(),
                c = l.data.datasets,
                h = d.getRightValue(c[t].data[e]),
                f = d.options.stacked,
                g = u.stack,
                p = 0;
            if (f || void 0 === f && void 0 !== g) for (i = 0; i < t; ++i) {
              (n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a));
            }
            return o = d.getPixelForValue(p), {
              size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
              base: o,
              head: r,
              center: r + s / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, i) {
            var n,
                a,
                r,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g,
                p,
                m,
                v,
                b,
                x,
                y,
                k = i.scale.options,
                M = "flex" === k.barThickness ? (h = e, g = k, m = (f = i).pixels, v = m[h], b = h > 0 ? m[h - 1] : null, x = h < m.length - 1 ? m[h + 1] : null, y = g.categoryPercentage, null === b && (b = v - (null === x ? f.end - v : x - v)), null === x && (x = v + v - b), p = v - (v - b) / 2 * y, {
              chunk: (x - b) / 2 * y / f.stackCount,
              ratio: g.barPercentage,
              start: p
            }) : (n = e, a = i, u = (r = k).barThickness, d = a.stackCount, c = a.pixels[n], o.isNullOrUndef(u) ? (s = a.min * r.categoryPercentage, l = r.barPercentage) : (s = u * d, l = 1), {
              chunk: s / d,
              ratio: l,
              start: c - s / 2
            }),
                w = this.getStackIndex(t, this.getMeta().stack),
                S = M.start + M.chunk * w + M.chunk / 2,
                C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio);
            return {
              base: S - C / 2,
              head: S + C / 2,
              center: S,
              size: C
            };
          },
          draw: function draw() {
            var t = this.chart,
                e = this.getValueScale(),
                i = this.getMeta().data,
                n = this.getDataset(),
                a = i.length,
                r = 0;

            for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
              isNaN(e.getRightValue(n.data[r])) || i[r].draw();
            }

            o.canvas.unclipArea(t.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model,
                r = this.chart.options.elements.rectangle;
            a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "",
                  n = e.datasets[t.datasetIndex].data[t.index];
              return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: a.Point,
          update: function update(t) {
            var e = this,
                i = e.getMeta().data;
            o.each(i, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.getMeta(),
                o = t.custom || {},
                r = n.getScaleForId(a.xAxisID),
                s = n.getScaleForId(a.yAxisID),
                l = n._resolveElementOptions(t, e),
                u = n.getDataset().data[e],
                d = n.index,
                c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
                h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);

            t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: i ? 0 : l.radius,
              skip: o.skip || isNaN(c) || isNaN(h),
              x: c,
              y: h
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius;
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                i = t._options;
            e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var i,
                n,
                a,
                r = this.chart,
                s = r.data.datasets[this.index],
                l = t.custom || {},
                u = r.options.elements.point,
                d = o.options.resolve,
                c = s.data[e],
                h = {},
                f = {
              chart: r,
              dataIndex: e,
              dataset: s,
              datasetIndex: this.index
            },
                g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];

            for (i = 0, n = g.length; i < n; ++i) {
              h[a = g[i]] = d([l[a], s[a], u[a]], f, e);
            }

            return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    s = a.data[n],
                    l = s && s.custom || {},
                    u = o.valueAtIndexOrDefault,
                    d = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
                  hidden: isNaN(r.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                o = e.index,
                r = this.chart;

            for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
              (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
            }

            r.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var i = e.labels[t.index],
                  n = ": " + e.datasets[t.datasetIndex].data[t.index];
              return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
            }
          }
        }
      }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, i = 0; i < t; ++i) {
              this.chart.isDatasetVisible(i) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = i.options,
                r = a.elements.arc,
                s = n.right - n.left - r.borderWidth,
                l = n.bottom - n.top - r.borderWidth,
                u = Math.min(s, l),
                d = {
              x: 0,
              y: 0
            },
                c = e.getMeta(),
                h = a.cutoutPercentage,
                f = a.circumference;

            if (f < 2 * Math.PI) {
              var g = a.rotation % (2 * Math.PI),
                  p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                  m = Math.cos(g),
                  v = Math.sin(g),
                  b = Math.cos(p),
                  x = Math.sin(p),
                  y = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  k = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  M = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  w = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  S = h / 100,
                  C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)),
                  _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
                  D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)),
                  I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)),
                  P = .5 * (D - C),
                  A = .5 * (I - _);

              u = Math.min(s / P, l / A), d = {
                x: -.5 * (D + C),
                y: -.5 * (I + _)
              };
            }

            i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = n.chart,
                r = a.chartArea,
                s = a.options,
                l = s.animation,
                u = (r.left + r.right) / 2,
                d = (r.top + r.bottom) / 2,
                c = s.rotation,
                h = s.rotation,
                f = n.getDataset(),
                g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                p = i && l.animateScale ? 0 : n.innerRadius,
                m = i && l.animateScale ? 0 : n.outerRadius,
                v = o.valueAtIndexOrDefault;
            o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _model: {
                x: u + a.offsetX,
                y: d + a.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: m,
                innerRadius: p,
                label: v(f.label, e, a.data.labels[e])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                i = this.getMeta(),
                n = 0;
            return o.each(i.data, function (i, a) {
              t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t));
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
            }

            return n;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return o.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          update: function update(t) {
            var i,
                n,
                a,
                r = this,
                s = r.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = r.chart.options,
                c = d.elements.line,
                h = r.getScaleForId(s.yAxisID),
                f = r.getDataset(),
                g = e(f, d);

            for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
              backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
            }, l.pivot()), i = 0, n = u.length; i < n; ++i) {
              r.updateElement(u[i], i, t);
            }

            for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) {
              u[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                n = this.getDataset(),
                a = t.custom || {};
            return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                n = this.getDataset(),
                a = t.custom || {};
            return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i;
          },
          updateElement: function updateElement(t, e, i) {
            var n,
                a,
                r = this,
                s = r.getMeta(),
                l = t.custom || {},
                u = r.getDataset(),
                d = r.index,
                c = u.data[e],
                h = r.getScaleForId(s.yAxisID),
                f = r.getScaleForId(s.xAxisID),
                g = r.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
              x: n,
              y: a,
              skip: l.skip || isNaN(n) || isNaN(a),
              radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
              pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: s.dataset._model ? s.dataset._model.tension : 0,
              steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
              hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, i) {
            var n,
                a,
                o,
                r = this.chart,
                s = this.getMeta(),
                l = this.getScaleForId(s.yAxisID),
                u = 0,
                d = 0;

            if (l.options.stacked) {
              for (n = 0; n < i; n++) {
                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                  var c = Number(l.getRightValue(a.data[e]));
                  c < 0 ? d += c || 0 : u += c || 0;
                }
              }

              var h = Number(l.getRightValue(t));
              return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
            }

            return l.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t,
                e,
                i,
                n,
                a = this.getMeta(),
                r = this.chart.chartArea,
                s = a.data || [];

            function l(t, e, i) {
              return Math.max(Math.min(t, i), e);
            }

            if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);else for (t = 0, e = s.length; t < e; ++t) {
              i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
            }
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) {
              (i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom);
            }
          },
          draw: function draw() {
            var t = this.chart,
                i = this.getMeta(),
                n = i.data || [],
                a = t.chartArea,
                r = n.length,
                s = 0;

            for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) {
              n[s].draw(a);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                n = t.custom || {},
                a = t._model;
            a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                r = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var i = t.data,
              n = i.datasets,
              a = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    s = a.data[n].custom || {},
                    l = o.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: i,
                  fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
                  hidden: isNaN(r.data[n]) || a.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var i,
                n,
                a,
                o = e.index,
                r = this.chart;

            for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) {
              (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
            }

            r.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                i = e.chart,
                n = i.chartArea,
                a = e.getMeta(),
                r = i.options,
                s = r.elements.arc,
                l = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function (i, n) {
              e.updateElement(i, n, t);
            });
          },
          updateElement: function updateElement(t, e, i) {
            for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), m = 0; m < e; ++m) {
              isNaN(r.data[m]) || p.data[m].hidden || ++g;
            }

            var v = s.startAngle,
                b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                x = v + c * g,
                y = x + (t.hidden ? 0 : c),
                k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
            o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: u,
              _model: {
                x: h,
                y: f,
                innerRadius: 0,
                outerRadius: i ? k : b,
                startAngle: i && l.animateRotate ? v : x,
                endAngle: i && l.animateRotate ? v : y,
                label: o.valueAtIndexOrDefault(d, e, d[e])
              }
            }), n.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                i = 0;
            return o.each(e.data, function (e, n) {
              isNaN(t.data[n]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);
      n._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                i = e.getMeta(),
                n = i.dataset,
                a = i.data,
                r = n.custom || {},
                s = e.getDataset(),
                l = e.chart.options.elements.line,
                u = e.chart.scale;
            void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, {
              _datasetIndex: e.index,
              _scale: u,
              _children: a,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
              }
            }), i.dataset.pivot(), o.each(a, function (i, n) {
              e.updateElement(i, n, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, i) {
            var n = this,
                a = t.custom || {},
                r = n.getDataset(),
                s = n.chart.scale,
                l = n.chart.options.elements.point,
                u = s.getPointPositionForValue(e, r.data[e]);
            void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
              _datasetIndex: n.index,
              _index: e,
              _scale: s,
              _model: {
                x: i ? s.xCenter : u.x,
                y: i ? s.yCenter : u.y,
                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
              }
            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            o.each(e.data, function (i, n) {
              var a = i._model,
                  r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
              a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model;
            a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                n = t._index,
                a = t._model,
                r = this.chart.options.elements.point;
            a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function (t, e, i) {
      "use strict";

      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      25: 25
    }],
    22: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: o.noop,
          onComplete: o.noop
        }
      }), e.exports = function (t) {
        t.Animation = a.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, i, n) {
            var a,
                o,
                r = this.animations;

            for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) {
              if (r[a].chart === t) return void (r[a] = e);
            }

            r.push(e), 1 === r.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var e = o.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                i = 0;
            t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
            var n = Date.now();
            t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var e, i, n = this.animations, a = 0; a < n.length;) {
              i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(28),
          r = t(30),
          s = t(48),
          l = t(31);

      e.exports = function (t) {
        function e(t) {
          return "top" === t || "bottom" === t;
        }

        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(e, i) {
            var o,
                r,
                l = this;
            (r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || [], r.labels = r.labels || [], o.options = a.configMerge(n.global, n[o.type], o.options || {}), i = o;
            var u = s.acquireContext(e, i),
                d = u && u.canvas,
                c = d && d.height,
                h = d && d.width;
            l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = h, l.height = c, l.aspectRatio = c ? h / c : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", {
              get: function get() {
                return l.config.data;
              },
              set: function set(t) {
                l.config.data = t;
              }
            }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                i = e.options,
                n = e.canvas,
                o = i.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n)));

            if ((e.width !== r || e.height !== s) && (n.width = e.width = r, n.height = e.height = s, n.style.width = r + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
              var u = {
                width: r,
                height: s
              };
              l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                i = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), i && (i.id = i.id || "scale");
          },
          buildOrUpdateScales: function buildOrUpdateScales() {
            var i = this,
                n = i.options,
                o = i.scales || {},
                r = [],
                s = Object.keys(o).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});
            n.scales && (r = r.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && r.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(r, function (n) {
              var r = n.options,
                  l = r.id,
                  u = a.valueOrDefault(r.type, n.dtype);
              e(r.position) !== e(n.dposition) && (r.position = n.dposition), s[l] = !0;
              var d = null;
              if (l in o && o[l].type === u) (d = o[l]).options = r, d.ctx = i.ctx, d.chart = i;else {
                var c = t.scaleService.getScaleConstructor(u);
                if (!c) return;
                d = new c({
                  id: l,
                  type: u,
                  options: r,
                  ctx: i.ctx,
                  chart: i
                }), o[d.id] = d;
              }
              d.mergeTicksOptions(), n.isDefault && (i.scale = d);
            }), a.each(s, function (t, e) {
              t || delete o[e];
            }), i.scales = o, t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                i = [],
                n = [];
            return a.each(e.data.datasets, function (a, o) {
              var r = e.getDatasetMeta(o),
                  s = a.type || e.config.type;
              if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o), r.controller.linkScales();else {
                var l = t.controllers[r.type];
                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                r.controller = new l(e, o), n.push(r.controller);
              }
            }, e), n;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, i) {
              t.getDatasetMeta(i).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(e) {
            var i,
                n,
                o = this;

            if (e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            }), n = (i = o).options, a.each(i.scales, function (t) {
              r.removeBox(i, t);
            }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(o), !1 !== l.notify(o, "beforeUpdate")) {
              o.tooltip._data = o.data;
              var s = o.buildOrUpdateControllers();
              a.each(o.data.datasets, function (t, e) {
                o.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(s, function (t) {
                t.reset();
              }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], l.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                duration: e.duration,
                easing: e.easing,
                lazy: e.lazy
              } : o.render(e);
            }
          },
          updateLayout: function updateLayout() {
            !1 !== l.notify(this, "beforeLayout") && (r.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
                this.updateDataset(t);
              }

              l.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this.getDatasetMeta(t),
                i = {
              meta: e,
              index: t
            };
            !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]));
          },
          render: function render(e) {
            var i = this;
            e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            });
            var n = e.duration,
                o = e.lazy;

            if (!1 !== l.notify(i, "beforeRender")) {
              var r = i.options.animation,
                  s = function s(t) {
                l.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i);
              };

              if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) {
                var u = new t.Animation({
                  numSteps: (n || r.duration) / 16.66,
                  easing: e.easing || r.easing,
                  render: function render(t, e) {
                    var i = a.easing.effects[e.easing],
                        n = e.currentStep,
                        o = n / e.numSteps;
                    t.draw(i(o), o, n);
                  },
                  onAnimationProgress: r.onProgress,
                  onAnimationComplete: s
                });
                t.animationService.addAnimation(i, u, n, o);
              } else i.draw(), s(new t.Animation({
                numSteps: 0,
                chart: i
              }));

              return i;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) {
              this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            }

            this.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
              for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) {
                e.isDatasetVisible(i) && e.drawDataset(i, t);
              }

              l.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var i = this.getDatasetMeta(t),
                n = {
              meta: i,
              index: t,
              easingValue: e
            };
            !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var e = this.tooltip,
                i = {
              tooltip: e,
              easingValue: t
            };
            !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return o.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return o.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return o.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, i) {
            var n = o.modes[e];
            return "function" == typeof n ? n(this, t, i) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return o.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                i = this.data.datasets[t],
                n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e]);
          },
          destroy: function destroy() {
            var e,
                i,
                n = this,
                o = n.canvas;

            for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) {
              n.destroyDatasetMeta(e);
            }

            o && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                i = function i() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (n) {
              s.addEventListener(t, n, i), e[n] = i;
            }), t.options.responsive && (i = function i() {
              t.resize();
            }, s.addEventListener(t, "resize", i), e.resize = i);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, i) {
              s.removeEventListener(t, i, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, i) {
            var n,
                a,
                o,
                r = i ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, o = t.length; a < o; ++a) {
              (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                i = e.tooltip;

            if (!1 !== l.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var n = e.handleEvent(t);
              i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i.options || {},
                o = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t["native"], i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t["native"], i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e;
          }
        }), t.Controller = t;
      };
    }, {
      25: 25,
      28: 28,
      30: 30,
      31: 31,
      45: 45,
      48: 48
    }],
    24: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function i(t, i) {
          var n = t._chartjs;

          if (n) {
            var a = n.listeners,
                o = a.indexOf(i);
            -1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, n.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            this.chart = t, this.index = e, this.linkScales(), this.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                i = t.getDataset();
            null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && i(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this.datasetElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this.dataElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                i = this.getMeta(),
                n = this.getDataset().data || [],
                a = i.data;

            for (t = 0, e = n.length; t < e; ++t) {
              a[t] = a[t] || this.createMetaData(t);
            }

            i.dataset = i.dataset || this.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t,
                a,
                o = this,
                r = o.getDataset(),
                s = r.data || (r.data = []);
            o._data !== s && (o._data && i(o._data, o), a = o, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [a]
              }
            }), e.forEach(function (e) {
              var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                  a = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function value() {
                  var e = Array.prototype.slice.call(arguments),
                      o = a.apply(this, e);
                  return n.each(t._chartjs.listeners, function (t) {
                    "function" == typeof t[i] && t[i].apply(t, e);
                  }), o;
                }
              });
            })), o._data = s), o.resyncElements();
          },
          update: n.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) {
              i[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                i = e.length,
                n = 0;

            for (t.dataset && t.dataset.draw(); n < i; ++n) {
              e[n].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var i = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                o = t.custom || {},
                r = n.valueAtIndexOrDefault,
                s = t._model;
            s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                o = n.valueAtIndexOrDefault,
                r = n.getHoverColor,
                s = t._model;
            s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this.getMeta(),
                e = this.getDataset().data,
                i = t.data.length,
                n = e.length;
            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
          },
          insertElements: function insertElements(t, e) {
            for (var i = 0; i < e; ++i) {
              this.addElementAndReset(t + i);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = n.inherits;
      };
    }, {
      45: 45
    }],
    25: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        _set: function _set(t, e) {
          return n.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      45: 45
    }],
    26: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(45);

      var o = function o(t) {
        a.extend(this, t), this.initialize.apply(this, arguments);
      };

      a.extend(o.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = a.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              i = e._model,
              a = e._start,
              o = e._view;
          return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function (t, e, i, a) {
            var o,
                r,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g = Object.keys(i);

            for (o = 0, r = g.length; o < r; ++o) {
              if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                if (t.hasOwnProperty(s) || (t[s] = l), (c = _typeof(d)) == _typeof(u = t[s])) if ("string" === c) {
                  if ((h = n(u)).valid && (f = n(d)).valid) {
                    e[s] = f.mix(h, a).rgbString();
                    continue;
                  }
                } else if ("number" === c && isFinite(u) && isFinite(d)) {
                  e[s] = u + (d - u) * a;
                  continue;
                }
                e[s] = d;
              }
            }
          }(a, o, i, t), e) : (e._view = i, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return a.isNumber(this._model.x) && a.isNumber(this._model.y);
        }
      }), o.extend = a.inherits, e.exports = o;
    }, {
      3: 3,
      45: 45
    }],
    27: [function (t, e, i) {
      "use strict";

      var n = t(3),
          a = t(25),
          o = t(45);

      e.exports = function (t) {
        function e(t, e, i) {
          var n;
          return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n;
        }

        function i(t) {
          return null != t && "none" !== t;
        }

        function r(t, n, a) {
          var o = document.defaultView,
              r = t.parentNode,
              s = o.getComputedStyle(t)[n],
              l = o.getComputedStyle(r)[n],
              u = i(s),
              d = i(l),
              c = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none";
        }

        o.configMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              var r = i[e] || {},
                  s = n[e];
              "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a);
            }
          });
        }, o.scaleMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, i, n, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var r,
                    s,
                    l,
                    u = n[e].length;

                for (i[e] || (i[e] = []), r = 0; r < u; ++r) {
                  l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l);
                }
              } else o._merger(e, i, n, a);
            }
          });
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var i = [];
          return o.each(t, function (t) {
            e(t) && i.push(t);
          }), i;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, i) {
          return t.findIndex(e, i);
        } : function (t, e, i) {
          i = void 0 === i ? t : i;

          for (var n = 0, a = t.length; n < a; ++n) {
            if (e.call(i, t[n], n, t)) return n;
          }

          return -1;
        }, o.findNextWhere = function (t, e, i) {
          o.isNullOrUndef(i) && (i = -1);

          for (var n = i + 1; n < t.length; n++) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, o.findPreviousWhere = function (t, e, i) {
          o.isNullOrUndef(i) && (i = t.length);

          for (var n = i - 1; n >= 0; n--) {
            var a = t[n];
            if (e(a)) return a;
          }
        }, o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, i) {
          return Math.abs(t - e) < i;
        }, o.almostWhole = function (t, e) {
          var i = Math.round(t);
          return i - e < t && i + e > t;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          var e = Math.log(t) * Math.LOG10E,
              i = Math.round(e);
          return t === Math.pow(10, i) ? i : e;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var i = e.x - t.x,
              n = e.y - t.y,
              a = Math.sqrt(i * i + n * n),
              o = Math.atan2(n, i);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: a
          };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, i, n) {
          var a = t.skip ? e : t,
              o = e,
              r = i.skip ? e : i,
              s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
              l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              u = s / (s + l),
              d = l / (s + l),
              c = n * (u = isNaN(u) ? 0 : u),
              h = n * (d = isNaN(d) ? 0 : d);
          return {
            previous: {
              x: o.x - c * (r.x - a.x),
              y: o.y - c * (r.y - a.y)
            },
            next: {
              x: o.x + h * (r.x - a.x),
              y: o.y + h * (r.y - a.y)
            }
          };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              i,
              n,
              a,
              r,
              s,
              l,
              u,
              d,
              c = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              h = c.length;

          for (e = 0; e < h; ++e) {
            if (!(n = c[e]).model.skip) {
              if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
                var f = a.model.x - n.model.x;
                n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0;
              }

              !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
            }
          }

          for (e = 0; e < h - 1; ++e) {
            n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK)));
          }

          for (e = 0; e < h; ++e) {
            (n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK));
          }
        }, o.nextItem = function (t, e, i) {
          return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, i) {
          return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var i = Math.floor(o.log10(t)),
              n = t / Math.pow(10, i);
          return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
        }, o.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, o.getRelativePosition = function (t, e) {
          var i,
              n,
              a = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              s = r.getBoundingClientRect(),
              l = a.touches;
          l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
          var u = parseFloat(o.getStyle(r, "padding-left")),
              d = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = s.right - s.left - u - c,
              g = s.bottom - s.top - d - h;
          return {
            x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio),
            y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio)
          };
        }, o.getConstraintWidth = function (t) {
          return r(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return r(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var i = parseInt(o.getStyle(e, "padding-left"), 10),
              n = parseInt(o.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - i - n,
              r = o.getConstraintWidth(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var i = parseInt(o.getStyle(e, "padding-top"), 10),
              n = parseInt(o.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - i - n,
              r = o.getConstraintHeight(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t, e) {
          var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;

          if (1 !== i) {
            var n = t.canvas,
                a = t.height,
                o = t.width;
            n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px");
          }
        }, o.fontString = function (t, e, i) {
          return e + " " + t + "px " + i;
        }, o.longestText = function (t, e, i, n) {
          var a = (n = n || {}).data = n.data || {},
              r = n.garbageCollect = n.garbageCollect || [];
          n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
          var s = 0;
          o.each(i, function (e) {
            null != e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function (e) {
              null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e));
            });
          });
          var l = r.length / 2;

          if (l > i.length) {
            for (var u = 0; u < l; u++) {
              delete a[r[u]];
            }

            r.splice(0, l);
          }

          return s;
        }, o.measureText = function (t, e, i, n, a) {
          var o = e[a];
          return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;
          return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.color = n ? function (t) {
          return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      25: 25,
      3: 3,
      45: 45
    }],
    28: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return t["native"] ? {
          x: t.x,
          y: t.y
        } : n.getRelativePosition(t, e);
      }

      function o(t, e) {
        var i, n, a, o, r;

        for (n = 0, o = t.data.datasets.length; n < o; ++n) {
          if (t.isDatasetVisible(n)) for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
            var s = i.data[a];
            s._view.skip || e(s);
          }
        }
      }

      function r(t, e) {
        var i = [];
        return o(t, function (t) {
          t.inRange(e.x, e.y) && i.push(t);
        }), i;
      }

      function s(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY,
            r = [];
        return o(t, function (t) {
          if (!i || t.inRange(e.x, e.y)) {
            var o = t.getCenterPoint(),
                s = n(e, o);
            s < a ? (r = [t], a = s) : s === a && r.push(t);
          }
        }), r;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
        return function (t, n) {
          var a = e ? Math.abs(t.x - n.x) : 0,
              o = i ? Math.abs(t.y - n.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
        };
      }

      function u(t, e, i) {
        var n = a(e, t);
        i.axis = i.axis || "x";
        var o = l(i.axis),
            u = i.intersect ? r(t, n) : s(t, n, !1, o),
            d = [];
        return u.length ? (t.data.datasets.forEach(function (e, i) {
          if (t.isDatasetVisible(i)) {
            var n = t.getDatasetMeta(i).data[u[0]._index];

            n && !n._view.skip && d.push(n);
          }
        }), d) : [];
      }

      e.exports = {
        modes: {
          single: function single(t, e) {
            var i = a(e, t),
                n = [];
            return o(t, function (t) {
              if (t.inRange(i.x, i.y)) return n.push(t), n;
            }), n.slice(0, 1);
          },
          label: u,
          index: u,
          dataset: function dataset(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var o = l(i.axis),
                u = i.intersect ? r(t, n) : s(t, n, !1, o);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return u(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return r(t, a(e, t));
          },
          nearest: function nearest(t, e, i) {
            var n = a(e, t);
            i.axis = i.axis || "xy";
            var o = l(i.axis),
                r = s(t, n, i.intersect, o);
            return r.length > 1 && r.sort(function (t, e) {
              var i = t.getArea() - e.getArea();
              return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
            }), r.slice(0, 1);
          },
          x: function x(t, e, i) {
            var n = a(e, t),
                r = [],
                s = !1;
            return o(t, function (t) {
              t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (r = []), r;
          },
          y: function y(t, e, i) {
            var n = a(e, t),
                r = [],
                s = !1;
            return o(t, function (t) {
              t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0);
            }), i.intersect && !s && (r = []), r;
          }
        }
      };
    }, {
      45: 45
    }],
    29: [function (t, e, i) {
      "use strict";

      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t, e) {
          return this.construct(_t, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      25: 25
    }],
    30: [function (t, e, i) {
      "use strict";

      var n = t(45);

      function a(t, e) {
        return n.where(t, function (t) {
          return t.position === e;
        });
      }

      function o(t, e) {
        t.forEach(function (t, e) {
          return t._tmpIndex_ = e, t;
        }), t.sort(function (t, i) {
          var n = e ? i : t,
              a = e ? t : i;
          return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight;
        }), t.forEach(function (t) {
          delete t._tmpIndex_;
        });
      }

      e.exports = {
        defaults: {},
        addBox: function addBox(t, e) {
          t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
        },
        removeBox: function removeBox(t, e) {
          var i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure: function configure(t, e, i) {
          for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) {
            n = a[r], i.hasOwnProperty(n) && (e[n] = i[n]);
          }
        },
        update: function update(t, e, i) {
          if (t) {
            var r = t.options.layout || {},
                s = n.options.toPadding(r.padding),
                l = s.left,
                u = s.right,
                d = s.top,
                c = s.bottom,
                h = a(t.boxes, "left"),
                f = a(t.boxes, "right"),
                g = a(t.boxes, "top"),
                p = a(t.boxes, "bottom"),
                m = a(t.boxes, "chartArea");
            o(h, !0), o(f, !1), o(g, !0), o(p, !1);
            var v = e - l - u,
                b = i - d - c,
                x = b / 2,
                y = (e - v / 2) / (h.length + f.length),
                k = (i - x) / (g.length + p.length),
                M = v,
                w = b,
                S = [];
            n.each(h.concat(f, g, p), function (t) {
              var e,
                  i = t.isHorizontal();
              i ? (e = t.update(t.fullWidth ? v : M, k), w -= e.height) : (e = t.update(y, w), M -= e.width), S.push({
                horizontal: i,
                minSize: e,
                box: t
              });
            });
            var C = 0,
                _ = 0,
                D = 0,
                I = 0;
            n.each(g.concat(p), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                C = Math.max(C, e.left), _ = Math.max(_, e.right);
              }
            }), n.each(h.concat(f), function (t) {
              if (t.getPadding) {
                var e = t.getPadding();
                D = Math.max(D, e.top), I = Math.max(I, e.bottom);
              }
            });
            var P = l,
                A = u,
                T = d,
                F = c;
            n.each(h.concat(f), N), n.each(h, function (t) {
              P += t.width;
            }), n.each(f, function (t) {
              A += t.width;
            }), n.each(g.concat(p), N), n.each(g, function (t) {
              T += t.height;
            }), n.each(p, function (t) {
              F += t.height;
            }), n.each(h.concat(f), function (t) {
              var e = n.findNextWhere(S, function (e) {
                return e.box === t;
              }),
                  i = {
                left: 0,
                right: 0,
                top: T,
                bottom: F
              };
              e && t.update(e.minSize.width, w, i);
            }), P = l, A = u, T = d, F = c, n.each(h, function (t) {
              P += t.width;
            }), n.each(f, function (t) {
              A += t.width;
            }), n.each(g, function (t) {
              T += t.height;
            }), n.each(p, function (t) {
              F += t.height;
            });
            var O = Math.max(C - P, 0);
            P += O, A += Math.max(_ - A, 0);
            var R = Math.max(D - T, 0);
            T += R, F += Math.max(I - F, 0);
            var L = i - T - F,
                z = e - P - A;
            z === M && L === w || (n.each(h, function (t) {
              t.height = L;
            }), n.each(f, function (t) {
              t.height = L;
            }), n.each(g, function (t) {
              t.fullWidth || (t.width = z);
            }), n.each(p, function (t) {
              t.fullWidth || (t.width = z);
            }), w = L, M = z);
            var B = l + O,
                W = d + R;
            n.each(h.concat(g), V), B += M, W += w, n.each(f, V), n.each(p, V), t.chartArea = {
              left: P,
              top: T,
              right: P + M,
              bottom: T + w
            }, n.each(m, function (e) {
              e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, w);
            });
          }

          function N(t) {
            var e = n.findNextWhere(S, function (e) {
              return e.box === t;
            });
            if (e) if (t.isHorizontal()) {
              var i = {
                left: Math.max(P, C),
                right: Math.max(A, _),
                top: 0,
                bottom: 0
              };
              t.update(t.fullWidth ? v : M, b / 2, i);
            } else t.update(e.minSize.width, w);
          }

          function V(t) {
            t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - u : P + M, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right);
          }
        }
      };
    }, {
      45: 45
    }],
    31: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45);
      n._set("global", {
        plugins: {}
      }), e.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function register(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            -1 === e.indexOf(t) && e.push(t);
          }), this._cacheId++;
        },
        unregister: function unregister(t) {
          var e = this._plugins;
          [].concat(t).forEach(function (t) {
            var i = e.indexOf(t);
            -1 !== i && e.splice(i, 1);
          }), this._cacheId++;
        },
        clear: function clear() {
          this._plugins = [], this._cacheId++;
        },
        count: function count() {
          return this._plugins.length;
        },
        getAll: function getAll() {
          return this._plugins;
        },
        notify: function notify(t, e, i) {
          var n,
              a,
              o,
              r,
              s,
              l = this.descriptors(t),
              u = l.length;

          for (n = 0; n < u; ++n) {
            if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
          }

          return !0;
        },
        descriptors: function descriptors(t) {
          var e = t.$plugins || (t.$plugins = {});
          if (e.id === this._cacheId) return e.descriptors;
          var i = [],
              o = [],
              r = t && t.config || {},
              s = r.options && r.options.plugins || {};
          return this._plugins.concat(r.plugins || []).forEach(function (t) {
            if (-1 === i.indexOf(t)) {
              var e = t.id,
                  r = s[e];
              !1 !== r && (!0 === r && (r = a.clone(n.global.plugins[e])), i.push(t), o.push({
                plugin: t,
                options: r || {}
              }));
            }
          }), e.descriptors = o, e.id = this._cacheId, o;
        },
        _invalidate: function _invalidate(t) {
          delete t.$plugins;
        }
      };
    }, {
      25: 25,
      45: 45
    }],
    32: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(34);

      function s(t) {
        var e,
            i,
            n = [];

        for (e = 0, i = t.length; e < i; ++e) {
          n.push(t[e].label);
        }

        return n;
      }

      function l(t, e, i) {
        var n = t.getPixelForTick(e);
        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
      }

      n._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: r.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function (t) {
        function e(t, e, i) {
          return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width;
        }

        function i(t) {
          var e = o.valueOrDefault,
              i = n.global,
              a = e(t.fontSize, i.defaultFontSize),
              r = e(t.fontStyle, i.defaultFontStyle),
              s = e(t.fontFamily, i.defaultFontFamily);
          return {
            size: a,
            style: r,
            family: s,
            font: o.fontString(a, r, s)
          };
        }

        function r(t) {
          return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize));
        }

        t.Scale = a.extend({
          getPadding: function getPadding() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          },
          getTicks: function getTicks() {
            return this._ticks;
          },
          mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;

            for (var e in !1 === t.minor && (t.minor = {
              display: !1
            }), !1 === t.major && (t.major = {
              display: !1
            }), t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          },
          beforeUpdate: function beforeUpdate() {
            o.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, i) {
            var n,
                a,
                r,
                s,
                l,
                u,
                d = this;

            for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) {
              s = r[n], (u = l[n]) ? u.label = s : l.push(u = {
                label: s,
                major: !1
              });
            }

            return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          },
          afterUpdate: function afterUpdate() {
            o.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            o.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            o.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            o.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: o.noop,
          afterDataLimits: function afterDataLimits() {
            o.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            o.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: o.noop,
          afterBuildTicks: function afterBuildTicks() {
            o.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            o.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            o.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            o.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                n = t.options.ticks,
                a = s(t._ticks),
                r = i(n);
            e.font = r.font;
            var l = n.minRotation || 0;
            if (a.length && t.options.display && t.isHorizontal()) for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
              var f = o.toRadians(l);

              if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                l--;
                break;
              }

              l++, c = u * d;
            }
            t.labelRotation = l;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            o.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            o.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                n = t.minSize = {
              width: 0,
              height: 0
            },
                a = s(t._ticks),
                l = t.options,
                u = l.ticks,
                d = l.scaleLabel,
                c = l.gridLines,
                h = l.display,
                f = t.isHorizontal(),
                g = i(u),
                p = l.gridLines.tickMarkLength;

            if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
              var m = r(d) + o.options.toPadding(d.padding).height;
              f ? n.height += m : n.width += m;
            }

            if (u.display && h) {
              var v = o.longestText(t.ctx, g.font, a, t.longestTextCache),
                  b = o.numberOfLabelLines(a),
                  x = .5 * g.size,
                  y = t.options.ticks.padding;

              if (f) {
                t.longestLabelWidth = v;
                var k = o.toRadians(t.labelRotation),
                    M = Math.cos(k),
                    w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
                n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font;
                var S = e(t.ctx, a[0], g.font),
                    C = e(t.ctx, a[a.length - 1], g.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? M * S + 3 : M * x + 3, t.paddingRight = "bottom" === l.position ? M * x + 3 : M * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3);
              } else u.mirror ? v = 0 : v += y + x, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
            }

            t.handleMargins(), t.width = n.width, t.height = n.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            o.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            if (o.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          getLabelForIndex: o.noop,
          getPixelForValue: o.noop,
          getValueForPixel: o.noop,
          getPixelForTick: function getPixelForTick(t) {
            var e = this,
                i = e.options.offset;

            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                  a = n * t + e.paddingLeft;
              i && (a += n / 2);
              var o = e.left + Math.round(a);
              return o += e.isFullWidth() ? e.margins.left : 0;
            }

            var r = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (r / (e._ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  n = e.left + Math.round(i);
              return n += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
          },
          _autoSkip: function _autoSkip(t) {
            var e,
                i,
                n,
                a,
                r = this,
                s = r.isHorizontal(),
                l = r.options.ticks.minor,
                u = t.length,
                d = o.toRadians(r.labelRotation),
                c = Math.cos(d),
                h = r.longestLabelWidth * c,
                f = [];

            for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) {
              n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
            }

            return f;
          },
          draw: function draw(t) {
            var e = this,
                a = e.options;

            if (a.display) {
              var s = e.ctx,
                  u = n.global,
                  d = a.ticks.minor,
                  c = a.ticks.major || d,
                  h = a.gridLines,
                  f = a.scaleLabel,
                  g = 0 !== e.labelRotation,
                  p = e.isHorizontal(),
                  m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  v = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                  b = i(d),
                  x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                  y = i(c),
                  k = h.drawTicks ? h.tickMarkLength : 0,
                  M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                  w = i(f),
                  S = o.options.toPadding(f.padding),
                  C = o.toRadians(e.labelRotation),
                  _ = [],
                  D = e.options.gridLines.lineWidth,
                  I = "right" === a.position ? e.right : e.right - D - k,
                  P = "right" === a.position ? e.right + k : e.right,
                  A = "bottom" === a.position ? e.top + D : e.bottom - k - D,
                  T = "bottom" === a.position ? e.top + D + k : e.bottom + D;

              if (o.each(m, function (i, n) {
                if (!o.isNullOrUndef(i.label)) {
                  var r,
                      s,
                      c,
                      f,
                      v,
                      b,
                      x,
                      y,
                      M,
                      w,
                      S,
                      F,
                      O,
                      R,
                      L = i.label;
                  n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                  var z = "middle",
                      B = "middle",
                      W = d.padding;

                  if (p) {
                    var N = k + W;
                    "bottom" === a.position ? (B = g ? "middle" : "top", z = g ? "right" : "center", R = e.top + N) : (B = g ? "middle" : "bottom", z = g ? "left" : "center", R = e.bottom - N);
                    var V = l(e, n, h.offsetGridLines && m.length > 1);
                    V < e.left && (s = "rgba(0,0,0,0)"), V += o.aliasPixel(r), O = e.getPixelForTick(n) + d.labelOffset, v = x = M = S = V, b = A, y = T, w = t.top, F = t.bottom + D;
                  } else {
                    var E,
                        H = "left" === a.position;
                    d.mirror ? (z = H ? "left" : "right", E = W) : (z = H ? "right" : "left", E = k + W), O = H ? e.right - E : e.left + E;
                    var j = l(e, n, h.offsetGridLines && m.length > 1);
                    j < e.top && (s = "rgba(0,0,0,0)"), j += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, v = I, x = P, M = t.left, S = t.right + D, b = y = w = F = j;
                  }

                  _.push({
                    tx1: v,
                    ty1: b,
                    tx2: x,
                    ty2: y,
                    x1: M,
                    y1: w,
                    x2: S,
                    y2: F,
                    labelX: O,
                    labelY: R,
                    glWidth: r,
                    glColor: s,
                    glBorderDash: c,
                    glBorderDashOffset: f,
                    rotation: -1 * C,
                    label: L,
                    major: i.major,
                    textBaseline: B,
                    textAlign: z
                  });
                }
              }), o.each(_, function (t) {
                if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                  var i = t.label;
                  if (o.isArray(i)) for (var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) {
                    s.fillText("" + i[l], 0, r), r += a;
                  } else s.fillText(i, 0, 0);
                  s.restore();
                }
              }), f.display) {
                var F,
                    O,
                    R = 0,
                    L = r(f) / 2;
                if (p) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - L - S.bottom : e.top + L + S.top;else {
                  var z = "left" === a.position;
                  F = z ? e.left + L + S.top : e.right - L - S.top, O = e.top + (e.bottom - e.top) / 2, R = z ? -.5 * Math.PI : .5 * Math.PI;
                }
                s.save(), s.translate(F, O), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = M, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore();
              }

              if (h.drawBorder) {
                s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                var B = e.left,
                    W = e.right + D,
                    N = e.top,
                    V = e.bottom + D,
                    E = o.aliasPixel(s.lineWidth);
                p ? (N = V = "top" === a.position ? e.bottom : e.top, N += E, V += E) : (B = W = "left" === a.position ? e.right : e.left, B += E, W += E), s.beginPath(), s.moveTo(B, N), s.lineTo(W, V), s.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(30);

      e.exports = function (t) {
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, e, i) {
            this.constructors[t] = e, this.defaults[t] = a.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
          },
          addScalesToLayout: function addScalesToLayout(t) {
            a.each(t.scales, function (e) {
              e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e);
            });
          }
        };
      };
    }, {
      25: 25,
      30: 30,
      45: 45
    }],
    34: [function (t, e, i) {
      "use strict";

      var n = t(45);
      e.exports = {
        formatters: {
          values: function values(t) {
            return n.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, i) {
            var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
            var o = n.log10(Math.abs(a)),
                r = "";

            if (0 !== t) {
              var s = -1 * Math.floor(o);
              s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s);
            } else r = "0";

            return r;
          },
          logarithmic: function logarithmic(t, e, i) {
            var a = t / Math.pow(10, Math.floor(n.log10(t)));
            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    }],
    35: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: o.noop,
            title: function title(t, e) {
              var i = "",
                  n = e.labels,
                  a = n ? n.length : 0;

              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index]);
              }

              return i;
            },
            afterTitle: o.noop,
            beforeBody: o.noop,
            beforeLabel: o.noop,
            label: function label(t, e) {
              var i = e.datasets[t.datasetIndex].label || "";
              return i && (i += ": "), i += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: o.noop,
            afterBody: o.noop,
            beforeFooter: o.noop,
            footer: o.noop,
            afterFooter: o.noop
          }
        }
      }), e.exports = function (t) {
        function e(t, e) {
          var i = o.color(t);
          return i.alpha(e * i.alpha()).rgbaString();
        }

        function i(t, e) {
          return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function r(t) {
          var e = n.global,
              i = o.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          };
        }

        t.Tooltip = a.extend({
          initialize: function initialize() {
            this._model = r(this._options), this._lastActive = [];
          },
          getTitle: function getTitle() {
            var t = this._options.callbacks,
                e = t.beforeTitle.apply(this, arguments),
                n = t.title.apply(this, arguments),
                a = t.afterTitle.apply(this, arguments),
                o = [];
            return o = i(o = i(o = i(o, e), n), a);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var n = this,
                a = n._options.callbacks,
                r = [];
            return o.each(t, function (t) {
              var o = {
                before: [],
                lines: [],
                after: []
              };
              i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o);
            }), r;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this._options.callbacks,
                e = t.beforeFooter.apply(this, arguments),
                n = t.footer.apply(this, arguments),
                a = t.afterFooter.apply(this, arguments),
                o = [];
            return o = i(o = i(o = i(o, e), n), a);
          },
          update: function update(e) {
            var i,
                n,
                a,
                s,
                l,
                u,
                d,
                c,
                h,
                f,
                g,
                p,
                m,
                v,
                b,
                x,
                y,
                k,
                M,
                w,
                S = this,
                C = S._options,
                _ = S._model,
                D = S._model = r(C),
                I = S._active,
                P = S._data,
                A = {
              xAlign: _.xAlign,
              yAlign: _.yAlign
            },
                T = {
              x: _.x,
              y: _.y
            },
                F = {
              width: _.width,
              height: _.height
            },
                O = {
              x: _.caretX,
              y: _.caretY
            };

            if (I.length) {
              D.opacity = 1;
              var R = [],
                  L = [];
              O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition);
              var z = [];

              for (i = 0, n = I.length; i < n; ++i) {
                z.push((x = I[i], y = void 0, k = void 0, void 0, void 0, y = x._xScale, k = x._yScale || x._scale, M = x._index, w = x._datasetIndex, {
                  xLabel: y ? y.getLabelForIndex(M, w) : "",
                  yLabel: k ? k.getLabelForIndex(M, w) : "",
                  index: M,
                  datasetIndex: w,
                  x: x._model.x,
                  y: x._model.y
                }));
              }

              C.filter && (z = z.filter(function (t) {
                return C.filter(t, P);
              })), C.itemSort && (z = z.sort(function (t, e) {
                return C.itemSort(t, e, P);
              })), o.each(z, function (t) {
                R.push(C.callbacks.labelColor.call(S, t, S._chart)), L.push(C.callbacks.labelTextColor.call(S, t, S._chart));
              }), D.title = S.getTitle(z, P), D.beforeBody = S.getBeforeBody(z, P), D.body = S.getBody(z, P), D.afterBody = S.getAfterBody(z, P), D.footer = S.getFooter(z, P), D.x = Math.round(O.x), D.y = Math.round(O.y), D.caretPadding = C.caretPadding, D.labelColors = R, D.labelTextColors = L, D.dataPoints = z, A = function (t, e) {
                var i,
                    n,
                    a,
                    o,
                    r,
                    s = t._model,
                    l = t._chart,
                    u = t._chart.chartArea,
                    d = "center",
                    c = "center";
                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                var h = (u.left + u.right) / 2,
                    f = (u.top + u.bottom) / 2;
                "center" === c ? (i = function i(t) {
                  return t <= h;
                }, n = function n(t) {
                  return t > h;
                }) : (i = function i(t) {
                  return t <= e.width / 2;
                }, n = function n(t) {
                  return t >= l.width - e.width / 2;
                }), a = function a(t) {
                  return t + e.width + s.caretSize + s.caretPadding > l.width;
                }, o = function o(t) {
                  return t - e.width - s.caretSize - s.caretPadding < 0;
                }, r = function r(t) {
                  return t <= f ? "top" : "bottom";
                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                var g = t._options;
                return {
                  xAlign: g.xAlign ? g.xAlign : d,
                  yAlign: g.yAlign ? g.yAlign : c
                };
              }(this, F = function (t, e) {
                var i = t._chart.ctx,
                    n = 2 * e.yPadding,
                    a = 0,
                    r = e.body,
                    s = r.reduce(function (t, e) {
                  return t + e.before.length + e.lines.length + e.after.length;
                }, 0);
                s += e.beforeBody.length + e.afterBody.length;
                var l = e.title.length,
                    u = e.footer.length,
                    d = e.titleFontSize,
                    c = e.bodyFontSize,
                    h = e.footerFontSize;
                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;

                var f = 0,
                    g = function g(t) {
                  a = Math.max(a, i.measureText(t).width + f);
                };

                return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function (t) {
                  o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g);
                }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), {
                  width: a += 2 * e.xPadding,
                  height: n
                };
              }(this, D)), a = D, s = F, l = A, u = S._chart, d = a.x, c = a.y, h = a.caretSize, f = a.caretPadding, g = a.cornerRadius, p = l.xAlign, m = l.yAlign, v = h + f, b = g + f, "right" === p ? d -= s.width : "center" === p && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === m ? c += v : c -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === p ? d += v : "right" === p && (d -= v) : "left" === p ? d -= b : "right" === p && (d += b), T = {
                x: d,
                y: c
              };
            } else D.opacity = 0;

            return D.xAlign = A.xAlign, D.yAlign = A.yAlign, D.x = T.x, D.y = T.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, S._model = D, e && C.custom && C.custom.call(S, D), S;
          },
          drawCaret: function drawCaret(t, e) {
            var i = this._chart.ctx,
                n = this._view,
                a = this.getCaretPosition(t, e, n);
            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, i) {
            var n,
                a,
                o,
                r,
                s,
                l,
                u = i.caretSize,
                d = i.cornerRadius,
                c = i.xAlign,
                h = i.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                m = e.height;
            if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = i.caretX) - u, o = a + u), "top" === h) s = (r = g) - u, l = r;else {
              s = (r = g + m) + u, l = r;
              var v = o;
              o = n, n = v;
            }
            return {
              x1: n,
              x2: a,
              x3: o,
              y1: r,
              y2: s,
              y3: l
            };
          },
          drawTitle: function drawTitle(t, i, n, a) {
            var r = i.title;

            if (r.length) {
              n.textAlign = i._titleAlign, n.textBaseline = "top";
              var s,
                  l,
                  u = i.titleFontSize,
                  d = i.titleSpacing;

              for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) {
                n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d);
              }
            }
          },
          drawBody: function drawBody(t, i, n, a) {
            var r = i.bodyFontSize,
                s = i.bodySpacing,
                l = i.body;
            n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily);

            var u = 0,
                d = function d(e) {
              n.fillText(e, t.x + u, t.y), t.y += r + s;
            };

            n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d);
            var c = i.displayColors;
            u = c ? r + 2 : 0, o.each(l, function (s, l) {
              var u = e(i.labelTextColors[l], a);
              n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function (o) {
                c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o);
              }), o.each(s.after, d);
            }), u = 0, o.each(i.afterBody, d), t.y -= s;
          },
          drawFooter: function drawFooter(t, i, n, a) {
            var r = i.footer;
            r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function (e) {
              n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, i, n, a, o) {
            n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth;
            var r = i.xAlign,
                s = i.yAlign,
                l = t.x,
                u = t.y,
                d = a.width,
                c = a.height,
                h = i.cornerRadius;
            n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var i = {
                width: e.width,
                height: e.height
              },
                  n = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e,
                i = this,
                n = i._options;
            return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !o.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
              x: t.x,
              y: t.y
            }, i.update(!0), i.pivot())), e;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                i,
                n = 0,
                a = 0,
                o = 0;

            for (e = 0, i = t.length; e < i; ++e) {
              var r = t[e];

              if (r && r.hasValue()) {
                var s = r.tooltipPosition();
                n += s.x, a += s.y, ++o;
              }
            }

            return {
              x: Math.round(n / o),
              y: Math.round(a / o)
            };
          },
          nearest: function nearest(t, e) {
            var i,
                n,
                a,
                r = e.x,
                s = e.y,
                l = Number.POSITIVE_INFINITY;

            for (i = 0, n = t.length; i < n; ++i) {
              var u = t[i];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = o.distanceBetweenPoints(e, d);
                c < l && (l = c, a = u);
              }
            }

            if (a) {
              var h = a.tooltipPosition();
              r = h.x, s = h.y;
            }

            return {
              x: r,
              y: s
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45);
      n._set("global", {
        elements: {
          arc: {
            backgroundColor: n.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = a.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var i = this._view;

          if (i) {
            for (var n = o.getAngleFromPoint(i, {
              x: t,
              y: e
            }), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) {
              l += 2 * Math.PI;
            }

            for (; a > l;) {
              a -= 2 * Math.PI;
            }

            for (; a < s;) {
              a += 2 * Math.PI;
            }

            var u = a >= s && a <= l,
                d = r >= i.innerRadius && r <= i.outerRadius;
            return u && d;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              i = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * i,
            y: t.y + Math.sin(e) * i
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              i = e.startAngle,
              n = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = n.global;
      n._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: r.defaultColor,
            borderWidth: 3,
            borderColor: r.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a = this._view,
              s = this._chart.ctx,
              l = a.spanGaps,
              u = this._children.slice(),
              d = r.elements.line,
              c = -1;

          for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) {
            e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = n.global.defaultColor;

      function s(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }

      n._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: r,
            borderColor: r,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = a.extend({
        inRange: function inRange(t, e) {
          var i = this._view;
          return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
        },
        inLabelRange: s,
        inXRange: s,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              i = this._model,
              a = this._chart.ctx,
              s = e.pointStyle,
              l = e.radius,
              u = e.x,
              d = e.y,
              c = o.color,
              h = 0;
          e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26);

      function o(t) {
        return void 0 !== t._view.width;
      }

      function r(t) {
        var e,
            i,
            n,
            a,
            r = t._view;

        if (o(t)) {
          var s = r.width / 2;
          e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base);
        } else {
          var l = r.height / 2;
          e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l;
        }

        return {
          left: e,
          top: n,
          right: i,
          bottom: a
        };
      }

      n._set("global", {
        elements: {
          rectangle: {
            backgroundColor: n.global.defaultColor,
            borderColor: n.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              i,
              n,
              a,
              o,
              r,
              s = this._chart.ctx,
              l = this._view,
              u = l.borderWidth;

          if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
            var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                c = (u = u > d ? d : u) / 2,
                h = t + ("left" !== r ? c * a : 0),
                f = e + ("right" !== r ? -c * a : 0),
                g = i + ("top" !== r ? c * o : 0),
                p = n + ("bottom" !== r ? -c * o : 0);
            h !== f && (i = g, n = p), g !== p && (t = h, e = f);
          }

          s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
          var m = [[t, n], [t, i], [e, i], [e, n]],
              v = ["bottom", "left", "top", "right"].indexOf(r, 0);

          function b(t) {
            return m[(v + t) % 4];
          }

          -1 === v && (v = 0);
          var x = b(0);
          s.moveTo(x[0], x[1]);

          for (var y = 1; y < 4; y++) {
            x = b(y), s.lineTo(x[0], x[1]);
          }

          s.fill(), u && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var i = !1;

          if (this._view) {
            var n = r(this);
            i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
          }

          return i;
        },
        inLabelRange: function inLabelRange(t, e) {
          if (!this._view) return !1;
          var i = r(this);
          return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
        },
        inXRange: function inXRange(t) {
          var e = r(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = r(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              i = this._view;
          return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    }],
    40: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function (t, e, i) {
      "use strict";

      var n = t(42);
      i = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, i, n, a, o) {
          if (o) {
            var r = Math.min(o, n / 2),
                s = Math.min(o, a / 2);
            t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i);
          } else t.rect(e, i, n, a);
        },
        drawPoint: function drawPoint(t, e, i, n, a) {
          var o, r, s, l, u, d;

          if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
            if (!(isNaN(i) || i <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;

                case "triangle":
                  t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var c = i / Math.SQRT2,
                      h = n - c,
                      f = a - c,
                      g = Math.SQRT2 * i;
                  t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
                  break;

                case "cross":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "crossRot":
                  t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "star":
                  t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                  break;

                case "line":
                  t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                  break;

                case "dash":
                  t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath();
              }

              t.stroke();
            }
          } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
          i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y);
        }
      };
      n.clear = i.clear, n.drawRoundedRectangle = function (t) {
        t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath();
      };
    }, {
      42: 42
    }],
    42: [function (t, e, i) {
      "use strict";

      var n,
          a = {
        noop: function noop() {},
        uid: (n = 0, function () {
          return n++;
        }),
        isNullOrUndef: function isNullOrUndef(t) {
          return null == t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, i) {
          return a.valueOrDefault(a.isArray(t) ? t[e] : t, i);
        },
        callback: function callback(t, e, i) {
          if (t && "function" == typeof t.call) return t.apply(i, e);
        },
        each: function each(t, e, i, n) {
          var o, r, s;
          if (a.isArray(t)) {
            if (r = t.length, n) for (o = r - 1; o >= 0; o--) {
              e.call(i, t[o], o);
            } else for (o = 0; o < r; o++) {
              e.call(i, t[o], o);
            }
          } else if (a.isObject(t)) for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) {
            e.call(i, t[s[o]], s[o]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var i, n, o, r;
          if (!t || !e || t.length !== e.length) return !1;

          for (i = 0, n = t.length; i < n; ++i) {
            if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
              if (!a.arrayEquals(o, r)) return !1;
            } else if (o !== r) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (a.isArray(t)) return t.map(a.clone);

          if (a.isObject(t)) {
            for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) {
              e[i[o]] = a.clone(t[i[o]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, i, n) {
          var o = e[t],
              r = i[t];
          a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : e[t] = a.clone(r);
        },
        _mergerIf: function _mergerIf(t, e, i) {
          var n = e[t],
              o = i[t];
          a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o));
        },
        merge: function merge(t, e, i) {
          var n,
              o,
              r,
              s,
              l,
              u = a.isArray(e) ? e : [e],
              d = u.length;
          if (!a.isObject(t)) return t;

          for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o) {
            if (e = u[o], a.isObject(e)) for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) {
              n(r[l], t, e, i);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return a.merge(t, e, {
            merger: a._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = function e(_e, i) {
            t[i] = _e;
          }, i = 1, n = arguments.length; i < n; ++i) {
            a.each(arguments[i], e);
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              n = function n() {
            this.constructor = i;
          };

          return n.prototype = e.prototype, i.prototype = new n(), i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i;
        }
      };
      e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, i) {
        return Array.prototype.indexOf.call(t, e, i);
      }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault;
    }, {}],
    43: [function (t, e, i) {
      "use strict";

      var n = t(42),
          a = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              i = 0,
              n = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        easeOutBack: function easeOutBack(t) {
          return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: a
      }, n.easingEffects = a;
    }, {
      42: 42
    }],
    44: [function (t, e, i) {
      "use strict";

      var n = t(42);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!i || "normal" === i[1]) return 1.2 * e;

          switch (t = +i[2], i[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, i, a, o;
          return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, {
            top: e,
            right: i,
            bottom: a,
            left: o,
            height: e + a,
            width: o + i
          };
        },
        resolve: function resolve(t, e, i) {
          var a, o, r;

          for (a = 0, o = t.length; a < o; ++a) {
            if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r;
          }
        }
      };
    }, {
      42: 42
    }],
    45: [function (t, e, i) {
      "use strict";

      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function (t, e, i) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    47: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = "$chartjs",
          o = "chartjs-",
          r = o + "render-monitor",
          s = o + "render-animation",
          l = ["animationstart", "webkitAnimationStart"],
          u = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

      function d(t, e) {
        var i = n.getStyle(t, e),
            a = i && i.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : void 0;
      }

      var c = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (t) {}

        return t;
      }() && {
        passive: !0
      };

      function h(t, e, i) {
        t.addEventListener(e, i, c);
      }

      function f(t, e, i) {
        t.removeEventListener(e, i, c);
      }

      function g(t, e, i, n, a) {
        return {
          type: t,
          chart: e,
          "native": a || null,
          x: void 0 !== i ? i : null,
          y: void 0 !== n ? n : null
        };
      }

      function p(t, e, i) {
        var u,
            d,
            c,
            f,
            p,
            m,
            v,
            b,
            x = t[a] || (t[a] = {}),
            y = x.resizer = function (t) {
          var e = document.createElement("div"),
              i = o + "size-monitor",
              n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
          e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
          var a = e.childNodes[0],
              r = e.childNodes[1];

          e._reset = function () {
            a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6;
          };

          var s = function s() {
            e._reset(), t();
          };

          return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e;
        }((u = function u() {
          if (x.resizer) return e(g("resize", i));
        }, c = !1, f = [], function () {
          f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function () {
            c = !1, u.apply(d, f);
          }));
        }));

        m = function m() {
          if (x.resizer) {
            var e = t.parentNode;
            e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset();
          }
        }, v = (p = t)[a] || (p[a] = {}), b = v.renderProxy = function (t) {
          t.animationName === s && m();
        }, n.each(l, function (t) {
          h(p, t, b);
        }), v.reflow = !!p.offsetParent, p.classList.add(r);
      }

      function m(t) {
        var e,
            i,
            o,
            s = t[a] || {},
            u = s.resizer;
        delete s.resizer, i = (e = t)[a] || {}, (o = i.renderProxy) && (n.each(l, function (t) {
          f(e, t, o);
        }), delete i.renderProxy), e.classList.remove(r), u && u.parentNode && u.parentNode.removeChild(u);
      }

      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t,
              e,
              i,
              n = "from{opacity:0.99}to{opacity:1}";
          e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e));
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t ? (function (t, e) {
            var i = t.style,
                n = t.getAttribute("height"),
                o = t.getAttribute("width");

            if (t[a] = {
              initial: {
                height: n,
                width: o,
                style: {
                  display: i.display,
                  height: i.height,
                  width: i.width
                }
              }
            }, i.display = i.display || "block", null === o || "" === o) {
              var r = d(t, "width");
              void 0 !== r && (t.width = r);
            }

            if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
              var s = d(t, "height");
              void 0 !== r && (t.height = s);
            }
          }(t, e), i) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e[a]) {
            var i = e[a].initial;
            ["height", "width"].forEach(function (t) {
              var a = i[t];
              n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
            }), n.each(i.style || {}, function (t, i) {
              e.style[i] = t;
            }), e.width = e.width, delete e[a];
          }
        },
        addEventListener: function addEventListener(t, e, i) {
          var o = t.canvas;

          if ("resize" !== e) {
            var r = i[a] || (i[a] = {});
            h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
              var a, o, r, s;
              i((o = t, r = u[(a = e).type] || a.type, s = n.getRelativePosition(a, o), g(r, o, s.x, s.y, a)));
            });
          } else p(o, i, t);
        },
        removeEventListener: function removeEventListener(t, e, i) {
          var n = t.canvas;

          if ("resize" !== e) {
            var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
            o && f(n, e, o);
          } else m(n);
        }
      }, n.addEvent = h, n.removeEvent = f;
    }, {
      45: 45
    }],
    48: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(46),
          o = t(47),
          r = o._enabled ? o : a;
      e.exports = n.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, r);
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function (t, e, i) {
      "use strict";

      e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52);
    }, {
      50: 50,
      51: 51,
      52: 52
    }],
    50: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(40),
          o = t(45);

      n._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      });

      var r = {
        dataset: function dataset(t) {
          var e = t.fill,
              i = t.chart,
              n = i.getDatasetMeta(e),
              a = n && i.isDatasetVisible(e) && n.dataset._children || [],
              o = a.length || 0;
          return o ? function (t, e) {
            return e < o && a[e]._view || null;
          } : null;
        },
        boundary: function boundary(t) {
          var e = t.boundary,
              i = e ? e.x : null,
              n = e ? e.y : null;
          return function (t) {
            return {
              x: null === i ? t.x : i,
              y: null === n ? t.y : n
            };
          };
        }
      };

      function s(t, e, i) {
        var n,
            a = t._model || {},
            o = a.fill;
        if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;

        switch (o) {
          case "bottom":
            return "start";

          case "top":
            return "end";

          case "zero":
            return "origin";

          case "origin":
          case "start":
          case "end":
            return o;

          default:
            return !1;
        }
      }

      function l(t) {
        var e,
            i = t.el._model || {},
            n = t.el._scale || {},
            a = t.fill,
            o = null;
        if (isFinite(a)) return null;

        if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
          if (void 0 !== o.x && void 0 !== o.y) return o;
          if ("number" == typeof o && isFinite(o)) return {
            x: (e = n.isHorizontal()) ? o : null,
            y: e ? null : o
          };
        }

        return null;
      }

      function u(t, e, i) {
        var n,
            a = t[e].fill,
            o = [e];
        if (!i) return a;

        for (; !1 !== a && -1 === o.indexOf(a);) {
          if (!isFinite(a)) return a;
          if (!(n = t[a])) return !1;
          if (n.visible) return a;
          o.push(a), a = n.fill;
        }

        return !1;
      }

      function d(t) {
        return t && !t.skip;
      }

      function c(t, e, i, n, a) {
        var r;

        if (n && a) {
          for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) {
            o.canvas.lineTo(t, e[r - 1], e[r]);
          }

          for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) {
            o.canvas.lineTo(t, i[r], i[r - 1], !0);
          }
        }
      }

      e.exports = {
        id: "filler",
        afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
          var i,
              n,
              o,
              d,
              c,
              h,
              f,
              g = (t.data.datasets || []).length,
              p = e.propagate,
              m = [];

          for (n = 0; n < g; ++n) {
            d = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof a.Line && (d = {
              visible: t.isDatasetVisible(n),
              fill: s(o, n, g),
              chart: t,
              el: o
            }), i.$filler = d, m.push(d);
          }

          for (n = 0; n < g; ++n) {
            (d = m[n]) && (d.fill = u(m, n, p), d.boundary = l(d), d.mapper = (void 0, f = void 0, h = (c = d).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), r[f](c))));
          }
        },
        beforeDatasetDraw: function beforeDatasetDraw(t, e) {
          var i = e.meta.$filler;

          if (i) {
            var a = t.ctx,
                r = i.el,
                s = r._view,
                l = r._children || [],
                u = i.mapper,
                h = s.backgroundColor || n.global.defaultColor;
            u && h && l.length && (o.canvas.clipArea(a, t.chartArea), function (t, e, i, n, a, o) {
              var r,
                  s,
                  l,
                  u,
                  h,
                  f,
                  g,
                  p = e.length,
                  m = n.spanGaps,
                  v = [],
                  b = [],
                  x = 0,
                  y = 0;

              for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) {
                h = i(u = e[l = r % p]._view, l, n), f = d(u), g = d(h), f && g ? (x = v.push(u), y = b.push(h)) : x && y && (m ? (f && v.push(u), g && b.push(h)) : (c(t, v, b, x, y), x = y = 0, v = [], b = []));
              }

              c(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
            }(a, l, u, s, h, r._loop), o.canvas.unclipArea(a));
          }
        }
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    51: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(30),
          s = o.noop;

      function l(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
      }

      n._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var i = e.datasetIndex,
                n = this.chart,
                a = n.getDatasetMeta(i);
            a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return o.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                return {
                  text: e.label,
                  fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(i),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var i = 0; i < t.data.datasets.length; i++) {
            e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      });

      var u = a.extend({
        initialize: function initialize(t) {
          o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: function buildLabels() {
          var t = this,
              e = t.options.labels || {},
              i = o.callback(e.generateLabels, [t.chart], t) || [];
          e.filter && (i = i.filter(function (i) {
            return e.filter(i, t.chart.data);
          })), t.options.reverse && i.reverse(), t.legendItems = i;
        },
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = e.display,
              r = t.ctx,
              s = n.global,
              u = o.valueOrDefault,
              d = u(i.fontSize, s.defaultFontSize),
              c = u(i.fontStyle, s.defaultFontStyle),
              h = u(i.fontFamily, s.defaultFontFamily),
              f = o.fontString(d, c, h),
              g = t.legendHitBoxes = [],
              p = t.minSize,
              m = t.isHorizontal();
          if (m ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a) if (r.font = f, m) {
            var v = t.lineWidths = [0],
                b = t.legendItems.length ? d + i.padding : 0;
            r.textAlign = "left", r.textBaseline = "top", o.each(t.legendItems, function (e, n) {
              var a = l(i, d) + d / 2 + r.measureText(e.text).width;
              v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), g[n] = {
                left: 0,
                top: 0,
                width: a,
                height: d
              }, v[v.length - 1] += a + i.padding;
            }), p.height += b;
          } else {
            var x = i.padding,
                y = t.columnWidths = [],
                k = i.padding,
                M = 0,
                w = 0,
                S = d + x;
            o.each(t.legendItems, function (t, e) {
              var n = l(i, d) + d / 2 + r.measureText(t.text).width;
              w + S > p.height && (k += M + i.padding, y.push(M), M = 0, w = 0), M = Math.max(M, n), w += S, g[e] = {
                left: 0,
                top: 0,
                width: n,
                height: d
              };
            }), k += M, y.push(M), p.width += k;
          }
          t.width = p.width, t.height = p.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function draw() {
          var t = this,
              e = t.options,
              i = e.labels,
              a = n.global,
              r = a.elements.line,
              s = t.width,
              u = t.lineWidths;

          if (e.display) {
            var d,
                c = t.ctx,
                h = o.valueOrDefault,
                f = h(i.fontColor, a.defaultFontColor),
                g = h(i.fontSize, a.defaultFontSize),
                p = h(i.fontStyle, a.defaultFontStyle),
                m = h(i.fontFamily, a.defaultFontFamily),
                v = o.fontString(g, p, m);
            c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
            var b = l(i, g),
                x = t.legendHitBoxes,
                y = t.isHorizontal();
            d = y ? {
              x: t.left + (s - u[0]) / 2,
              y: t.top + i.padding,
              line: 0
            } : {
              x: t.left + i.padding,
              y: t.top + i.padding,
              line: 0
            };
            var k = g + i.padding;
            o.each(t.legendItems, function (n, l) {
              var f,
                  p,
                  m,
                  v,
                  M,
                  w = c.measureText(n.text).width,
                  S = b + g / 2 + w,
                  C = d.x,
                  _ = d.y;
              y ? C + S >= s && (_ = d.y += k, d.line++, C = d.x = t.left + (s - u[d.line]) / 2) : _ + k > t.bottom && (C = d.x = C + t.columnWidths[d.line] + i.padding, _ = d.y = t.top + i.padding, d.line++), function (t, i, n) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, r.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), c.lineJoin = h(n.lineJoin, r.borderJoinStyle), c.lineWidth = h(n.lineWidth, r.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
                  var s = 0 === h(n.lineWidth, r.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                    var l = g * Math.SQRT2 / 2,
                        u = l / Math.SQRT2,
                        d = t + u,
                        f = i + u;
                    o.canvas.drawPoint(c, n.pointStyle, l, d, f);
                  } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);

                  c.restore();
                }
              }(C, _, n), x[l].left = C, x[l].top = _, f = n, p = w, v = b + (m = g / 2) + C, M = _ + m, c.fillText(f.text, v, M), f.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()), y ? d.x += S + i.padding : d.y += k;
            });
          }
        },
        handleEvent: function handleEvent(t) {
          var e = this,
              i = e.options,
              n = "mouseup" === t.type ? "click" : t.type,
              a = !1;

          if ("mousemove" === n) {
            if (!i.onHover) return;
          } else {
            if ("click" !== n) return;
            if (!i.onClick) return;
          }

          var o = t.x,
              r = t.y;
          if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
            var u = s[l];

            if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
              if ("click" === n) {
                i.onClick.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }

              if ("mousemove" === n) {
                i.onHover.call(e, t["native"], e.legendItems[l]), a = !0;
                break;
              }
            }
          }
          return a;
        }
      });

      function d(t, e) {
        var i = new u({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        r.configure(t, i, e), r.addBox(t, i), t.legend = i;
      }

      e.exports = {
        id: "legend",
        _element: u,
        beforeInit: function beforeInit(t) {
          var e = t.options.legend;
          e && d(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.legend,
              i = t.legend;
          e ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.legend);
        },
        afterEvent: function afterEvent(t, e) {
          var i = t.legend;
          i && i.handleEvent(e);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    52: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(26),
          o = t(45),
          r = t(30),
          s = o.noop;

      n._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });

      var l = a.extend({
        initialize: function initialize(t) {
          o.extend(this, t), this.legendHitBoxes = [];
        },
        beforeUpdate: s,
        update: function update(t, e, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: s,
        beforeSetDimensions: s,
        setDimensions: function setDimensions() {
          var t = this;
          t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: s,
        beforeBuildLabels: s,
        buildLabels: s,
        afterBuildLabels: s,
        beforeFit: s,
        fit: function fit() {
          var t = this,
              e = o.valueOrDefault,
              i = t.options,
              a = i.display,
              r = e(i.fontSize, n.global.defaultFontSize),
              s = t.minSize,
              l = o.isArray(i.text) ? i.text.length : 1,
              u = o.options.toLineHeight(i.lineHeight, r),
              d = a ? l * u + 2 * i.padding : 0;
          t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height;
        },
        afterFit: s,
        isHorizontal: function isHorizontal() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function draw() {
          var t = this,
              e = t.ctx,
              i = o.valueOrDefault,
              a = t.options,
              r = n.global;

          if (a.display) {
            var s,
                l,
                u,
                d = i(a.fontSize, r.defaultFontSize),
                c = i(a.fontStyle, r.defaultFontStyle),
                h = i(a.fontFamily, r.defaultFontFamily),
                f = o.fontString(d, c, h),
                g = o.options.toLineHeight(a.lineHeight, d),
                p = g / 2 + a.padding,
                m = 0,
                v = t.top,
                b = t.left,
                x = t.bottom,
                y = t.right;
            e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = v + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = v + (x - v) / 2, s = x - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
            var k = a.text;
            if (o.isArray(k)) for (var M = 0, w = 0; w < k.length; ++w) {
              e.fillText(k[w], 0, M, s), M += g;
            } else e.fillText(k, 0, 0, s);
            e.restore();
          }
        }
      });

      function u(t, e) {
        var i = new l({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i;
      }

      e.exports = {
        id: "title",
        _element: l,
        beforeInit: function beforeInit(t) {
          var e = t.options.title;
          e && u(t, e);
        },
        beforeUpdate: function beforeUpdate(t) {
          var e = t.options.title,
              i = t.titleBlock;
          e ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    }],
    53: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        var e = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e = this,
                i = e.getLabels();
            e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this,
                n = i.chart.data,
                a = i.isHorizontal();
            return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var i,
                n = this,
                a = n.options.offset,
                o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);

            if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
              t = i || t;
              var r = n.getLabels().indexOf(t);
              e = -1 !== r ? r : e;
            }

            if (n.isHorizontal()) {
              var s = n.width / o,
                  l = s * (e - n.minIndex);
              return a && (l += s / 2), n.left + Math.round(l);
            }

            var u = n.height / o,
                d = u * (e - n.minIndex);
            return a && (d += u / 2), n.top + Math.round(d);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.options.offset,
                n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                a = e.isHorizontal(),
                o = (a ? e.width : e.height) / n;
            return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        });
      };
    }, {}],
    54: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: o.formatters.linear
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                n = i.data.datasets,
                o = t.isHorizontal();

            function r(e) {
              return o ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null;
            var s = e.stacked;

            if (void 0 === s && a.each(n, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              a.each(n, function (n, o) {
                var s = i.getDatasetMeta(o),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = l[u].positiveValues,
                    c = l[u].negativeValues;
                i.isDatasetVisible(o) && r(s) && a.each(n.data, function (i, n) {
                  var a = +t.getRightValue(i);
                  isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a);
                });
              }), a.each(l, function (e) {
                var i = e.positiveValues.concat(e.negativeValues),
                    n = a.min(i),
                    o = a.max(i);
                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o);
              });
            } else a.each(n, function (e, n) {
              var o = i.getDatasetMeta(n);
              i.isDatasetVisible(n) && r(o) && a.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n));
              });
            });

            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this.options.ticks;
            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));else {
              var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
              t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e = this,
                i = e.start,
                n = +e.getRightValue(t),
                a = e.end - i;
            return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e.isHorizontal(),
                n = i ? e.width : e.height,
                a = (i ? t - e.left : e.bottom - t) / n;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, e);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    55: [function (t, e, i) {
      "use strict";

      var n = t(45);

      e.exports = function (t) {
        var e = n.noop;
        t.LinearScaleBase = t.Scale.extend({
          getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var i = n.sign(t.min),
                  a = n.sign(t.max);
              i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0);
            }

            var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = t.getTickLimit(),
                a = {
              maxTicks: i = Math.max(2, i),
              min: e.min,
              max: e.max,
              stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                o = t.ticks = function (t, e) {
              var i,
                  a = [];
              if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var o = n.niceNum(e.max - e.min, !1);
                i = n.niceNum(o / (t.maxTicks - 1), !0);
              }
              var r = Math.floor(e.min / i) * i,
                  s = Math.ceil(e.max / i) * i;
              t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
              var l = (s - r) / i;
              l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
              var u = 1;
              i < 1 && (u = Math.pow(10, i.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : r);

              for (var d = 1; d < l; ++d) {
                a.push(Math.round((r + d * i) * u) / u);
              }

              return a.push(void 0 !== t.max ? t.max : s), a;
            }(a, t);

            t.handleDirectionalChanges(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {
      45: 45
    }],
    56: [function (t, e, i) {
      "use strict";

      var n = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.options,
                i = t.chart,
                a = i.data.datasets,
                o = t.isHorizontal();

            function r(e) {
              return o ? e.xAxisID === t.id : e.yAxisID === t.id;
            }

            t.min = null, t.max = null, t.minNotZero = null;
            var s = e.stacked;

            if (void 0 === s && n.each(a, function (t, e) {
              if (!s) {
                var n = i.getDatasetMeta(e);
                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0);
              }
            }), e.stacked || s) {
              var l = {};
              n.each(a, function (a, o) {
                var s = i.getDatasetMeta(o),
                    u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                i.isDatasetVisible(o) && r(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function (e, i) {
                  var n = l[u],
                      a = +t.getRightValue(e);
                  isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a);
                }));
              }), n.each(l, function (e) {
                if (e.length > 0) {
                  var i = n.min(e),
                      a = n.max(e);
                  t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a);
                }
              });
            } else n.each(a, function (e, a) {
              var o = i.getDatasetMeta(a);
              i.isDatasetVisible(a) && r(o) && n.each(e.data, function (e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || o.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
              });
            });

            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks,
                i = n.valueOrDefault;
            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1);
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                i = !t.isHorizontal(),
                a = {
              min: e.min,
              max: e.max
            },
                o = t.ticks = function (t, e) {
              var i,
                  a,
                  o = [],
                  r = n.valueOrDefault,
                  s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                  l = Math.floor(n.log10(e.max)),
                  u = Math.ceil(e.max / Math.pow(10, l));
              0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));

              for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; o.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;) {
                ;
              }

              var c = r(t.max, s);
              return o.push(c), o;
            }(a, t);

            t.max = n.max(o), t.min = n.min(o), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && o.reverse();
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          _getFirstTickValue: function _getFirstTickValue(t) {
            var e = Math.floor(n.log10(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          },
          getPixelForValue: function getPixelForValue(e) {
            var i,
                a,
                o,
                r,
                s,
                l = this,
                u = l.options.ticks.reverse,
                d = n.log10,
                c = l._getFirstTickValue(l.minNotZero),
                h = 0;

            return e = +l.getRightValue(e), u ? (o = l.end, r = l.start, s = -1) : (o = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== o && (0 === o && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = c), 0 !== e && (h += i / (d(r) - d(o)) * (d(e) - d(o))), a += s * h), a;
          },
          getValueForPixel: function getValueForPixel(e) {
            var i,
                a,
                o,
                r,
                s = this,
                l = s.options.ticks.reverse,
                u = n.log10,
                d = s._getFirstTickValue(s.minNotZero);

            if (l ? (a = s.end, o = s.start) : (a = s.start, o = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== a) {
              if (0 === a) {
                var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                r -= c, i -= c, a = d;
              }

              r *= u(o) - u(a), r /= i, r = Math.pow(10, u(a) + r);
            }

            return r;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, e);
      };
    }, {
      34: 34,
      45: 45
    }],
    57: [function (t, e, i) {
      "use strict";

      var n = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        var e = n.global,
            i = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: o.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        };

        function r(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function s(t) {
          var i = t.options.pointLabels,
              n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
              o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
              r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
          return {
            size: n,
            style: o,
            family: r,
            font: a.fontString(n, o, r)
          };
        }

        function l(t, e, i, n, a) {
          return t === n || t === a ? {
            start: e - i / 2,
            end: e + i / 2
          } : t < n || t > a ? {
            start: e - i - 5,
            end: e
          } : {
            start: e,
            end: e + i + 5
          };
        }

        function u(t, e, i, n) {
          if (a.isArray(e)) for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) {
            t.fillText(e[s], i.x, o), o += r;
          } else t.fillText(e, i.x, i.y);
        }

        function d(t) {
          return a.isNumber(t) ? t : 0;
        }

        var c = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                i = t.options,
                n = i.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var o = a.min([t.height, t.width]),
                r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
            t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                i = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
            a.each(e.data.datasets, function (o, r) {
              if (e.isDatasetVisible(r)) {
                var s = e.getDatasetMeta(r);
                a.each(o.data, function (e, a) {
                  var o = +t.getRightValue(e);
                  isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n));
                });
              }
            }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            var t, e;
            this.options.pointLabels.display ? function (t) {
              var e,
                  i,
                  n,
                  o = s(t),
                  u = Math.min(t.height / 2, t.width / 2),
                  d = {
                r: t.width,
                l: 0,
                t: t.height,
                b: 0
              },
                  c = {};
              t.ctx.font = o.font, t._pointLabelSizes = [];
              var h,
                  f,
                  g,
                  p = r(t);

              for (e = 0; e < p; e++) {
                n = t.getPointPosition(e, u), h = t.ctx, f = o.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? {
                  w: a.longestText(h, h.font, g),
                  h: g.length * f + 1.5 * (g.length - 1) * f
                } : {
                  w: h.measureText(g).width,
                  h: f
                }, t._pointLabelSizes[e] = i;
                var m = t.getIndexAngle(e),
                    v = a.toDegrees(m) % 360,
                    b = l(v, n.x, i.w, 0, 180),
                    x = l(v, n.y, i.h, 90, 270);
                b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), x.start < d.t && (d.t = x.start, c.t = m), x.end > d.b && (d.b = x.end, c.b = m);
              }

              t.setReductions(u, d, c);
            }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function setReductions(t, e, i) {
            var n = e.l / Math.sin(i.l),
                a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                o = -e.t / Math.cos(i.t),
                r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
            n = d(n), a = d(a), o = d(o), r = d(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r);
          },
          setCenterPoint: function setCenterPoint(t, e, i, n) {
            var a = this,
                o = a.width - e - a.drawingArea,
                r = t + a.drawingArea,
                s = i + a.drawingArea,
                l = a.height - n - a.drawingArea;
            a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var i = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
          },
          getPointPosition: function getPointPosition(t, e) {
            var i = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * e) + this.xCenter,
              y: Math.round(Math.sin(i) * e) + this.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this.min,
                e = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
          },
          draw: function draw() {
            var t = this,
                i = t.options,
                n = i.gridLines,
                o = i.ticks,
                l = a.valueOrDefault;

            if (i.display) {
              var d = t.ctx,
                  c = this.getIndexAngle(0),
                  h = l(o.fontSize, e.defaultFontSize),
                  f = l(o.fontStyle, e.defaultFontStyle),
                  g = l(o.fontFamily, e.defaultFontFamily),
                  p = a.fontString(h, f, g);
              a.each(t.ticks, function (i, s) {
                if (s > 0 || o.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);

                  if (n.display && 0 !== s && function (t, e, i, n) {
                    var o = t.ctx;
                    if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();else {
                      var s = r(t);
                      if (0 === s) return;
                      o.beginPath();
                      var l = t.getPointPosition(0, i);
                      o.moveTo(l.x, l.y);

                      for (var u = 1; u < s; u++) {
                        l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
                      }

                      o.closePath(), o.stroke();
                    }
                  }(t, n, u, s), o.display) {
                    var f = l(o.fontColor, e.defaultFontColor);

                    if (d.font = p, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop) {
                      var g = d.measureText(i).width;
                      d.fillStyle = o.backdropColor, d.fillRect(-g / 2 - o.backdropPaddingX, -u - h / 2 - o.backdropPaddingY, g + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY);
                    }

                    d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore();
                  }
                }
              }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                var i = t.ctx,
                    n = t.options,
                    o = n.angleLines,
                    l = n.pointLabels;
                i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
                var d,
                    c,
                    h,
                    f,
                    g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                    p = s(t);
                i.textBaseline = "top";

                for (var m = r(t) - 1; m >= 0; m--) {
                  if (o.display) {
                    var v = t.getPointPosition(m, g);
                    i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath();
                  }

                  if (l.display) {
                    var b = t.getPointPosition(m, g + 5),
                        x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                    i.font = p.font, i.fillStyle = x;
                    var y = t.getIndexAngle(m),
                        k = a.toDegrees(y);
                    i.textAlign = 0 === (f = k) || 180 === f ? "center" : f < 180 ? "left" : "right", d = k, c = t._pointLabelSizes[m], h = b, 90 === d || 270 === d ? h.y -= c.h / 2 : (d > 270 || d < 90) && (h.y -= c.h), u(i, t.pointLabels[m] || "", b, p.size);
                  }
                }
              }(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", c, i);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    58: [function (t, e, i) {
      "use strict";

      var n = t(1);
      n = "function" == typeof n ? n : window.moment;
      var a = t(25),
          o = t(45),
          r = Number.MIN_SAFE_INTEGER || -9007199254740991,
          s = Number.MAX_SAFE_INTEGER || 9007199254740991,
          l = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          u = Object.keys(l);

      function d(t, e) {
        return t - e;
      }

      function c(t) {
        var e,
            i,
            n,
            a = {},
            o = [];

        for (e = 0, i = t.length; e < i; ++e) {
          a[n = t[e]] || (a[n] = !0, o.push(n));
        }

        return o;
      }

      function h(t, e, i, n) {
        var a = function (t, e, i) {
          for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
            if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
              lo: null,
              hi: o
            };
            if (o[e] < i) r = n + 1;else {
              if (!(a[e] > i)) return {
                lo: a,
                hi: o
              };
              s = n - 1;
            }
          }

          return {
            lo: o,
            hi: null
          };
        }(t, e, i),
            o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = r[e] - o[e],
            l = s ? (i - o[e]) / s : 0,
            u = (r[n] - o[n]) * l;

        return o[n] + u;
      }

      function f(t, e) {
        var i = e.parser,
            a = e.parser || e.format;
        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t);
      }

      function g(t, e) {
        if (o.isNullOrUndef(t)) return null;
        var i = e.options.time,
            n = f(e.getRightValue(t), i);
        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
      }

      function p(t) {
        for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) {
          if (l[u[e]].common) return u[e];
        }
      }

      function m(t, e, i, a) {
        var r,
            d = a.time,
            c = d.unit || function (t, e, i, n) {
          var a,
              o,
              r,
              d = u.length;

          for (a = u.indexOf(t); a < d - 1; ++a) {
            if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
          }

          return u[d - 1];
        }(d.minUnit, t, e, i),
            h = p(c),
            f = o.valueOrDefault(d.stepSize, d.unitStepSize),
            g = "week" === c && d.isoWeekday,
            m = a.ticks.major.enabled,
            v = l[c],
            b = n(t),
            x = n(e),
            y = [];

        for (f || (f = function (t, e, i, n) {
          var a,
              o,
              r,
              s = e - t,
              u = l[i],
              d = u.size,
              c = u.steps;
          if (!c) return Math.ceil(s / (n * d));

          for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a) {
            ;
          }

          return r;
        }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c)); r < x; r.add(f, c)) {
          y.push(+r);
        }

        return y.push(+r), y;
      }

      e.exports = function (t) {
        var e = t.Scale.extend({
          initialize: function initialize() {
            if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          },
          update: function update() {
            var e = this.options;
            return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments);
          },
          getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                i,
                a,
                l,
                u,
                h = this,
                f = h.chart,
                p = h.options.time,
                m = p.unit || "day",
                v = s,
                b = r,
                x = [],
                y = [],
                k = [];

            for (t = 0, i = f.data.labels.length; t < i; ++t) {
              k.push(g(f.data.labels[t], h));
            }

            for (t = 0, i = (f.data.datasets || []).length; t < i; ++t) {
              if (f.isDatasetVisible(t)) {
                if (l = f.data.datasets[t].data, o.isObject(l[0])) for (y[t] = [], e = 0, a = l.length; e < a; ++e) {
                  u = g(l[e], h), x.push(u), y[t][e] = u;
                } else x.push.apply(x, k), y[t] = k.slice(0);
              } else y[t] = [];
            }

            k.length && (k = c(k).sort(d), v = Math.min(v, k[0]), b = Math.max(b, k[k.length - 1])), x.length && (x = c(x).sort(d), v = Math.min(v, x[0]), b = Math.max(b, x[x.length - 1])), v = g(p.min, h) || v, b = g(p.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === r ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
              data: x,
              datasets: y,
              labels: k
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                i,
                a,
                o,
                r,
                s,
                d,
                c,
                v,
                b,
                x,
                y = this,
                k = y.min,
                M = y.max,
                w = y.options,
                S = w.time,
                C = [],
                _ = [];

            switch (w.ticks.source) {
              case "data":
                C = y._timestamps.data;
                break;

              case "labels":
                C = y._timestamps.labels;
                break;

              case "auto":
              default:
                C = m(k, M, y.getLabelCapacity(k), w);
            }

            for ("ticks" === w.bounds && C.length && (k = C[0], M = C[C.length - 1]), k = g(S.min, y) || k, M = g(S.max, y) || M, t = 0, e = C.length; t < e; ++t) {
              (i = C[t]) >= k && i <= M && _.push(i);
            }

            return y.min = k, y.max = M, y._unit = S.unit || function (t, e, i, a) {
              var o,
                  r,
                  s = n.duration(n(a).diff(n(i)));

              for (o = u.length - 1; o >= u.indexOf(e); o--) {
                if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
              }

              return u[e ? u.indexOf(e) : 0];
            }(_, S.minUnit, y.min, y.max), y._majorUnit = p(y._unit), y._table = function (t, e, i, n) {
              if ("linear" === n || !t.length) return [{
                time: e,
                pos: 0
              }, {
                time: i,
                pos: 1
              }];
              var a,
                  o,
                  r,
                  s,
                  l,
                  u = [],
                  d = [e];

              for (a = 0, o = t.length; a < o; ++a) {
                (s = t[a]) > e && s < i && d.push(s);
              }

              for (d.push(i), a = 0, o = d.length; a < o; ++a) {
                l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                  time: s,
                  pos: a / (o - 1)
                });
              }

              return u;
            }(y._timestamps.data, k, M, w.distribution), y._offsets = (a = y._table, o = _, r = k, s = M, b = 0, x = 0, (d = w).offset && o.length && (d.time.min || (c = o.length > 1 ? o[1] : s, v = o[0], b = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2), d.time.max || (c = o[o.length - 1], v = o.length > 1 ? o[o.length - 2] : r, x = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2)), {
              left: b,
              right: x
            }), y._labelFormat = function (t, e) {
              var i,
                  n,
                  a,
                  o = t.length;

              for (i = 0; i < o; i++) {
                if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0);
              }

              return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(y._timestamps.data, S), function (t, e) {
              var i,
                  a,
                  o,
                  r,
                  s = [];

              for (i = 0, a = t.length; i < a; ++i) {
                o = t[i], r = !!e && o === +n(o).startOf(e), s.push({
                  value: o,
                  major: r
                });
              }

              return s;
            }(_, y._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var i = this.chart.data,
                n = this.options.time,
                a = i.labels && t < i.labels.length ? i.labels[t] : "",
                r = i.datasets[e].data[t];
            return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat);
          },
          tickFormatFunction: function tickFormatFunction(t, e, i, n) {
            var a = this.options,
                r = t.valueOf(),
                s = a.time.displayFormats,
                l = s[this._unit],
                u = this._majorUnit,
                d = s[u],
                c = t.clone().startOf(u).valueOf(),
                h = a.ticks.major,
                f = h.enabled && u && d && r === c,
                g = t.format(n || (f ? d : l)),
                p = f ? h : a.ticks.minor,
                m = o.valueOrDefault(p.callback, p.userCallback);
            return m ? m(g, e, i) : g;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                i,
                a = [];

            for (e = 0, i = t.length; e < i; ++e) {
              a.push(this.tickFormatFunction(n(t[e].value), e, t));
            }

            return a;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                n = e._horizontal ? e.left : e.top,
                a = h(e._table, "time", t, "pos");
            return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                i = e._horizontal ? e.width : e.height,
                a = e._horizontal ? e.left : e.top,
                o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                r = h(e._table, "pos", o, "time");
            return n(r);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this.options.ticks,
                i = this.ctx.measureText(t).width,
                n = o.toRadians(e.maxRotation),
                r = Math.cos(n),
                s = Math.sin(n);
            return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                i = e.options.time.displayFormats.millisecond,
                a = e.tickFormatFunction(n(t), 0, [], i),
                o = e.getLabelWidth(a),
                r = e.isHorizontal() ? e.width : e.height,
                s = Math.floor(r / o);
            return s > 0 ? s : 1;
          }
        });
        t.scaleService.registerScaleType("time", e, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      25: 25,
      45: 45
    }]
  }, {}, [7])(7);
});

/***/ }),

/***/ "./resources/js/vendor/clipboard/dist/clipboard.min.js":
/*!*************************************************************!*\
  !*** ./resources/js/vendor/clipboard/dist/clipboard.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t;
    }, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: o
      });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 3);
  }([function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
    }(0, function (t, e) {
      "use strict";

      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      var o = function (t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }(e),
          r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(),
          a = function () {
        function t(e) {
          n(this, t), this.resolveOptions(e), this.initSelection();
        }

        return i(t, [{
          key: "resolveOptions",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
          }
        }, {
          key: "initSelection",
          value: function value() {
            this.text ? this.selectFake() : this.target && this.selectTarget();
          }
        }, {
          key: "selectFake",
          value: function value() {
            var t = this,
                e = "rtl" == document.documentElement.getAttribute("dir");
            this.removeFake(), this.fakeHandlerCallback = function () {
              return t.removeFake();
            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
            var n = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText();
          }
        }, {
          key: "removeFake",
          value: function value() {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
          }
        }, {
          key: "selectTarget",
          value: function value() {
            this.selectedText = (0, o["default"])(this.target), this.copyText();
          }
        }, {
          key: "copyText",
          value: function value() {
            var t = void 0;

            try {
              t = document.execCommand(this.action);
            } catch (e) {
              t = !1;
            }

            this.handleResult(t);
          }
        }, {
          key: "handleResult",
          value: function value(t) {
            this.emitter.emit(t ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
        }, {
          key: "clearSelection",
          value: function value() {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
          }
        }, {
          key: "destroy",
          value: function value() {
            this.removeFake();
          }
        }, {
          key: "action",
          set: function set() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          },
          get: function get() {
            return this._action;
          }
        }, {
          key: "target",
          set: function set(t) {
            if (void 0 !== t) {
              if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
              if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
              if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              this._target = t;
            }
          },
          get: function get() {
            return this._target;
          }
        }]), t;
      }();

      t.exports = a;
    });
  }, function (t, e, n) {
    function o(t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!c.string(e)) throw new TypeError("Second argument must be a String");
      if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
      if (c.node(t)) return r(t, e, n);
      if (c.nodeList(t)) return i(t, e, n);
      if (c.string(t)) return a(t, e, n);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    }

    function r(t, e, n) {
      return t.addEventListener(e, n), {
        destroy: function destroy() {
          t.removeEventListener(e, n);
        }
      };
    }

    function i(t, e, n) {
      return Array.prototype.forEach.call(t, function (t) {
        t.addEventListener(e, n);
      }), {
        destroy: function destroy() {
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener(e, n);
          });
        }
      };
    }

    function a(t, e, n) {
      return u(document.body, t, e, n);
    }

    var c = n(6),
        u = n(5);
    t.exports = o;
  }, function (t, e) {
    function n() {}

    n.prototype = {
      on: function on(t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this;
      },
      once: function once(t, e, n) {
        function o() {
          r.off(t, o), e.apply(n, arguments);
        }

        var r = this;
        return o._ = e, this.on(t, o, n);
      },
      emit: function emit(t) {
        var e = [].slice.call(arguments, 1),
            n = ((this.e || (this.e = {}))[t] || []).slice(),
            o = 0,
            r = n.length;

        for (o; o < r; o++) {
          n[o].fn.apply(n[o].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
        if (o && e) for (var i = 0, a = o.length; i < a; i++) {
          o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        }
        return r.length ? n[t] = r : delete n[t], this;
      }
    }, t.exports = n;
  }, function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i);
    }(0, function (t, e, n, o) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
      }

      function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }

      function u(t, e) {
        var n = "data-clipboard-" + t;
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }

      var l = r(e),
          s = r(n),
          f = r(o),
          d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      },
          h = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        return function (e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        };
      }(),
          p = function (t) {
        function e(t, n) {
          i(this, e);
          var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return o.resolveOptions(n), o.listenClick(t), o;
        }

        return c(e, t), h(e, [{
          key: "resolveOptions",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body;
          }
        }, {
          key: "listenClick",
          value: function value(t) {
            var e = this;
            this.listener = (0, f["default"])(t, "click", function (t) {
              return e.onClick(t);
            });
          }
        }, {
          key: "onClick",
          value: function value(t) {
            var e = t.delegateTarget || t.currentTarget;
            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l["default"]({
              action: this.action(e),
              target: this.target(e),
              text: this.text(e),
              container: this.container,
              trigger: e,
              emitter: this
            });
          }
        }, {
          key: "defaultAction",
          value: function value(t) {
            return u("action", t);
          }
        }, {
          key: "defaultTarget",
          value: function value(t) {
            var e = u("target", t);
            if (e) return document.querySelector(e);
          }
        }, {
          key: "defaultText",
          value: function value(t) {
            return u("text", t);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
          }
        }], [{
          key: "isSupported",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                e = "string" == typeof t ? [t] : t,
                n = !!document.queryCommandSupported;
            return e.forEach(function (t) {
              n = n && !!document.queryCommandSupported(t);
            }), n;
          }
        }]), e;
      }(s["default"]);

      t.exports = p;
    });
  }, function (t, e) {
    function n(t, e) {
      for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode;
      }
    }

    var o = 9;

    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var r = Element.prototype;
      r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
    }

    t.exports = n;
  }, function (t, e, n) {
    function o(t, e, n, o, r) {
      var a = i.apply(this, arguments);
      return t.addEventListener(n, a, r), {
        destroy: function destroy() {
          t.removeEventListener(n, a, r);
        }
      };
    }

    function r(t, e, n, r, i) {
      return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return o(t, e, n, r, i);
      }));
    }

    function i(t, e, n, o) {
      return function (n) {
        n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n);
      };
    }

    var a = n(4);
    t.exports = r;
  }, function (t, e) {
    e.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, e.nodeList = function (t) {
      var n = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
    }, e.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, e.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e) {
    function n(t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
            r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }
      return e;
    }

    t.exports = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/vendor/jquery/dist/jquery.min.js":
/*!*******************************************************!*\
  !*** ./resources/js/vendor/jquery/dist/jquery.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return w;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\short\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\laragon\www\short\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });