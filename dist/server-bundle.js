module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

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



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

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
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
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
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

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

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

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

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
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

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
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
	},

	now: Date.now,

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
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
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

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

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

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
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
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

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

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
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
						disabledAncestor( elem ) === disabled;
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
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
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

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
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
		} catch (e) {}
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
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
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
			var i = argument < 0 ? argument + length : argument;
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

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
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

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
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
							if ( jQuery.isFunction( this[ match ] ) ) {
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
		} else if ( jQuery.isFunction( selector ) ) {
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
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
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
			locked = options.once;

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
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

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

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
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
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
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
									if ( jQuery.isFunction( then ) ) {

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
								jQuery.isFunction( onProgress ) ?
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
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
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

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
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
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

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

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

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
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
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
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
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
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

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
								name = jQuery.camelCase( name.slice( 5 ) );
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
				if ( !queue || jQuery.isArray( data ) ) {
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
			jQuery.contains( elem.ownerDocument, elem ) &&

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
	var adjusted,
		scale = 1,
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
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
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

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



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

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
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
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

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

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
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
var documentElement = document.documentElement;



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

// Support: IE <=9 only
// See #13393 for more info
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

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

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

			get: jQuery.isFunction( hook ) ?
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
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
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
	this.timeStamp = src && src.timeStamp || jQuery.now();

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

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
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
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
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

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
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
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
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
			inPage = jQuery.contains( elem.ownerDocument, elem );

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
var rmargin = ( /^margin/ );

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



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
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

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

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


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

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

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
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
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

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
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
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
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

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

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
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
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
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

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
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
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
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
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
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

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
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
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
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

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
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
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
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
		if ( jQuery.isFunction( props ) ) {
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
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
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
		if ( jQuery.isFunction( opt.old ) ) {
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

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
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
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
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
					jQuery.nodeName( elem, "input" ) ) {
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
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

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

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

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
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

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
		var hooks, ret, isFunction,
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

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
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
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

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
			if ( jQuery.isArray( value ) ) {
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


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

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
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

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
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
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




support.focusin = "onfocusin" in window;


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

var nonce = jQuery.now();

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

	if ( jQuery.isArray( obj ) ) {

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

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

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
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

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

			if ( jQuery.isArray( val ) ) {
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

		if ( jQuery.isFunction( func ) ) {

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
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
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

			// Support: IE <=8 - 11, Edge 12 - 13
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

			// If data is available, append data to url
			if ( s.data ) {
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
		if ( jQuery.isFunction( data ) ) {
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


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
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
		if ( jQuery.isFunction( html ) ) {
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
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
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
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

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
				errorCallback = xhr.onerror = callback( "error" );

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

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

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
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
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
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
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
	if ( jQuery.isFunction( params ) ) {

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




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

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

		if ( jQuery.isFunction( options ) ) {

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
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
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
			var win = getWindow( elem );

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

				if ( jQuery.isWindow( elem ) ) {

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

jQuery.parseJSON = JSON.parse;




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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VeeValidate"] = factory();
	else
		root["VeeValidate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getDataAttribute; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return getScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return isObject; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Gets the data attribute. the name must be kebab-case.
 */
var getDataAttribute = function getDataAttribute(el, name) {
    return el.getAttribute('data-vv-' + name);
};

/**
 * Determines the input field scope.
 */
var getScope = function getScope(el) {
    var scope = getDataAttribute(el, 'scope');
    if (!scope && el.form) {
        scope = getDataAttribute(el.form, 'scope');
    }

    return scope;
};

/**
 * Debounces a function.
 */
var debounce = function debounce(func) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var execAsap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!threshold) {
        return func;
    }

    var timeout = void 0;

    return function debounced(_ref) {
        var _ref2 = _toArray(_ref);

        var args = _ref2;

        var obj = this;

        function delayed() {
            if (!execAsap) {
                func.apply(obj, args);
            }
            timeout = null;
        }

        if (timeout) {
            clearTimeout(timeout);
        } else if (execAsap) {
            func.apply.apply(func, [obj].concat(_toConsumableArray(args)));
        }

        timeout = setTimeout(delayed, threshold || 100);
    };
};

/**
 * Emits a warning to the console.
 */
var warn = function warn(message) {
    if (!console) {
        return;
    }

    console.warn('[vee-validate]: ' + message); // eslint-disable-line
};

/**
 * Checks if the value is an object.
 */
// eslint-disable-next-line
var isObject = function isObject(object) {
    return object !== null && object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !Array.isArray(object);
};

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorBag = function () {
    function ErrorBag() {
        _classCallCheck(this, ErrorBag);

        this.errors = [];
    }

    /**
     * Adds an error to the internal array.
     *
     * @param {string} field The field name.
     * @param {string} msg The error message.
     * @param {String} rule The rule that is responsible for the error.
     * @param {String} scope The Scope name, optional.
     */


    _createClass(ErrorBag, [{
        key: 'add',
        value: function add(field, msg, rule) {
            var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

            this.errors.push({ field: field, msg: msg, rule: rule, scope: scope });
        }

        /**
         * Gets all error messages from the internal array.
         *
         * @param {String} scope The Scope name, optional.
         * @return {Array} errors Array of all error messages.
         */

    }, {
        key: 'all',
        value: function all(scope) {
            if (scope) {
                return this.errors.filter(function (e) {
                    return e.scope === scope;
                }).map(function (e) {
                    return e.msg;
                });
            }

            return this.errors.map(function (e) {
                return e.msg;
            });
        }

        /**
         * Checks if there are any errors in the internal array.
         * @param {String} scope The Scope name, optional.
         * @return {boolean} result True if there was at least one error, false otherwise.
         */

    }, {
        key: 'any',
        value: function any(scope) {
            if (scope) {
                return !!this.errors.filter(function (e) {
                    return e.scope === scope;
                }).length;
            }

            return !!this.errors.length;
        }

        /**
         * Removes all items from the internal array.
         *
         * @param {String} scope The Scope name, optional.
         */

    }, {
        key: 'clear',
        value: function clear(scope) {
            if (scope) {
                this.errors = this.errors.filter(function (e) {
                    return e.scope !== scope;
                });

                return;
            }

            this.errors = [];
        }

        /**
         * Collects errors into groups or for a specific field.
         *
         * @param  {string} field The field name.
         * @param  {string} scope The scope name.
         * @param {Boolean} map If it should map the errors to strings instead of objects.
         * @return {Array} errors The errors for the specified field.
         */

    }, {
        key: 'collect',
        value: function collect(field, scope) {
            var _this = this;

            var map = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (!field) {
                var _ret = function () {
                    var collection = {};
                    _this.errors.forEach(function (e) {
                        if (!collection[e.field]) {
                            collection[e.field] = [];
                        }

                        collection[e.field].push(map ? e.msg : e);
                    });

                    return {
                        v: collection
                    };
                }();

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }

            if (scope) {
                return this.errors.filter(function (e) {
                    return e.field === field && e.scope === scope;
                }).map(function (e) {
                    return map ? e.msg : e;
                });
            }

            return this.errors.filter(function (e) {
                return e.field === field;
            }).map(function (e) {
                return map ? e.msg : e;
            });
        }
        /**
         * Gets the internal array length.
         *
         * @return {Number} length The internal array length.
         */

    }, {
        key: 'count',
        value: function count() {
            return this.errors.length;
        }

        /**
         * Gets the first error message for a specific field.
         *
         * @param  {string} field The field name.
         * @return {string|null} message The error message.
         */

    }, {
        key: 'first',
        value: function first(field, scope) {
            var selector = this.selector(field);

            if (selector) {
                return this.firstByRule(selector.name, selector.rule, scope);
            }

            for (var i = 0; i < this.errors.length; i++) {
                if (this.errors[i].field === field && (!scope || this.errors[i].scope === scope)) {
                    return this.errors[i].msg;
                }
            }

            return null;
        }

        /**
         * Checks if the internal array has at least one error for the specified field.
         *
         * @param  {string} field The specified field.
         * @return {Boolean} result True if at least one error is found, false otherwise.
         */

    }, {
        key: 'has',
        value: function has(field, scope) {
            return !!this.first(field, scope);
        }

        /**
         * Gets the first error message for a specific field and a rule.
         * @param {String} name The name of the field.
         * @param {String} rule The name of the rule.
         * @param {String} scope The name of the scope (optional).
         */

    }, {
        key: 'firstByRule',
        value: function firstByRule(name, rule, scope) {
            var error = this.collect(name, scope, false).filter(function (e) {
                return e.rule === rule;
            })[0];

            return error && error.msg || null;
        }

        /**
         * Removes all error messages associated with a specific field.
         *
         * @param  {string} field The field which messages are to be removed.
         * @param {String} scope The Scope name, optional.
         */

    }, {
        key: 'remove',
        value: function remove(field, scope) {
            if (scope) {
                this.errors = this.errors.filter(function (e) {
                    return e.field !== field || e.scope !== scope;
                });

                return;
            }

            this.errors = this.errors.filter(function (e) {
                return e.field !== field;
            });
        }

        /**
         * Get the field attributes if there's a rule selector.
         *
         * @param  {string} field The specified field.
         * @return {Object|null}
         */

    }, {
        key: 'selector',
        value: function selector(field) {
            if (field.indexOf(':') > -1) {
                var _field$split = field.split(':');

                var _field$split2 = _slicedToArray(_field$split, 2);

                var name = _field$split2[0];
                var rule = _field$split2[1];


                return { name: name, rule: rule };
            }

            return null;
        }
    }]);

    return ErrorBag;
}();

/* harmony default export */ exports["a"] = ErrorBag;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return unregister; });
/* unused harmony export find */


/**
 * Keeps track of $vm, $validator instances.
 * @type {Array}
 */
var instances = [];

/**
 * Finds a validator instance from the instances array.
 * @param  {[type]} $vm The Vue instance.
 * @return {object} pair the $vm,$validator pair.
 */
var find = function find($vm) {
    for (var i = 0; i < instances.length; i++) {
        if (instances[i].$vm === $vm) {
            return instances[i].$validator;
        }
    }

    return undefined;
};

/**
 * Registers a validator for a $vm instance.
 * @param  {*} $vm The Vue instance.
 * @return {Validator} $validator The validator instance.
 */
var register = function register($vm) {
    var instance = find($vm);
    if (!instance) {
        instance = __WEBPACK_IMPORTED_MODULE_0__validator__["a" /* default */].create(undefined, $vm);

        instances.push({
            $vm: $vm,
            $validator: instance
        });
    }

    return instance;
};

var unregister = function unregister($vm) {
    for (var i = 0; i < instances.length; i++) {
        if (instances[i].$vm === $vm) {
            instances.splice(i, 1);

            return true;
        }
    }

    return false;
};



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rules__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errorBag__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_validatorException__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dictionary__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugins_date__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fieldBag__ = __webpack_require__(12);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var LOCALE = 'en';
var STRICT_MODE = true;
var dictionary = new __WEBPACK_IMPORTED_MODULE_3__dictionary__["a" /* default */]({
    en: {
        messages: __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */],
        attributes: {}
    }
});

var Validator = function () {
    function Validator(validations, $vm) {
        _classCallCheck(this, Validator);

        this.strictMode = STRICT_MODE;
        this.$fields = {};
        this.fieldBag = new __WEBPACK_IMPORTED_MODULE_7__fieldBag__["a" /* default */]();
        this._createFields(validations);
        this.errorBag = new __WEBPACK_IMPORTED_MODULE_1__errorBag__["a" /* default */]();
        this.$vm = $vm;

        // if momentjs is present, install the validators.
        if (typeof moment === 'function') {
            // eslint-disable-next-line
            this.installDateTimeValidators(moment);
        }
    }

    /**
     * Merges a validator object into the Rules and Messages.
     *
     * @param  {string} name The name of the validator.
     * @param  {function|object} validator The validator object.
     */


    _createClass(Validator, [{
        key: '_resolveValuesFromGetters',


        /**
         * Resolves the field values from the getter functions.
         */
        value: function _resolveValuesFromGetters(scope) {
            var _this = this;

            var values = {};
            Object.keys(this.$fields).forEach(function (field) {
                var getter = _this.$fields[field].getter;
                var context = _this.$fields[field].context;
                var fieldScope = typeof _this.$fields[field].scope === 'function' ? _this.$fields[field].scope() : undefined;

                if (getter && context && (!scope || fieldScope === scope)) {
                    values[field] = {
                        value: getter(context()),
                        scope: fieldScope
                    };
                }
            });

            return values;
        }

        /**
         * Creates the fields to be validated.
         *
         * @param  {object} validations
         * @return {object} Normalized object.
         */

    }, {
        key: '_createFields',
        value: function _createFields(validations) {
            var _this2 = this;

            if (!validations) {
                return;
            }

            Object.keys(validations).forEach(function (field) {
                _this2._createField(field, validations[field]);
            });
        }

        /**
         * Creates a field entry in the fields object.
         * @param {String} name.
         * @param {String} Checks.
         */

    }, {
        key: '_createField',
        value: function _createField(name, checks) {
            var _this3 = this;

            if (!this.$fields[name]) {
                this.$fields[name] = {};
            }

            this.fieldBag._add(name);
            this.$fields[name].validations = [];

            if (Array.isArray(checks)) {
                this.$fields[name].validations = checks;

                return;
            }

            checks.split('|').forEach(function (rule) {
                var normalizedRule = _this3._normalizeRule(rule, _this3.$fields[name].validations);
                if (!normalizedRule.name) {
                    return;
                }

                if (normalizedRule.name === 'required') {
                    _this3.$fields[name].required = true;
                }

                _this3.$fields[name].validations.push(normalizedRule);
            });
        }

        /**
         * Normalizes a single validation object.
         *
         * @param  {string} rule The rule to be normalized.
         * @return {object} rule The normalized rule.
         */

    }, {
        key: '_normalizeRule',
        value: function _normalizeRule(rule, validations) {
            var params = [];
            var name = rule.split(':')[0];

            if (~rule.indexOf(':')) {
                params = rule.split(':').slice(1).join(':').split(',');
            }

            // Those rules need the date format to parse and compare correctly.
            if (__WEBPACK_IMPORTED_MODULE_6__plugins_date__["a" /* default */].installed && ~['after', 'before', 'date_between'].indexOf(name)) {
                var dateFormat = validations.filter(function (v) {
                    return v.name === 'date_format';
                })[0];
                if (dateFormat) {
                    // pass it as the last param.
                    params.push(dateFormat.params[0]);
                }
            }

            return { name: name, params: params };
        }

        /**
         * Formats an error message for field and a rule.
         *
         * @param  {string} field The field name.
         * @param  {object} rule Normalized rule object.
         * @param {object} data Additional Information about the validation result.
         * @return {string} msg Formatted error message.
         */

    }, {
        key: '_formatErrorMessage',
        value: function _formatErrorMessage(field, rule) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var name = this._getFieldDisplayName(field);
            var params = this._getLocalizedParams(rule);

            if (!dictionary.hasLocale(LOCALE) || typeof dictionary.getMessage(LOCALE, rule.name) !== 'function') {
                // Default to english message.
                return dictionary.getMessage('en', rule.name)(name, params, data);
            }

            return dictionary.getMessage(LOCALE, rule.name)(name, params, data);
        }

        /**
         * Translates the parameters passed to the rule (mainly for target fields).
         */

    }, {
        key: '_getLocalizedParams',
        value: function _getLocalizedParams(rule) {
            if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
                return [dictionary.getAttribute(LOCALE, rule.params[0], rule.params[0])];
            }

            return rule.params;
        }

        /**
         * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
         * Then the dictionary, then fallsback to field name.
         * @return {String} displayName The name to be used in the errors.
         */

    }, {
        key: '_getFieldDisplayName',
        value: function _getFieldDisplayName(field) {
            return this.$fields[field].name || dictionary.getAttribute(LOCALE, field, field);
        }

        /**
         * Tests a single input value against a rule.
         *
         * @param  {*} name The name of the field.
         * @param  {*} value  [description]
         * @param  {object} rule the rule object.
         * @return {boolean} Whether it passes the check.
         */

    }, {
        key: '_test',
        value: function _test(name, value, rule, scope) {
            var _this4 = this;

            var validator = __WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */][rule.name];
            if (!validator || typeof validator !== 'function') {
                throw new __WEBPACK_IMPORTED_MODULE_2__exceptions_validatorException__["a" /* default */]('No such validator \'' + rule.name + '\' exists.');
            }

            var result = validator(value, rule.params, name);

            // If it is a promise.
            if (typeof result.then === 'function') {
                return result.then(function (values) {
                    var allValid = true;
                    var data = {};
                    if (Array.isArray(values)) {
                        allValid = values.every(function (t) {
                            return t.valid;
                        });
                    } else {
                        // Is a single object.
                        allValid = values.valid;
                        data = values.data;
                    }

                    if (!allValid) {
                        _this4.errorBag.add(name, _this4._formatErrorMessage(name, rule, data), rule.name, scope);
                    }

                    return allValid;
                });
            }

            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_helpers__["a" /* isObject */])(result)) {
                result = { valid: result, data: {} };
            }

            if (!result.valid) {
                this.errorBag.add(name, this._formatErrorMessage(name, rule, result.data), rule.name, scope);
            }

            return result.valid;
        }

        /**
         * Registers a field to be validated.
         *
         * @param  {string} name The field name.
         * @param  {string} checks validations expression.
         * @param {string} prettyName Custom name to be used as field name in error messages.
         * @param {Function} getter A function used to retrive a fresh value for the field.
         */

    }, {
        key: 'attach',
        value: function attach(name, checks) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            this.errorBag.remove(name);
            this._createField(name, checks);
            this.$fields[name].scope = options.scope;
            this.$fields[name].name = options.prettyName;
            this.$fields[name].getter = options.getter;
            this.$fields[name].context = options.context;
            this.$fields[name].listeners = options.listeners || {
                detach: function detach() {}
            };
        }

        /**
         * Removes a field from the validator.
         *
         * @param  {String} name The name of the field.
         * @param {String} scope The name of the field scope.
         */

    }, {
        key: 'detach',
        value: function detach(name, scope) {
            // No such field.
            if (!this.$fields[name]) {
                return;
            }

            this.$fields[name].listeners.detach();
            this.errorBag.remove(name, scope);
            this.fieldBag._remove(name);
            delete this.$fields[name];
        }

        /**
         * Adds a custom validator to the list of validation rules.
         *
         * @param  {string} name The name of the validator.
         * @param  {object|function} validator The validator object/function.
         */

    }, {
        key: 'extend',
        value: function extend(name, validator) {
            Validator.extend(name, validator);
        }

        /**
         * Gets the internal errorBag instance.
         *
         * @return {ErrorBag} errorBag The internal error bag object.
         */

    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errorBag;
        }

        /**
         * Gets the currently active locale.
         *
         * @return {String} Locale identifier.
         */

    }, {
        key: 'getLocale',
        value: function getLocale() {
            return LOCALE;
        }

        /**
         * Just an alias to the static method for convienece.
         */

    }, {
        key: 'installDateTimeValidators',
        value: function installDateTimeValidators(moment) {
            Validator.installDateTimeValidators(moment);
        }

        /**
         * Removes a rule from the list of validators.
         * @param {String} name The name of the validator/rule.
         */

    }, {
        key: 'remove',
        value: function remove(name) {
            Validator.remove(name);
        }

        /**
         * Sets the validator current langauge.
         *
         * @param {string} language locale or language id.
         */

    }, {
        key: 'setLocale',
        value: function setLocale(language) {
            /* istanbul ignore if */
            if (!dictionary.hasLocale(language)) {
                // eslint-disable-next-line
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_helpers__["b" /* warn */])('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
            }

            LOCALE = language;
        }

        /**
         * Sets the operating mode for this validator.
         * strictMode = true: Values without a rule are invalid and cause failure.
         * strictMode = false: Values without a rule are valid and are skipped.
         * @param {Boolean} strictMode.
         */

    }, {
        key: 'setStrictMode',
        value: function setStrictMode() {
            var strictMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.strictMode = strictMode;
        }

        /**
         * Updates the messages dicitionary, overwriting existing values and adding new ones.
         *
         * @param  {object} data The messages object.
         */

    }, {
        key: 'updateDictionary',
        value: function updateDictionary(data) {
            Validator.updateDictionary(data);
        }

        /**
         * Validates a value against a registered field validations.
         *
         * @param  {string} name the field name.
         * @param  {*} value The value to be validated.
         * @return {boolean|Promise} result returns a boolean or a promise that will resolve to
         *  a boolean.
         */

    }, {
        key: 'validate',
        value: function validate(name, value, scope) {
            var _this5 = this;

            if (!this.$fields[name]) {
                if (!this.strictMode) {
                    return true;
                }
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_helpers__["b" /* warn */])('Trying to validate a non-existant field: "' + name + '". Use "attach()" first.');

                return false;
            }

            this.errorBag.remove(name, scope);
            // if its not required and is empty or null or undefined then it passes.
            if (!this.$fields[name].required && ~[null, undefined, ''].indexOf(value)) {
                return true;
            }

            var test = true;
            var promises = [];
            this.$fields[name].validations.forEach(function (rule) {
                var result = _this5._test(name, value, rule, scope);
                if (typeof result.then === 'function') {
                    promises.push(result);
                    return;
                }

                test = test && result;
            });

            if (promises.length) {
                return Promise.all(promises).then(function (values) {
                    var valid = values.every(function (t) {
                        return t;
                    }) && test;
                    _this5.fieldBag._setFlags(name, { valid: valid, dirty: true });

                    return valid;
                });
            }

            this.fieldBag._setFlags(name, { valid: test, dirty: true });

            return test;
        }

        /**
         * Validates each value against the corresponding field validations.
         * @param  {object} values The values to be validated.
         * @return {Promise} Returns a promise with the validation result.
         */

    }, {
        key: 'validateAll',
        value: function validateAll(values) {
            var _this6 = this;

            var normalizedValues = void 0;
            if (!values) {
                normalizedValues = this._resolveValuesFromGetters();
                this.errorBag.clear();
            } else if (typeof values === 'string') {
                this.errorBag.clear(values);
                normalizedValues = this._resolveValuesFromGetters(values);
            } else {
                normalizedValues = {};
                Object.keys(values).forEach(function (key) {
                    normalizedValues[key] = {
                        value: values[key]
                    };
                });
            }

            var test = true;
            var promises = [];
            Object.keys(normalizedValues).forEach(function (property) {
                var result = _this6.validate(property, normalizedValues[property].value, normalizedValues[property].scope);
                if (typeof result.then === 'function') {
                    promises.push(result);
                    return;
                }

                test = test && result;
            });

            return Promise.all(promises).then(function (vals) {
                var valid = vals.every(function (t) {
                    return t;
                }) && test;

                return valid;
            });
        }
    }], [{
        key: '_merge',
        value: function _merge(name, validator) {
            if (typeof validator === 'function') {
                __WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */][name] = validator;
                dictionary.setMessage('en', name, function (field) {
                    return 'The ' + field + ' value is not valid.';
                });
                return;
            }

            __WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */][name] = validator.validate;

            if (validator.getMessage && typeof validator.getMessage === 'function') {
                dictionary.setMessage('en', name, validator.getMessage);
            }

            if (validator.messages) {
                dictionary.merge(Object.keys(validator.messages).reduce(function (prev, curr) {
                    var dict = prev;
                    dict[curr] = {
                        messages: _defineProperty({}, name, validator.messages[curr])
                    };

                    return dict;
                }, {}));
            }
        }

        /**
         * Guards from extnsion violations.
         *
         * @param  {string} name name of the validation rule.
         * @param  {object} validator a validation rule object.
         */

    }, {
        key: '_guardExtend',
        value: function _guardExtend(name, validator) {
            if (__WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */][name]) {
                throw new __WEBPACK_IMPORTED_MODULE_2__exceptions_validatorException__["a" /* default */]('Extension Error: There is an existing validator with the same name \'' + name + '\'.');
            }

            if (typeof validator === 'function') {
                return;
            }

            if (typeof validator.validate !== 'function') {
                throw new __WEBPACK_IMPORTED_MODULE_2__exceptions_validatorException__["a" /* default */](
                // eslint-disable-next-line
                'Extension Error: The validator \'' + name + '\' must be a function or have a \'validate\' method.');
            }

            if (typeof validator.getMessage !== 'function' && _typeof(validator.messages) !== 'object') {
                throw new __WEBPACK_IMPORTED_MODULE_2__exceptions_validatorException__["a" /* default */](
                // eslint-disable-next-line
                'Extension Error: The validator \'' + name + '\' must have a \'getMessage\' method or have a \'messages\' object.');
            }
        }

        /**
         * Static constructor.
         *
         * @param  {object} validations The validations object.
         * @return {Validator} validator A validator object.
         */

    }, {
        key: 'create',
        value: function create(validations, $vm) {
            return new Validator(validations, $vm);
        }

        /**
         * Adds a custom validator to the list of validation rules.
         *
         * @param  {string} name The name of the validator.
         * @param  {object|function} validator The validator object/function.
         */

    }, {
        key: 'extend',
        value: function extend(name, validator) {
            Validator._guardExtend(name, validator);
            Validator._merge(name, validator);
        }

        /**
         * Installs the datetime validators and the messages.
         */

    }, {
        key: 'installDateTimeValidators',
        value: function installDateTimeValidators(moment) {
            if (typeof moment !== 'function') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_helpers__["b" /* warn */])('To use the date-time validators you must provide moment reference.');

                return false;
            }

            if (__WEBPACK_IMPORTED_MODULE_6__plugins_date__["a" /* default */].installed) {
                return true;
            }

            var validators = __WEBPACK_IMPORTED_MODULE_6__plugins_date__["a" /* default */].make(moment);
            Object.keys(validators).forEach(function (name) {
                Validator.extend(name, validators[name]);
            });

            Validator.updateDictionary({
                en: {
                    messages: __WEBPACK_IMPORTED_MODULE_6__plugins_date__["a" /* default */].messages
                }
            });
            __WEBPACK_IMPORTED_MODULE_6__plugins_date__["a" /* default */].installed = true;

            return true;
        }

        /**
         * Removes a rule from the list of validators.
         * @param {String} name The name of the validator/rule.
         */

    }, {
        key: 'remove',
        value: function remove(name) {
            delete __WEBPACK_IMPORTED_MODULE_0__rules__["a" /* default */][name];
        }

        /**
         * Sets the default locale for all validators.
         *
         * @param {String} language The locale id.
         */

    }, {
        key: 'setLocale',
        value: function setLocale() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

            /* istanbul ignore if */
            if (!dictionary.hasLocale(language)) {
                // eslint-disable-next-line
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_helpers__["b" /* warn */])('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
            }

            LOCALE = language;
        }

        /**
         * Sets the operating mode for all newly created validators.
         * strictMode = true: Values without a rule are invalid and cause failure.
         * strictMode = false: Values without a rule are valid and are skipped.
         * @param {Boolean} strictMode.
         */

    }, {
        key: 'setStrictMode',
        value: function setStrictMode() {
            var strictMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            STRICT_MODE = strictMode;
        }

        /**
         * Updates the dicitionary, overwriting existing values and adding new ones.
         *
         * @param  {object} data The dictionary object.
         */

    }, {
        key: 'updateDictionary',
        value: function updateDictionary(data) {
            dictionary.merge(data);
        }
    }]);

    return Validator;
}();

/* harmony default export */ exports["a"] = Validator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(2);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listeners__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helpers__ = __webpack_require__(1);



var listenersInstances = [];

/* harmony default export */ exports["a"] = function (options) {
    return {
        bind: function bind(el, binding, vnode) {
            var listener = new __WEBPACK_IMPORTED_MODULE_0__listeners__["a" /* default */](el, binding, vnode, options);
            listener.attach();
            listenersInstances.push({ vm: vnode.context, el: el, instance: listener });
        },
        update: function update(el, _ref, _ref2) {
            var expression = _ref.expression;
            var value = _ref.value;
            var modifiers = _ref.modifiers;
            var oldValue = _ref.oldValue;
            var context = _ref2.context;

            if (!expression || value === oldValue) {
                return;
            }

            var holder = listenersInstances.filter(function (l) {
                return l.vm === context && l.el === el;
            })[0];
            context.$validator.validate(holder.instance.fieldName, value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_helpers__["d" /* getScope */])(el));
        },
        unbind: function unbind(el, binding, _ref3) {
            var context = _ref3.context;

            var holder = listenersInstances.filter(function (l) {
                return l.vm === context && l.el === el;
            })[0];
            context.$validator.detach(holder.instance.fieldName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_helpers__["d" /* getScope */])(el));
            listenersInstances.splice(listenersInstances.indexOf(holder), 1);
        }
    };
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_maps__ = __webpack_require__(4);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ exports["a"] = function (options) {
    return {
        data: function data() {
            return _defineProperty({}, options.errorBagName, this.$validator.errorBag);
        },

        computed: _defineProperty({}, options.fieldsBagName, {
            get: function get() {
                return this.$validator.fieldBag;
            }
        }),
        mounted: function mounted() {
            this.$emit('validatorReady');
        },
        destroyed: function destroyed() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_maps__["a" /* unregister */])(this);
        }
    };
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable prefer-rest-params */


var Dictionary = function () {
    function Dictionary() {
        var dictionary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Dictionary);

        this.dictionary = {};
        this.merge(dictionary);
    }

    _createClass(Dictionary, [{
        key: 'hasLocale',
        value: function hasLocale(locale) {
            return !!this.dictionary[locale];
        }
    }, {
        key: 'getMessage',
        value: function getMessage(locale, key) {
            var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!this.hasMessage(locale, key)) {
                return fallback;
            }

            return this.dictionary[locale].messages[key];
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(locale, key) {
            var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!this.hasAttribute(locale, key)) {
                return fallback;
            }

            return this.dictionary[locale].attributes[key];
        }
    }, {
        key: 'hasMessage',
        value: function hasMessage(locale, key) {
            return !!(this.hasLocale(locale) && this.dictionary[locale].messages && this.dictionary[locale].messages[key]);
        }
    }, {
        key: 'hasAttribute',
        value: function hasAttribute(locale, key) {
            return !!(this.hasLocale(locale) && this.dictionary[locale].attributes && this.dictionary[locale].attributes[key]);
        }
    }, {
        key: 'merge',
        value: function merge(dictionary) {
            this._merge(this.dictionary, dictionary);
        }
    }, {
        key: 'setMessage',
        value: function setMessage(locale, key, message) {
            if (!this.hasLocale(locale)) {
                this.dictionary[locale] = {
                    messages: {},
                    attributes: {}
                };
            }

            this.dictionary[locale].messages[key] = message;
        }
    }, {
        key: 'setAttribute',
        value: function setAttribute(locale, key, attribute) {
            if (!this.hasLocale(locale)) {
                this.dictionary[locale] = {
                    messages: {},
                    attributes: {}
                };
            }

            this.dictionary[locale].attributes[key] = attribute;
        }
    }, {
        key: '_merge',
        value: function _merge(target, source) {
            var _this = this;

            if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* isObject */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* isObject */])(source))) {
                return target;
            }

            Object.keys(source).forEach(function (key) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* isObject */])(source[key])) {
                    if (!target[key]) {
                        _extends(target, _defineProperty({}, key, {}));
                    }

                    _this._merge(target[key], source[key]);
                    return;
                }

                _extends(target, _defineProperty({}, key, source[key]));
            });

            return target;
        }
    }]);

    return Dictionary;
}();

/* harmony default export */ exports["a"] = Dictionary;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(msg) {
        _classCallCheck(this, _class);

        this.msg = "[vee-validate]: " + msg;
    }

    _createClass(_class, [{
        key: "toString",
        value: function toString() {
            return this.msg;
        }
    }]);

    return _class;
}();

/* harmony default export */ exports["a"] = _class;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldBag = function () {
    function FieldBag() {
        _classCallCheck(this, FieldBag);

        this.fields = {};
    }

    /**
     * Initializes and adds a new field to the bag.
     */


    _createClass(FieldBag, [{
        key: '_add',
        value: function _add(name) {
            this.fields[name] = {};
            this._setFlags(name, { dirty: false, valid: false }, true);
        }

        /**
         * Remooves a field from the bag.
         */

    }, {
        key: '_remove',
        value: function _remove(name) {
            delete this.fields[name];
        }

        /**
         * Resets the flags state for a specified field or all fields.
         */

    }, {
        key: 'reset',
        value: function reset(name) {
            var _this = this;

            if (!name) {
                Object.keys(this.fields).forEach(function (field) {
                    _this._setFlags(field, { dirty: false, valid: false }, true);
                });

                return;
            }

            this._setFlags(name, { dirty: false, valid: false }, true);
        }

        /**
         * Sets the flags for a specified field.
         */

    }, {
        key: '_setFlags',
        value: function _setFlags(name, flags) {
            var _this2 = this;

            var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            return Object.keys(flags).every(function (flag) {
                return _this2._setFlag(name, flag, flags[flag], initial);
            });
        }

        /**
         * Sets a flag for a specified field.
         */

    }, {
        key: '_setFlag',
        value: function _setFlag(name, flag, value) {
            var initial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var method = 'set' + flag.charAt(0).toUpperCase() + flag.slice(1);
            if (typeof this[method] !== 'function') {
                return false;
            }

            this[method](name, value, initial);

            return true;
        }

        /**
         * Sets the dirty flag along with dependant flags.
         */

    }, {
        key: 'setDirty',
        value: function setDirty(name, value) {
            var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.fields[name].dirty = value;
            this.fields[name].clean = initial || !value;
            this.fields[name].passed = this.fields[name].valid && value;
            this.fields[name].failed = !this.fields[name].valid && value;
        }

        /**
         * Sets the valid flag along with dependant flags.
         */

    }, {
        key: 'setValid',
        value: function setValid(name, value) {
            this.fields[name].valid = value;
            this.fields[name].passed = this.fields[name].dirty && value;
            this.fields[name].failed = this.fields[name].dirty && !value;
        }

        /**
         * Gets a field flag value.
         */

    }, {
        key: '_getFieldFlag',
        value: function _getFieldFlag(name, flag) {
            if (this.fields[name]) {
                return this.fields[name][flag];
            }

            return false;
        }
    }, {
        key: 'dirty',
        value: function dirty(name) {
            var _this3 = this;

            if (!name) {
                return Object.keys(this.fields).some(function (field) {
                    return _this3.fields[field].dirty;
                });
            }

            return this._getFieldFlag(name, 'dirty');
        }
    }, {
        key: 'valid',
        value: function valid(name) {
            var _this4 = this;

            if (!name) {
                return Object.keys(this.fields).every(function (field) {
                    return _this4.fields[field].valid;
                });
            }

            return this._getFieldFlag(name, 'valid');
        }
    }, {
        key: 'passed',
        value: function passed(name) {
            var _this5 = this;

            if (!name) {
                return Object.keys(this.fields).every(function (field) {
                    return _this5.fields[field].passed;
                });
            }

            return this._getFieldFlag(name, 'passed');
        }
    }, {
        key: 'failed',
        value: function failed(name) {
            var _this6 = this;

            if (!name) {
                return Object.keys(this.fields).some(function (field) {
                    return _this6.fields[field].failed;
                });
            }

            return this._getFieldFlag(name, 'failed');
        }
    }, {
        key: 'clean',
        value: function clean(name) {
            if (!name) {
                return !this.dirty();
            }

            return this._getFieldFlag(name, 'clean');
        }
    }]);

    return FieldBag;
}();

/* harmony default export */ exports["a"] = FieldBag;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ListenerGenerator = function () {
    function ListenerGenerator(el, binding, vnode, options) {
        _classCallCheck(this, ListenerGenerator);

        this.callbacks = [];
        this.el = el;
        this.binding = binding;
        this.vm = vnode.context;
        this.component = vnode.child;
        this.options = options;
        this.fieldName = this._resolveFieldName();
    }

    /**
     * Resolves the field name to trigger validations.
     * @return {String} The field name.
     */


    _createClass(ListenerGenerator, [{
        key: '_resolveFieldName',
        value: function _resolveFieldName() {
            if (this.component) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'name') || this.component.name;
            }

            return this.el.name || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'name');
        }

        /**
         * Determines if the validation rule requires additional listeners on target fields.
         */

    }, {
        key: '_hasFieldDependency',
        value: function _hasFieldDependency(rules) {
            var _this = this;

            var fieldName = false;
            rules.split('|').every(function (r) {
                if (/\b(confirmed|after|before):/.test(r)) {
                    fieldName = r.split(':')[1];
                    return false;
                }

                if (/\b(confirmed)/.test(r)) {
                    fieldName = _this.fieldName + '_confirmation';
                    return false;
                }

                return true;
            });

            return fieldName;
        }

        /**
         * Validates input value, triggered by 'input' event.
         */

    }, {
        key: '_inputListener',
        value: function _inputListener() {
            this._validate(this.el.value);
        }

        /**
         * Validates files, triggered by 'change' event.
         */

    }, {
        key: '_fileListener',
        value: function _fileListener() {
            var isValid = this._validate(this.el.files);

            if (!isValid && this.binding.modifiers.reject) {
                this.el.value = '';
            }
        }

        /**
         * Validates radio buttons, triggered by 'change' event.
         */

    }, {
        key: '_radioListener',
        value: function _radioListener() {
            var checked = document.querySelector('input[name="' + this.el.name + '"]:checked');
            this._validate(checked ? checked.value : null);
        }

        /**
         * Validates checkboxes, triggered by change event.
         */

    }, {
        key: '_checkboxListener',
        value: function _checkboxListener() {
            var _this2 = this;

            var checkedBoxes = document.querySelectorAll('input[name="' + this.el.name + '"]:checked');
            if (!checkedBoxes || !checkedBoxes.length) {
                this._validate(null);
                return;
            }

            [].concat(_toConsumableArray(checkedBoxes)).forEach(function (box) {
                _this2._validate(box.value);
            });
        }

        /**
         * Trigger the validation for a specific value.
         */

    }, {
        key: '_validate',
        value: function _validate(value) {
            return this.vm.$validator.validate(this.fieldName, value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* getScope */])(this.el));
        }

        /**
         * Returns a scoped callback, only runs if the el scope is the same as the recieved scope
         * From the event.
         */

    }, {
        key: '_getScopedListener',
        value: function _getScopedListener(callback) {
            var _this3 = this;

            return function (scope) {
                if (!scope || scope === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* getScope */])(_this3.el) || scope instanceof Event) {
                    callback();
                }
            };
        }

        /**
         * Attaches validator event-triggered validation.
         */

    }, {
        key: '_attachValidatorEvent',
        value: function _attachValidatorEvent() {
            var _this4 = this;

            var listener = this._getScopedListener(this._getSuitableListener().listener.bind(this));
            var fieldName = this._hasFieldDependency(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'rules'));
            if (fieldName) {
                // Wait for the validator ready triggered when vm is mounted because maybe
                // the element isn't mounted yet.
                this.vm.$nextTick(function () {
                    var target = document.querySelector('input[name=\'' + fieldName + '\']');
                    if (!target) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["b" /* warn */])('Cannot find target field, no additional listeners were attached.');
                        return;
                    }

                    target.addEventListener('input', listener);
                    _this4.callbacks.push({ name: 'input', listener: listener, el: target });
                });
            }
        }

        /**
         * Determines a suitable listener for the element.
         */

    }, {
        key: '_getSuitableListener',
        value: function _getSuitableListener() {
            var listener = void 0;

            if (this.el.tagName === 'SELECT') {
                return {
                    names: ['change', 'blur'],
                    listener: this._inputListener
                };
            }

            // determine the suitable listener and events to handle
            switch (this.el.type) {
                case 'file':
                    listener = {
                        names: ['change'],
                        listener: this._fileListener
                    };
                    break;

                case 'radio':
                    listener = {
                        names: ['change'],
                        listener: this._radioListener
                    };
                    break;

                case 'checkbox':
                    listener = {
                        names: ['change'],
                        listener: this._checkboxListener
                    };
                    break;

                default:
                    listener = {
                        names: ['input', 'blur'],
                        listener: this._inputListener
                    };
                    break;
            }

            // users are able to specify which events they want to validate on
            // pipe separated list of handler names to use
            var events = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'validate-on');
            if (events) {
                listener.names = events.split('|');
            }

            return listener;
        }

        /**
         * Attaches neccessary validation events for the component.
         */

    }, {
        key: '_attachComponentListeners',
        value: function _attachComponentListeners() {
            var _this5 = this;

            this.component.$on('input', function (value) {
                _this5.vm.$validator.validate(_this5.fieldName, value);
            });
        }

        /**
         * Attachs a suitable listener for the input.
         */

    }, {
        key: '_attachFieldListeners',
        value: function _attachFieldListeners() {
            var _this6 = this;

            // If it is a component, use vue events instead.
            if (this.component) {
                this._attachComponentListeners();

                return;
            }

            var handler = this._getSuitableListener();
            var listener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["e" /* debounce */])(handler.listener.bind(this), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'delay') || this.options.delay);

            if (~['radio', 'checkbox'].indexOf(this.el.type)) {
                this.vm.$nextTick(function () {
                    [].concat(_toConsumableArray(document.querySelectorAll('input[name="' + _this6.el.name + '"]'))).forEach(function (input) {
                        handler.names.forEach(function (handlerName) {
                            input.addEventListener(handlerName, listener);
                            _this6.callbacks.push({ name: handlerName, listener: listener, el: input });
                        });
                    });
                });

                return;
            }

            handler.names.forEach(function (handlerName) {
                _this6.el.addEventListener(handlerName, listener);
                _this6.callbacks.push({ name: handlerName, listener: listener, el: _this6.el });
            });
        }

        /**
         * Returns a context, getter factory pairs for each input type.
         */

    }, {
        key: '_resolveValueGetter',
        value: function _resolveValueGetter() {
            var _this7 = this;

            if (this.component) {
                return {
                    context: function context() {
                        return _this7.component;
                    },
                    getter: function getter(context) {
                        return context[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(context.$el, 'value-path')] || context.value;
                    }
                };
            }

            switch (this.el.type) {
                case 'checkbox':
                    return {
                        context: function context() {
                            return document.querySelectorAll('input[name="' + _this7.el.name + '"]:checked');
                        },
                        getter: function getter(context) {
                            if (!context || !context.length) {
                                return null;
                            }

                            return [].concat(_toConsumableArray(context)).map(function (checkbox) {
                                return checkbox.value;
                            });
                        }
                    };
                case 'radio':
                    return {
                        context: function context() {
                            return document.querySelector('input[name="' + _this7.el.name + '"]:checked');
                        },
                        getter: function getter(context) {
                            return context && context.value;
                        }
                    };
                case 'file':
                    return {
                        context: function context() {
                            return _this7.el;
                        },
                        getter: function getter(context) {
                            return context.files;
                        }
                    };

                default:
                    return {
                        context: function context() {
                            return _this7.el;
                        },
                        getter: function getter(context) {
                            return context.value;
                        }
                    };
            }
        }

        /**
         * Attaches the Event Listeners.
         */

    }, {
        key: 'attach',
        value: function attach() {
            var _this8 = this;

            var _resolveValueGetter2 = this._resolveValueGetter();

            var context = _resolveValueGetter2.context;
            var getter = _resolveValueGetter2.getter;

            this.vm.$validator.attach(this.fieldName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'rules'), {
                scope: function scope() {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* getScope */])(_this8.el);
                },
                prettyName: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* getDataAttribute */])(this.el, 'as'),
                context: context,
                getter: getter,
                listeners: this
            });

            this._attachValidatorEvent();
            if (this.binding.expression) {
                // if its bound, validate it. (since update doesn't trigger after bind).
                if (!this.binding.modifiers.initial) {
                    this.vm.$validator.validate(this.fieldName, this.binding.value, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* getScope */])(this.el));
                }

                return;
            }

            this._attachFieldListeners();
        }

        /**
         * Removes all attached event listeners.
         */

    }, {
        key: 'detach',
        value: function detach() {
            this.callbacks.forEach(function (h) {
                h.el.removeEventListener(h.name, h.listener);
            });
        }
    }]);

    return ListenerGenerator;
}();

/* harmony default export */ exports["a"] = ListenerGenerator;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* istanbul ignore next */
/* eslint-disable max-len */
/* harmony default export */ exports["a"] = {
    alpha_dash: function alpha_dash(field) {
        return 'The ' + field + ' field may contain alpha-numeric characters as well as dashes and underscores.';
    },
    alpha_num: function alpha_num(field) {
        return 'The ' + field + ' field may only contain alpha-numeric characters.';
    },
    alpha_spaces: function alpha_spaces(field) {
        return 'The ' + field + ' field may only contain alphabetic characters as well as spaces.';
    },
    alpha: function alpha(field) {
        return 'The ' + field + ' field may only contain alphabetic characters.';
    },
    between: function between(field, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var min = _ref2[0];
        var max = _ref2[1];
        return 'The ' + field + ' field must be between ' + min + ' and ' + max + '.';
    },
    confirmed: function confirmed(field) {
        return 'The ' + field + ' confirmation does not match.';
    },
    credit_card: function credit_card(field) {
        return 'The ' + field + ' field is invalid.';
    },
    decimal: function decimal(field) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

        var _ref4 = _slicedToArray(_ref3, 1);

        var decimals = _ref4[0];
        return 'The ' + field + ' field must be numeric and may contain ' + (decimals === '*' ? '' : decimals) + ' decimal points.';
    },
    digits: function digits(field, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1);

        var length = _ref6[0];
        return 'The ' + field + ' field must be numeric and exactly contain ' + length + ' digits.';
    },
    dimensions: function dimensions(field, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 2);

        var width = _ref8[0];
        var height = _ref8[1];
        return 'The ' + field + ' field must be ' + width + ' pixels by ' + height + ' pixels.';
    },
    email: function email(field) {
        return 'The ' + field + ' field must be a valid email.';
    },
    ext: function ext(field) {
        return 'The ' + field + ' field must be a valid file.';
    },
    image: function image(field) {
        return 'The ' + field + ' field must be an image.';
    },
    in: function _in(field) {
        return 'The ' + field + ' field must be a valid value.';
    },
    ip: function ip(field) {
        return 'The ' + field + ' field must be a valid ip address.';
    },
    max: function max(field, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 1);

        var length = _ref10[0];
        return 'The ' + field + ' field may not be greater than ' + length + ' characters.';
    },
    max_value: function max_value(field, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1);

        var max = _ref12[0];
        return 'The ' + field + ' field must be ' + max + ' or less.';
    },
    mimes: function mimes(field) {
        return 'The ' + field + ' field must have a valid file type.';
    },
    min: function min(field, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 1);

        var length = _ref14[0];
        return 'The ' + field + ' field must be at least ' + length + ' characters.';
    },
    min_value: function min_value(field, _ref15) {
        var _ref16 = _slicedToArray(_ref15, 1);

        var min = _ref16[0];
        return 'The ' + field + ' field must be ' + min + ' or more.';
    },
    not_in: function not_in(field) {
        return 'The ' + field + ' field must be a valid value.';
    },
    numeric: function numeric(field) {
        return 'The ' + field + ' field may only contain numeric characters.';
    },
    regex: function regex(field) {
        return 'The ' + field + ' field format is invalid.';
    },
    required: function required(field) {
        return 'The ' + field + ' field is required.';
    },
    size: function size(field, _ref17) {
        var _ref18 = _slicedToArray(_ref17, 1);

        var _size = _ref18[0];
        return 'The ' + field + ' field must be less than ' + _size + ' KB.';
    },
    url: function url(field) {
        return 'The ' + field + ' field is not a valid URL.';
    }
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (moment) {
    return function (value, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var targetField = _ref2[0];
        var format = _ref2[1];

        var dateValue = moment(value, format, true);
        var field = document.querySelector("input[name='" + targetField + "']");

        if (!(dateValue.isValid() && field)) {
            return false;
        }

        var other = moment(field.value, format, true);

        if (!other.isValid()) {
            return false;
        }

        return dateValue.isAfter(other);
    };
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (moment) {
    return function (value, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var targetField = _ref2[0];
        var format = _ref2[1];

        var dateValue = moment(value, format, true);
        var field = document.querySelector("input[name='" + targetField + "']");

        if (!dateValue.isValid() || !field) {
            return false;
        }

        var other = moment(field.value, format, true);

        if (!other.isValid()) {
            return false;
        }

        return dateValue.isBefore(other);
    };
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (moment) {
    return function (value, _ref) {
        var _ref2 = _slicedToArray(_ref, 3);

        var min = _ref2[0];
        var max = _ref2[1];
        var format = _ref2[2];

        var minDate = moment(min, format, true);
        var maxDate = moment(max, format, true);
        var dateVal = moment(value, format, true);

        if (!(minDate.isValid() && maxDate.isValid() && dateVal.isValid())) {
            return false;
        }

        return dateVal.isBetween(minDate, maxDate);
    };
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (moment) {
  return function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var format = _ref2[0];
    return moment(value, format, true).isValid();
  };
};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__after__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__before__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_format__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_between__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages__ = __webpack_require__(20);


 // eslint-disable-line
 // eslint-disable-line


/* harmony default export */ exports["a"] = {
    make: function make(moment) {
        return {
            date_format: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__date_format__["a" /* default */])(moment),
            after: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__after__["a" /* default */])(moment),
            before: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__before__["a" /* default */])(moment),
            date_between: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__date_between__["a" /* default */])(moment)
        };
    },
    messages: __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */],
    installed: false
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* istanbul ignore next */
/* eslint-disable max-len */
/* harmony default export */ exports["a"] = {
    after: function after(field, _ref) {
        var _ref2 = _slicedToArray(_ref, 1);

        var target = _ref2[0];
        return "The " + field + " must be after " + target + ".";
    },
    before: function before(field, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1);

        var target = _ref4[0];
        return "The " + field + " must be before " + target + ".";
    },
    date_between: function date_between(field, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2);

        var min = _ref6[0];
        var max = _ref6[1];
        return "The " + field + " must be between " + min + " and " + max + ".";
    },
    date_format: function date_format(field, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1);

        var format = _ref8[0];
        return "The " + field + " must be in the format " + format + ".";
    }
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value) {
  return (/^[a-zA-Z]*$/.test(value)
  );
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value) {
  return (/^[a-zA-Z0-9_-]*$/.test(value)
  );
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value) {
  return (/^[a-zA-Z0-9]*$/.test(value)
  );
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value) {
  return (/^[a-zA-Z\s]*$/.test(value)
  );
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var min = _ref2[0];
  var max = _ref2[1];
  return Number(min) <= value && Number(max) >= value;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref, validatingField) {
    var _ref2 = _slicedToArray(_ref, 1);

    var confirmedField = _ref2[0];

    var field = confirmedField ? document.querySelector("input[name='" + confirmedField + "']") : document.querySelector("input[name='" + validatingField + "_confirmation']");

    return !!(field && String(value) === field.value);
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isCreditCard__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isCreditCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isCreditCard__);


/* harmony default export */ exports["a"] = function (value) {
  return __WEBPACK_IMPORTED_MODULE_0_validator_lib_isCreditCard___default()(String(value));
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

    var _ref2 = _slicedToArray(_ref, 1);

    var decimals = _ref2[0];

    if (Array.isArray(value)) {
        return false;
    }

    if (value === null || value === undefined || value === '') {
        return true;
    }

    // if is 0.
    if (Number(decimals) === 0) {
        return (/^-?\d*$/.test(value)
        );
    }

    var regexPart = decimals === '*' ? '+' : '{1,' + decimals + '}';
    var regex = new RegExp('^-?\\d*(\\.\\d' + regexPart + ')?$');

    if (!regex.test(value)) {
        return false;
    }

    return !Number.isNaN(parseFloat(value));
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var length = _ref2[0];

    var strVal = String(value);

    return (/^[0-9]*$/.test(strVal) && strVal.length === Number(length)
    );
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var validateImage = function validateImage(file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () {
            return resolve({ valid: false });
        };
        image.onload = function () {
            return resolve({
                valid: image.width === Number(width) && image.height === Number(height)
            });
        };

        image.src = URL.createObjectURL(file);
    });
};

/* harmony default export */ exports["a"] = function (files, _ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var width = _ref2[0];
    var height = _ref2[1];

    var list = [];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }

        list.push(files[i]);
    }

    return Promise.all(list.map(function (file) {
        return validateImage(file, width, height);
    }));
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);


/* harmony default export */ exports["a"] = function (value) {
  return __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(String(value));
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (files, extensions) {
    var regex = new RegExp('.(' + extensions.join('|') + ')$', 'i');
    for (var i = 0; i < files.length; i++) {
        if (!regex.test(files[i].name)) {
            return false;
        }
    }

    return true;
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (files) {
    for (var i = 0; i < files.length; i++) {
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }
    }

    return true;
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value, options) {
  return !!options.filter(function (option) {
    return option == value;
  }).length;
}; // eslint-disable-line

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alpha__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_dash__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alpha_num__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alpha_spaces__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__between__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmed__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credit_card__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decimal__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__digits__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dimensions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__email__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ext__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__image__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__in__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ip__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__max__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__max_value__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mimes__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__min__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__min_value__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notIn__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__numeric__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__regex__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__required__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__size__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__url__ = __webpack_require__(47);
/* eslint-disable camelcase */



























/* harmony default export */ exports["a"] = {
    alpha_dash: __WEBPACK_IMPORTED_MODULE_1__alpha_dash__["a" /* default */],
    alpha_num: __WEBPACK_IMPORTED_MODULE_2__alpha_num__["a" /* default */],
    alpha_spaces: __WEBPACK_IMPORTED_MODULE_3__alpha_spaces__["a" /* default */],
    alpha: __WEBPACK_IMPORTED_MODULE_0__alpha__["a" /* default */],
    between: __WEBPACK_IMPORTED_MODULE_4__between__["a" /* default */],
    confirmed: __WEBPACK_IMPORTED_MODULE_5__confirmed__["a" /* default */],
    credit_card: __WEBPACK_IMPORTED_MODULE_6__credit_card__["a" /* default */],
    decimal: __WEBPACK_IMPORTED_MODULE_7__decimal__["a" /* default */],
    digits: __WEBPACK_IMPORTED_MODULE_8__digits__["a" /* default */],
    dimensions: __WEBPACK_IMPORTED_MODULE_9__dimensions__["a" /* default */],
    email: __WEBPACK_IMPORTED_MODULE_10__email__["a" /* default */],
    ext: __WEBPACK_IMPORTED_MODULE_11__ext__["a" /* default */],
    image: __WEBPACK_IMPORTED_MODULE_12__image__["a" /* default */],
    in: __WEBPACK_IMPORTED_MODULE_13__in__["a" /* default */],
    ip: __WEBPACK_IMPORTED_MODULE_14__ip__["a" /* default */],
    max: __WEBPACK_IMPORTED_MODULE_15__max__["a" /* default */],
    max_value: __WEBPACK_IMPORTED_MODULE_16__max_value__["a" /* default */],
    mimes: __WEBPACK_IMPORTED_MODULE_17__mimes__["a" /* default */],
    min: __WEBPACK_IMPORTED_MODULE_18__min__["a" /* default */],
    min_value: __WEBPACK_IMPORTED_MODULE_19__min_value__["a" /* default */],
    not_in: __WEBPACK_IMPORTED_MODULE_20__notIn__["a" /* default */],
    numeric: __WEBPACK_IMPORTED_MODULE_21__numeric__["a" /* default */],
    regex: __WEBPACK_IMPORTED_MODULE_22__regex__["a" /* default */],
    required: __WEBPACK_IMPORTED_MODULE_23__required__["a" /* default */],
    size: __WEBPACK_IMPORTED_MODULE_24__size__["a" /* default */],
    url: __WEBPACK_IMPORTED_MODULE_25__url__["a" /* default */]
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isIP__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isIP___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isIP__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



/* harmony default export */ exports["a"] = function (value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [4];

  var _ref2 = _slicedToArray(_ref, 1);

  var version = _ref2[0];
  return __WEBPACK_IMPORTED_MODULE_0_validator_lib_isIP___default()(value, version);
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var length = _ref2[0];

    if (value === undefined || value === null) {
        return length >= 0;
    }

    return String(value).length <= length;
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var max = _ref2[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }

    return Number(value) <= max;
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + '$', 'i');
    for (var i = 0; i < files.length; i++) {
        if (!regex.test(files[i].type)) {
            return false;
        }
    }

    return true;
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var length = _ref2[0];

    if (value === undefined || value === null) {
        return false;
    }
    return String(value).length >= length;
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var min = _ref2[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }

    return Number(value) >= min;
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value, options) {
  return !options.filter(function (option) {
    return option == value;
  }).length;
}; // eslint-disable-line

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isNumeric__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isNumeric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isNumeric__);


/* harmony default export */ exports["a"] = function (value) {
  return __WEBPACK_IMPORTED_MODULE_0_validator_lib_isNumeric___default()(String(value));
};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/* harmony default export */ exports["a"] = function (value, _ref) {
    var _ref2 = _toArray(_ref);

    var regex = _ref2[0];

    var flags = _ref2.slice(1);

    if (regex instanceof RegExp) {
        return regex.test(value);
    }

    return new RegExp(regex, flags).test(String(value));
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (value) {
    if (Array.isArray(value)) {
        return !!value.length;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return !!String(value).trim().length;
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ exports["a"] = function (files, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var size = _ref2[0];

    if (isNaN(size)) {
        return false;
    }

    var nSize = Number(size) * 1024;
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }

    return true;
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isURL__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isURL___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isURL__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



/* harmony default export */ exports["a"] = function (value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [true];

    var _ref2 = _slicedToArray(_ref, 1);

    var requireProtocol = _ref2[0];
    return __WEBPACK_IMPORTED_MODULE_0_validator_lib_isURL___default()(value, { require_protocol: !!requireProtocol });
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})|62[0-9]{14}$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[^0-9]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(2);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(48);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(6);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(0);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(6);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(7);

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(2);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /\s/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_maps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorBag__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(exports, "install", function() { return install; });






// eslint-disable-next-line
var install = function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref$locale = _ref.locale;
    var locale = _ref$locale === undefined ? 'en' : _ref$locale;
    var _ref$delay = _ref.delay;
    var delay = _ref$delay === undefined ? 0 : _ref$delay;
    var _ref$errorBagName = _ref.errorBagName;
    var errorBagName = _ref$errorBagName === undefined ? 'errors' : _ref$errorBagName;
    var _ref$dictionary = _ref.dictionary;
    var dictionary = _ref$dictionary === undefined ? null : _ref$dictionary;
    var _ref$strict = _ref.strict;
    var strict = _ref$strict === undefined ? true : _ref$strict;
    var _ref$fieldsBagName = _ref.fieldsBagName;
    var fieldsBagName = _ref$fieldsBagName === undefined ? 'fields' : _ref$fieldsBagName;

    if (dictionary) {
        __WEBPACK_IMPORTED_MODULE_0__validator__["a" /* default */].updateDictionary(dictionary);
    }

    __WEBPACK_IMPORTED_MODULE_0__validator__["a" /* default */].setLocale(locale);
    __WEBPACK_IMPORTED_MODULE_0__validator__["a" /* default */].setStrictMode(strict);

    var options = {
        locale: locale,
        delay: delay,
        dictionary: dictionary,
        errorBagName: errorBagName,
        fieldsBagName: fieldsBagName
    };

    Object.defineProperties(Vue.prototype, {
        $validator: {
            get: function get() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_maps__["b" /* register */])(this);
            }
        }
    });

    Vue.mixin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mixin__["a" /* default */])(options)); // Install Mixin.
    Vue.directive('validate', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__directive__["a" /* default */])(options)); // Install directive.
};

/* harmony reexport (binding) */ __webpack_require__.d(exports, "Validator", function() { return __WEBPACK_IMPORTED_MODULE_0__validator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ErrorBag", function() { return __WEBPACK_IMPORTED_MODULE_4__errorBag__["a"]; });


/***/ }
/******/ ])
});
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(138)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f3783018"

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(137)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(133)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ceed9a7e"

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b0cd62b0"

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6cce69bd"

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nprogress__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_index_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_routers_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vee_validate__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lang_zh_CN_vee_validate_js__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__route_routers_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__vuex_index_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return app; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };








 // 表单验证插件

if (process.env.COUNT_ENV == 1) {
	// 只需初始化一次，多次初始化会报错
	process.env.COUNT_ENV = 2;
	__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vee_validate___default.a, {
		locale: 'ar',
		dictionary: {
			ar: { // locale key
				messages: __WEBPACK_IMPORTED_MODULE_7__lang_zh_CN_vee_validate_js__["a" /* default */] }
		}
	});
}

__webpack_require__(55);

// 用vuex的store同步化router
// 这会注册 `store.state.route`
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_3__vuex_index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__route_routers_js__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_4__route_routers_js__["a" /* default */].beforeEach(function (to, from, next) {
	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == undefined || (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {
		__WEBPACK_IMPORTED_MODULE_2_nprogress___default.a.set(0.5);
	}
	next();
});

__WEBPACK_IMPORTED_MODULE_4__route_routers_js__["a" /* default */].afterEach(function (route) {
	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == undefined || (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {
		__WEBPACK_IMPORTED_MODULE_2_nprogress___default.a.set(1);
	}
});

// 创建一个app实例
// 这里我们把routes和store注入所有子组件，
// 使得像`this.$router` 和 `this.$store` 在任何地方都能生效
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.extend({
	router: __WEBPACK_IMPORTED_MODULE_4__route_routers_js__["a" /* default */],
	store: __WEBPACK_IMPORTED_MODULE_3__vuex_index_js__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a));



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	is_server: false,
	app_url: 'http://find360.cn',
	app_ano_url: 'http://s.find360.cn:8080'
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'App'
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    expert_name: 'PopExpert',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return _defineProperty({
                    'class_type': 0,
                    'table_type': 'fertilize',
                    'id': 0,
                    'expert_name': '',
                    'major': '',
                    'level': '',
                    'sex': '男',
                    'age': '',
                    'unit': '',
                    'phone': '',
                    'memo': ''
                }, 'class_type', 0);
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'class_type': 0,
                'table_type': 'fertilize',
                'id': 0,
                'expert_name': '',
                'major': '',
                'level': '',
                'sex': '男',
                'age': '',
                'unit': '',
                'phone': '',
                'memo': ''
            },
            sex: ['男', '女'],
            tableType: ['施肥', '病虫害', '检验检测', '农事'],
            tableSet: ['fertilize', 'spray', 'detect', 'farming']
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultTypeIndex: function defaultTypeIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.tableType) {
                    if (this.tableSet[index] == this.letItem.table_type) {
                        return index;
                    }
                }
            }
        },
        defaultSexIndex: function defaultSexIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.sex) {
                    if (this.sex[index] == this.letItem.sex) {
                        return index;
                    }
                };
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'expert_name',
                'value': this.letItem.expert_name
            };
            this.$unique(this, 'expert', params, 'letItem.expert_name').then(function () {

                if (_this.edit) {
                    _this.$update(_this, 'expert', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'expert', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddExpert: function cancelAddExpert() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditExpert: function cancelEditExpert() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsgType: function getMsgType(msg) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.tableType)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var index = _step3.value;

                    if (this.tableType[index] == msg) {
                        this.letItem.table_type = this.tableSet[index];
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        },
        getMsgSex: function getMsgSex(msg) {
            this.letItem.sex = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.keys(this.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var key = _step4.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopManure',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'category_id': 0,
                    'category_name': '',
                    'id': 0,
                    'name': '',
                    'usage': '',
                    'specification': '',
                    'dealer': '',
                    'origin': '',
                    'phone': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'category_id': 0,
                'category_name': '',
                'id': 0,
                'name': '',
                'usage': '',
                'specification': '',
                'dealer': '',
                'origin': '',
                'phone': '',
                'memo': ''
            },
            categorys: []
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultIndex: function defaultIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index].id == this.letItem.category_id) {
                        return index;
                    }
                }
                return -1;
            }
        }
    },
    mounted: function mounted() {
        this.getAllManure();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 获取所有肥料分类
        */
        getAllManure: function getAllManure() {
            var _this = this;

            this.$http.get(this.$adminUrl('manure_category/query')).then(function (response) {
                _this.$set(_this, 'categorys', response.body.manure_categorys.data);
            }, function (response) {});
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'manure', params, 'letItem.name').then(function () {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _this2.categorys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var category = _step2.value;

                        if (category.id == _this2.letItem.category_id) {
                            _this2.letItem.category_name = category.name;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (_this2.edit) {
                    _this2.$update(_this2, 'manure', _this2.letItem).then(function (response) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(_this2.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var key = _step3.value;

                                _this2.tmp[key] = _this2.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }

                        _this2.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this2.$storeL(_this2, 'manure', _this2.letItem).then(function (response) {
                        _this2.letItem.id = response.body;
                        _this2.$emit('callback', _this2.letItem);
                        _this2.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddManure: function cancelAddManure() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditManure: function cancelEditManure() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsg: function getMsg(msg) {
            this.letItem.category_id = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.keys(this.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var key = _step4.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopMedicament',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'category_id': 0,
                    'category_name': '',
                    'id': 0,
                    'name': '',
                    'usage': '',
                    'control_objects': '',
                    'toxicity_grade': '微毒',
                    'specification': '',
                    'manufacturer': '',
                    'origin': '',
                    'phone': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'category_id': 0,
                'category_name': '',
                'id': 0,
                'name': '',
                'usage': '',
                'control_objects': '',
                'toxicity_grade': '微毒',
                'specification': '',
                'manufacturer': '',
                'origin': '',
                'phone': '',
                'memo': ''
            },
            categorys: [],
            toxicity: ['微毒', '低毒', '中毒', '高毒']
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaulCatIndex: function defaulCatIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index].id == this.letItem.category_id) {
                        return index;
                    }
                }
            }
        },
        defaultToxIndex: function defaultToxIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.toxicity) {
                    if (this.toxicity[index] == this.letItem.toxicity_grade) {
                        //console.log(this.letItem.toxicity_grade);
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        this.getAllPlantation();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 获取所有农药分类
        */
        getAllPlantation: function getAllPlantation() {
            var _this = this;

            this.$http.get(this.$adminUrl('medicament_category/query')).then(function (response) {
                _this.$set(_this, 'categorys', response.body.medicament_categorys.data);
            }, function (response) {});
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'medicament', params, 'letItem.name').then(function () {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _this2.categorys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var category = _step2.value;

                        if (category.id == _this2.letItem.category_id) {
                            _this2.letItem.category_name = category.name;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (_this2.edit) {
                    _this2.$update(_this2, 'medicament', _this2.letItem).then(function (response) {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = Object.keys(_this2.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var key = _step3.value;

                                _this2.tmp[key] = _this2.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }

                        _this2.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this2.$storeL(_this2, 'medicament', _this2.letItem).then(function (response) {
                        _this2.letItem.id = response.body;
                        _this2.$emit('callback', _this2.letItem);
                        _this2.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddMedicament: function cancelAddMedicament() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditMedicament: function cancelEditMedicament() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsgId: function getMsgId(msg) {
            this.letItem.category_id = msg;
        },
        getMsgGrade: function getMsgGrade(msg) {
            this.letItem.toxicity_grade = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.keys(this.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var key = _step4.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopPlant',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'image': '',
                    'file_name': null,
                    'category': '蔬菜类',
                    'name': '',
                    'growth_cycle': '',
                    'description': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'id': '',
                'image': '',
                'file_name': null,
                'category': '蔬菜类',
                'name': '',
                'growth_cycle': '',
                'description': '',
                'memo': ''
            },
            // 图片格式
            pattern: {
                type: Array,
                default: function _default() {
                    return ['jpeg', 'png'];
                }
            },
            image: 'upload.png',
            categorys: ['蔬菜类', '水果类']
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultIndex: function defaultIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index] == this.letItem.category) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        // 初始化tmp，同时过滤掉plant里面不需要的属性
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                // 如果plant里面的属性tmp里面也有，那么那对应的值赋予tmp
                if (key in this.tmp && this.tmp.hasOwnProperty(key)) {
                    this.tmp[key] = this.letItem[key] == null ? '' : this.letItem[key];
                } else {
                    // 否则删除此属性
                    delete this.letItem[key];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (this.edit) {
            this.letItem.imageFlag = 'no';
        }
    },

    methods: {

        /**
        * 触发input[type="file"]的click事件来选择图片
        * @param  {object} event
        */
        selectPic: function selectPic(event) {

            // 取出空格
            var obj = event.target.parentNode.nextSibling;
            if (obj.tagName != 'INPUT') {
                obj = obj.nextSibling;
            }

            if (obj.tagName != 'INPUT') {
                obj = event.target.nextSibling.nextSibling;
            }

            // 触发input的click事件
            obj.click();
        },


        /**
        *  获取input[type="file"]里的图片，预览到页面上
        */
        previewPic: function previewPic(srcPic, event) {
            var _this = this;

            // 获取选中的图片文件，并判断选中的图片数量是否合法
            var file = event.target.files[0];

            // 将pattern数组里的图片格式组装成"xxx|xxx|xxx"这样的格式，如："jpeg|png"
            var regexParams = '';
            for (var index = 0; index < this.pattern.length; index++) {
                regexParams += this.pattern[index] + (index == this.pattern.length - 1 ? '' : '|');
            }
            // 将组装后的图片格式字符串传给正则表达式构造器，最后生成如/\/(?:jpeg|png)/i这样的正则表达式
            var regex = new RegExp('\/(?:' + regexParams + ')', 'i');

            // 过滤图片格式，如果出现格式不合法的，则取消此图片的上传操作
            if (!regex.test(file.type)) {
                alert("请选择格式为 " + this.pattern + " 的图片");
                return;
            }

            // 开始读取选中的图片，添加预览到页面
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                _this.letItem.image = e.target.result;
                _this.letItem.file_name = file;
            };
        },


        /**
         * 删除图片
         */
        deletePic: function deletePic() {
            this.letItem.image = 'upload.png';
            this.letItem.file_name = '';
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'plant', params, 'letItem.name').then(function () {
                if (_this2.edit) {
                    if (_this2.letItem.file_name != null) {

                        var form = new FormData();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this2.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                form.append(key, _this2.letItem[key]);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this2.$update(_this2, 'plant', form, true).then(function (response) {
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = Object.keys(_this2.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var key = _step3.value;

                                    _this2.tmp[key] = _this2.letItem[key];
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            _this2.$alert('修改成功', 's');
                        }, function (response) {
                            _this2.$alert('连接出错', 'e');
                        });
                    } else {

                        _this2.letItem.image = 'upload.png';
                        _this2.$update(_this2, 'plant', _this2.letItem).then(function (response) {
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {

                                for (var _iterator4 = Object.keys(_this2.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var _key = _step4.value;

                                    _this2.tmp[_key] = _this2.letItem[_key];
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }

                            _this2.$alert('修改成功', 's');
                        }, function (response) {
                            if (response != false) {
                                _this2.$alert('连接出错', 'e');
                            } else {
                                return false;
                            }
                        });
                    }
                } else {

                    var _form = new FormData();
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = Object.keys(_this2.letItem)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var _key2 = _step5.value;

                            _form.append(_key2, _this2.letItem[_key2]);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    if (_this2.letItem.file_name == null) {
                        _this2.letItem.image = 'upload.png';
                    }

                    _this2.$storeL(_this2, 'plant', _form, true).then(function (response) {
                        _this2.letItem.id = response.body;
                        _this2.$emit('callback', _this2.letItem);
                        _this2.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddPlantation: function cancelAddPlantation() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditPlantation: function cancelEditPlantation() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsg: function getMsg(msg) {
            this.letItem.category = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = Object.keys(this.letItem)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var key = _step6.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopPlanta',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'pid': 0,
                    'id': '',
                    'name': '',
                    'area': 0,
                    'area_unit': '亩',
                    'phone': '',
                    'address': '',
                    'director': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            area_unit: ['亩', '平方米', '公顷'],
            tmp: {
                'pid': 0,
                'id': '',
                'name': '',
                'area': 0,
                'area_unit': '亩',
                'phone': '',
                'address': '',
                'director': '',
                'memo': ''
            },
            plantations: []
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultUnitIndex: function defaultUnitIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.area_unit) {
                    if (this.area_unit[index] == this.letItem.area_unit) {
                        return index;
                    }
                }
            }
        },
        defaultPlaIndex: function defaultPlaIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.plantations) {
                    if (this.plantations[index].id == this.letItem.pid) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        this.getAllPlantation();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 获取所有种植场
        */
        getAllPlantation: function getAllPlantation() {
            var _this = this;

            this.$http.get(this.$adminUrl('planta/create')).then(function (response) {
                _this.$set(_this, 'plantations', response.body);
            }, function (response) {});
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'planta', params, 'letItem.name').then(function () {
                if (_this2.edit) {
                    _this2.$update(_this2, 'planta', _this2.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this2.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this2.tmp[key] = _this2.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this2.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this2.$storeL(_this2, 'planta', _this2.letItem).then(function (response) {
                        _this2.letItem.id = response.body;
                        _this2.$emit('callback', _this2.letItem);
                        _this2.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddPlanta: function cancelAddPlanta() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditPlanta: function cancelEditPlanta() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsgPid: function getMsgPid(msg) {
            this.letItem.pid = msg;
        },
        getMsgUnit: function getMsgUnit(msg) {
            this.letItem.area_unit = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopPlantation',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'name': '',
                    'area': 0,
                    'area_unit': '亩',
                    'phone': '',
                    'address': '',
                    'director': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 单位
            area_unit: ['亩', '平方米', '公顷'],
            // 作为编辑组件时，用于临时备份父组件传递过来的数据，
            // 以便在修改了数据但不保存时可以复原数据
            tmp: {
                'id': '',
                'name': '',
                'area': 0,
                'area_unit': '亩',
                'phone': '',
                'address': '',
                'director': '',
                'memo': ''
            }
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultIndex: function defaultIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.area_unit) {
                    if (this.area_unit[index] == this.letItem.area_unit) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'plantation', params, 'letItem.name').then(function () {
                if (_this.edit) {
                    _this.$update(_this, 'plantation', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'plantation', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddPlantation: function cancelAddPlantation() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditPlantation: function cancelEditPlantation() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsg: function getMsg(msg) {
            this.letItem.area_unit = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'ResearchField',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    filters: {
        table_name: function table_name(value) {
            if (value == 'fertilize') {
                return '施肥';
            } else if (value == 'spray') {
                return '病虫害';
            } else if (value == 'detect') {
                return '检验检测';
            } else {
                return '农事';
            }
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'ResearchField',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    filters: {
        table_name: function table_name(value) {
            switch (value) {
                case 1:
                    return '疾病防治药';
                case 2:
                    return '传染病防治药';
                case 3:
                    return '寄生虫病防治药';
                case 4:
                    return '促生长药';
                case 5:
                    return '其他类';
            }
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'ResearchField',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    filters: {
        table_name: function table_name(value) {
            switch (value) {
                case 1:
                    return '粗粮类';
                case 2:
                    return '维生素类';
                case 3:
                    return '青蔬类';
                case 4:
                    return '矿物质类';
                case 5:
                    return '干草料类';
                case 6:
                    return '其他类';
            }
        }
    }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'ResearchField',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    filters: {
        table_name: function table_name(value) {
            switch (value) {
                case 'fodderuse':
                    return '饲料使用';
                case 'disease':
                    return '畜禽病疫';
                case 'detection':
                    return '畜禽检疫';
                case 'area':
                    return '畜禽圈舍';
            }
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popbeast',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'image': '',
                    'name': '',
                    'ear': '',
                    'desctiption': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'id': '',
                'image': '',
                'name': '',
                'ear': '',
                'desctiption': '',
                'memo': ''
            },
            // 图片格式
            pattern: {
                type: Array,
                default: function _default() {
                    return ['jpeg', 'png'];
                }
            },
            image: 'upload.png'
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultIndex: function defaultIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index] == this.letItem.category) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        // 初始化tmp，同时过滤掉beast里面不需要的属性
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                // 如果beast里面的属性tmp里面也有，那么那对应的值赋予tmp
                if (key in this.tmp && this.tmp.hasOwnProperty(key)) {
                    this.tmp[key] = this.letItem[key] == null ? '' : this.letItem[key];
                } else {
                    // 否则删除此属性
                    delete this.letItem[key];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (this.edit) {
            this.letItem.imageFlag = 'no';
        }
    },

    methods: {

        /**
        * 触发input[type="file"]的click事件来选择图片
        * @param  {object} event
        */
        selectPic: function selectPic(event) {

            // 取出空格
            var obj = event.target.parentNode.nextSibling;
            if (obj.tagName != 'INPUT') {
                obj = obj.nextSibling;
            }

            if (obj.tagName != 'INPUT') {
                obj = event.target.nextSibling.nextSibling;
            }

            // 触发input的click事件
            obj.click();
        },


        /**
        *  获取input[type="file"]里的图片，预览到页面上
        */
        previewPic: function previewPic(srcPic, event) {
            var _this = this;

            // 获取选中的图片文件，并判断选中的图片数量是否合法
            var file = event.target.files[0];

            // 将pattern数组里的图片格式组装成"xxx|xxx|xxx"这样的格式，如："jpeg|png"
            var regexParams = '';
            for (var index = 0; index < this.pattern.length; index++) {
                regexParams += this.pattern[index] + (index == this.pattern.length - 1 ? '' : '|');
            }
            // 将组装后的图片格式字符串传给正则表达式构造器，最后生成如/\/(?:jpeg|png)/i这样的正则表达式
            var regex = new RegExp('\/(?:' + regexParams + ')', 'i');

            // 过滤图片格式，如果出现格式不合法的，则取消此图片的上传操作
            if (!regex.test(file.type)) {
                alert("请选择格式为 " + this.pattern + " 的图片");
                return;
            }

            // 开始读取选中的图片，添加预览到页面
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                _this.letItem.image = e.target.result;
                _this.letItem.file_name = file;
            };
        },


        /**
         * 删除图片
         */
        deletePic: function deletePic() {
            this.letItem.image = 'upload.png';
            this.letItem.file_name = '';
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'beast', params, 'letItem.name').then(function () {
                if (_this2.edit) {
                    if (_this2.letItem.file_name != null) {

                        var form = new FormData();
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this2.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                form.append(key, _this2.letItem[key]);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this2.$update(_this2, 'beast', form, true).then(function (response) {
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = Object.keys(_this2.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var key = _step3.value;

                                    _this2.tmp[key] = _this2.letItem[key];
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            _this2.$alert('修改成功', 's');
                        }, function (response) {
                            _this2.$alert('连接出错', 'e');
                        });
                    } else {

                        _this2.letItem.image = 'upload.png';
                        _this2.$update(_this2, 'beast', _this2.letItem).then(function (response) {
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {

                                for (var _iterator4 = Object.keys(_this2.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var _key = _step4.value;

                                    _this2.tmp[_key] = _this2.letItem[_key];
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }

                            _this2.$alert('修改成功', 's');
                        }, function (response) {
                            if (response != false) {
                                _this2.$alert('连接出错', 'e');
                            } else {
                                return false;
                            }
                        });
                    }
                } else {

                    var _form = new FormData();
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = Object.keys(_this2.letItem)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var _key2 = _step5.value;

                            _form.append(_key2, _this2.letItem[_key2]);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    if (_this2.letItem.file_name == null) {
                        _this2.letItem.image = 'upload.png';
                    }

                    _this2.$storeL(_this2, 'beast', _form, true).then(function (response) {
                        _this2.letItem.id = response.body;
                        _this2.$emit('callback', _this2.letItem);
                        _this2.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this2.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddbeastation: function cancelAddbeastation() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditbeastation: function cancelEditbeastation() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsg: function getMsg(msg) {
            this.letItem.category = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = Object.keys(this.letItem)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var key = _step6.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popdrug',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'drug_type': 1,
                    'name': '',
                    'use': '',
                    'specification': '',
                    'vender_name': '',
                    'address': '',
                    'phone': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 作为编辑组件时，用于临时备份父组件传递过来的数据，
            // 以便在修改了数据但不保存时可以复原数据
            tmp: {
                'id': '',
                'drug_type': 1,
                'name': '',
                'use': '',
                'specification': '',
                'vender_name': '',
                'address': '',
                'phone': '',
                'memo': ''
            },
            categorys: [{ id: 1, name: '疾病防治药' }, { id: 2, name: '传染病防治药' }, { id: 3, name: '寄生虫病防治药' }, { id: 4, name: '促生长药' }, { id: 5, name: '其他类' }]
        };
    },

    computed: {
        defaultdrugIndex: function defaultdrugIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index].id == this.letItem.drug_type) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'drug', params, 'letItem.name').then(function () {
                if (_this.edit) {
                    _this.$update(_this, 'drug', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'drug', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAdddrug: function cancelAdddrug() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditdrug: function cancelEditdrug() {
            this.$emit('closeEdit');
        },


        /**
        * CallBack函数,执行回调函数 
        */
        getMsgPid: function getMsgPid(msg) {
            this.letItem.drug_type = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    expert_name: 'PopExpert',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'class_type': 1,
                    'table_type': 'fodderuse',
                    'id': 0,
                    'expert_name': '',
                    'major': '',
                    'level': '',
                    'sex': '男',
                    'age': '',
                    'unit': '',
                    'phone': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'class_type': 1,
                'table_type': 'fodderuse',
                'id': 0,
                'expert_name': '',
                'major': '',
                'level': '',
                'sex': '男',
                'age': '',
                'unit': '',
                'phone': '',
                'memo': ''
            },
            sex: ['男', '女'],
            tableType: ['饲料使用', '畜禽病疫', '畜禽检疫', '畜禽圈舍'],
            tableSet: ['fodderuse', 'disease', 'detection', 'area']
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultTypeIndex: function defaultTypeIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.tableType) {
                    if (this.tableSet[index] == this.letItem.table_type) {
                        return index;
                    }
                }
            }
        },
        defaultSexIndex: function defaultSexIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.sex) {
                    if (this.sex[index] == this.letItem.sex) {
                        return index;
                    }
                };
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'expert_name',
                'value': this.letItem.expert_name
            };
            this.$unique(this, 'expert', params, 'letItem.expert_name').then(function () {

                if (_this.edit) {
                    _this.$update(_this, 'expert', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'expert', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddExpert: function cancelAddExpert() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditExpert: function cancelEditExpert() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsgType: function getMsgType(msg) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.tableType)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var index = _step3.value;

                    if (this.tableType[index] == msg) {
                        this.letItem.table_type = this.tableSet[index];
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        },
        getMsgSex: function getMsgSex(msg) {
            this.letItem.sex = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = Object.keys(this.letItem)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var key = _step4.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popfarm',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'name': '',
                    'area': 0,
                    'kind': '',
                    'scale': '',
                    'address': '',
                    'principal': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 作为编辑组件时，用于临时备份父组件传递过来的数据，
            // 以便在修改了数据但不保存时可以复原数据
            tmp: {
                'id': '',
                'name': '',
                'area': 0,
                'kind': '',
                'scale': '',
                'address': '',
                'principal': '',
                'memo': ''
            }
        };
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            // let params = {
            //     'id': this.letItem.id,
            //     'field': 'name',
            //     'value': this.letItem.name
            // };
            // this.$unique(this, 'farm', params, 'letItem.name').then(() => {
            if (this.edit) {
                this.$update(this, 'farm', this.letItem).then(function (response) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var key = _step2.value;

                            _this.tmp[key] = _this.letItem[key];
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    _this.$alert('修改成功', 's');
                }, function (response) {
                    if (response != false) {
                        _this.$alert('连接出错', 'e');
                    } else {
                        return false;
                    }
                });
            } else {
                this.$storeL(this, 'farm', this.letItem).then(function (response) {
                    _this.letItem.id = response.body;
                    _this.$emit('callback', _this.letItem);
                    _this.$alert('新增成功', 's');
                }, function (response) {
                    if (response != false) {
                        _this.$alert('连接出错', 'e');
                    } else {
                        return false;
                    }
                });
            }
            // }, () => {
            //     return false;
            // });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddfarm: function cancelAddfarm() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditfarm: function cancelEditfarm() {
            this.$emit('closeEdit');
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popfarmed',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'pid': 0,
                    'id': '',
                    'name': '',
                    'area': 0,
                    'kind': '',
                    'scale': '',
                    'address': '',
                    'principal': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 作为编辑组件时，用于临时备份父组件传递过来的数据，
            // 以便在修改了数据但不保存时可以复原数据
            tmp: {
                'pid': 0,
                'id': '',
                'name': '',
                'area': 0,
                'kind': '',
                'scale': '',
                'address': '',
                'principal': '',
                'memo': ''
            },
            farms: []
        };
    },

    computed: {
        defaultfarmedIndex: function defaultfarmedIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.farms) {
                    if (this.farms[index].id == this.letItem.pid) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        this.getAllfarmeds();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 获取所有养殖场
        */
        getAllfarmeds: function getAllfarmeds() {
            var _this = this;

            this.$http.get(this.$adminUrl('farmed/create')).then(function (response) {
                _this.$set(_this, 'farms', response.body);
            }, function (response) {});
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            // let params = {
            //     'id': this.letItem.id,
            //     'field': 'name',
            //     'value': this.letItem.name
            // };
            // this.$unique(this, 'farmed', params, 'letItem.name').then(() => {
            if (this.edit) {
                this.$update(this, 'farmed', this.letItem).then(function (response) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(_this2.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var key = _step2.value;

                            _this2.tmp[key] = _this2.letItem[key];
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    _this2.$alert('修改成功', 's');
                }, function (response) {
                    if (response != false) {
                        _this2.$alert('连接出错', 'e');
                    } else {
                        return false;
                    }
                });
            } else {
                this.$storeL(this, 'farmed', this.letItem).then(function (response) {
                    _this2.letItem.id = response.body;
                    _this2.$emit('callback', _this2.letItem);
                    _this2.$alert('新增成功', 's');
                }, function (response) {
                    if (response != false) {
                        _this2.$alert('连接出错', 'e');
                    } else {
                        return false;
                    }
                });
            }
            // }, () => {
            //     return false;
            // });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddfarmed: function cancelAddfarmed() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditfarmed: function cancelEditfarmed() {
            this.$emit('closeEdit');
        },


        /**
        * CallBack函数,执行回调函数 
        */
        getMsgPid: function getMsgPid(msg) {
            this.letItem.pid = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popfodder',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': '',
                    'fodder_type': 1,
                    'name': '',
                    'use': '',
                    'specification': '',
                    'vender_name': '',
                    'address': '',
                    'phone': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            // 作为编辑组件时，用于临时备份父组件传递过来的数据，
            // 以便在修改了数据但不保存时可以复原数据
            tmp: {
                'id': '',
                'fodder_type': 1,
                'name': '',
                'use': '',
                'specification': '',
                'vender_name': '',
                'address': '',
                'phone': '',
                'memo': ''
            },
            categorys: [{ id: 1, name: '粗粮类' }, { id: 2, name: '维生素类' }, { id: 3, name: '青蔬类' }, { id: 4, name: '矿物质类' }, { id: 5, name: '干草料类' }, { id: 6, name: '其他类' }]
        };
    },

    computed: {
        defaultfodderIndex: function defaultfodderIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.categorys) {
                    if (this.categorys[index].id == this.letItem.fodder_type) {
                        return index;
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'fodder', params, 'letItem.name').then(function () {
                if (_this.edit) {
                    _this.$update(_this, 'fodder', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'fodder', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddfodder: function cancelAddfodder() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditfodder: function cancelEditfodder() {
            this.$emit('closeEdit');
        },


        /**
        * CallBack函数,执行回调函数 
        */
        getMsgPid: function getMsgPid(msg) {
            this.letItem.fodder_type = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Popoperate',
    props: {
        letItem: {
            type: Object,
            default: function _default() {
                return {
                    'id': 0,
                    'name': '',
                    'sex': 0,
                    'age': '',
                    'identity': '',
                    'phone': '',
                    'address': '',
                    'memo': ''
                };
            }
        },
        // 表示此模块是编辑模块还是新增模块的标志
        edit: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            tmp: {
                'id': 0,
                'name': '',
                'sex': 0,
                'age': '',
                'identity': '',
                'phone': '',
                'address': '',
                'memo': ''
            },
            sex: [{ id: 0, sex: '男' }, { id: 1, sex: '女' }]
        };
    },

    computed: {
        //判断是编辑状态还是新建状态，取出不同的下标
        defaultSexIndex: function defaultSexIndex() {
            if (this.edit == false) {
                return 0;
            } else {
                for (var index in this.sex) {
                    if (this.sex[index].id == this.letItem.sex) {
                        return index;
                    }
                };
            }
        }
    },
    mounted: function mounted() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(this.letItem)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.tmp[key] = this.letItem[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },

    methods: {

        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            var params = {
                'id': this.letItem.id,
                'field': 'name',
                'value': this.letItem.name
            };
            this.$unique(this, 'operate', params, 'letItem.name').then(function () {

                if (_this.edit) {
                    _this.$update(_this, 'operate', _this.letItem).then(function (response) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = Object.keys(_this.letItem)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                _this.tmp[key] = _this.letItem[key];
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.$alert('修改成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                } else {
                    _this.$storeL(_this, 'operate', _this.letItem).then(function (response) {
                        _this.letItem.id = response.body;
                        _this.$emit('callback', _this.letItem);
                        _this.$alert('新增成功', 's');
                    }, function (response) {
                        if (response != false) {
                            _this.$alert('连接出错', 'e');
                        } else {
                            return false;
                        }
                    });
                }
            }, function () {
                return false;
            });
        },

        /**
        * 隐藏新增模块
        */
        cancelAddoperate: function cancelAddoperate() {
            this.$emit('closeNew');
        },


        /**
        * 隐藏编辑模块
        * @param letItem
        */
        cancelEditoperate: function cancelEditoperate() {
            this.$emit('closeEdit');
        },

        /**
        * CallBack函数,执行回调函数 
        */
        getMsgSex: function getMsgSex(msg) {
            this.letItem.sex = msg;
        }
    },
    destroyed: function destroyed() {
        if (this.edit) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.letItem)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    this.letItem[key] = this.tmp[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'PopPlanta',
    props: {
        'cultivateId': 0
    },
    data: function data() {
        return {
            log: {
                cultivate_id: 0,
                plantation_name: '',
                planta_name: '',
                plant_name: '',
                plant_varieties: '',
                cultivate_mode: '',
                plant_tp_variety: '',
                cultivate_density: '',
                manure_name: '',
                fertilize_amount: '',
                fertilize_way: '',
                medicament_name: '',
                spray_way: '',
                control_objects: '',
                plant_growth: '',
                planta_area: '',
                harvest_amount: 0,
                cultivate_man: ''
            },
            // 施肥方式
            fertilizeWays: [],
            // 施肥种类
            manureNames: [],
            // 病虫害名称
            medicamentNames: [],
            // 施药方式
            sprayWays: []
        };
    },
    mounted: function mounted() {
        this.getAllMsg();
    },

    methods: {

        /**
        * 获取所有信息
        */
        getAllMsg: function getAllMsg() {
            var _this = this;

            this.$http.get(this.$adminUrl('dailylog') + '/' + this.cultivateId + '/edit').then(function (response) {
                _this.$set(_this, 'log', response.body.dailylog);
                _this.$set(_this, 'fertilizeWays', response.body.fertilize_way);
                _this.$set(_this, 'manureNames', response.body.manure_category_name);
                _this.$set(_this, 'medicamentNames', response.body.medicament_category_name);
                _this.$set(_this, 'sprayWays', response.body.spray_way);

                // 将后台传过来的log对象里面值null的属性改成空字符串
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(_this.log)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        if (_this.log[key] == null) {
                            _this.log[key] = "";
                        }
                    }
                    // 将生长周期转成字符串
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                _this.log.plant_growth = String(_this.log.plant_growth);
                // 将施肥量转成字符串
                _this.log.fertilize_amount = String(_this.log.fertilize_amount);
            }, function (response) {});
        },


        /**
        * 提交表单
        */
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this2 = this;

            this.$http.post(this.$adminUrl('dailylog'), this.log).then(function (response) {
                if (response.body === 'true') {
                    _this2.$alert('保存成功', 's');
                    _this2.$emit('operatorBack', _this2.log.cultivate_man);
                } else {
                    _this2.$alert('保存失败', 'e');
                }
            }, function (response) {
                _this2.$alert('连接出错', 'e');
            });
        },


        /**
        * 隐藏编辑模块
        * @param log
        */
        cancelPanel: function cancelPanel() {
            this.$emit('closeEdit');
        },


        /**
         * 获取施肥方式
         * @param  {String} FertilizeWay
         */
        getFertilizeWay: function getFertilizeWay(FertilizeWay) {
            this.log.fertilize_way = FertilizeWay;
        },


        /**
         * 获取施肥种类
         * @param  {Integer} ManureNameId 
         */
        getManureName: function getManureName(ManureNameId) {
            this.log.manure_name = ManureNameId;
        },


        /**
         * 获取病虫害名称
         * @param  {Integer} MedicamentNameId
         */
        getMedicamentName: function getMedicamentName(MedicamentNameId) {
            this.log.medicament_name = MedicamentNameId;
        },


        /**
         * 获取施药方式
         * @param  {String} SprayWay 
         */
        getSprayWay: function getSprayWay(SprayWay) {
            this.log.spray_way = SprayWay;
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'AreaUnit',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    computed: {
        area: function area() {
            var area_with_unit = '';
            if (this.item.area != null) {
                area_with_unit += this.item.area;
            }
            if (this.item.area_unit != null) {
                area_with_unit += this.item.area_unit;
            }
            return area_with_unit;
        }
    }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_list_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__table_list_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Basic',
    props: {
        title: {
            type: String,
            default: '基础信息管理'
        },
        taps: {
            type: Array,
            default: function _default() {
                return [{ name: '', key: '' }];
            }
        },
        tableLists: {
            type: Array,
            default: function _default() {
                return [{
                    key: '',
                    component: null,
                    searchPlaceholder: '',
                    searchUrl: '',
                    theads: [''],
                    protos: [''],
                    widths: [0]
                }];
            }
        }
    },
    data: function data() {
        return {
            _key: '',
            component: null,
            searchPlaceholder: '',
            searchUrl: '',
            theads: [],
            protos: [],
            widths: []
        };
    },

    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_1__navbar_vue___default.a,
        tableList: __WEBPACK_IMPORTED_MODULE_2__table_list_vue___default.a
    },
    created: function created() {
        this.setTitle(this.title);
        this._key = this.tableLists[0].key;
        this.searchPlaceholder = this.tableLists[0].searchPlaceholder;
        this.searchUrl = this.tableLists[0].searchUrl;
        this.theads = this.tableLists[0].theads;
        this.protos = this.tableLists[0].protos;
        this.widths = this.tableLists[0].widths;
    },
    mounted: function mounted() {
        this.component = this.tableLists[0].component;
        this.$refs.tableList.getAllLists(this.searchUrl);
    },

    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])(['setTitle']), {
        flashList: function flashList(key) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.tableLists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.key == key) {
                        this._key = item.key;
                        this.searchPlaceholder = item.searchPlaceholder;
                        this.searchUrl = item.searchUrl;
                        this.theads = item.theads;
                        this.protos = item.protos;
                        this.widths = item.widths;
                        this.component = item.component;
                        // 同步调用获取数据的方法
                        this.$refs.tableList.getAllLists(item.searchUrl);
                        // 关闭新增弹窗
                        this.$refs.tableList.closeNew();
                        // 关闭编辑弹窗
                        this.$refs.tableList.closeEdit();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    })
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '删除选项'
        },
        message: {
            type: String,
            default: '确认删除？'
        },
        confirm: {
            type: String,
            default: '确定'
        },
        cancel: {
            type: String,
            default: '取消'
        }
    },
    methods: {
        /**
         * 触发confirmAction事件
         */
        confirmMethod: function confirmMethod() {
            this.$emit('confirmAction');
            this.cancelMethod();
        },


        /**
         * 触发cancelAction事件
         */
        cancelMethod: function cancelMethod() {
            this.$emit('cancelAction');
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'MyHead',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'MyImage',
    props: {
        item: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    computed: {
        showImg: function showImg() {
            return this.item.image != null && this.item.image != '' && this.item.image != 'upload.png';
        }
    }
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'Loading'
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Navbar',
    props: {
        taps: {
            type: Array,
            default: [{ name: 'default', key: 'default' }]
        }
    },
    data: function data() {
        return {
            self: this,
            activeKey: this.taps[0].key,
            // 初始位置
            yPosition: 0,
            // 箭头的样式
            isMore: true,
            body: null
        };
    },

    methods: {

        /**
         * 点击tap获取相应的key，以此改变tap的样式以及把key传回父组件
         * @param  {[type]} key [description]
         * @return {[type]}     [description]
         */
        getKey: function getKey(key) {
            this.activeKey = key;
            this.$emit('getKey', key);
        },
        enter: function enter(el, done) {
            el.style.height = 0;
            var num = Math.ceil((this.taps.length - 3) / 3);
            var totalHeight = 45.4 * num + 'px';
            Velocity(el, { height: totalHeight }, { duration: 300 });
            Velocity(el, { height: totalHeight }, { complete: done });
        },
        leave: function leave(el, done) {
            var num = Math.ceil((this.taps.length - 3) / 3);
            var totalHeight = 45.4 * num + 'px';
            el.style.height = totalHeight;
            Velocity(el, { height: 0 }, { duration: 300 });
            Velocity(el, { height: 0 }, { complete: done });
        },
        touchstart: function touchstart(event) {
            //获取第一个触摸点
            var touch = event.targetTouches[0];
            this.yPosition = touch.pageY;
        },
        touchmove: function touchmove(event) {

            var touch = event.targetTouches[0];
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop == 0) {
                // 下滑，则展开tap
                if (touch.pageY - this.yPosition > 20) {
                    this.isMore = false;
                }
                // 上滑，则收起tap
                if (this.yPosition - touch.pageY > 20) {
                    this.isMore = true;
                }
            }
        },
        toggleTap: function toggleTap() {
            if (this.isMore) {
                this.isMore = false;
            } else {
                this.isMore = true;
            }
        }
    }
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Paginator',
    props: {
        total: {
            type: Number,
            default: 1
        },
        url: {
            type: String,
            default: '/'
        },
        paginatorParams: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            index: 1,
            showInput: true,
            inputIndex: ''
        };
    },

    computed: {
        leftBtn: function leftBtn() {
            if (this.index == 1) {
                return false;
            } else {
                return true;
            }
        },
        rightBtn: function rightBtn() {
            if (this.index == this.total) {
                return false;
            } else {
                return true;
            }
        }
    },
    watch: {
        total: function total(val) {
            this.index = 1;
            this.showInput = true;
            this.inputIndex = '';
        }
    },
    methods: {
        lastPage: function lastPage(lastIndex) {
            var _this = this;

            if (!this.leftBtn) {
                return;
            }
            this.$emit('lastPageEvent');
            this.$http.get(this.$adminUrl(this.url) + '?page=' + lastIndex + '&' + this.$objectToParam(this.paginatorParams)).then(function (response) {

                _this.getResult(response);
            }, function (response) {});
        },
        nextPage: function nextPage(nestIndex) {
            var _this2 = this;

            if (!this.rightBtn) {
                return;
            }
            this.$emit('nextPageEvent');
            this.$http.get(this.$adminUrl(this.url) + '?page=' + nestIndex + '&' + this.$objectToParam(this.paginatorParams)).then(function (response) {

                _this2.getResult(response);
            }, function (response) {});
        },
        showInputIndex: function showInputIndex() {
            this.showInput = false;
        },
        changeIndex: function changeIndex() {
            var _this3 = this;

            this.$emit('changePageEvent');
            this.$http.get(this.$adminUrl(this.url) + '?page=' + this.inputIndex + '&' + this.$objectToParam(this.paginatorParams)).then(function (response) {

                _this3.showInput = true;
                _this3.getResult(response);
            }, function (response) {});
        },
        getResult: function getResult(response) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(response.body)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var proto = _step.value;

                    if (response.body[proto] instanceof Object && !(response.body[proto] instanceof Array)) {
                        if (proto == 'data') {
                            this.index = response.body.current_page;
                            this.$emit('result', response.body);
                        } else {
                            this.index = response.body[proto].current_page;
                            this.$emit('result', response.body[proto]);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'pop-select',
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [''];
            }
        },
        title: {
            type: String,
            default: '请选择'
        },
        //默认显示
        defaultIndex: {
            type: Number,
            default: 0
        },
        //默认返回的类型
        protoBack: {
            type: String,
            default: ''
        },
        //默认显示的类型
        protoShow: {
            type: String,
            default: 'name'
        }
    },
    //计算属性
    computed: {
        showMsg: {
            get: function get() {
                if (this.items.length != 0) {
                    if (this.index == -1) {
                        if (this.protoBack == '') {
                            return this.items[this.defaultIndex];
                        } else {
                            return this.items[this.defaultIndex][this.protoShow];
                        }
                    } else {
                        if (this.protoBack == '') {
                            return this.items[this.index];
                        } else {
                            return this.items[this.index][this.protoShow];
                        }
                    }
                } else {
                    return this.items[0];
                }
            },
            set: function set(newValue) {
                this.index = newValue;
            }
        }
    },
    data: function data() {
        return {
            msg: '',
            show: false,
            index: -1,
            opacity: true

        };
    },

    watch: {
        items: function items(val) {
            if (this.defaultIndex == -1 || this.defaultIndex == 0) {
                this.getMsg(0);
            }
        }
    },
    methods: {
        getMsg: function getMsg(index) {
            this.showMsg = index;
            if (this.items.length == 0) {
                return false;
            }
            if (this.protoBack == '') {
                this.$emit('callback', this.items[index]);
            } else {
                this.$emit('callback', this.items[index][this.protoBack]);
            }
        },

        //选择弹窗状态
        pop: function pop() {
            if (this.show = true) {
                this.show = false;
                this.opacity = true;
            }
        }
    }
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'pop-transition',
    methods: {
        beforeEnter: function beforeEnter(el) {},
        enter: function enter(el, done) {
            if (document.body.clientHeight != el.offsetHeight) {
                el.style.bottom = '-' + el.offsetHeight + 'px';
                Velocity(el, { bottom: 0 }, { duration: 300 });
                Velocity(el, { bottom: 0 }, { complete: done });
            }
        },
        leave: function leave(el, done) {
            el.style.display = 'none';
        }
    }
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'search',
    props: {
        placeholder: {
            type: String,
            default: '搜索'
        },
        searchUrl: {
            type: String,
            default: '/'
        },
        params: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            searchInput: ''
        };
    },

    computed: {},
    methods: {

        /**
         * 查询
         */
        search: function search() {
            var _this = this;

            var param = Object.assign({ 'query_text': this.searchInput }, this.params.params);
            this.$queryWithParams(this, this.searchUrl, { params: param }).then(function (response) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {

                    for (var _iterator = Object.keys(response.body)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var proto = _step.value;

                        if (response.body[proto] instanceof Object) {
                            if (proto == 'data') {
                                _this.$emit('callback', { data: response.body.data, last_page: response.body.last_page, query_text: _this.searchInput });
                            } else {
                                _this.$emit('callback', { data: response.body[proto].data, last_page: response.body[proto].last_page, query_text: _this.searchInput });
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }, function (response) {
                _this.$alert('连接出错', 'e');
            });
        }
    }

};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'SliderBar',
    props: {
        // 显示或隐藏侧边栏的标志
        show: {
            type: Boolean,
            required: true,
            default: true
        },
        // 侧边栏数组
        navbars: {
            type: Array,
            default: []
        }
    },
    data: function data() {
        return {
            // vue实例
            self: this,
            // 用于记住展开哪个子菜单的下标
            subNavbarIndex: -1
        };
    },

    computed: {},
    methods: {
        /**
         * 隐藏侧边栏
         */
        hide: function hide() {
            this.$emit('hide');
        },


        /**
         * 展开或隐藏子下来菜单
         * @param  {Boolean} isEvent 
         * @param  {Number}  index   
         */
        triggle: function triggle(name, isEvent, index) {
            if (this.subNavbarIndex == index) {
                this.subNavbarIndex = -1;
            } else {
                if (isEvent) {
                    this.$emit('getSubNavbars', name);
                }
                this.subNavbarIndex = index;
            }
        },


        /**
         * 点击侧边栏不具备not-hide的class的元素时，隐藏侧边栏
         * @param  {Object} event   
         */
        initTouch: function initTouch(event) {
            if (event.target.className.indexOf('not-hide') == -1) {
                this.hide();
            }
        },


        /**
         * 判断用户是否有此操作栏的权限
         * @param  {Object}  navbar 
         * @return {Boolean}
         */
        hasRole: function hasRole(navbar) {
            if (((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == undefined || (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') && window.role) {
                return window.role.role1.some(function (item, index) {
                    return navbar.role == item;
                });
            } else {
                return true;
            }
        }
    }

};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paginator_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__paginator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    name: 'List',
    props: {
        _key: {
            type: String,
            required: true,
            default: ''
        },
        // 弹出框
        component: {
            type: Object,
            default: function _default() {
                return null;
            }
        },
        // 搜索框的placeholder
        searchPlaceholder: {
            type: String,
            default: ''
        },
        // 搜索的url
        searchUrl: {
            type: String,
            required: true,
            default: ''
        },
        // thead
        theads: {
            type: Array,
            required: true,
            default: function _default() {
                return [''];
            }
        },
        // 属性
        protos: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        // 列表th的宽：%
        widths: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        // 是否显示checkbox
        showCheckbox: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            // 存放列表项的数组
            list: [],
            // 存放批量删除的列表项的数组
            deleteLists: [],
            // 是否全选
            isAllCheck: false,
            // 临时记录待删除的列表项信息
            deleteList: { 'id': 0, 'index': 0, 'flag': null },
            // 单个删除或批量删除
            oneOrBatch: 0,
            // 是否显示新增模块
            showNewPanel: false,
            // 存放是否展开列表项编辑模块的标志，
            showItemDetail: '',
            // 定义PopList是新增模块还是编辑模块，true：编辑模块，false：新增模块
            showEditPane: true,
            // 是否显示确认模块
            showConfirm: false,
            // vue实例
            self: this,
            // 无法删除时的提示信息
            tipMsg: '被使用，无法删除',
            // 分页的总页数
            total: 1,
            // 搜索的参数对象
            params: {
                'query_text': '',
                'List_id': 0,
                '_sort': 'id',
                'order': ''
            },
            // 动画效果
            slide: 'slide-fade',
            showUp: true
        };
    },

    watch: {
        showItemDetail: function showItemDetail(val) {
            this.slide = 'slide';
        }
    },
    components: {
        Paginator: __WEBPACK_IMPORTED_MODULE_1__paginator_vue___default.a,
        Search: __WEBPACK_IMPORTED_MODULE_0__search_vue___default.a
    },
    mounted: function mounted() {},

    methods: {

        /**
         * 初始化数据
         */
        init: function init() {
            this.deleteLists = [];
            this.deleteList = { 'id': 0, 'index': 0, 'flag': null };
            this.oneOrBatch = 0;
            this.isAllCheck = false;
        },


        /**
         * 获取所有列表项信息
         */
        getAllLists: function getAllLists(url) {
            var _this = this;

            this.init();
            this.showUp = false;
            this.$index(this, url).then(function (response) {
                var data = response.body[url + 's'];
                _this.total = data.last_page;
                _this.$set(_this, 'list', data.data);
                _this.showUp = true;
            }, function (error) {
                if (error.status == 401) {
                    _this.$router.push('/webapp/login/401');
                } else {
                    _this.$alert('连接出错', 'e');
                }
            });
        },


        /**
        * 全选或取消全选
        * @param e
        */
        selectAll: function selectAll() {
            if (!this.isAllCheck) {
                this.isAllCheck = true;
                this.deleteLists = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.list.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var index = _step.value;

                        this.deleteLists.push({ 'id': this.list[index].id, 'index': index, 'flag': this.list[index].serial_state });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {
                this.isAllCheck = false;
                this.deleteLists = [];
            }
        },


        /**
         * 将选中的checkbox信息存入deleteLists
         * @param  {Object} checkedMsg 
         */
        checkedBox: function checkedBox(checkedMsg) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(this.deleteLists)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var index = _step2.value;

                    if (this.deleteLists[index].id == checkedMsg.id) {
                        this.deleteLists.splice(index, 1);
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.deleteLists.push(checkedMsg);
        },


        /**
         * 判断checkbox是否被选中
         * @param  {Integer}  id
         */
        isCheck: function isCheck(id) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Object.keys(this.deleteLists)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var index = _step3.value;

                    if (this.deleteLists[index].id == id) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return false;
        },


        /**
        * 单个删除
        */
        destroy: function destroy() {
            var _this2 = this;

            this.$destroyL(this, this.searchUrl, this.deleteList.id).then(function (response) {
                _this2.list.splice(_this2.deleteList.index, 1);
                _this2.deleteList = { 'id': 0, 'index': 0 };
                _this2.showConfirm = false;
                _this2.$alert('删除成功');
            }, function (response) {
                _this2.$alert('连接出错', 'e');
            });
        },


        /**
        * 批量删除
        */
        batchDestroy: function batchDestroy() {
            var _this3 = this;

            if (this.deleteLists.length != 0) {
                var ids = [];
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    for (var _iterator4 = this.deleteLists[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        var deleteList = _step4.value;

                        ids.push(deleteList.id);
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }
                    } finally {
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }

                this.$batchDestroy(this, this.searchUrl, ids).then(function (response) {
                    _this3.deleteLists = _this3.$reverseObj(_this3.deleteLists, 'index');
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = _this3.deleteLists[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var deleteList = _step5.value;

                            _this3.list.splice(deleteList.index, 1);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    _this3.deleteLists = [];
                    _this3.showConfirm = false;
                    _this3.$alert('成功删除' + response.body + '条');
                }, function (response) {
                    _this3.$alert('连接出错', 'e');
                });
            } else {
                this.$alert('请选择列表项');
            }
        },


        /**
         * 判断调用单个删除或批量删除
         */
        oneOrBatchdestroy: function oneOrBatchdestroy() {
            if (this.oneOrBatch == 0) {
                this.destroy();
            } else {
                this.batchDestroy();
            }
        },


        /**
        * 显示或隐藏编辑模块
        * @param {Number} List
        */
        troggleEdit: function troggleEdit(id) {
            if (this.showItemDetail != id) {
                this.showItemDetail = id;
            } else {
                this.showItemDetail = '';
            }
        },


        /**
        * 关闭编辑模块
        * @param List
        */
        closeOwnEditPane: function closeOwnEditPane(List) {
            this.troggleEdit(List);
        },


        /**
        * 显示确认窗口
        * @param flag
        * @param id
        * @param index
        */
        showConfirmDialog: function showConfirmDialog(flag) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.deleteLists[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var deleteList = _step6.value;

                    if (deleteList.flag) {
                        this.$alert(this.tipMsg);
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            if (flag == 1 && this.deleteLists.length == 0) {
                this.$alert('请选择列表项');
            } else {
                this.oneOrBatch = flag;
                this.deleteList.id = id;
                this.deleteList.index = index;
                this.showConfirm = true;
            }
        },


        /**
        * 更新list中的一个
        * @param List
        */
        updateListByOne: function updateListByOne(newOne) {
            this.slide = 'slide-fade';
            this.showNewPanel = false;
            this.list.unshift(newOne);
        },


        /**
        * 更新list中的多个
        * @param List
        */
        updateListByMore: function updateListByMore(newList) {
            this.showUp = true;
            this.init();
            this.$set(this, 'list', newList.data);
            this.total = newList.last_page;
            if (newList.query_text != undefined) {
                this.params.query_text = newList.query_text;
            }
        },


        /**
         * 关闭新增弹窗
         */
        closeNew: function closeNew() {
            this.showNewPanel = false;
        },


        /**
         * 关闭编辑弹窗
         */
        closeEdit: function closeEdit() {
            this.showItemDetail = '';
        }
    }
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'fourOFour'
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_basic_pop_plantation_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_basic_pop_plantation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_basic_pop_plantation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_basic_pop_planta_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_basic_pop_planta_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_basic_pop_planta_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_basic_pop_plant_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_basic_pop_plant_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_basic_pop_plant_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_image_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_public_image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_public_image_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_basic_pop_manure_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_basic_pop_manure_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_basic_pop_manure_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_basic_pop_medicament_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_basic_pop_medicament_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_basic_pop_medicament_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_basic_pop_expert_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_basic_pop_expert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_basic_pop_expert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_basic_research_field_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_basic_research_field_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_basic_research_field_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Basic',
    data: function data() {
        return {
            taps: [{ name: '种植场信息', key: 'plantation' }, { name: '种植区信息', key: 'planta' }, { name: '果蔬档案', key: 'plant' }, { name: '肥料档案', key: 'manure' }, { name: '农药档案', key: 'medicament' }, { name: '专家档案', key: 'expert' }],
            tableLists: [{
                key: 'plantation',
                component: { plantation: __WEBPACK_IMPORTED_MODULE_1__components_basic_pop_plantation_vue___default.a, area: __WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue___default.a },
                searchPlaceholder: '种植场名称',
                searchUrl: 'plantation',
                theads: ['种植场名称', '种植面积', '负责人'],
                protos: ['name', 'area', 'director'],
                widths: [32, 24, 17]
            }, {
                key: 'planta',
                component: { planta: __WEBPACK_IMPORTED_MODULE_3__components_basic_pop_planta_vue___default.a, area: __WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue___default.a },
                searchPlaceholder: '种植区名称',
                searchUrl: 'planta',
                theads: ['种植区名称', '种植面积', '负责人'],
                protos: ['name', 'area', 'director'],
                widths: [32, 24, 17]
            }, {
                key: 'plant',
                component: { plant: __WEBPACK_IMPORTED_MODULE_4__components_basic_pop_plant_vue___default.a, image: __WEBPACK_IMPORTED_MODULE_5__components_public_image_vue___default.a },
                searchPlaceholder: '果蔬名称',
                searchUrl: 'plant',
                theads: ['果蔬名称', '生长周期', '已传图片'],
                protos: ['name', 'growth_cycle', 'image'],
                widths: [32, 24, 17]
            }, {
                key: 'manure',
                component: { manure: __WEBPACK_IMPORTED_MODULE_6__components_basic_pop_manure_vue___default.a },
                searchPlaceholder: '肥料名称',
                searchUrl: 'manure',
                theads: ['肥料类别', '肥料名称', '用途'],
                protos: ['category_name', 'name', 'usage'],
                widths: [24, 24, 25]
            }, {
                key: 'medicament',
                component: { medicament: __WEBPACK_IMPORTED_MODULE_7__components_basic_pop_medicament_vue___default.a },
                searchPlaceholder: '农药名称',
                searchUrl: 'medicament',
                theads: ['农药类别', '农药名称', '用途'],
                protos: ['category_name', 'name', 'usage'],
                widths: [26, 28, 19]
            }, {
                key: 'expert',
                component: { expert: __WEBPACK_IMPORTED_MODULE_8__components_basic_pop_expert_vue___default.a, table_type: __WEBPACK_IMPORTED_MODULE_9__components_basic_research_field_vue___default.a },
                searchPlaceholder: '专家名称',
                searchUrl: 'expert',
                theads: ['专家名称', '研究领域', '操作模块'],
                protos: ['expert_name', 'major', 'table_type'],
                widths: [24, 28, 21]
            }]
        };
    },

    components: {
        BasicModel: __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue___default.a,
        PopPlantation: __WEBPACK_IMPORTED_MODULE_1__components_basic_pop_plantation_vue___default.a,
        AreaUnit: __WEBPACK_IMPORTED_MODULE_2__components_public_area_unit_vue___default.a,
        PopPlanta: __WEBPACK_IMPORTED_MODULE_3__components_basic_pop_planta_vue___default.a,
        PopPlant: __WEBPACK_IMPORTED_MODULE_4__components_basic_pop_plant_vue___default.a,
        MyImage: __WEBPACK_IMPORTED_MODULE_5__components_public_image_vue___default.a,
        PopManure: __WEBPACK_IMPORTED_MODULE_6__components_basic_pop_manure_vue___default.a,
        PopMedicament: __WEBPACK_IMPORTED_MODULE_7__components_basic_pop_medicament_vue___default.a,
        PopExpert: __WEBPACK_IMPORTED_MODULE_8__components_basic_pop_expert_vue___default.a,
        ResearchField: __WEBPACK_IMPORTED_MODULE_9__components_basic_research_field_vue___default.a
    }
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_image_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_public_image_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_beast_pop_farm_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_beast_pop_farm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_beast_pop_farm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_beast_pop_farmed_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_beast_pop_farmed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_beast_pop_farmed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_beast_pop_beast_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_beast_pop_beast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_beast_pop_beast_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_beast_pop_fodder_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_beast_pop_fodder_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_beast_pop_fodder_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_beast_fodder_type_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_beast_fodder_type_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_beast_fodder_type_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_beast_pop_drug_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_beast_pop_drug_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_beast_pop_drug_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_beast_drug_type_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_beast_drug_type_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_beast_drug_type_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_beast_pop_operate_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_beast_pop_operate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_beast_pop_operate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_beast_pop_expert_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_beast_pop_expert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_beast_pop_expert_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_beast_operate_type_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_beast_operate_type_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_beast_operate_type_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Basic',
    data: function data() {
        return {
            taps: [{ name: '养殖场信息', key: 'farm' }, { name: '养殖区信息', key: 'farmed' }, { name: '畜禽档案', key: 'beast' }, { name: '饲料档案', key: 'fodder' }, { name: '兽药档案', key: 'drug' }, { name: '人物档案', key: 'operate' }, { name: '专家档案', key: 'expert' }],
            tableLists: [{
                key: 'farm',
                component: { farm: __WEBPACK_IMPORTED_MODULE_3__components_beast_pop_farm_vue___default.a, area: __WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue___default.a },
                searchPlaceholder: '养殖场名称',
                searchUrl: 'farm',
                theads: ['养殖场名称', '养殖面积', '负责人'],
                protos: ['name', 'area', 'principal'],
                widths: [32, 24, 17]
            }, {
                key: 'farmed',
                component: { farmed: __WEBPACK_IMPORTED_MODULE_4__components_beast_pop_farmed_vue___default.a, area: __WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue___default.a },
                searchPlaceholder: '养殖区名称',
                searchUrl: 'farmed',
                theads: ['养殖区名称', '养殖面积', '负责人'],
                protos: ['name', 'area', 'principal'],
                widths: [32, 24, 17]
            }, {
                key: 'beast',
                component: { beast: __WEBPACK_IMPORTED_MODULE_5__components_beast_pop_beast_vue___default.a, image: __WEBPACK_IMPORTED_MODULE_2__components_public_image_vue___default.a },
                searchPlaceholder: '畜禽名称',
                searchUrl: 'beast',
                theads: ['畜禽种类', '畜禽名称', '已传图片'],
                protos: ['type_name', 'name', 'image'],
                widths: [32, 24, 17]
            }, {
                key: 'fodder',
                component: { fodder: __WEBPACK_IMPORTED_MODULE_6__components_beast_pop_fodder_vue___default.a, fodder_type: __WEBPACK_IMPORTED_MODULE_7__components_beast_fodder_type_vue___default.a },
                searchPlaceholder: '饲料名称',
                searchUrl: 'fodder',
                theads: ['饲料类别', '饲料名称', '用途'],
                protos: ['fodder_type', 'name', 'use'],
                widths: [32, 24, 17]
            }, {
                key: 'drug',
                component: { drug: __WEBPACK_IMPORTED_MODULE_8__components_beast_pop_drug_vue___default.a, drug_type: __WEBPACK_IMPORTED_MODULE_9__components_beast_drug_type_vue___default.a },
                searchPlaceholder: '兽药名称',
                searchUrl: 'drug',
                theads: ['兽药类别', '兽药名称', '用途'],
                protos: ['drug_type', 'name', 'use'],
                widths: [32, 24, 17]
            }, {
                key: 'operate',
                component: { operate: __WEBPACK_IMPORTED_MODULE_10__components_beast_pop_operate_vue___default.a },
                searchPlaceholder: '姓名',
                searchUrl: 'operate',
                theads: ['姓名', '年龄', '身份'],
                protos: ['name', 'age', 'identity'],
                widths: [28, 24, 21]
            }, {
                key: 'expert',
                component: { expert: __WEBPACK_IMPORTED_MODULE_11__components_beast_pop_expert_vue___default.a, table_type: __WEBPACK_IMPORTED_MODULE_12__components_beast_operate_type_vue___default.a },
                searchPlaceholder: '专家名称',
                searchUrl: 'expert',
                theads: ['操作模块', '专家名称', '研究领域'],
                protos: ['table_type', 'expert_name', 'major'],
                widths: [28, 24, 21]
            }]
        };
    },

    components: {
        BasicModel: __WEBPACK_IMPORTED_MODULE_0__components_public_basic_model_vue___default.a,
        AreaUnit: __WEBPACK_IMPORTED_MODULE_1__components_public_area_unit_vue___default.a,
        MyImage: __WEBPACK_IMPORTED_MODULE_2__components_public_image_vue___default.a,
        PopFarm: __WEBPACK_IMPORTED_MODULE_3__components_beast_pop_farm_vue___default.a,
        PopFarmed: __WEBPACK_IMPORTED_MODULE_4__components_beast_pop_farmed_vue___default.a,
        PopBeast: __WEBPACK_IMPORTED_MODULE_5__components_beast_pop_beast_vue___default.a,
        PopFodder: __WEBPACK_IMPORTED_MODULE_6__components_beast_pop_fodder_vue___default.a,
        FodderType: __WEBPACK_IMPORTED_MODULE_7__components_beast_fodder_type_vue___default.a,
        PopDrug: __WEBPACK_IMPORTED_MODULE_8__components_beast_pop_drug_vue___default.a,
        DrugType: __WEBPACK_IMPORTED_MODULE_9__components_beast_drug_type_vue___default.a,
        PopOperate: __WEBPACK_IMPORTED_MODULE_10__components_beast_pop_operate_vue___default.a,
        OperateType: __WEBPACK_IMPORTED_MODULE_12__components_beast_operate_type_vue___default.a
    }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    name: 'dailylog',
    data: function data() {
        return {
            title: [['农业日志']],
            empty: [[]],
            fixation: [['时间:'], ['天气:'], ['记录人:'], ['第    期']],
            data1: [['种植区', '果蔬名称']],
            data2: [['播种/育苗', '移栽']],
            data3: [['施肥']],
            data4: [['病虫害防治']],
            data5: [['生长周期(天)', '种植面积(垄)', '采收重量(斤)', '操作人']],
            data6: [['品种', '方式', '品种', '密度(cm)', '种类', '数量(kg)', '方式', '名称', '施用方法', '对象']],
            dailylog: [],
            daily_record: [],
            imageSrc: '',
            showpic: false
        };
    },
    mounted: function mounted() {
        this.getDailylog();
    },

    methods: {
        //获取日志详细信息
        getDailylog: function getDailylog() {
            var _this = this;

            this.$http.get(this.$adminUrl('dailylog/getlog'), { params: this.$route.params }).then(function (response) {
                //计算canvas高度
                _this.canvasHeight = 180 + 80 * response.data.arr.length;
                var canvas = document.getElementById("canvas");
                canvas.height = _this.canvasHeight;

                //标题
                _this.tabHead(1120, 40, 1, 1, 0, 0, _this.title);
                //天气
                _this.tabHead(1120, 30, 1, 1, 0, 40, _this.empty);
                //地块，作物
                _this.tabHead(70, 110, 1, 2, 0, 70, _this.data1);
                //播种，移栽
                _this.tabHead(140, 40, 1, 2, 140, 70, _this.data2);
                //施肥
                _this.tabHead(210, 40, 1, 1, 420, 70, _this.data3);
                //病虫害
                _this.tabHead(210, 40, 1, 1, 630, 70, _this.data4);
                //除草后6个
                _this.tabHead(70, 110, 1, 4, 840, 70, _this.data5);
                //品种后的所有
                _this.tabHead(70, 70, 1, 10, 140, 110, _this.data6);

                _this.$set(_this, 'dailylog', response.data.arr);
                _this.tabHead(70, 80, _this.dailylog.length, 16, 0, 180, _this.dailylog);

                //获取时间，天气，操作人，期数
                _this.$set(_this, 'daily_record', response.data.daily_record);
                _this.getMessage();

                //时间列固定
                _this.getFixation();

                //显示图片日志
                _this.show();
            }, function (response) {});
        },

        //画fixation
        getFixation: function getFixation() {
            var c = document.getElementById("canvas");
            var cxt = c.getContext("2d");
            cxt.textAlign = 'center';
            cxt.font = '17px Arial';
            //时间
            var beginX = 140;
            var beginY = 65;
            cxt.fillText(this.fixation[0], beginX, beginY);

            //天气
            var beginWeatherX = 500;
            var beginWeatherY = 65;
            cxt.fillText(this.fixation[1], beginWeatherX, beginWeatherY);

            //记录员
            var beginOperatorX = 760;
            var beginOperatorY = 65;
            cxt.fillText(this.fixation[2], beginOperatorX, beginOperatorY);

            //期数
            var beginNumberX = 980;
            var beginNumberY = 65;
            cxt.fillText(this.fixation[3], beginNumberX, beginNumberY);
        },

        //画message
        getMessage: function getMessage() {
            var c = document.getElementById("canvas");
            var cxt = c.getContext("2d");
            cxt.textAlign = 'center';
            cxt.font = '17px Arial';
            //时间
            var beginDateX = 280;
            var beginDateY = 65;
            cxt.fillText(this.daily_record[0], beginDateX, beginDateY);

            //天气
            var beginWeatherX = 550;
            var beginWeatherY = 65;
            cxt.fillText(this.daily_record[1], beginWeatherX, beginWeatherY);

            //记录员
            var beginOperatorX = 810;
            var beginOperatorY = 65;
            cxt.fillText(this.daily_record[2], beginOperatorX, beginOperatorY);

            //期数
            var beginNumberX = 975;
            var beginNumberY = 65;
            cxt.fillText(this.daily_record[3], beginNumberX, beginNumberY);
        },

        //循环canvans
        tabHead: function tabHead(width, height, list, row, beginX, beginY, data) {
            //用来画表格的函数
            var c = document.getElementById("canvas");
            var cxt = c.getContext("2d");
            cxt.font = '16px Arial';
            cxt.textAlign = 'center';
            for (var r = 1; r <= row; r++) {
                //控制画多少行            
                for (var l = 1; l <= list; l++) {
                    //控制画多少列               
                    var x = beginX + (r - 1) * width;
                    var y = beginY + (l - 1) * height;
                    //坐标
                    var x_zuobiao = x + width / 2;
                    var y_zuobiao = y + height / 2;
                    cxt.fillStyle = "#ffffff";
                    cxt.fillRect(x, y, width, height);
                    cxt.rect(x, y, width, height);
                    cxt.fillStyle = "#000000";
                    if (data[l - 1][r - 1] != undefined) {
                        this.canvasTextAutoLine(data[l - 1][r - 1], c, x_zuobiao, y_zuobiao, 16, width, height);
                    }
                }
            }
            cxt.stroke();
        },

        //文本框超出规定最大宽度自动换行
        canvasTextAutoLine: function canvasTextAutoLine(str, canvas, initX, initY, lineHeight, maxWidth, maxHeight) {
            var ctx = canvas.getContext("2d");
            var lineWidth = 0;
            var lastSubStrIndex = 0;
            for (var i = 0; i < str.length; i++) {
                lineWidth += ctx.measureText(str[i]).width;
                if (lineWidth > maxWidth - 10) {
                    //防止边界问题
                    ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY);
                    initY += lineHeight;
                    lineWidth = 0;
                    lastSubStrIndex = i;
                }
                if (i == str.length - 1) {
                    ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY);
                }
            }
        },


        //将图片显示在网页中
        show: function show() {
            var canvas = document.getElementById("canvas");
            var ImgSrc = canvas.toDataURL("image/png");
            this.imageSrc = ImgSrc;
        },
        showpop: function showpop() {
            this.showpic = true;
        },
        toHide: function toHide() {
            this.showpic = false;
        }
    }
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	name: 'hispic',
	props: {
		item: {
			type: Object
		}
	}
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_header_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_public_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_slider_bar_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_slider_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_public_slider_bar_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Index',
    data: function data() {
        return {
            // 是否显示侧边栏
            show: false,
            // 侧边栏数据
            navbars: [{
                name: '农业日志',
                role: 'log',
                isEvent: true,
                children: []
            }, {
                name: '种植管理',
                role: 'plantation',
                isEvent: false,
                children: [{
                    path: '/webapp/basic',
                    name: '种植基础信息管理'
                }]
            }, {
                name: '养殖管理',
                role: 'beast',
                isEvent: false,
                children: [{
                    path: '/webapp/beast',
                    name: '养殖基础信息管理'
                }]
            }]
        };
    },

    computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])(['title'])),
    components: {
        MyHeader: __WEBPACK_IMPORTED_MODULE_1__components_public_header_vue___default.a,
        SliderBar: __WEBPACK_IMPORTED_MODULE_2__components_public_slider_bar_vue___default.a
    },
    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])([]), {

        /**
         * 获取子菜单项
         * @param  {String} name 
         */
        getSubNavbars: function getSubNavbars(name) {
            var _this = this;

            if (name == '农业日志') {
                this.$http.get(this.$adminUrl('dailylog/gap')).then(function (response) {
                    var subnavbars = [];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = response.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var subnavbar = _step.value;

                            var item = {};
                            item.path = '/webapp/log/' + subnavbar.plantation_id;
                            item.name = subnavbar.plantation_name;
                            subnavbars.push(item);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    _this.navbars[0].children = subnavbars;
                }, function (response) {});
            }
        },

        /**
         * 历史图片页面
         */
        record: function record() {
            this.$router.push('/webapp/record');
        }
    })
};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_search_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_public_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_public_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_paginator_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_public_paginator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_public_paginator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_log_pop_log_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_log_pop_log_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_log_pop_log_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Basic',
    data: function data() {
        return {
            // 顶部栏标题
            title: '每日农业日志',
            // 种植区列表数据
            list: [],
            // 分页总数
            total: 1,
            // 存放是否展开编辑模块的标志，
            showItemDetail: '',
            // 临时存储种植区项
            plantaTmp: null,
            show: false,
            message: '是否保存当前内容并生成图片'
        };
    },

    computed: {
        // 包含种植场id的参数
        params: function params() {
            return { params: { plantation_id: this.$route.params.id } };
        }
    },
    components: {
        Search: __WEBPACK_IMPORTED_MODULE_1__components_public_search_vue___default.a,
        Paginator: __WEBPACK_IMPORTED_MODULE_2__components_public_paginator_vue___default.a,
        PopLog: __WEBPACK_IMPORTED_MODULE_3__components_log_pop_log_vue___default.a
    },
    mounted: function mounted() {
        this.setTitle('农业日志');
        this.getAllPlanta();
    },

    watch: {
        '$route': function $route(to, from) {
            this.getAllPlanta();
        }
    },
    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])(['setTitle']), {

        /**
         * 用搜索结果更新list
         * @param  {Object} newList
         */
        updateList: function updateList(newList) {
            this.$set(this, 'list', newList.data);
            this.total = newList.last_page;
        },


        /**
        * 显示或隐藏编辑模块，同时缓存log对象
        * @param {Number} manure
        */
        troggleEdit: function troggleEdit(log) {
            if (this.showItemDetail != log.cultivate_id) {
                this.showItemDetail = log.cultivate_id;
                this.plantaTmp = log;
            } else {
                this.showItemDetail = '';
                this.plantaTmp = null;
            }
        },


        /**
        * 关闭编辑模块
        * @param manure
        */
        closeOwnEditPane: function closeOwnEditPane(id) {
            this.troggleEdit(id);
        },


        /**
         * 获取所有种植区
         */
        getAllPlanta: function getAllPlanta() {
            var _this = this;

            this.$http.get(this.$adminUrl('dailylog/query'), { params: this.params }).then(function (response) {
                _this.$set(_this, 'list', response.body.data);
            }, function (error) {
                if (error.status == 401) {
                    _this.$router.push('/webapp/login/401');
                } else {
                    _this.$alert('连接出错', 'e');
                }
            });
        },


        /**
         * 提交种植场对应种植区所有信息
         */
        putAllStore: function putAllStore(num) {
            var _this2 = this;

            this.$http.post(this.$adminUrl('dailylog/allstore'), { params: this.params.params }).then(function (response) {
                _this2.show = false;
                _this2.$alert('操作成功', 's');
            }, function (response) {
                _this2.$alert('连接出错', 'e');
            });
            //等于1表示是生成图片
            if (num == 1) {
                this.$http.post(this.$adminUrl('dailylog/wad')).then(function (response) {
                    _this2.$router.push('/webapp/dailylog');
                }, function (response) {
                    _this2.$alert('连接出错', 'e');
                });
            }
        },


        /**
         * 更新操作人
         * @param  {String} name 操作人名称
         */
        changeOperator: function changeOperator(name) {
            this.plantaTmp.cultivate_man = name;
            this.plantaTmp.date = '';
            this.plantaTmp = null;
        }
    })
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    name: 'Login',
    data: function data() {
        return {
            self: this,
            user: {
                login: '',
                password: ''
            },
            // 用户名表单验证出错的标志
            isNameError: false,
            // 密码表单验证出错的标志
            isPasswordError: false,
            // 后端用户名或密码不匹配的标志
            isError: false,
            // 登录按钮的文本
            loginBtn: '登录',
            // 登录按钮是否可用的标志，false表示可用
            isLogin: false,
            // 是否显示logo
            showLogo: true,
            formPadding: null
        };
    },

    computed: {
        userNamePlaceholder: function userNamePlaceholder() {
            if (this.errors.has('login')) {
                this.isNameError = true;
                return this.errors.first('login');
            }
            return '用户名/邮箱/电话';
        },
        passwordPlaceholder: function passwordPlaceholder() {
            if (this.errors.has('password')) {
                this.isPasswordError = true;
                return this.errors.first('password');
            }
            return '密码';
        }
    },
    mounted: function mounted() {
        if (this.$route.params.code == '401') {
            axios.get('/token').then(function (response) {
                window.role = response.data;
                Laravel.csrfToken = response.data.token;
            }).catch(function (error) {
                if (error.status != 200) {
                    this.loginBtn = '登录';
                    this.isLogin = false;
                    alert('token获取失败');
                }
            });
        }
        this.$mySpinner(false);
    },

    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])(['setUserInfo']), {

        /**
         * 登录
         */
        login: function login() {
            var _this = this;

            this.showLogoFn();
            // 验证表单
            this.$validator.validateAll();
            // 如果表单报错则不提交
            if (this.errors.any()) {
                return false;
            } else {
                this.loginBtn = '登录中...';
                this.isLogin = true;
                axios.post('/login', this.user).then(function (response) {
                    if (response.data == '用户名或密码错误') {
                        _this.isError = true;
                        _this.loginBtn = '登录';
                        _this.isLogin = false;
                    } else {
                        // sessionStorage.setItem('user', response.data)
                        // this.setUserInfo(response.data)
                        var isPlantation = response.data.role1.some(function (item, index) {
                            return item === 'plantation';
                        });

                        if (isPlantation) {
                            _this.$router.push('/webapp');
                            return true;
                        } else {
                            _this.$router.push('/webapp/beast');
                        }
                    }
                }).catch(function (error) {
                    if (error.status != 200) {
                        this.loginBtn = '登录';
                        this.isLogin = false;
                        this.$alert('连接出错，请重新登录', 'e');
                    }
                });
            }
        },
        hideLogo: function hideLogo() {
            this.showLogo = false;
        },
        showLogoFn: function showLogoFn() {
            this.showLogo = true;
        }
    })
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_table_list_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_public_table_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_public_table_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hispic_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hispic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__hispic_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	name: 'record',
	data: function data() {
		return {
			key: 'record',
			component: { open: null, hispic: __WEBPACK_IMPORTED_MODULE_1__hispic_vue___default.a },
			searchPlaceholder: '历史日期',
			searchUrl: 'record',
			theads: ['日期', '天气', '操作人'],
			protos: ['date', 'weathe', 'recorder'],
			widths: [28, 28, 17]
		};
	},

	components: {
		tableList: __WEBPACK_IMPORTED_MODULE_0__components_public_table_list_vue___default.a,
		Hispic: __WEBPACK_IMPORTED_MODULE_1__hispic_vue___default.a
	},
	mounted: function mounted() {
		this.$refs.tableList.getAllLists(this.searchUrl);
	},

	methods: {
		/**
   * 返回
   */
		back: function back() {
			this.$router.push('/webapp');
		}
	}
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
/**
 * 长按提示删除
 */
exports.touchDelete = function () {
    return function (el, binding) {
        var time = null;
        el.addEventListener("touchstart", function (event) {
            time = setTimeout(function () {
                var vm = binding.value.vm;
                var type = binding.value.type;
                var id = binding.value.id;
                var index = binding.value.index;
                var flag = binding.value.flag;
                var tip = binding.value.tip;
                if (!flag) {
                    var deleteFunction = binding.arg;
                    vm[deleteFunction](type, id, index);
                } else {
                    vm.$alert(tip);
                }
            }, 500);
        });

        el.addEventListener("touchmove", function (event) {
            clearTimeout(time);
        });

        el.addEventListener("touchend", function (event) {
            clearTimeout(time);
        });
    };
};

/**
 * 自动获取焦点
 */
exports.focus = function () {
    return {
        inserted: function inserted(el, binding, vnode) {
            el.focus();
        }
    };
};

/**
 * 失去焦点
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.unfocus = function () {
    return {
        inserted: function inserted(el, binding, vnode) {
            // 参数必须为数组
            if (!(binding.value instanceof Array)) {

                console.error('arguments must be array in v-touchstart');
            } else if (binding.value.length >= 1) {
                // 且参数数组不能为空

                // 参数数组第一个数据必须是vue实例
                if (!(binding.value[0] instanceof Vue && binding.value[0].constructor != Vue)) {
                    console.error('the first argument must be Vue instance in v-touchstart');
                } else {
                    (function () {
                        var params = binding.value.slice(1);
                        var myFunction = binding.arg;
                        var $el = $(el);
                        $el.blur(function () {
                            binding.value[0][myFunction](event, params);
                        });
                    })();
                }
            }
        }
    };
};

/**
 * 触摸开始
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchstart = function () {
    return {
        bind: function bind(el, binding) {
            el.addEventListener("touchstart", function (event) {
                reactiveFn(binding, 'arguments must be array in v-touchstart', 'the first argument must be Vue instance in v-touchstart');
            });
        }
    };
};

/**
 * 触摸移动
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchmove = function () {
    return {
        bind: function bind(el, binding) {
            el.addEventListener("touchmove", function (event) {
                reactiveFn(binding, 'arguments must be array in v-touchmove', 'the first argument must be Vue instance in v-touchmove');
            });
        }
    };
};

/**
 * 触摸结束
 * @param {Array} 传入的参数必须为数组，数组第一个值为vue实例
 */
exports.touchend = function () {
    return {
        bind: function bind(el, binding) {
            el.addEventListener("touchend", function (event) {
                reactiveFn(binding, 'arguments must be array in v-touchend', 'the first argument must be Vue instance in v-touchend');
            });
        }
    };
};

function reactiveFn(binding, firErr, SecErr) {
    // 参数必须为数组
    if (!(binding.value instanceof Array)) {

        console.error(firErr);
    } else if (binding.value.length >= 1) {
        // 且参数数组不能为空

        // 参数数组第一个数据必须是vue实例
        if (!(binding.value[0] instanceof Vue && binding.value[0].constructor != Vue)) {
            console.error(SecErr);
        } else {
            var params = binding.value.slice(1);
            var myFunction = binding.arg;
            binding.value[0][myFunction](event, params);
        }
    }
}

/**
 * 固定元素
 */
exports.sticky = function () {
    return {
        bind: function bind(el, binding, vnode) {
            var $el = $(el);
            $el.sticky({
                topSpacing: 0,
                zIndex: 19920218
            });
        }
    };
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {


/**
 *
 * 以数组下标的方式从对象中取数据
 *
 * @param object
 * @param index
 * @returns {*}
 */
exports.getItemFromObject = function (object, index) {
  var arr = Array.from(namesSet);
  return arr[index];
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_validate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_validate_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_directive_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_directive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__directive_directive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_easyAjax__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_filters_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_filters_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__filters_filters_js__);


// 注册全局组件
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('confirm', __webpack_require__(83));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('PopTransition', __webpack_require__(88));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('pop-select', __webpack_require__(87));
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('loading', __webpack_require__(85));

// 注册自定义验证规则


Object.keys(__WEBPACK_IMPORTED_MODULE_2__utils_validate_js___default.a).forEach(function (k) {
  return __WEBPACK_IMPORTED_MODULE_1_vee_validate__["Validator"].extend(k, __WEBPACK_IMPORTED_MODULE_2__utils_validate_js___default.a[k]());
});

// 注册自定义指令

Object.keys(__WEBPACK_IMPORTED_MODULE_3__directive_directive_js___default.a).forEach(function (k) {
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.directive(k, __WEBPACK_IMPORTED_MODULE_3__directive_directive_js___default.a[k]());
});

// 注册全局方法


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__utils_easyAjax__["a" /* default */]);

// 实例化Vue的filter

Object.keys(__WEBPACK_IMPORTED_MODULE_6__filters_filters_js___default.a).forEach(function (k) {
  return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter(k, __WEBPACK_IMPORTED_MODULE_6__filters_filters_js___default.a[k]);
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createView;

function createView(component) {
  return {
    name: "" + component.name,
    // this will be called during SSR to pre-fetch data into the store!
    preFetch: function preFetch(store) {
      // return store.dispatch('FETCH_LIST_DATA', { type })
    },
    render: function render(h) {
      return h(component);
    }
  };
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CreateView__ = __webpack_require__(56);
/**
 * 路由
 */




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

//=============================顶层组件====================================
//---------------------------最顶层组件----------------------------------
var index = __webpack_require__(95);

//---------------------------登录租金----------------------------------
var login = __webpack_require__(97);

//---------------------------农业日志----------------------------------
var log = __webpack_require__(96);

//---------------------------404----------------------------------
var notFound = __webpack_require__(90);

//---------------------------图片日志------------------------------
var dailylog = __webpack_require__(93);

//---------------------------历史图片------------------------------
var record = __webpack_require__(98);

//=============================种植管理====================================

//---------------------------种植基础信息管理----------------------------------
var basic = __webpack_require__(91);

//=============================养殖管理====================================

//---------------------------养殖基础信息管理----------------------------------
var beast = __webpack_require__(92);

var routes = [{
    path: '/',
    redirect: '/webapp/login/200'
}, {
    path: '/webapp',
    component: index,
    children: [{
        path: '',
        component: log,
        meta: { requiresAuth: true }
    }, {
        path: 'basic',
        name: 'basic',
        component: basic,
        meta: { requiresAuth: true }
    }, {
        path: 'beast',
        name: 'beast',
        component: beast,
        meta: { requiresAuth: true }
    }, {
        path: 'log/:id',
        name: 'log',
        component: log,
        meta: { requiresAuth: true }
    }, {
        path: 'dailylog',
        name: 'dailylog',
        component: dailylog,
        meta: { requiresAuth: true }
    }, {
        path: 'record',
        name: 'record',
        component: record,
        meta: { requiresAuth: true }
    }]
}, {
    path: '/webapp/login/:code',
    name: 'login',
    component: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__CreateView__["a" /* createView */])(login)
}, {
    path: '/404',
    name: '404',
    component: notFound
}];

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    routes: routes
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/**
 * 全局注册通用方法
 */
/* harmony default export */ __webpack_exports__["a"] = {
    install: function install() {

        /**
         * 获取分页后的列表项
         * @param vm
         * @param url
         * @param resolve
         * @param reject
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$index = function (vm, url) {
            return new Promise(function (resolve, reject) {
                vm.$http.get(vm.$adminUrl(url + '/query')).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            });
        };

        /**
         * 新增一条记录，附带验证检测判断
         * @param vm
         * @param url
         * @param messages
         * @param hasFile
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$storeL = function (vm, url, messages) {
            var hasFile = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            return new Promise(function (resolve, reject) {
                // 验证表单
                vm.$validator.validateAll();
                // 如果表单报错则不提交
                if (vm.errors.any()) {
                    reject(false);
                } else {
                    var headers = hasFile === true ? { headers: { 'Content-Type': 'multipart/form-data' } } : {};
                    vm.$http.post(vm.$adminUrl(url), messages, headers).then(function (response) {
                        resolve(response);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
        };

        /**
         * 单个删除
         * @param vm
         * @param url
         * @param id
         * @param resolve
         * @param reject
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$destroyL = function (vm, url, id) {
            return new Promise(function (resolve, reject) {
                vm.$http.delete(vm.$adminUrl(url + '/' + id)).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            });
        };

        /**
         * 批量删除
         * @param vm
         * @param url
         * @param ids
         * @param resolve
         * @param reject
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$batchDestroy = function (vm, url, ids) {
            return new Promise(function (resolve, reject) {
                vm.$http.delete(vm.$adminUrl(url + '/deletes'), { body: { 'ids': ids } }).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            });
        };

        /**
         * 检查重名
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$check = function (vm, url, params) {
            return new Promise(function (resolve, reject) {
                vm.$http.get(vm.$adminUrl(url + '/check'), { params: params }).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            });
        };

        /**
         * 更新编辑
         * @param vm
         * @param url
         * @param messages
         * @param resolve
         * @param reject
         * @returns {boolean}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$update = function (vm, url, messages) {
            var hasFile = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            return new Promise(function (resolve, reject) {
                // 验证表单
                vm.$validator.validateAll();
                // 如果表单报错则不提交
                if (vm.errors.any()) {
                    reject(false);
                } else {
                    var headers = hasFile === true ? { headers: { 'Content-Type': 'multipart/form-data' } } : {};
                    var id = hasFile === true ? messages.get('id') : messages.id;
                    vm.$http.put(vm.$adminUrl(url) + '/' + id, messages, headers).then(function (response) {
                        resolve(response);
                    }, function (error) {
                        reject(error);
                    });
                }
            });
        };

        /**
         * 查询
         * @param vm
         * @param url
         * @param params
         * @param resolve
         * @param reject
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$queryWithParams = function (vm, url, params) {
            return new Promise(function (resolve, reject) {
                vm.$http.get(vm.$adminUrl(url + '/query'), { params: params }).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            });
        };
    }
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/**
 * 全局注册通用方法
 */
/* harmony default export */ __webpack_exports__["a"] = {
    install: function install() {

        /**
         * 弱提醒
         * @param msg
         */
        var timer = null;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$alert = function (msg) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'msg';

            $('#alertWeek').remove();
            var color = '';
            switch (type) {
                case 'm':
                case 'msg':
                    color = 'rgba(0,0,0,0.5)';
                    break;
                case 's':
                case 'success':
                    color = 'rgba(76,175,80,0.8)';
                    break;
                case 'e':
                case 'error':
                    color = 'rgba(244,67,54,0.6)';
                    break;
            }
            var $alert = $('<div class="week-alert" id="alertWeek"></div>');
            $alert.css({
                'position': 'absolute',
                'left': '0',
                'right': '0',
                'bottom': '-59px',
                'height': '59px',
                'lineHeight': '59px',
                'backgroundColor': color,
                'color': 'white',
                'textAlign': 'center',
                'boxSizing': 'border-box'
            });
            $('body').append($alert);
            $alert.animate({
                bottom: '0'
            }, 300);
            $alert.html(msg);
            clearTimeout(timer);
            timer = setTimeout(function () {
                $alert.animate({
                    opacity: '0'
                }, 300, function () {
                    $alert.remove();
                });
            }, 1500);
        };

        var env = __webpack_require__(11);
        // let host = env.app_url;
        var host = '';
        /**
         * 自动生成完整的前台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$homeUrl = function (url) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';


            var regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/home/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/home/p/' + url;
            }
        };

        /**
         * 自动生成完整的后台url
         *
         * @param url {string}
         * @param type {string} url的类型，c为接口类型，p为视图类型
         * @returns {string}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$adminUrl = function (url) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';


            var regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (type == 'c' || type == 'C') {
                return host + '/admin/c/' + url;
            }

            if (type == 'p' || type == 'P') {
                return host + '/admin/p/' + url;
            }
        };

        /**
         * 判断是否重名
         * @param vm
         * @param url
         * @param params
         * @param field
         * @param callback
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$unique = function (vm, url, params, field) {

            return new Promise(function (resolve, reject) {
                vm.$check(vm, url, params).then(function (response) {

                    if (response.body == 'false') {

                        var errorBag = vm.$validator.getErrors();
                        field = field.split('.')[1];
                        errorBag.add(field, '\u540D\u79F0\u91CD\u590D');
                        reject();
                    } else {
                        resolve();
                    }
                }, function (error) {
                    reject(error);
                });
            });
        };

        /**
         * 比较器
         * @param proto
         * @returns {function()}
         */
        function compare(proto) {
            return function (ob1, ob2) {
                return ob1[proto] - ob2[proto];
            };
        }

        /**
         * 根据传过来的属性参数对对象数组继续逆序排序
         * @param arrObj 对象数组
         * @param proto 对象的属性
         * @returns {Array.<T>}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$reverseObj = function (arrObj, proto) {
            return arrObj.sort(compare(proto)).reverse();
        };

        /**
         * 把对象变成url参数
         * @param object
         * @returns {string}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$objectToParam = function (object) {
            var params = '';
            Object.keys(object).forEach(function (k) {
                return params += k + '=' + object[k] + '&';
            });
            return params;
        };

        /**
         *
         * 组合图片路径
         *
         * @param url
         * @returns {*}
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$img = function (url) {
            var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (url == undefined) {
                return;
            }
            if (url.indexOf('base64') > 0) {
                return url;
            }
            var regx = /^\/{1,}/g;
            url = url.replace(regx, '');

            if (flag) {
                return (env.is_server ? env.app_ano_url : '') + '/public/' + url;
            } else {
                return (env.is_server ? env.app_ano_url : '') + '/' + url;
            }
        };

        /**
         * 进度事件+进度条判断
         * @param  {Object} progressEvent
         */
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$myProgress = function (progressEvent) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$mySpinner(false);
        };

        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$mySpinner = function (flag) {
            if (!flag) {
                $('.loader').css('display', 'none');
            } else {
                $('.loader').css('display', 'block');
            }
        };
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {


/**
 * 手机或固定电话验证
 */
exports.phone = function () {
    return {
        getMessage: function getMessage(field) {
            return '格式错误';
        },
        validate: function validate(value) {
            var length = value.length;
            return length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value) || length == 12 && /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value);
        }
    };
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
// Vuex


__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_0_vuex___default.a.Store({
    state: {
        userInfo: { userId: '' },
        title: '农业日志'
    },
    mutations: {

        /**
         * 设置标题
         */
        setTitle: function setTitle(state, title) {
            state.title = title;
        },


        /**
         * 设置用户登录信息
         */
        setUserInfo: function setUserInfo(state, userInfo) {
            state.userInfo.userId = userInfo;
        }
    },

    actions: {
        setUserInfo: function setUserInfo(context, user) {
            context.commit('setUserInfo', user);
        }
    }

});

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* harmony default export */ __webpack_exports__["a"] = {
    after: function after(field, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            target = _ref2[0];

        return ' ' + field + '\u5FC5\u987B\u5728' + target + '\u4E4B\u540E';
    },
    alpha_dash: function alpha_dash(field) {
        return ' ' + field + '\u80FD\u591F\u5305\u542B\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26\uFF0C\u5305\u62EC\u7834\u6298\u53F7\u3001\u4E0B\u5212\u7EBF';
    },
    alpha_num: function alpha_num(field) {
        return field + '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u6570\u5B57\u5B57\u7B26.';
    },
    alpha_spaces: function alpha_spaces(field) {
        return ' ' + field + '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C.';
    },
    alpha: function alpha(field) {
        return ' ' + field + '\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u5B57\u7B26.';
    },
    before: function before(field, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            target = _ref4[0];

        return ' ' + field + '\u5FC5\u987B\u5728' + target + ' \u4E4B\u524D.';
    },
    between: function between(field, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            min = _ref6[0],
            max = _ref6[1];

        return ' ' + field + '\u5FC5\u987B\u5728' + min + ' ' + max + '\u4E4B\u95F4.';
    },
    confirmed: function confirmed(field, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            confirmedField = _ref8[0];

        return ' ' + field + '\u4E0D\u80FD\u548C' + confirmedField + '\u5339\u914D.';
    },
    date_between: function date_between(field, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            min = _ref10[0],
            max = _ref10[1];

        return ' ' + field + '\u5FC5\u987B\u5728' + min + '\u548C' + max + '\u4E4B\u95F4.';
    },
    date_format: function date_format(field, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
            format = _ref12[0];

        return ' ' + field + '\u5FC5\u987B\u5728\u5728' + format + '\u683C\u5F0F\u4E2D.';
    },
    decimal: function decimal(field) {
        var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'],
            _ref14 = _slicedToArray(_ref13, 1),
            decimals = _ref14[0];

        return ' ' + field + '\u5FC5\u987B\u662F\u6570\u5B57\u7684\u800C\u4E14\u80FD\u591F\u5305\u542B' + (decimals === '*' ? '' : decimals) + ' \u5C0F\u6570\u70B9.';
    },
    digits: function digits(field, _ref15) {
        var _ref16 = _slicedToArray(_ref15, 1),
            length = _ref16[0];

        return ' ' + field + '\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u4E14\u7CBE\u786E\u5230 ' + length + '\u6570';
    },
    dimensions: function dimensions(field, _ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
            width = _ref18[0],
            height = _ref18[1];

        return ' ' + field + '\u5FC5\u987B\u662F ' + width + ' \u50CF\u7D20\u5230 ' + height + ' \u50CF\u7D20.';
    },
    email: function email(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u6709\u6548\u7684\u90AE\u7BB1.';
    },
    ext: function ext(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u6709\u6548\u7684\u6587\u4EF6.';
    },
    image: function image(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u56FE\u7247.';
    },
    in: function _in(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u503C.';
    },
    ip: function ip(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5730\u5740.';
    },
    max: function max(field, _ref19) {
        var _ref20 = _slicedToArray(_ref19, 1),
            length = _ref20[0];

        return ' ' + field + '\u4E0D\u80FD\u5927\u4E8E' + length + '\u5B57\u7B26.';
    },
    mimes: function mimes(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u6709\u6548\u7684\u6587\u4EF6\u7C7B\u578B.';
    },
    min: function min(field, _ref21) {
        var _ref22 = _slicedToArray(_ref21, 1),
            length = _ref22[0];

        return ' ' + field + '\u5FC5\u987B\u81F3\u5C11\u6709 ' + length + ' \u5B57\u7B26.';
    },
    not_in: function not_in(field) {
        return ' ' + field + '\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u503C.';
    },
    numeric: function numeric(field) {
        return ' ' + field + '\u53EA\u80FD\u5305\u542B\u6570\u5B57\u5B57\u7B26.';
    },
    regex: function regex(field) {
        return ' ' + field + '\u683C\u5F0F\u65E0\u6548.';
    },
    required: function required(field) {
        return field + '\u662F\u5FC5\u987B\u7684.';
    },
    size: function size(field, _ref23) {
        var _ref24 = _slicedToArray(_ref23, 1),
            _size = _ref24[0];

        return ' ' + field + '\u5FC5\u987B\u5C0F\u4E8E ' + _size + ' KB.';
    },
    url: function url(field) {
        return ' ' + field + '\u4E0D\u662F\u6709\u6548\u7684url.';
    }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(111)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(131)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b8f4fa12"

module.exports = __vue_exports__


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-71790c9b"

module.exports = __vue_exports__


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(136)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dc912034"

module.exports = __vue_exports__


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-84d5c4a4"

module.exports = __vue_exports__


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(101)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1086dbba"

module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(122)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-734a7db7"

module.exports = __vue_exports__


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(110)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(102)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(116)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-00d1b213"

module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(120)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6f46cb1c"

module.exports = __vue_exports__


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(105)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-293f8ba6"

module.exports = __vue_exports__


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(127)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-92158e9c"

module.exports = __vue_exports__


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(106)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2b46bf51"

module.exports = __vue_exports__


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(126)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-853cde1c"

module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(134)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d71f7290"

module.exports = __vue_exports__


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(139)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fa478820"

module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(114)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-47d0d10d"

module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(115)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6082986c"

module.exports = __vue_exports__


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(123)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-755edde0"

module.exports = __vue_exports__


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(135)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d7f2a610"

module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(104)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(109)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2e30aea7"

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(107)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2cf2c367"

module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(117)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6a4cda6c"

module.exports = __vue_exports__


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(119)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6d4a5459"

module.exports = __vue_exports__


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-41f5877e"

module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2d9fb773"

module.exports = __vue_exports__


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(51)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-aea64150"

module.exports = __vue_exports__


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "pic-preview",
    on: {
      "click": _vm.selectPic
    }
  }, [(_vm.letItem.image == '' || _vm.letItem.image == null) ? _c('img', {
    attrs: {
      "src": _vm.$img(_vm.image)
    }
  }) : (_vm.letItem.image == 'upload.png') ? _c('img', {
    attrs: {
      "src": _vm.$img(_vm.letItem.image)
    }
  }) : _c('img', {
    attrs: {
      "src": _vm.$img(_vm.letItem.image, false)
    }
  })]), _c('input', {
    attrs: {
      "name": "file_name",
      "type": "file",
      "hidden": "hidden"
    },
    on: {
      "change": function($event) {
        _vm.previewPic(_vm.letItem, $event)
      }
    }
  }), _c('div', {
    staticClass: "delete-pic-btn"
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.deletePic
    }
  }, [_vm._v("删除")])])])]), _c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "畜禽名称",
      "type": "text",
      "id": "beast_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.desctiption),
      expression: "letItem.desctiption"
    }],
    attrs: {
      "type": "text",
      "id": "beast_new_desctiption",
      "name": "desctiption"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.desctiption)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.desctiption = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.ear),
      expression: "letItem.ear"
    }],
    attrs: {
      "type": "text",
      "id": "beast_new_ear",
      "name": "ear"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.ear)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.ear = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "beast_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditbeastation
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddbeastation
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(4)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "beast_new_fullName"
    }
  }, [_vm._v("畜禽名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "beast_new_desctiption"
    }
  }, [_vm._v("品种描述")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "beast_new_ear"
    }
  }, [_vm._v("RFID位置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "beast_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table-list', {
    ref: "tableList",
    attrs: {
      "component": _vm.component,
      "_key": _vm._key,
      "searchPlaceholder": _vm.searchPlaceholder,
      "searchUrl": _vm.searchUrl,
      "theads": _vm.theads,
      "protos": _vm.protos,
      "widths": _vm.widths
    }
  }, [_c('button', {
    staticClass: "stl-btn",
    on: {
      "click": _vm.back
    },
    slot: "search"
  }, [_vm._v("返回")])])], 1)
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "pid",
      "items": _vm.plantations,
      "defaultIndex": parseInt(_vm.defaultPlaIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsgPid
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('pid')),
      expression: "errors.has('pid')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('pid')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "种植区名称",
      "type": "text",
      "id": "planta_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop input-area"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.area),
      expression: "letItem.area"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.area),
      expression: "letItem.area",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|decimal:2",
      "data-vv-as": "种植面积",
      "type": "text",
      "id": "planta_new_area",
      "name": "area",
      "placeholder": "请填写数字(必填)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.area)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.area = $event.target.value
      }
    }
  })]), _c('td', {
    staticClass: "area_unit"
  }, [_c('pop-select', {
    attrs: {
      "name": "area_unit",
      "items": _vm.area_unit,
      "defaultIndex": parseInt(_vm.defaultUnitIndex)
    },
    on: {
      "callback": _vm.getMsgUnit
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('area')),
      expression: "errors.has('area')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('area')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "planta_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "planta_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.director),
      expression: "letItem.director"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "planta_new_principal",
      "name": "director"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.director)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.director = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "planta_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditPlanta
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddPlanta
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(7)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_fullName"
    }
  }, [_vm._v("种植场名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_fullName"
    }
  }, [_vm._v("种植区名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_area"
    }
  }, [_vm._v("种植面积")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_phone"
    }
  }, [_vm._v("详细电话")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_address"
    }
  }, [_vm._v("详细地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_principal"
    }
  }, [_vm._v("负责人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v("\n  " + _vm._s(_vm._f("table_name")(_vm.item.fodder_type)) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.plantation_name),
      expression: "log.plantation_name"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "id": "log_name",
      "name": "log_name",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm._s(_vm.log.plantation_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.plantation_name = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.planta_name),
      expression: "log.planta_name"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "planta_name",
      "name": "planta_name",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm._s(_vm.log.planta_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.planta_name = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.plant_name),
      expression: "log.plant_name"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "plant_name",
      "name": "plant_name",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm._s(_vm.log.plant_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.plant_name = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.plant_varieties),
      expression: "log.plant_varieties"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "plant_varieties",
      "name": "plant_varieties"
    },
    domProps: {
      "value": _vm._s(_vm.log.plant_varieties)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.plant_varieties = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.cultivate_mode),
      expression: "log.cultivate_mode"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "cultivate_mode",
      "name": "cultivate_mode"
    },
    domProps: {
      "value": _vm._s(_vm.log.cultivate_mode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.cultivate_mode = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.plant_tp_variety),
      expression: "log.plant_tp_variety"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "plant_tp_variety",
      "name": "plant_tp_variety"
    },
    domProps: {
      "value": _vm._s(_vm.log.plant_tp_variety)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.plant_tp_variety = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.cultivate_density),
      expression: "log.cultivate_density"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "cultivate_density",
      "name": "cultivate_density"
    },
    domProps: {
      "value": _vm._s(_vm.log.cultivate_density)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.cultivate_density = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "manure_name",
      "items": _vm.manureNames,
      "defaultIndex": 0,
      "protoBack": "manure_category_id",
      "protoShow": "manure_category_name"
    },
    on: {
      "callback": _vm.getManureName
    }
  })], 1)]), _c('tr', [_vm._m(8), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.fertilize_amount),
      expression: "log.fertilize_amount"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "fertilize_amount",
      "name": "fertilize_amount"
    },
    domProps: {
      "value": _vm._s(_vm.log.fertilize_amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.fertilize_amount = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(9), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "fertilize_way",
      "items": _vm.fertilizeWays,
      "defaultIndex": 0,
      "protoBack": "fertilize_way",
      "protoShow": "fertilize_way"
    },
    on: {
      "callback": _vm.getFertilizeWay
    }
  })], 1)]), _c('tr', [_vm._m(10), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "medicament_name",
      "items": _vm.medicamentNames,
      "defaultIndex": 0,
      "protoBack": "medicament_category_id",
      "protoShow": "medicament_name"
    },
    on: {
      "callback": _vm.getMedicamentName
    }
  })], 1)]), _c('tr', [_vm._m(11), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "spray_way",
      "items": _vm.sprayWays,
      "defaultIndex": 0,
      "protoBack": "spray_way",
      "protoShow": "spray_way"
    },
    on: {
      "callback": _vm.getSprayWay
    }
  })], 1)]), _c('tr', [_vm._m(12), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.control_objects),
      expression: "log.control_objects"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "control_objects",
      "name": "control_objects"
    },
    domProps: {
      "value": _vm._s(_vm.log.control_objects)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.control_objects = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(13), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.plant_growth),
      expression: "log.plant_growth"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "plant_growth",
      "name": "plant_growth",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm._s(_vm.log.plant_growth)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.plant_growth = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(14), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.planta_area),
      expression: "log.planta_area"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "planta_area",
      "name": "planta_area",
      "disabled": "disabled"
    },
    domProps: {
      "value": _vm._s(_vm.log.planta_area)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.planta_area = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(15), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.harvest_amount),
      expression: "log.harvest_amount"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "harvest_amount",
      "name": "harvest_amount"
    },
    domProps: {
      "value": _vm._s(_vm.log.harvest_amount)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.harvest_amount = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(16), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.log.cultivate_man),
      expression: "log.cultivate_man"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "placeholder": "",
      "id": "cultivate_man",
      "name": "cultivate_man"
    },
    domProps: {
      "value": _vm._s(_vm.log.cultivate_man)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.log.cultivate_man = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelPanel
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(17)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "logtion_name"
    }
  }, [_vm._v("种植场名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_name"
    }
  }, [_vm._v("种植区名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_name"
    }
  }, [_vm._v("果蔬名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_varieties"
    }
  }, [_vm._v("播种/育苗品种")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "cultivate_mode"
    }
  }, [_vm._v("播种/育苗方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_tp_variety"
    }
  }, [_vm._v("移栽品种")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "cultivate_density"
    }
  }, [_vm._v("移栽密度")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_name"
    }
  }, [_vm._v("施肥种类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fertilize_amount"
    }
  }, [_vm._v("施肥数量")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fertilize_way"
    }
  }, [_vm._v("施肥方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_name"
    }
  }, [_vm._v("病虫害名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "spray_way"
    }
  }, [_vm._v("施药方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "control_objects"
    }
  }, [_vm._v("防治对象")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_growth"
    }
  }, [_vm._v("生长周期")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "planta_area"
    }
  }, [_vm._v("种植面积")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "harvest_amount"
    }
  }, [_vm._v("采收重量")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "cultivate_man"
    }
  }, [_vm._v("操作人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    attrs: {
      "css": false
    },
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "expert_table_type",
      "name": "expert_table_type",
      "items": _vm.tableType,
      "defaultIndex": parseInt(_vm.defaultTypeIndex)
    },
    on: {
      "callback": _vm.getMsgType
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('table_type')),
      expression: "errors.has('table_type')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('table_type')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.expert_name),
      expression: "letItem.expert_name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.expert_name),
      expression: "letItem.expert_name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "专家名称",
      "type": "text",
      "id": "expert_new_fullName",
      "name": "expert_name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.expert_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.expert_name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('expert_name')),
      expression: "errors.has('expert_name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('expert_name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.major),
      expression: "letItem.major"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.major),
      expression: "letItem.major",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "研究领域",
      "type": "text",
      "id": "expert_major",
      "name": "major",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.major)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.major = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('major')),
      expression: "errors.has('major')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('major')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.level),
      expression: "letItem.level"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.level),
      expression: "letItem.level",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "级别",
      "type": "text",
      "id": "expert_level",
      "name": "level",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.level)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.level = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('level')),
      expression: "errors.has('level')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('level')))])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "expert_sex",
      "name": "expert_sex",
      "items": _vm.sex,
      "defaultIndex": parseInt(_vm.defaultSexIndex)
    },
    on: {
      "callback": _vm.getMsgSex
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('sex')),
      expression: "errors.has('sex')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('sex')))])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.age),
      expression: "letItem.age"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.age),
      expression: "letItem.age",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "decimal",
      "data-vv-as": "年龄",
      "type": "text",
      "id": "expert_new_age",
      "name": "age"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.age)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.age = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('age')),
      expression: "errors.has('age')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('age')))])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.unit),
      expression: "letItem.unit"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "value": "",
      "id": "expert_new_unit",
      "name": "unit"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.unit)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.unit = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "expert_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(8), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "expert_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditExpert
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddExpert
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(9)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_table_type"
    }
  }, [_vm._v("操作模块")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_fullName"
    }
  }, [_vm._v("专家名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_major"
    }
  }, [_vm._v("研究领域")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_level"
    }
  }, [_vm._v("级别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_sex"
    }
  }, [_vm._v("性别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_age"
    }
  }, [_vm._v("年龄")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_unit"
    }
  }, [_vm._v("所属单位")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "pid",
      "items": _vm.farms,
      "defaultIndex": parseInt(_vm.defaultfarmedIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsgPid
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('pid')),
      expression: "errors.has('pid')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('pid')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "养殖区名称",
      "type": "text",
      "id": "farmed_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.area),
      expression: "letItem.area"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.area),
      expression: "letItem.area",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|decimal:2",
      "data-vv-as": "养殖面积",
      "type": "text",
      "id": "farmed_new_area",
      "name": "area",
      "placeholder": "请填写数字(必填),单位是亩"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.area)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.area = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('area')),
      expression: "errors.has('area')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('area')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.principal),
      expression: "letItem.principal"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farmed_new_principal",
      "name": "principal"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.principal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.principal = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.kind),
      expression: "letItem.kind"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farmed_new_kind",
      "name": "kind"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.kind)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.kind = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.scale),
      expression: "letItem.scale"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farmed_new_scale",
      "name": "scale"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.scale)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.scale = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "farmed_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "farmed_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditfarmed
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddfarmed
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(8)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmeded_new_select"
    }
  }, [_vm._v("养殖场名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_fullName"
    }
  }, [_vm._v("养殖区名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_area"
    }
  }, [_vm._v("养殖面积")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_principal"
    }
  }, [_vm._v("负责人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_kind"
    }
  }, [_vm._v("养殖畜禽种类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_scale"
    }
  }, [_vm._v("养殖规模")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_address"
    }
  }, [_vm._v("地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farmed_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content"
  }, [_vm._v("\n      404  \n    ")])])
}]}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "log"
    }
  }, [_c('search', {
    attrs: {
      "placeholder": "搜索种植区",
      "searchUrl": "dailylog",
      "params": _vm.params
    },
    on: {
      "callback": _vm.updateList
    }
  }, [_c('button', {
    staticClass: "stl-btn",
    on: {
      "click": function($event) {
        _vm.show = true
      }
    }
  }, [_vm._v("提交内容")])]), _c('table', {
    staticClass: "table-list"
  }, [_vm._m(0), _c('tbody', {
    staticClass: "list-body"
  }, [_vm._l((_vm.list), function(log, index) {
    return [_c('tr', {
      class: {
        'list-body-tr': true, 'list-body-tr-event': (index % 2 != 0)
      }
    }, [_c('td', {
      staticClass: "td-note",
      attrs: {
        "name": "planta_name"
      }
    }, [_vm._v(_vm._s(log.planta_name))]), _c('td', {
      staticClass: "td-note",
      attrs: {
        "name": "plant_name"
      }
    }, [_vm._v(_vm._s(log.plant_name))]), _c('td', {
      staticClass: "td-note",
      attrs: {
        "name": "operator"
      }
    }, [_vm._v(_vm._s(log.cultivate_man))]), _c('td', {
      staticClass: "td-note",
      attrs: {
        "name": "finish"
      }
    }, [(log.date != null) ? _c('img', {
      attrs: {
        "src": _vm.$img('ok.png')
      }
    }) : _vm._e()]), _c('td', {
      staticClass: "align-c",
      attrs: {
        "name": "open"
      },
      on: {
        "click": function($event) {
          _vm.troggleEdit(log)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.$img('list.png')
      }
    })])]), (_vm.showItemDetail != '' && _vm.showItemDetail == log.cultivate_id) ? _c('tr', [_c('td', {
      attrs: {
        "colspan": "5"
      }
    }, [_c('pop-log', {
      attrs: {
        "cultivateId": log.cultivate_id
      },
      on: {
        "closeEdit": function($event) {
          _vm.closeOwnEditPane(log.cultivate_id)
        },
        "operatorBack": _vm.changeOperator
      }
    })], 1)]) : _vm._e()]
  })], 2)]), _c('div', {
    staticClass: "paginator-module"
  }, [_c('paginator', {
    attrs: {
      "total": _vm.total,
      "url": "dailylog/query",
      "paginatorParams": _vm.params
    },
    on: {
      "result": _vm.updateList
    }
  })], 1), _c('confirm', {
    attrs: {
      "show": _vm.show,
      "message": _vm.message
    },
    on: {
      "confirmAction": function($event) {
        _vm.putAllStore(1)
      },
      "cancelAction": function($event) {
        _vm.show = false
      }
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', {
    staticClass: "list-head"
  }, [_c('tr', {
    staticClass: "list-head-th"
  }, [_c('th', {
    staticClass: "fir",
    attrs: {
      "name": "planta_name"
    }
  }, [_vm._v("种植区")]), _c('th', {
    attrs: {
      "name": "plant_name"
    }
  }, [_vm._v("果蔬名称")]), _c('th', {
    attrs: {
      "name": "operator"
    }
  }, [_vm._v("操作人")]), _c('th', {
    attrs: {
      "name": "finish"
    }
  }, [_vm._v("完成")]), _c('th', {
    staticClass: "align-c",
    attrs: {
      "name": "open"
    }
  })])])
}]}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    attrs: {
      "name": "animate-class-transition",
      "enter-active-class": "animated slideInLeft",
      "leave-active-class": "animated slideOutLeft"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }, {
      name: "touchstart",
      rawName: "v-touchstart:initTouch",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "initTouch"
    }],
    key: "black",
    staticClass: "black-layer"
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }, {
      name: "touchstart",
      rawName: "v-touchstart:initTouch",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "initTouch"
    }],
    key: "slider",
    staticClass: "slider-bar"
  }, [_c('ul', [_c('li', {
    attrs: {
      "id": "top"
    }
  }, [_c('span', {
    staticClass: "top-img"
  })]), _vm._l((_vm.navbars), function(navbar, index) {
    return [(_vm.hasRole(navbar)) ? _c('li', [_c('span', {
      staticClass: "not-hide",
      on: {
        "click": function($event) {
          _vm.triggle(navbar.name, navbar.isEvent, index)
        }
      }
    }, [_vm._v(_vm._s(navbar.name))])]) : _vm._e(), (navbar.children.length != 0 && _vm.subNavbarIndex == index) ? _c('ul', _vm._l((navbar.children), function(subNavbar) {
      return _c('li', {
        on: {
          "click": _vm.hide
        }
      }, [_c('router-link', {
        staticClass: "not-hide",
        attrs: {
          "to": subNavbar.path,
          "tag": "span",
          "exact": ""
        }
      }, [_vm._v(_vm._s(subNavbar.name))])], 1)
    })) : _vm._e()]
  })], 2), _c('div', {
    attrs: {
      "id": "bottom"
    }
  }, [_c('button', [_vm._v("返回")])])])])
},staticRenderFns: []}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v("\n  " + _vm._s(_vm._f("table_name")(_vm.item.table_type)) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view'), _c('loading')], 1)
},staticRenderFns: []}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('my-header', {
    attrs: {
      "title": _vm.title
    }
  }, [_c('div', {
    staticClass: "show-sliderBar-btn",
    on: {
      "click": function($event) {
        _vm.show = true
      }
    },
    slot: "left"
  }, [_c('img', {
    attrs: {
      "src": _vm.$img('slider.png'),
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "right-btn",
    on: {
      "click": _vm.record
    },
    slot: "right"
  }, [_c('img', {
    attrs: {
      "src": _vm.$img('eye.png'),
      "alt": ""
    }
  })])]), _c('div', {
    attrs: {
      "id": "mynprogress"
    }
  }), _c('router-view'), _c('slider-bar', {
    attrs: {
      "show": _vm.show,
      "navbars": _vm.navbars
    },
    on: {
      "hide": function($event) {
        _vm.show = !_vm.show
      },
      "getSubNavbars": _vm.getSubNavbars
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('navbar', {
    attrs: {
      "taps": _vm.taps
    },
    on: {
      "getKey": _vm.flashList
    }
  }, [_c('table-list', {
    ref: "tableList",
    attrs: {
      "_key": _vm._key,
      "component": _vm.component,
      "searchPlaceholder": _vm.searchPlaceholder,
      "searchUrl": _vm.searchUrl,
      "theads": _vm.theads,
      "protos": _vm.protos,
      "widths": _vm.widths
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "header"
  }, [_vm._t("left"), _c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._t("right")], 2)
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "loader",
    attrs: {
      "title": "2"
    }
  }, [_c('svg', {
    staticStyle: {
      "enable-background": "new 0 0 50 50"
    },
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "width": "25px",
      "height": "25px",
      "viewBox": "0 0 50 50",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#2196F3",
      "stroke-width": "1",
      "d": "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
    }
  }, [_c('animateTransform', {
    attrs: {
      "attributeType": "xml",
      "attributeName": "transform",
      "type": "rotate",
      "from": "0 25 25",
      "to": "360 25 25",
      "dur": "0.6s",
      "repeatCount": "indefinite"
    }
  })], 1)])])
},staticRenderFns: []}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v("\n  " + _vm._s(_vm._f("table_name")(_vm.item.table_type)) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('canvas', {
    attrs: {
      "id": "canvas",
      "width": "1120",
      "height": "899"
    }
  }, [_vm._v("当前浏览器不支持")]), _c('img', {
    attrs: {
      "src": _vm.imageSrc,
      "id": "Img",
      "width": "80%"
    },
    on: {
      "click": _vm.showpop
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showpic),
      expression: "showpic"
    }],
    staticClass: "wrap"
  }, [_c('div', {
    ref: "box",
    staticClass: "box",
    on: {
      "click": _vm.toHide
    }
  }, [_c('div', {
    ref: "iBox",
    staticClass: "innerBox"
  }, [_c('img', {
    attrs: {
      "src": _vm.imageSrc,
      "alt": "图片"
    }
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('search', {
    attrs: {
      "placeholder": _vm.searchPlaceholder,
      "searchUrl": _vm.searchUrl
    },
    on: {
      "callback": _vm.updateListByMore
    }
  }, [_vm._t("search", [_c('button', {
    staticClass: "stl-btn",
    on: {
      "click": function($event) {
        _vm.showNewPanel = true
      }
    }
  }, [_vm._v("新建")])])], 2), (_vm.component != null && _vm.component[_vm._key] != null) ? [(_vm.showNewPanel) ? _c(_vm.component[_vm._key], {
    tag: "component",
    attrs: {
      "edit": false
    },
    on: {
      "callback": _vm.updateListByOne,
      "closeNew": function($event) {
        _vm.showNewPanel = false
      }
    }
  }) : _vm._e()] : _vm._e(), _c('div', {
    staticClass: "table-list"
  }, [_c('div', {
    staticClass: "list-head"
  }, [_c('div', {
    staticClass: "list-head-th"
  }, [(_vm.showCheckbox) ? _c('span', {
    staticClass: "fir",
    attrs: {
      "name": "order"
    }
  }, [_vm._v("序号")]) : _vm._e(), _vm._l((_vm.theads), function(thead, index) {
    return [_c('span', {
      style: ({
        width: _vm.widths[index] + '%'
      }),
      attrs: {
        "name": _vm.protos[index]
      }
    }, [_vm._v("\n                        " + _vm._s(thead) + "\n                    ")])]
  }), _c('span', {
    staticClass: "align-c",
    attrs: {
      "name": "open"
    }
  })], 2)]), _c('transition', {
    attrs: {
      "name": "slide-fade"
    }
  }, [(_vm.showUp) ? _c('transition-group', {
    key: "tbody",
    staticClass: "list-body",
    attrs: {
      "name": "slide-up",
      "tag": "ul"
    }
  }, [_vm._l((_vm.list), function(item, index) {
    return [_c('li', {
      directives: [{
        name: "touchDelete",
        rawName: "v-touchDelete:showConfirmDialog",
        value: ({
          vm: _vm.self,
          type: 0,
          id: item.id,
          index: index,
          flag: item.serial_state,
          tip: _vm.tipMsg
        }),
        expression: "{vm:self, type:0, id:item.id, index:index, flag:item.serial_state, tip:tipMsg}",
        arg: "showConfirmDialog"
      }],
      key: _vm.searchUrl + item.id,
      class: {
        'list-body-tr': true, 'list-body-tr-event': (index % 2 != 0)
      },
      attrs: {
        "id": _vm.searchUrl + item.id,
        "name": "order"
      }
    }, [(_vm.showCheckbox) ? _c('span', {
      staticClass: "checked",
      attrs: {
        "name": "order"
      }
    }, [_c('span', {
      class: {
        'f-checkbox': true, 'f-checkbox-check': _vm.isCheck(item.id)
      },
      on: {
        "click": function($event) {
          _vm.checkedBox({
            'id': item.id,
            'index': index,
            flag: item.serial_state
          })
        }
      }
    })]) : _vm._e(), _vm._l((_vm.protos), function(proto, indexProto) {
      return [(_vm.component != null && _vm.component[proto] != null) ? _c('span', {
        staticClass: "td-note",
        style: ({
          width: _vm.widths[indexProto] + '%'
        }),
        attrs: {
          "name": proto
        }
      }, [_c(_vm.component[proto], {
        tag: "component",
        attrs: {
          "item": item
        }
      })], 1) : _c('span', {
        staticClass: "td-note",
        style: ({
          width: _vm.widths[indexProto] + '%'
        }),
        attrs: {
          "name": proto
        }
      }, [_vm._v("\n                                    " + _vm._s(item[proto]) + "\n                                ")])]
    }), (_vm.component != null && _vm.component.hispic != null) ? _c('span', {
      staticClass: "align-c",
      attrs: {
        "name": "open"
      }
    }, [_c(_vm.component.hispic, {
      tag: "component",
      attrs: {
        "item": item
      }
    })], 1) : _c('span', {
      staticClass: "align-c",
      attrs: {
        "name": "open"
      },
      on: {
        "click": function($event) {
          _vm.troggleEdit(item.id)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": _vm.$img('list.png')
      }
    })])], 2), (_vm.showItemDetail != '' && _vm.showItemDetail == item.id) ? _c('li', {
      key: _vm.searchUrl + item.id + '-pop'
    }, [(_vm.component != null && _vm.component[_vm._key] != null) ? [(_vm.showEditPane) ? _c(_vm.component[_vm._key], {
      tag: "component",
      attrs: {
        "letItem": item,
        "edit": true
      },
      on: {
        "closeEdit": function($event) {
          _vm.closeOwnEditPane(item)
        }
      }
    }) : _vm._e()] : _vm._e()], 2) : _vm._e()]
  })], 2) : _vm._e()], 1), _c('div', {
    staticClass: "list-foot"
  }, [_c('div', {
    staticClass: "list-foot-tr"
  }, [_c('span', {
    attrs: {
      "name": "order"
    }
  }, [_c('span', {
    class: {
      'f-checkbox': true, 'f-checkbox-check': _vm.isAllCheck
    },
    on: {
      "click": _vm.selectAll
    }
  })]), _c('span', {
    staticStyle: {
      "width": "86%"
    }
  }, [_c('button', {
    staticClass: "btn btn-del",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.showConfirmDialog(1)
      }
    }
  }, [_vm._v("删除")])])])])], 1), _c('div', {
    staticClass: "paginator-module"
  }, [_c('paginator', {
    attrs: {
      "total": _vm.total,
      "url": _vm.searchUrl + '/query',
      "paginatorParams": _vm.params
    },
    on: {
      "lastPageEvent": function($event) {
        _vm.showUp = false
      },
      "nextPageEvent": function($event) {
        _vm.showUp = false
      },
      "changePageEvent": function($event) {
        _vm.showUp = false
      },
      "result": _vm.updateListByMore
    }
  })], 1), _c('confirm', {
    attrs: {
      "show": _vm.showConfirm
    },
    on: {
      "confirmAction": _vm.oneOrBatchdestroy,
      "cancelAction": function($event) {
        _vm.showConfirm = false
      }
    }
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-link', {
    attrs: {
      "to": {
        name: 'dailylog',
        params: {
          date: _vm.item.date
        }
      },
      "tag": "span",
      "replace": ""
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.$img('rightRaw.png'),
      "alt": ""
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "drug_type",
      "items": _vm.categorys,
      "defaultIndex": parseInt(_vm.defaultdrugIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsgPid
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('drug_type')),
      expression: "errors.has('drug_type')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('drug_type')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "兽药名称",
      "type": "text",
      "id": "drug_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.use),
      expression: "letItem.use"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "drug_new_use",
      "name": "use"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.use)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.use = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.specification),
      expression: "letItem.specification"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "drug_new_specification",
      "name": "specification"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.specification)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.specification = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.vender_name),
      expression: "letItem.vender_name"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "drug_new_vender_name",
      "name": "vender_name"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.vender_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.vender_name = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "drug_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "drug_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "drug_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditdrug
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAdddrug
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(8)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_select"
    }
  }, [_vm._v("兽药类别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_fullName"
    }
  }, [_vm._v("兽药名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_use"
    }
  }, [_vm._v("用途")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_specification"
    }
  }, [_vm._v("包装规格")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_vender_name"
    }
  }, [_vm._v("生产厂家名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_address"
    }
  }, [_vm._v("产地")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "drug_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "manure_category_id",
      "name": "manure_category_id",
      "items": _vm.categorys,
      "defaultIndex": parseInt(_vm.defaultIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsg
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('category_id')),
      expression: "errors.has('category_id')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('category_id')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "肥料名称",
      "type": "text",
      "id": "manure_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.usage),
      expression: "letItem.usage"
    }],
    attrs: {
      "type": "text",
      "id": "manure_usage",
      "name": "usage"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.usage)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.usage = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('usage')),
      expression: "errors.has('usage')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('usage')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.specification),
      expression: "letItem.specification"
    }],
    attrs: {
      "type": "text",
      "id": "manure_new_specification",
      "name": "specification"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.specification)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.specification = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.dealer),
      expression: "letItem.dealer"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "value": "",
      "id": "manure_new_dealer",
      "name": "dealer"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.dealer)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.dealer = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.origin),
      expression: "letItem.origin"
    }],
    attrs: {
      "type": "text",
      "id": "manure_new_origin",
      "name": "origin"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.origin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.origin = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "manure_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "manure_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditManure
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddManure
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(8)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_category_id"
    }
  }, [_vm._v("分类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_fullName"
    }
  }, [_vm._v("肥料名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_usage"
    }
  }, [_vm._v("用途")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_specification"
    }
  }, [_vm._v("包装规格")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_dealer"
    }
  }, [_vm._v("经销商名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_origin"
    }
  }, [_vm._v("产地")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "manure_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "种植场名称",
      "type": "text",
      "id": "plantation_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop input-area"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.area),
      expression: "letItem.area"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.area),
      expression: "letItem.area",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|decimal:2",
      "data-vv-as": "种植面积",
      "type": "text",
      "id": "plantation_new_area",
      "name": "area",
      "placeholder": "请填写数字(必填)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.area)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.area = $event.target.value
      }
    }
  })]), _c('td', {
    staticClass: "area_unit"
  }, [_c('pop-select', {
    attrs: {
      "name": "area_unit",
      "items": _vm.area_unit,
      "defaultIndex": parseInt(_vm.defaultIndex)
    },
    on: {
      "callback": _vm.getMsg
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('area')),
      expression: "errors.has('area')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('area')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "plantation_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "plantation_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.director),
      expression: "letItem.director"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "plantation_new_principal",
      "name": "director"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.director)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.director = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "plantation_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditPlantation
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddPlantation
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(6)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_fullName"
    }
  }, [_vm._v("种植场名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_area"
    }
  }, [_vm._v("种植面积")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_phone"
    }
  }, [_vm._v("详细电话")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_address"
    }
  }, [_vm._v("详细地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_principal"
    }
  }, [_vm._v("负责人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plantation_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-top"
  }, [_c('ul', {
    staticClass: "nt-ul"
  }, _vm._l((_vm.taps), function(tap, index) {
    return (index < 3) ? _c('li', {
      staticClass: "nt-li"
    }, [_c('span', {
      class: {
        'link-active': _vm.activeKey == tap.key
      },
      on: {
        "click": function($event) {
          _vm.getKey(tap.key)
        }
      }
    }, [_vm._v(_vm._s(tap.name))])]) : _vm._e()
  })), _c('transition', {
    attrs: {
      "css": false
    },
    on: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [(!_vm.isMore) ? _c('ul', {
    staticClass: "nt-ul"
  }, _vm._l((_vm.taps), function(tap, index) {
    return (index >= 3) ? _c('li', {
      staticClass: "nt-li"
    }, [_c('span', {
      class: {
        'link-active': _vm.activeKey == tap.key
      },
      on: {
        "click": function($event) {
          _vm.getKey(tap.key)
        }
      }
    }, [_vm._v(_vm._s(tap.name))])]) : _vm._e()
  })) : _vm._e()]), (_vm.taps.length > 3) ? _c('div', {
    class: {
      'tap-more': _vm.isMore, 'tap-shrink': !_vm.isMore
    },
    on: {
      "click": function($event) {
        _vm.toggleTap()
      }
    }
  }) : _vm._e(), _c('div', {
    directives: [{
      name: "touchstart",
      rawName: "v-touchstart:touchstart",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "touchstart"
    }, {
      name: "touchmove",
      rawName: "v-touchmove:touchmove",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "touchmove"
    }]
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_vm._v("\n  " + _vm._s(_vm._f("table_name")(_vm.item.drug_type)) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "pic-preview",
    on: {
      "click": _vm.selectPic
    }
  }, [(_vm.letItem.image == '' || _vm.letItem.image == null) ? _c('img', {
    attrs: {
      "src": _vm.$img(_vm.image)
    }
  }) : (_vm.letItem.image == 'upload.png') ? _c('img', {
    attrs: {
      "src": _vm.$img(_vm.letItem.image)
    }
  }) : _c('img', {
    attrs: {
      "src": _vm.$img(_vm.letItem.image, false)
    }
  })]), _c('input', {
    attrs: {
      "name": "file_name",
      "type": "file",
      "hidden": "hidden"
    },
    on: {
      "change": function($event) {
        _vm.previewPic(_vm.letItem, $event)
      }
    }
  }), _c('div', {
    staticClass: "delete-pic-btn"
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.deletePic
    }
  }, [_vm._v("删除")])])])]), _c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "category",
      "id": "plant_categroy_select",
      "items": _vm.categorys,
      "defaultIndex": parseInt(_vm.defaultIndex)
    },
    on: {
      "callback": _vm.getMsg
    }
  })], 1)]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "果蔬名称",
      "type": "text",
      "id": "plant_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.growth_cycle),
      expression: "letItem.growth_cycle"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.growth_cycle),
      expression: "letItem.growth_cycle",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|decimal:2",
      "data-vv-as": "生长周期",
      "type": "text",
      "id": "plant_new_growth_cycle",
      "name": "growth_cycle",
      "placeholder": "必填，单位（天）"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.growth_cycle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.growth_cycle = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('growth_cycle')),
      expression: "errors.has('growth_cycle')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('growth_cycle')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.description),
      expression: "letItem.description"
    }],
    attrs: {
      "type": "text",
      "id": "plant_new_description",
      "name": "description"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.description = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "plant_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditPlantation
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddPlantation
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(5)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_categroy_select"
    }
  }, [_vm._v("果蔬类别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_new_fullName"
    }
  }, [_vm._v("果蔬名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_new_growth_cycle"
    }
  }, [_vm._v("生长周期")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_new_description"
    }
  }, [_vm._v("特征描述")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "plant_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "name": "fodder_type",
      "items": _vm.categorys,
      "defaultIndex": parseInt(_vm.defaultfodderIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsgPid
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('fodder_type')),
      expression: "errors.has('fodder_type')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('fodder_type')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "饲料名称",
      "type": "text",
      "id": "fodder_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.use),
      expression: "letItem.use"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "fodder_new_use",
      "name": "use"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.use)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.use = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.specification),
      expression: "letItem.specification"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "fodder_new_specification",
      "name": "specification"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.specification)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.specification = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.vender_name),
      expression: "letItem.vender_name"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "fodder_new_vender_name",
      "name": "vender_name"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.vender_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.vender_name = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "fodder_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "fodder_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "fodder_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditfodder
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddfodder
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(8)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_select"
    }
  }, [_vm._v("饲料类别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_fullName"
    }
  }, [_vm._v("饲料名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_use"
    }
  }, [_vm._v("用途")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_specification"
    }
  }, [_vm._v("包装规格")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_vender_name"
    }
  }, [_vm._v("生产厂家名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_address"
    }
  }, [_vm._v("产地")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "养殖场名称",
      "type": "text",
      "id": "farm_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.area),
      expression: "letItem.area"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.area),
      expression: "letItem.area",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|decimal:2",
      "data-vv-as": "养殖面积",
      "type": "text",
      "id": "farm_new_area",
      "name": "area",
      "placeholder": "请填写数字(必填),单位是亩"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.area)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.area = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('area')),
      expression: "errors.has('area')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('area')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.principal),
      expression: "letItem.principal"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farm_new_principal",
      "name": "principal"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.principal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.principal = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.kind),
      expression: "letItem.kind"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farm_new_kind",
      "name": "kind"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.kind)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.kind = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.scale),
      expression: "letItem.scale"
    }],
    attrs: {
      "type": "text",
      "value": "",
      "id": "farm_new_scale",
      "name": "scale"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.scale)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.scale = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "farm_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "farm_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditfarm
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddfarm
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(7)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_fullName"
    }
  }, [_vm._v("养殖场名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_area"
    }
  }, [_vm._v("养殖面积")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_principal"
    }
  }, [_vm._v("负责人")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_kind"
    }
  }, [_vm._v("养殖畜禽种类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_scale"
    }
  }, [_vm._v("养殖规模")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_address"
    }
  }, [_vm._v("地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "farm_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('basic-model', {
    attrs: {
      "title": "种植基础信息管理",
      "taps": _vm.taps,
      "tableLists": _vm.tableLists
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    attrs: {
      "id": "mynprogress"
    }
  }, [_c('transition', {
    attrs: {
      "name": "hide-logo",
      "mode": "out-in"
    }
  }, [(_vm.showLogo) ? _c('div', {
    key: "logo",
    staticClass: "logo"
  }) : _vm._e(), (!_vm.showLogo) ? _c('div', {
    key: "logo-hide",
    staticClass: "logo-hide"
  }) : _vm._e()]), _c('form', {
    style: (_vm.formPadding),
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.login($event)
      }
    }
  }, [_c('ul', [_c('li', [(_vm.isError) ? _c('div', {
    staticClass: "err-tip"
  }, [_vm._v("用户名或密码错误")]) : _vm._e(), _c('input', {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }, {
      name: "touchstart",
      rawName: "v-touchstart:hideLogo",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "hideLogo"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.user.login),
      expression: "user.login",
      arg: "hideLogo"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.user.login),
      expression: "user.login",
      arg: "hideLogo",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      red: _vm.isNameError
    },
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "用户名",
      "placeholder": _vm.userNamePlaceholder,
      "name": "login",
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.user.login)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.login = $event.target.value
      }
    }
  }), _c('span')]), _c('li', [_c('input', {
    directives: [{
      name: "touchstart",
      rawName: "v-touchstart:hideLogo",
      value: ([_vm.self]),
      expression: "[self]",
      arg: "hideLogo"
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.user.password),
      expression: "user.password",
      arg: "hideLogo"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.user.password),
      expression: "user.password",
      arg: "hideLogo",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      red: _vm.isPasswordError
    },
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "密码",
      "placeholder": _vm.passwordPlaceholder,
      "name": "password",
      "type": "password"
    },
    domProps: {
      "value": _vm._s(_vm.user.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.password = $event.target.value
      }
    }
  }), _c('span')])]), _c('div', {
    staticClass: "login-btn"
  }, [_c('a', [_c('button', {
    attrs: {
      "type": "submit",
      "disabled": _vm.isLogin
    }
  }, [_vm._v(_vm._s(_vm.loginBtn))])])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-top"
  }, [_vm._t("default", [_c('button', {
    staticClass: "stl-btn"
  }, [_vm._v("新建")])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchInput),
      expression: "searchInput"
    }],
    staticClass: "str-inp",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm._s(_vm.searchInput)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchInput = $event.target.value
      }
    }
  }), _c('button', {
    staticClass: "str-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])], 2)
},staticRenderFns: []}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "expert_table_type",
      "name": "expert_table_type",
      "items": _vm.tableType,
      "defaultIndex": parseInt(_vm.defaultTypeIndex)
    },
    on: {
      "callback": _vm.getMsgType
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('table_type')),
      expression: "errors.has('table_type')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('table_type')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.expert_name),
      expression: "letItem.expert_name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.expert_name),
      expression: "letItem.expert_name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "专家名称",
      "type": "text",
      "id": "expert_new_fullName",
      "name": "expert_name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.expert_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.expert_name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('expert_name')),
      expression: "errors.has('expert_name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('expert_name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.major),
      expression: "letItem.major"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.major),
      expression: "letItem.major",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "研究领域",
      "type": "text",
      "id": "expert_major",
      "name": "major",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.major)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.major = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('major')),
      expression: "errors.has('major')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('major')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.level),
      expression: "letItem.level"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.level),
      expression: "letItem.level",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required",
      "data-vv-as": "级别",
      "type": "text",
      "id": "expert_level",
      "name": "level",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.level)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.level = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('level')),
      expression: "errors.has('level')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('level')))])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "expert_sex",
      "name": "expert_sex",
      "items": _vm.sex,
      "defaultIndex": parseInt(_vm.defaultSexIndex)
    },
    on: {
      "callback": _vm.getMsgSex
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('sex')),
      expression: "errors.has('sex')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('sex')))])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.age),
      expression: "letItem.age"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.age),
      expression: "letItem.age",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "decimal",
      "data-vv-as": "年龄",
      "type": "text",
      "id": "expert_new_age",
      "name": "age"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.age)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.age = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('age')),
      expression: "errors.has('age')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('age')))])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.unit),
      expression: "letItem.unit"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "value": "",
      "id": "expert_new_unit",
      "name": "unit"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.unit)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.unit = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "expert_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(8), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "expert_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditExpert
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddExpert
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(9)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_table_type"
    }
  }, [_vm._v("操作模块")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_fullName"
    }
  }, [_vm._v("专家名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_major"
    }
  }, [_vm._v("研究领域")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_level"
    }
  }, [_vm._v("级别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_sex"
    }
  }, [_vm._v("性别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_age"
    }
  }, [_vm._v("年龄")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_unit"
    }
  }, [_vm._v("所属单位")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "expert_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('basic-model', {
    attrs: {
      "title": "养殖基础信息管理",
      "taps": _vm.taps,
      "tableLists": _vm.tableLists
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "paginator"
  }, [_c('div', {
    staticClass: "left",
    attrs: {
      "disabled": !_vm.leftBtn
    },
    on: {
      "click": function($event) {
        _vm.lastPage(_vm.index - 1)
      }
    }
  }, [_vm._v("<")]), (_vm.showInput) ? _c('div', {
    staticClass: "middle",
    on: {
      "click": _vm.showInputIndex
    }
  }, [_vm._v("第" + _vm._s(_vm.index) + "页/共" + _vm._s(_vm.total) + "页")]) : _c('div', {
    staticClass: "middle-input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputIndex),
      expression: "inputIndex"
    }, {
      name: "focus",
      rawName: "v-focus"
    }],
    staticClass: "input-index",
    attrs: {
      "type": "text",
      "placeholder": "页数"
    },
    domProps: {
      "value": _vm._s(_vm.inputIndex)
    },
    on: {
      "keyup": function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        _vm.changeIndex($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputIndex = $event.target.value
      }
    }
  })]), _c('div', {
    staticClass: "right",
    attrs: {
      "disabled": !_vm.rightBtn
    },
    on: {
      "click": function($event) {
        _vm.nextPage(_vm.index + 1)
      }
    }
  }, [_vm._v(">")])])
},staticRenderFns: []}

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "姓名",
      "type": "text",
      "id": "operate_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "operate_sex",
      "name": "operate_sex",
      "items": _vm.sex,
      "protoBack": "id",
      "protoShow": "sex",
      "defaultIndex": parseInt(_vm.defaultSexIndex)
    },
    on: {
      "callback": _vm.getMsgSex
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('sex')),
      expression: "errors.has('sex')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('sex')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.age),
      expression: "letItem.age"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.age),
      expression: "letItem.age",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "decimal",
      "data-vv-as": "年龄",
      "type": "text",
      "id": "operate_new_age",
      "name": "age"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.age)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.age = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('age')),
      expression: "errors.has('age')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('age')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.identity),
      expression: "letItem.identity"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "value": "",
      "id": "operate_new_identity",
      "name": "identity",
      "placeholder": "如后勤主管"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.identity)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.identity = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "operate_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.address),
      expression: "letItem.address"
    }],
    attrs: {
      "type": "text",
      "id": "fodder_new_address",
      "name": "address"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.address = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "operate_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditoperate
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddoperate
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(7)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_new_fullName"
    }
  }, [_vm._v("姓名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_sex"
    }
  }, [_vm._v("性别")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_new_age"
    }
  }, [_vm._v("年龄")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_new_identity"
    }
  }, [_vm._v("身份")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "fodder_new_address"
    }
  }, [_vm._v("联系地址")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "operate_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.show = !_vm.show
      }
    }
  }, [_vm._v(_vm._s(_vm.showMsg)), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": _vm.$img('arrow.png')
    }
  })]), (_vm.show) ? _c('div', {
    staticClass: "maskLayer",
    class: {
      'class-opacity': _vm.opacity
    },
    on: {
      "click": _vm.pop
    }
  }) : _vm._e(), (_vm.show) ? _c('div', {
    staticClass: "list",
    on: {
      "click": _vm.pop
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('ul', [_vm._l((_vm.items), function(item, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.getMsg(index)
        }
      }
    }, [(_vm.protoBack == '') ? [_vm._v(_vm._s(item))] : [_vm._v(_vm._s(item[_vm.protoShow]))]], 2)
  }), _c('li', {
    staticClass: "cancel",
    on: {
      "click": function($event) {
        _vm.show = false
      }
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("取消")])])], 2)]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('table', {
    staticClass: "main form-pop"
  }, [_c('tbody', {
    staticClass: "form-body"
  }, [_c('tr', [_vm._m(0), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "medicament_category_id",
      "name": "medicament_category_id",
      "items": _vm.categorys,
      "defaultIndex": parseInt(_vm.defaulCatIndex),
      "protoBack": "id",
      "protoShow": "name"
    },
    on: {
      "callback": _vm.getMsgId
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('category_id')),
      expression: "errors.has('category_id')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('category_id')))])]), _c('tr', [_vm._m(1), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.name),
      expression: "letItem.name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.name),
      expression: "letItem.name",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "required|max:255",
      "data-vv-as": "农药名称",
      "type": "text",
      "id": "medicament_new_fullName",
      "name": "name",
      "placeholder": "必填"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.name = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])]), _c('tr', [_vm._m(2), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.usage),
      expression: "letItem.usage"
    }],
    attrs: {
      "type": "text",
      "id": "medicament_usage",
      "name": "usage"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.usage)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.usage = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('usage')),
      expression: "errors.has('usage')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('usage')))])]), _c('tr', [_vm._m(3), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.control_objects),
      expression: "letItem.control_objects"
    }],
    staticClass: "input-pop",
    attrs: {
      "type": "text",
      "id": "medicament_new_control_objects",
      "name": "control_objects"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.control_objects)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.control_objects = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(4), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('pop-select', {
    attrs: {
      "id": "medicament_toxicity_grade",
      "name": "medicament_toxicity_grade",
      "items": _vm.toxicity,
      "defaultIndex": parseInt(_vm.defaultToxIndex)
    },
    on: {
      "callback": _vm.getMsgGrade
    }
  })], 1)]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('toxicity_grade')),
      expression: "errors.has('toxicity_grade')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('toxicity_grade')))])]), _c('tr', [_vm._m(5), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.specification),
      expression: "letItem.specification"
    }],
    attrs: {
      "type": "text",
      "id": "medicament_new_specification",
      "name": "specification"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.specification)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.specification = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(6), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.dealer),
      expression: "letItem.dealer"
    }],
    attrs: {
      "type": "text",
      "id": "medicament_new_dealer",
      "name": "dealer"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.dealer)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.dealer = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(7), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.origin),
      expression: "letItem.origin"
    }],
    attrs: {
      "type": "text",
      "id": "medicament_new_origin",
      "name": "origin"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.origin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.origin = $event.target.value
      }
    }
  })])]), _c('tr', [_vm._m(8), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.phone),
      expression: "letItem.phone"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.letItem.phone),
      expression: "letItem.phone",
      modifiers: {
        "initial": true
      }
    }],
    attrs: {
      "data-vv-rules": "phone",
      "type": "text",
      "id": "medicament_new_phone",
      "name": "phone",
      "placeholder": "请输入11位手机号(固话用-隔开)"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.phone = $event.target.value
      }
    }
  })])]), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('phone')),
      expression: "errors.has('phone')"
    }]
  }, [_c('td', {
    staticClass: "error",
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v(_vm._s(_vm.errors.first('phone')))])]), _c('tr', [_vm._m(9), _c('td', {
    staticClass: "input-pop",
    attrs: {
      "colspan": "2"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.letItem.memo),
      expression: "letItem.memo"
    }],
    attrs: {
      "type": "text",
      "id": "medicament_new_note",
      "name": "memo"
    },
    domProps: {
      "value": _vm._s(_vm.letItem.memo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.letItem.memo = $event.target.value
      }
    }
  })])]), _c('tr', [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "footer-r"
  }, [(_vm.edit) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelEditMedicament
    }
  }, [_vm._v("\n                                取消\n                            ")])]) : _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cancelAddMedicament
    }
  }, [_vm._v("\n                                取消\n                            ")])])]), _vm._m(10)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_category_id"
    }
  }, [_vm._v("分类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_fullName"
    }
  }, [_vm._v("农药名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_usage"
    }
  }, [_vm._v("用途")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_control_objects"
    }
  }, [_vm._v("防治对象")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_toxicity_grade"
    }
  }, [_vm._v("分类")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_specification"
    }
  }, [_vm._v("包装规格")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_dealer"
    }
  }, [_vm._v("经销商名称")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_origin"
    }
  }, [_vm._v("产地")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_phone"
    }
  }, [_vm._v("联系方式")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "label-tit"
  }, [_c('label', {
    attrs: {
      "for": "medicament_new_note"
    }
  }, [_vm._v("备注信息")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-r"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('button', {
    staticClass: "btn-pop"
  }, [_vm._v("\n                                保存\n                            ")])])])
}]}

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [(_vm.showImg) ? _c('img', {
    attrs: {
      "src": _vm.$img('ok.png')
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("\n  " + _vm._s(_vm.area) + " \n")])
},staticRenderFns: []}

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop-transition', [(_vm.show) ? _c('div', {
    key: "black",
    staticClass: "black-layer"
  }) : _vm._e(), (_vm.show) ? _c('div', {
    key: "dialog",
    staticClass: "confirm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]), _c('div', {
    staticClass: "message"
  }, [_vm._v("\n            " + _vm._s(_vm.message) + "\n        ")]), _c('div', {
    staticClass: "btns"
  }, [_c('a', {
    staticClass: "btn btn-cancel",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.cancelMethod
    }
  }, [_vm._v(_vm._s(_vm.cancel))]), _c('a', {
    staticClass: "btn btn-confirm",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.confirmMethod
    }
  }, [_vm._v(_vm._s(_vm.confirm))])])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);


var isDev = "production" !== 'production';

/* harmony default export */ __webpack_exports__["default"] = function (context) {
  var s = isDev && Date.now();

  // 设置路由的url
  __WEBPACK_IMPORTED_MODULE_0__index__["a" /* router */].push(context.url);
  var matchedComponents = __WEBPACK_IMPORTED_MODULE_0__index__["a" /* router */].getMatchedComponents();

  // 如果没有url匹配
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' });
  }

  return Promise.all(matchedComponents.map(function (component) {
    if (component.preFetch) {
      return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__index__["b" /* store */]);
    }
  })).then(function () {
    isDev && console.log('data pre-fetch: ' + (Date.now() - s) + 'ms');
    context.initialState = __WEBPACK_IMPORTED_MODULE_0__index__["b" /* store */].state;
    return __WEBPACK_IMPORTED_MODULE_0__index__["c" /* app */];
  });
};

/***/ })
/******/ ]);