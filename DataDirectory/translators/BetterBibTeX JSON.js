{
	"translatorID": "36a3b0b5-bad0-4a04-b79b-441c7cef77db",
	"label": "BetterBibTeX JSON",
	"description": "exports and imports items in BetterBibTeX debug format. Mostly for BBT-internal use",
	"creator": "Emiliano Heyns",
	"target": "json",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"configOptions": {
		"async": true,
		"getCollections": true,
		"hash": "58e30f6180e7cf023167c933e8700e6e94883c71f76e3231830b1d59f4369c09"
	},
	"displayOptions": {
		"exportNotes": true,
		"exportFileData": false,
		"keepUpdated": false
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 49,
	"inRepository": false,
	"lastUpdated": "2022-06-30"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"36a3b0b5-bad0-4a04-b79b-441c7cef77db","label":"BetterBibTeX JSON","description":"exports and imports items in BetterBibTeX debug format. Mostly for BBT-internal use","creator":"Emiliano Heyns","target":"json","minVersion":"4.0.27","maxVersion":"","configOptions":{"async":true,"getCollections":true},"displayOptions":{"exportNotes":true,"exportFileData":false,"keepUpdated":false},"translatorType":3,"browserSupport":"gcsv","priority":49,"inRepository":false}); // assign new data
      
var BetterBibTeXJSON__Translator__detectImport__doImport__doExport = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_globals();
      var process2 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
    }
  });

  // setup/loaders/globals.js
  var process, global;
  var init_globals = __esm({
    "setup/loaders/globals.js"() {
      process = require_browser();
      global = Function("return this")();
    }
  });

  // node_modules/ajv/dist/compile/codegen/code.js
  var require_code = __commonJS({
    "node_modules/ajv/dist/compile/codegen/code.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
      var _CodeOrName = class {
      };
      exports._CodeOrName = _CodeOrName;
      exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
      var Name = class extends _CodeOrName {
        constructor(s) {
          super();
          if (!exports.IDENTIFIER.test(s))
            throw new Error("CodeGen: name must be a valid identifier");
          this.str = s;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          return false;
        }
        get names() {
          return { [this.str]: 1 };
        }
      };
      exports.Name = Name;
      var _Code = class extends _CodeOrName {
        constructor(code) {
          super();
          this._items = typeof code === "string" ? [code] : code;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          if (this._items.length > 1)
            return false;
          const item = this._items[0];
          return item === "" || item === '""';
        }
        get str() {
          var _a;
          return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
        }
        get names() {
          var _a;
          return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names2, c) => {
            if (c instanceof Name)
              names2[c.str] = (names2[c.str] || 0) + 1;
            return names2;
          }, {});
        }
      };
      exports._Code = _Code;
      exports.nil = new _Code("");
      function _(strs, ...args) {
        const code = [strs[0]];
        let i = 0;
        while (i < args.length) {
          addCodeArg(code, args[i]);
          code.push(strs[++i]);
        }
        return new _Code(code);
      }
      exports._ = _;
      var plus = new _Code("+");
      function str(strs, ...args) {
        const expr = [safeStringify(strs[0])];
        let i = 0;
        while (i < args.length) {
          expr.push(plus);
          addCodeArg(expr, args[i]);
          expr.push(plus, safeStringify(strs[++i]));
        }
        optimize(expr);
        return new _Code(expr);
      }
      exports.str = str;
      function addCodeArg(code, arg) {
        if (arg instanceof _Code)
          code.push(...arg._items);
        else if (arg instanceof Name)
          code.push(arg);
        else
          code.push(interpolate(arg));
      }
      exports.addCodeArg = addCodeArg;
      function optimize(expr) {
        let i = 1;
        while (i < expr.length - 1) {
          if (expr[i] === plus) {
            const res = mergeExprItems(expr[i - 1], expr[i + 1]);
            if (res !== void 0) {
              expr.splice(i - 1, 3, res);
              continue;
            }
            expr[i++] = "+";
          }
          i++;
        }
      }
      function mergeExprItems(a, b) {
        if (b === '""')
          return a;
        if (a === '""')
          return b;
        if (typeof a == "string") {
          if (b instanceof Name || a[a.length - 1] !== '"')
            return;
          if (typeof b != "string")
            return `${a.slice(0, -1)}${b}"`;
          if (b[0] === '"')
            return a.slice(0, -1) + b.slice(1);
          return;
        }
        if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
          return `"${a}${b.slice(1)}`;
        return;
      }
      function strConcat(c1, c2) {
        return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
      }
      exports.strConcat = strConcat;
      function interpolate(x) {
        return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
      }
      function stringify2(x) {
        return new _Code(safeStringify(x));
      }
      exports.stringify = stringify2;
      function safeStringify(x) {
        return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      exports.safeStringify = safeStringify;
      function getProperty(key2) {
        return typeof key2 == "string" && exports.IDENTIFIER.test(key2) ? new _Code(`.${key2}`) : _`[${key2}]`;
      }
      exports.getProperty = getProperty;
      function getEsmExportName(key2) {
        if (typeof key2 == "string" && exports.IDENTIFIER.test(key2)) {
          return new _Code(`${key2}`);
        }
        throw new Error(`CodeGen: invalid export name: ${key2}, use explicit $id name mapping`);
      }
      exports.getEsmExportName = getEsmExportName;
      function regexpCode(rx) {
        return new _Code(rx.toString());
      }
      exports.regexpCode = regexpCode;
    }
  });

  // node_modules/ajv/dist/compile/codegen/scope.js
  var require_scope = __commonJS({
    "node_modules/ajv/dist/compile/codegen/scope.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
      var code_1 = require_code();
      var ValueError = class extends Error {
        constructor(name) {
          super(`CodeGen: "code" for ${name} not defined`);
          this.value = name.value;
        }
      };
      var UsedValueState;
      (function(UsedValueState2) {
        UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
        UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
      })(UsedValueState = exports.UsedValueState || (exports.UsedValueState = {}));
      exports.varKinds = {
        const: new code_1.Name("const"),
        let: new code_1.Name("let"),
        var: new code_1.Name("var")
      };
      var Scope = class {
        constructor({ prefixes, parent } = {}) {
          this._names = {};
          this._prefixes = prefixes;
          this._parent = parent;
        }
        toName(nameOrPrefix) {
          return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
        }
        name(prefix) {
          return new code_1.Name(this._newName(prefix));
        }
        _newName(prefix) {
          const ng = this._names[prefix] || this._nameGroup(prefix);
          return `${prefix}${ng.index++}`;
        }
        _nameGroup(prefix) {
          var _a, _b;
          if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
            throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
          }
          return this._names[prefix] = { prefix, index: 0 };
        }
      };
      exports.Scope = Scope;
      var ValueScopeName = class extends code_1.Name {
        constructor(prefix, nameStr) {
          super(nameStr);
          this.prefix = prefix;
        }
        setValue(value, { property, itemIndex }) {
          this.value = value;
          this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
        }
      };
      exports.ValueScopeName = ValueScopeName;
      var line = (0, code_1._)`\n`;
      var ValueScope = class extends Scope {
        constructor(opts) {
          super(opts);
          this._values = {};
          this._scope = opts.scope;
          this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
        }
        get() {
          return this._scope;
        }
        name(prefix) {
          return new ValueScopeName(prefix, this._newName(prefix));
        }
        value(nameOrPrefix, value) {
          var _a;
          if (value.ref === void 0)
            throw new Error("CodeGen: ref must be passed in value");
          const name = this.toName(nameOrPrefix);
          const { prefix } = name;
          const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
          let vs = this._values[prefix];
          if (vs) {
            const _name = vs.get(valueKey);
            if (_name)
              return _name;
          } else {
            vs = this._values[prefix] = /* @__PURE__ */ new Map();
          }
          vs.set(valueKey, name);
          const s = this._scope[prefix] || (this._scope[prefix] = []);
          const itemIndex = s.length;
          s[itemIndex] = value.ref;
          name.setValue(value, { property: prefix, itemIndex });
          return name;
        }
        getValue(prefix, keyOrRef) {
          const vs = this._values[prefix];
          if (!vs)
            return;
          return vs.get(keyOrRef);
        }
        scopeRefs(scopeName, values = this._values) {
          return this._reduceValues(values, (name) => {
            if (name.scopePath === void 0)
              throw new Error(`CodeGen: name "${name}" has no value`);
            return (0, code_1._)`${scopeName}${name.scopePath}`;
          });
        }
        scopeCode(values = this._values, usedValues, getCode) {
          return this._reduceValues(values, (name) => {
            if (name.value === void 0)
              throw new Error(`CodeGen: name "${name}" has no value`);
            return name.value.code;
          }, usedValues, getCode);
        }
        _reduceValues(values, valueCode, usedValues = {}, getCode) {
          let code = code_1.nil;
          for (const prefix in values) {
            const vs = values[prefix];
            if (!vs)
              continue;
            const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
            vs.forEach((name) => {
              if (nameSet.has(name))
                return;
              nameSet.set(name, UsedValueState.Started);
              let c = valueCode(name);
              if (c) {
                const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
                code = (0, code_1._)`${code}${def} ${name} = ${c};${this.opts._n}`;
              } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
                code = (0, code_1._)`${code}${c}${this.opts._n}`;
              } else {
                throw new ValueError(name);
              }
              nameSet.set(name, UsedValueState.Completed);
            });
          }
          return code;
        }
      };
      exports.ValueScope = ValueScope;
    }
  });

  // node_modules/ajv/dist/compile/codegen/index.js
  var require_codegen = __commonJS({
    "node_modules/ajv/dist/compile/codegen/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
      var code_1 = require_code();
      var scope_1 = require_scope();
      var code_2 = require_code();
      Object.defineProperty(exports, "_", { enumerable: true, get: function() {
        return code_2._;
      } });
      Object.defineProperty(exports, "str", { enumerable: true, get: function() {
        return code_2.str;
      } });
      Object.defineProperty(exports, "strConcat", { enumerable: true, get: function() {
        return code_2.strConcat;
      } });
      Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
        return code_2.nil;
      } });
      Object.defineProperty(exports, "getProperty", { enumerable: true, get: function() {
        return code_2.getProperty;
      } });
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return code_2.stringify;
      } });
      Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function() {
        return code_2.regexpCode;
      } });
      Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
        return code_2.Name;
      } });
      var scope_2 = require_scope();
      Object.defineProperty(exports, "Scope", { enumerable: true, get: function() {
        return scope_2.Scope;
      } });
      Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function() {
        return scope_2.ValueScope;
      } });
      Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function() {
        return scope_2.ValueScopeName;
      } });
      Object.defineProperty(exports, "varKinds", { enumerable: true, get: function() {
        return scope_2.varKinds;
      } });
      exports.operators = {
        GT: new code_1._Code(">"),
        GTE: new code_1._Code(">="),
        LT: new code_1._Code("<"),
        LTE: new code_1._Code("<="),
        EQ: new code_1._Code("==="),
        NEQ: new code_1._Code("!=="),
        NOT: new code_1._Code("!"),
        OR: new code_1._Code("||"),
        AND: new code_1._Code("&&"),
        ADD: new code_1._Code("+")
      };
      var Node = class {
        optimizeNodes() {
          return this;
        }
        optimizeNames(_names, _constants) {
          return this;
        }
      };
      var Def = class extends Node {
        constructor(varKind, name, rhs) {
          super();
          this.varKind = varKind;
          this.name = name;
          this.rhs = rhs;
        }
        render({ es5, _n }) {
          const varKind = es5 ? scope_1.varKinds.var : this.varKind;
          const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${varKind} ${this.name}${rhs};` + _n;
        }
        optimizeNames(names2, constants) {
          if (!names2[this.name.str])
            return;
          if (this.rhs)
            this.rhs = optimizeExpr(this.rhs, names2, constants);
          return this;
        }
        get names() {
          return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
        }
      };
      var Assign = class extends Node {
        constructor(lhs, rhs, sideEffects) {
          super();
          this.lhs = lhs;
          this.rhs = rhs;
          this.sideEffects = sideEffects;
        }
        render({ _n }) {
          return `${this.lhs} = ${this.rhs};` + _n;
        }
        optimizeNames(names2, constants) {
          if (this.lhs instanceof code_1.Name && !names2[this.lhs.str] && !this.sideEffects)
            return;
          this.rhs = optimizeExpr(this.rhs, names2, constants);
          return this;
        }
        get names() {
          const names2 = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
          return addExprNames(names2, this.rhs);
        }
      };
      var AssignOp = class extends Assign {
        constructor(lhs, op, rhs, sideEffects) {
          super(lhs, rhs, sideEffects);
          this.op = op;
        }
        render({ _n }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
        }
      };
      var Label = class extends Node {
        constructor(label) {
          super();
          this.label = label;
          this.names = {};
        }
        render({ _n }) {
          return `${this.label}:` + _n;
        }
      };
      var Break = class extends Node {
        constructor(label) {
          super();
          this.label = label;
          this.names = {};
        }
        render({ _n }) {
          const label = this.label ? ` ${this.label}` : "";
          return `break${label};` + _n;
        }
      };
      var Throw = class extends Node {
        constructor(error) {
          super();
          this.error = error;
        }
        render({ _n }) {
          return `throw ${this.error};` + _n;
        }
        get names() {
          return this.error.names;
        }
      };
      var AnyCode = class extends Node {
        constructor(code) {
          super();
          this.code = code;
        }
        render({ _n }) {
          return `${this.code};` + _n;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(names2, constants) {
          this.code = optimizeExpr(this.code, names2, constants);
          return this;
        }
        get names() {
          return this.code instanceof code_1._CodeOrName ? this.code.names : {};
        }
      };
      var ParentNode = class extends Node {
        constructor(nodes = []) {
          super();
          this.nodes = nodes;
        }
        render(opts) {
          return this.nodes.reduce((code, n) => code + n.render(opts), "");
        }
        optimizeNodes() {
          const { nodes } = this;
          let i = nodes.length;
          while (i--) {
            const n = nodes[i].optimizeNodes();
            if (Array.isArray(n))
              nodes.splice(i, 1, ...n);
            else if (n)
              nodes[i] = n;
            else
              nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : void 0;
        }
        optimizeNames(names2, constants) {
          const { nodes } = this;
          let i = nodes.length;
          while (i--) {
            const n = nodes[i];
            if (n.optimizeNames(names2, constants))
              continue;
            subtractNames(names2, n.names);
            nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((names2, n) => addNames(names2, n.names), {});
        }
      };
      var BlockNode = class extends ParentNode {
        render(opts) {
          return "{" + opts._n + super.render(opts) + "}" + opts._n;
        }
      };
      var Root = class extends ParentNode {
      };
      var Else = class extends BlockNode {
      };
      Else.kind = "else";
      var If = class extends BlockNode {
        constructor(condition, nodes) {
          super(nodes);
          this.condition = condition;
        }
        render(opts) {
          let code = `if(${this.condition})` + super.render(opts);
          if (this.else)
            code += "else " + this.else.render(opts);
          return code;
        }
        optimizeNodes() {
          super.optimizeNodes();
          const cond = this.condition;
          if (cond === true)
            return this.nodes;
          let e = this.else;
          if (e) {
            const ns = e.optimizeNodes();
            e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
          }
          if (e) {
            if (cond === false)
              return e instanceof If ? e : e.nodes;
            if (this.nodes.length)
              return this;
            return new If(not2(cond), e instanceof If ? [e] : e.nodes);
          }
          if (cond === false || !this.nodes.length)
            return void 0;
          return this;
        }
        optimizeNames(names2, constants) {
          var _a;
          this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names2, constants);
          if (!(super.optimizeNames(names2, constants) || this.else))
            return;
          this.condition = optimizeExpr(this.condition, names2, constants);
          return this;
        }
        get names() {
          const names2 = super.names;
          addExprNames(names2, this.condition);
          if (this.else)
            addNames(names2, this.else.names);
          return names2;
        }
      };
      If.kind = "if";
      var For = class extends BlockNode {
      };
      For.kind = "for";
      var ForLoop = class extends For {
        constructor(iteration) {
          super();
          this.iteration = iteration;
        }
        render(opts) {
          return `for(${this.iteration})` + super.render(opts);
        }
        optimizeNames(names2, constants) {
          if (!super.optimizeNames(names2, constants))
            return;
          this.iteration = optimizeExpr(this.iteration, names2, constants);
          return this;
        }
        get names() {
          return addNames(super.names, this.iteration.names);
        }
      };
      var ForRange = class extends For {
        constructor(varKind, name, from, to) {
          super();
          this.varKind = varKind;
          this.name = name;
          this.from = from;
          this.to = to;
        }
        render(opts) {
          const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
          const { name, from, to } = this;
          return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
        }
        get names() {
          const names2 = addExprNames(super.names, this.from);
          return addExprNames(names2, this.to);
        }
      };
      var ForIter = class extends For {
        constructor(loop, varKind, name, iterable) {
          super();
          this.loop = loop;
          this.varKind = varKind;
          this.name = name;
          this.iterable = iterable;
        }
        render(opts) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
        }
        optimizeNames(names2, constants) {
          if (!super.optimizeNames(names2, constants))
            return;
          this.iterable = optimizeExpr(this.iterable, names2, constants);
          return this;
        }
        get names() {
          return addNames(super.names, this.iterable.names);
        }
      };
      var Func = class extends BlockNode {
        constructor(name, args, async) {
          super();
          this.name = name;
          this.args = args;
          this.async = async;
        }
        render(opts) {
          const _async = this.async ? "async " : "";
          return `${_async}function ${this.name}(${this.args})` + super.render(opts);
        }
      };
      Func.kind = "func";
      var Return = class extends ParentNode {
        render(opts) {
          return "return " + super.render(opts);
        }
      };
      Return.kind = "return";
      var Try = class extends BlockNode {
        render(opts) {
          let code = "try" + super.render(opts);
          if (this.catch)
            code += this.catch.render(opts);
          if (this.finally)
            code += this.finally.render(opts);
          return code;
        }
        optimizeNodes() {
          var _a, _b;
          super.optimizeNodes();
          (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
          (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
          return this;
        }
        optimizeNames(names2, constants) {
          var _a, _b;
          super.optimizeNames(names2, constants);
          (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names2, constants);
          (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names2, constants);
          return this;
        }
        get names() {
          const names2 = super.names;
          if (this.catch)
            addNames(names2, this.catch.names);
          if (this.finally)
            addNames(names2, this.finally.names);
          return names2;
        }
      };
      var Catch = class extends BlockNode {
        constructor(error) {
          super();
          this.error = error;
        }
        render(opts) {
          return `catch(${this.error})` + super.render(opts);
        }
      };
      Catch.kind = "catch";
      var Finally = class extends BlockNode {
        render(opts) {
          return "finally" + super.render(opts);
        }
      };
      Finally.kind = "finally";
      var CodeGen = class {
        constructor(extScope, opts = {}) {
          this._values = {};
          this._blockStarts = [];
          this._constants = {};
          this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
          this._extScope = extScope;
          this._scope = new scope_1.Scope({ parent: extScope });
          this._nodes = [new Root()];
        }
        toString() {
          return this._root.render(this.opts);
        }
        name(prefix) {
          return this._scope.name(prefix);
        }
        scopeName(prefix) {
          return this._extScope.name(prefix);
        }
        scopeValue(prefixOrName, value) {
          const name = this._extScope.value(prefixOrName, value);
          const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
          vs.add(name);
          return name;
        }
        getScopeValue(prefix, keyOrRef) {
          return this._extScope.getValue(prefix, keyOrRef);
        }
        scopeRefs(scopeName) {
          return this._extScope.scopeRefs(scopeName, this._values);
        }
        scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
        _def(varKind, nameOrPrefix, rhs, constant) {
          const name = this._scope.toName(nameOrPrefix);
          if (rhs !== void 0 && constant)
            this._constants[name.str] = rhs;
          this._leafNode(new Def(varKind, name, rhs));
          return name;
        }
        const(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
        }
        let(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
        }
        var(nameOrPrefix, rhs, _constant) {
          return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
        }
        assign(lhs, rhs, sideEffects) {
          return this._leafNode(new Assign(lhs, rhs, sideEffects));
        }
        add(lhs, rhs) {
          return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
        }
        code(c) {
          if (typeof c == "function")
            c();
          else if (c !== code_1.nil)
            this._leafNode(new AnyCode(c));
          return this;
        }
        object(...keyValues) {
          const code = ["{"];
          for (const [key2, value] of keyValues) {
            if (code.length > 1)
              code.push(",");
            code.push(key2);
            if (key2 !== value || this.opts.es5) {
              code.push(":");
              (0, code_1.addCodeArg)(code, value);
            }
          }
          code.push("}");
          return new code_1._Code(code);
        }
        if(condition, thenBody, elseBody) {
          this._blockNode(new If(condition));
          if (thenBody && elseBody) {
            this.code(thenBody).else().code(elseBody).endIf();
          } else if (thenBody) {
            this.code(thenBody).endIf();
          } else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        elseIf(condition) {
          return this._elseNode(new If(condition));
        }
        else() {
          return this._elseNode(new Else());
        }
        endIf() {
          return this._endBlockNode(If, Else);
        }
        _for(node, forBody) {
          this._blockNode(node);
          if (forBody)
            this.code(forBody).endFor();
          return this;
        }
        for(iteration, forBody) {
          return this._for(new ForLoop(iteration), forBody);
        }
        forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
          const name = this._scope.toName(nameOrPrefix);
          return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
        }
        forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
          const name = this._scope.toName(nameOrPrefix);
          if (this.opts.es5) {
            const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
            return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i) => {
              this.var(name, (0, code_1._)`${arr}[${i}]`);
              forBody(name);
            });
          }
          return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
        }
        forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
          if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
          }
          const name = this._scope.toName(nameOrPrefix);
          return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
        }
        endFor() {
          return this._endBlockNode(For);
        }
        label(label) {
          return this._leafNode(new Label(label));
        }
        break(label) {
          return this._leafNode(new Break(label));
        }
        return(value) {
          const node = new Return();
          this._blockNode(node);
          this.code(value);
          if (node.nodes.length !== 1)
            throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(Return);
        }
        try(tryBody, catchCode, finallyCode) {
          if (!catchCode && !finallyCode)
            throw new Error('CodeGen: "try" without "catch" and "finally"');
          const node = new Try();
          this._blockNode(node);
          this.code(tryBody);
          if (catchCode) {
            const error = this.name("e");
            this._currNode = node.catch = new Catch(error);
            catchCode(error);
          }
          if (finallyCode) {
            this._currNode = node.finally = new Finally();
            this.code(finallyCode);
          }
          return this._endBlockNode(Catch, Finally);
        }
        throw(error) {
          return this._leafNode(new Throw(error));
        }
        block(body, nodeCount) {
          this._blockStarts.push(this._nodes.length);
          if (body)
            this.code(body).endBlock(nodeCount);
          return this;
        }
        endBlock(nodeCount) {
          const len = this._blockStarts.pop();
          if (len === void 0)
            throw new Error("CodeGen: not in self-balancing block");
          const toClose = this._nodes.length - len;
          if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
            throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
          }
          this._nodes.length = len;
          return this;
        }
        func(name, args = code_1.nil, async, funcBody) {
          this._blockNode(new Func(name, args, async));
          if (funcBody)
            this.code(funcBody).endFunc();
          return this;
        }
        endFunc() {
          return this._endBlockNode(Func);
        }
        optimize(n = 1) {
          while (n-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
          }
        }
        _leafNode(node) {
          this._currNode.nodes.push(node);
          return this;
        }
        _blockNode(node) {
          this._currNode.nodes.push(node);
          this._nodes.push(node);
        }
        _endBlockNode(N1, N2) {
          const n = this._currNode;
          if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
          }
          throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
        }
        _elseNode(node) {
          const n = this._currNode;
          if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          this._currNode = n.else = node;
          return this;
        }
        get _root() {
          return this._nodes[0];
        }
        get _currNode() {
          const ns = this._nodes;
          return ns[ns.length - 1];
        }
        set _currNode(node) {
          const ns = this._nodes;
          ns[ns.length - 1] = node;
        }
      };
      exports.CodeGen = CodeGen;
      function addNames(names2, from) {
        for (const n in from)
          names2[n] = (names2[n] || 0) + (from[n] || 0);
        return names2;
      }
      function addExprNames(names2, from) {
        return from instanceof code_1._CodeOrName ? addNames(names2, from.names) : names2;
      }
      function optimizeExpr(expr, names2, constants) {
        if (expr instanceof code_1.Name)
          return replaceName(expr);
        if (!canOptimize(expr))
          return expr;
        return new code_1._Code(expr._items.reduce((items, c) => {
          if (c instanceof code_1.Name)
            c = replaceName(c);
          if (c instanceof code_1._Code)
            items.push(...c._items);
          else
            items.push(c);
          return items;
        }, []));
        function replaceName(n) {
          const c = constants[n.str];
          if (c === void 0 || names2[n.str] !== 1)
            return n;
          delete names2[n.str];
          return c;
        }
        function canOptimize(e) {
          return e instanceof code_1._Code && e._items.some((c) => c instanceof code_1.Name && names2[c.str] === 1 && constants[c.str] !== void 0);
        }
      }
      function subtractNames(names2, from) {
        for (const n in from)
          names2[n] = (names2[n] || 0) - (from[n] || 0);
      }
      function not2(x) {
        return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
      }
      exports.not = not2;
      var andCode = mappend(exports.operators.AND);
      function and(...args) {
        return args.reduce(andCode);
      }
      exports.and = and;
      var orCode = mappend(exports.operators.OR);
      function or(...args) {
        return args.reduce(orCode);
      }
      exports.or = or;
      function mappend(op) {
        return (x, y) => x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
      }
      function par(x) {
        return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
      }
    }
  });

  // node_modules/ajv/dist/compile/util.js
  var require_util = __commonJS({
    "node_modules/ajv/dist/compile/util.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
      var codegen_1 = require_codegen();
      var code_1 = require_code();
      function toHash(arr) {
        const hash = {};
        for (const item of arr)
          hash[item] = true;
        return hash;
      }
      exports.toHash = toHash;
      function alwaysValidSchema(it, schema2) {
        if (typeof schema2 == "boolean")
          return schema2;
        if (Object.keys(schema2).length === 0)
          return true;
        checkUnknownRules(it, schema2);
        return !schemaHasRules(schema2, it.self.RULES.all);
      }
      exports.alwaysValidSchema = alwaysValidSchema;
      function checkUnknownRules(it, schema2 = it.schema) {
        const { opts, self: self2 } = it;
        if (!opts.strictSchema)
          return;
        if (typeof schema2 === "boolean")
          return;
        const rules = self2.RULES.keywords;
        for (const key2 in schema2) {
          if (!rules[key2])
            checkStrictMode(it, `unknown keyword: "${key2}"`);
        }
      }
      exports.checkUnknownRules = checkUnknownRules;
      function schemaHasRules(schema2, rules) {
        if (typeof schema2 == "boolean")
          return !schema2;
        for (const key2 in schema2)
          if (rules[key2])
            return true;
        return false;
      }
      exports.schemaHasRules = schemaHasRules;
      function schemaHasRulesButRef(schema2, RULES) {
        if (typeof schema2 == "boolean")
          return !schema2;
        for (const key2 in schema2)
          if (key2 !== "$ref" && RULES.all[key2])
            return true;
        return false;
      }
      exports.schemaHasRulesButRef = schemaHasRulesButRef;
      function schemaRefOrVal({ topSchemaRef, schemaPath }, schema2, keyword, $data) {
        if (!$data) {
          if (typeof schema2 == "number" || typeof schema2 == "boolean")
            return schema2;
          if (typeof schema2 == "string")
            return (0, codegen_1._)`${schema2}`;
        }
        return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
      }
      exports.schemaRefOrVal = schemaRefOrVal;
      function unescapeFragment(str) {
        return unescapeJsonPointer(decodeURIComponent(str));
      }
      exports.unescapeFragment = unescapeFragment;
      function escapeFragment(str) {
        return encodeURIComponent(escapeJsonPointer(str));
      }
      exports.escapeFragment = escapeFragment;
      function escapeJsonPointer(str) {
        if (typeof str == "number")
          return `${str}`;
        return str.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      exports.escapeJsonPointer = escapeJsonPointer;
      function unescapeJsonPointer(str) {
        return str.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      exports.unescapeJsonPointer = unescapeJsonPointer;
      function eachItem(xs, f) {
        if (Array.isArray(xs)) {
          for (const x of xs)
            f(x);
        } else {
          f(xs);
        }
      }
      exports.eachItem = eachItem;
      function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName }) {
        return (gen, from, to, toName) => {
          const res = to === void 0 ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
          return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
        };
      }
      exports.mergeEvaluated = {
        props: makeMergeEvaluated({
          mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
            gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
          }),
          mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
            if (from === true) {
              gen.assign(to, true);
            } else {
              gen.assign(to, (0, codegen_1._)`${to} || {}`);
              setEvaluated(gen, to, from);
            }
          }),
          mergeValues: (from, to) => from === true ? true : { ...from, ...to },
          resultToName: evaluatedPropsToName
        }),
        items: makeMergeEvaluated({
          mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
          mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
          mergeValues: (from, to) => from === true ? true : Math.max(from, to),
          resultToName: (gen, items) => gen.var("items", items)
        })
      };
      function evaluatedPropsToName(gen, ps) {
        if (ps === true)
          return gen.var("props", true);
        const props = gen.var("props", (0, codegen_1._)`{}`);
        if (ps !== void 0)
          setEvaluated(gen, props, ps);
        return props;
      }
      exports.evaluatedPropsToName = evaluatedPropsToName;
      function setEvaluated(gen, props, ps) {
        Object.keys(ps).forEach((p) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p)}`, true));
      }
      exports.setEvaluated = setEvaluated;
      var snippets = {};
      function useFunc(gen, f) {
        return gen.scopeValue("func", {
          ref: f,
          code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
        });
      }
      exports.useFunc = useFunc;
      var Type;
      (function(Type2) {
        Type2[Type2["Num"] = 0] = "Num";
        Type2[Type2["Str"] = 1] = "Str";
      })(Type = exports.Type || (exports.Type = {}));
      function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
        if (dataProp instanceof codegen_1.Name) {
          const isNumber = dataPropType === Type.Num;
          return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
      }
      exports.getErrorPath = getErrorPath;
      function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
        if (!mode)
          return;
        msg = `strict mode: ${msg}`;
        if (mode === true)
          throw new Error(msg);
        it.self.logger.warn(msg);
      }
      exports.checkStrictMode = checkStrictMode;
    }
  });

  // node_modules/ajv/dist/compile/names.js
  var require_names = __commonJS({
    "node_modules/ajv/dist/compile/names.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var names2 = {
        data: new codegen_1.Name("data"),
        valCxt: new codegen_1.Name("valCxt"),
        instancePath: new codegen_1.Name("instancePath"),
        parentData: new codegen_1.Name("parentData"),
        parentDataProperty: new codegen_1.Name("parentDataProperty"),
        rootData: new codegen_1.Name("rootData"),
        dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
        vErrors: new codegen_1.Name("vErrors"),
        errors: new codegen_1.Name("errors"),
        this: new codegen_1.Name("this"),
        self: new codegen_1.Name("self"),
        scope: new codegen_1.Name("scope"),
        json: new codegen_1.Name("json"),
        jsonPos: new codegen_1.Name("jsonPos"),
        jsonLen: new codegen_1.Name("jsonLen"),
        jsonPart: new codegen_1.Name("jsonPart")
      };
      exports.default = names2;
    }
  });

  // node_modules/ajv/dist/compile/errors.js
  var require_errors = __commonJS({
    "node_modules/ajv/dist/compile/errors.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var names_1 = require_names();
      exports.keywordError = {
        message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
      };
      exports.keyword$DataError = {
        message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
      };
      function reportError(cxt, error = exports.keywordError, errorPaths, overrideAllErrors) {
        const { it } = cxt;
        const { gen, compositeRule, allErrors } = it;
        const errObj = errorObjectCode(cxt, error, errorPaths);
        if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
          addError(gen, errObj);
        } else {
          returnErrors(it, (0, codegen_1._)`[${errObj}]`);
        }
      }
      exports.reportError = reportError;
      function reportExtraError(cxt, error = exports.keywordError, errorPaths) {
        const { it } = cxt;
        const { gen, compositeRule, allErrors } = it;
        const errObj = errorObjectCode(cxt, error, errorPaths);
        addError(gen, errObj);
        if (!(compositeRule || allErrors)) {
          returnErrors(it, names_1.default.vErrors);
        }
      }
      exports.reportExtraError = reportExtraError;
      function resetErrorsCount(gen, errsCount) {
        gen.assign(names_1.default.errors, errsCount);
        gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
      }
      exports.resetErrorsCount = resetErrorsCount;
      function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
        if (errsCount === void 0)
          throw new Error("ajv implementation error");
        const err = gen.name("err");
        gen.forRange("i", errsCount, names_1.default.errors, (i) => {
          gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i}]`);
          gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
          gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`);
          if (it.opts.verbose) {
            gen.assign((0, codegen_1._)`${err}.schema`, schemaValue);
            gen.assign((0, codegen_1._)`${err}.data`, data);
          }
        });
      }
      exports.extendErrors = extendErrors;
      function addError(gen, errObj) {
        const err = gen.const("err", errObj);
        gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`);
        gen.code((0, codegen_1._)`${names_1.default.errors}++`);
      }
      function returnErrors(it, errs) {
        const { gen, validateName, schemaEnv } = it;
        if (schemaEnv.$async) {
          gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`);
        } else {
          gen.assign((0, codegen_1._)`${validateName}.errors`, errs);
          gen.return(false);
        }
      }
      var E = {
        keyword: new codegen_1.Name("keyword"),
        schemaPath: new codegen_1.Name("schemaPath"),
        params: new codegen_1.Name("params"),
        propertyName: new codegen_1.Name("propertyName"),
        message: new codegen_1.Name("message"),
        schema: new codegen_1.Name("schema"),
        parentSchema: new codegen_1.Name("parentSchema")
      };
      function errorObjectCode(cxt, error, errorPaths) {
        const { createErrors } = cxt.it;
        if (createErrors === false)
          return (0, codegen_1._)`{}`;
        return errorObject(cxt, error, errorPaths);
      }
      function errorObject(cxt, error, errorPaths = {}) {
        const { gen, it } = cxt;
        const keyValues = [
          errorInstancePath(it, errorPaths),
          errorSchemaPath(cxt, errorPaths)
        ];
        extraErrorProps(cxt, error, keyValues);
        return gen.object(...keyValues);
      }
      function errorInstancePath({ errorPath }, { instancePath }) {
        const instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
        return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
      }
      function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
        let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
        if (schemaPath) {
          schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
        }
        return [E.schemaPath, schPath];
      }
      function extraErrorProps(cxt, { params, message }, keyValues) {
        const { keyword, data, schemaValue, it } = cxt;
        const { opts, propertyName, topSchemaRef, schemaPath } = it;
        keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]);
        if (opts.messages) {
          keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
        }
        if (opts.verbose) {
          keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
        }
        if (propertyName)
          keyValues.push([E.propertyName, propertyName]);
      }
    }
  });

  // node_modules/ajv/dist/compile/validate/boolSchema.js
  var require_boolSchema = __commonJS({
    "node_modules/ajv/dist/compile/validate/boolSchema.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
      var errors_1 = require_errors();
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var boolError = {
        message: "boolean schema is false"
      };
      function topBoolOrEmptySchema(it) {
        const { gen, schema: schema2, validateName } = it;
        if (schema2 === false) {
          falseSchemaError(it, false);
        } else if (typeof schema2 == "object" && schema2.$async === true) {
          gen.return(names_1.default.data);
        } else {
          gen.assign((0, codegen_1._)`${validateName}.errors`, null);
          gen.return(true);
        }
      }
      exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
      function boolOrEmptySchema(it, valid2) {
        const { gen, schema: schema2 } = it;
        if (schema2 === false) {
          gen.var(valid2, false);
          falseSchemaError(it);
        } else {
          gen.var(valid2, true);
        }
      }
      exports.boolOrEmptySchema = boolOrEmptySchema;
      function falseSchemaError(it, overrideAllErrors) {
        const { gen, data } = it;
        const cxt = {
          gen,
          keyword: "false schema",
          data,
          schema: false,
          schemaCode: false,
          schemaValue: false,
          params: {},
          it
        };
        (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
      }
    }
  });

  // node_modules/ajv/dist/compile/rules.js
  var require_rules = __commonJS({
    "node_modules/ajv/dist/compile/rules.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getRules = exports.isJSONType = void 0;
      var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
      var jsonTypes = new Set(_jsonTypes);
      function isJSONType(x) {
        return typeof x == "string" && jsonTypes.has(x);
      }
      exports.isJSONType = isJSONType;
      function getRules() {
        const groups = {
          number: { type: "number", rules: [] },
          string: { type: "string", rules: [] },
          array: { type: "array", rules: [] },
          object: { type: "object", rules: [] }
        };
        return {
          types: { ...groups, integer: true, boolean: true, null: true },
          rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
          post: { rules: [] },
          all: {},
          keywords: {}
        };
      }
      exports.getRules = getRules;
    }
  });

  // node_modules/ajv/dist/compile/validate/applicability.js
  var require_applicability = __commonJS({
    "node_modules/ajv/dist/compile/validate/applicability.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
      function schemaHasRulesForType({ schema: schema2, self: self2 }, type) {
        const group = self2.RULES.types[type];
        return group && group !== true && shouldUseGroup(schema2, group);
      }
      exports.schemaHasRulesForType = schemaHasRulesForType;
      function shouldUseGroup(schema2, group) {
        return group.rules.some((rule) => shouldUseRule(schema2, rule));
      }
      exports.shouldUseGroup = shouldUseGroup;
      function shouldUseRule(schema2, rule) {
        var _a;
        return schema2[rule.keyword] !== void 0 || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema2[kwd] !== void 0));
      }
      exports.shouldUseRule = shouldUseRule;
    }
  });

  // node_modules/ajv/dist/compile/validate/dataType.js
  var require_dataType = __commonJS({
    "node_modules/ajv/dist/compile/validate/dataType.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
      var rules_1 = require_rules();
      var applicability_1 = require_applicability();
      var errors_1 = require_errors();
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var DataType;
      (function(DataType2) {
        DataType2[DataType2["Correct"] = 0] = "Correct";
        DataType2[DataType2["Wrong"] = 1] = "Wrong";
      })(DataType = exports.DataType || (exports.DataType = {}));
      function getSchemaTypes(schema2) {
        const types = getJSONTypes(schema2.type);
        const hasNull = types.includes("null");
        if (hasNull) {
          if (schema2.nullable === false)
            throw new Error("type: null contradicts nullable: false");
        } else {
          if (!types.length && schema2.nullable !== void 0) {
            throw new Error('"nullable" cannot be used without "type"');
          }
          if (schema2.nullable === true)
            types.push("null");
        }
        return types;
      }
      exports.getSchemaTypes = getSchemaTypes;
      function getJSONTypes(ts) {
        const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
        if (types.every(rules_1.isJSONType))
          return types;
        throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
      }
      exports.getJSONTypes = getJSONTypes;
      function coerceAndCheckDataType(it, types) {
        const { gen, data, opts } = it;
        const coerceTo = coerceToTypes(types, opts.coerceTypes);
        const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
        if (checkTypes) {
          const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
          gen.if(wrongType, () => {
            if (coerceTo.length)
              coerceData(it, types, coerceTo);
            else
              reportTypeError(it);
          });
        }
        return checkTypes;
      }
      exports.coerceAndCheckDataType = coerceAndCheckDataType;
      var COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
      function coerceToTypes(types, coerceTypes) {
        return coerceTypes ? types.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
      }
      function coerceData(it, types, coerceTo) {
        const { gen, data, opts } = it;
        const dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`);
        const coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
        if (opts.coerceTypes === "array") {
          gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
        }
        gen.if((0, codegen_1._)`${coerced} !== undefined`);
        for (const t of coerceTo) {
          if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
            coerceSpecificType(t);
          }
        }
        gen.else();
        reportTypeError(it);
        gen.endIf();
        gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
          gen.assign(data, coerced);
          assignParentData(it, coerced);
        });
        function coerceSpecificType(t) {
          switch (t) {
            case "string":
              gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
              return;
            case "number":
              gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
              return;
            case "integer":
              gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
              return;
            case "boolean":
              gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, false).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, true);
              return;
            case "null":
              gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`);
              gen.assign(coerced, null);
              return;
            case "array":
              gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
          }
        }
      }
      function assignParentData({ gen, parentData, parentDataProperty }, expr) {
        gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
      }
      function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
        const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
        let cond;
        switch (dataType) {
          case "null":
            return (0, codegen_1._)`${data} ${EQ} null`;
          case "array":
            cond = (0, codegen_1._)`Array.isArray(${data})`;
            break;
          case "object":
            cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
            break;
          case "integer":
            cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
            break;
          case "number":
            cond = numCond();
            break;
          default:
            return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
        }
        return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
        function numCond(_cond = codegen_1.nil) {
          return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
        }
      }
      exports.checkDataType = checkDataType;
      function checkDataTypes(dataTypes, data, strictNums, correct) {
        if (dataTypes.length === 1) {
          return checkDataType(dataTypes[0], data, strictNums, correct);
        }
        let cond;
        const types = (0, util_1.toHash)(dataTypes);
        if (types.array && types.object) {
          const notObj = (0, codegen_1._)`typeof ${data} != "object"`;
          cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`;
          delete types.null;
          delete types.array;
          delete types.object;
        } else {
          cond = codegen_1.nil;
        }
        if (types.number)
          delete types.integer;
        for (const t in types)
          cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
        return cond;
      }
      exports.checkDataTypes = checkDataTypes;
      var typeError = {
        message: ({ schema: schema2 }) => `must be ${schema2}`,
        params: ({ schema: schema2, schemaValue }) => typeof schema2 == "string" ? (0, codegen_1._)`{type: ${schema2}}` : (0, codegen_1._)`{type: ${schemaValue}}`
      };
      function reportTypeError(it) {
        const cxt = getTypeErrorContext(it);
        (0, errors_1.reportError)(cxt, typeError);
      }
      exports.reportTypeError = reportTypeError;
      function getTypeErrorContext(it) {
        const { gen, data, schema: schema2 } = it;
        const schemaCode = (0, util_1.schemaRefOrVal)(it, schema2, "type");
        return {
          gen,
          keyword: "type",
          data,
          schema: schema2.type,
          schemaCode,
          schemaValue: schemaCode,
          parentSchema: schema2,
          params: {},
          it
        };
      }
    }
  });

  // node_modules/ajv/dist/compile/validate/defaults.js
  var require_defaults = __commonJS({
    "node_modules/ajv/dist/compile/validate/defaults.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.assignDefaults = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      function assignDefaults(it, ty) {
        const { properties, items } = it.schema;
        if (ty === "object" && properties) {
          for (const key2 in properties) {
            assignDefault(it, key2, properties[key2].default);
          }
        } else if (ty === "array" && Array.isArray(items)) {
          items.forEach((sch, i) => assignDefault(it, i, sch.default));
        }
      }
      exports.assignDefaults = assignDefaults;
      function assignDefault(it, prop, defaultValue) {
        const { gen, compositeRule, data, opts } = it;
        if (defaultValue === void 0)
          return;
        const childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
        if (compositeRule) {
          (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
          return;
        }
        let condition = (0, codegen_1._)`${childData} === undefined`;
        if (opts.useDefaults === "empty") {
          condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`;
        }
        gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
      }
    }
  });

  // node_modules/ajv/dist/vocabularies/code.js
  var require_code2 = __commonJS({
    "node_modules/ajv/dist/vocabularies/code.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var names_1 = require_names();
      var util_2 = require_util();
      function checkReportMissingProp(cxt, prop) {
        const { gen, data, it } = cxt;
        gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
          cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, true);
          cxt.error();
        });
      }
      exports.checkReportMissingProp = checkReportMissingProp;
      function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
        return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
      }
      exports.checkMissingProp = checkMissingProp;
      function reportMissingProp(cxt, missing) {
        cxt.setParams({ missingProperty: missing }, true);
        cxt.error();
      }
      exports.reportMissingProp = reportMissingProp;
      function hasPropFunc(gen) {
        return gen.scopeValue("func", {
          ref: Object.prototype.hasOwnProperty,
          code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
        });
      }
      exports.hasPropFunc = hasPropFunc;
      function isOwnProperty(gen, data, property) {
        return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
      }
      exports.isOwnProperty = isOwnProperty;
      function propertyInData(gen, data, property, ownProperties) {
        const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
        return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
      }
      exports.propertyInData = propertyInData;
      function noPropertyInData(gen, data, property, ownProperties) {
        const cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
        return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
      }
      exports.noPropertyInData = noPropertyInData;
      function allSchemaProperties(schemaMap) {
        return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
      }
      exports.allSchemaProperties = allSchemaProperties;
      function schemaProperties(it, schemaMap) {
        return allSchemaProperties(schemaMap).filter((p) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p]));
      }
      exports.schemaProperties = schemaProperties;
      function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
        const dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
        const valCxt = [
          [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
          [names_1.default.parentData, it.parentData],
          [names_1.default.parentDataProperty, it.parentDataProperty],
          [names_1.default.rootData, names_1.default.rootData]
        ];
        if (it.opts.dynamicRef)
          valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
        const args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
        return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
      }
      exports.callValidateCode = callValidateCode;
      var newRegExp = (0, codegen_1._)`new RegExp`;
      function usePattern({ gen, it: { opts } }, pattern) {
        const u = opts.unicodeRegExp ? "u" : "";
        const { regExp } = opts.code;
        const rx = regExp(pattern, u);
        return gen.scopeValue("pattern", {
          key: rx.toString(),
          ref: rx,
          code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`
        });
      }
      exports.usePattern = usePattern;
      function validateArray(cxt) {
        const { gen, data, keyword, it } = cxt;
        const valid2 = gen.name("valid");
        if (it.allErrors) {
          const validArr = gen.let("valid", true);
          validateItems(() => gen.assign(validArr, false));
          return validArr;
        }
        gen.var(valid2, true);
        validateItems(() => gen.break());
        return valid2;
        function validateItems(notValid) {
          const len = gen.const("len", (0, codegen_1._)`${data}.length`);
          gen.forRange("i", 0, len, (i) => {
            cxt.subschema({
              keyword,
              dataProp: i,
              dataPropType: util_1.Type.Num
            }, valid2);
            gen.if((0, codegen_1.not)(valid2), notValid);
          });
        }
      }
      exports.validateArray = validateArray;
      function validateUnion(cxt) {
        const { gen, schema: schema2, keyword, it } = cxt;
        if (!Array.isArray(schema2))
          throw new Error("ajv implementation error");
        const alwaysValid = schema2.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
        if (alwaysValid && !it.opts.unevaluated)
          return;
        const valid2 = gen.let("valid", false);
        const schValid = gen.name("_valid");
        gen.block(() => schema2.forEach((_sch, i) => {
          const schCxt = cxt.subschema({
            keyword,
            schemaProp: i,
            compositeRule: true
          }, schValid);
          gen.assign(valid2, (0, codegen_1._)`${valid2} || ${schValid}`);
          const merged = cxt.mergeValidEvaluated(schCxt, schValid);
          if (!merged)
            gen.if((0, codegen_1.not)(valid2));
        }));
        cxt.result(valid2, () => cxt.reset(), () => cxt.error(true));
      }
      exports.validateUnion = validateUnion;
    }
  });

  // node_modules/ajv/dist/compile/validate/keyword.js
  var require_keyword = __commonJS({
    "node_modules/ajv/dist/compile/validate/keyword.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var code_1 = require_code2();
      var errors_1 = require_errors();
      function macroKeywordCode(cxt, def) {
        const { gen, keyword, schema: schema2, parentSchema, it } = cxt;
        const macroSchema = def.macro.call(it.self, schema2, parentSchema, it);
        const schemaRef = useKeyword(gen, keyword, macroSchema);
        if (it.opts.validateSchema !== false)
          it.self.validateSchema(macroSchema, true);
        const valid2 = gen.name("valid");
        cxt.subschema({
          schema: macroSchema,
          schemaPath: codegen_1.nil,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`,
          topSchemaRef: schemaRef,
          compositeRule: true
        }, valid2);
        cxt.pass(valid2, () => cxt.error(true));
      }
      exports.macroKeywordCode = macroKeywordCode;
      function funcKeywordCode(cxt, def) {
        var _a;
        const { gen, keyword, schema: schema2, parentSchema, $data, it } = cxt;
        checkAsyncKeyword(it, def);
        const validate = !$data && def.compile ? def.compile.call(it.self, schema2, parentSchema, it) : def.validate;
        const validateRef = useKeyword(gen, keyword, validate);
        const valid2 = gen.let("valid");
        cxt.block$data(valid2, validateKeyword);
        cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid2);
        function validateKeyword() {
          if (def.errors === false) {
            assignValid();
            if (def.modifying)
              modifyData(cxt);
            reportErrs(() => cxt.error());
          } else {
            const ruleErrs = def.async ? validateAsync() : validateSync();
            if (def.modifying)
              modifyData(cxt);
            reportErrs(() => addErrs(cxt, ruleErrs));
          }
        }
        function validateAsync() {
          const ruleErrs = gen.let("ruleErrs", null);
          gen.try(() => assignValid((0, codegen_1._)`await `), (e) => gen.assign(valid2, false).if((0, codegen_1._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), () => gen.throw(e)));
          return ruleErrs;
        }
        function validateSync() {
          const validateErrs = (0, codegen_1._)`${validateRef}.errors`;
          gen.assign(validateErrs, null);
          assignValid(codegen_1.nil);
          return validateErrs;
        }
        function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
          const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
          const passSchema = !("compile" in def && !$data || def.schema === false);
          gen.assign(valid2, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
        }
        function reportErrs(errors) {
          var _a2;
          gen.if((0, codegen_1.not)((_a2 = def.valid) !== null && _a2 !== void 0 ? _a2 : valid2), errors);
        }
      }
      exports.funcKeywordCode = funcKeywordCode;
      function modifyData(cxt) {
        const { gen, data, it } = cxt;
        gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
      }
      function addErrs(cxt, errs) {
        const { gen } = cxt;
        gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
          gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
          (0, errors_1.extendErrors)(cxt);
        }, () => cxt.error());
      }
      function checkAsyncKeyword({ schemaEnv }, def) {
        if (def.async && !schemaEnv.$async)
          throw new Error("async keyword in sync schema");
      }
      function useKeyword(gen, keyword, result) {
        if (result === void 0)
          throw new Error(`keyword "${keyword}" failed to compile`);
        return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
      }
      function validSchemaType(schema2, schemaType, allowUndefined = false) {
        return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema2) : st === "object" ? schema2 && typeof schema2 == "object" && !Array.isArray(schema2) : typeof schema2 == st || allowUndefined && typeof schema2 == "undefined");
      }
      exports.validSchemaType = validSchemaType;
      function validateKeywordUsage({ schema: schema2, opts, self: self2, errSchemaPath }, def, keyword) {
        if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
          throw new Error("ajv implementation error");
        }
        const deps = def.dependencies;
        if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema2, kwd))) {
          throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
        }
        if (def.validateSchema) {
          const valid2 = def.validateSchema(schema2[keyword]);
          if (!valid2) {
            const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self2.errorsText(def.validateSchema.errors);
            if (opts.validateSchema === "log")
              self2.logger.error(msg);
            else
              throw new Error(msg);
          }
        }
      }
      exports.validateKeywordUsage = validateKeywordUsage;
    }
  });

  // node_modules/ajv/dist/compile/validate/subschema.js
  var require_subschema = __commonJS({
    "node_modules/ajv/dist/compile/validate/subschema.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      function getSubschema(it, { keyword, schemaProp, schema: schema2, schemaPath, errSchemaPath, topSchemaRef }) {
        if (keyword !== void 0 && schema2 !== void 0) {
          throw new Error('both "keyword" and "schema" passed, only one allowed');
        }
        if (keyword !== void 0) {
          const sch = it.schema[keyword];
          return schemaProp === void 0 ? {
            schema: sch,
            schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
            errSchemaPath: `${it.errSchemaPath}/${keyword}`
          } : {
            schema: sch[schemaProp],
            schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
            errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
          };
        }
        if (schema2 !== void 0) {
          if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
            throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
          }
          return {
            schema: schema2,
            schemaPath,
            topSchemaRef,
            errSchemaPath
          };
        }
        throw new Error('either "keyword" or "schema" must be passed');
      }
      exports.getSubschema = getSubschema;
      function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
        if (data !== void 0 && dataProp !== void 0) {
          throw new Error('both "data" and "dataProp" passed, only one allowed');
        }
        const { gen } = it;
        if (dataProp !== void 0) {
          const { errorPath, dataPathArr, opts } = it;
          const nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
          dataContextProps(nextData);
          subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
          subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`;
          subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
        }
        if (data !== void 0) {
          const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true);
          dataContextProps(nextData);
          if (propertyName !== void 0)
            subschema.propertyName = propertyName;
        }
        if (dataTypes)
          subschema.dataTypes = dataTypes;
        function dataContextProps(_nextData) {
          subschema.data = _nextData;
          subschema.dataLevel = it.dataLevel + 1;
          subschema.dataTypes = [];
          it.definedProperties = /* @__PURE__ */ new Set();
          subschema.parentData = it.data;
          subschema.dataNames = [...it.dataNames, _nextData];
        }
      }
      exports.extendSubschemaData = extendSubschemaData;
      function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
        if (compositeRule !== void 0)
          subschema.compositeRule = compositeRule;
        if (createErrors !== void 0)
          subschema.createErrors = createErrors;
        if (allErrors !== void 0)
          subschema.allErrors = allErrors;
        subschema.jtdDiscriminator = jtdDiscriminator;
        subschema.jtdMetadata = jtdMetadata;
      }
      exports.extendSubschemaMode = extendSubschemaMode;
    }
  });

  // node_modules/fast-deep-equal/index.js
  var require_fast_deep_equal = __commonJS({
    "node_modules/fast-deep-equal/index.js"(exports, module) {
      init_globals();
      module.exports = function equal(a, b) {
        if (a === b)
          return true;
        if (a && b && typeof a == "object" && typeof b == "object") {
          if (a.constructor !== b.constructor)
            return false;
          var length, i, keys;
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
              return false;
            for (i = length; i-- !== 0; )
              if (!equal(a[i], b[i]))
                return false;
            return true;
          }
          if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
          if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
          if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length)
            return false;
          for (i = length; i-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
              return false;
          for (i = length; i-- !== 0; ) {
            var key2 = keys[i];
            if (!equal(a[key2], b[key2]))
              return false;
          }
          return true;
        }
        return a !== a && b !== b;
      };
    }
  });

  // node_modules/json-schema-traverse/index.js
  var require_json_schema_traverse = __commonJS({
    "node_modules/json-schema-traverse/index.js"(exports, module) {
      init_globals();
      var traverse = module.exports = function(schema2, opts, cb) {
        if (typeof opts == "function") {
          cb = opts;
          opts = {};
        }
        cb = opts.cb || cb;
        var pre = typeof cb == "function" ? cb : cb.pre || function() {
        };
        var post = cb.post || function() {
        };
        _traverse(opts, pre, post, schema2, "", schema2);
      };
      traverse.keywords = {
        additionalItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        propertyNames: true,
        not: true,
        if: true,
        then: true,
        else: true
      };
      traverse.arrayKeywords = {
        items: true,
        allOf: true,
        anyOf: true,
        oneOf: true
      };
      traverse.propsKeywords = {
        $defs: true,
        definitions: true,
        properties: true,
        patternProperties: true,
        dependencies: true
      };
      traverse.skipKeywords = {
        default: true,
        enum: true,
        const: true,
        required: true,
        maximum: true,
        minimum: true,
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        multipleOf: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        format: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxProperties: true,
        minProperties: true
      };
      function _traverse(opts, pre, post, schema2, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
        if (schema2 && typeof schema2 == "object" && !Array.isArray(schema2)) {
          pre(schema2, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
          for (var key2 in schema2) {
            var sch = schema2[key2];
            if (Array.isArray(sch)) {
              if (key2 in traverse.arrayKeywords) {
                for (var i = 0; i < sch.length; i++)
                  _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key2 + "/" + i, rootSchema, jsonPtr, key2, schema2, i);
              }
            } else if (key2 in traverse.propsKeywords) {
              if (sch && typeof sch == "object") {
                for (var prop in sch)
                  _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key2 + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key2, schema2, prop);
              }
            } else if (key2 in traverse.keywords || opts.allKeys && !(key2 in traverse.skipKeywords)) {
              _traverse(opts, pre, post, sch, jsonPtr + "/" + key2, rootSchema, jsonPtr, key2, schema2);
            }
          }
          post(schema2, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        }
      }
      function escapeJsonPtr(str) {
        return str.replace(/~/g, "~0").replace(/\//g, "~1");
      }
    }
  });

  // node_modules/ajv/dist/compile/resolve.js
  var require_resolve = __commonJS({
    "node_modules/ajv/dist/compile/resolve.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
      var util_1 = require_util();
      var equal = require_fast_deep_equal();
      var traverse = require_json_schema_traverse();
      var SIMPLE_INLINED = /* @__PURE__ */ new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const"
      ]);
      function inlineRef(schema2, limit = true) {
        if (typeof schema2 == "boolean")
          return true;
        if (limit === true)
          return !hasRef(schema2);
        if (!limit)
          return false;
        return countKeys(schema2) <= limit;
      }
      exports.inlineRef = inlineRef;
      var REF_KEYWORDS = /* @__PURE__ */ new Set([
        "$ref",
        "$recursiveRef",
        "$recursiveAnchor",
        "$dynamicRef",
        "$dynamicAnchor"
      ]);
      function hasRef(schema2) {
        for (const key2 in schema2) {
          if (REF_KEYWORDS.has(key2))
            return true;
          const sch = schema2[key2];
          if (Array.isArray(sch) && sch.some(hasRef))
            return true;
          if (typeof sch == "object" && hasRef(sch))
            return true;
        }
        return false;
      }
      function countKeys(schema2) {
        let count = 0;
        for (const key2 in schema2) {
          if (key2 === "$ref")
            return Infinity;
          count++;
          if (SIMPLE_INLINED.has(key2))
            continue;
          if (typeof schema2[key2] == "object") {
            (0, util_1.eachItem)(schema2[key2], (sch) => count += countKeys(sch));
          }
          if (count === Infinity)
            return Infinity;
        }
        return count;
      }
      function getFullPath(resolver, id = "", normalize2) {
        if (normalize2 !== false)
          id = normalizeId(id);
        const p = resolver.parse(id);
        return _getFullPath(resolver, p);
      }
      exports.getFullPath = getFullPath;
      function _getFullPath(resolver, p) {
        const serialized = resolver.serialize(p);
        return serialized.split("#")[0] + "#";
      }
      exports._getFullPath = _getFullPath;
      var TRAILING_SLASH_HASH = /#\/?$/;
      function normalizeId(id) {
        return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
      }
      exports.normalizeId = normalizeId;
      function resolveUrl(resolver, baseId, id) {
        id = normalizeId(id);
        return resolver.resolve(baseId, id);
      }
      exports.resolveUrl = resolveUrl;
      var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
      function getSchemaRefs(schema2, baseId) {
        if (typeof schema2 == "boolean")
          return {};
        const { schemaId, uriResolver } = this.opts;
        const schId = normalizeId(schema2[schemaId] || baseId);
        const baseIds = { "": schId };
        const pathPrefix = getFullPath(uriResolver, schId, false);
        const localRefs = {};
        const schemaRefs = /* @__PURE__ */ new Set();
        traverse(schema2, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
          if (parentJsonPtr === void 0)
            return;
          const fullPath = pathPrefix + jsonPtr;
          let baseId2 = baseIds[parentJsonPtr];
          if (typeof sch[schemaId] == "string")
            baseId2 = addRef.call(this, sch[schemaId]);
          addAnchor.call(this, sch.$anchor);
          addAnchor.call(this, sch.$dynamicAnchor);
          baseIds[jsonPtr] = baseId2;
          function addRef(ref) {
            const _resolve = this.opts.uriResolver.resolve;
            ref = normalizeId(baseId2 ? _resolve(baseId2, ref) : ref);
            if (schemaRefs.has(ref))
              throw ambiguos(ref);
            schemaRefs.add(ref);
            let schOrRef = this.refs[ref];
            if (typeof schOrRef == "string")
              schOrRef = this.refs[schOrRef];
            if (typeof schOrRef == "object") {
              checkAmbiguosRef(sch, schOrRef.schema, ref);
            } else if (ref !== normalizeId(fullPath)) {
              if (ref[0] === "#") {
                checkAmbiguosRef(sch, localRefs[ref], ref);
                localRefs[ref] = sch;
              } else {
                this.refs[ref] = fullPath;
              }
            }
            return ref;
          }
          function addAnchor(anchor) {
            if (typeof anchor == "string") {
              if (!ANCHOR.test(anchor))
                throw new Error(`invalid anchor "${anchor}"`);
              addRef.call(this, `#${anchor}`);
            }
          }
        });
        return localRefs;
        function checkAmbiguosRef(sch1, sch2, ref) {
          if (sch2 !== void 0 && !equal(sch1, sch2))
            throw ambiguos(ref);
        }
        function ambiguos(ref) {
          return new Error(`reference "${ref}" resolves to more than one schema`);
        }
      }
      exports.getSchemaRefs = getSchemaRefs;
    }
  });

  // node_modules/ajv/dist/compile/validate/index.js
  var require_validate = __commonJS({
    "node_modules/ajv/dist/compile/validate/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
      var boolSchema_1 = require_boolSchema();
      var dataType_1 = require_dataType();
      var applicability_1 = require_applicability();
      var dataType_2 = require_dataType();
      var defaults_1 = require_defaults();
      var keyword_1 = require_keyword();
      var subschema_1 = require_subschema();
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var resolve_1 = require_resolve();
      var util_1 = require_util();
      var errors_1 = require_errors();
      function validateFunctionCode(it) {
        if (isSchemaObj(it)) {
          checkKeywords(it);
          if (schemaCxtHasRules(it)) {
            topSchemaObjCode(it);
            return;
          }
        }
        validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
      }
      exports.validateFunctionCode = validateFunctionCode;
      function validateFunction({ gen, validateName, schema: schema2, schemaEnv, opts }, body) {
        if (opts.code.es5) {
          gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
            gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema2, opts)}`);
            destructureValCxtES5(gen, opts);
            gen.code(body);
          });
        } else {
          gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema2, opts)).code(body));
        }
      }
      function destructureValCxt(opts) {
        return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
      }
      function destructureValCxtES5(gen, opts) {
        gen.if(names_1.default.valCxt, () => {
          gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`);
          gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`);
          gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
          gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`);
          if (opts.dynamicRef)
            gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
        }, () => {
          gen.var(names_1.default.instancePath, (0, codegen_1._)`""`);
          gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`);
          gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`);
          gen.var(names_1.default.rootData, names_1.default.data);
          if (opts.dynamicRef)
            gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
        });
      }
      function topSchemaObjCode(it) {
        const { schema: schema2, opts, gen } = it;
        validateFunction(it, () => {
          if (opts.$comment && schema2.$comment)
            commentKeyword(it);
          checkNoDefault(it);
          gen.let(names_1.default.vErrors, null);
          gen.let(names_1.default.errors, 0);
          if (opts.unevaluated)
            resetEvaluated(it);
          typeAndKeywords(it);
          returnResults(it);
        });
        return;
      }
      function resetEvaluated(it) {
        const { gen, validateName } = it;
        it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`);
        gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`));
        gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
      }
      function funcSourceUrl(schema2, opts) {
        const schId = typeof schema2 == "object" && schema2[opts.schemaId];
        return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
      }
      function subschemaCode(it, valid2) {
        if (isSchemaObj(it)) {
          checkKeywords(it);
          if (schemaCxtHasRules(it)) {
            subSchemaObjCode(it, valid2);
            return;
          }
        }
        (0, boolSchema_1.boolOrEmptySchema)(it, valid2);
      }
      function schemaCxtHasRules({ schema: schema2, self: self2 }) {
        if (typeof schema2 == "boolean")
          return !schema2;
        for (const key2 in schema2)
          if (self2.RULES.all[key2])
            return true;
        return false;
      }
      function isSchemaObj(it) {
        return typeof it.schema != "boolean";
      }
      function subSchemaObjCode(it, valid2) {
        const { schema: schema2, gen, opts } = it;
        if (opts.$comment && schema2.$comment)
          commentKeyword(it);
        updateContext(it);
        checkAsyncSchema(it);
        const errsCount = gen.const("_errs", names_1.default.errors);
        typeAndKeywords(it, errsCount);
        gen.var(valid2, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
      }
      function checkKeywords(it) {
        (0, util_1.checkUnknownRules)(it);
        checkRefsAndKeywords(it);
      }
      function typeAndKeywords(it, errsCount) {
        if (it.opts.jtd)
          return schemaKeywords(it, [], false, errsCount);
        const types = (0, dataType_1.getSchemaTypes)(it.schema);
        const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
        schemaKeywords(it, types, !checkedTypes, errsCount);
      }
      function checkRefsAndKeywords(it) {
        const { schema: schema2, errSchemaPath, opts, self: self2 } = it;
        if (schema2.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema2, self2.RULES)) {
          self2.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
        }
      }
      function checkNoDefault(it) {
        const { schema: schema2, opts } = it;
        if (schema2.default !== void 0 && opts.useDefaults && opts.strictSchema) {
          (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
        }
      }
      function updateContext(it) {
        const schId = it.schema[it.opts.schemaId];
        if (schId)
          it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
      }
      function checkAsyncSchema(it) {
        if (it.schema.$async && !it.schemaEnv.$async)
          throw new Error("async schema in sync schema");
      }
      function commentKeyword({ gen, schemaEnv, schema: schema2, errSchemaPath, opts }) {
        const msg = schema2.$comment;
        if (opts.$comment === true) {
          gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
        } else if (typeof opts.$comment == "function") {
          const schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`;
          const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
          gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
        }
      }
      function returnResults(it) {
        const { gen, schemaEnv, validateName, ValidationError, opts } = it;
        if (schemaEnv.$async) {
          gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`));
        } else {
          gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors);
          if (opts.unevaluated)
            assignEvaluated(it);
          gen.return((0, codegen_1._)`${names_1.default.errors} === 0`);
        }
      }
      function assignEvaluated({ gen, evaluated, props, items }) {
        if (props instanceof codegen_1.Name)
          gen.assign((0, codegen_1._)`${evaluated}.props`, props);
        if (items instanceof codegen_1.Name)
          gen.assign((0, codegen_1._)`${evaluated}.items`, items);
      }
      function schemaKeywords(it, types, typeErrors, errsCount) {
        const { gen, schema: schema2, data, allErrors, opts, self: self2 } = it;
        const { RULES } = self2;
        if (schema2.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema2, RULES))) {
          gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
          return;
        }
        if (!opts.jtd)
          checkStrictTypes(it, types);
        gen.block(() => {
          for (const group of RULES.rules)
            groupKeywords(group);
          groupKeywords(RULES.post);
        });
        function groupKeywords(group) {
          if (!(0, applicability_1.shouldUseGroup)(schema2, group))
            return;
          if (group.type) {
            gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
            iterateKeywords(it, group);
            if (types.length === 1 && types[0] === group.type && typeErrors) {
              gen.else();
              (0, dataType_2.reportTypeError)(it);
            }
            gen.endIf();
          } else {
            iterateKeywords(it, group);
          }
          if (!allErrors)
            gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`);
        }
      }
      function iterateKeywords(it, group) {
        const { gen, schema: schema2, opts: { useDefaults } } = it;
        if (useDefaults)
          (0, defaults_1.assignDefaults)(it, group.type);
        gen.block(() => {
          for (const rule of group.rules) {
            if ((0, applicability_1.shouldUseRule)(schema2, rule)) {
              keywordCode(it, rule.keyword, rule.definition, group.type);
            }
          }
        });
      }
      function checkStrictTypes(it, types) {
        if (it.schemaEnv.meta || !it.opts.strictTypes)
          return;
        checkContextTypes(it, types);
        if (!it.opts.allowUnionTypes)
          checkMultipleTypes(it, types);
        checkKeywordTypes(it, it.dataTypes);
      }
      function checkContextTypes(it, types) {
        if (!types.length)
          return;
        if (!it.dataTypes.length) {
          it.dataTypes = types;
          return;
        }
        types.forEach((t) => {
          if (!includesType(it.dataTypes, t)) {
            strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
          }
        });
        it.dataTypes = it.dataTypes.filter((t) => includesType(types, t));
      }
      function checkMultipleTypes(it, ts) {
        if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
          strictTypesError(it, "use allowUnionTypes to allow union type keyword");
        }
      }
      function checkKeywordTypes(it, ts) {
        const rules = it.self.RULES.all;
        for (const keyword in rules) {
          const rule = rules[keyword];
          if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
            const { type } = rule.definition;
            if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
              strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
            }
          }
        }
      }
      function hasApplicableType(schTs, kwdT) {
        return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
      }
      function includesType(ts, t) {
        return ts.includes(t) || t === "integer" && ts.includes("number");
      }
      function strictTypesError(it, msg) {
        const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
        msg += ` at "${schemaPath}" (strictTypes)`;
        (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
      }
      var KeywordCxt = class {
        constructor(it, def, keyword) {
          (0, keyword_1.validateKeywordUsage)(it, def, keyword);
          this.gen = it.gen;
          this.allErrors = it.allErrors;
          this.keyword = keyword;
          this.data = it.data;
          this.schema = it.schema[keyword];
          this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
          this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
          this.schemaType = def.schemaType;
          this.parentSchema = it.schema;
          this.params = {};
          this.it = it;
          this.def = def;
          if (this.$data) {
            this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
          } else {
            this.schemaCode = this.schemaValue;
            if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
              throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
            }
          }
          if ("code" in def ? def.trackErrors : def.errors !== false) {
            this.errsCount = it.gen.const("_errs", names_1.default.errors);
          }
        }
        result(condition, successAction, failAction) {
          this.failResult((0, codegen_1.not)(condition), successAction, failAction);
        }
        failResult(condition, successAction, failAction) {
          this.gen.if(condition);
          if (failAction)
            failAction();
          else
            this.error();
          if (successAction) {
            this.gen.else();
            successAction();
            if (this.allErrors)
              this.gen.endIf();
          } else {
            if (this.allErrors)
              this.gen.endIf();
            else
              this.gen.else();
          }
        }
        pass(condition, failAction) {
          this.failResult((0, codegen_1.not)(condition), void 0, failAction);
        }
        fail(condition) {
          if (condition === void 0) {
            this.error();
            if (!this.allErrors)
              this.gen.if(false);
            return;
          }
          this.gen.if(condition);
          this.error();
          if (this.allErrors)
            this.gen.endIf();
          else
            this.gen.else();
        }
        fail$data(condition) {
          if (!this.$data)
            return this.fail(condition);
          const { schemaCode } = this;
          this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
        }
        error(append, errorParams, errorPaths) {
          if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
          }
          this._error(append, errorPaths);
        }
        _error(append, errorPaths) {
          ;
          (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
        }
        $dataError() {
          (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
        }
        reset() {
          if (this.errsCount === void 0)
            throw new Error('add "trackErrors" to keyword definition');
          (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
        }
        ok(cond) {
          if (!this.allErrors)
            this.gen.if(cond);
        }
        setParams(obj, assign) {
          if (assign)
            Object.assign(this.params, obj);
          else
            this.params = obj;
        }
        block$data(valid2, codeBlock, $dataValid = codegen_1.nil) {
          this.gen.block(() => {
            this.check$data(valid2, $dataValid);
            codeBlock();
          });
        }
        check$data(valid2 = codegen_1.nil, $dataValid = codegen_1.nil) {
          if (!this.$data)
            return;
          const { gen, schemaCode, schemaType, def } = this;
          gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid));
          if (valid2 !== codegen_1.nil)
            gen.assign(valid2, true);
          if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid2 !== codegen_1.nil)
              gen.assign(valid2, false);
          }
          gen.else();
        }
        invalid$data() {
          const { gen, schemaCode, schemaType, def, it } = this;
          return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
          function wrong$DataType() {
            if (schemaType.length) {
              if (!(schemaCode instanceof codegen_1.Name))
                throw new Error("ajv implementation error");
              const st = Array.isArray(schemaType) ? schemaType : [schemaType];
              return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
            }
            return codegen_1.nil;
          }
          function invalid$DataSchema() {
            if (def.validateSchema) {
              const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
              return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
            }
            return codegen_1.nil;
          }
        }
        subschema(appl, valid2) {
          const subschema = (0, subschema_1.getSubschema)(this.it, appl);
          (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
          (0, subschema_1.extendSubschemaMode)(subschema, appl);
          const nextContext = { ...this.it, ...subschema, items: void 0, props: void 0 };
          subschemaCode(nextContext, valid2);
          return nextContext;
        }
        mergeEvaluated(schemaCxt, toName) {
          const { it, gen } = this;
          if (!it.opts.unevaluated)
            return;
          if (it.props !== true && schemaCxt.props !== void 0) {
            it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
          }
          if (it.items !== true && schemaCxt.items !== void 0) {
            it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
          }
        }
        mergeValidEvaluated(schemaCxt, valid2) {
          const { it, gen } = this;
          if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
            gen.if(valid2, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
            return true;
          }
        }
      };
      exports.KeywordCxt = KeywordCxt;
      function keywordCode(it, keyword, def, ruleType) {
        const cxt = new KeywordCxt(it, def, keyword);
        if ("code" in def) {
          def.code(cxt, ruleType);
        } else if (cxt.$data && def.validate) {
          (0, keyword_1.funcKeywordCode)(cxt, def);
        } else if ("macro" in def) {
          (0, keyword_1.macroKeywordCode)(cxt, def);
        } else if (def.compile || def.validate) {
          (0, keyword_1.funcKeywordCode)(cxt, def);
        }
      }
      var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
      var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
      function getData($data, { dataLevel, dataNames, dataPathArr }) {
        let jsonPointer;
        let data;
        if ($data === "")
          return names_1.default.rootData;
        if ($data[0] === "/") {
          if (!JSON_POINTER.test($data))
            throw new Error(`Invalid JSON-pointer: ${$data}`);
          jsonPointer = $data;
          data = names_1.default.rootData;
        } else {
          const matches = RELATIVE_JSON_POINTER.exec($data);
          if (!matches)
            throw new Error(`Invalid JSON-pointer: ${$data}`);
          const up = +matches[1];
          jsonPointer = matches[2];
          if (jsonPointer === "#") {
            if (up >= dataLevel)
              throw new Error(errorMsg("property/index", up));
            return dataPathArr[dataLevel - up];
          }
          if (up > dataLevel)
            throw new Error(errorMsg("data", up));
          data = dataNames[dataLevel - up];
          if (!jsonPointer)
            return data;
        }
        let expr = data;
        const segments = jsonPointer.split("/");
        for (const segment of segments) {
          if (segment) {
            data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
            expr = (0, codegen_1._)`${expr} && ${data}`;
          }
        }
        return expr;
        function errorMsg(pointerType, up) {
          return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
        }
      }
      exports.getData = getData;
    }
  });

  // node_modules/ajv/dist/runtime/validation_error.js
  var require_validation_error = __commonJS({
    "node_modules/ajv/dist/runtime/validation_error.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var ValidationError = class extends Error {
        constructor(errors) {
          super("validation failed");
          this.errors = errors;
          this.ajv = this.validation = true;
        }
      };
      exports.default = ValidationError;
    }
  });

  // node_modules/ajv/dist/compile/ref_error.js
  var require_ref_error = __commonJS({
    "node_modules/ajv/dist/compile/ref_error.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var resolve_1 = require_resolve();
      var MissingRefError = class extends Error {
        constructor(resolver, baseId, ref, msg) {
          super(msg || `can't resolve reference ${ref} from id ${baseId}`);
          this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
          this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
        }
      };
      exports.default = MissingRefError;
    }
  });

  // node_modules/ajv/dist/compile/index.js
  var require_compile = __commonJS({
    "node_modules/ajv/dist/compile/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
      var codegen_1 = require_codegen();
      var validation_error_1 = require_validation_error();
      var names_1 = require_names();
      var resolve_1 = require_resolve();
      var util_1 = require_util();
      var validate_1 = require_validate();
      var SchemaEnv = class {
        constructor(env) {
          var _a;
          this.refs = {};
          this.dynamicAnchors = {};
          let schema2;
          if (typeof env.schema == "object")
            schema2 = env.schema;
          this.schema = env.schema;
          this.schemaId = env.schemaId;
          this.root = env.root || this;
          this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema2 === null || schema2 === void 0 ? void 0 : schema2[env.schemaId || "$id"]);
          this.schemaPath = env.schemaPath;
          this.localRefs = env.localRefs;
          this.meta = env.meta;
          this.$async = schema2 === null || schema2 === void 0 ? void 0 : schema2.$async;
          this.refs = {};
        }
      };
      exports.SchemaEnv = SchemaEnv;
      function compileSchema(sch) {
        const _sch = getCompilingSchema.call(this, sch);
        if (_sch)
          return _sch;
        const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
        const { es5, lines } = this.opts.code;
        const { ownProperties } = this.opts;
        const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
        let _ValidationError;
        if (sch.$async) {
          _ValidationError = gen.scopeValue("Error", {
            ref: validation_error_1.default,
            code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
          });
        }
        const validateName = gen.scopeName("validate");
        sch.validateName = validateName;
        const schemaCxt = {
          gen,
          allErrors: this.opts.allErrors,
          data: names_1.default.data,
          parentData: names_1.default.parentData,
          parentDataProperty: names_1.default.parentDataProperty,
          dataNames: [names_1.default.data],
          dataPathArr: [codegen_1.nil],
          dataLevel: 0,
          dataTypes: [],
          definedProperties: /* @__PURE__ */ new Set(),
          topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
          validateName,
          ValidationError: _ValidationError,
          schema: sch.schema,
          schemaEnv: sch,
          rootId,
          baseId: sch.baseId || rootId,
          schemaPath: codegen_1.nil,
          errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
          errorPath: (0, codegen_1._)`""`,
          opts: this.opts,
          self: this
        };
        let sourceCode;
        try {
          this._compilations.add(sch);
          (0, validate_1.validateFunctionCode)(schemaCxt);
          gen.optimize(this.opts.code.optimize);
          const validateCode = gen.toString();
          sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
          if (this.opts.code.process)
            sourceCode = this.opts.code.process(sourceCode, sch);
          const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
          const validate = makeValidate(this, this.scope.get());
          this.scope.value(validateName, { ref: validate });
          validate.errors = null;
          validate.schema = sch.schema;
          validate.schemaEnv = sch;
          if (sch.$async)
            validate.$async = true;
          if (this.opts.code.source === true) {
            validate.source = { validateName, validateCode, scopeValues: gen._values };
          }
          if (this.opts.unevaluated) {
            const { props, items } = schemaCxt;
            validate.evaluated = {
              props: props instanceof codegen_1.Name ? void 0 : props,
              items: items instanceof codegen_1.Name ? void 0 : items,
              dynamicProps: props instanceof codegen_1.Name,
              dynamicItems: items instanceof codegen_1.Name
            };
            if (validate.source)
              validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
          }
          sch.validate = validate;
          return sch;
        } catch (e) {
          delete sch.validate;
          delete sch.validateName;
          if (sourceCode)
            this.logger.error("Error compiling schema, function code:", sourceCode);
          throw e;
        } finally {
          this._compilations.delete(sch);
        }
      }
      exports.compileSchema = compileSchema;
      function resolveRef(root, baseId, ref) {
        var _a;
        ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
        const schOrFunc = root.refs[ref];
        if (schOrFunc)
          return schOrFunc;
        let _sch = resolve.call(this, root, ref);
        if (_sch === void 0) {
          const schema2 = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref];
          const { schemaId } = this.opts;
          if (schema2)
            _sch = new SchemaEnv({ schema: schema2, schemaId, root, baseId });
        }
        if (_sch === void 0)
          return;
        return root.refs[ref] = inlineOrCompile.call(this, _sch);
      }
      exports.resolveRef = resolveRef;
      function inlineOrCompile(sch) {
        if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
          return sch.schema;
        return sch.validate ? sch : compileSchema.call(this, sch);
      }
      function getCompilingSchema(schEnv) {
        for (const sch of this._compilations) {
          if (sameSchemaEnv(sch, schEnv))
            return sch;
        }
      }
      exports.getCompilingSchema = getCompilingSchema;
      function sameSchemaEnv(s1, s2) {
        return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
      }
      function resolve(root, ref) {
        let sch;
        while (typeof (sch = this.refs[ref]) == "string")
          ref = sch;
        return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
      }
      function resolveSchema(root, ref) {
        const p = this.opts.uriResolver.parse(ref);
        const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
        let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
        if (Object.keys(root.schema).length > 0 && refPath === baseId) {
          return getJsonPointer.call(this, p, root);
        }
        const id = (0, resolve_1.normalizeId)(refPath);
        const schOrRef = this.refs[id] || this.schemas[id];
        if (typeof schOrRef == "string") {
          const sch = resolveSchema.call(this, root, schOrRef);
          if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
            return;
          return getJsonPointer.call(this, p, sch);
        }
        if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
          return;
        if (!schOrRef.validate)
          compileSchema.call(this, schOrRef);
        if (id === (0, resolve_1.normalizeId)(ref)) {
          const { schema: schema2 } = schOrRef;
          const { schemaId } = this.opts;
          const schId = schema2[schemaId];
          if (schId)
            baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
          return new SchemaEnv({ schema: schema2, schemaId, root, baseId });
        }
        return getJsonPointer.call(this, p, schOrRef);
      }
      exports.resolveSchema = resolveSchema;
      var PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
        "properties",
        "patternProperties",
        "enum",
        "dependencies",
        "definitions"
      ]);
      function getJsonPointer(parsedRef, { baseId, schema: schema2, root }) {
        var _a;
        if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
          return;
        for (const part of parsedRef.fragment.slice(1).split("/")) {
          if (typeof schema2 === "boolean")
            return;
          const partSchema = schema2[(0, util_1.unescapeFragment)(part)];
          if (partSchema === void 0)
            return;
          schema2 = partSchema;
          const schId = typeof schema2 === "object" && schema2[this.opts.schemaId];
          if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
            baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
          }
        }
        let env;
        if (typeof schema2 != "boolean" && schema2.$ref && !(0, util_1.schemaHasRulesButRef)(schema2, this.RULES)) {
          const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema2.$ref);
          env = resolveSchema.call(this, root, $ref);
        }
        const { schemaId } = this.opts;
        env = env || new SchemaEnv({ schema: schema2, schemaId, root, baseId });
        if (env.schema !== env.root.schema)
          return env;
        return void 0;
      }
    }
  });

  // node_modules/ajv/dist/refs/data.json
  var require_data = __commonJS({
    "node_modules/ajv/dist/refs/data.json"(exports, module) {
      module.exports = {
        $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
        type: "object",
        required: ["$data"],
        properties: {
          $data: {
            type: "string",
            anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
          }
        },
        additionalProperties: false
      };
    }
  });

  // node_modules/uri-js/dist/es5/uri.all.js
  var require_uri_all = __commonJS({
    "node_modules/uri-js/dist/es5/uri.all.js"(exports, module) {
      init_globals();
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.URI = global2.URI || {});
      })(exports, function(exports2) {
        "use strict";
        function merge() {
          for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
            sets[_key] = arguments[_key];
          }
          if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for (var x = 1; x < xl; ++x) {
              sets[x] = sets[x].slice(1, -1);
            }
            sets[xl] = sets[xl].slice(1);
            return sets.join("");
          } else {
            return sets[0];
          }
        }
        function subexp(str) {
          return "(?:" + str + ")";
        }
        function typeOf(o) {
          return o === void 0 ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
        }
        function toUpperCase(str) {
          return str.toUpperCase();
        }
        function toArray(obj) {
          return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
        }
        function assign(target, source) {
          var obj = target;
          if (source) {
            for (var key2 in source) {
              obj[key2] = source[key2];
            }
          }
          return obj;
        }
        function buildExps(isIRI2) {
          var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$2 = merge(DIGIT$$, "[A-Fa-f]"), LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI2 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI2 ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+"), IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + ZONEID$), IPVFUTURE$ = subexp("[vV]" + HEXDIG$$2 + "+\\." + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), REG_NAME$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
          return {
            NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
            NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(merge("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
            UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
            OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
            PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
            IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
          };
        }
        var URI_PROTOCOL = buildExps(false);
        var IRI_PROTOCOL = buildExps(true);
        var slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var toConsumableArray = function(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];
            return arr2;
          } else {
            return Array.from(arr);
          }
        };
        var maxInt = 2147483647;
        var base = 36;
        var tMin = 1;
        var tMax = 26;
        var skew = 38;
        var damp = 700;
        var initialBias = 72;
        var initialN = 128;
        var delimiter = "-";
        var regexPunycode = /^xn--/;
        var regexNonASCII = /[^\0-\x7E]/;
        var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
        var errors = {
          "overflow": "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        };
        var baseMinusTMin = base - tMin;
        var floor = Math.floor;
        var stringFromCharCode = String.fromCharCode;
        function error$1(type) {
          throw new RangeError(errors[type]);
        }
        function map(array, fn) {
          var result = [];
          var length = array.length;
          while (length--) {
            result[length] = fn(array[length]);
          }
          return result;
        }
        function mapDomain(string, fn) {
          var parts = string.split("@");
          var result = "";
          if (parts.length > 1) {
            result = parts[0] + "@";
            string = parts[1];
          }
          string = string.replace(regexSeparators, ".");
          var labels = string.split(".");
          var encoded = map(labels, fn).join(".");
          return result + encoded;
        }
        function ucs2decode(string) {
          var output = [];
          var counter = 0;
          var length = string.length;
          while (counter < length) {
            var value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
              var extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
              } else {
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }
          return output;
        }
        var ucs2encode = function ucs2encode2(array) {
          return String.fromCodePoint.apply(String, toConsumableArray(array));
        };
        var basicToDigit = function basicToDigit2(codePoint) {
          if (codePoint - 48 < 10) {
            return codePoint - 22;
          }
          if (codePoint - 65 < 26) {
            return codePoint - 65;
          }
          if (codePoint - 97 < 26) {
            return codePoint - 97;
          }
          return base;
        };
        var digitToBasic = function digitToBasic2(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        };
        var adapt = function adapt2(delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        };
        var decode = function decode2(input) {
          var output = [];
          var inputLength = input.length;
          var i = 0;
          var n = initialN;
          var bias = initialBias;
          var basic = input.lastIndexOf(delimiter);
          if (basic < 0) {
            basic = 0;
          }
          for (var j = 0; j < basic; ++j) {
            if (input.charCodeAt(j) >= 128) {
              error$1("not-basic");
            }
            output.push(input.charCodeAt(j));
          }
          for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
            var oldi = i;
            for (var w = 1, k = base; ; k += base) {
              if (index >= inputLength) {
                error$1("invalid-input");
              }
              var digit = basicToDigit(input.charCodeAt(index++));
              if (digit >= base || digit > floor((maxInt - i) / w)) {
                error$1("overflow");
              }
              i += digit * w;
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (digit < t) {
                break;
              }
              var baseMinusT = base - t;
              if (w > floor(maxInt / baseMinusT)) {
                error$1("overflow");
              }
              w *= baseMinusT;
            }
            var out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            if (floor(i / out) > maxInt - n) {
              error$1("overflow");
            }
            n += floor(i / out);
            i %= out;
            output.splice(i++, 0, n);
          }
          return String.fromCodePoint.apply(String, output);
        };
        var encode = function encode2(input) {
          var output = [];
          input = ucs2decode(input);
          var inputLength = input.length;
          var n = initialN;
          var delta = 0;
          var bias = initialBias;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _currentValue2 = _step.value;
              if (_currentValue2 < 128) {
                output.push(stringFromCharCode(_currentValue2));
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
          var basicLength = output.length;
          var handledCPCount = basicLength;
          if (basicLength) {
            output.push(delimiter);
          }
          while (handledCPCount < inputLength) {
            var m = maxInt;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = void 0;
            try {
              for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var currentValue = _step2.value;
                if (currentValue >= n && currentValue < m) {
                  m = currentValue;
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
            var handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
              error$1("overflow");
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = void 0;
            try {
              for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _currentValue = _step3.value;
                if (_currentValue < n && ++delta > maxInt) {
                  error$1("overflow");
                }
                if (_currentValue == n) {
                  var q = delta;
                  for (var k = base; ; k += base) {
                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                      break;
                    }
                    var qMinusT = q - t;
                    var baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                    q = floor(qMinusT / baseMinusT);
                  }
                  output.push(stringFromCharCode(digitToBasic(q, 0)));
                  bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                  delta = 0;
                  ++handledCPCount;
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
            ++delta;
            ++n;
          }
          return output.join("");
        };
        var toUnicode = function toUnicode2(input) {
          return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
          });
        };
        var toASCII = function toASCII2(input) {
          return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
          });
        };
        var punycode = {
          "version": "2.1.0",
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode,
          "encode": encode,
          "toASCII": toASCII,
          "toUnicode": toUnicode
        };
        var SCHEMES = {};
        function pctEncChar(chr) {
          var c = chr.charCodeAt(0);
          var e = void 0;
          if (c < 16)
            e = "%0" + c.toString(16).toUpperCase();
          else if (c < 128)
            e = "%" + c.toString(16).toUpperCase();
          else if (c < 2048)
            e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
          else
            e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
          return e;
        }
        function pctDecChars(str) {
          var newStr = "";
          var i = 0;
          var il = str.length;
          while (i < il) {
            var c = parseInt(str.substr(i + 1, 2), 16);
            if (c < 128) {
              newStr += String.fromCharCode(c);
              i += 3;
            } else if (c >= 194 && c < 224) {
              if (il - i >= 6) {
                var c2 = parseInt(str.substr(i + 4, 2), 16);
                newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
              } else {
                newStr += str.substr(i, 6);
              }
              i += 6;
            } else if (c >= 224) {
              if (il - i >= 9) {
                var _c = parseInt(str.substr(i + 4, 2), 16);
                var c3 = parseInt(str.substr(i + 7, 2), 16);
                newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
              } else {
                newStr += str.substr(i, 9);
              }
              i += 9;
            } else {
              newStr += str.substr(i, 3);
              i += 3;
            }
          }
          return newStr;
        }
        function _normalizeComponentEncoding(components, protocol) {
          function decodeUnreserved2(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(protocol.UNRESERVED) ? str : decStr;
          }
          if (components.scheme)
            components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
          if (components.userinfo !== void 0)
            components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.host !== void 0)
            components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.path !== void 0)
            components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.query !== void 0)
            components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          if (components.fragment !== void 0)
            components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
          return components;
        }
        function _stripLeadingZeros(str) {
          return str.replace(/^0*(.*)/, "$1") || "0";
        }
        function _normalizeIPv4(host, protocol) {
          var matches = host.match(protocol.IPV4ADDRESS) || [];
          var _matches = slicedToArray(matches, 2), address = _matches[1];
          if (address) {
            return address.split(".").map(_stripLeadingZeros).join(".");
          } else {
            return host;
          }
        }
        function _normalizeIPv6(host, protocol) {
          var matches = host.match(protocol.IPV6ADDRESS) || [];
          var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
          if (address) {
            var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
            var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
            var lastFields = last.split(":").map(_stripLeadingZeros);
            var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
            var fieldCount = isLastFieldIPv4Address ? 7 : 8;
            var lastFieldsStart = lastFields.length - fieldCount;
            var fields = Array(fieldCount);
            for (var x = 0; x < fieldCount; ++x) {
              fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
            }
            if (isLastFieldIPv4Address) {
              fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
            }
            var allZeroFields = fields.reduce(function(acc, field, index) {
              if (!field || field === "0") {
                var lastLongest = acc[acc.length - 1];
                if (lastLongest && lastLongest.index + lastLongest.length === index) {
                  lastLongest.length++;
                } else {
                  acc.push({ index, length: 1 });
                }
              }
              return acc;
            }, []);
            var longestZeroFields = allZeroFields.sort(function(a, b) {
              return b.length - a.length;
            })[0];
            var newHost = void 0;
            if (longestZeroFields && longestZeroFields.length > 1) {
              var newFirst = fields.slice(0, longestZeroFields.index);
              var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
              newHost = newFirst.join(":") + "::" + newLast.join(":");
            } else {
              newHost = fields.join(":");
            }
            if (zone) {
              newHost += "%" + zone;
            }
            return newHost;
          } else {
            return host;
          }
        }
        var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
        var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
        function parse2(uriString) {
          var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var components = {};
          var protocol = options2.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
          if (options2.reference === "suffix")
            uriString = (options2.scheme ? options2.scheme + ":" : "") + "//" + uriString;
          var matches = uriString.match(URI_PARSE);
          if (matches) {
            if (NO_MATCH_IS_UNDEFINED) {
              components.scheme = matches[1];
              components.userinfo = matches[3];
              components.host = matches[4];
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = matches[7];
              components.fragment = matches[8];
              if (isNaN(components.port)) {
                components.port = matches[5];
              }
            } else {
              components.scheme = matches[1] || void 0;
              components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
              components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
              components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
              if (isNaN(components.port)) {
                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
              }
            }
            if (components.host) {
              components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
            }
            if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
              components.reference = "same-document";
            } else if (components.scheme === void 0) {
              components.reference = "relative";
            } else if (components.fragment === void 0) {
              components.reference = "absolute";
            } else {
              components.reference = "uri";
            }
            if (options2.reference && options2.reference !== "suffix" && options2.reference !== components.reference) {
              components.error = components.error || "URI is not a " + options2.reference + " reference.";
            }
            var schemeHandler = SCHEMES[(options2.scheme || components.scheme || "").toLowerCase()];
            if (!options2.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
              if (components.host && (options2.domainHost || schemeHandler && schemeHandler.domainHost)) {
                try {
                  components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                } catch (e) {
                  components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                }
              }
              _normalizeComponentEncoding(components, URI_PROTOCOL);
            } else {
              _normalizeComponentEncoding(components, protocol);
            }
            if (schemeHandler && schemeHandler.parse) {
              schemeHandler.parse(components, options2);
            }
          } else {
            components.error = components.error || "URI can not be parsed.";
          }
          return components;
        }
        function _recomposeAuthority(components, options2) {
          var protocol = options2.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
          var uriTokens = [];
          if (components.userinfo !== void 0) {
            uriTokens.push(components.userinfo);
            uriTokens.push("@");
          }
          if (components.host !== void 0) {
            uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
              return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
            }));
          }
          if (typeof components.port === "number" || typeof components.port === "string") {
            uriTokens.push(":");
            uriTokens.push(String(components.port));
          }
          return uriTokens.length ? uriTokens.join("") : void 0;
        }
        var RDS1 = /^\.\.?\//;
        var RDS2 = /^\/\.(\/|$)/;
        var RDS3 = /^\/\.\.(\/|$)/;
        var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
        function removeDotSegments(input) {
          var output = [];
          while (input.length) {
            if (input.match(RDS1)) {
              input = input.replace(RDS1, "");
            } else if (input.match(RDS2)) {
              input = input.replace(RDS2, "/");
            } else if (input.match(RDS3)) {
              input = input.replace(RDS3, "/");
              output.pop();
            } else if (input === "." || input === "..") {
              input = "";
            } else {
              var im = input.match(RDS5);
              if (im) {
                var s = im[0];
                input = input.slice(s.length);
                output.push(s);
              } else {
                throw new Error("Unexpected dot segment condition");
              }
            }
          }
          return output.join("");
        }
        function serialize(components) {
          var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var protocol = options2.iri ? IRI_PROTOCOL : URI_PROTOCOL;
          var uriTokens = [];
          var schemeHandler = SCHEMES[(options2.scheme || components.scheme || "").toLowerCase()];
          if (schemeHandler && schemeHandler.serialize)
            schemeHandler.serialize(components, options2);
          if (components.host) {
            if (protocol.IPV6ADDRESS.test(components.host)) {
            } else if (options2.domainHost || schemeHandler && schemeHandler.domainHost) {
              try {
                components.host = !options2.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to " + (!options2.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
            }
          }
          _normalizeComponentEncoding(components, protocol);
          if (options2.reference !== "suffix" && components.scheme) {
            uriTokens.push(components.scheme);
            uriTokens.push(":");
          }
          var authority = _recomposeAuthority(components, options2);
          if (authority !== void 0) {
            if (options2.reference !== "suffix") {
              uriTokens.push("//");
            }
            uriTokens.push(authority);
            if (components.path && components.path.charAt(0) !== "/") {
              uriTokens.push("/");
            }
          }
          if (components.path !== void 0) {
            var s = components.path;
            if (!options2.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
              s = removeDotSegments(s);
            }
            if (authority === void 0) {
              s = s.replace(/^\/\//, "/%2F");
            }
            uriTokens.push(s);
          }
          if (components.query !== void 0) {
            uriTokens.push("?");
            uriTokens.push(components.query);
          }
          if (components.fragment !== void 0) {
            uriTokens.push("#");
            uriTokens.push(components.fragment);
          }
          return uriTokens.join("");
        }
        function resolveComponents(base2, relative) {
          var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var skipNormalization = arguments[3];
          var target = {};
          if (!skipNormalization) {
            base2 = parse2(serialize(base2, options2), options2);
            relative = parse2(serialize(relative, options2), options2);
          }
          options2 = options2 || {};
          if (!options2.tolerant && relative.scheme) {
            target.scheme = relative.scheme;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
              target.userinfo = relative.userinfo;
              target.host = relative.host;
              target.port = relative.port;
              target.path = removeDotSegments(relative.path || "");
              target.query = relative.query;
            } else {
              if (!relative.path) {
                target.path = base2.path;
                if (relative.query !== void 0) {
                  target.query = relative.query;
                } else {
                  target.query = base2.query;
                }
              } else {
                if (relative.path.charAt(0) === "/") {
                  target.path = removeDotSegments(relative.path);
                } else {
                  if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                    target.path = "/" + relative.path;
                  } else if (!base2.path) {
                    target.path = relative.path;
                  } else {
                    target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
                  }
                  target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
              }
              target.userinfo = base2.userinfo;
              target.host = base2.host;
              target.port = base2.port;
            }
            target.scheme = base2.scheme;
          }
          target.fragment = relative.fragment;
          return target;
        }
        function resolve(baseURI, relativeURI, options2) {
          var schemelessOptions = assign({ scheme: "null" }, options2);
          return serialize(resolveComponents(parse2(baseURI, schemelessOptions), parse2(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
        }
        function normalize2(uri, options2) {
          if (typeof uri === "string") {
            uri = serialize(parse2(uri, options2), options2);
          } else if (typeOf(uri) === "object") {
            uri = parse2(serialize(uri, options2), options2);
          }
          return uri;
        }
        function equal(uriA, uriB, options2) {
          if (typeof uriA === "string") {
            uriA = serialize(parse2(uriA, options2), options2);
          } else if (typeOf(uriA) === "object") {
            uriA = serialize(uriA, options2);
          }
          if (typeof uriB === "string") {
            uriB = serialize(parse2(uriB, options2), options2);
          } else if (typeOf(uriB) === "object") {
            uriB = serialize(uriB, options2);
          }
          return uriA === uriB;
        }
        function escapeComponent(str, options2) {
          return str && str.toString().replace(!options2 || !options2.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
        }
        function unescapeComponent(str, options2) {
          return str && str.toString().replace(!options2 || !options2.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
        }
        var handler = {
          scheme: "http",
          domainHost: true,
          parse: function parse3(components, options2) {
            if (!components.host) {
              components.error = components.error || "HTTP URIs must have a host.";
            }
            return components;
          },
          serialize: function serialize2(components, options2) {
            var secure = String(components.scheme).toLowerCase() === "https";
            if (components.port === (secure ? 443 : 80) || components.port === "") {
              components.port = void 0;
            }
            if (!components.path) {
              components.path = "/";
            }
            return components;
          }
        };
        var handler$1 = {
          scheme: "https",
          domainHost: handler.domainHost,
          parse: handler.parse,
          serialize: handler.serialize
        };
        function isSecure(wsComponents) {
          return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
        }
        var handler$2 = {
          scheme: "ws",
          domainHost: true,
          parse: function parse3(components, options2) {
            var wsComponents = components;
            wsComponents.secure = isSecure(wsComponents);
            wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
            wsComponents.path = void 0;
            wsComponents.query = void 0;
            return wsComponents;
          },
          serialize: function serialize2(wsComponents, options2) {
            if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
              wsComponents.port = void 0;
            }
            if (typeof wsComponents.secure === "boolean") {
              wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
              wsComponents.secure = void 0;
            }
            if (wsComponents.resourceName) {
              var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
              wsComponents.path = path && path !== "/" ? path : void 0;
              wsComponents.query = query;
              wsComponents.resourceName = void 0;
            }
            wsComponents.fragment = void 0;
            return wsComponents;
          }
        };
        var handler$3 = {
          scheme: "wss",
          domainHost: handler$2.domainHost,
          parse: handler$2.parse,
          serialize: handler$2.serialize
        };
        var O = {};
        var isIRI = true;
        var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
        var HEXDIG$$ = "[0-9A-Fa-f]";
        var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
        var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
        var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
        var VCHAR$$ = merge(QTEXT$$, '[\\"\\\\]');
        var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
        var UNRESERVED = new RegExp(UNRESERVED$$, "g");
        var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
        var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
        var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
        var NOT_HFVALUE = NOT_HFNAME;
        function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(UNRESERVED) ? str : decStr;
        }
        var handler$4 = {
          scheme: "mailto",
          parse: function parse$$1(components, options2) {
            var mailtoComponents = components;
            var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
            mailtoComponents.path = void 0;
            if (mailtoComponents.query) {
              var unknownHeaders = false;
              var headers = {};
              var hfields = mailtoComponents.query.split("&");
              for (var x = 0, xl = hfields.length; x < xl; ++x) {
                var hfield = hfields[x].split("=");
                switch (hfield[0]) {
                  case "to":
                    var toAddrs = hfield[1].split(",");
                    for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                      to.push(toAddrs[_x]);
                    }
                    break;
                  case "subject":
                    mailtoComponents.subject = unescapeComponent(hfield[1], options2);
                    break;
                  case "body":
                    mailtoComponents.body = unescapeComponent(hfield[1], options2);
                    break;
                  default:
                    unknownHeaders = true;
                    headers[unescapeComponent(hfield[0], options2)] = unescapeComponent(hfield[1], options2);
                    break;
                }
              }
              if (unknownHeaders)
                mailtoComponents.headers = headers;
            }
            mailtoComponents.query = void 0;
            for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
              var addr = to[_x2].split("@");
              addr[0] = unescapeComponent(addr[0]);
              if (!options2.unicodeSupport) {
                try {
                  addr[1] = punycode.toASCII(unescapeComponent(addr[1], options2).toLowerCase());
                } catch (e) {
                  mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                }
              } else {
                addr[1] = unescapeComponent(addr[1], options2).toLowerCase();
              }
              to[_x2] = addr.join("@");
            }
            return mailtoComponents;
          },
          serialize: function serialize$$1(mailtoComponents, options2) {
            var components = mailtoComponents;
            var to = toArray(mailtoComponents.to);
            if (to) {
              for (var x = 0, xl = to.length; x < xl; ++x) {
                var toAddr = String(to[x]);
                var atIdx = toAddr.lastIndexOf("@");
                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                var domain = toAddr.slice(atIdx + 1);
                try {
                  domain = !options2.iri ? punycode.toASCII(unescapeComponent(domain, options2).toLowerCase()) : punycode.toUnicode(domain);
                } catch (e) {
                  components.error = components.error || "Email address's domain name can not be converted to " + (!options2.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
                to[x] = localPart + "@" + domain;
              }
              components.path = to.join(",");
            }
            var headers = mailtoComponents.headers = mailtoComponents.headers || {};
            if (mailtoComponents.subject)
              headers["subject"] = mailtoComponents.subject;
            if (mailtoComponents.body)
              headers["body"] = mailtoComponents.body;
            var fields = [];
            for (var name in headers) {
              if (headers[name] !== O[name]) {
                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
              }
            }
            if (fields.length) {
              components.query = fields.join("&");
            }
            return components;
          }
        };
        var URN_PARSE = /^([^\:]+)\:(.*)/;
        var handler$5 = {
          scheme: "urn",
          parse: function parse$$1(components, options2) {
            var matches = components.path && components.path.match(URN_PARSE);
            var urnComponents = components;
            if (matches) {
              var scheme = options2.scheme || urnComponents.scheme || "urn";
              var nid = matches[1].toLowerCase();
              var nss = matches[2];
              var urnScheme = scheme + ":" + (options2.nid || nid);
              var schemeHandler = SCHEMES[urnScheme];
              urnComponents.nid = nid;
              urnComponents.nss = nss;
              urnComponents.path = void 0;
              if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options2);
              }
            } else {
              urnComponents.error = urnComponents.error || "URN can not be parsed.";
            }
            return urnComponents;
          },
          serialize: function serialize$$1(urnComponents, options2) {
            var scheme = options2.scheme || urnComponents.scheme || "urn";
            var nid = urnComponents.nid;
            var urnScheme = scheme + ":" + (options2.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            if (schemeHandler) {
              urnComponents = schemeHandler.serialize(urnComponents, options2);
            }
            var uriComponents = urnComponents;
            var nss = urnComponents.nss;
            uriComponents.path = (nid || options2.nid) + ":" + nss;
            return uriComponents;
          }
        };
        var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
        var handler$6 = {
          scheme: "urn:uuid",
          parse: function parse3(urnComponents, options2) {
            var uuidComponents = urnComponents;
            uuidComponents.uuid = uuidComponents.nss;
            uuidComponents.nss = void 0;
            if (!options2.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
              uuidComponents.error = uuidComponents.error || "UUID is not valid.";
            }
            return uuidComponents;
          },
          serialize: function serialize2(uuidComponents, options2) {
            var urnComponents = uuidComponents;
            urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
            return urnComponents;
          }
        };
        SCHEMES[handler.scheme] = handler;
        SCHEMES[handler$1.scheme] = handler$1;
        SCHEMES[handler$2.scheme] = handler$2;
        SCHEMES[handler$3.scheme] = handler$3;
        SCHEMES[handler$4.scheme] = handler$4;
        SCHEMES[handler$5.scheme] = handler$5;
        SCHEMES[handler$6.scheme] = handler$6;
        exports2.SCHEMES = SCHEMES;
        exports2.pctEncChar = pctEncChar;
        exports2.pctDecChars = pctDecChars;
        exports2.parse = parse2;
        exports2.removeDotSegments = removeDotSegments;
        exports2.serialize = serialize;
        exports2.resolveComponents = resolveComponents;
        exports2.resolve = resolve;
        exports2.normalize = normalize2;
        exports2.equal = equal;
        exports2.escapeComponent = escapeComponent;
        exports2.unescapeComponent = unescapeComponent;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/ajv/dist/runtime/uri.js
  var require_uri = __commonJS({
    "node_modules/ajv/dist/runtime/uri.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var uri = require_uri_all();
      uri.code = 'require("ajv/dist/runtime/uri").default';
      exports.default = uri;
    }
  });

  // node_modules/ajv/dist/core.js
  var require_core = __commonJS({
    "node_modules/ajv/dist/core.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
      var validate_1 = require_validate();
      Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
        return validate_1.KeywordCxt;
      } });
      var codegen_1 = require_codegen();
      Object.defineProperty(exports, "_", { enumerable: true, get: function() {
        return codegen_1._;
      } });
      Object.defineProperty(exports, "str", { enumerable: true, get: function() {
        return codegen_1.str;
      } });
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return codegen_1.stringify;
      } });
      Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
        return codegen_1.nil;
      } });
      Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
        return codegen_1.Name;
      } });
      Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
        return codegen_1.CodeGen;
      } });
      var validation_error_1 = require_validation_error();
      var ref_error_1 = require_ref_error();
      var rules_1 = require_rules();
      var compile_1 = require_compile();
      var codegen_2 = require_codegen();
      var resolve_1 = require_resolve();
      var dataType_1 = require_dataType();
      var util_1 = require_util();
      var $dataRefSchema = require_data();
      var uri_1 = require_uri();
      var defaultRegExp = (str, flags) => new RegExp(str, flags);
      defaultRegExp.code = "new RegExp";
      var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
      var EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
      ]);
      var removedOptions = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
      };
      var deprecatedOptions = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
      };
      var MAX_EXPRESSION = 200;
      function requiredOptions(o) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const s = o.strict;
        const _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
        const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
        const regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
        const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
        return {
          strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
          strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
          strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
          strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
          strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
          code: o.code ? { ...o.code, optimize, regExp } : { optimize, regExp },
          loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
          loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
          meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
          messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
          inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
          schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
          addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
          validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
          validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
          unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
          int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
          uriResolver
        };
      }
      var Ajv = class {
        constructor(opts = {}) {
          this.schemas = {};
          this.refs = {};
          this.formats = {};
          this._compilations = /* @__PURE__ */ new Set();
          this._loading = {};
          this._cache = /* @__PURE__ */ new Map();
          opts = this.opts = { ...opts, ...requiredOptions(opts) };
          const { es5, lines } = this.opts.code;
          this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
          this.logger = getLogger(opts.logger);
          const formatOpt = opts.validateFormats;
          opts.validateFormats = false;
          this.RULES = (0, rules_1.getRules)();
          checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
          checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
          this._metaOpts = getMetaSchemaOptions.call(this);
          if (opts.formats)
            addInitialFormats.call(this);
          this._addVocabularies();
          this._addDefaultMetaSchema();
          if (opts.keywords)
            addInitialKeywords.call(this, opts.keywords);
          if (typeof opts.meta == "object")
            this.addMetaSchema(opts.meta);
          addInitialSchemas.call(this);
          opts.validateFormats = formatOpt;
        }
        _addVocabularies() {
          this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
          const { $data, meta, schemaId } = this.opts;
          let _dataRefSchema = $dataRefSchema;
          if (schemaId === "id") {
            _dataRefSchema = { ...$dataRefSchema };
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
          }
          if (meta && $data)
            this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
        }
        defaultMeta() {
          const { meta, schemaId } = this.opts;
          return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : void 0;
        }
        validate(schemaKeyRef, data) {
          let v;
          if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v)
              throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
          } else {
            v = this.compile(schemaKeyRef);
          }
          const valid2 = v(data);
          if (!("$async" in v))
            this.errors = v.errors;
          return valid2;
        }
        compile(schema2, _meta) {
          const sch = this._addSchema(schema2, _meta);
          return sch.validate || this._compileSchemaEnv(sch);
        }
        compileAsync(schema2, meta) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          const { loadSchema } = this.opts;
          return runCompileAsync.call(this, schema2, meta);
          async function runCompileAsync(_schema, _meta) {
            await loadMetaSchema.call(this, _schema.$schema);
            const sch = this._addSchema(_schema, _meta);
            return sch.validate || _compileAsync.call(this, sch);
          }
          async function loadMetaSchema($ref) {
            if ($ref && !this.getSchema($ref)) {
              await runCompileAsync.call(this, { $ref }, true);
            }
          }
          async function _compileAsync(sch) {
            try {
              return this._compileSchemaEnv(sch);
            } catch (e) {
              if (!(e instanceof ref_error_1.default))
                throw e;
              checkLoaded.call(this, e);
              await loadMissingSchema.call(this, e.missingSchema);
              return _compileAsync.call(this, sch);
            }
          }
          function checkLoaded({ missingSchema: ref, missingRef }) {
            if (this.refs[ref]) {
              throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
            }
          }
          async function loadMissingSchema(ref) {
            const _schema = await _loadSchema.call(this, ref);
            if (!this.refs[ref])
              await loadMetaSchema.call(this, _schema.$schema);
            if (!this.refs[ref])
              this.addSchema(_schema, ref, meta);
          }
          async function _loadSchema(ref) {
            const p = this._loading[ref];
            if (p)
              return p;
            try {
              return await (this._loading[ref] = loadSchema(ref));
            } finally {
              delete this._loading[ref];
            }
          }
        }
        addSchema(schema2, key2, _meta, _validateSchema = this.opts.validateSchema) {
          if (Array.isArray(schema2)) {
            for (const sch of schema2)
              this.addSchema(sch, void 0, _meta, _validateSchema);
            return this;
          }
          let id;
          if (typeof schema2 === "object") {
            const { schemaId } = this.opts;
            id = schema2[schemaId];
            if (id !== void 0 && typeof id != "string") {
              throw new Error(`schema ${schemaId} must be string`);
            }
          }
          key2 = (0, resolve_1.normalizeId)(key2 || id);
          this._checkUnique(key2);
          this.schemas[key2] = this._addSchema(schema2, _meta, key2, _validateSchema, true);
          return this;
        }
        addMetaSchema(schema2, key2, _validateSchema = this.opts.validateSchema) {
          this.addSchema(schema2, key2, true, _validateSchema);
          return this;
        }
        validateSchema(schema2, throwOrLogError) {
          if (typeof schema2 == "boolean")
            return true;
          let $schema;
          $schema = schema2.$schema;
          if ($schema !== void 0 && typeof $schema != "string") {
            throw new Error("$schema must be a string");
          }
          $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
          if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
          }
          const valid2 = this.validate($schema, schema2);
          if (!valid2 && throwOrLogError) {
            const message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log")
              this.logger.error(message);
            else
              throw new Error(message);
          }
          return valid2;
        }
        getSchema(keyRef) {
          let sch;
          while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
            keyRef = sch;
          if (sch === void 0) {
            const { schemaId } = this.opts;
            const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
            sch = compile_1.resolveSchema.call(this, root, keyRef);
            if (!sch)
              return;
            this.refs[keyRef] = sch;
          }
          return sch.validate || this._compileSchemaEnv(sch);
        }
        removeSchema(schemaKeyRef) {
          if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
          }
          switch (typeof schemaKeyRef) {
            case "undefined":
              this._removeAllSchemas(this.schemas);
              this._removeAllSchemas(this.refs);
              this._cache.clear();
              return this;
            case "string": {
              const sch = getSchEnv.call(this, schemaKeyRef);
              if (typeof sch == "object")
                this._cache.delete(sch.schema);
              delete this.schemas[schemaKeyRef];
              delete this.refs[schemaKeyRef];
              return this;
            }
            case "object": {
              const cacheKey = schemaKeyRef;
              this._cache.delete(cacheKey);
              let id = schemaKeyRef[this.opts.schemaId];
              if (id) {
                id = (0, resolve_1.normalizeId)(id);
                delete this.schemas[id];
                delete this.refs[id];
              }
              return this;
            }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        addVocabulary(definitions) {
          for (const def of definitions)
            this.addKeyword(def);
          return this;
        }
        addKeyword(kwdOrDef, def) {
          let keyword;
          if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (typeof def == "object") {
              this.logger.warn("these parameters are deprecated, see docs for addKeyword");
              def.keyword = keyword;
            }
          } else if (typeof kwdOrDef == "object" && def === void 0) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
              throw new Error("addKeywords: keyword must be string or non-empty array");
            }
          } else {
            throw new Error("invalid addKeywords parameters");
          }
          checkKeyword.call(this, keyword, def);
          if (!def) {
            (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
            return this;
          }
          keywordMetaschema.call(this, def);
          const definition = {
            ...def,
            type: (0, dataType_1.getJSONTypes)(def.type),
            schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
          };
          (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k) => addRule.call(this, k, definition) : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t)));
          return this;
        }
        getKeyword(keyword) {
          const rule = this.RULES.all[keyword];
          return typeof rule == "object" ? rule.definition : !!rule;
        }
        removeKeyword(keyword) {
          const { RULES } = this;
          delete RULES.keywords[keyword];
          delete RULES.all[keyword];
          for (const group of RULES.rules) {
            const i = group.rules.findIndex((rule) => rule.keyword === keyword);
            if (i >= 0)
              group.rules.splice(i, 1);
          }
          return this;
        }
        addFormat(name, format) {
          if (typeof format == "string")
            format = new RegExp(format);
          this.formats[name] = format;
          return this;
        }
        errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
          if (!errors || errors.length === 0)
            return "No errors";
          return errors.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
        }
        $dataMetaSchema(metaSchema, keywordsJsonPointers) {
          const rules = this.RULES.all;
          metaSchema = JSON.parse(JSON.stringify(metaSchema));
          for (const jsonPointer of keywordsJsonPointers) {
            const segments = jsonPointer.split("/").slice(1);
            let keywords2 = metaSchema;
            for (const seg of segments)
              keywords2 = keywords2[seg];
            for (const key2 in rules) {
              const rule = rules[key2];
              if (typeof rule != "object")
                continue;
              const { $data } = rule.definition;
              const schema2 = keywords2[key2];
              if ($data && schema2)
                keywords2[key2] = schemaOrData(schema2);
            }
          }
          return metaSchema;
        }
        _removeAllSchemas(schemas, regex) {
          for (const keyRef in schemas) {
            const sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
              if (typeof sch == "string") {
                delete schemas[keyRef];
              } else if (sch && !sch.meta) {
                this._cache.delete(sch.schema);
                delete schemas[keyRef];
              }
            }
          }
        }
        _addSchema(schema2, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
          let id;
          const { schemaId } = this.opts;
          if (typeof schema2 == "object") {
            id = schema2[schemaId];
          } else {
            if (this.opts.jtd)
              throw new Error("schema must be object");
            else if (typeof schema2 != "boolean")
              throw new Error("schema must be object or boolean");
          }
          let sch = this._cache.get(schema2);
          if (sch !== void 0)
            return sch;
          baseId = (0, resolve_1.normalizeId)(id || baseId);
          const localRefs = resolve_1.getSchemaRefs.call(this, schema2, baseId);
          sch = new compile_1.SchemaEnv({ schema: schema2, schemaId, meta, baseId, localRefs });
          this._cache.set(sch.schema, sch);
          if (addSchema && !baseId.startsWith("#")) {
            if (baseId)
              this._checkUnique(baseId);
            this.refs[baseId] = sch;
          }
          if (validateSchema)
            this.validateSchema(schema2, true);
          return sch;
        }
        _checkUnique(id) {
          if (this.schemas[id] || this.refs[id]) {
            throw new Error(`schema with key or id "${id}" already exists`);
          }
        }
        _compileSchemaEnv(sch) {
          if (sch.meta)
            this._compileMetaSchema(sch);
          else
            compile_1.compileSchema.call(this, sch);
          if (!sch.validate)
            throw new Error("ajv implementation error");
          return sch.validate;
        }
        _compileMetaSchema(sch) {
          const currentOpts = this.opts;
          this.opts = this._metaOpts;
          try {
            compile_1.compileSchema.call(this, sch);
          } finally {
            this.opts = currentOpts;
          }
        }
      };
      exports.default = Ajv;
      Ajv.ValidationError = validation_error_1.default;
      Ajv.MissingRefError = ref_error_1.default;
      function checkOptions(checkOpts, options2, msg, log2 = "error") {
        for (const key2 in checkOpts) {
          const opt = key2;
          if (opt in options2)
            this.logger[log2](`${msg}: option ${key2}. ${checkOpts[opt]}`);
        }
      }
      function getSchEnv(keyRef) {
        keyRef = (0, resolve_1.normalizeId)(keyRef);
        return this.schemas[keyRef] || this.refs[keyRef];
      }
      function addInitialSchemas() {
        const optsSchemas = this.opts.schemas;
        if (!optsSchemas)
          return;
        if (Array.isArray(optsSchemas))
          this.addSchema(optsSchemas);
        else
          for (const key2 in optsSchemas)
            this.addSchema(optsSchemas[key2], key2);
      }
      function addInitialFormats() {
        for (const name in this.opts.formats) {
          const format = this.opts.formats[name];
          if (format)
            this.addFormat(name, format);
        }
      }
      function addInitialKeywords(defs) {
        if (Array.isArray(defs)) {
          this.addVocabulary(defs);
          return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const keyword in defs) {
          const def = defs[keyword];
          if (!def.keyword)
            def.keyword = keyword;
          this.addKeyword(def);
        }
      }
      function getMetaSchemaOptions() {
        const metaOpts = { ...this.opts };
        for (const opt of META_IGNORE_OPTIONS)
          delete metaOpts[opt];
        return metaOpts;
      }
      var noLogs = { log() {
      }, warn() {
      }, error() {
      } };
      function getLogger(logger) {
        if (logger === false)
          return noLogs;
        if (logger === void 0)
          return console;
        if (logger.log && logger.warn && logger.error)
          return logger;
        throw new Error("logger must implement log, warn and error methods");
      }
      var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
      function checkKeyword(keyword, def) {
        const { RULES } = this;
        (0, util_1.eachItem)(keyword, (kwd) => {
          if (RULES.keywords[kwd])
            throw new Error(`Keyword ${kwd} is already defined`);
          if (!KEYWORD_NAME.test(kwd))
            throw new Error(`Keyword ${kwd} has invalid name`);
        });
        if (!def)
          return;
        if (def.$data && !("code" in def || "validate" in def)) {
          throw new Error('$data keyword must have "code" or "validate" function');
        }
      }
      function addRule(keyword, definition, dataType) {
        var _a;
        const post = definition === null || definition === void 0 ? void 0 : definition.post;
        if (dataType && post)
          throw new Error('keyword with "post" flag cannot have "type"');
        const { RULES } = this;
        let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType);
        if (!ruleGroup) {
          ruleGroup = { type: dataType, rules: [] };
          RULES.rules.push(ruleGroup);
        }
        RULES.keywords[keyword] = true;
        if (!definition)
          return;
        const rule = {
          keyword,
          definition: {
            ...definition,
            type: (0, dataType_1.getJSONTypes)(definition.type),
            schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
          }
        };
        if (definition.before)
          addBeforeRule.call(this, ruleGroup, rule, definition.before);
        else
          ruleGroup.rules.push(rule);
        RULES.all[keyword] = rule;
        (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
      }
      function addBeforeRule(ruleGroup, rule, before) {
        const i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
        if (i >= 0) {
          ruleGroup.rules.splice(i, 0, rule);
        } else {
          ruleGroup.rules.push(rule);
          this.logger.warn(`rule ${before} is not defined`);
        }
      }
      function keywordMetaschema(def) {
        let { metaSchema } = def;
        if (metaSchema === void 0)
          return;
        if (def.$data && this.opts.$data)
          metaSchema = schemaOrData(metaSchema);
        def.validateSchema = this.compile(metaSchema, true);
      }
      var $dataRef = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
      };
      function schemaOrData(schema2) {
        return { anyOf: [schema2, $dataRef] };
      }
    }
  });

  // node_modules/ajv/dist/vocabularies/core/id.js
  var require_id = __commonJS({
    "node_modules/ajv/dist/vocabularies/core/id.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var def = {
        keyword: "id",
        code() {
          throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/core/ref.js
  var require_ref = __commonJS({
    "node_modules/ajv/dist/vocabularies/core/ref.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.callRef = exports.getValidate = void 0;
      var ref_error_1 = require_ref_error();
      var code_1 = require_code2();
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var compile_1 = require_compile();
      var util_1 = require_util();
      var def = {
        keyword: "$ref",
        schemaType: "string",
        code(cxt) {
          const { gen, schema: $ref, it } = cxt;
          const { baseId, schemaEnv: env, validateName, opts, self: self2 } = it;
          const { root } = env;
          if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
            return callRootRef();
          const schOrEnv = compile_1.resolveRef.call(self2, root, baseId, $ref);
          if (schOrEnv === void 0)
            throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
          if (schOrEnv instanceof compile_1.SchemaEnv)
            return callValidate(schOrEnv);
          return inlineRefSchema(schOrEnv);
          function callRootRef() {
            if (env === root)
              return callRef(cxt, validateName, env, env.$async);
            const rootName = gen.scopeValue("root", { ref: root });
            return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
          }
          function callValidate(sch) {
            const v = getValidate(cxt, sch);
            callRef(cxt, v, sch, sch.$async);
          }
          function inlineRefSchema(sch) {
            const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
            const valid2 = gen.name("valid");
            const schCxt = cxt.subschema({
              schema: sch,
              dataTypes: [],
              schemaPath: codegen_1.nil,
              topSchemaRef: schName,
              errSchemaPath: $ref
            }, valid2);
            cxt.mergeEvaluated(schCxt);
            cxt.ok(valid2);
          }
        }
      };
      function getValidate(cxt, sch) {
        const { gen } = cxt;
        return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
      }
      exports.getValidate = getValidate;
      function callRef(cxt, v, sch, $async) {
        const { gen, it } = cxt;
        const { allErrors, schemaEnv: env, opts } = it;
        const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
        if ($async)
          callAsyncRef();
        else
          callSyncRef();
        function callAsyncRef() {
          if (!env.$async)
            throw new Error("async schema referenced by sync schema");
          const valid2 = gen.let("valid");
          gen.try(() => {
            gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v, passCxt)}`);
            addEvaluatedFrom(v);
            if (!allErrors)
              gen.assign(valid2, true);
          }, (e) => {
            gen.if((0, codegen_1._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
            addErrorsFrom(e);
            if (!allErrors)
              gen.assign(valid2, false);
          });
          cxt.ok(valid2);
        }
        function callSyncRef() {
          cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
        }
        function addErrorsFrom(source) {
          const errs = (0, codegen_1._)`${source}.errors`;
          gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`);
          gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
        }
        function addEvaluatedFrom(source) {
          var _a;
          if (!it.opts.unevaluated)
            return;
          const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
          if (it.props !== true) {
            if (schEvaluated && !schEvaluated.dynamicProps) {
              if (schEvaluated.props !== void 0) {
                it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
              }
            } else {
              const props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
              it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
            }
          }
          if (it.items !== true) {
            if (schEvaluated && !schEvaluated.dynamicItems) {
              if (schEvaluated.items !== void 0) {
                it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
              }
            } else {
              const items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
              it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
            }
          }
        }
      }
      exports.callRef = callRef;
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/core/index.js
  var require_core2 = __commonJS({
    "node_modules/ajv/dist/vocabularies/core/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var id_1 = require_id();
      var ref_1 = require_ref();
      var core = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        { keyword: "$comment" },
        "definitions",
        id_1.default,
        ref_1.default
      ];
      exports.default = core;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/limitNumber.js
  var require_limitNumber = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/limitNumber.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var ops = codegen_1.operators;
      var KWDs = {
        maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
        minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
        exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
        exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
      };
      var error = {
        message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
        params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
      };
      var def = {
        keyword: Object.keys(KWDs),
        type: "number",
        schemaType: "number",
        $data: true,
        error,
        code(cxt) {
          const { keyword, data, schemaCode } = cxt;
          cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/multipleOf.js
  var require_multipleOf = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/multipleOf.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var error = {
        message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
        params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
      };
      var def = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: true,
        error,
        code(cxt) {
          const { gen, data, schemaCode, it } = cxt;
          const prec = it.opts.multipleOfPrecision;
          const res = gen.let("res");
          const invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
          cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/runtime/ucs2length.js
  var require_ucs2length = __commonJS({
    "node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function ucs2length(str) {
        const len = str.length;
        let length = 0;
        let pos = 0;
        let value;
        while (pos < len) {
          length++;
          value = str.charCodeAt(pos++);
          if (value >= 55296 && value <= 56319 && pos < len) {
            value = str.charCodeAt(pos);
            if ((value & 64512) === 56320)
              pos++;
          }
        }
        return length;
      }
      exports.default = ucs2length;
      ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/limitLength.js
  var require_limitLength = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/limitLength.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var ucs2length_1 = require_ucs2length();
      var error = {
        message({ keyword, schemaCode }) {
          const comp = keyword === "maxLength" ? "more" : "fewer";
          return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
        },
        params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
      };
      var def = {
        keyword: ["maxLength", "minLength"],
        type: "string",
        schemaType: "number",
        $data: true,
        error,
        code(cxt) {
          const { keyword, data, schemaCode, it } = cxt;
          const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
          const len = it.opts.unicode === false ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
          cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/pattern.js
  var require_pattern = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/pattern.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var code_1 = require_code2();
      var codegen_1 = require_codegen();
      var error = {
        message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
        params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
      };
      var def = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: true,
        error,
        code(cxt) {
          const { data, $data, schema: schema2, schemaCode, it } = cxt;
          const u = it.opts.unicodeRegExp ? "u" : "";
          const regExp = $data ? (0, codegen_1._)`(new RegExp(${schemaCode}, ${u}))` : (0, code_1.usePattern)(cxt, schema2);
          cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/limitProperties.js
  var require_limitProperties = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/limitProperties.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var error = {
        message({ keyword, schemaCode }) {
          const comp = keyword === "maxProperties" ? "more" : "fewer";
          return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
        },
        params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
      };
      var def = {
        keyword: ["maxProperties", "minProperties"],
        type: "object",
        schemaType: "number",
        $data: true,
        error,
        code(cxt) {
          const { keyword, data, schemaCode } = cxt;
          const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
          cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/required.js
  var require_required = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/required.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var code_1 = require_code2();
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
        params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
      };
      var def = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: true,
        error,
        code(cxt) {
          const { gen, schema: schema2, schemaCode, data, $data, it } = cxt;
          const { opts } = it;
          if (!$data && schema2.length === 0)
            return;
          const useLoop = schema2.length >= opts.loopRequired;
          if (it.allErrors)
            allErrorsMode();
          else
            exitOnErrorMode();
          if (opts.strictRequired) {
            const props = cxt.parentSchema.properties;
            const { definedProperties } = cxt.it;
            for (const requiredKey of schema2) {
              if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
                const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
                const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
                (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
              }
            }
          }
          function allErrorsMode() {
            if (useLoop || $data) {
              cxt.block$data(codegen_1.nil, loopAllRequired);
            } else {
              for (const prop of schema2) {
                (0, code_1.checkReportMissingProp)(cxt, prop);
              }
            }
          }
          function exitOnErrorMode() {
            const missing = gen.let("missing");
            if (useLoop || $data) {
              const valid2 = gen.let("valid", true);
              cxt.block$data(valid2, () => loopUntilMissing(missing, valid2));
              cxt.ok(valid2);
            } else {
              gen.if((0, code_1.checkMissingProp)(cxt, schema2, missing));
              (0, code_1.reportMissingProp)(cxt, missing);
              gen.else();
            }
          }
          function loopAllRequired() {
            gen.forOf("prop", schemaCode, (prop) => {
              cxt.setParams({ missingProperty: prop });
              gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
            });
          }
          function loopUntilMissing(missing, valid2) {
            cxt.setParams({ missingProperty: missing });
            gen.forOf(missing, schemaCode, () => {
              gen.assign(valid2, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
              gen.if((0, codegen_1.not)(valid2), () => {
                cxt.error();
                gen.break();
              });
            }, codegen_1.nil);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/limitItems.js
  var require_limitItems = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/limitItems.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var error = {
        message({ keyword, schemaCode }) {
          const comp = keyword === "maxItems" ? "more" : "fewer";
          return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
        },
        params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
      };
      var def = {
        keyword: ["maxItems", "minItems"],
        type: "array",
        schemaType: "number",
        $data: true,
        error,
        code(cxt) {
          const { keyword, data, schemaCode } = cxt;
          const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
          cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/runtime/equal.js
  var require_equal = __commonJS({
    "node_modules/ajv/dist/runtime/equal.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var equal = require_fast_deep_equal();
      equal.code = 'require("ajv/dist/runtime/equal").default';
      exports.default = equal;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
  var require_uniqueItems = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/uniqueItems.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dataType_1 = require_dataType();
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var equal_1 = require_equal();
      var error = {
        message: ({ params: { i, j } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
        params: ({ params: { i, j } }) => (0, codegen_1._)`{i: ${i}, j: ${j}}`
      };
      var def = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: true,
        error,
        code(cxt) {
          const { gen, data, $data, schema: schema2, parentSchema, schemaCode, it } = cxt;
          if (!$data && !schema2)
            return;
          const valid2 = gen.let("valid");
          const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
          cxt.block$data(valid2, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`);
          cxt.ok(valid2);
          function validateUniqueItems() {
            const i = gen.let("i", (0, codegen_1._)`${data}.length`);
            const j = gen.let("j");
            cxt.setParams({ i, j });
            gen.assign(valid2, true);
            gen.if((0, codegen_1._)`${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
          }
          function canOptimize() {
            return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
          }
          function loopN(i, j) {
            const item = gen.name("item");
            const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
            const indices = gen.const("indices", (0, codegen_1._)`{}`);
            gen.for((0, codegen_1._)`;${i}--;`, () => {
              gen.let(item, (0, codegen_1._)`${data}[${i}]`);
              gen.if(wrongType, (0, codegen_1._)`continue`);
              if (itemTypes.length > 1)
                gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`);
              gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
                gen.assign(j, (0, codegen_1._)`${indices}[${item}]`);
                cxt.error();
                gen.assign(valid2, false).break();
              }).code((0, codegen_1._)`${indices}[${item}] = ${i}`);
            });
          }
          function loopN2(i, j) {
            const eql = (0, util_1.useFunc)(gen, equal_1.default);
            const outer = gen.name("outer");
            gen.label(outer).for((0, codegen_1._)`;${i}--;`, () => gen.for((0, codegen_1._)`${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i}], ${data}[${j}])`, () => {
              cxt.error();
              gen.assign(valid2, false).break(outer);
            })));
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/const.js
  var require_const = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/const.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var equal_1 = require_equal();
      var error = {
        message: "must be equal to constant",
        params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
      };
      var def = {
        keyword: "const",
        $data: true,
        error,
        code(cxt) {
          const { gen, data, $data, schemaCode, schema: schema2 } = cxt;
          if ($data || schema2 && typeof schema2 == "object") {
            cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
          } else {
            cxt.fail((0, codegen_1._)`${schema2} !== ${data}`);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/enum.js
  var require_enum = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/enum.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var equal_1 = require_equal();
      var error = {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
      };
      var def = {
        keyword: "enum",
        schemaType: "array",
        $data: true,
        error,
        code(cxt) {
          const { gen, data, $data, schema: schema2, schemaCode, it } = cxt;
          if (!$data && schema2.length === 0)
            throw new Error("enum must have non-empty array");
          const useLoop = schema2.length >= it.opts.loopEnum;
          let eql;
          const getEql = () => eql !== null && eql !== void 0 ? eql : eql = (0, util_1.useFunc)(gen, equal_1.default);
          let valid2;
          if (useLoop || $data) {
            valid2 = gen.let("valid");
            cxt.block$data(valid2, loopEnum);
          } else {
            if (!Array.isArray(schema2))
              throw new Error("ajv implementation error");
            const vSchema = gen.const("vSchema", schemaCode);
            valid2 = (0, codegen_1.or)(...schema2.map((_x, i) => equalCode(vSchema, i)));
          }
          cxt.pass(valid2);
          function loopEnum() {
            gen.assign(valid2, false);
            gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v})`, () => gen.assign(valid2, true).break()));
          }
          function equalCode(vSchema, i) {
            const sch = schema2[i];
            return typeof sch === "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i}])` : (0, codegen_1._)`${data} === ${sch}`;
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/index.js
  var require_validation = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var limitNumber_1 = require_limitNumber();
      var multipleOf_1 = require_multipleOf();
      var limitLength_1 = require_limitLength();
      var pattern_1 = require_pattern();
      var limitProperties_1 = require_limitProperties();
      var required_1 = require_required();
      var limitItems_1 = require_limitItems();
      var uniqueItems_1 = require_uniqueItems();
      var const_1 = require_const();
      var enum_1 = require_enum();
      var validation = [
        limitNumber_1.default,
        multipleOf_1.default,
        limitLength_1.default,
        pattern_1.default,
        limitProperties_1.default,
        required_1.default,
        limitItems_1.default,
        uniqueItems_1.default,
        { keyword: "type", schemaType: ["string", "array"] },
        { keyword: "nullable", schemaType: "boolean" },
        const_1.default,
        enum_1.default
      ];
      exports.default = validation;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
  var require_additionalItems = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateAdditionalItems = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
        params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
      };
      var def = {
        keyword: "additionalItems",
        type: "array",
        schemaType: ["boolean", "object"],
        before: "uniqueItems",
        error,
        code(cxt) {
          const { parentSchema, it } = cxt;
          const { items } = parentSchema;
          if (!Array.isArray(items)) {
            (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
          }
          validateAdditionalItems(cxt, items);
        }
      };
      function validateAdditionalItems(cxt, items) {
        const { gen, schema: schema2, data, keyword, it } = cxt;
        it.items = true;
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        if (schema2 === false) {
          cxt.setParams({ len: items.length });
          cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
        } else if (typeof schema2 == "object" && !(0, util_1.alwaysValidSchema)(it, schema2)) {
          const valid2 = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
          gen.if((0, codegen_1.not)(valid2), () => validateItems(valid2));
          cxt.ok(valid2);
        }
        function validateItems(valid2) {
          gen.forRange("i", items.length, len, (i) => {
            cxt.subschema({ keyword, dataProp: i, dataPropType: util_1.Type.Num }, valid2);
            if (!it.allErrors)
              gen.if((0, codegen_1.not)(valid2), () => gen.break());
          });
        }
      }
      exports.validateAdditionalItems = validateAdditionalItems;
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/items.js
  var require_items = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/items.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateTuple = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var code_1 = require_code2();
      var def = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "array", "boolean"],
        before: "uniqueItems",
        code(cxt) {
          const { schema: schema2, it } = cxt;
          if (Array.isArray(schema2))
            return validateTuple(cxt, "additionalItems", schema2);
          it.items = true;
          if ((0, util_1.alwaysValidSchema)(it, schema2))
            return;
          cxt.ok((0, code_1.validateArray)(cxt));
        }
      };
      function validateTuple(cxt, extraItems, schArr = cxt.schema) {
        const { gen, parentSchema, data, keyword, it } = cxt;
        checkStrictTuple(parentSchema);
        if (it.opts.unevaluated && schArr.length && it.items !== true) {
          it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
        }
        const valid2 = gen.name("valid");
        const len = gen.const("len", (0, codegen_1._)`${data}.length`);
        schArr.forEach((sch, i) => {
          if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
          gen.if((0, codegen_1._)`${len} > ${i}`, () => cxt.subschema({
            keyword,
            schemaProp: i,
            dataProp: i
          }, valid2));
          cxt.ok(valid2);
        });
        function checkStrictTuple(sch) {
          const { opts, errSchemaPath } = it;
          const l = schArr.length;
          const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
          if (opts.strictTuples && !fullTuple) {
            const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
            (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
          }
        }
      }
      exports.validateTuple = validateTuple;
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
  var require_prefixItems = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/prefixItems.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var items_1 = require_items();
      var def = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/items2020.js
  var require_items2020 = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/items2020.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var code_1 = require_code2();
      var additionalItems_1 = require_additionalItems();
      var error = {
        message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
        params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
      };
      var def = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        error,
        code(cxt) {
          const { schema: schema2, parentSchema, it } = cxt;
          const { prefixItems } = parentSchema;
          it.items = true;
          if ((0, util_1.alwaysValidSchema)(it, schema2))
            return;
          if (prefixItems)
            (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
          else
            cxt.ok((0, code_1.validateArray)(cxt));
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/contains.js
  var require_contains = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/contains.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
        params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
      };
      var def = {
        keyword: "contains",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        trackErrors: true,
        error,
        code(cxt) {
          const { gen, schema: schema2, parentSchema, data, it } = cxt;
          let min;
          let max;
          const { minContains, maxContains } = parentSchema;
          if (it.opts.next) {
            min = minContains === void 0 ? 1 : minContains;
            max = maxContains;
          } else {
            min = 1;
          }
          const len = gen.const("len", (0, codegen_1._)`${data}.length`);
          cxt.setParams({ min, max });
          if (max === void 0 && min === 0) {
            (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
            return;
          }
          if (max !== void 0 && min > max) {
            (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
            cxt.fail();
            return;
          }
          if ((0, util_1.alwaysValidSchema)(it, schema2)) {
            let cond = (0, codegen_1._)`${len} >= ${min}`;
            if (max !== void 0)
              cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`;
            cxt.pass(cond);
            return;
          }
          it.items = true;
          const valid2 = gen.name("valid");
          if (max === void 0 && min === 1) {
            validateItems(valid2, () => gen.if(valid2, () => gen.break()));
          } else if (min === 0) {
            gen.let(valid2, true);
            if (max !== void 0)
              gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount);
          } else {
            gen.let(valid2, false);
            validateItemsWithCount();
          }
          cxt.result(valid2, () => cxt.reset());
          function validateItemsWithCount() {
            const schValid = gen.name("_valid");
            const count = gen.let("count", 0);
            validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
          }
          function validateItems(_valid, block) {
            gen.forRange("i", 0, len, (i) => {
              cxt.subschema({
                keyword: "contains",
                dataProp: i,
                dataPropType: util_1.Type.Num,
                compositeRule: true
              }, _valid);
              block();
            });
          }
          function checkLimits(count) {
            gen.code((0, codegen_1._)`${count}++`);
            if (max === void 0) {
              gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid2, true).break());
            } else {
              gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid2, false).break());
              if (min === 1)
                gen.assign(valid2, true);
              else
                gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid2, true));
            }
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/dependencies.js
  var require_dependencies = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/dependencies.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var code_1 = require_code2();
      exports.error = {
        message: ({ params: { property, depsCount, deps } }) => {
          const property_ies = depsCount === 1 ? "property" : "properties";
          return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
        },
        params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
      };
      var def = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: exports.error,
        code(cxt) {
          const [propDeps, schDeps] = splitDependencies(cxt);
          validatePropertyDeps(cxt, propDeps);
          validateSchemaDeps(cxt, schDeps);
        }
      };
      function splitDependencies({ schema: schema2 }) {
        const propertyDeps = {};
        const schemaDeps = {};
        for (const key2 in schema2) {
          if (key2 === "__proto__")
            continue;
          const deps = Array.isArray(schema2[key2]) ? propertyDeps : schemaDeps;
          deps[key2] = schema2[key2];
        }
        return [propertyDeps, schemaDeps];
      }
      function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
        const { gen, data, it } = cxt;
        if (Object.keys(propertyDeps).length === 0)
          return;
        const missing = gen.let("missing");
        for (const prop in propertyDeps) {
          const deps = propertyDeps[prop];
          if (deps.length === 0)
            continue;
          const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
          cxt.setParams({
            property: prop,
            depsCount: deps.length,
            deps: deps.join(", ")
          });
          if (it.allErrors) {
            gen.if(hasProperty, () => {
              for (const depProp of deps) {
                (0, code_1.checkReportMissingProp)(cxt, depProp);
              }
            });
          } else {
            gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
          }
        }
      }
      exports.validatePropertyDeps = validatePropertyDeps;
      function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
        const { gen, data, keyword, it } = cxt;
        const valid2 = gen.name("valid");
        for (const prop in schemaDeps) {
          if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
            continue;
          gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), () => {
            const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid2);
            cxt.mergeValidEvaluated(schCxt, valid2);
          }, () => gen.var(valid2, true));
          cxt.ok(valid2);
        }
      }
      exports.validateSchemaDeps = validateSchemaDeps;
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
  var require_propertyNames = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/propertyNames.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: "property name must be valid",
        params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
      };
      var def = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error,
        code(cxt) {
          const { gen, schema: schema2, data, it } = cxt;
          if ((0, util_1.alwaysValidSchema)(it, schema2))
            return;
          const valid2 = gen.name("valid");
          gen.forIn("key", data, (key2) => {
            cxt.setParams({ propertyName: key2 });
            cxt.subschema({
              keyword: "propertyNames",
              data: key2,
              dataTypes: ["string"],
              propertyName: key2,
              compositeRule: true
            }, valid2);
            gen.if((0, codegen_1.not)(valid2), () => {
              cxt.error(true);
              if (!it.allErrors)
                gen.break();
            });
          });
          cxt.ok(valid2);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
  var require_additionalProperties = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var code_1 = require_code2();
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var util_1 = require_util();
      var error = {
        message: "must NOT have additional properties",
        params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
      };
      var def = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: true,
        trackErrors: true,
        error,
        code(cxt) {
          const { gen, schema: schema2, parentSchema, data, errsCount, it } = cxt;
          if (!errsCount)
            throw new Error("ajv implementation error");
          const { allErrors, opts } = it;
          it.props = true;
          if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema2))
            return;
          const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
          const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
          checkAdditionalProperties();
          cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
          function checkAdditionalProperties() {
            gen.forIn("key", data, (key2) => {
              if (!props.length && !patProps.length)
                additionalPropertyCode(key2);
              else
                gen.if(isAdditional(key2), () => additionalPropertyCode(key2));
            });
          }
          function isAdditional(key2) {
            let definedProp;
            if (props.length > 8) {
              const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
              definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key2);
            } else if (props.length) {
              definedProp = (0, codegen_1.or)(...props.map((p) => (0, codegen_1._)`${key2} === ${p}`));
            } else {
              definedProp = codegen_1.nil;
            }
            if (patProps.length) {
              definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p)}.test(${key2})`));
            }
            return (0, codegen_1.not)(definedProp);
          }
          function deleteAdditional(key2) {
            gen.code((0, codegen_1._)`delete ${data}[${key2}]`);
          }
          function additionalPropertyCode(key2) {
            if (opts.removeAdditional === "all" || opts.removeAdditional && schema2 === false) {
              deleteAdditional(key2);
              return;
            }
            if (schema2 === false) {
              cxt.setParams({ additionalProperty: key2 });
              cxt.error();
              if (!allErrors)
                gen.break();
              return;
            }
            if (typeof schema2 == "object" && !(0, util_1.alwaysValidSchema)(it, schema2)) {
              const valid2 = gen.name("valid");
              if (opts.removeAdditional === "failing") {
                applyAdditionalSchema(key2, valid2, false);
                gen.if((0, codegen_1.not)(valid2), () => {
                  cxt.reset();
                  deleteAdditional(key2);
                });
              } else {
                applyAdditionalSchema(key2, valid2);
                if (!allErrors)
                  gen.if((0, codegen_1.not)(valid2), () => gen.break());
              }
            }
          }
          function applyAdditionalSchema(key2, valid2, errors) {
            const subschema = {
              keyword: "additionalProperties",
              dataProp: key2,
              dataPropType: util_1.Type.Str
            };
            if (errors === false) {
              Object.assign(subschema, {
                compositeRule: true,
                createErrors: false,
                allErrors: false
              });
            }
            cxt.subschema(subschema, valid2);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/properties.js
  var require_properties = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/properties.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var validate_1 = require_validate();
      var code_1 = require_code2();
      var util_1 = require_util();
      var additionalProperties_1 = require_additionalProperties();
      var def = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(cxt) {
          const { gen, schema: schema2, parentSchema, data, it } = cxt;
          if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
            additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
          }
          const allProps = (0, code_1.allSchemaProperties)(schema2);
          for (const prop of allProps) {
            it.definedProperties.add(prop);
          }
          if (it.opts.unevaluated && allProps.length && it.props !== true) {
            it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
          }
          const properties = allProps.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema2[p]));
          if (properties.length === 0)
            return;
          const valid2 = gen.name("valid");
          for (const prop of properties) {
            if (hasDefault(prop)) {
              applyPropertySchema(prop);
            } else {
              gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
              applyPropertySchema(prop);
              if (!it.allErrors)
                gen.else().var(valid2, true);
              gen.endIf();
            }
            cxt.it.definedProperties.add(prop);
            cxt.ok(valid2);
          }
          function hasDefault(prop) {
            return it.opts.useDefaults && !it.compositeRule && schema2[prop].default !== void 0;
          }
          function applyPropertySchema(prop) {
            cxt.subschema({
              keyword: "properties",
              schemaProp: prop,
              dataProp: prop
            }, valid2);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
  var require_patternProperties = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/patternProperties.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var code_1 = require_code2();
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var util_2 = require_util();
      var def = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(cxt) {
          const { gen, schema: schema2, data, parentSchema, it } = cxt;
          const { opts } = it;
          const patterns = (0, code_1.allSchemaProperties)(schema2);
          const alwaysValidPatterns = patterns.filter((p) => (0, util_1.alwaysValidSchema)(it, schema2[p]));
          if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
            return;
          }
          const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
          const valid2 = gen.name("valid");
          if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
            it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
          }
          const { props } = it;
          validatePatternProperties();
          function validatePatternProperties() {
            for (const pat of patterns) {
              if (checkProperties)
                checkMatchingProperties(pat);
              if (it.allErrors) {
                validateProperties(pat);
              } else {
                gen.var(valid2, true);
                validateProperties(pat);
                gen.if(valid2);
              }
            }
          }
          function checkMatchingProperties(pat) {
            for (const prop in checkProperties) {
              if (new RegExp(pat).test(prop)) {
                (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
              }
            }
          }
          function validateProperties(pat) {
            gen.forIn("key", data, (key2) => {
              gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key2})`, () => {
                const alwaysValid = alwaysValidPatterns.includes(pat);
                if (!alwaysValid) {
                  cxt.subschema({
                    keyword: "patternProperties",
                    schemaProp: pat,
                    dataProp: key2,
                    dataPropType: util_2.Type.Str
                  }, valid2);
                }
                if (it.opts.unevaluated && props !== true) {
                  gen.assign((0, codegen_1._)`${props}[${key2}]`, true);
                } else if (!alwaysValid && !it.allErrors) {
                  gen.if((0, codegen_1.not)(valid2), () => gen.break());
                }
              });
            });
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/not.js
  var require_not = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/not.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var def = {
        keyword: "not",
        schemaType: ["object", "boolean"],
        trackErrors: true,
        code(cxt) {
          const { gen, schema: schema2, it } = cxt;
          if ((0, util_1.alwaysValidSchema)(it, schema2)) {
            cxt.fail();
            return;
          }
          const valid2 = gen.name("valid");
          cxt.subschema({
            keyword: "not",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, valid2);
          cxt.failResult(valid2, () => cxt.reset(), () => cxt.error());
        },
        error: { message: "must NOT be valid" }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/anyOf.js
  var require_anyOf = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/anyOf.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var code_1 = require_code2();
      var def = {
        keyword: "anyOf",
        schemaType: "array",
        trackErrors: true,
        code: code_1.validateUnion,
        error: { message: "must match a schema in anyOf" }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/oneOf.js
  var require_oneOf = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/oneOf.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: "must match exactly one schema in oneOf",
        params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
      };
      var def = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: true,
        error,
        code(cxt) {
          const { gen, schema: schema2, parentSchema, it } = cxt;
          if (!Array.isArray(schema2))
            throw new Error("ajv implementation error");
          if (it.opts.discriminator && parentSchema.discriminator)
            return;
          const schArr = schema2;
          const valid2 = gen.let("valid", false);
          const passing = gen.let("passing", null);
          const schValid = gen.name("_valid");
          cxt.setParams({ passing });
          gen.block(validateOneOf);
          cxt.result(valid2, () => cxt.reset(), () => cxt.error(true));
          function validateOneOf() {
            schArr.forEach((sch, i) => {
              let schCxt;
              if ((0, util_1.alwaysValidSchema)(it, sch)) {
                gen.var(schValid, true);
              } else {
                schCxt = cxt.subschema({
                  keyword: "oneOf",
                  schemaProp: i,
                  compositeRule: true
                }, schValid);
              }
              if (i > 0) {
                gen.if((0, codegen_1._)`${schValid} && ${valid2}`).assign(valid2, false).assign(passing, (0, codegen_1._)`[${passing}, ${i}]`).else();
              }
              gen.if(schValid, () => {
                gen.assign(valid2, true);
                gen.assign(passing, i);
                if (schCxt)
                  cxt.mergeEvaluated(schCxt, codegen_1.Name);
              });
            });
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/allOf.js
  var require_allOf = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/allOf.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var def = {
        keyword: "allOf",
        schemaType: "array",
        code(cxt) {
          const { gen, schema: schema2, it } = cxt;
          if (!Array.isArray(schema2))
            throw new Error("ajv implementation error");
          const valid2 = gen.name("valid");
          schema2.forEach((sch, i) => {
            if ((0, util_1.alwaysValidSchema)(it, sch))
              return;
            const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid2);
            cxt.ok(valid2);
            cxt.mergeEvaluated(schCxt);
          });
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/if.js
  var require_if = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/if.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
        params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
      };
      var def = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: true,
        error,
        code(cxt) {
          const { gen, parentSchema, it } = cxt;
          if (parentSchema.then === void 0 && parentSchema.else === void 0) {
            (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
          }
          const hasThen = hasSchema(it, "then");
          const hasElse = hasSchema(it, "else");
          if (!hasThen && !hasElse)
            return;
          const valid2 = gen.let("valid", true);
          const schValid = gen.name("_valid");
          validateIf();
          cxt.reset();
          if (hasThen && hasElse) {
            const ifClause = gen.let("ifClause");
            cxt.setParams({ ifClause });
            gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
          } else if (hasThen) {
            gen.if(schValid, validateClause("then"));
          } else {
            gen.if((0, codegen_1.not)(schValid), validateClause("else"));
          }
          cxt.pass(valid2, () => cxt.error(true));
          function validateIf() {
            const schCxt = cxt.subschema({
              keyword: "if",
              compositeRule: true,
              createErrors: false,
              allErrors: false
            }, schValid);
            cxt.mergeEvaluated(schCxt);
          }
          function validateClause(keyword, ifClause) {
            return () => {
              const schCxt = cxt.subschema({ keyword }, schValid);
              gen.assign(valid2, schValid);
              cxt.mergeValidEvaluated(schCxt, valid2);
              if (ifClause)
                gen.assign(ifClause, (0, codegen_1._)`${keyword}`);
              else
                cxt.setParams({ ifClause: keyword });
            };
          }
        }
      };
      function hasSchema(it, keyword) {
        const schema2 = it.schema[keyword];
        return schema2 !== void 0 && !(0, util_1.alwaysValidSchema)(it, schema2);
      }
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/thenElse.js
  var require_thenElse = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/thenElse.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var def = {
        keyword: ["then", "else"],
        schemaType: ["object", "boolean"],
        code({ keyword, parentSchema, it }) {
          if (parentSchema.if === void 0)
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/index.js
  var require_applicator = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var additionalItems_1 = require_additionalItems();
      var prefixItems_1 = require_prefixItems();
      var items_1 = require_items();
      var items2020_1 = require_items2020();
      var contains_1 = require_contains();
      var dependencies_1 = require_dependencies();
      var propertyNames_1 = require_propertyNames();
      var additionalProperties_1 = require_additionalProperties();
      var properties_1 = require_properties();
      var patternProperties_1 = require_patternProperties();
      var not_1 = require_not();
      var anyOf_1 = require_anyOf();
      var oneOf_1 = require_oneOf();
      var allOf_1 = require_allOf();
      var if_1 = require_if();
      var thenElse_1 = require_thenElse();
      function getApplicator(draft2020 = false) {
        const applicator = [
          not_1.default,
          anyOf_1.default,
          oneOf_1.default,
          allOf_1.default,
          if_1.default,
          thenElse_1.default,
          propertyNames_1.default,
          additionalProperties_1.default,
          dependencies_1.default,
          properties_1.default,
          patternProperties_1.default
        ];
        if (draft2020)
          applicator.push(prefixItems_1.default, items2020_1.default);
        else
          applicator.push(additionalItems_1.default, items_1.default);
        applicator.push(contains_1.default);
        return applicator;
      }
      exports.default = getApplicator;
    }
  });

  // node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js
  var require_dynamicAnchor = __commonJS({
    "node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dynamicAnchor = void 0;
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var compile_1 = require_compile();
      var ref_1 = require_ref();
      var def = {
        keyword: "$dynamicAnchor",
        schemaType: "string",
        code: (cxt) => dynamicAnchor(cxt, cxt.schema)
      };
      function dynamicAnchor(cxt, anchor) {
        const { gen, it } = cxt;
        it.schemaEnv.root.dynamicAnchors[anchor] = true;
        const v = (0, codegen_1._)`${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`;
        const validate = it.errSchemaPath === "#" ? it.validateName : _getValidate(cxt);
        gen.if((0, codegen_1._)`!${v}`, () => gen.assign(v, validate));
      }
      exports.dynamicAnchor = dynamicAnchor;
      function _getValidate(cxt) {
        const { schemaEnv, schema: schema2, self: self2 } = cxt.it;
        const { root, baseId, localRefs, meta } = schemaEnv.root;
        const { schemaId } = self2.opts;
        const sch = new compile_1.SchemaEnv({ schema: schema2, schemaId, root, baseId, localRefs, meta });
        compile_1.compileSchema.call(self2, sch);
        return (0, ref_1.getValidate)(cxt, sch);
      }
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js
  var require_dynamicRef = __commonJS({
    "node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.dynamicRef = void 0;
      var codegen_1 = require_codegen();
      var names_1 = require_names();
      var ref_1 = require_ref();
      var def = {
        keyword: "$dynamicRef",
        schemaType: "string",
        code: (cxt) => dynamicRef(cxt, cxt.schema)
      };
      function dynamicRef(cxt, ref) {
        const { gen, keyword, it } = cxt;
        if (ref[0] !== "#")
          throw new Error(`"${keyword}" only supports hash fragment reference`);
        const anchor = ref.slice(1);
        if (it.allErrors) {
          _dynamicRef();
        } else {
          const valid2 = gen.let("valid", false);
          _dynamicRef(valid2);
          cxt.ok(valid2);
        }
        function _dynamicRef(valid2) {
          if (it.schemaEnv.root.dynamicAnchors[anchor]) {
            const v = gen.let("_v", (0, codegen_1._)`${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`);
            gen.if(v, _callRef(v, valid2), _callRef(it.validateName, valid2));
          } else {
            _callRef(it.validateName, valid2)();
          }
        }
        function _callRef(validate, valid2) {
          return valid2 ? () => gen.block(() => {
            (0, ref_1.callRef)(cxt, validate);
            gen.let(valid2, true);
          }) : () => (0, ref_1.callRef)(cxt, validate);
        }
      }
      exports.dynamicRef = dynamicRef;
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js
  var require_recursiveAnchor = __commonJS({
    "node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dynamicAnchor_1 = require_dynamicAnchor();
      var util_1 = require_util();
      var def = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code(cxt) {
          if (cxt.schema)
            (0, dynamicAnchor_1.dynamicAnchor)(cxt, "");
          else
            (0, util_1.checkStrictMode)(cxt.it, "$recursiveAnchor: false is ignored");
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js
  var require_recursiveRef = __commonJS({
    "node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dynamicRef_1 = require_dynamicRef();
      var def = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: (cxt) => (0, dynamicRef_1.dynamicRef)(cxt, cxt.schema)
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/dynamic/index.js
  var require_dynamic = __commonJS({
    "node_modules/ajv/dist/vocabularies/dynamic/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dynamicAnchor_1 = require_dynamicAnchor();
      var dynamicRef_1 = require_dynamicRef();
      var recursiveAnchor_1 = require_recursiveAnchor();
      var recursiveRef_1 = require_recursiveRef();
      var dynamic = [dynamicAnchor_1.default, dynamicRef_1.default, recursiveAnchor_1.default, recursiveRef_1.default];
      exports.default = dynamic;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/dependentRequired.js
  var require_dependentRequired = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/dependentRequired.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dependencies_1 = require_dependencies();
      var def = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: dependencies_1.error,
        code: (cxt) => (0, dependencies_1.validatePropertyDeps)(cxt)
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js
  var require_dependentSchemas = __commonJS({
    "node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dependencies_1 = require_dependencies();
      var def = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: (cxt) => (0, dependencies_1.validateSchemaDeps)(cxt)
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/validation/limitContains.js
  var require_limitContains = __commonJS({
    "node_modules/ajv/dist/vocabularies/validation/limitContains.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var util_1 = require_util();
      var def = {
        keyword: ["maxContains", "minContains"],
        type: "array",
        schemaType: "number",
        code({ keyword, parentSchema, it }) {
          if (parentSchema.contains === void 0) {
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "contains" is ignored`);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/next.js
  var require_next = __commonJS({
    "node_modules/ajv/dist/vocabularies/next.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var dependentRequired_1 = require_dependentRequired();
      var dependentSchemas_1 = require_dependentSchemas();
      var limitContains_1 = require_limitContains();
      var next = [dependentRequired_1.default, dependentSchemas_1.default, limitContains_1.default];
      exports.default = next;
    }
  });

  // node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js
  var require_unevaluatedProperties = __commonJS({
    "node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var names_1 = require_names();
      var error = {
        message: "must NOT have unevaluated properties",
        params: ({ params }) => (0, codegen_1._)`{unevaluatedProperty: ${params.unevaluatedProperty}}`
      };
      var def = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: true,
        error,
        code(cxt) {
          const { gen, schema: schema2, data, errsCount, it } = cxt;
          if (!errsCount)
            throw new Error("ajv implementation error");
          const { allErrors, props } = it;
          if (props instanceof codegen_1.Name) {
            gen.if((0, codegen_1._)`${props} !== true`, () => gen.forIn("key", data, (key2) => gen.if(unevaluatedDynamic(props, key2), () => unevaluatedPropCode(key2))));
          } else if (props !== true) {
            gen.forIn("key", data, (key2) => props === void 0 ? unevaluatedPropCode(key2) : gen.if(unevaluatedStatic(props, key2), () => unevaluatedPropCode(key2)));
          }
          it.props = true;
          cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
          function unevaluatedPropCode(key2) {
            if (schema2 === false) {
              cxt.setParams({ unevaluatedProperty: key2 });
              cxt.error();
              if (!allErrors)
                gen.break();
              return;
            }
            if (!(0, util_1.alwaysValidSchema)(it, schema2)) {
              const valid2 = gen.name("valid");
              cxt.subschema({
                keyword: "unevaluatedProperties",
                dataProp: key2,
                dataPropType: util_1.Type.Str
              }, valid2);
              if (!allErrors)
                gen.if((0, codegen_1.not)(valid2), () => gen.break());
            }
          }
          function unevaluatedDynamic(evaluatedProps, key2) {
            return (0, codegen_1._)`!${evaluatedProps} || !${evaluatedProps}[${key2}]`;
          }
          function unevaluatedStatic(evaluatedProps, key2) {
            const ps = [];
            for (const p in evaluatedProps) {
              if (evaluatedProps[p] === true)
                ps.push((0, codegen_1._)`${key2} !== ${p}`);
            }
            return (0, codegen_1.and)(...ps);
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js
  var require_unevaluatedItems = __commonJS({
    "node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var util_1 = require_util();
      var error = {
        message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
        params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
      };
      var def = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: ["boolean", "object"],
        error,
        code(cxt) {
          const { gen, schema: schema2, data, it } = cxt;
          const items = it.items || 0;
          if (items === true)
            return;
          const len = gen.const("len", (0, codegen_1._)`${data}.length`);
          if (schema2 === false) {
            cxt.setParams({ len: items });
            cxt.fail((0, codegen_1._)`${len} > ${items}`);
          } else if (typeof schema2 == "object" && !(0, util_1.alwaysValidSchema)(it, schema2)) {
            const valid2 = gen.var("valid", (0, codegen_1._)`${len} <= ${items}`);
            gen.if((0, codegen_1.not)(valid2), () => validateItems(valid2, items));
            cxt.ok(valid2);
          }
          it.items = true;
          function validateItems(valid2, from) {
            gen.forRange("i", from, len, (i) => {
              cxt.subschema({ keyword: "unevaluatedItems", dataProp: i, dataPropType: util_1.Type.Num }, valid2);
              if (!it.allErrors)
                gen.if((0, codegen_1.not)(valid2), () => gen.break());
            });
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/unevaluated/index.js
  var require_unevaluated = __commonJS({
    "node_modules/ajv/dist/vocabularies/unevaluated/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var unevaluatedProperties_1 = require_unevaluatedProperties();
      var unevaluatedItems_1 = require_unevaluatedItems();
      var unevaluated = [unevaluatedProperties_1.default, unevaluatedItems_1.default];
      exports.default = unevaluated;
    }
  });

  // node_modules/ajv/dist/vocabularies/format/format.js
  var require_format = __commonJS({
    "node_modules/ajv/dist/vocabularies/format/format.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var error = {
        message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
        params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
      };
      var def = {
        keyword: "format",
        type: ["number", "string"],
        schemaType: "string",
        $data: true,
        error,
        code(cxt, ruleType) {
          const { gen, data, $data, schema: schema2, schemaCode, it } = cxt;
          const { opts, errSchemaPath, schemaEnv, self: self2 } = it;
          if (!opts.validateFormats)
            return;
          if ($data)
            validate$DataFormat();
          else
            validateFormat();
          function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
              ref: self2.formats,
              code: opts.code.formats
            });
            const fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`);
            const fType = gen.let("fType");
            const format = gen.let("format");
            gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef));
            cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
            function unknownFmt() {
              if (opts.strictSchema === false)
                return codegen_1.nil;
              return (0, codegen_1._)`${schemaCode} && !${format}`;
            }
            function invalidFmt() {
              const callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`;
              const validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
              return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
            }
          }
          function validateFormat() {
            const formatDef = self2.formats[schema2];
            if (!formatDef) {
              unknownFormat();
              return;
            }
            if (formatDef === true)
              return;
            const [fmtType, format, fmtRef] = getFormat(formatDef);
            if (fmtType === ruleType)
              cxt.pass(validCondition());
            function unknownFormat() {
              if (opts.strictSchema === false) {
                self2.logger.warn(unknownMsg());
                return;
              }
              throw new Error(unknownMsg());
              function unknownMsg() {
                return `unknown format "${schema2}" ignored in schema at path "${errSchemaPath}"`;
              }
            }
            function getFormat(fmtDef) {
              const code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema2)}` : void 0;
              const fmt = gen.scopeValue("formats", { key: schema2, ref: fmtDef, code });
              if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
                return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`];
              }
              return ["string", fmtDef, fmt];
            }
            function validCondition() {
              if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
                if (!schemaEnv.$async)
                  throw new Error("async format in sync schema");
                return (0, codegen_1._)`await ${fmtRef}(${data})`;
              }
              return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
            }
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/vocabularies/format/index.js
  var require_format2 = __commonJS({
    "node_modules/ajv/dist/vocabularies/format/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var format_1 = require_format();
      var format = [format_1.default];
      exports.default = format;
    }
  });

  // node_modules/ajv/dist/vocabularies/metadata.js
  var require_metadata = __commonJS({
    "node_modules/ajv/dist/vocabularies/metadata.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.contentVocabulary = exports.metadataVocabulary = void 0;
      exports.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples"
      ];
      exports.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema"
      ];
    }
  });

  // node_modules/ajv/dist/vocabularies/draft2020.js
  var require_draft2020 = __commonJS({
    "node_modules/ajv/dist/vocabularies/draft2020.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var core_1 = require_core2();
      var validation_1 = require_validation();
      var applicator_1 = require_applicator();
      var dynamic_1 = require_dynamic();
      var next_1 = require_next();
      var unevaluated_1 = require_unevaluated();
      var format_1 = require_format2();
      var metadata_1 = require_metadata();
      var draft2020Vocabularies = [
        dynamic_1.default,
        core_1.default,
        validation_1.default,
        (0, applicator_1.default)(true),
        format_1.default,
        metadata_1.metadataVocabulary,
        metadata_1.contentVocabulary,
        next_1.default,
        unevaluated_1.default
      ];
      exports.default = draft2020Vocabularies;
    }
  });

  // node_modules/ajv/dist/vocabularies/discriminator/types.js
  var require_types = __commonJS({
    "node_modules/ajv/dist/vocabularies/discriminator/types.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DiscrError = void 0;
      var DiscrError;
      (function(DiscrError2) {
        DiscrError2["Tag"] = "tag";
        DiscrError2["Mapping"] = "mapping";
      })(DiscrError = exports.DiscrError || (exports.DiscrError = {}));
    }
  });

  // node_modules/ajv/dist/vocabularies/discriminator/index.js
  var require_discriminator = __commonJS({
    "node_modules/ajv/dist/vocabularies/discriminator/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var types_1 = require_types();
      var compile_1 = require_compile();
      var util_1 = require_util();
      var error = {
        message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
        params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
      };
      var def = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error,
        code(cxt) {
          const { gen, data, schema: schema2, parentSchema, it } = cxt;
          const { oneOf } = parentSchema;
          if (!it.opts.discriminator) {
            throw new Error("discriminator: requires discriminator option");
          }
          const tagName = schema2.propertyName;
          if (typeof tagName != "string")
            throw new Error("discriminator: requires propertyName");
          if (schema2.mapping)
            throw new Error("discriminator: mapping is not supported");
          if (!oneOf)
            throw new Error("discriminator: requires oneOf keyword");
          const valid2 = gen.let("valid", false);
          const tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
          gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
          cxt.ok(valid2);
          function validateMapping() {
            const mapping = getMapping();
            gen.if(false);
            for (const tagValue in mapping) {
              gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
              gen.assign(valid2, applyTagSchema(mapping[tagValue]));
            }
            gen.else();
            cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
            gen.endIf();
          }
          function applyTagSchema(schemaProp) {
            const _valid = gen.name("valid");
            const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
            cxt.mergeEvaluated(schCxt, codegen_1.Name);
            return _valid;
          }
          function getMapping() {
            var _a;
            const oneOfMapping = {};
            const topRequired = hasRequired(parentSchema);
            let tagRequired = true;
            for (let i = 0; i < oneOf.length; i++) {
              let sch = oneOf[i];
              if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
                sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
                if (sch instanceof compile_1.SchemaEnv)
                  sch = sch.schema;
              }
              const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
              if (typeof propSch != "object") {
                throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
              }
              tagRequired = tagRequired && (topRequired || hasRequired(sch));
              addMappings(propSch, i);
            }
            if (!tagRequired)
              throw new Error(`discriminator: "${tagName}" must be required`);
            return oneOfMapping;
            function hasRequired({ required }) {
              return Array.isArray(required) && required.includes(tagName);
            }
            function addMappings(sch, i) {
              if (sch.const) {
                addMapping(sch.const, i);
              } else if (sch.enum) {
                for (const tagValue of sch.enum) {
                  addMapping(tagValue, i);
                }
              } else {
                throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
              }
            }
            function addMapping(tagValue, i) {
              if (typeof tagValue != "string" || tagValue in oneOfMapping) {
                throw new Error(`discriminator: "${tagName}" values must be unique strings`);
              }
              oneOfMapping[tagValue] = i;
            }
          }
        }
      };
      exports.default = def;
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/schema.json
  var require_schema = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/schema.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/schema",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/core": true,
          "https://json-schema.org/draft/2020-12/vocab/applicator": true,
          "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
          "https://json-schema.org/draft/2020-12/vocab/validation": true,
          "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
          "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
          "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        $dynamicAnchor: "meta",
        title: "Core and Validation specifications meta-schema",
        allOf: [
          { $ref: "meta/core" },
          { $ref: "meta/applicator" },
          { $ref: "meta/unevaluated" },
          { $ref: "meta/validation" },
          { $ref: "meta/meta-data" },
          { $ref: "meta/format-annotation" },
          { $ref: "meta/content" }
        ],
        type: ["object", "boolean"],
        $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
        properties: {
          definitions: {
            $comment: '"definitions" has been replaced by "$defs".',
            type: "object",
            additionalProperties: { $dynamicRef: "#meta" },
            deprecated: true,
            default: {}
          },
          dependencies: {
            $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
            type: "object",
            additionalProperties: {
              anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }]
            },
            deprecated: true,
            default: {}
          },
          $recursiveAnchor: {
            $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
            $ref: "meta/core#/$defs/anchorString",
            deprecated: true
          },
          $recursiveRef: {
            $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
            $ref: "meta/core#/$defs/uriReferenceString",
            deprecated: true
          }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json
  var require_applicator2 = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/applicator",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/applicator": true
        },
        $dynamicAnchor: "meta",
        title: "Applicator vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          prefixItems: { $ref: "#/$defs/schemaArray" },
          items: { $dynamicRef: "#meta" },
          contains: { $dynamicRef: "#meta" },
          additionalProperties: { $dynamicRef: "#meta" },
          properties: {
            type: "object",
            additionalProperties: { $dynamicRef: "#meta" },
            default: {}
          },
          patternProperties: {
            type: "object",
            additionalProperties: { $dynamicRef: "#meta" },
            propertyNames: { format: "regex" },
            default: {}
          },
          dependentSchemas: {
            type: "object",
            additionalProperties: { $dynamicRef: "#meta" },
            default: {}
          },
          propertyNames: { $dynamicRef: "#meta" },
          if: { $dynamicRef: "#meta" },
          then: { $dynamicRef: "#meta" },
          else: { $dynamicRef: "#meta" },
          allOf: { $ref: "#/$defs/schemaArray" },
          anyOf: { $ref: "#/$defs/schemaArray" },
          oneOf: { $ref: "#/$defs/schemaArray" },
          not: { $dynamicRef: "#meta" }
        },
        $defs: {
          schemaArray: {
            type: "array",
            minItems: 1,
            items: { $dynamicRef: "#meta" }
          }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json
  var require_unevaluated2 = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
        },
        $dynamicAnchor: "meta",
        title: "Unevaluated applicator vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          unevaluatedItems: { $dynamicRef: "#meta" },
          unevaluatedProperties: { $dynamicRef: "#meta" }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json
  var require_content = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/content",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        $dynamicAnchor: "meta",
        title: "Content vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          contentEncoding: { type: "string" },
          contentMediaType: { type: "string" },
          contentSchema: { $dynamicRef: "#meta" }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json
  var require_core3 = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/core",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/core": true
        },
        $dynamicAnchor: "meta",
        title: "Core vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          $id: {
            $ref: "#/$defs/uriReferenceString",
            $comment: "Non-empty fragments not allowed.",
            pattern: "^[^#]*#?$"
          },
          $schema: { $ref: "#/$defs/uriString" },
          $ref: { $ref: "#/$defs/uriReferenceString" },
          $anchor: { $ref: "#/$defs/anchorString" },
          $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
          $dynamicAnchor: { $ref: "#/$defs/anchorString" },
          $vocabulary: {
            type: "object",
            propertyNames: { $ref: "#/$defs/uriString" },
            additionalProperties: {
              type: "boolean"
            }
          },
          $comment: {
            type: "string"
          },
          $defs: {
            type: "object",
            additionalProperties: { $dynamicRef: "#meta" }
          }
        },
        $defs: {
          anchorString: {
            type: "string",
            pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
          },
          uriString: {
            type: "string",
            format: "uri"
          },
          uriReferenceString: {
            type: "string",
            format: "uri-reference"
          }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json
  var require_format_annotation = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
        },
        $dynamicAnchor: "meta",
        title: "Format vocabulary meta-schema for annotation results",
        type: ["object", "boolean"],
        properties: {
          format: { type: "string" }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json
  var require_meta_data = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/meta-data": true
        },
        $dynamicAnchor: "meta",
        title: "Meta-data vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          title: {
            type: "string"
          },
          description: {
            type: "string"
          },
          default: true,
          deprecated: {
            type: "boolean",
            default: false
          },
          readOnly: {
            type: "boolean",
            default: false
          },
          writeOnly: {
            type: "boolean",
            default: false
          },
          examples: {
            type: "array",
            items: true
          }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json
  var require_validation2 = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json"(exports, module) {
      module.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/validation",
        $vocabulary: {
          "https://json-schema.org/draft/2020-12/vocab/validation": true
        },
        $dynamicAnchor: "meta",
        title: "Validation vocabulary meta-schema",
        type: ["object", "boolean"],
        properties: {
          type: {
            anyOf: [
              { $ref: "#/$defs/simpleTypes" },
              {
                type: "array",
                items: { $ref: "#/$defs/simpleTypes" },
                minItems: 1,
                uniqueItems: true
              }
            ]
          },
          const: true,
          enum: {
            type: "array",
            items: true
          },
          multipleOf: {
            type: "number",
            exclusiveMinimum: 0
          },
          maximum: {
            type: "number"
          },
          exclusiveMaximum: {
            type: "number"
          },
          minimum: {
            type: "number"
          },
          exclusiveMinimum: {
            type: "number"
          },
          maxLength: { $ref: "#/$defs/nonNegativeInteger" },
          minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
          pattern: {
            type: "string",
            format: "regex"
          },
          maxItems: { $ref: "#/$defs/nonNegativeInteger" },
          minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
          uniqueItems: {
            type: "boolean",
            default: false
          },
          maxContains: { $ref: "#/$defs/nonNegativeInteger" },
          minContains: {
            $ref: "#/$defs/nonNegativeInteger",
            default: 1
          },
          maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
          minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
          required: { $ref: "#/$defs/stringArray" },
          dependentRequired: {
            type: "object",
            additionalProperties: {
              $ref: "#/$defs/stringArray"
            }
          }
        },
        $defs: {
          nonNegativeInteger: {
            type: "integer",
            minimum: 0
          },
          nonNegativeIntegerDefault0: {
            $ref: "#/$defs/nonNegativeInteger",
            default: 0
          },
          simpleTypes: {
            enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
          },
          stringArray: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
            default: []
          }
        }
      };
    }
  });

  // node_modules/ajv/dist/refs/json-schema-2020-12/index.js
  var require_json_schema_2020_12 = __commonJS({
    "node_modules/ajv/dist/refs/json-schema-2020-12/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var metaSchema = require_schema();
      var applicator = require_applicator2();
      var unevaluated = require_unevaluated2();
      var content = require_content();
      var core = require_core3();
      var format = require_format_annotation();
      var metadata = require_meta_data();
      var validation = require_validation2();
      var META_SUPPORT_DATA = ["/properties"];
      function addMetaSchema2020($data) {
        ;
        [
          metaSchema,
          applicator,
          unevaluated,
          content,
          core,
          with$data(this, format),
          metadata,
          with$data(this, validation)
        ].forEach((sch) => this.addMetaSchema(sch, void 0, false));
        return this;
        function with$data(ajv, sch) {
          return $data ? ajv.$dataMetaSchema(sch, META_SUPPORT_DATA) : sch;
        }
      }
      exports.default = addMetaSchema2020;
    }
  });

  // node_modules/ajv/dist/2020.js
  var require__ = __commonJS({
    "node_modules/ajv/dist/2020.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
      var core_1 = require_core();
      var draft2020_1 = require_draft2020();
      var discriminator_1 = require_discriminator();
      var json_schema_2020_12_1 = require_json_schema_2020_12();
      var META_SCHEMA_ID = "https://json-schema.org/draft/2020-12/schema";
      var Ajv2020 = class extends core_1.default {
        constructor(opts = {}) {
          super({
            ...opts,
            dynamicRef: true,
            next: true,
            unevaluated: true
          });
        }
        _addVocabularies() {
          super._addVocabularies();
          draft2020_1.default.forEach((v) => this.addVocabulary(v));
          if (this.opts.discriminator)
            this.addKeyword(discriminator_1.default);
        }
        _addDefaultMetaSchema() {
          super._addDefaultMetaSchema();
          const { $data, meta } = this.opts;
          if (!meta)
            return;
          json_schema_2020_12_1.default.call(this, $data);
          this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
        }
        defaultMeta() {
          return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
        }
      };
      module.exports = exports = Ajv2020;
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = Ajv2020;
      var validate_1 = require_validate();
      Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function() {
        return validate_1.KeywordCxt;
      } });
      var codegen_1 = require_codegen();
      Object.defineProperty(exports, "_", { enumerable: true, get: function() {
        return codegen_1._;
      } });
      Object.defineProperty(exports, "str", { enumerable: true, get: function() {
        return codegen_1.str;
      } });
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return codegen_1.stringify;
      } });
      Object.defineProperty(exports, "nil", { enumerable: true, get: function() {
        return codegen_1.nil;
      } });
      Object.defineProperty(exports, "Name", { enumerable: true, get: function() {
        return codegen_1.Name;
      } });
      Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function() {
        return codegen_1.CodeGen;
      } });
    }
  });

  // node_modules/ajv-keywords/dist/definitions/typeof.js
  var require_typeof = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/typeof.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var TYPES = ["undefined", "string", "number", "object", "function", "boolean", "symbol"];
      function getDef() {
        return {
          keyword: "typeof",
          schemaType: ["string", "array"],
          code(cxt) {
            const { data, schema: schema2, schemaValue } = cxt;
            cxt.fail(typeof schema2 == "string" ? (0, codegen_1._)`typeof ${data} != ${schema2}` : (0, codegen_1._)`${schemaValue}.indexOf(typeof ${data}) < 0`);
          },
          metaSchema: {
            anyOf: [
              { type: "string", enum: TYPES },
              { type: "array", items: { type: "string", enum: TYPES } }
            ]
          }
        };
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/typeof.js
  var require_typeof2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/typeof.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typeof_1 = __importDefault(require_typeof());
      var typeofPlugin = (ajv) => ajv.addKeyword((0, typeof_1.default)());
      exports.default = typeofPlugin;
      module.exports = typeofPlugin;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/instanceof.js
  var require_instanceof = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/instanceof.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var CONSTRUCTORS = {
        Object,
        Array,
        Function,
        Number,
        String,
        Date,
        RegExp
      };
      if (typeof Buffer != "undefined")
        CONSTRUCTORS.Buffer = Buffer;
      if (typeof Promise != "undefined")
        CONSTRUCTORS.Promise = Promise;
      var getDef = Object.assign(_getDef, { CONSTRUCTORS });
      function _getDef() {
        return {
          keyword: "instanceof",
          schemaType: ["string", "array"],
          compile(schema2) {
            if (typeof schema2 == "string") {
              const C = getConstructor(schema2);
              return (data) => data instanceof C;
            }
            if (Array.isArray(schema2)) {
              const constructors = schema2.map(getConstructor);
              return (data) => {
                for (const C of constructors) {
                  if (data instanceof C)
                    return true;
                }
                return false;
              };
            }
            throw new Error("ajv implementation error");
          },
          metaSchema: {
            anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }]
          }
        };
      }
      function getConstructor(c) {
        const C = CONSTRUCTORS[c];
        if (C)
          return C;
        throw new Error(`invalid "instanceof" keyword value ${c}`);
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/instanceof.js
  var require_instanceof2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/instanceof.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var instanceof_1 = __importDefault(require_instanceof());
      var instanceofPlugin = (ajv) => ajv.addKeyword((0, instanceof_1.default)());
      exports.default = instanceofPlugin;
      module.exports = instanceofPlugin;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/_range.js
  var require_range = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/_range.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function getRangeDef(keyword) {
        return () => ({
          keyword,
          type: "number",
          schemaType: "array",
          macro: function([min, max]) {
            validateRangeSchema(min, max);
            return keyword === "range" ? { minimum: min, maximum: max } : { exclusiveMinimum: min, exclusiveMaximum: max };
          },
          metaSchema: {
            type: "array",
            minItems: 2,
            maxItems: 2,
            items: { type: "number" }
          }
        });
        function validateRangeSchema(min, max) {
          if (min > max || keyword === "exclusiveRange" && min === max) {
            throw new Error("There are no numbers in range");
          }
        }
      }
      exports.default = getRangeDef;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/range.js
  var require_range2 = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/range.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var _range_1 = __importDefault(require_range());
      var getDef = (0, _range_1.default)("range");
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/range.js
  var require_range3 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/range.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var range_1 = __importDefault(require_range2());
      var range = (ajv) => ajv.addKeyword((0, range_1.default)());
      exports.default = range;
      module.exports = range;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/exclusiveRange.js
  var require_exclusiveRange = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/exclusiveRange.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var _range_1 = __importDefault(require_range());
      var getDef = (0, _range_1.default)("exclusiveRange");
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/exclusiveRange.js
  var require_exclusiveRange2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/exclusiveRange.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var exclusiveRange_1 = __importDefault(require_exclusiveRange());
      var exclusiveRange = (ajv) => ajv.addKeyword((0, exclusiveRange_1.default)());
      exports.default = exclusiveRange;
      module.exports = exclusiveRange;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/_util.js
  var require_util2 = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/_util.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.usePattern = exports.metaSchemaRef = void 0;
      var codegen_1 = require_codegen();
      var META_SCHEMA_ID = "http://json-schema.org/schema";
      function metaSchemaRef({ defaultMeta } = {}) {
        return defaultMeta === false ? {} : { $ref: defaultMeta || META_SCHEMA_ID };
      }
      exports.metaSchemaRef = metaSchemaRef;
      function usePattern({ gen, it: { opts } }, pattern, flags = opts.unicodeRegExp ? "u" : "") {
        const rx = new RegExp(pattern, flags);
        return gen.scopeValue("pattern", {
          key: rx.toString(),
          ref: rx,
          code: (0, codegen_1._)`new RegExp(${pattern}, ${flags})`
        });
      }
      exports.usePattern = usePattern;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/regexp.js
  var require_regexp = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/regexp.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var _util_1 = require_util2();
      var regexpMetaSchema = {
        type: "object",
        properties: {
          pattern: { type: "string" },
          flags: { type: "string", nullable: true }
        },
        required: ["pattern"],
        additionalProperties: false
      };
      var metaRegexp = /^\/(.*)\/([gimuy]*)$/;
      function getDef() {
        return {
          keyword: "regexp",
          type: "string",
          schemaType: ["string", "object"],
          code(cxt) {
            const { data, schema: schema2 } = cxt;
            const regx = getRegExp(schema2);
            cxt.pass((0, codegen_1._)`${regx}.test(${data})`);
            function getRegExp(sch) {
              if (typeof sch == "object")
                return (0, _util_1.usePattern)(cxt, sch.pattern, sch.flags);
              const rx = metaRegexp.exec(sch);
              if (rx)
                return (0, _util_1.usePattern)(cxt, rx[1], rx[2]);
              throw new Error("cannot parse string into RegExp");
            }
          },
          metaSchema: {
            anyOf: [{ type: "string" }, regexpMetaSchema]
          }
        };
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/regexp.js
  var require_regexp2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/regexp.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var regexp_1 = __importDefault(require_regexp());
      var regexp = (ajv) => ajv.addKeyword((0, regexp_1.default)());
      exports.default = regexp;
      module.exports = regexp;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/transform.js
  var require_transform = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/transform.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var transform = {
        trimStart: (s) => s.trimStart(),
        trimEnd: (s) => s.trimEnd(),
        trimLeft: (s) => s.trimStart(),
        trimRight: (s) => s.trimEnd(),
        trim: (s) => s.trim(),
        toLowerCase: (s) => s.toLowerCase(),
        toUpperCase: (s) => s.toUpperCase(),
        toEnumCase: (s, cfg) => (cfg === null || cfg === void 0 ? void 0 : cfg.hash[configKey(s)]) || s
      };
      var getDef = Object.assign(_getDef, { transform });
      function _getDef() {
        return {
          keyword: "transform",
          schemaType: "array",
          before: "enum",
          code(cxt) {
            const { gen, data, schema: schema2, parentSchema, it } = cxt;
            const { parentData, parentDataProperty } = it;
            const tNames = schema2;
            if (!tNames.length)
              return;
            let cfg;
            if (tNames.includes("toEnumCase")) {
              const config = getEnumCaseCfg(parentSchema);
              cfg = gen.scopeValue("obj", { ref: config, code: (0, codegen_1.stringify)(config) });
            }
            gen.if((0, codegen_1._)`typeof ${data} == "string" && ${parentData} !== undefined`, () => {
              gen.assign(data, transformExpr(tNames.slice()));
              gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, data);
            });
            function transformExpr(ts) {
              if (!ts.length)
                return data;
              const t = ts.pop();
              if (!(t in transform))
                throw new Error(`transform: unknown transformation ${t}`);
              const func = gen.scopeValue("func", {
                ref: transform[t],
                code: (0, codegen_1._)`require("ajv-keywords/dist/definitions/transform").transform${(0, codegen_1.getProperty)(t)}`
              });
              const arg = transformExpr(ts);
              return cfg && t === "toEnumCase" ? (0, codegen_1._)`${func}(${arg}, ${cfg})` : (0, codegen_1._)`${func}(${arg})`;
            }
          },
          metaSchema: {
            type: "array",
            items: { type: "string", enum: Object.keys(transform) }
          }
        };
      }
      function getEnumCaseCfg(parentSchema) {
        const cfg = { hash: {} };
        if (!parentSchema.enum)
          throw new Error('transform: "toEnumCase" requires "enum"');
        for (const v of parentSchema.enum) {
          if (typeof v !== "string")
            continue;
          const k = configKey(v);
          if (cfg.hash[k]) {
            throw new Error('transform: "toEnumCase" requires all lowercased "enum" values to be unique');
          }
          cfg.hash[k] = v;
        }
        return cfg;
      }
      function configKey(s) {
        return s.toLowerCase();
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/transform.js
  var require_transform2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/transform.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var transform_1 = __importDefault(require_transform());
      var transform = (ajv) => ajv.addKeyword((0, transform_1.default)());
      exports.default = transform;
      module.exports = transform;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/uniqueItemProperties.js
  var require_uniqueItemProperties = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/uniqueItemProperties.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var equal = require_fast_deep_equal();
      var SCALAR_TYPES = ["number", "integer", "string", "boolean", "null"];
      function getDef() {
        return {
          keyword: "uniqueItemProperties",
          type: "array",
          schemaType: "array",
          compile(keys, parentSchema) {
            const scalar = getScalarKeys(keys, parentSchema);
            return (data) => {
              if (data.length <= 1)
                return true;
              for (let k = 0; k < keys.length; k++) {
                const key2 = keys[k];
                if (scalar[k]) {
                  const hash = {};
                  for (const x of data) {
                    if (!x || typeof x != "object")
                      continue;
                    let p = x[key2];
                    if (p && typeof p == "object")
                      continue;
                    if (typeof p == "string")
                      p = '"' + p;
                    if (hash[p])
                      return false;
                    hash[p] = true;
                  }
                } else {
                  for (let i = data.length; i--; ) {
                    const x = data[i];
                    if (!x || typeof x != "object")
                      continue;
                    for (let j = i; j--; ) {
                      const y = data[j];
                      if (y && typeof y == "object" && equal(x[key2], y[key2]))
                        return false;
                    }
                  }
                }
              }
              return true;
            };
          },
          metaSchema: {
            type: "array",
            items: { type: "string" }
          }
        };
      }
      exports.default = getDef;
      function getScalarKeys(keys, schema2) {
        return keys.map((key2) => {
          var _a, _b, _c;
          const t = (_c = (_b = (_a = schema2.items) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b[key2]) === null || _c === void 0 ? void 0 : _c.type;
          return Array.isArray(t) ? !t.includes("object") && !t.includes("array") : SCALAR_TYPES.includes(t);
        });
      }
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/uniqueItemProperties.js
  var require_uniqueItemProperties2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/uniqueItemProperties.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var uniqueItemProperties_1 = __importDefault(require_uniqueItemProperties());
      var uniqueItemProperties = (ajv) => ajv.addKeyword((0, uniqueItemProperties_1.default)());
      exports.default = uniqueItemProperties;
      module.exports = uniqueItemProperties;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/allRequired.js
  var require_allRequired = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/allRequired.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function getDef() {
        return {
          keyword: "allRequired",
          type: "object",
          schemaType: "boolean",
          macro(schema2, parentSchema) {
            if (!schema2)
              return true;
            const required = Object.keys(parentSchema.properties);
            if (required.length === 0)
              return true;
            return { required };
          },
          dependencies: ["properties"]
        };
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/allRequired.js
  var require_allRequired2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/allRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var allRequired_1 = __importDefault(require_allRequired());
      var allRequired = (ajv) => ajv.addKeyword((0, allRequired_1.default)());
      exports.default = allRequired;
      module.exports = allRequired;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/_required.js
  var require_required2 = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/_required.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function getRequiredDef(keyword) {
        return () => ({
          keyword,
          type: "object",
          schemaType: "array",
          macro(schema2) {
            if (schema2.length === 0)
              return true;
            if (schema2.length === 1)
              return { required: schema2 };
            const comb = keyword === "anyRequired" ? "anyOf" : "oneOf";
            return { [comb]: schema2.map((p) => ({ required: [p] })) };
          },
          metaSchema: {
            type: "array",
            items: { type: "string" }
          }
        });
      }
      exports.default = getRequiredDef;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/anyRequired.js
  var require_anyRequired = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/anyRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var _required_1 = __importDefault(require_required2());
      var getDef = (0, _required_1.default)("anyRequired");
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/anyRequired.js
  var require_anyRequired2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/anyRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var anyRequired_1 = __importDefault(require_anyRequired());
      var anyRequired = (ajv) => ajv.addKeyword((0, anyRequired_1.default)());
      exports.default = anyRequired;
      module.exports = anyRequired;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/oneRequired.js
  var require_oneRequired = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/oneRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var _required_1 = __importDefault(require_required2());
      var getDef = (0, _required_1.default)("oneRequired");
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/oneRequired.js
  var require_oneRequired2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/oneRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var oneRequired_1 = __importDefault(require_oneRequired());
      var oneRequired = (ajv) => ajv.addKeyword((0, oneRequired_1.default)());
      exports.default = oneRequired;
      module.exports = oneRequired;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/patternRequired.js
  var require_patternRequired = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/patternRequired.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var _util_1 = require_util2();
      var error = {
        message: ({ params: { missingPattern } }) => (0, codegen_1.str)`should have property matching pattern '${missingPattern}'`,
        params: ({ params: { missingPattern } }) => (0, codegen_1._)`{missingPattern: ${missingPattern}}`
      };
      function getDef() {
        return {
          keyword: "patternRequired",
          type: "object",
          schemaType: "array",
          error,
          code(cxt) {
            const { gen, schema: schema2, data } = cxt;
            if (schema2.length === 0)
              return;
            const valid2 = gen.let("valid", true);
            for (const pat of schema2)
              validateProperties(pat);
            function validateProperties(pattern) {
              const matched = gen.let("matched", false);
              gen.forIn("key", data, (key2) => {
                gen.assign(matched, (0, codegen_1._)`${(0, _util_1.usePattern)(cxt, pattern)}.test(${key2})`);
                gen.if(matched, () => gen.break());
              });
              cxt.setParams({ missingPattern: pattern });
              gen.assign(valid2, (0, codegen_1.and)(valid2, matched));
              cxt.pass(valid2);
            }
          },
          metaSchema: {
            type: "array",
            items: { type: "string", format: "regex" },
            uniqueItems: true
          }
        };
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/patternRequired.js
  var require_patternRequired2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/patternRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var patternRequired_1 = __importDefault(require_patternRequired());
      var patternRequired = (ajv) => ajv.addKeyword((0, patternRequired_1.default)());
      exports.default = patternRequired;
      module.exports = patternRequired;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/prohibited.js
  var require_prohibited = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/prohibited.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      function getDef() {
        return {
          keyword: "prohibited",
          type: "object",
          schemaType: "array",
          macro: function(schema2) {
            if (schema2.length === 0)
              return true;
            if (schema2.length === 1)
              return { not: { required: schema2 } };
            return { not: { anyOf: schema2.map((p) => ({ required: [p] })) } };
          },
          metaSchema: {
            type: "array",
            items: { type: "string" }
          }
        };
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/prohibited.js
  var require_prohibited2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/prohibited.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var prohibited_1 = __importDefault(require_prohibited());
      var prohibited = (ajv) => ajv.addKeyword((0, prohibited_1.default)());
      exports.default = prohibited;
      module.exports = prohibited;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/deepProperties.js
  var require_deepProperties = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/deepProperties.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var _util_1 = require_util2();
      function getDef(opts) {
        return {
          keyword: "deepProperties",
          type: "object",
          schemaType: "object",
          macro: function(schema2) {
            const allOf = [];
            for (const pointer2 in schema2)
              allOf.push(getSchema(pointer2, schema2[pointer2]));
            return { allOf };
          },
          metaSchema: {
            type: "object",
            propertyNames: { type: "string", format: "json-pointer" },
            additionalProperties: (0, _util_1.metaSchemaRef)(opts)
          }
        };
      }
      exports.default = getDef;
      function getSchema(jsonPointer, schema2) {
        const segments = jsonPointer.split("/");
        const rootSchema = {};
        let pointerSchema = rootSchema;
        for (let i = 1; i < segments.length; i++) {
          let segment = segments[i];
          const isLast = i === segments.length - 1;
          segment = unescapeJsonPointer(segment);
          const properties = pointerSchema.properties = {};
          let items;
          if (/[0-9]+/.test(segment)) {
            let count = +segment;
            items = pointerSchema.items = [];
            pointerSchema.type = ["object", "array"];
            while (count--)
              items.push({});
          } else {
            pointerSchema.type = "object";
          }
          pointerSchema = isLast ? schema2 : {};
          properties[segment] = pointerSchema;
          if (items)
            items.push(pointerSchema);
        }
        return rootSchema;
      }
      function unescapeJsonPointer(str) {
        return str.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/deepProperties.js
  var require_deepProperties2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/deepProperties.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var deepProperties_1 = __importDefault(require_deepProperties());
      var deepProperties = (ajv, opts) => ajv.addKeyword((0, deepProperties_1.default)(opts));
      exports.default = deepProperties;
      module.exports = deepProperties;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/deepRequired.js
  var require_deepRequired = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/deepRequired.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      function getDef() {
        return {
          keyword: "deepRequired",
          type: "object",
          schemaType: "array",
          code(ctx) {
            const { schema: schema2, data } = ctx;
            const props = schema2.map((jp) => (0, codegen_1._)`(${getData(jp)}) === undefined`);
            ctx.fail((0, codegen_1.or)(...props));
            function getData(jsonPointer) {
              if (jsonPointer === "")
                throw new Error("empty JSON pointer not allowed");
              const segments = jsonPointer.split("/");
              let x = data;
              const xs = segments.map((s, i) => i ? x = (0, codegen_1._)`${x}${(0, codegen_1.getProperty)(unescapeJPSegment(s))}` : x);
              return (0, codegen_1.and)(...xs);
            }
          },
          metaSchema: {
            type: "array",
            items: { type: "string", format: "json-pointer" }
          }
        };
      }
      exports.default = getDef;
      function unescapeJPSegment(s) {
        return s.replace(/~1/g, "/").replace(/~0/g, "~");
      }
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/deepRequired.js
  var require_deepRequired2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/deepRequired.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var deepRequired_1 = __importDefault(require_deepRequired());
      var deepRequired = (ajv) => ajv.addKeyword((0, deepRequired_1.default)());
      exports.default = deepRequired;
      module.exports = deepRequired;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/dynamicDefaults.js
  var require_dynamicDefaults = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/dynamicDefaults.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var sequences = {};
      var DEFAULTS = {
        timestamp: () => () => Date.now(),
        datetime: () => () => new Date().toISOString(),
        date: () => () => new Date().toISOString().slice(0, 10),
        time: () => () => new Date().toISOString().slice(11),
        random: () => () => Math.random(),
        randomint: (args) => {
          var _a;
          const max = (_a = args === null || args === void 0 ? void 0 : args.max) !== null && _a !== void 0 ? _a : 2;
          return () => Math.floor(Math.random() * max);
        },
        seq: (args) => {
          var _a;
          const name = (_a = args === null || args === void 0 ? void 0 : args.name) !== null && _a !== void 0 ? _a : "";
          sequences[name] || (sequences[name] = 0);
          return () => sequences[name]++;
        }
      };
      var getDef = Object.assign(_getDef, { DEFAULTS });
      function _getDef() {
        return {
          keyword: "dynamicDefaults",
          type: "object",
          schemaType: ["string", "object"],
          modifying: true,
          valid: true,
          compile(schema2, _parentSchema, it) {
            if (!it.opts.useDefaults || it.compositeRule)
              return () => true;
            const fs = {};
            for (const key2 in schema2)
              fs[key2] = getDefault(schema2[key2]);
            const empty = it.opts.useDefaults === "empty";
            return (data) => {
              for (const prop in schema2) {
                if (data[prop] === void 0 || empty && (data[prop] === null || data[prop] === "")) {
                  data[prop] = fs[prop]();
                }
              }
              return true;
            };
          },
          metaSchema: {
            type: "object",
            additionalProperties: {
              anyOf: [
                { type: "string" },
                {
                  type: "object",
                  additionalProperties: false,
                  required: ["func", "args"],
                  properties: {
                    func: { type: "string" },
                    args: { type: "object" }
                  }
                }
              ]
            }
          }
        };
      }
      function getDefault(d) {
        return typeof d == "object" ? getObjDefault(d) : getStrDefault(d);
      }
      function getObjDefault({ func, args }) {
        const def = DEFAULTS[func];
        assertDefined(func, def);
        return def(args);
      }
      function getStrDefault(d = "") {
        const def = DEFAULTS[d];
        assertDefined(d, def);
        return def();
      }
      function assertDefined(name, def) {
        if (!def)
          throw new Error(`invalid "dynamicDefaults" keyword property value: ${name}`);
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/dynamicDefaults.js
  var require_dynamicDefaults2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/dynamicDefaults.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var dynamicDefaults_1 = __importDefault(require_dynamicDefaults());
      var dynamicDefaults = (ajv) => ajv.addKeyword((0, dynamicDefaults_1.default)());
      exports.default = dynamicDefaults;
      module.exports = dynamicDefaults;
    }
  });

  // node_modules/ajv-keywords/dist/definitions/select.js
  var require_select = __commonJS({
    "node_modules/ajv-keywords/dist/definitions/select.js"(exports, module) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var codegen_1 = require_codegen();
      var _util_1 = require_util2();
      var error = {
        message: ({ params: { schemaProp } }) => schemaProp ? (0, codegen_1.str)`should match case "${schemaProp}" schema` : (0, codegen_1.str)`should match default case schema`,
        params: ({ params: { schemaProp } }) => schemaProp ? (0, codegen_1._)`{failingCase: ${schemaProp}}` : (0, codegen_1._)`{failingDefault: true}`
      };
      function getDef(opts) {
        const metaSchema = (0, _util_1.metaSchemaRef)(opts);
        return [
          {
            keyword: "select",
            schemaType: ["string", "number", "boolean", "null"],
            $data: true,
            error,
            dependencies: ["selectCases"],
            code(cxt) {
              const { gen, schemaCode, parentSchema } = cxt;
              cxt.block$data(codegen_1.nil, () => {
                const valid2 = gen.let("valid", true);
                const schValid = gen.name("_valid");
                const value = gen.const("value", (0, codegen_1._)`${schemaCode} === null ? "null" : ${schemaCode}`);
                gen.if(false);
                for (const schemaProp in parentSchema.selectCases) {
                  cxt.setParams({ schemaProp });
                  gen.elseIf((0, codegen_1._)`"" + ${value} == ${schemaProp}`);
                  const schCxt = cxt.subschema({ keyword: "selectCases", schemaProp }, schValid);
                  cxt.mergeEvaluated(schCxt, codegen_1.Name);
                  gen.assign(valid2, schValid);
                }
                gen.else();
                if (parentSchema.selectDefault !== void 0) {
                  cxt.setParams({ schemaProp: void 0 });
                  const schCxt = cxt.subschema({ keyword: "selectDefault" }, schValid);
                  cxt.mergeEvaluated(schCxt, codegen_1.Name);
                  gen.assign(valid2, schValid);
                }
                gen.endIf();
                cxt.pass(valid2);
              });
            }
          },
          {
            keyword: "selectCases",
            dependencies: ["select"],
            metaSchema: {
              type: "object",
              additionalProperties: metaSchema
            }
          },
          {
            keyword: "selectDefault",
            dependencies: ["select", "selectCases"],
            metaSchema
          }
        ];
      }
      exports.default = getDef;
      module.exports = getDef;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/select.js
  var require_select2 = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/select.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var select_1 = __importDefault(require_select());
      var select = (ajv, opts) => {
        (0, select_1.default)(opts).forEach((d) => ajv.addKeyword(d));
        return ajv;
      };
      exports.default = select;
      module.exports = select;
    }
  });

  // node_modules/ajv-keywords/dist/keywords/index.js
  var require_keywords = __commonJS({
    "node_modules/ajv-keywords/dist/keywords/index.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typeof_1 = __importDefault(require_typeof2());
      var instanceof_1 = __importDefault(require_instanceof2());
      var range_1 = __importDefault(require_range3());
      var exclusiveRange_1 = __importDefault(require_exclusiveRange2());
      var regexp_1 = __importDefault(require_regexp2());
      var transform_1 = __importDefault(require_transform2());
      var uniqueItemProperties_1 = __importDefault(require_uniqueItemProperties2());
      var allRequired_1 = __importDefault(require_allRequired2());
      var anyRequired_1 = __importDefault(require_anyRequired2());
      var oneRequired_1 = __importDefault(require_oneRequired2());
      var patternRequired_1 = __importDefault(require_patternRequired2());
      var prohibited_1 = __importDefault(require_prohibited2());
      var deepProperties_1 = __importDefault(require_deepProperties2());
      var deepRequired_1 = __importDefault(require_deepRequired2());
      var dynamicDefaults_1 = __importDefault(require_dynamicDefaults2());
      var select_1 = __importDefault(require_select2());
      var ajvKeywords = {
        typeof: typeof_1.default,
        instanceof: instanceof_1.default,
        range: range_1.default,
        exclusiveRange: exclusiveRange_1.default,
        regexp: regexp_1.default,
        transform: transform_1.default,
        uniqueItemProperties: uniqueItemProperties_1.default,
        allRequired: allRequired_1.default,
        anyRequired: anyRequired_1.default,
        oneRequired: oneRequired_1.default,
        patternRequired: patternRequired_1.default,
        prohibited: prohibited_1.default,
        deepProperties: deepProperties_1.default,
        deepRequired: deepRequired_1.default,
        dynamicDefaults: dynamicDefaults_1.default,
        select: select_1.default
      };
      exports.default = ajvKeywords;
      module.exports = ajvKeywords;
    }
  });

  // node_modules/ajv-keywords/dist/index.js
  var require_dist = __commonJS({
    "node_modules/ajv-keywords/dist/index.js"(exports, module) {
      init_globals();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var keywords_1 = __importDefault(require_keywords());
      var ajvKeywords = (ajv, keyword) => {
        if (Array.isArray(keyword)) {
          for (const k of keyword)
            get(k)(ajv);
          return ajv;
        }
        if (keyword) {
          get(keyword)(ajv);
          return ajv;
        }
        for (keyword in keywords_1.default)
          get(keyword)(ajv);
        return ajv;
      };
      ajvKeywords.get = get;
      function get(keyword) {
        const defFunc = keywords_1.default[keyword];
        if (!defFunc)
          throw new Error("Unknown keyword " + keyword);
        return defFunc;
      }
      exports.default = ajvKeywords;
      module.exports = ajvKeywords;
      module.exports.default = ajvKeywords;
    }
  });

  // node_modules/@humanwhocodes/momoa/api.js
  var require_api = __commonJS({
    "node_modules/@humanwhocodes/momoa/api.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", { value: true });
      var LBRACKET = "[";
      var RBRACKET = "]";
      var LBRACE = "{";
      var RBRACE = "}";
      var COLON = ":";
      var COMMA = ",";
      var TRUE = "true";
      var FALSE = "false";
      var NULL = "null";
      var QUOTE = '"';
      var expectedKeywords = /* @__PURE__ */ new Map([
        ["t", TRUE],
        ["f", FALSE],
        ["n", NULL]
      ]);
      var escapeToChar = /* @__PURE__ */ new Map([
        [QUOTE, QUOTE],
        ["\\", "\\"],
        ["/", "/"],
        ["b", "\b"],
        ["n", "\n"],
        ["f", "\f"],
        ["r", "\r"],
        ["t", "	"]
      ]);
      var knownTokenTypes = /* @__PURE__ */ new Map([
        [LBRACKET, "Punctuator"],
        [RBRACKET, "Punctuator"],
        [LBRACE, "Punctuator"],
        [RBRACE, "Punctuator"],
        [COLON, "Punctuator"],
        [COMMA, "Punctuator"],
        [TRUE, "Boolean"],
        [FALSE, "Boolean"],
        [NULL, "Null"]
      ]);
      var ErrorWithLocation = class extends Error {
        constructor(message, { line, column, index }) {
          super(`${message} (${line}:${column})`);
          this.line = line;
          this.column = column;
          this.index = index;
        }
      };
      var UnexpectedChar = class extends ErrorWithLocation {
        constructor(unexpected, loc) {
          super(`Unexpected character ${unexpected} found.`, loc);
        }
      };
      var UnexpectedToken = class extends ErrorWithLocation {
        constructor(token) {
          super(`Unexpected token ${token.type}(${token.value}) found.`, token.loc.start);
        }
      };
      var UnexpectedEOF = class extends ErrorWithLocation {
        constructor(loc) {
          super("Unexpected end of input found.", loc);
        }
      };
      var QUOTE$1 = '"';
      var SLASH = "/";
      var STAR = "*";
      var DEFAULT_OPTIONS = {
        comments: false,
        ranges: false
      };
      function isWhitespace(c) {
        return /[\s\n]/.test(c);
      }
      function isDigit(c) {
        return c >= "0" && c <= "9";
      }
      function isHexDigit(c) {
        return isDigit(c) || /[a-f]/i.test(c);
      }
      function isPositiveDigit(c) {
        return c >= "1" && c <= "9";
      }
      function isKeywordStart(c) {
        return /[tfn]/.test(c);
      }
      function isNumberStart(c) {
        return isDigit(c) || c === "." || c === "-";
      }
      function tokenize(text, options2) {
        options2 = Object.freeze({
          ...DEFAULT_OPTIONS,
          ...options2
        });
        let offset = -1;
        let line = 1;
        let column = 0;
        let newLine = false;
        const tokens = [];
        function createToken(tokenType, value, startLoc, endLoc) {
          const endOffset = startLoc.offset + value.length;
          let range = options2.ranges ? {
            range: [startLoc.offset, endOffset]
          } : void 0;
          return {
            type: tokenType,
            value,
            loc: {
              start: startLoc,
              end: endLoc || {
                line: startLoc.line,
                column: startLoc.column + value.length,
                offset: endOffset
              }
            },
            ...range
          };
        }
        function next() {
          let c2 = text.charAt(++offset);
          if (newLine) {
            line++;
            column = 1;
            newLine = false;
          } else {
            column++;
          }
          if (c2 === "\r") {
            newLine = true;
            if (text.charAt(offset + 1) === "\n") {
              offset++;
            }
          } else if (c2 === "\n") {
            newLine = true;
          }
          return c2;
        }
        function locate() {
          return {
            line,
            column,
            offset
          };
        }
        function readKeyword(c2) {
          let value = expectedKeywords.get(c2);
          if (text.slice(offset, offset + value.length) === value) {
            offset += value.length - 1;
            column += value.length - 1;
            return { value, c: next() };
          }
          for (let j = 1; j < value.length; j++) {
            if (value[j] !== text.charAt(offset + j)) {
              unexpected(next());
            }
          }
        }
        function readString(c2) {
          let value = c2;
          c2 = next();
          while (c2 && c2 !== QUOTE$1) {
            if (c2 === "\\") {
              value += c2;
              c2 = next();
              if (escapeToChar.has(c2)) {
                value += c2;
              } else if (c2 === "u") {
                value += c2;
                for (let i = 0; i < 4; i++) {
                  c2 = next();
                  if (isHexDigit(c2)) {
                    value += c2;
                  } else {
                    unexpected(c2);
                  }
                }
              } else {
                unexpected(c2);
              }
            } else {
              value += c2;
            }
            c2 = next();
          }
          if (!c2) {
            unexpectedEOF();
          }
          value += c2;
          return { value, c: next() };
        }
        function readNumber(c2) {
          let value = "";
          if (c2 === "-") {
            value += c2;
            c2 = next();
            if (!isDigit(c2)) {
              unexpected(c2);
            }
          }
          if (c2 === "0") {
            value += c2;
            c2 = next();
            if (isDigit(c2)) {
              unexpected(c2);
            }
          } else {
            if (!isPositiveDigit(c2)) {
              unexpected(c2);
            }
            do {
              value += c2;
              c2 = next();
            } while (isDigit(c2));
          }
          if (c2 === ".") {
            do {
              value += c2;
              c2 = next();
            } while (isDigit(c2));
          }
          if (c2 === "e" || c2 === "E") {
            value += c2;
            c2 = next();
            if (c2 === "+" || c2 === "-") {
              value += c2;
              c2 = next();
            }
            if (!isDigit(c2)) {
              unexpected(c2);
            }
            while (isDigit(c2)) {
              value += c2;
              c2 = next();
            }
          }
          return { value, c: c2 };
        }
        function readComment(c2) {
          let value = c2;
          c2 = next();
          if (c2 === "/") {
            do {
              value += c2;
              c2 = next();
            } while (c2 && c2 !== "\r" && c2 !== "\n");
            return { value, c: c2 };
          }
          if (c2 === STAR) {
            while (c2) {
              value += c2;
              c2 = next();
              if (c2 === STAR) {
                value += c2;
                c2 = next();
                if (c2 === SLASH) {
                  value += c2;
                  c2 = next();
                  return { value, c: c2 };
                }
              }
            }
            unexpectedEOF();
          }
          unexpected(c2);
        }
        function unexpected(c2) {
          throw new UnexpectedChar(c2, locate());
        }
        function unexpectedEOF() {
          throw new UnexpectedEOF(locate());
        }
        let c = next();
        while (offset < text.length) {
          while (isWhitespace(c)) {
            c = next();
          }
          if (!c) {
            break;
          }
          const start = locate();
          if (knownTokenTypes.has(c)) {
            tokens.push(createToken(knownTokenTypes.get(c), c, start));
            c = next();
          } else if (isKeywordStart(c)) {
            const result = readKeyword(c);
            let value = result.value;
            c = result.c;
            tokens.push(createToken(knownTokenTypes.get(value), value, start));
          } else if (isNumberStart(c)) {
            const result = readNumber(c);
            let value = result.value;
            c = result.c;
            tokens.push(createToken("Number", value, start));
          } else if (c === QUOTE$1) {
            const result = readString(c);
            let value = result.value;
            c = result.c;
            tokens.push(createToken("String", value, start));
          } else if (c === SLASH && options2.comments) {
            const result = readComment(c);
            let value = result.value;
            c = result.c;
            tokens.push(createToken(value.startsWith("//") ? "LineComment" : "BlockComment", value, start, locate()));
          } else {
            unexpected(c);
          }
        }
        return tokens;
      }
      var types = {
        document(body, parts = {}) {
          return {
            type: "Document",
            body,
            ...parts
          };
        },
        string(value, parts = {}) {
          return {
            type: "String",
            value,
            ...parts
          };
        },
        number(value, parts = {}) {
          return {
            type: "Number",
            value,
            ...parts
          };
        },
        boolean(value, parts = {}) {
          return {
            type: "Boolean",
            value,
            ...parts
          };
        },
        null(parts = {}) {
          return {
            type: "Null",
            value: "null",
            ...parts
          };
        },
        array(elements, parts = {}) {
          return {
            type: "Array",
            elements,
            ...parts
          };
        },
        object(members, parts = {}) {
          return {
            type: "Object",
            members,
            ...parts
          };
        },
        member(name, value, parts = {}) {
          return {
            type: "Member",
            name,
            value,
            ...parts
          };
        }
      };
      var DEFAULT_OPTIONS$1 = {
        tokens: false,
        comments: false,
        ranges: false
      };
      function getStringValue(token) {
        let value = token.value.slice(1, -1);
        let result = "";
        let escapeIndex = value.indexOf("\\");
        let lastIndex = 0;
        while (escapeIndex >= 0) {
          result += value.slice(lastIndex, escapeIndex);
          const escapeChar = value.charAt(escapeIndex + 1);
          if (escapeToChar.has(escapeChar)) {
            result += escapeToChar.get(escapeChar);
            lastIndex = escapeIndex + 2;
          } else if (escapeChar === "u") {
            const hexCode = value.slice(escapeIndex + 2, escapeIndex + 6);
            if (hexCode.length < 4 || /[^0-9a-f]/i.test(hexCode)) {
              throw new ErrorWithLocation(`Invalid unicode escape \\u${hexCode}.`, {
                line: token.loc.start.line,
                column: token.loc.start.column + escapeIndex,
                offset: token.loc.start.offset + escapeIndex
              });
            }
            result += String.fromCharCode(parseInt(hexCode, 16));
            lastIndex = escapeIndex + 6;
          } else {
            throw new ErrorWithLocation(`Invalid escape \\${escapeChar}.`, {
              line: token.loc.start.line,
              column: token.loc.start.column + escapeIndex,
              offset: token.loc.start.offset + escapeIndex
            });
          }
          escapeIndex = value.indexOf("\\", lastIndex);
        }
        result += value.slice(lastIndex);
        return result;
      }
      function getLiteralValue(token) {
        switch (token.type) {
          case "Boolean":
            return token.value === "true";
          case "Number":
            return Number(token.value);
          case "Null":
            return null;
          case "String":
            return getStringValue(token);
        }
      }
      function parse2(text, options2) {
        options2 = Object.freeze({
          ...DEFAULT_OPTIONS$1,
          ...options2
        });
        const tokens = tokenize(text, {
          comments: !!options2.comments,
          ranges: !!options2.ranges
        });
        let tokenIndex = 0;
        function nextNoComments() {
          return tokens[tokenIndex++];
        }
        function nextSkipComments() {
          const nextToken = tokens[tokenIndex++];
          if (nextToken && nextToken.type.endsWith("Comment")) {
            return nextSkipComments();
          }
          return nextToken;
        }
        const next = options2.comments ? nextSkipComments : nextNoComments;
        function assertTokenValue(token, value) {
          if (!token || token.value !== value) {
            throw new UnexpectedToken(token);
          }
        }
        function assertTokenType(token, type) {
          if (!token || token.type !== type) {
            throw new UnexpectedToken(token);
          }
        }
        function createRange(start, end) {
          return options2.ranges ? {
            range: [start.offset, end.offset]
          } : void 0;
        }
        function createLiteralNode(token) {
          const range = createRange(token.loc.start, token.loc.end);
          return {
            type: token.type,
            value: getLiteralValue(token),
            loc: {
              start: {
                ...token.loc.start
              },
              end: {
                ...token.loc.end
              }
            },
            ...range
          };
        }
        function parseProperty(token) {
          assertTokenType(token, "String");
          const name = createLiteralNode(token);
          token = next();
          assertTokenValue(token, ":");
          const value = parseValue();
          const range = createRange(name.loc.start, value.loc.end);
          return types.member(name, value, {
            loc: {
              start: {
                ...name.loc.start
              },
              end: {
                ...value.loc.end
              }
            },
            ...range
          });
        }
        function parseObject(firstToken) {
          assertTokenValue(firstToken, "{");
          const members = [];
          let token = next();
          if (token && token.value !== "}") {
            do {
              members.push(parseProperty(token));
              token = next();
              if (token.value === ",") {
                token = next();
              } else {
                break;
              }
            } while (token);
          }
          assertTokenValue(token, "}");
          const range = createRange(firstToken.loc.start, token.loc.end);
          return types.object(members, {
            loc: {
              start: {
                ...firstToken.loc.start
              },
              end: {
                ...token.loc.end
              }
            },
            ...range
          });
        }
        function parseArray(firstToken) {
          assertTokenValue(firstToken, "[");
          const elements = [];
          let token = next();
          if (token && token.value !== "]") {
            do {
              elements.push(parseValue(token));
              token = next();
              if (token.value === ",") {
                token = next();
              } else {
                break;
              }
            } while (token);
          }
          assertTokenValue(token, "]");
          const range = createRange(firstToken.loc.start, token.loc.end);
          return types.array(elements, {
            type: "Array",
            elements,
            loc: {
              start: {
                ...firstToken.loc.start
              },
              end: {
                ...token.loc.end
              }
            },
            ...range
          });
        }
        function parseValue(token) {
          token = token || next();
          switch (token.type) {
            case "String":
            case "Boolean":
            case "Number":
            case "Null":
              return createLiteralNode(token);
            case "Punctuator":
              if (token.value === "{") {
                return parseObject(token);
              } else if (token.value === "[") {
                return parseArray(token);
              }
            default:
              throw new UnexpectedToken(token);
          }
        }
        const docBody = parseValue();
        const unexpectedToken = next();
        if (unexpectedToken) {
          throw new UnexpectedToken(unexpectedToken);
        }
        const docParts = {
          loc: {
            start: {
              line: 1,
              column: 1,
              offset: 0
            },
            end: {
              ...docBody.loc.end
            }
          }
        };
        if (options2.tokens) {
          docParts.tokens = tokens;
        }
        if (options2.ranges) {
          docParts.range = createRange(docParts.loc.start, docParts.loc.end);
        }
        return types.document(docBody, docParts);
      }
      var childKeys = /* @__PURE__ */ new Map([
        ["Document", ["body"]],
        ["Object", ["members"]],
        ["Member", ["name", "value"]],
        ["Array", ["elements"]],
        ["String", []],
        ["Number", []],
        ["Boolean", []],
        ["Null", []]
      ]);
      function isObject(value) {
        return value && typeof value === "object";
      }
      function isNode(value) {
        return isObject(value) && typeof value.type === "string";
      }
      function traverse(root, visitor) {
        function visitNode(node, parent) {
          if (typeof visitor.enter === "function") {
            visitor.enter(node, parent);
          }
          for (const key2 of childKeys.get(node.type)) {
            const value = node[key2];
            if (isObject(value)) {
              if (Array.isArray(value)) {
                value.forEach((child) => visitNode(child, node));
              } else if (isNode(value)) {
                visitNode(value, node);
              }
            }
          }
          if (typeof visitor.exit === "function") {
            visitor.exit(node, parent);
          }
        }
        visitNode(root);
      }
      function iterator(root, filter = () => true) {
        const traversal = [];
        traverse(root, {
          enter(node, parent) {
            traversal.push({ node, parent, phase: "enter" });
          },
          exit(node, parent) {
            traversal.push({ node, parent, phase: "exit" });
          }
        });
        return traversal.filter(filter).values();
      }
      function evaluate(node) {
        switch (node.type) {
          case "String":
          case "Number":
          case "Boolean":
            return node.value;
          case "Null":
            return null;
          case "Array":
            return node.elements.map(evaluate);
          case "Object": {
            const object = {};
            node.members.forEach((member) => {
              object[evaluate(member.name)] = evaluate(member.value);
            });
            return object;
          }
          case "Document":
            return evaluate(node.body);
          case "Property":
            throw new Error("Cannot evaluate object property outside of an object.");
          default:
            throw new Error(`Unknown node type ${node.type}.`);
        }
      }
      function print(node, { indent = 0 } = {}) {
        const value = evaluate(node);
        return JSON.stringify(value, null, indent);
      }
      exports.evaluate = evaluate;
      exports.iterator = iterator;
      exports.parse = parse2;
      exports.print = print;
      exports.tokenize = tokenize;
      exports.traverse = traverse;
      exports.types = types;
    }
  });

  // node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "node_modules/color-name/index.js"(exports, module) {
      init_globals();
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "node_modules/color-convert/conversions.js"(exports, module) {
      init_globals();
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key2 of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key2]] = key2;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      module.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        const l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
      }
      convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        const t1 = 2 * l - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        const n = wh + f * (v - wh);
        let r;
        let g;
        let b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z2 = z ** 3;
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        const c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          const c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map((char) => {
            return char + char;
          }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        const pure = [0, 0, 0];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // node_modules/color-convert/route.js
  var require_route = __commonJS({
    "node_modules/color-convert/route.js"(exports, module) {
      init_globals();
      var conversions = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          const current = queue.pop();
          const adjacents = Object.keys(conversions[current]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "node_modules/color-convert/index.js"(exports, module) {
      init_globals();
      var conversions = require_conversions();
      var route = require_route();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        const wrappedFn = function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }
  });

  // node_modules/ansi-styles/index.js
  var require_ansi_styles = __commonJS({
    "node_modules/ansi-styles/index.js"(exports, module) {
      init_globals();
      var wrapAnsi16 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${code + offset}m`;
      };
      var wrapAnsi256 = (fn, offset) => (...args) => {
        const code = fn(...args);
        return `\x1B[${38 + offset};5;${code}m`;
      };
      var wrapAnsi16m = (fn, offset) => (...args) => {
        const rgb = fn(...args);
        return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
      };
      var ansi2ansi = (n) => n;
      var rgb2rgb = (r, g, b) => [r, g, b];
      var setLazyProperty = (object, property, get) => {
        Object.defineProperty(object, property, {
          get: () => {
            const value = get();
            Object.defineProperty(object, property, {
              value,
              enumerable: true,
              configurable: true
            });
            return value;
          },
          enumerable: true,
          configurable: true
        });
      };
      var colorConvert;
      var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
        if (colorConvert === void 0) {
          colorConvert = require_color_convert();
        }
        const offset = isBackground ? 10 : 0;
        const styles = {};
        for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
          const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
          if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
          } else if (typeof suite === "object") {
            styles[name] = wrap(suite[targetSpace], offset);
          }
        }
        return styles;
      };
      function assembleStyles() {
        const codes = /* @__PURE__ */ new Map();
        const styles = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (const [groupName, group] of Object.entries(styles)) {
          for (const [styleName, style] of Object.entries(group)) {
            styles[styleName] = {
              open: `\x1B[${style[0]}m`,
              close: `\x1B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
        }
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
        styles.color.close = "\x1B[39m";
        styles.bgColor.close = "\x1B[49m";
        setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
        setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
        setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
        setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
        return styles;
      }
      Object.defineProperty(module, "exports", {
        enumerable: true,
        get: assembleStyles
      });
    }
  });

  // node_modules/supports-color/browser.js
  var require_browser2 = __commonJS({
    "node_modules/supports-color/browser.js"(exports, module) {
      init_globals();
      module.exports = {
        stdout: false,
        stderr: false
      };
    }
  });

  // node_modules/chalk/source/util.js
  var require_util3 = __commonJS({
    "node_modules/chalk/source/util.js"(exports, module) {
      init_globals();
      var stringReplaceAll = (string, substring, replacer) => {
        let index = string.indexOf(substring);
        if (index === -1) {
          return string;
        }
        const substringLength = substring.length;
        let endIndex = 0;
        let returnValue = "";
        do {
          returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
          endIndex = index + substringLength;
          index = string.indexOf(substring, endIndex);
        } while (index !== -1);
        returnValue += string.substr(endIndex);
        return returnValue;
      };
      var stringEncaseCRLFWithFirstIndex = (string, prefix, postfix, index) => {
        let endIndex = 0;
        let returnValue = "";
        do {
          const gotCR = string[index - 1] === "\r";
          returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
          endIndex = index + 1;
          index = string.indexOf("\n", endIndex);
        } while (index !== -1);
        returnValue += string.substr(endIndex);
        return returnValue;
      };
      module.exports = {
        stringReplaceAll,
        stringEncaseCRLFWithFirstIndex
      };
    }
  });

  // node_modules/chalk/source/templates.js
  var require_templates = __commonJS({
    "node_modules/chalk/source/templates.js"(exports, module) {
      init_globals();
      var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
      var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
      var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
      var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
      var ESCAPES = /* @__PURE__ */ new Map([
        ["n", "\n"],
        ["r", "\r"],
        ["t", "	"],
        ["b", "\b"],
        ["f", "\f"],
        ["v", "\v"],
        ["0", "\0"],
        ["\\", "\\"],
        ["e", "\x1B"],
        ["a", "\x07"]
      ]);
      function unescape(c) {
        const u = c[0] === "u";
        const bracket = c[1] === "{";
        if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
          return String.fromCharCode(parseInt(c.slice(1), 16));
        }
        if (u && bracket) {
          return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
        }
        return ESCAPES.get(c) || c;
      }
      function parseArguments(name, arguments_) {
        const results = [];
        const chunks = arguments_.trim().split(/\s*,\s*/g);
        let matches;
        for (const chunk of chunks) {
          const number = Number(chunk);
          if (!Number.isNaN(number)) {
            results.push(number);
          } else if (matches = chunk.match(STRING_REGEX)) {
            results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
          } else {
            throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
          }
        }
        return results;
      }
      function parseStyle(style) {
        STYLE_REGEX.lastIndex = 0;
        const results = [];
        let matches;
        while ((matches = STYLE_REGEX.exec(style)) !== null) {
          const name = matches[1];
          if (matches[2]) {
            const args = parseArguments(name, matches[2]);
            results.push([name].concat(args));
          } else {
            results.push([name]);
          }
        }
        return results;
      }
      function buildStyle(chalk5, styles) {
        const enabled = {};
        for (const layer of styles) {
          for (const style of layer.styles) {
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        }
        let current = chalk5;
        for (const [styleName, styles2] of Object.entries(enabled)) {
          if (!Array.isArray(styles2)) {
            continue;
          }
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          current = styles2.length > 0 ? current[styleName](...styles2) : current[styleName];
        }
        return current;
      }
      module.exports = (chalk5, temporary) => {
        const styles = [];
        const chunks = [];
        let chunk = [];
        temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
          if (escapeCharacter) {
            chunk.push(unescape(escapeCharacter));
          } else if (style) {
            const string = chunk.join("");
            chunk = [];
            chunks.push(styles.length === 0 ? string : buildStyle(chalk5, styles)(string));
            styles.push({ inverse, styles: parseStyle(style) });
          } else if (close) {
            if (styles.length === 0) {
              throw new Error("Found extraneous } in Chalk template literal");
            }
            chunks.push(buildStyle(chalk5, styles)(chunk.join("")));
            chunk = [];
            styles.pop();
          } else {
            chunk.push(character);
          }
        });
        chunks.push(chunk.join(""));
        if (styles.length > 0) {
          const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
          throw new Error(errMessage);
        }
        return chunks.join("");
      };
    }
  });

  // node_modules/chalk/source/index.js
  var require_source = __commonJS({
    "node_modules/chalk/source/index.js"(exports, module) {
      init_globals();
      var ansiStyles = require_ansi_styles();
      var { stdout: stdoutColor, stderr: stderrColor } = require_browser2();
      var {
        stringReplaceAll,
        stringEncaseCRLFWithFirstIndex
      } = require_util3();
      var { isArray } = Array;
      var levelMapping = [
        "ansi",
        "ansi",
        "ansi256",
        "ansi16m"
      ];
      var styles = /* @__PURE__ */ Object.create(null);
      var applyOptions = (object, options2 = {}) => {
        if (options2.level && !(Number.isInteger(options2.level) && options2.level >= 0 && options2.level <= 3)) {
          throw new Error("The `level` option should be an integer from 0 to 3");
        }
        const colorLevel = stdoutColor ? stdoutColor.level : 0;
        object.level = options2.level === void 0 ? colorLevel : options2.level;
      };
      var ChalkClass = class {
        constructor(options2) {
          return chalkFactory(options2);
        }
      };
      var chalkFactory = (options2) => {
        const chalk6 = {};
        applyOptions(chalk6, options2);
        chalk6.template = (...arguments_) => chalkTag(chalk6.template, ...arguments_);
        Object.setPrototypeOf(chalk6, Chalk.prototype);
        Object.setPrototypeOf(chalk6.template, chalk6);
        chalk6.template.constructor = () => {
          throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
        };
        chalk6.template.Instance = ChalkClass;
        return chalk6.template;
      };
      function Chalk(options2) {
        return chalkFactory(options2);
      }
      for (const [styleName, style] of Object.entries(ansiStyles)) {
        styles[styleName] = {
          get() {
            const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
            Object.defineProperty(this, styleName, { value: builder });
            return builder;
          }
        };
      }
      styles.visible = {
        get() {
          const builder = createBuilder(this, this._styler, true);
          Object.defineProperty(this, "visible", { value: builder });
          return builder;
        }
      };
      var usedModels = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
      for (const model of usedModels) {
        styles[model] = {
          get() {
            const { level } = this;
            return function(...arguments_) {
              const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
              return createBuilder(this, styler, this._isEmpty);
            };
          }
        };
      }
      for (const model of usedModels) {
        const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
        styles[bgModel] = {
          get() {
            const { level } = this;
            return function(...arguments_) {
              const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
              return createBuilder(this, styler, this._isEmpty);
            };
          }
        };
      }
      var proto = Object.defineProperties(() => {
      }, {
        ...styles,
        level: {
          enumerable: true,
          get() {
            return this._generator.level;
          },
          set(level) {
            this._generator.level = level;
          }
        }
      });
      var createStyler = (open, close, parent) => {
        let openAll;
        let closeAll;
        if (parent === void 0) {
          openAll = open;
          closeAll = close;
        } else {
          openAll = parent.openAll + open;
          closeAll = close + parent.closeAll;
        }
        return {
          open,
          close,
          openAll,
          closeAll,
          parent
        };
      };
      var createBuilder = (self2, _styler, _isEmpty) => {
        const builder = (...arguments_) => {
          if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
            return applyStyle(builder, chalkTag(builder, ...arguments_));
          }
          return applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
        };
        Object.setPrototypeOf(builder, proto);
        builder._generator = self2;
        builder._styler = _styler;
        builder._isEmpty = _isEmpty;
        return builder;
      };
      var applyStyle = (self2, string) => {
        if (self2.level <= 0 || !string) {
          return self2._isEmpty ? "" : string;
        }
        let styler = self2._styler;
        if (styler === void 0) {
          return string;
        }
        const { openAll, closeAll } = styler;
        if (string.indexOf("\x1B") !== -1) {
          while (styler !== void 0) {
            string = stringReplaceAll(string, styler.close, styler.open);
            styler = styler.parent;
          }
        }
        const lfIndex = string.indexOf("\n");
        if (lfIndex !== -1) {
          string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
        }
        return openAll + string + closeAll;
      };
      var template;
      var chalkTag = (chalk6, ...strings) => {
        const [firstString] = strings;
        if (!isArray(firstString) || !isArray(firstString.raw)) {
          return strings.join(" ");
        }
        const arguments_ = strings.slice(1);
        const parts = [firstString.raw[0]];
        for (let i = 1; i < firstString.length; i++) {
          parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"), String(firstString.raw[i]));
        }
        if (template === void 0) {
          template = require_templates();
        }
        return template(chalk6, parts.join(""));
      };
      Object.defineProperties(Chalk.prototype, styles);
      var chalk5 = Chalk();
      chalk5.supportsColor = stdoutColor;
      chalk5.stderr = Chalk({ level: stderrColor ? stderrColor.level : 0 });
      chalk5.stderr.supportsColor = stderrColor;
      module.exports = chalk5;
    }
  });

  // node_modules/js-tokens/index.js
  var require_js_tokens = __commonJS({
    "node_modules/js-tokens/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
      exports.matchToToken = function(match) {
        var token = { type: "invalid", value: match[0], closed: void 0 };
        if (match[1])
          token.type = "string", token.closed = !!(match[3] || match[4]);
        else if (match[5])
          token.type = "comment";
        else if (match[6])
          token.type = "comment", token.closed = !!match[7];
        else if (match[8])
          token.type = "regex";
        else if (match[9])
          token.type = "number";
        else if (match[10])
          token.type = "name";
        else if (match[11])
          token.type = "punctuator";
        else if (match[12])
          token.type = "whitespace";
        return token;
      };
    }
  });

  // node_modules/@babel/helper-validator-identifier/lib/identifier.js
  var require_identifier = __commonJS({
    "node_modules/@babel/helper-validator-identifier/lib/identifier.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isIdentifierChar = isIdentifierChar;
      exports.isIdentifierName = isIdentifierName;
      exports.isIdentifierStart = isIdentifierStart;
      var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
      nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
      var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
      var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
      function isInAstralSet(code, set) {
        let pos = 65536;
        for (let i = 0, length = set.length; i < length; i += 2) {
          pos += set[i];
          if (pos > code)
            return false;
          pos += set[i + 1];
          if (pos >= code)
            return true;
        }
        return false;
      }
      function isIdentifierStart(code) {
        if (code < 65)
          return code === 36;
        if (code <= 90)
          return true;
        if (code < 97)
          return code === 95;
        if (code <= 122)
          return true;
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
        }
        return isInAstralSet(code, astralIdentifierStartCodes);
      }
      function isIdentifierChar(code) {
        if (code < 48)
          return code === 36;
        if (code < 58)
          return true;
        if (code < 65)
          return false;
        if (code <= 90)
          return true;
        if (code < 97)
          return code === 95;
        if (code <= 122)
          return true;
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
        }
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
      }
      function isIdentifierName(name) {
        let isFirst = true;
        for (let i = 0; i < name.length; i++) {
          let cp = name.charCodeAt(i);
          if ((cp & 64512) === 55296 && i + 1 < name.length) {
            const trail = name.charCodeAt(++i);
            if ((trail & 64512) === 56320) {
              cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
            }
          }
          if (isFirst) {
            isFirst = false;
            if (!isIdentifierStart(cp)) {
              return false;
            }
          } else if (!isIdentifierChar(cp)) {
            return false;
          }
        }
        return !isFirst;
      }
    }
  });

  // node_modules/@babel/helper-validator-identifier/lib/keyword.js
  var require_keyword2 = __commonJS({
    "node_modules/@babel/helper-validator-identifier/lib/keyword.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isKeyword = isKeyword;
      exports.isReservedWord = isReservedWord;
      exports.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
      exports.isStrictBindReservedWord = isStrictBindReservedWord;
      exports.isStrictReservedWord = isStrictReservedWord;
      var reservedWords = {
        keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
        strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
        strictBind: ["eval", "arguments"]
      };
      var keywords2 = new Set(reservedWords.keyword);
      var reservedWordsStrictSet = new Set(reservedWords.strict);
      var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
      function isReservedWord(word, inModule) {
        return inModule && word === "await" || word === "enum";
      }
      function isStrictReservedWord(word, inModule) {
        return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
      }
      function isStrictBindOnlyReservedWord(word) {
        return reservedWordsStrictBindSet.has(word);
      }
      function isStrictBindReservedWord(word, inModule) {
        return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
      }
      function isKeyword(word) {
        return keywords2.has(word);
      }
    }
  });

  // node_modules/@babel/helper-validator-identifier/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@babel/helper-validator-identifier/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "isIdentifierChar", {
        enumerable: true,
        get: function() {
          return _identifier.isIdentifierChar;
        }
      });
      Object.defineProperty(exports, "isIdentifierName", {
        enumerable: true,
        get: function() {
          return _identifier.isIdentifierName;
        }
      });
      Object.defineProperty(exports, "isIdentifierStart", {
        enumerable: true,
        get: function() {
          return _identifier.isIdentifierStart;
        }
      });
      Object.defineProperty(exports, "isKeyword", {
        enumerable: true,
        get: function() {
          return _keyword.isKeyword;
        }
      });
      Object.defineProperty(exports, "isReservedWord", {
        enumerable: true,
        get: function() {
          return _keyword.isReservedWord;
        }
      });
      Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
        enumerable: true,
        get: function() {
          return _keyword.isStrictBindOnlyReservedWord;
        }
      });
      Object.defineProperty(exports, "isStrictBindReservedWord", {
        enumerable: true,
        get: function() {
          return _keyword.isStrictBindReservedWord;
        }
      });
      Object.defineProperty(exports, "isStrictReservedWord", {
        enumerable: true,
        get: function() {
          return _keyword.isStrictReservedWord;
        }
      });
      var _identifier = require_identifier();
      var _keyword = require_keyword2();
    }
  });

  // node_modules/@babel/highlight/node_modules/escape-string-regexp/index.js
  var require_escape_string_regexp = __commonJS({
    "node_modules/@babel/highlight/node_modules/escape-string-regexp/index.js"(exports, module) {
      init_globals();
      var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
      module.exports = function(str) {
        if (typeof str !== "string") {
          throw new TypeError("Expected a string");
        }
        return str.replace(matchOperatorsRe, "\\$&");
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/color-name/index.js
  var require_color_name2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/color-name/index.js"(exports, module) {
      init_globals();
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/color-convert/conversions.js
  var require_conversions2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/color-convert/conversions.js"(exports, module) {
      init_globals();
      var cssKeywords = require_color_name2();
      var reverseKeywords = {};
      for (key2 in cssKeywords) {
        if (cssKeywords.hasOwnProperty(key2)) {
          reverseKeywords[cssKeywords[key2]] = key2;
        }
      }
      var key2;
      var convert = module.exports = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      for (model in convert) {
        if (convert.hasOwnProperty(model)) {
          if (!("channels" in convert[model])) {
            throw new Error("missing channels property: " + model);
          }
          if (!("labels" in convert[model])) {
            throw new Error("missing channel labels property: " + model);
          }
          if (convert[model].labels.length !== convert[model].channels) {
            throw new Error("channel and label counts mismatch: " + model);
          }
          channels = convert[model].channels;
          labels = convert[model].labels;
          delete convert[model].channels;
          delete convert[model].labels;
          Object.defineProperty(convert[model], "channels", { value: channels });
          Object.defineProperty(convert[model], "labels", { value: labels });
        }
      }
      var channels;
      var labels;
      var model;
      convert.rgb.hsl = function(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var h;
        var s;
        var l;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        var rdif;
        var gdif;
        var bdif;
        var h;
        var s;
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var v = Math.max(r, g, b);
        var diff = v - Math.min(r, g, b);
        var diffc = function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        var r = rgb[0];
        var g = rgb[1];
        var b = rgb[2];
        var h = convert.rgb.hsl(rgb)[0];
        var w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var c;
        var m;
        var y;
        var k;
        k = Math.min(1 - r, 1 - g, 1 - b);
        c = (1 - r - k) / (1 - k) || 0;
        m = (1 - g - k) / (1 - k) || 0;
        y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
      }
      convert.rgb.keyword = function(rgb) {
        var reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        var currentClosestDistance = Infinity;
        var currentClosestKeyword;
        for (var keyword in cssKeywords) {
          if (cssKeywords.hasOwnProperty(keyword)) {
            var value = cssKeywords[keyword];
            var distance = comparativeDistance(rgb, value);
            if (distance < currentClosestDistance) {
              currentClosestDistance = distance;
              currentClosestKeyword = keyword;
            }
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
        var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function(rgb) {
        var xyz = convert.rgb.xyz(rgb);
        var x = xyz[0];
        var y = xyz[1];
        var z = xyz[2];
        var l;
        var a;
        var b;
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        l = 116 * y - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        var h = hsl[0] / 360;
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var t1;
        var t2;
        var t3;
        var rgb;
        var val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        t1 = 2 * l - t2;
        rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        var h = hsl[0];
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var smin = s;
        var lmin = Math.max(l, 0.01);
        var sv;
        var v;
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        v = (l + s) / 2;
        sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        var h = hsv[0] / 60;
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var hi = Math.floor(h) % 6;
        var f = h - Math.floor(h);
        var p = 255 * v * (1 - s);
        var q = 255 * v * (1 - s * f);
        var t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        var h = hsv[0];
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var vmin = Math.max(v, 0.01);
        var lmin;
        var sl;
        var l;
        l = (2 - s) * v;
        lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        var h = hwb[0] / 360;
        var wh = hwb[1] / 100;
        var bl = hwb[2] / 100;
        var ratio = wh + bl;
        var i;
        var v;
        var f;
        var n;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        i = Math.floor(6 * h);
        v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        n = wh + f * (v - wh);
        var r;
        var g;
        var b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        var c = cmyk[0] / 100;
        var m = cmyk[1] / 100;
        var y = cmyk[2] / 100;
        var k = cmyk[3] / 100;
        var r;
        var g;
        var b;
        r = 1 - Math.min(1, c * (1 - k) + k);
        g = 1 - Math.min(1, m * (1 - k) + k);
        b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        var x = xyz[0] / 100;
        var y = xyz[1] / 100;
        var z = xyz[2] / 100;
        var r;
        var g;
        var b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        var x = xyz[0];
        var y = xyz[1];
        var z = xyz[2];
        var l;
        var a;
        var b;
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        l = 116 * y - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var x;
        var y;
        var z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        var y2 = Math.pow(y, 3);
        var x2 = Math.pow(x, 3);
        var z2 = Math.pow(z, 3);
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function(lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var hr;
        var h;
        var c;
        hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        var l = lch[0];
        var c = lch[1];
        var h = lch[2];
        var a;
        var b;
        var hr;
        hr = h / 360 * 2 * Math.PI;
        a = c * Math.cos(hr);
        b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args) {
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        var r = args[0];
        var g = args[1];
        var b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        var color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        var mult = (~~(args > 50) + 1) * 0.5;
        var r = (color & 1) * mult * 255;
        var g = (color >> 1 & 1) * mult * 255;
        var b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          var c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        var rem;
        var r = Math.floor(args / 36) / 5 * 255;
        var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        var b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        var string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        var colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map(function(char) {
            return char + char;
          }).join("");
        }
        var integer = parseInt(colorString, 16);
        var r = integer >> 16 & 255;
        var g = integer >> 8 & 255;
        var b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var max = Math.max(Math.max(r, g), b);
        var min = Math.min(Math.min(r, g), b);
        var chroma = max - min;
        var grayscale;
        var hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma + 4;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var c = 1;
        var f = 0;
        if (l < 0.5) {
          c = 2 * s * l;
        } else {
          c = 2 * s * (1 - l);
        }
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var c = s * v;
        var f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        var h = hcg[0] / 360;
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        var pure = [0, 0, 0];
        var hi = h % 1 * 6;
        var v = hi % 1;
        var w = 1 - v;
        var mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var v = c + g * (1 - c);
        var f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var l = g * (1 - c) + 0.5 * c;
        var s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        var w = hwb[1] / 100;
        var b = hwb[2] / 100;
        var v = 1 - b;
        var c = v - w;
        var g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = convert.gray.hsv = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        var val = Math.round(gray[0] / 100 * 255) & 255;
        var integer = (val << 16) + (val << 8) + val;
        var string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/color-convert/route.js
  var require_route2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/color-convert/route.js"(exports, module) {
      init_globals();
      var conversions = require_conversions2();
      function buildGraph() {
        var graph = {};
        var models = Object.keys(conversions);
        for (var len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      function deriveBFS(fromModel) {
        var graph = buildGraph();
        var queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          var current = queue.pop();
          var adjacents = Object.keys(conversions[current]);
          for (var len = adjacents.length, i = 0; i < len; i++) {
            var adjacent = adjacents[i];
            var node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        var path = [graph[toModel].parent, toModel];
        var fn = conversions[graph[toModel].parent][toModel];
        var cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module.exports = function(fromModel) {
        var graph = deriveBFS(fromModel);
        var conversion = {};
        var models = Object.keys(graph);
        for (var len = models.length, i = 0; i < len; i++) {
          var toModel = models[i];
          var node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/color-convert/index.js
  var require_color_convert2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/color-convert/index.js"(exports, module) {
      init_globals();
      var conversions = require_conversions2();
      var route = require_route2();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        var wrappedFn = function(args) {
          if (args === void 0 || args === null) {
            return args;
          }
          if (arguments.length > 1) {
            args = Array.prototype.slice.call(arguments);
          }
          return fn(args);
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        var wrappedFn = function(args) {
          if (args === void 0 || args === null) {
            return args;
          }
          if (arguments.length > 1) {
            args = Array.prototype.slice.call(arguments);
          }
          var result = fn(args);
          if (typeof result === "object") {
            for (var len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach(function(fromModel) {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
        var routes = route(fromModel);
        var routeModels = Object.keys(routes);
        routeModels.forEach(function(toModel) {
          var fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }
  });

  // node_modules/@babel/highlight/node_modules/ansi-styles/index.js
  var require_ansi_styles2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/ansi-styles/index.js"(exports, module) {
      init_globals();
      var colorConvert = require_color_convert2();
      var wrapAnsi16 = (fn, offset) => function() {
        const code = fn.apply(colorConvert, arguments);
        return `\x1B[${code + offset}m`;
      };
      var wrapAnsi256 = (fn, offset) => function() {
        const code = fn.apply(colorConvert, arguments);
        return `\x1B[${38 + offset};5;${code}m`;
      };
      var wrapAnsi16m = (fn, offset) => function() {
        const rgb = fn.apply(colorConvert, arguments);
        return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
      };
      function assembleStyles() {
        const codes = /* @__PURE__ */ new Map();
        const styles = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            gray: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };
        styles.color.grey = styles.color.gray;
        for (const groupName of Object.keys(styles)) {
          const group = styles[groupName];
          for (const styleName of Object.keys(group)) {
            const style = group[styleName];
            styles[styleName] = {
              open: `\x1B[${style[0]}m`,
              close: `\x1B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
          Object.defineProperty(styles, "codes", {
            value: codes,
            enumerable: false
          });
        }
        const ansi2ansi = (n) => n;
        const rgb2rgb = (r, g, b) => [r, g, b];
        styles.color.close = "\x1B[39m";
        styles.bgColor.close = "\x1B[49m";
        styles.color.ansi = {
          ansi: wrapAnsi16(ansi2ansi, 0)
        };
        styles.color.ansi256 = {
          ansi256: wrapAnsi256(ansi2ansi, 0)
        };
        styles.color.ansi16m = {
          rgb: wrapAnsi16m(rgb2rgb, 0)
        };
        styles.bgColor.ansi = {
          ansi: wrapAnsi16(ansi2ansi, 10)
        };
        styles.bgColor.ansi256 = {
          ansi256: wrapAnsi256(ansi2ansi, 10)
        };
        styles.bgColor.ansi16m = {
          rgb: wrapAnsi16m(rgb2rgb, 10)
        };
        for (let key2 of Object.keys(colorConvert)) {
          if (typeof colorConvert[key2] !== "object") {
            continue;
          }
          const suite = colorConvert[key2];
          if (key2 === "ansi16") {
            key2 = "ansi";
          }
          if ("ansi16" in suite) {
            styles.color.ansi[key2] = wrapAnsi16(suite.ansi16, 0);
            styles.bgColor.ansi[key2] = wrapAnsi16(suite.ansi16, 10);
          }
          if ("ansi256" in suite) {
            styles.color.ansi256[key2] = wrapAnsi256(suite.ansi256, 0);
            styles.bgColor.ansi256[key2] = wrapAnsi256(suite.ansi256, 10);
          }
          if ("rgb" in suite) {
            styles.color.ansi16m[key2] = wrapAnsi16m(suite.rgb, 0);
            styles.bgColor.ansi16m[key2] = wrapAnsi16m(suite.rgb, 10);
          }
        }
        return styles;
      }
      Object.defineProperty(module, "exports", {
        enumerable: true,
        get: assembleStyles
      });
    }
  });

  // node_modules/@babel/highlight/node_modules/supports-color/browser.js
  var require_browser3 = __commonJS({
    "node_modules/@babel/highlight/node_modules/supports-color/browser.js"(exports, module) {
      init_globals();
      module.exports = {
        stdout: false,
        stderr: false
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/chalk/templates.js
  var require_templates2 = __commonJS({
    "node_modules/@babel/highlight/node_modules/chalk/templates.js"(exports, module) {
      init_globals();
      var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
      var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
      var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
      var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
      var ESCAPES = /* @__PURE__ */ new Map([
        ["n", "\n"],
        ["r", "\r"],
        ["t", "	"],
        ["b", "\b"],
        ["f", "\f"],
        ["v", "\v"],
        ["0", "\0"],
        ["\\", "\\"],
        ["e", "\x1B"],
        ["a", "\x07"]
      ]);
      function unescape(c) {
        if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
          return String.fromCharCode(parseInt(c.slice(1), 16));
        }
        return ESCAPES.get(c) || c;
      }
      function parseArguments(name, args) {
        const results = [];
        const chunks = args.trim().split(/\s*,\s*/g);
        let matches;
        for (const chunk of chunks) {
          if (!isNaN(chunk)) {
            results.push(Number(chunk));
          } else if (matches = chunk.match(STRING_REGEX)) {
            results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
          } else {
            throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
          }
        }
        return results;
      }
      function parseStyle(style) {
        STYLE_REGEX.lastIndex = 0;
        const results = [];
        let matches;
        while ((matches = STYLE_REGEX.exec(style)) !== null) {
          const name = matches[1];
          if (matches[2]) {
            const args = parseArguments(name, matches[2]);
            results.push([name].concat(args));
          } else {
            results.push([name]);
          }
        }
        return results;
      }
      function buildStyle(chalk5, styles) {
        const enabled = {};
        for (const layer of styles) {
          for (const style of layer.styles) {
            enabled[style[0]] = layer.inverse ? null : style.slice(1);
          }
        }
        let current = chalk5;
        for (const styleName of Object.keys(enabled)) {
          if (Array.isArray(enabled[styleName])) {
            if (!(styleName in current)) {
              throw new Error(`Unknown Chalk style: ${styleName}`);
            }
            if (enabled[styleName].length > 0) {
              current = current[styleName].apply(current, enabled[styleName]);
            } else {
              current = current[styleName];
            }
          }
        }
        return current;
      }
      module.exports = (chalk5, tmp) => {
        const styles = [];
        const chunks = [];
        let chunk = [];
        tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
          if (escapeChar) {
            chunk.push(unescape(escapeChar));
          } else if (style) {
            const str = chunk.join("");
            chunk = [];
            chunks.push(styles.length === 0 ? str : buildStyle(chalk5, styles)(str));
            styles.push({ inverse, styles: parseStyle(style) });
          } else if (close) {
            if (styles.length === 0) {
              throw new Error("Found extraneous } in Chalk template literal");
            }
            chunks.push(buildStyle(chalk5, styles)(chunk.join("")));
            chunk = [];
            styles.pop();
          } else {
            chunk.push(chr);
          }
        });
        chunks.push(chunk.join(""));
        if (styles.length > 0) {
          const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
          throw new Error(errMsg);
        }
        return chunks.join("");
      };
    }
  });

  // node_modules/@babel/highlight/node_modules/chalk/index.js
  var require_chalk = __commonJS({
    "node_modules/@babel/highlight/node_modules/chalk/index.js"(exports, module) {
      init_globals();
      var escapeStringRegexp = require_escape_string_regexp();
      var ansiStyles = require_ansi_styles2();
      var stdoutColor = require_browser3().stdout;
      var template = require_templates2();
      var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
      var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
      var skipModels = /* @__PURE__ */ new Set(["gray"]);
      var styles = /* @__PURE__ */ Object.create(null);
      function applyOptions(obj, options2) {
        options2 = options2 || {};
        const scLevel = stdoutColor ? stdoutColor.level : 0;
        obj.level = options2.level === void 0 ? scLevel : options2.level;
        obj.enabled = "enabled" in options2 ? options2.enabled : obj.level > 0;
      }
      function Chalk(options2) {
        if (!this || !(this instanceof Chalk) || this.template) {
          const chalk5 = {};
          applyOptions(chalk5, options2);
          chalk5.template = function() {
            const args = [].slice.call(arguments);
            return chalkTag.apply(null, [chalk5.template].concat(args));
          };
          Object.setPrototypeOf(chalk5, Chalk.prototype);
          Object.setPrototypeOf(chalk5.template, chalk5);
          chalk5.template.constructor = Chalk;
          return chalk5.template;
        }
        applyOptions(this, options2);
      }
      if (isSimpleWindowsTerm) {
        ansiStyles.blue.open = "\x1B[94m";
      }
      for (const key2 of Object.keys(ansiStyles)) {
        ansiStyles[key2].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key2].close), "g");
        styles[key2] = {
          get() {
            const codes = ansiStyles[key2];
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key2);
          }
        };
      }
      styles.visible = {
        get() {
          return build.call(this, this._styles || [], true, "visible");
        }
      };
      ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
      for (const model of Object.keys(ansiStyles.color.ansi)) {
        if (skipModels.has(model)) {
          continue;
        }
        styles[model] = {
          get() {
            const level = this.level;
            return function() {
              const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
              const codes = {
                open,
                close: ansiStyles.color.close,
                closeRe: ansiStyles.color.closeRe
              };
              return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
            };
          }
        };
      }
      ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
      for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
        if (skipModels.has(model)) {
          continue;
        }
        const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
        styles[bgModel] = {
          get() {
            const level = this.level;
            return function() {
              const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
              const codes = {
                open,
                close: ansiStyles.bgColor.close,
                closeRe: ansiStyles.bgColor.closeRe
              };
              return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
            };
          }
        };
      }
      var proto = Object.defineProperties(() => {
      }, styles);
      function build(_styles, _empty, key2) {
        const builder = function() {
          return applyStyle.apply(builder, arguments);
        };
        builder._styles = _styles;
        builder._empty = _empty;
        const self2 = this;
        Object.defineProperty(builder, "level", {
          enumerable: true,
          get() {
            return self2.level;
          },
          set(level) {
            self2.level = level;
          }
        });
        Object.defineProperty(builder, "enabled", {
          enumerable: true,
          get() {
            return self2.enabled;
          },
          set(enabled) {
            self2.enabled = enabled;
          }
        });
        builder.hasGrey = this.hasGrey || key2 === "gray" || key2 === "grey";
        builder.__proto__ = proto;
        return builder;
      }
      function applyStyle() {
        const args = arguments;
        const argsLen = args.length;
        let str = String(arguments[0]);
        if (argsLen === 0) {
          return "";
        }
        if (argsLen > 1) {
          for (let a = 1; a < argsLen; a++) {
            str += " " + args[a];
          }
        }
        if (!this.enabled || this.level <= 0 || !str) {
          return this._empty ? "" : str;
        }
        const originalDim = ansiStyles.dim.open;
        if (isSimpleWindowsTerm && this.hasGrey) {
          ansiStyles.dim.open = "";
        }
        for (const code of this._styles.slice().reverse()) {
          str = code.open + str.replace(code.closeRe, code.open) + code.close;
          str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
        }
        ansiStyles.dim.open = originalDim;
        return str;
      }
      function chalkTag(chalk5, strings) {
        if (!Array.isArray(strings)) {
          return [].slice.call(arguments, 1).join(" ");
        }
        const args = [].slice.call(arguments, 2);
        const parts = [strings.raw[0]];
        for (let i = 1; i < strings.length; i++) {
          parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
          parts.push(String(strings.raw[i]));
        }
        return template(chalk5, parts.join(""));
      }
      Object.defineProperties(Chalk.prototype, styles);
      module.exports = Chalk();
      module.exports.supportsColor = stdoutColor;
      module.exports.default = module.exports;
    }
  });

  // node_modules/@babel/highlight/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/@babel/highlight/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = highlight;
      exports.getChalk = getChalk;
      exports.shouldHighlight = shouldHighlight;
      var _jsTokens = require_js_tokens();
      var _helperValidatorIdentifier = require_lib();
      var _chalk = require_chalk();
      var sometimesKeywords = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
      function getDefs(chalk5) {
        return {
          keyword: chalk5.cyan,
          capitalized: chalk5.yellow,
          jsxIdentifier: chalk5.yellow,
          punctuator: chalk5.yellow,
          number: chalk5.magenta,
          string: chalk5.green,
          regex: chalk5.magenta,
          comment: chalk5.grey,
          invalid: chalk5.white.bgRed.bold
        };
      }
      var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
      var BRACKET = /^[()[\]{}]$/;
      var tokenize;
      {
        const JSX_TAG = /^[a-z][\w-]*$/i;
        const getTokenType = function(token, offset, text) {
          if (token.type === "name") {
            if ((0, _helperValidatorIdentifier.isKeyword)(token.value) || (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) || sometimesKeywords.has(token.value)) {
              return "keyword";
            }
            if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) == "</")) {
              return "jsxIdentifier";
            }
            if (token.value[0] !== token.value[0].toLowerCase()) {
              return "capitalized";
            }
          }
          if (token.type === "punctuator" && BRACKET.test(token.value)) {
            return "bracket";
          }
          if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
            return "punctuator";
          }
          return token.type;
        };
        tokenize = function* (text) {
          let match;
          while (match = _jsTokens.default.exec(text)) {
            const token = _jsTokens.matchToToken(match);
            yield {
              type: getTokenType(token, match.index, text),
              value: token.value
            };
          }
        };
      }
      function highlightTokens(defs, text) {
        let highlighted = "";
        for (const {
          type,
          value
        } of tokenize(text)) {
          const colorize = defs[type];
          if (colorize) {
            highlighted += value.split(NEWLINE).map((str) => colorize(str)).join("\n");
          } else {
            highlighted += value;
          }
        }
        return highlighted;
      }
      function shouldHighlight(options2) {
        return !!_chalk.supportsColor || options2.forceColor;
      }
      function getChalk(options2) {
        return options2.forceColor ? new _chalk.constructor({
          enabled: true,
          level: 1
        }) : _chalk;
      }
      function highlight(code, options2 = {}) {
        if (code !== "" && shouldHighlight(options2)) {
          const chalk5 = getChalk(options2);
          const defs = getDefs(chalk5);
          return highlightTokens(defs, code);
        } else {
          return code;
        }
      }
    }
  });

  // node_modules/@babel/code-frame/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/@babel/code-frame/lib/index.js"(exports) {
      init_globals();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.codeFrameColumns = codeFrameColumns2;
      exports.default = _default;
      var _highlight = require_lib2();
      var deprecationWarningShown = false;
      function getDefs(chalk5) {
        return {
          gutter: chalk5.grey,
          marker: chalk5.red.bold,
          message: chalk5.red.bold
        };
      }
      var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
      function getMarkerLines(loc, source, opts) {
        const startLoc = Object.assign({
          column: 0,
          line: -1
        }, loc.start);
        const endLoc = Object.assign({}, startLoc, loc.end);
        const {
          linesAbove = 2,
          linesBelow = 3
        } = opts || {};
        const startLine = startLoc.line;
        const startColumn = startLoc.column;
        const endLine = endLoc.line;
        const endColumn = endLoc.column;
        let start = Math.max(startLine - (linesAbove + 1), 0);
        let end = Math.min(source.length, endLine + linesBelow);
        if (startLine === -1) {
          start = 0;
        }
        if (endLine === -1) {
          end = source.length;
        }
        const lineDiff = endLine - startLine;
        const markerLines = {};
        if (lineDiff) {
          for (let i = 0; i <= lineDiff; i++) {
            const lineNumber = i + startLine;
            if (!startColumn) {
              markerLines[lineNumber] = true;
            } else if (i === 0) {
              const sourceLength = source[lineNumber - 1].length;
              markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
            } else if (i === lineDiff) {
              markerLines[lineNumber] = [0, endColumn];
            } else {
              const sourceLength = source[lineNumber - i].length;
              markerLines[lineNumber] = [0, sourceLength];
            }
          }
        } else {
          if (startColumn === endColumn) {
            if (startColumn) {
              markerLines[startLine] = [startColumn, 0];
            } else {
              markerLines[startLine] = true;
            }
          } else {
            markerLines[startLine] = [startColumn, endColumn - startColumn];
          }
        }
        return {
          start,
          end,
          markerLines
        };
      }
      function codeFrameColumns2(rawLines, loc, opts = {}) {
        const highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight.shouldHighlight)(opts);
        const chalk5 = (0, _highlight.getChalk)(opts);
        const defs = getDefs(chalk5);
        const maybeHighlight = (chalkFn, string) => {
          return highlighted ? chalkFn(string) : string;
        };
        const lines = rawLines.split(NEWLINE);
        const {
          start,
          end,
          markerLines
        } = getMarkerLines(loc, lines, opts);
        const hasColumns = loc.start && typeof loc.start.column === "number";
        const numberMaxWidth = String(end).length;
        const highlightedLines = highlighted ? (0, _highlight.default)(rawLines, opts) : rawLines;
        let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index) => {
          const number = start + 1 + index;
          const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
          const gutter = ` ${paddedNumber} |`;
          const hasMarker = markerLines[number];
          const lastMarkerLine = !markerLines[number + 1];
          if (hasMarker) {
            let markerLine = "";
            if (Array.isArray(hasMarker)) {
              const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
              const numberOfMarkers = hasMarker[1] || 1;
              markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), " ", markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");
              if (lastMarkerLine && opts.message) {
                markerLine += " " + maybeHighlight(defs.message, opts.message);
              }
            }
            return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
          } else {
            return ` ${maybeHighlight(defs.gutter, gutter)}${line.length > 0 ? ` ${line}` : ""}`;
          }
        }).join("\n");
        if (opts.message && !hasColumns) {
          frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}
${frame}`;
        }
        if (highlighted) {
          return chalk5.reset(frame);
        } else {
          return frame;
        }
      }
      function _default(rawLines, lineNumber, colNumber, opts = {}) {
        if (!deprecationWarningShown) {
          deprecationWarningShown = true;
          const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
          if (process.emitWarning) {
            process.emitWarning(message, "DeprecationWarning");
          } else {
            const deprecationError = new Error(message);
            deprecationError.name = "DeprecationWarning";
            console.warn(new Error(message));
          }
        }
        colNumber = Math.max(colNumber, 0);
        const location = {
          start: {
            column: colNumber,
            line: lineNumber
          }
        };
        return codeFrameColumns2(rawLines, location, opts);
      }
    }
  });

  // node_modules/leven/index.js
  var require_leven = __commonJS({
    "node_modules/leven/index.js"(exports, module) {
      init_globals();
      var array = [];
      var charCodeCache = [];
      var leven2 = (left, right) => {
        if (left === right) {
          return 0;
        }
        const swap = left;
        if (left.length > right.length) {
          left = right;
          right = swap;
        }
        let leftLength = left.length;
        let rightLength = right.length;
        while (leftLength > 0 && left.charCodeAt(~-leftLength) === right.charCodeAt(~-rightLength)) {
          leftLength--;
          rightLength--;
        }
        let start = 0;
        while (start < leftLength && left.charCodeAt(start) === right.charCodeAt(start)) {
          start++;
        }
        leftLength -= start;
        rightLength -= start;
        if (leftLength === 0) {
          return rightLength;
        }
        let bCharCode;
        let result;
        let temp;
        let temp2;
        let i = 0;
        let j = 0;
        while (i < leftLength) {
          charCodeCache[i] = left.charCodeAt(start + i);
          array[i] = ++i;
        }
        while (j < rightLength) {
          bCharCode = right.charCodeAt(start + j);
          temp = j++;
          result = j;
          for (i = 0; i < leftLength; i++) {
            temp2 = bCharCode === charCodeCache[i] ? temp : temp + 1;
            temp = array[i];
            result = array[i] = temp > result ? temp2 > result ? result + 1 : temp2 : temp2 > temp ? temp + 1 : temp2;
          }
        }
        return result;
      };
      module.exports = leven2;
      module.exports.default = leven2;
    }
  });

  // node_modules/jsonpointer/jsonpointer.js
  var require_jsonpointer = __commonJS({
    "node_modules/jsonpointer/jsonpointer.js"(exports) {
      init_globals();
      var hasExcape = /~/;
      var escapeMatcher = /~[01]/g;
      function escapeReplacer(m) {
        switch (m) {
          case "~1":
            return "/";
          case "~0":
            return "~";
        }
        throw new Error("Invalid tilde escape: " + m);
      }
      function untilde(str) {
        if (!hasExcape.test(str))
          return str;
        return str.replace(escapeMatcher, escapeReplacer);
      }
      function setter(obj, pointer2, value) {
        var part;
        var hasNextPart;
        for (var p = 1, len = pointer2.length; p < len; ) {
          if (pointer2[p] === "constructor" || pointer2[p] === "prototype" || pointer2[p] === "__proto__")
            return obj;
          part = untilde(pointer2[p++]);
          hasNextPart = len > p;
          if (typeof obj[part] === "undefined") {
            if (Array.isArray(obj) && part === "-") {
              part = obj.length;
            }
            if (hasNextPart) {
              if (pointer2[p] !== "" && pointer2[p] < Infinity || pointer2[p] === "-")
                obj[part] = [];
              else
                obj[part] = {};
            }
          }
          if (!hasNextPart)
            break;
          obj = obj[part];
        }
        var oldValue = obj[part];
        if (value === void 0)
          delete obj[part];
        else
          obj[part] = value;
        return oldValue;
      }
      function compilePointer(pointer2) {
        if (typeof pointer2 === "string") {
          pointer2 = pointer2.split("/");
          if (pointer2[0] === "")
            return pointer2;
          throw new Error("Invalid JSON pointer.");
        } else if (Array.isArray(pointer2)) {
          for (const part of pointer2) {
            if (typeof part !== "string" && typeof part !== "number") {
              throw new Error("Invalid JSON pointer. Must be of type string or number.");
            }
          }
          return pointer2;
        }
        throw new Error("Invalid JSON pointer.");
      }
      function get(obj, pointer2) {
        if (typeof obj !== "object")
          throw new Error("Invalid input object.");
        pointer2 = compilePointer(pointer2);
        var len = pointer2.length;
        if (len === 1)
          return obj;
        for (var p = 1; p < len; ) {
          obj = obj[untilde(pointer2[p++])];
          if (len === p)
            return obj;
          if (typeof obj !== "object")
            return void 0;
        }
      }
      function set(obj, pointer2, value) {
        if (typeof obj !== "object")
          throw new Error("Invalid input object.");
        pointer2 = compilePointer(pointer2);
        if (pointer2.length === 0)
          throw new Error("Invalid JSON pointer for set.");
        return setter(obj, pointer2, value);
      }
      function compile(pointer2) {
        var compiled = compilePointer(pointer2);
        return {
          get: function(object) {
            return get(object, compiled);
          },
          set: function(object, value) {
            return set(object, compiled, value);
          }
        };
      }
      exports.get = get;
      exports.set = set;
      exports.compile = compile;
    }
  });

  // gen/items/zotero.json
  var require_zotero = __commonJS({
    "gen/items/zotero.json"(exports, module) {
      module.exports = {
        type: "object",
        discriminator: {
          propertyName: "itemType"
        },
        required: [
          "itemType"
        ],
        oneOf: [
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "annotation"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "artwork"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              artworkMedium: {
                type: "string"
              },
              artworkSize: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "attachment"
              },
              accessDate: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "audioRecording"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioRecordingFormat: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              label: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "bill"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              billNumber: {
                type: "string"
              },
              code: {
                type: "string"
              },
              codePages: {
                type: "string"
              },
              codeVolume: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              legislativeBody: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "blogPost"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              blogTitle: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              websiteType: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "book"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              numberOfVolumes: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "bookSection"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              bookTitle: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "case"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              caseName: {
                type: "string"
              },
              court: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateDecided: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              docketNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              firstPage: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              reporter: {
                type: "string"
              },
              reporterVolume: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "classic"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "computerProgram"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              company: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              programmingLanguage: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              system: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "conferencePaper"
              },
              DOI: {
                type: "string"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              conferenceName: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              proceedingsTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "dictionaryEntry"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              dictionaryTitle: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "document"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "email"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              subject: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "encyclopediaArticle"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              encyclopediaTitle: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "film"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              distributor: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              genre: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "forumPost"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              forumTitle: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              postType: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "gazette"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "hearing"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              committee: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              documentNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              legislativeBody: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "instantMessage"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "interview"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              interviewMedium: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "journalArticle"
              },
              DOI: {
                type: "string"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              journalAbbreviation: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesText: {
                type: "string"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "legalCommentary"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "letter"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              letterType: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "magazineArticle"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "manuscript"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              manuscriptType: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "map"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              mapType: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              scale: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "newspaperArticle"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "note"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              note: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "patent"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              applicationNumber: {
                type: "string"
              },
              assignee: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              country: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              filingDate: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issueDate: {
                type: "string"
              },
              issuingAuthority: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              legalStatus: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              patentNumber: {
                type: "string"
              },
              place: {
                type: "string"
              },
              priorityNumbers: {
                type: "string"
              },
              references: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "podcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioFileType: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "preprint"
              },
              DOI: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveID: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              citationKey: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              genre: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              repository: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "presentation"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              meetingName: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              presentationType: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "radioBroadcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioRecordingFormat: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              network: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              place: {
                type: "string"
              },
              programTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "regulation"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "report"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              institution: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              reportNumber: {
                type: "string"
              },
              reportType: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "standard"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "statute"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              code: {
                type: "string"
              },
              codeNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateEnacted: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              nameOfAct: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              publicLawNumber: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "thesis"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              thesisType: {
                type: "string"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              university: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "treaty"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "tvBroadcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              network: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              place: {
                type: "string"
              },
              programTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "videoRecording"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              studio: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "webpage"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              websiteTitle: {
                type: "string"
              },
              websiteType: {
                type: "string"
              }
            }
          }
        ],
        $defs: {
          attachments: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                path: {
                  type: "string"
                },
                accessDate: {
                  type: "string"
                },
                contentType: {
                  type: "string"
                },
                itemType: {
                  type: "string"
                },
                mimeType: {
                  type: "string"
                },
                key: {
                  type: "string"
                },
                linkMode: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                uri: {
                  type: "string"
                },
                url: {
                  type: "string"
                }
              }
            }
          },
          creators: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                creatorType: {
                  type: "string"
                },
                firstName: {
                  type: "string"
                },
                lastName: {
                  type: "string"
                },
                fieldMode: {
                  type: "number"
                },
                multi: {
                  type: "object"
                }
              }
            }
          },
          notes: {
            type: "array",
            items: {
              type: "string"
            }
          },
          tags: {
            type: "array",
            items: {
              oneOf: [
                {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    tag: {
                      type: "string"
                    },
                    type: {
                      type: "number"
                    }
                  },
                  required: [
                    "tag"
                  ]
                },
                {
                  type: "string"
                }
              ]
            }
          },
          edition: {
            oneOf: [
              {
                type: "string"
              },
              {
                type: "number"
              }
            ]
          },
          multi: {
            type: "object"
          },
          seeAlso: {
            type: "array"
          }
        }
      };
    }
  });

  // gen/items/jurism.json
  var require_jurism = __commonJS({
    "gen/items/jurism.json"(exports, module) {
      module.exports = {
        type: "object",
        discriminator: {
          propertyName: "itemType"
        },
        required: [
          "itemType"
        ],
        oneOf: [
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "annotation"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "artwork"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              artworkMedium: {
                type: "string"
              },
              artworkSize: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              websiteTitle: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "attachment"
              },
              accessDate: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "audioRecording"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              album: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioRecordingFormat: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              label: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              opus: {
                type: "string"
              },
              originalDate: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              release: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "bill"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              assemblyNumber: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              billNumber: {
                type: "string"
              },
              code: {
                type: "string"
              },
              codePages: {
                type: "string"
              },
              codeVolume: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              legislativeBody: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              reporter: {
                type: "string"
              },
              resolutionLabel: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesNumber: {
                type: "string"
              },
              session: {
                type: "string"
              },
              sessionType: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "blogPost"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              blogTitle: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              websiteType: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "book"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              numberOfVolumes: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              },
              volumeTitle: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "bookSection"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              bookAbbreviation: {
                type: "string"
              },
              bookTitle: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              journalAbbreviation: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              },
              volumeTitle: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "case"
              },
              DOI: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              adminFlag: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              caseName: {
                type: "string"
              },
              court: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateDecided: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              division: {
                type: "string"
              },
              docketNumber: {
                type: "string"
              },
              documentName: {
                type: "string"
              },
              documentNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              filingDate: {
                type: "string"
              },
              firstPage: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationDate: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              reign: {
                type: "string"
              },
              reporter: {
                type: "string"
              },
              reporterVolume: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              supplementName: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              },
              yearAsVolume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "classic"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              manuscriptType: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "computerProgram"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              company: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              programmingLanguage: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              system: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "conferencePaper"
              },
              DOI: {
                type: "string"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              conferenceDate: {
                type: "string"
              },
              conferenceName: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              institution: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              proceedingsTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "dictionaryEntry"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              dictionaryTitle: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "document"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "email"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              subject: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "encyclopediaArticle"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              encyclopediaTitle: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "film"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              distributor: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              genre: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "forumPost"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              forumTitle: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              postType: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "gazette"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              code: {
                type: "string"
              },
              codeNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateEnacted: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              nameOfAct: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              publicLawNumber: {
                type: "string"
              },
              publicationDate: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              regnalYear: {
                type: "string"
              },
              reign: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "hearing"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              assemblyNumber: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              committee: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              documentNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              legislativeBody: {
                type: "string"
              },
              meetingName: {
                type: "string"
              },
              meetingNumber: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              reporter: {
                type: "string"
              },
              resolutionLabel: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesNumber: {
                type: "string"
              },
              session: {
                type: "string"
              },
              sessionType: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "instantMessage"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "interview"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              interviewMedium: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "journalArticle"
              },
              DOI: {
                type: "string"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              journalAbbreviation: {
                type: "string"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesText: {
                type: "string"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              status: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "legalCommentary"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              bookAbbreviation: {
                type: "string"
              },
              bookTitle: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              journalAbbreviation: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              series: {
                type: "string"
              },
              seriesNumber: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              },
              volume: {
                type: "string"
              },
              volumeTitle: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "letter"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              letterType: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "magazineArticle"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issue: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "manuscript"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              manuscriptType: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "map"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              mapType: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              scale: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "newspaperArticle"
              },
              ISSN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              court: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              edition: {
                $ref: "#/$defs/edition"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              newsCaseDate: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "note"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              note: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "patent"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              applicationNumber: {
                type: "string"
              },
              assignee: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              country: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              filingDate: {
                type: "string"
              },
              genre: {
                type: "string"
              },
              id: {
                type: "string"
              },
              issueDate: {
                type: "string"
              },
              issuingAuthority: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              legalStatus: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              patentNumber: {
                type: "string"
              },
              place: {
                type: "string"
              },
              priorityDate: {
                type: "string"
              },
              priorityNumbers: {
                type: "string"
              },
              publicationDate: {
                type: "string"
              },
              publicationNumber: {
                type: "string"
              },
              references: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "podcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioFileType: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "preprint"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              tags: {
                $ref: "#/$defs/tags"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "presentation"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveCollection: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              meetingName: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              place: {
                type: "string"
              },
              presentationType: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "radioBroadcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              audioRecordingFormat: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              network: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              place: {
                type: "string"
              },
              programTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "regulation"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              code: {
                type: "string"
              },
              codeNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateEnacted: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              gazetteFlag: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              legislativeBody: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              nameOfAct: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              publicLawNumber: {
                type: "string"
              },
              publicationDate: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              regulationType: {
                type: "string"
              },
              regulatoryBody: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "report"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              assemblyNumber: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              bookTitle: {
                type: "string"
              },
              callNumber: {
                type: "string"
              },
              committee: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              institution: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              reportNumber: {
                type: "string"
              },
              reportType: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesNumber: {
                type: "string"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              status: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "standard"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "statute"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              code: {
                type: "string"
              },
              codeNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateAmended: {
                type: "string"
              },
              dateEnacted: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              gazetteFlag: {
                type: "string"
              },
              history: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              jurisdiction: {
                type: "string"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              nameOfAct: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              originalDate: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              publicLawNumber: {
                type: "string"
              },
              publicationDate: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              regnalYear: {
                type: "string"
              },
              reign: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              session: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "thesis"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numPages: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              thesisType: {
                type: "string"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              university: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "treaty"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              adoptionDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              openingDate: {
                type: "string"
              },
              pages: {
                type: "string"
              },
              parentTreaty: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              reporter: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              section: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              signingDate: {
                type: "string"
              },
              supplementName: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              treatyNumber: {
                type: "string"
              },
              url: {
                type: "string"
              },
              versionNumber: {
                type: "string"
              },
              volume: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "tvBroadcast"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              episodeNumber: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              network: {
                type: "string"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              number: {
                type: "string"
              },
              place: {
                type: "string"
              },
              programTitle: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "videoRecording"
              },
              ISBN: {
                type: "string"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              archive: {
                type: "string"
              },
              archiveLocation: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              callNumber: {
                type: "string"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              libraryCatalog: {
                type: "string"
              },
              medium: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              numberOfVolumes: {
                type: "string"
              },
              place: {
                type: "string"
              },
              publicationTitle: {
                type: "string"
              },
              publisher: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              runningTime: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              seriesTitle: {
                type: "string"
              },
              shortTitle: {
                type: "string"
              },
              studio: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              url: {
                type: "string"
              },
              videoRecordingFormat: {
                type: "string"
              },
              volume: {
                type: "string"
              },
              websiteTitle: {
                type: "string"
              }
            }
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              itemType: {
                const: "webpage"
              },
              abstractNote: {
                type: "string"
              },
              accessDate: {
                type: "string"
              },
              attachments: {
                $ref: "#/$defs/attachments"
              },
              creators: {
                $ref: "#/$defs/creators"
              },
              date: {
                type: "string"
              },
              dateAdded: {
                type: "string"
              },
              dateModified: {
                type: "string"
              },
              extra: {
                type: "string"
              },
              id: {
                type: "string"
              },
              itemID: {
                type: "number"
              },
              language: {
                type: "string"
              },
              multi: {
                $ref: "#/$defs/multi"
              },
              notes: {
                $ref: "#/$defs/notes"
              },
              publicationTitle: {
                type: "string"
              },
              rights: {
                type: "string"
              },
              seeAlso: {
                $ref: "#/$defs/seeAlso"
              },
              shortTitle: {
                type: "string"
              },
              tags: {
                $ref: "#/$defs/tags"
              },
              title: {
                type: "string"
              },
              type: {
                type: "string"
              },
              url: {
                type: "string"
              },
              websiteTitle: {
                type: "string"
              },
              websiteType: {
                type: "string"
              }
            }
          }
        ],
        $defs: {
          attachments: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                path: {
                  type: "string"
                },
                accessDate: {
                  type: "string"
                },
                contentType: {
                  type: "string"
                },
                itemType: {
                  type: "string"
                },
                mimeType: {
                  type: "string"
                },
                key: {
                  type: "string"
                },
                linkMode: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                uri: {
                  type: "string"
                },
                url: {
                  type: "string"
                }
              }
            }
          },
          creators: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                creatorType: {
                  type: "string"
                },
                firstName: {
                  type: "string"
                },
                lastName: {
                  type: "string"
                },
                fieldMode: {
                  type: "number"
                },
                multi: {
                  type: "object"
                }
              }
            }
          },
          notes: {
            type: "array",
            items: {
              type: "string"
            }
          },
          tags: {
            type: "array",
            items: {
              oneOf: [
                {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    tag: {
                      type: "string"
                    },
                    type: {
                      type: "number"
                    }
                  },
                  required: [
                    "tag"
                  ]
                },
                {
                  type: "string"
                }
              ]
            }
          },
          edition: {
            oneOf: [
              {
                type: "string"
              },
              {
                type: "number"
              }
            ]
          },
          multi: {
            type: "object"
          },
          seeAlso: {
            type: "array"
          }
        }
      };
    }
  });

  // node_modules/fast-safe-stringify/index.js
  var require_fast_safe_stringify = __commonJS({
    "node_modules/fast-safe-stringify/index.js"(exports, module) {
      init_globals();
      module.exports = stringify2;
      stringify2.default = stringify2;
      stringify2.stable = deterministicStringify;
      stringify2.stableStringify = deterministicStringify;
      var LIMIT_REPLACE_NODE = "[...]";
      var CIRCULAR_REPLACE_NODE = "[Circular]";
      var arr = [];
      var replacerStack = [];
      function defaultOptions() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER
        };
      }
      function stringify2(obj, replacer, spacer, options2) {
        if (typeof options2 === "undefined") {
          options2 = defaultOptions();
        }
        decirc(obj, "", 0, [], void 0, 0, options2);
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function setReplace(replace, val, k, parent) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
        if (propertyDescriptor.get !== void 0) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: replace });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k, replace]);
          }
        } else {
          parent[k] = replace;
          arr.push([parent, k, val]);
        }
      }
      function decirc(val, k, edgeIndex, stack, parent, depth, options2) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          if (typeof options2.depthLimit !== "undefined" && depth > options2.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options2.edgesLimit !== "undefined" && edgeIndex + 1 > options2.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              decirc(val[i], i, i, stack, val, depth, options2);
            }
          } else {
            var keys = Object.keys(val);
            for (i = 0; i < keys.length; i++) {
              var key2 = keys[i];
              decirc(val[key2], key2, i, stack, val, depth, options2);
            }
          }
          stack.pop();
        }
      }
      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer, options2) {
        if (typeof options2 === "undefined") {
          options2 = defaultOptions();
        }
        var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options2) || obj;
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options2) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          try {
            if (typeof val.toJSON === "function") {
              return;
            }
          } catch (_) {
            return;
          }
          if (typeof options2.depthLimit !== "undefined" && depth > options2.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options2.edgesLimit !== "undefined" && edgeIndex + 1 > options2.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              deterministicDecirc(val[i], i, i, stack, val, depth, options2);
            }
          } else {
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for (i = 0; i < keys.length; i++) {
              var key2 = keys[i];
              deterministicDecirc(val[key2], key2, i, stack, val, depth, options2);
              tmp[key2] = val[key2];
            }
            if (typeof parent !== "undefined") {
              arr.push([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack.pop();
        }
      }
      function replaceGetterValues(replacer) {
        replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
          return v;
        };
        return function(key2, val) {
          if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
              var part = replacerStack[i];
              if (part[1] === key2 && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
              }
            }
          }
          return replacer.call(this, key2, val);
        };
      }
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      init_globals();
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(exports, module) {
      init_globals();
      var hasSymbols = require_shams();
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      init_globals();
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      init_globals();
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var slice = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = "[object Function]";
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== "function" || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(that, args.concat(slice.call(arguments)));
          }
        };
        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push("$" + i);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      init_globals();
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/has/src/index.js
  var require_src = __commonJS({
    "node_modules/has/src/index.js"(exports, module) {
      init_globals();
      var bind = require_function_bind();
      module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      init_globals();
      var undefined2;
      var $SyntaxError = SyntaxError;
      var $Function = Function;
      var $TypeError = TypeError;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var getProto = Object.getPrototypeOf || function(x) {
        return x.__proto__;
      };
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind = require_function_bind();
      var hasOwn = require_src();
      var $concat = bind.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
      var $replace = bind.call(Function.call, String.prototype.replace);
      var $strSlice = bind.call(Function.call, String.prototype.slice);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      init_globals();
      var bind = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
      var $max = GetIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind, $call, arguments);
        if ($gOPD && $defineProperty) {
          var desc = $gOPD(func, "length");
          if (desc.configurable) {
            $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      init_globals();
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/is-arguments/index.js"(exports, module) {
      init_globals();
      var hasToStringTag = require_shams2()();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === "[object Arguments]";
      };
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
      };
      var supportsStandardArguments = function() {
        return isStandardArguments(arguments);
      }();
      isStandardArguments.isLegacyArguments = isLegacyArguments;
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }
  });

  // node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/is-generator-function/index.js"(exports, module) {
      init_globals();
      var toStr = Object.prototype.toString;
      var fnToStr = Function.prototype.toString;
      var isFnRegex = /^\s*(?:function)?\*/;
      var hasToStringTag = require_shams2()();
      var getProto = Object.getPrototypeOf;
      var getGeneratorFunc = function() {
        if (!hasToStringTag) {
          return false;
        }
        try {
          return Function("return function*() {}")();
        } catch (e) {
        }
      };
      var GeneratorFunction;
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex.test(fnToStr.call(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr.call(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto) {
          return false;
        }
        if (typeof GeneratorFunction === "undefined") {
          var generatorFunc = getGeneratorFunc();
          GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
        }
        return getProto(fn) === GeneratorFunction;
      };
    }
  });

  // node_modules/foreach/index.js
  var require_foreach = __commonJS({
    "node_modules/foreach/index.js"(exports, module) {
      init_globals();
      var hasOwn = Object.prototype.hasOwnProperty;
      var toString = Object.prototype.toString;
      module.exports = function forEach(obj, fn, ctx) {
        if (toString.call(fn) !== "[object Function]") {
          throw new TypeError("iterator must be a function");
        }
        var l = obj.length;
        if (l === +l) {
          for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
          }
        } else {
          for (var k in obj) {
            if (hasOwn.call(obj, k)) {
              fn.call(ctx, obj[k], k, obj);
            }
          }
        }
      };
    }
  });

  // node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/available-typed-arrays/index.js"(exports, module) {
      init_globals();
      var possibleNames = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ];
      var g = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays() {
        var out = [];
        for (var i = 0; i < possibleNames.length; i++) {
          if (typeof g[possibleNames[i]] === "function") {
            out[out.length] = possibleNames[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
  var require_getOwnPropertyDescriptor = __commonJS({
    "node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
      init_globals();
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/is-typed-array/index.js"(exports, module) {
      init_globals();
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var anyTrue = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!anyTrue) {
            try {
              anyTrue = getter.call(value) === typedArray;
            } catch (e) {
            }
          }
        });
        return anyTrue;
      };
      module.exports = function isTypedArray(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          var tag = $slice($toString(value), 8, -1);
          return $indexOf(typedArrays, tag) > -1;
        }
        if (!gOPD) {
          return false;
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/which-typed-array/index.js"(exports, module) {
      init_globals();
      var forEach = require_foreach();
      var availableTypedArrays = require_available_typed_arrays();
      var callBound = require_callBound();
      var $toString = callBound("Object.prototype.toString");
      var hasToStringTag = require_shams2()();
      var g = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays = availableTypedArrays();
      var $slice = callBound("String.prototype.slice");
      var toStrTags = {};
      var gOPD = require_getOwnPropertyDescriptor();
      var getPrototypeOf = Object.getPrototypeOf;
      if (hasToStringTag && gOPD && getPrototypeOf) {
        forEach(typedArrays, function(typedArray) {
          if (typeof g[typedArray] === "function") {
            var arr = new g[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf(arr);
              var descriptor = gOPD(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
              }
              toStrTags[typedArray] = descriptor.get;
            }
          }
        });
      }
      var tryTypedArrays = function tryAllTypedArrays(value) {
        var foundName = false;
        forEach(toStrTags, function(getter, typedArray) {
          if (!foundName) {
            try {
              var name = getter.call(value);
              if (name === typedArray) {
                foundName = name;
              }
            } catch (e) {
            }
          }
        });
        return foundName;
      };
      var isTypedArray = require_is_typed_array();
      module.exports = function whichTypedArray(value) {
        if (!isTypedArray(value)) {
          return false;
        }
        if (!hasToStringTag || !(Symbol.toStringTag in value)) {
          return $slice($toString(value), 8, -1);
        }
        return tryTypedArrays(value);
      };
    }
  });

  // node_modules/util/support/types.js
  var require_types2 = __commonJS({
    "node_modules/util/support/types.js"(exports) {
      init_globals();
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction = require_is_generator_function();
      var whichTypedArray = require_which_typed_array();
      var isTypedArray = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/util/support/isBufferBrowser.js"(exports, module) {
      init_globals();
      module.exports = function isBuffer(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      init_globals();
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // (disabled):node_modules/util/util.js
  var require_util4 = __commonJS({
    "(disabled):node_modules/util/util.js"(exports) {
      init_globals();
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect2(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%")
            return "%";
          if (i >= len)
            return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect2(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set, pid, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect2(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3)
          ctx.depth = arguments[2];
        if (arguments.length >= 4)
          ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden))
          ctx.showHidden = false;
        if (isUndefined(ctx.depth))
          ctx.depth = 2;
        if (isUndefined(ctx.colors))
          ctx.colors = false;
        if (isUndefined(ctx.customInspect))
          ctx.customInspect = true;
        if (ctx.colors)
          ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect2;
      inspect2.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect2.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect2.styles[styleType];
        if (style) {
          return "\x1B[" + inspect2.colors[style][0] + "m" + str + "\x1B[" + inspect2.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key2) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key2, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key2) {
          if (!key2.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key2, true));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key2, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key2) || { value: value[key2] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key2)) {
          name = "[" + key2 + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").substr(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key2.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key2);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types2();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject(add))
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol)
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
        return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          });
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // node_modules/loupe/loupe.js
  var require_loupe = __commonJS({
    "node_modules/loupe/loupe.js"(exports, module) {
      init_globals();
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.loupe = {}));
      })(exports, function(exports2) {
        "use strict";
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var ansiColors = {
          bold: ["1", "22"],
          dim: ["2", "22"],
          italic: ["3", "23"],
          underline: ["4", "24"],
          inverse: ["7", "27"],
          hidden: ["8", "28"],
          strike: ["9", "29"],
          black: ["30", "39"],
          red: ["31", "39"],
          green: ["32", "39"],
          yellow: ["33", "39"],
          blue: ["34", "39"],
          magenta: ["35", "39"],
          cyan: ["36", "39"],
          white: ["37", "39"],
          brightblack: ["30;1", "39"],
          brightred: ["31;1", "39"],
          brightgreen: ["32;1", "39"],
          brightyellow: ["33;1", "39"],
          brightblue: ["34;1", "39"],
          brightmagenta: ["35;1", "39"],
          brightcyan: ["36;1", "39"],
          brightwhite: ["37;1", "39"],
          grey: ["90", "39"]
        };
        var styles = {
          special: "cyan",
          number: "yellow",
          bigint: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          symbol: "green",
          date: "magenta",
          regexp: "red"
        };
        var truncator = "\u2026";
        function colorise(value, styleType) {
          var color = ansiColors[styles[styleType]] || ansiColors[styleType];
          if (!color) {
            return String(value);
          }
          return "\x1B[".concat(color[0], "m").concat(String(value), "\x1B[").concat(color[1], "m");
        }
        function normaliseOptions() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$showHidden = _ref.showHidden, showHidden = _ref$showHidden === void 0 ? false : _ref$showHidden, _ref$depth = _ref.depth, depth = _ref$depth === void 0 ? 2 : _ref$depth, _ref$colors = _ref.colors, colors = _ref$colors === void 0 ? false : _ref$colors, _ref$customInspect = _ref.customInspect, customInspect = _ref$customInspect === void 0 ? true : _ref$customInspect, _ref$showProxy = _ref.showProxy, showProxy = _ref$showProxy === void 0 ? false : _ref$showProxy, _ref$maxArrayLength = _ref.maxArrayLength, maxArrayLength = _ref$maxArrayLength === void 0 ? Infinity : _ref$maxArrayLength, _ref$breakLength = _ref.breakLength, breakLength = _ref$breakLength === void 0 ? Infinity : _ref$breakLength, _ref$seen = _ref.seen, seen = _ref$seen === void 0 ? [] : _ref$seen, _ref$truncate = _ref.truncate, truncate2 = _ref$truncate === void 0 ? Infinity : _ref$truncate, _ref$stylize = _ref.stylize, stylize = _ref$stylize === void 0 ? String : _ref$stylize;
          var options2 = {
            showHidden: Boolean(showHidden),
            depth: Number(depth),
            colors: Boolean(colors),
            customInspect: Boolean(customInspect),
            showProxy: Boolean(showProxy),
            maxArrayLength: Number(maxArrayLength),
            breakLength: Number(breakLength),
            truncate: Number(truncate2),
            seen,
            stylize
          };
          if (options2.colors) {
            options2.stylize = colorise;
          }
          return options2;
        }
        function truncate(string, length) {
          var tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : truncator;
          string = String(string);
          var tailLength = tail.length;
          var stringLength = string.length;
          if (tailLength > length && stringLength > tailLength) {
            return tail;
          }
          if (stringLength > length && stringLength > tailLength) {
            return "".concat(string.slice(0, length - tailLength)).concat(tail);
          }
          return string;
        }
        function inspectList(list, options2, inspectItem) {
          var separator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
          inspectItem = inspectItem || options2.inspect;
          var size = list.length;
          if (size === 0)
            return "";
          var originalLength = options2.truncate;
          var output = "";
          var peek = "";
          var truncated = "";
          for (var i = 0; i < size; i += 1) {
            var last = i + 1 === list.length;
            var secondToLast = i + 2 === list.length;
            truncated = "".concat(truncator, "(").concat(list.length - i, ")");
            var value = list[i];
            options2.truncate = originalLength - output.length - (last ? 0 : separator.length);
            var string = peek || inspectItem(value, options2) + (last ? "" : separator);
            var nextLength = output.length + string.length;
            var truncatedLength = nextLength + truncated.length;
            if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
              break;
            }
            if (!last && !secondToLast && truncatedLength > originalLength) {
              break;
            }
            peek = last ? "" : inspectItem(list[i + 1], options2) + (secondToLast ? "" : separator);
            if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
              break;
            }
            output += string;
            if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
              truncated = "".concat(truncator, "(").concat(list.length - i - 1, ")");
              break;
            }
            truncated = "";
          }
          return "".concat(output).concat(truncated);
        }
        function quoteComplexKey(key2) {
          if (key2.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
            return key2;
          }
          return JSON.stringify(key2).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        }
        function inspectProperty(_ref2, options2) {
          var _ref3 = _slicedToArray(_ref2, 2), key2 = _ref3[0], value = _ref3[1];
          options2.truncate -= 2;
          if (typeof key2 === "string") {
            key2 = quoteComplexKey(key2);
          } else if (typeof key2 !== "number") {
            key2 = "[".concat(options2.inspect(key2, options2), "]");
          }
          options2.truncate -= key2.length;
          value = options2.inspect(value, options2);
          return "".concat(key2, ": ").concat(value);
        }
        function inspectArray(array, options2) {
          var nonIndexProperties = Object.keys(array).slice(array.length);
          if (!array.length && !nonIndexProperties.length)
            return "[]";
          options2.truncate -= 4;
          var listContents = inspectList(array, options2);
          options2.truncate -= listContents.length;
          var propertyContents = "";
          if (nonIndexProperties.length) {
            propertyContents = inspectList(nonIndexProperties.map(function(key2) {
              return [key2, array[key2]];
            }), options2, inspectProperty);
          }
          return "[ ".concat(listContents).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
        }
        var toString = Function.prototype.toString;
        var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
        function getFuncName(aFunc) {
          if (typeof aFunc !== "function") {
            return null;
          }
          var name = "";
          if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
            var match = toString.call(aFunc).match(functionNameMatch);
            if (match) {
              name = match[1];
            }
          } else {
            name = aFunc.name;
          }
          return name;
        }
        var getFuncName_1 = getFuncName;
        var getArrayName = function getArrayName2(array) {
          if (typeof Buffer === "function" && array instanceof Buffer) {
            return "Buffer";
          }
          if (array[Symbol.toStringTag]) {
            return array[Symbol.toStringTag];
          }
          return getFuncName_1(array.constructor);
        };
        function inspectTypedArray(array, options2) {
          var name = getArrayName(array);
          options2.truncate -= name.length + 4;
          var nonIndexProperties = Object.keys(array).slice(array.length);
          if (!array.length && !nonIndexProperties.length)
            return "".concat(name, "[]");
          var output = "";
          for (var i = 0; i < array.length; i++) {
            var string = "".concat(options2.stylize(truncate(array[i], options2.truncate), "number")).concat(i === array.length - 1 ? "" : ", ");
            options2.truncate -= string.length;
            if (array[i] !== array.length && options2.truncate <= 3) {
              output += "".concat(truncator, "(").concat(array.length - array[i] + 1, ")");
              break;
            }
            output += string;
          }
          var propertyContents = "";
          if (nonIndexProperties.length) {
            propertyContents = inspectList(nonIndexProperties.map(function(key2) {
              return [key2, array[key2]];
            }), options2, inspectProperty);
          }
          return "".concat(name, "[ ").concat(output).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
        }
        function inspectDate(dateObject, options2) {
          var split = dateObject.toJSON().split("T");
          var date = split[0];
          return options2.stylize("".concat(date, "T").concat(truncate(split[1], options2.truncate - date.length - 1)), "date");
        }
        function inspectFunction(func, options2) {
          var name = getFuncName_1(func);
          if (!name) {
            return options2.stylize("[Function]", "special");
          }
          return options2.stylize("[Function ".concat(truncate(name, options2.truncate - 11), "]"), "special");
        }
        function inspectMapEntry(_ref, options2) {
          var _ref2 = _slicedToArray(_ref, 2), key2 = _ref2[0], value = _ref2[1];
          options2.truncate -= 4;
          key2 = options2.inspect(key2, options2);
          options2.truncate -= key2.length;
          value = options2.inspect(value, options2);
          return "".concat(key2, " => ").concat(value);
        }
        function mapToEntries(map) {
          var entries = [];
          map.forEach(function(value, key2) {
            entries.push([key2, value]);
          });
          return entries;
        }
        function inspectMap(map, options2) {
          var size = map.size - 1;
          if (size <= 0) {
            return "Map{}";
          }
          options2.truncate -= 7;
          return "Map{ ".concat(inspectList(mapToEntries(map), options2, inspectMapEntry), " }");
        }
        var isNaN2 = Number.isNaN || function(i) {
          return i !== i;
        };
        function inspectNumber(number, options2) {
          if (isNaN2(number)) {
            return options2.stylize("NaN", "number");
          }
          if (number === Infinity) {
            return options2.stylize("Infinity", "number");
          }
          if (number === -Infinity) {
            return options2.stylize("-Infinity", "number");
          }
          if (number === 0) {
            return options2.stylize(1 / number === Infinity ? "+0" : "-0", "number");
          }
          return options2.stylize(truncate(number, options2.truncate), "number");
        }
        function inspectBigInt(number, options2) {
          var nums = truncate(number.toString(), options2.truncate - 1);
          if (nums !== truncator)
            nums += "n";
          return options2.stylize(nums, "bigint");
        }
        function inspectRegExp(value, options2) {
          var flags = value.toString().split("/")[2];
          var sourceLength = options2.truncate - (2 + flags.length);
          var source = value.source;
          return options2.stylize("/".concat(truncate(source, sourceLength), "/").concat(flags), "regexp");
        }
        function arrayFromSet(set) {
          var values = [];
          set.forEach(function(value) {
            values.push(value);
          });
          return values;
        }
        function inspectSet(set, options2) {
          if (set.size === 0)
            return "Set{}";
          options2.truncate -= 7;
          return "Set{ ".concat(inspectList(arrayFromSet(set), options2), " }");
        }
        var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
        var escapeCharacters = {
          "\b": "\\b",
          "	": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          "'": "\\'",
          "\\": "\\\\"
        };
        var hex = 16;
        var unicodeLength = 4;
        function escape(char) {
          return escapeCharacters[char] || "\\u".concat("0000".concat(char.charCodeAt(0).toString(hex)).slice(-unicodeLength));
        }
        function inspectString(string, options2) {
          if (stringEscapeChars.test(string)) {
            string = string.replace(stringEscapeChars, escape);
          }
          return options2.stylize("'".concat(truncate(string, options2.truncate - 2), "'"), "string");
        }
        function inspectSymbol(value) {
          if ("description" in Symbol.prototype) {
            return value.description ? "Symbol(".concat(value.description, ")") : "Symbol()";
          }
          return value.toString();
        }
        var getPromiseValue = function getPromiseValue2() {
          return "Promise{\u2026}";
        };
        try {
          var _process$binding = process.binding("util"), getPromiseDetails = _process$binding.getPromiseDetails, kPending = _process$binding.kPending, kRejected = _process$binding.kRejected;
          if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
            getPromiseValue = function getPromiseValue2(value, options2) {
              var _getPromiseDetails = getPromiseDetails(value), _getPromiseDetails2 = _slicedToArray(_getPromiseDetails, 2), state = _getPromiseDetails2[0], innerValue = _getPromiseDetails2[1];
              if (state === kPending) {
                return "Promise{<pending>}";
              }
              return "Promise".concat(state === kRejected ? "!" : "", "{").concat(options2.inspect(innerValue, options2), "}");
            };
          }
        } catch (notNode) {
        }
        var inspectPromise = getPromiseValue;
        function inspectObject(object, options2) {
          var properties = Object.getOwnPropertyNames(object);
          var symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : [];
          if (properties.length === 0 && symbols.length === 0) {
            return "{}";
          }
          options2.truncate -= 4;
          options2.seen = options2.seen || [];
          if (options2.seen.indexOf(object) >= 0) {
            return "[Circular]";
          }
          options2.seen.push(object);
          var propertyContents = inspectList(properties.map(function(key2) {
            return [key2, object[key2]];
          }), options2, inspectProperty);
          var symbolContents = inspectList(symbols.map(function(key2) {
            return [key2, object[key2]];
          }), options2, inspectProperty);
          options2.seen.pop();
          var sep = "";
          if (propertyContents && symbolContents) {
            sep = ", ";
          }
          return "{ ".concat(propertyContents).concat(sep).concat(symbolContents, " }");
        }
        var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
        function inspectClass(value, options2) {
          var name = "";
          if (toStringTag && toStringTag in value) {
            name = value[toStringTag];
          }
          name = name || getFuncName_1(value.constructor);
          if (!name || name === "_class") {
            name = "<Anonymous Class>";
          }
          options2.truncate -= name.length;
          return "".concat(name).concat(inspectObject(value, options2));
        }
        function inspectArguments(args, options2) {
          if (args.length === 0)
            return "Arguments[]";
          options2.truncate -= 13;
          return "Arguments[ ".concat(inspectList(args, options2), " ]");
        }
        var errorKeys = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
        function inspectObject$1(error, options2) {
          var properties = Object.getOwnPropertyNames(error).filter(function(key2) {
            return errorKeys.indexOf(key2) === -1;
          });
          var name = error.name;
          options2.truncate -= name.length;
          var message = "";
          if (typeof error.message === "string") {
            message = truncate(error.message, options2.truncate);
          } else {
            properties.unshift("message");
          }
          message = message ? ": ".concat(message) : "";
          options2.truncate -= message.length + 5;
          var propertyContents = inspectList(properties.map(function(key2) {
            return [key2, error[key2]];
          }), options2, inspectProperty);
          return "".concat(name).concat(message).concat(propertyContents ? " { ".concat(propertyContents, " }") : "");
        }
        function inspectAttribute(_ref, options2) {
          var _ref2 = _slicedToArray(_ref, 2), key2 = _ref2[0], value = _ref2[1];
          options2.truncate -= 3;
          if (!value) {
            return "".concat(options2.stylize(key2, "yellow"));
          }
          return "".concat(options2.stylize(key2, "yellow"), "=").concat(options2.stylize('"'.concat(value, '"'), "string"));
        }
        function inspectHTMLCollection(collection, options2) {
          return inspectList(collection, options2, inspectHTML, "\n");
        }
        function inspectHTML(element, options2) {
          var properties = element.getAttributeNames();
          var name = element.tagName.toLowerCase();
          var head = options2.stylize("<".concat(name), "special");
          var headClose = options2.stylize(">", "special");
          var tail = options2.stylize("</".concat(name, ">"), "special");
          options2.truncate -= name.length * 2 + 5;
          var propertyContents = "";
          if (properties.length > 0) {
            propertyContents += " ";
            propertyContents += inspectList(properties.map(function(key2) {
              return [key2, element.getAttribute(key2)];
            }), options2, inspectAttribute, " ");
          }
          options2.truncate -= propertyContents.length;
          var truncate2 = options2.truncate;
          var children = inspectHTMLCollection(element.children, options2);
          if (children && children.length > truncate2) {
            children = "".concat(truncator, "(").concat(element.children.length, ")");
          }
          return "".concat(head).concat(propertyContents).concat(headClose).concat(children).concat(tail);
        }
        var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
        var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
        var nodeInspect = false;
        try {
          var nodeUtil = require_util4();
          nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
        } catch (noNodeInspect) {
          nodeInspect = false;
        }
        var constructorMap = /* @__PURE__ */ new WeakMap();
        var stringTagMap = {};
        var baseTypesMap = {
          undefined: function undefined$1(value, options2) {
            return options2.stylize("undefined", "undefined");
          },
          null: function _null(value, options2) {
            return options2.stylize(null, "null");
          },
          boolean: function boolean(value, options2) {
            return options2.stylize(value, "boolean");
          },
          Boolean: function Boolean2(value, options2) {
            return options2.stylize(value, "boolean");
          },
          number: inspectNumber,
          Number: inspectNumber,
          bigint: inspectBigInt,
          BigInt: inspectBigInt,
          string: inspectString,
          String: inspectString,
          function: inspectFunction,
          Function: inspectFunction,
          symbol: inspectSymbol,
          Symbol: inspectSymbol,
          Array: inspectArray,
          Date: inspectDate,
          Map: inspectMap,
          Set: inspectSet,
          RegExp: inspectRegExp,
          Promise: inspectPromise,
          WeakSet: function WeakSet2(value, options2) {
            return options2.stylize("WeakSet{\u2026}", "special");
          },
          WeakMap: function WeakMap2(value, options2) {
            return options2.stylize("WeakMap{\u2026}", "special");
          },
          Arguments: inspectArguments,
          Int8Array: inspectTypedArray,
          Uint8Array: inspectTypedArray,
          Uint8ClampedArray: inspectTypedArray,
          Int16Array: inspectTypedArray,
          Uint16Array: inspectTypedArray,
          Int32Array: inspectTypedArray,
          Uint32Array: inspectTypedArray,
          Float32Array: inspectTypedArray,
          Float64Array: inspectTypedArray,
          Generator: function Generator() {
            return "";
          },
          DataView: function DataView2() {
            return "";
          },
          ArrayBuffer: function ArrayBuffer2() {
            return "";
          },
          Error: inspectObject$1,
          HTMLCollection: inspectHTMLCollection,
          NodeList: inspectHTMLCollection
        };
        var inspectCustom = function inspectCustom2(value, options2, type) {
          if (chaiInspect in value && typeof value[chaiInspect] === "function") {
            return value[chaiInspect](options2);
          }
          if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
            return value[nodeInspect](options2.depth, options2);
          }
          if ("inspect" in value && typeof value.inspect === "function") {
            return value.inspect(options2.depth, options2);
          }
          if ("constructor" in value && constructorMap.has(value.constructor)) {
            return constructorMap.get(value.constructor)(value, options2);
          }
          if (stringTagMap[type]) {
            return stringTagMap[type](value, options2);
          }
          return "";
        };
        var toString$1 = Object.prototype.toString;
        function inspect2(value, options2) {
          options2 = normaliseOptions(options2);
          options2.inspect = inspect2;
          var _options = options2, customInspect = _options.customInspect;
          var type = value === null ? "null" : _typeof(value);
          if (type === "object") {
            type = toString$1.call(value).slice(8, -1);
          }
          if (baseTypesMap[type]) {
            return baseTypesMap[type](value, options2);
          }
          if (customInspect && value) {
            var output = inspectCustom(value, options2, type);
            if (output) {
              if (typeof output === "string")
                return output;
              return inspect2(output, options2);
            }
          }
          var proto = value ? Object.getPrototypeOf(value) : false;
          if (proto === Object.prototype || proto === null) {
            return inspectObject(value, options2);
          }
          if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
            return inspectHTML(value, options2);
          }
          if ("constructor" in value) {
            if (value.constructor !== Object) {
              return inspectClass(value, options2);
            }
            return inspectObject(value, options2);
          }
          if (value === Object(value)) {
            return inspectObject(value, options2);
          }
          return options2.stylize(String(value), type);
        }
        function registerConstructor(constructor, inspector) {
          if (constructorMap.has(constructor)) {
            return false;
          }
          constructorMap.add(constructor, inspector);
          return true;
        }
        function registerStringTag(stringTag, inspector) {
          if (stringTag in stringTagMap) {
            return false;
          }
          stringTagMap[stringTag] = inspector;
          return true;
        }
        var custom = chaiInspect;
        exports2.custom = custom;
        exports2.default = inspect2;
        exports2.inspect = inspect2;
        exports2.registerConstructor = registerConstructor;
        exports2.registerStringTag = registerStringTag;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // gen/version.js
  var require_version = __commonJS({
    "gen/version.js"(exports, module) {
      init_globals();
      module.exports = "6.7.15";
    }
  });

  // translators/BetterBibTeX JSON.ts
  var BetterBibTeX_JSON_exports = {};
  __export(BetterBibTeX_JSON_exports, {
    Translator: () => Translator,
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
  });
  init_globals();

  // translators/lib/translator.ts
  init_globals();

  // gen/preferences/meta.ts
  init_globals();
  var names = [
    "ascii",
    "asciiBibLaTeX",
    "asciiBibTeX",
    "autoAbbrev",
    "autoAbbrevStyle",
    "autoExport",
    "autoExportDelay",
    "autoExportIdleWait",
    "autoExportPathReplaceDiacritics",
    "autoExportPathReplaceDirSep",
    "autoExportPathReplaceSpace",
    "automaticTags",
    "autoPinDelay",
    "auxImport",
    "baseAttachmentPath",
    "biblatexExtendedDateFormat",
    "biblatexExtendedNameFormat",
    "biblatexExtractEprint",
    "bibtexParticleNoOp",
    "bibtexURL",
    "cache",
    "cacheFlushInterval",
    "charmap",
    "citeCommand",
    "citekeyFold",
    "citekeyFormat",
    "citekeyFormatBackup",
    "citekeySearch",
    "csquotes",
    "DOIandURL",
    "exportBibTeXStrings",
    "exportBraceProtection",
    "exportTitleCase",
    "extraMergeCitekeys",
    "extraMergeCSL",
    "extraMergeTeX",
    "git",
    "import",
    "importBibTeXStrings",
    "importCaseProtection",
    "importCitationKey",
    "importExtra",
    "importJabRefAbbreviations",
    "importJabRefStrings",
    "importNoteToExtra",
    "importSentenceCase",
    "importUnknownTexCommand",
    "itemObserverDelay",
    "jabrefFormat",
    "jieba",
    "keyConflictPolicy",
    "keyScope",
    "kuroshiro",
    "language",
    "mapMath",
    "mapText",
    "mapUnicode",
    "parseParticles",
    "patchDates",
    "platform",
    "postscript",
    "postscriptOverride",
    "preferencesOverride",
    "qualityReport",
    "quickCopyEta",
    "quickCopyMode",
    "quickCopyOrgMode",
    "quickCopyPandocBrackets",
    "quickCopySelectLink",
    "rawImports",
    "rawLaTag",
    "relativeFilePaths",
    "retainCache",
    "scrubDatabase",
    "separatorList",
    "separatorNames",
    "skipFields",
    "skipWords",
    "startupProgress",
    "strings",
    "stringsOverride",
    "testing",
    "verbatimFields",
    "warnBulkModify",
    "warnTitleCased",
    "worker"
  ];
  var affects = {
    ascii: ["Better BibLaTeX", "Better BibTeX"],
    asciiBibLaTeX: ["Better BibLaTeX"],
    asciiBibTeX: ["Better BibTeX"],
    autoAbbrev: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    autoAbbrevStyle: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    automaticTags: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    baseAttachmentPath: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    biblatexExtendedDateFormat: ["Better BibLaTeX"],
    biblatexExtendedNameFormat: ["Better BibLaTeX"],
    biblatexExtractEprint: ["Better BibLaTeX", "Better BibTeX"],
    bibtexParticleNoOp: ["Better BibTeX"],
    bibtexURL: ["Better BibTeX"],
    cache: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    charmap: ["Better BibLaTeX", "Better BibTeX"],
    csquotes: ["Better BibLaTeX", "Better BibTeX"],
    DOIandURL: ["Better BibLaTeX", "Better BibTeX"],
    exportBibTeXStrings: ["Better BibLaTeX", "Better BibTeX"],
    exportBraceProtection: ["Better BibLaTeX", "Better BibTeX"],
    exportTitleCase: ["Better BibLaTeX", "Better BibTeX"],
    jabrefFormat: ["Better BibLaTeX", "Better BibTeX"],
    language: ["Better BibLaTeX", "Better BibTeX"],
    mapMath: ["Better BibLaTeX", "Better BibTeX"],
    mapText: ["Better BibLaTeX", "Better BibTeX"],
    mapUnicode: ["Better BibLaTeX", "Better BibTeX"],
    parseParticles: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    postscript: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    qualityReport: ["Better BibLaTeX", "Better BibTeX"],
    rawLaTag: ["Better BibLaTeX", "Better BibTeX"],
    relativeFilePaths: ["Better BibLaTeX", "Better BibTeX"],
    separatorList: ["Better BibLaTeX", "Better BibTeX"],
    separatorNames: ["Better BibLaTeX", "Better BibTeX"],
    skipFields: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    skipWords: ["Better BibLaTeX", "Better BibTeX"],
    strings: ["Better BibLaTeX", "Better BibTeX"]
  };
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: false,
    biblatexExtractEprint: true,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheFlushInterval: 5,
    charmap: "",
    citeCommand: "cite",
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatBackup: "",
    citekeySearch: true,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    mapMath: "",
    mapText: "",
    mapUnicode: "conservative",
    parseParticles: true,
    patchDates: "",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/",
    warnBulkModify: 10,
    warnTitleCased: false,
    worker: true
  };
  var schema = {
    autoExport: {
      preferences: ["asciiBibLaTeX", "asciiBibTeX", "biblatexExtendedNameFormat", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
      displayOptions: ["useJournalAbbreviation", "exportNotes"]
    },
    translator: {
      "Better CSL JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      },
      "Better BibLaTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f895aa0d-f28e-47fe-b247-2ea77c6ed583"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibLaTeX", "biblatexExtendedNameFormat", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      },
      "Better BibTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "ca65189f-8815-4afe-8c8b-8c7c15f0edca"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibTeX", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      },
      "BetterBibTeX JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "36a3b0b5-bad0-4a04-b79b-441c7cef77db"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes"
          ]
        },
        cache: false,
        preferences: [],
        displayOptions: ["exportNotes"]
      },
      "Better CSL YAML": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "0f238e69-043e-4882-93bf-342de007de19"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      }
    }
  };

  // content/client.ts
  init_globals();
  if (typeof Components !== "undefined")
    Components.utils.import("resource://zotero/config.js");
  var client = typeof Zotero !== "undefined" ? ZOTERO_CONFIG.GUID.replace(/@.*/, "").replace("-", "") : "zotero";

  // content/ping.ts
  init_globals();
  var Pinger = class {
    constructor({ start = 0, total, step = 5, name = "", callback }) {
      this.incr = 100 / total;
      this.name = name;
      this.pct = start * this.incr;
      this.step = step;
      this.callback = callback;
      this.next = Math.floor(this.pct / step) * step;
      if (this.name)
        Zotero.debug(`ping: ${name} start ${JSON.stringify({ ...this, start, total })}`);
      this.emit();
    }
    update() {
      this.pct += this.incr;
      if (this.name)
        Zotero.debug(`ping: ${this.name} update to ${this.pct}`);
      if (Math.round(this.pct) >= this.next)
        this.emit();
    }
    emit() {
      if (this.callback) {
        if (this.name)
          Zotero.debug(`ping: ${this.name} emit ${Math.min(this.next, 100)}`);
        this.callback(Math.min(this.next, 100));
        if (this.next > 100)
          this.callback = null;
        this.next += this.step;
      }
    }
    done() {
      if (this.name)
        Zotero.debug(`ping: ${this.name} done`);
      if (this.callback && this.pct < this.next)
        this.callback(Math.min(this.next, 100));
    }
  };

  // translators/lib/translator.ts
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
  }();
  var Items = class {
    constructor(cacheable) {
      this.list = [];
      this.map = {};
      let item;
      while (item = Zotero.nextItem()) {
        item.$cacheable = cacheable;
        item.journalAbbreviation = item.journalAbbreviation || item.autoJournalAbbreviation;
        this.list.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      }
      this.list.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
      this.ping = new Pinger({
        total: this.list.length,
        callback: (pct) => Zotero.worker ? Zotero.BetterBibTeX.setProgress(pct) : null
      });
    }
    *items() {
      for (const item of this.list) {
        yield this.current = item;
        this.ping.update();
      }
      this.ping.done();
    }
    *regularitems() {
      for (const item of this.list) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
        this.ping.update();
      }
      this.ping.done();
    }
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  var ITranslator = class {
    constructor() {
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.cacheable = true;
      this.initialized = false;
      const collator = new Intl.Collator("en");
      this.stringCompare = collator.compare.bind(collator);
    }
    get exportDir() {
      this._items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this._items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    init(mode) {
      var _a, _b, _c, _d, _e;
      this[ZOTERO_TRANSLATOR_INFO.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = ZOTERO_TRANSLATOR_INFO.displayOptions || {};
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false)
          this.cacheable = false;
      } catch (err) {
      }
      for (const key2 in this.options) {
        if (typeof this.options[key2] === "boolean") {
          this.options[key2] = Zotero.getOption(key2);
        } else {
          this.options[key2] = !!Zotero.getOption(key2);
        }
      }
      if (mode === "export") {
        this.cache = {
          hits: 0,
          requests: 0
        };
        this.export = {
          dir: Zotero.getOption("exportDir"),
          path: Zotero.getOption("exportPath")
        };
        if ((_a = this.export.dir) == null ? void 0 : _a.endsWith(this.paths.sep))
          this.export.dir = this.export.dir.slice(0, -1);
        this.options.cacheUse = Zotero.getOption("cacheUse");
      }
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a2, _b2;
        acc[pref] = (_b2 = (_a2 = this.getPreferenceOverride(pref)) != null ? _a2 : Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _b2 : dflt;
        return acc;
      }, {});
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      this.skipField = this.skipFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      let m;
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
      if (mode === "export") {
        this.unicode = !this.preferences[`ascii${ZOTERO_TRANSLATOR_INFO.label.replace(/Better /, "")}`];
        if (this.preferences.baseAttachmentPath && (this.export.dir === this.preferences.baseAttachmentPath || ((_b = this.export.dir) == null ? void 0 : _b.startsWith(this.preferences.baseAttachmentPath + this.paths.sep)))) {
          this.preferences.relativeFilePaths = true;
        }
        this.cacheable = this.cacheable && this.preferences.cache && !(this.options.exportFileData || this.preferences.relativeFilePaths || this.preferences.baseAttachmentPath && ((_c = this.export.dir) == null ? void 0 : _c.startsWith(this.preferences.baseAttachmentPath)));
        if (this.BetterTeX) {
          this.preferences.separatorList = this.preferences.separatorList.trim();
          this.preferences.separatorNames = this.preferences.separatorNames.trim();
          this.and = {
            list: {
              re: new RegExp(escapeRegExp(this.preferences.separatorList), "g"),
              repl: ` {${this.preferences.separatorList}} `
            },
            names: {
              re: new RegExp(` ${escapeRegExp(this.preferences.separatorNames)} `, "g"),
              repl: ` {${this.preferences.separatorNames}} `
            }
          };
          this.preferences.separatorList = ` ${this.preferences.separatorList} `;
          this.preferences.separatorNames = ` ${this.preferences.separatorNames} `;
        }
      }
      this.collections = {};
      if (mode === "export" && ((_d = ZOTERO_TRANSLATOR_INFO.configOptions) == null ? void 0 : _d.getCollections) && Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
      if (!this.initialized && mode === "export" && this.preferences.testing && typeof __estrace === "undefined" && ((_e = schema.translator[ZOTERO_TRANSLATOR_INFO.label]) == null ? void 0 : _e.cache)) {
        const ignored = ["testing"];
        this.preferences = new Proxy(this.preferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            var _a2;
            if (property === "toJSON")
              return object[property];
            if (!names.includes(property))
              throw new TypeError(`Unsupported preference ${property}`);
            if (!ignored.includes(property) && !((_a2 = affects[property]) == null ? void 0 : _a2.includes(ZOTERO_TRANSLATOR_INFO.label)))
              throw new TypeError(`Preference ${property} claims not to affect ${ZOTERO_TRANSLATOR_INFO.label}`);
            return object[property];
          }
        });
      }
      this.initialized = true;
    }
    getPreferenceOverride(pref) {
      try {
        const override = Zotero.getOption(`preference_${pref}`);
        if (typeof override !== "undefined")
          this.cacheable = false;
        return override;
      } catch (err) {
        return void 0;
      }
    }
    registerCollection(collection, parent) {
      const key2 = (collection.primary ? collection.primary : collection).key;
      const children = collection.children || collection.descendents || [];
      const collections = children.filter((coll) => coll.type === "collection");
      this.collections[key2] = {
        key: key2,
        parent,
        name: collection.name,
        collections: collections.map((coll) => coll.key),
        items: children.filter((coll) => coll.type === "item").map((item) => item.id)
      };
      for (collection of collections) {
        this.registerCollection(collection, key2);
      }
    }
    get collectionTree() {
      return Object.values(this.collections).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      this._items = this._items || new Items(this.cacheable);
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this._items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key2) => this.nestedCollection(this.collections[key2])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
    get items() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.items();
    }
    get regularitems() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.regularitems();
    }
  };
  var Translator = new ITranslator();

  // gen/items/items.ts
  init_globals();

  // content/ajv.ts
  init_globals();
  var import__ = __toESM(require__());
  var import_ajv_keywords = __toESM(require_dist());

  // node_modules/better-ajv-errors/lib/esm/index.mjs
  init_globals();
  var import_momoa = __toESM(require_api(), 1);

  // node_modules/better-ajv-errors/lib/esm/helpers.mjs
  init_globals();

  // node_modules/better-ajv-errors/lib/esm/utils.mjs
  init_globals();
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp2(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var eq = (x) => (y) => x === y;
  var not = (fn) => (x) => !fn(x);
  var getValues = (o) => Object.values(o);
  var notUndefined = (x) => x !== void 0;
  var isXError = (x) => (error) => error.keyword === x;
  var isRequiredError = isXError("required");
  var isAnyOfError = isXError("anyOf");
  var isEnumError = isXError("enum");
  var getErrors = (node) => node && node.errors ? node.errors.map((e) => e.keyword === "errorMessage" ? __spreadProps(__spreadValues({}, e.params.errors[0]), { message: e.message }) : e) : [];
  var getChildren = (node) => node && getValues(node.children) || [];
  var getSiblings = (parent) => (node) => getChildren(parent).filter(not(eq(node)));
  var concatAll = (xs) => (ys) => ys.reduce((zs, z) => zs.concat(z), xs);

  // node_modules/better-ajv-errors/lib/esm/validation-errors/index.mjs
  init_globals();

  // node_modules/better-ajv-errors/lib/esm/validation-errors/required.mjs
  init_globals();
  var import_chalk = __toESM(require_source(), 1);

  // node_modules/better-ajv-errors/lib/esm/validation-errors/base.mjs
  init_globals();
  var import_code_frame = __toESM(require_lib3(), 1);

  // node_modules/better-ajv-errors/lib/esm/json/index.mjs
  init_globals();

  // node_modules/better-ajv-errors/lib/esm/json/get-meta-from-path.mjs
  init_globals();

  // node_modules/better-ajv-errors/lib/esm/json/utils.mjs
  init_globals();
  var getPointers = (dataPath) => {
    return dataPath.split("/").slice(1).map((pointer2) => pointer2.split("~1").join("/").split("~0").join("~"));
  };

  // node_modules/better-ajv-errors/lib/esm/json/get-meta-from-path.mjs
  function getMetaFromPath(jsonAst, dataPath, includeIdentifierLocation) {
    const pointers = getPointers(dataPath);
    const lastPointerIndex = pointers.length - 1;
    return pointers.reduce((obj, pointer2, idx) => {
      switch (obj.type) {
        case "Object": {
          const filtered = obj.members.filter((child) => child.name.value === pointer2);
          if (filtered.length !== 1) {
            throw new Error(`Couldn't find property ${pointer2} of ${dataPath}`);
          }
          const { name, value } = filtered[0];
          return includeIdentifierLocation && idx === lastPointerIndex ? name : value;
        }
        case "Array":
          return obj.elements[pointer2];
        default:
          console.log(obj);
      }
    }, jsonAst.body);
  }

  // node_modules/better-ajv-errors/lib/esm/json/get-decorated-data-path.mjs
  init_globals();
  function getDecoratedDataPath(jsonAst, dataPath) {
    let decoratedPath = "";
    getPointers(dataPath).reduce((obj, pointer2) => {
      switch (obj.type) {
        case "Object": {
          decoratedPath += `/${pointer2}`;
          const filtered = obj.members.filter((child) => child.name.value === pointer2);
          if (filtered.length !== 1) {
            throw new Error(`Couldn't find property ${pointer2} of ${dataPath}`);
          }
          return filtered[0].value;
        }
        case "Array": {
          decoratedPath += `/${pointer2}${getTypeName(obj.elements[pointer2])}`;
          return obj.elements[pointer2];
        }
        default:
          console.log(obj);
      }
    }, jsonAst.body);
    return decoratedPath;
  }
  function getTypeName(obj) {
    if (!obj || !obj.elements) {
      return "";
    }
    const type = obj.elements.filter((child) => child && child.name && child.name.value === "type");
    if (!type.length) {
      return "";
    }
    return type[0].value && `:${type[0].value.value}` || "";
  }

  // node_modules/better-ajv-errors/lib/esm/validation-errors/base.mjs
  var BaseValidationError = class {
    constructor(options2 = { isIdentifierLocation: false }, { data, schema: schema2, jsonAst, jsonRaw }) {
      this.options = options2;
      this.data = data;
      this.schema = schema2;
      this.jsonAst = jsonAst;
      this.jsonRaw = jsonRaw;
    }
    getLocation(dataPath = this.instancePath) {
      const { isIdentifierLocation, isSkipEndLocation } = this.options;
      const { loc } = getMetaFromPath(this.jsonAst, dataPath, isIdentifierLocation);
      return {
        start: loc.start,
        end: isSkipEndLocation ? void 0 : loc.end
      };
    }
    getDecoratedPath(dataPath = this.instancePath) {
      const decoratedPath = getDecoratedDataPath(this.jsonAst, dataPath);
      return decoratedPath;
    }
    getCodeFrame(message, dataPath = this.instancePath) {
      return (0, import_code_frame.codeFrameColumns)(this.jsonRaw, this.getLocation(dataPath), {
        highlightCode: true,
        message
      });
    }
    get instancePath() {
      return typeof this.options.instancePath !== "undefined" ? this.options.instancePath : this.options.dataPath;
    }
    print() {
      throw new Error(`Implement the 'print' method inside ${this.constructor.name}!`);
    }
    getError() {
      throw new Error(`Implement the 'getError' method inside ${this.constructor.name}!`);
    }
  };

  // node_modules/better-ajv-errors/lib/esm/validation-errors/required.mjs
  var __defProp3 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key2, value) => key2 in obj ? __defProp3(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp3.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b)) {
        if (__propIsEnum2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
  var RequiredValidationError = class extends BaseValidationError {
    getLocation(dataPath = this.instancePath) {
      const { start } = super.getLocation(dataPath);
      return { start };
    }
    print() {
      const { message, params } = this.options;
      const output = [import_chalk.default`{red {bold REQUIRED} ${message}}\n`];
      return output.concat(this.getCodeFrame(import_chalk.default`☹️  {magentaBright ${params.missingProperty}} is missing here!`));
    }
    getError() {
      const { message } = this.options;
      return __spreadProps2(__spreadValues2({}, this.getLocation()), {
        error: `${this.getDecoratedPath()} ${message}`,
        path: this.instancePath
      });
    }
  };

  // node_modules/better-ajv-errors/lib/esm/validation-errors/additional-prop.mjs
  init_globals();
  var import_chalk2 = __toESM(require_source(), 1);
  var __defProp4 = Object.defineProperty;
  var __defProps3 = Object.defineProperties;
  var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
  var __hasOwnProp4 = Object.prototype.hasOwnProperty;
  var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp3 = (obj, key2, value) => key2 in obj ? __defProp4(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues3 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp4.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    if (__getOwnPropSymbols3)
      for (var prop of __getOwnPropSymbols3(b)) {
        if (__propIsEnum3.call(b, prop))
          __defNormalProp3(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
  var AdditionalPropValidationError = class extends BaseValidationError {
    constructor(...args) {
      super(...args);
      this.options.isIdentifierLocation = true;
    }
    print() {
      const { message, params } = this.options;
      const output = [import_chalk2.default`{red {bold ADDTIONAL PROPERTY} ${message}}\n`];
      return output.concat(this.getCodeFrame(import_chalk2.default`😲  {magentaBright ${params.additionalProperty}} is not expected to be here!`, `${this.instancePath}/${params.additionalProperty}`));
    }
    getError() {
      const { params } = this.options;
      return __spreadProps3(__spreadValues3({}, this.getLocation(`${this.instancePath}/${params.additionalProperty}`)), {
        error: `${this.getDecoratedPath()} Property ${params.additionalProperty} is not expected to be here`,
        path: this.instancePath
      });
    }
  };

  // node_modules/better-ajv-errors/lib/esm/validation-errors/enum.mjs
  init_globals();
  var import_chalk3 = __toESM(require_source(), 1);
  var import_leven = __toESM(require_leven(), 1);
  var import_jsonpointer = __toESM(require_jsonpointer(), 1);
  var __defProp5 = Object.defineProperty;
  var __defProps4 = Object.defineProperties;
  var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
  var __hasOwnProp5 = Object.prototype.hasOwnProperty;
  var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp4 = (obj, key2, value) => key2 in obj ? __defProp5(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues4 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp5.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    if (__getOwnPropSymbols4)
      for (var prop of __getOwnPropSymbols4(b)) {
        if (__propIsEnum4.call(b, prop))
          __defNormalProp4(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
  var EnumValidationError = class extends BaseValidationError {
    print() {
      const {
        message,
        params: { allowedValues }
      } = this.options;
      const bestMatch = this.findBestMatch();
      const output = [
        import_chalk3.default`{red {bold ENUM} ${message}}`,
        import_chalk3.default`{red (${allowedValues.join(", ")})}\n`
      ];
      return output.concat(this.getCodeFrame(bestMatch !== null ? import_chalk3.default`👈🏽  Did you mean {magentaBright ${bestMatch}} here?` : import_chalk3.default`👈🏽  Unexpected value, should be equal to one of the allowed values`));
    }
    getError() {
      const { message, params } = this.options;
      const bestMatch = this.findBestMatch();
      const allowedValues = params.allowedValues.join(", ");
      const output = __spreadProps4(__spreadValues4({}, this.getLocation()), {
        error: `${this.getDecoratedPath()} ${message}: ${allowedValues}`,
        path: this.instancePath
      });
      if (bestMatch !== null) {
        output.suggestion = `Did you mean ${bestMatch}?`;
      }
      return output;
    }
    findBestMatch() {
      const {
        params: { allowedValues }
      } = this.options;
      const currentValue = this.instancePath === "" ? this.data : import_jsonpointer.default.get(this.data, this.instancePath);
      if (!currentValue) {
        return null;
      }
      const bestMatch = allowedValues.map((value) => ({
        value,
        weight: (0, import_leven.default)(value, currentValue.toString())
      })).sort((x, y) => x.weight > y.weight ? 1 : x.weight < y.weight ? -1 : 0)[0];
      return allowedValues.length === 1 || bestMatch.weight < bestMatch.value.length ? bestMatch.value : null;
    }
  };

  // node_modules/better-ajv-errors/lib/esm/validation-errors/default.mjs
  init_globals();
  var import_chalk4 = __toESM(require_source(), 1);
  var __defProp6 = Object.defineProperty;
  var __defProps5 = Object.defineProperties;
  var __getOwnPropDescs5 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
  var __hasOwnProp6 = Object.prototype.hasOwnProperty;
  var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp5 = (obj, key2, value) => key2 in obj ? __defProp6(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues5 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp6.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    if (__getOwnPropSymbols5)
      for (var prop of __getOwnPropSymbols5(b)) {
        if (__propIsEnum5.call(b, prop))
          __defNormalProp5(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps5 = (a, b) => __defProps5(a, __getOwnPropDescs5(b));
  var DefaultValidationError = class extends BaseValidationError {
    print() {
      const { keyword, message } = this.options;
      const output = [import_chalk4.default`{red {bold ${keyword.toUpperCase()}} ${message}}\n`];
      return output.concat(this.getCodeFrame(import_chalk4.default`👈🏽  {magentaBright ${keyword}} ${message}`));
    }
    getError() {
      const { keyword, message } = this.options;
      return __spreadProps5(__spreadValues5({}, this.getLocation()), {
        error: `${this.getDecoratedPath()}: ${keyword} ${message}`,
        path: this.instancePath
      });
    }
  };

  // node_modules/better-ajv-errors/lib/esm/helpers.mjs
  var __defProp7 = Object.defineProperty;
  var __defProps6 = Object.defineProperties;
  var __getOwnPropDescs6 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
  var __hasOwnProp7 = Object.prototype.hasOwnProperty;
  var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp6 = (obj, key2, value) => key2 in obj ? __defProp7(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
  var __spreadValues6 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp7.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    if (__getOwnPropSymbols6)
      for (var prop of __getOwnPropSymbols6(b)) {
        if (__propIsEnum6.call(b, prop))
          __defNormalProp6(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps6 = (a, b) => __defProps6(a, __getOwnPropDescs6(b));
  var JSON_POINTERS_REGEX = /\/[\w_-]+(\/\d+)?/g;
  function makeTree(ajvErrors = []) {
    const root = { children: {} };
    ajvErrors.forEach((ajvError) => {
      const instancePath = typeof ajvError.instancePath !== "undefined" ? ajvError.instancePath : ajvError.dataPath;
      const paths = instancePath === "" ? [""] : instancePath.match(JSON_POINTERS_REGEX);
      paths && paths.reduce((obj, path, i) => {
        obj.children[path] = obj.children[path] || { children: {}, errors: [] };
        if (i === paths.length - 1) {
          obj.children[path].errors.push(ajvError);
        }
        return obj.children[path];
      }, root);
    });
    return root;
  }
  function filterRedundantErrors(root, parent, key2) {
    getErrors(root).forEach((error) => {
      if (isRequiredError(error)) {
        root.errors = [error];
        root.children = {};
      }
    });
    if (getErrors(root).some(isAnyOfError)) {
      if (Object.keys(root.children).length > 0) {
        delete root.errors;
      }
    }
    if (root.errors && root.errors.length && getErrors(root).every(isEnumError)) {
      if (getSiblings(parent)(root).filter(notUndefined).some(getErrors)) {
        delete parent.children[key2];
      }
    }
    Object.entries(root.children).forEach(([key22, child]) => filterRedundantErrors(child, root, key22));
  }
  function createErrorInstances(root, options2) {
    const errors = getErrors(root);
    if (errors.length && errors.every(isEnumError)) {
      const uniqueValues = new Set(concatAll([])(errors.map((e) => e.params.allowedValues)));
      const allowedValues = [...uniqueValues];
      const error = errors[0];
      return [
        new EnumValidationError(__spreadProps6(__spreadValues6({}, error), {
          params: { allowedValues }
        }), options2)
      ];
    } else {
      return concatAll(errors.reduce((ret, error) => {
        switch (error.keyword) {
          case "additionalProperties":
            return ret.concat(new AdditionalPropValidationError(error, options2));
          case "required":
            return ret.concat(new RequiredValidationError(error, options2));
          default:
            return ret.concat(new DefaultValidationError(error, options2));
        }
      }, []))(getChildren(root).map((child) => createErrorInstances(child, options2)));
    }
  }
  var helpers_default = (ajvErrors, options2) => {
    const tree = makeTree(ajvErrors || []);
    filterRedundantErrors(tree);
    return createErrorInstances(tree, options2);
  };

  // node_modules/better-ajv-errors/lib/esm/index.mjs
  var src_default = (schema2, data, errors, options2 = {}) => {
    const { format = "cli", indent = null, json = null } = options2;
    const jsonRaw = json || JSON.stringify(data, null, indent);
    const jsonAst = (0, import_momoa.parse)(jsonRaw);
    const customErrorToText = (error) => error.print().join("\n");
    const customErrorToStructure = (error) => error.getError();
    const customErrors = helpers_default(errors, {
      data,
      schema: schema2,
      jsonAst,
      jsonRaw
    });
    if (format === "cli") {
      return customErrors.map(customErrorToText).join("\n\n");
    } else {
      return customErrors.map(customErrorToStructure);
    }
  };

  // content/ajv.ts
  var options = {
    strict: false,
    discriminator: true,
    useDefaults: true
  };
  var noncoercing = new import__.default(options);
  var coercing = new import__.default({ ...options, coerceTypes: true });
  (0, import_ajv_keywords.default)(noncoercing);
  (0, import_ajv_keywords.default)(coercing);
  function validator(schema2, ajv) {
    const ok = ajv.compile(schema2);
    return function(data) {
      if (ok(data))
        return "";
      return src_default(schema2, data, ok.errors, { format: "js" }).map((err) => err.error + (err.suggestion ? ", " : "") + (err.suggestion || "")).join("\n");
    };
  }

  // gen/items/items.ts
  var jurism = client === "jurism";
  var zotero = !jurism;
  var zoterovalidator = validator(require_zotero(), noncoercing);
  var jurismvalidator = validator(require_jurism(), noncoercing);
  var broken = {
    me: zotero ? zoterovalidator : jurismvalidator,
    other: jurism ? zoterovalidator : jurismvalidator
  };
  var valid = {
    type: {
      annotation: zotero,
      artwork: true,
      attachment: true,
      audioRecording: true,
      bill: true,
      blogPost: true,
      book: true,
      bookSection: true,
      case: true,
      classic: jurism,
      computerProgram: true,
      conferencePaper: true,
      dictionaryEntry: true,
      document: true,
      email: true,
      encyclopediaArticle: true,
      film: true,
      forumPost: true,
      gazette: jurism,
      hearing: true,
      instantMessage: true,
      interview: true,
      journalArticle: true,
      legalCommentary: jurism,
      letter: true,
      magazineArticle: true,
      manuscript: true,
      map: true,
      newspaperArticle: true,
      note: true,
      patent: true,
      podcast: true,
      preprint: zotero,
      presentation: true,
      radioBroadcast: true,
      regulation: jurism,
      report: true,
      standard: jurism,
      statute: true,
      thesis: true,
      treaty: jurism,
      tvBroadcast: true,
      videoRecording: true,
      webpage: true
    },
    field: {
      annotation: {
        attachments: true,
        creators: true,
        dateAdded: true,
        dateModified: true,
        id: true,
        itemID: true,
        itemType: true,
        multi: true,
        notes: true,
        seeAlso: true,
        tags: true
      },
      artwork: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        artworkMedium: true,
        artworkSize: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        publicationTitle: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        websiteTitle: jurism
      },
      attachment: {
        accessDate: true,
        dateAdded: true,
        dateModified: true,
        id: true,
        itemID: true,
        itemType: true,
        tags: true,
        title: true,
        url: true
      },
      audioRecording: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        album: jurism,
        archive: true,
        archiveLocation: true,
        attachments: true,
        audioRecordingFormat: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: jurism,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        label: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        opus: jurism,
        originalDate: jurism,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        release: jurism,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      bill: {
        abstractNote: true,
        accessDate: true,
        archiveLocation: jurism,
        assemblyNumber: jurism,
        attachments: true,
        billNumber: true,
        code: true,
        codePages: true,
        codeVolume: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legislativeBody: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        publicationTitle: jurism,
        reporter: jurism,
        resolutionLabel: jurism,
        rights: true,
        section: true,
        seeAlso: true,
        seriesNumber: jurism,
        session: true,
        sessionType: jurism,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true,
        volume: true
      },
      blogPost: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        blogTitle: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        websiteType: true
      },
      book: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: jurism,
        multi: true,
        notes: true,
        numPages: true,
        numberOfVolumes: true,
        place: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true,
        volumeTitle: jurism
      },
      bookSection: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        bookAbbreviation: jurism,
        bookTitle: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true,
        volumeTitle: jurism
      },
      case: {
        DOI: jurism,
        abstractNote: true,
        accessDate: true,
        adminFlag: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        caseName: true,
        court: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateDecided: true,
        dateModified: true,
        division: jurism,
        docketNumber: true,
        documentName: jurism,
        documentNumber: jurism,
        extra: true,
        filingDate: jurism,
        firstPage: true,
        history: true,
        id: true,
        issue: jurism,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        place: jurism,
        publicationDate: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        reign: jurism,
        reporter: true,
        reporterVolume: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        supplementName: jurism,
        tags: true,
        title: true,
        url: true,
        volume: true,
        yearAsVolume: jurism
      },
      classic: {
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        language: jurism,
        libraryCatalog: jurism,
        manuscriptType: jurism,
        multi: true,
        notes: true,
        numPages: jurism,
        place: jurism,
        rights: jurism,
        seeAlso: true,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        type: jurism,
        url: jurism,
        volume: jurism
      },
      computerProgram: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        company: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        place: true,
        programmingLanguage: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        system: true,
        tags: true,
        title: true,
        url: true,
        versionNumber: true
      },
      conferencePaper: {
        DOI: true,
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        conferenceDate: jurism,
        conferenceName: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        institution: jurism,
        issue: jurism,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: true,
        proceedingsTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      dictionaryEntry: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        dictionaryTitle: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      document: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        versionNumber: jurism
      },
      email: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        subject: true,
        tags: true,
        title: true,
        url: true
      },
      encyclopediaArticle: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        encyclopediaTitle: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      film: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        distributor: true,
        extra: true,
        genre: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        videoRecordingFormat: true
      },
      forumPost: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        forumTitle: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        postType: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      gazette: {
        abstractNote: jurism,
        accessDate: jurism,
        attachments: true,
        code: jurism,
        codeNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateEnacted: jurism,
        dateModified: true,
        extra: jurism,
        history: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        multi: true,
        nameOfAct: jurism,
        notes: true,
        number: jurism,
        pages: jurism,
        publicLawNumber: jurism,
        publicationDate: jurism,
        publisher: jurism,
        regnalYear: jurism,
        reign: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        session: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism
      },
      hearing: {
        abstractNote: true,
        accessDate: true,
        archiveLocation: jurism,
        assemblyNumber: jurism,
        attachments: true,
        committee: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        documentNumber: true,
        extra: true,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legislativeBody: true,
        meetingName: jurism,
        meetingNumber: jurism,
        multi: true,
        notes: true,
        number: zotero,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        reporter: jurism,
        resolutionLabel: jurism,
        rights: true,
        seeAlso: true,
        seriesNumber: jurism,
        session: true,
        sessionType: jurism,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true,
        volume: jurism
      },
      instantMessage: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      interview: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        interviewMedium: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        place: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      journalArticle: {
        DOI: true,
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        issue: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: jurism,
        publicationTitle: true,
        publisher: jurism,
        rights: true,
        seeAlso: true,
        series: true,
        seriesText: true,
        seriesTitle: true,
        shortTitle: true,
        status: jurism,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      legalCommentary: {
        ISBN: jurism,
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        bookAbbreviation: jurism,
        bookTitle: jurism,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        edition: jurism,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: jurism,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        numberOfVolumes: jurism,
        pages: jurism,
        place: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        rights: jurism,
        seeAlso: true,
        series: jurism,
        seriesNumber: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism,
        versionNumber: jurism,
        volume: jurism,
        volumeTitle: jurism
      },
      letter: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        letterType: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      magazineArticle: {
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        issue: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: jurism,
        publicationTitle: true,
        publisher: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      manuscript: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        manuscriptType: true,
        multi: true,
        notes: true,
        numPages: true,
        place: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      map: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        mapType: true,
        multi: true,
        notes: true,
        place: true,
        publisher: true,
        rights: true,
        scale: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      newspaperArticle: {
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        court: jurism,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        newsCaseDate: jurism,
        notes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        rights: true,
        section: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      note: {
        dateAdded: true,
        dateModified: true,
        id: true,
        itemID: true,
        itemType: true,
        note: true,
        tags: true
      },
      patent: {
        abstractNote: true,
        accessDate: true,
        applicationNumber: true,
        assignee: true,
        attachments: true,
        country: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        filingDate: true,
        genre: jurism,
        id: true,
        issueDate: true,
        issuingAuthority: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legalStatus: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        patentNumber: true,
        place: true,
        priorityDate: jurism,
        priorityNumbers: true,
        publicationDate: jurism,
        publicationNumber: jurism,
        references: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true
      },
      podcast: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        audioFileType: true,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        medium: true,
        multi: true,
        notes: true,
        number: true,
        publisher: jurism,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      preprint: {
        DOI: zotero,
        abstractNote: zotero,
        accessDate: zotero,
        archive: zotero,
        archiveID: zotero,
        archiveLocation: zotero,
        attachments: true,
        callNumber: zotero,
        citationKey: zotero,
        creators: true,
        date: zotero,
        dateAdded: true,
        dateModified: true,
        extra: zotero,
        genre: zotero,
        id: true,
        itemID: true,
        itemType: true,
        language: zotero,
        libraryCatalog: zotero,
        multi: true,
        notes: true,
        number: zotero,
        place: zotero,
        publisher: zotero,
        repository: zotero,
        rights: zotero,
        seeAlso: true,
        series: zotero,
        seriesNumber: zotero,
        shortTitle: zotero,
        tags: true,
        title: zotero,
        type: zotero,
        url: zotero
      },
      presentation: {
        abstractNote: true,
        accessDate: true,
        archive: jurism,
        archiveCollection: jurism,
        archiveLocation: jurism,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        meetingName: true,
        multi: true,
        notes: true,
        place: true,
        presentationType: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      radioBroadcast: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        audioRecordingFormat: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        network: true,
        notes: true,
        number: true,
        place: true,
        programTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      regulation: {
        abstractNote: jurism,
        accessDate: jurism,
        attachments: true,
        code: jurism,
        codeNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateEnacted: jurism,
        dateModified: true,
        extra: jurism,
        gazetteFlag: jurism,
        history: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        legislativeBody: jurism,
        multi: true,
        nameOfAct: jurism,
        notes: true,
        number: jurism,
        pages: jurism,
        publicLawNumber: jurism,
        publicationDate: jurism,
        publisher: jurism,
        regulationType: jurism,
        regulatoryBody: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        session: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        type: jurism,
        url: jurism
      },
      report: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        assemblyNumber: jurism,
        attachments: true,
        bookTitle: jurism,
        callNumber: true,
        committee: jurism,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        institution: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        medium: jurism,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        reportNumber: true,
        reportType: true,
        rights: true,
        seeAlso: true,
        seriesNumber: jurism,
        seriesTitle: true,
        shortTitle: true,
        status: jurism,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      standard: {
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        number: jurism,
        publisher: jurism,
        rights: jurism,
        seeAlso: true,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism,
        versionNumber: jurism
      },
      statute: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        code: true,
        codeNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateAmended: jurism,
        dateEnacted: true,
        dateModified: true,
        extra: true,
        gazetteFlag: jurism,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        multi: true,
        nameOfAct: true,
        notes: true,
        number: true,
        originalDate: jurism,
        pages: true,
        publicLawNumber: true,
        publicationDate: jurism,
        publisher: jurism,
        regnalYear: jurism,
        reign: jurism,
        rights: true,
        section: true,
        seeAlso: true,
        session: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      thesis: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numPages: true,
        place: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        thesisType: true,
        title: true,
        type: true,
        university: true,
        url: true
      },
      treaty: {
        abstractNote: jurism,
        accessDate: jurism,
        adoptionDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        number: jurism,
        openingDate: jurism,
        pages: jurism,
        parentTreaty: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        reporter: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        shortTitle: jurism,
        signingDate: jurism,
        supplementName: jurism,
        tags: true,
        title: jurism,
        treatyNumber: jurism,
        url: jurism,
        versionNumber: jurism,
        volume: jurism
      },
      tvBroadcast: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        network: true,
        notes: true,
        number: true,
        place: true,
        programTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        videoRecordingFormat: true
      },
      videoRecording: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        studio: true,
        tags: true,
        title: true,
        url: true,
        videoRecordingFormat: true,
        volume: true,
        websiteTitle: jurism
      },
      webpage: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        websiteTitle: true,
        websiteType: true
      }
    },
    test: (obj, strict) => {
      const errors = broken.me(obj);
      if (!errors)
        return "";
      if (!strict && !broken.other(obj)) {
        if (typeof Zotero !== "undefined")
          Zotero.debug("Better BibTeX soft error: " + errors);
        return "";
      }
      return errors;
    }
  };
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.documentNumber || item.archiveID)
        item.number = v;
      if (scrub) {
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (v = item.repository || item.institution)
        item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
    }
    if (jurism) {
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }
  function simplifyForImport(item) {
    unalias(item, { scrub: true });
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.name) {
          creator.lastName = creator.lastName || creator.name;
          creator.fieldMode = 1;
          delete creator.firstName;
          delete creator.name;
        }
        if (!jurism)
          delete creator.multi;
      }
    }
    if (!jurism)
      delete item.multi;
    return item;
  }
  var schema_csl_mappings = {
    zotero: {
      CSL_TYPE_MAPPINGS: {
        artwork: "graphic",
        attachment: "document",
        audioRecording: "song",
        bill: "bill",
        blogPost: "post-weblog",
        book: "book",
        bookSection: "chapter",
        case: "legal_case",
        computerProgram: "book",
        conferencePaper: "paper-conference",
        dictionaryEntry: "entry-dictionary",
        document: "document",
        email: "personal_communication",
        encyclopediaArticle: "entry-encyclopedia",
        film: "motion_picture",
        forumPost: "post",
        hearing: "bill",
        instantMessage: "personal_communication",
        interview: "interview",
        journalArticle: "article-journal",
        letter: "personal_communication",
        magazineArticle: "article-magazine",
        manuscript: "manuscript",
        map: "map",
        newspaperArticle: "article-newspaper",
        note: "document",
        patent: "patent",
        podcast: "broadcast",
        preprint: "article",
        presentation: "speech",
        radioBroadcast: "broadcast",
        report: "report",
        statute: "legislation",
        thesis: "thesis",
        tvBroadcast: "broadcast",
        videoRecording: "motion_picture",
        webpage: "webpage"
      },
      CSL_TYPE_MAPPINGS_REVERSE: {
        article: ["preprint"],
        "article-journal": ["journalArticle"],
        "article-magazine": ["magazineArticle"],
        "article-newspaper": ["newspaperArticle"],
        bill: ["bill", "hearing"],
        book: ["book", "computerProgram"],
        broadcast: ["podcast", "tvBroadcast", "radioBroadcast"],
        chapter: ["bookSection"],
        document: ["document", "attachment", "note"],
        "entry-dictionary": ["dictionaryEntry"],
        "entry-encyclopedia": ["encyclopediaArticle"],
        graphic: ["artwork"],
        interview: ["interview"],
        legal_case: ["case"],
        legislation: ["statute"],
        manuscript: ["manuscript"],
        map: ["map"],
        motion_picture: ["film", "videoRecording"],
        "paper-conference": ["conferencePaper"],
        patent: ["patent"],
        personal_communication: ["letter", "email", "instantMessage"],
        post: ["forumPost"],
        "post-weblog": ["blogPost"],
        report: ["report"],
        song: ["audioRecording"],
        speech: ["presentation"],
        thesis: ["thesis"],
        webpage: ["webpage"]
      },
      CSL_TEXT_MAPPINGS: {
        DOI: ["DOI"],
        ISBN: ["ISBN"],
        ISSN: ["ISSN"],
        URL: ["url"],
        abstract: ["abstractNote"],
        archive: ["archive"],
        archive_location: ["archiveLocation"],
        authority: ["court", "legislativeBody", "issuingAuthority"],
        "call-number": ["callNumber", "applicationNumber"],
        "chapter-number": ["session"],
        "collection-number": ["seriesNumber"],
        "collection-title": ["seriesTitle", "series"],
        "container-title": ["publicationTitle", "reporter", "code"],
        "container-title-short": ["journalAbbreviation"],
        dimensions: ["artworkSize", "runningTime"],
        edition: ["edition"],
        event: ["meetingName", "conferenceName"],
        "event-place": ["place"],
        genre: ["type", "programmingLanguage"],
        issue: ["issue", "priorityNumbers"],
        language: ["language"],
        medium: ["medium", "system"],
        note: ["extra"],
        number: ["number"],
        "number-of-pages": ["numPages"],
        "number-of-volumes": ["numberOfVolumes"],
        page: ["pages"],
        publisher: ["publisher"],
        "publisher-place": ["place"],
        references: ["history", "references"],
        scale: ["scale"],
        section: ["section", "committee"],
        source: ["libraryCatalog"],
        status: ["status"],
        title: ["title"],
        "title-short": ["shortTitle"],
        version: ["versionNumber"],
        volume: ["volume", "codeNumber"]
      },
      CSL_DATE_MAPPINGS: {
        accessed: "accessDate",
        issued: "date",
        submitted: "filingDate"
      },
      CSL_NAME_MAPPINGS: {
        author: "author",
        bookAuthor: "container-author",
        composer: "composer",
        director: "director",
        editor: "editor",
        interviewer: "interviewer",
        recipient: "recipient",
        reviewedAuthor: "reviewed-author",
        seriesEditor: "collection-editor",
        translator: "translator"
      },
      CSL_FIELD_MAPPINGS_REVERSE: {
        DOI: "DOI",
        ISBN: "ISBN",
        ISSN: "ISSN",
        abstractNote: "abstract",
        accessDate: "accessed",
        applicationNumber: "call-number",
        archive: "archive",
        archiveLocation: "archive_location",
        artworkSize: "dimensions",
        callNumber: "call-number",
        code: "container-title",
        codeNumber: "volume",
        committee: "section",
        conferenceName: "event",
        court: "authority",
        date: "issued",
        edition: "edition",
        extra: "note",
        filingDate: "submitted",
        history: "references",
        issue: "issue",
        issuingAuthority: "authority",
        journalAbbreviation: "container-title-short",
        language: "language",
        legislativeBody: "authority",
        libraryCatalog: "source",
        medium: "medium",
        meetingName: "event",
        numPages: "number-of-pages",
        number: "number",
        numberOfVolumes: "number-of-volumes",
        pages: "page",
        place: "publisher-place",
        priorityNumbers: "issue",
        programmingLanguage: "genre",
        publicationTitle: "container-title",
        publisher: "publisher",
        references: "references",
        reporter: "container-title",
        runningTime: "dimensions",
        scale: "scale",
        section: "section",
        series: "collection-title",
        seriesNumber: "collection-number",
        seriesTitle: "collection-title",
        session: "chapter-number",
        shortTitle: "title-short",
        status: "status",
        system: "medium",
        title: "title",
        type: "genre",
        url: "URL",
        versionNumber: "version",
        volume: "volume"
      }
    },
    jurism: {
      CSL_TYPE_MAPPINGS: {
        artwork: "graphic",
        attachment: "article",
        audioRecording: "song",
        bill: "bill",
        blogPost: "post-weblog",
        book: "book",
        bookSection: "chapter",
        case: "legal_case",
        classic: "classic",
        computerProgram: "book",
        conferencePaper: "paper-conference",
        dictionaryEntry: "entry-dictionary",
        document: "article",
        email: "personal_communication",
        encyclopediaArticle: "entry-encyclopedia",
        film: "motion_picture",
        forumPost: "post",
        gazette: "gazette",
        hearing: "hearing",
        instantMessage: "personal_communication",
        interview: "interview",
        journalArticle: "article-journal",
        legalCommentary: "legal_commentary",
        letter: "personal_communication",
        magazineArticle: "article-magazine",
        manuscript: "manuscript",
        map: "map",
        newspaperArticle: "article-newspaper",
        note: "article",
        patent: "patent",
        podcast: "broadcast",
        presentation: "speech",
        radioBroadcast: "broadcast",
        regulation: "regulation",
        report: "report",
        standard: "standard",
        statute: "legislation",
        thesis: "thesis",
        treaty: "treaty",
        tvBroadcast: "broadcast",
        videoRecording: "video",
        webpage: "webpage"
      },
      CSL_TYPE_MAPPINGS_REVERSE: {
        article: ["document", "attachment", "note"],
        "article-journal": ["journalArticle"],
        "article-magazine": ["magazineArticle"],
        "article-newspaper": ["newspaperArticle"],
        bill: ["bill"],
        book: ["book", "computerProgram"],
        broadcast: ["podcast", "tvBroadcast", "radioBroadcast"],
        chapter: ["bookSection"],
        classic: ["classic"],
        "entry-dictionary": ["dictionaryEntry"],
        "entry-encyclopedia": ["encyclopediaArticle"],
        gazette: ["gazette"],
        graphic: ["artwork"],
        hearing: ["hearing"],
        interview: ["interview"],
        legal_case: ["case"],
        legal_commentary: ["legalCommentary"],
        legislation: ["statute"],
        manuscript: ["manuscript"],
        map: ["map"],
        motion_picture: ["film"],
        "paper-conference": ["conferencePaper"],
        patent: ["patent"],
        personal_communication: ["letter", "email", "instantMessage"],
        post: ["forumPost"],
        "post-weblog": ["blogPost"],
        regulation: ["regulation"],
        report: ["report"],
        song: ["audioRecording"],
        speech: ["presentation"],
        standard: ["standard"],
        thesis: ["thesis"],
        treaty: ["treaty"],
        video: ["videoRecording"],
        webpage: ["webpage"]
      },
      CSL_TEXT_MAPPINGS: {
        DOI: ["DOI"],
        ISBN: ["ISBN"],
        ISSN: ["ISSN"],
        URL: ["url"],
        abstract: ["abstractNote"],
        "admin-flag": ["adminFlag"],
        archive: ["archive"],
        archive_collection: ["archiveCollection"],
        archive_location: ["archiveLocation"],
        authority: ["court", "legislativeBody", "issuingAuthority", "institution", "regulatoryBody"],
        "call-number": ["callNumber", "applicationNumber"],
        "chapter-number": ["session"],
        "collection-number": ["seriesNumber", "assemblyNumber", "regnalYear", "yearAsVolume"],
        "collection-title": ["seriesTitle", "series", "parentTreaty"],
        committee: ["committee"],
        "container-title": ["publicationTitle", "reporter", "code"],
        "container-title-short": ["journalAbbreviation"],
        dimensions: ["artworkSize", "runningTime"],
        division: ["division"],
        "document-name": ["documentName"],
        "document-number": ["documentNumber"],
        edition: ["edition"],
        event: ["meetingName", "conferenceName", "resolutionLabel"],
        "event-place": ["place"],
        "gazette-flag": ["gazetteFlag"],
        genre: ["type", "programmingLanguage", "genre", "reign", "sessionType", "regulationType"],
        issue: ["issue", "priorityNumbers", "meetingNumber"],
        jurisdiction: ["jurisdiction"],
        language: ["language"],
        medium: ["medium", "system"],
        note: ["extra"],
        number: ["number"],
        "number-of-pages": ["numPages"],
        "number-of-volumes": ["numberOfVolumes"],
        page: ["pages"],
        "publication-number": ["publicationNumber"],
        publisher: ["publisher"],
        "publisher-place": ["place"],
        references: ["history", "references"],
        scale: ["scale"],
        section: ["section"],
        source: ["libraryCatalog"],
        status: ["status"],
        supplement: ["supplementName"],
        title: ["title"],
        "title-short": ["shortTitle"],
        version: ["versionNumber"],
        volume: ["volume", "codeNumber"],
        "volume-title": ["volumeTitle"]
      },
      CSL_DATE_MAPPINGS: {
        accessed: ["accessDate"],
        "event-date": ["dateAmended", "signingDate", "conferenceDate"],
        issued: ["date"],
        "opening-date": ["openingDate"],
        "original-date": ["adoptionDate", "newsCaseDate", "originalDate", "priorityDate"],
        "publication-date": ["publicationDate"],
        submitted: ["filingDate"]
      },
      CSL_NAME_MAPPINGS: {
        author: "author",
        bookAuthor: "container-author",
        commenter: "commenter",
        composer: "composer",
        contributor: "contributor",
        director: "director",
        editor: "editor",
        interviewer: "interviewer",
        recipient: "recipient",
        reviewedAuthor: "reviewed-author",
        seriesEditor: "collection-editor",
        testimonyBy: "testimonyBy",
        translator: "translator"
      },
      CSL_FIELD_MAPPINGS_REVERSE: {
        DOI: "DOI",
        ISBN: "ISBN",
        ISSN: "ISSN",
        abstractNote: "abstract",
        accessDate: "accessed",
        adminFlag: "admin-flag",
        adoptionDate: "original-date",
        applicationNumber: "call-number",
        archive: "archive",
        archiveCollection: "archive_collection",
        archiveLocation: "archive_location",
        artworkSize: "dimensions",
        assemblyNumber: "collection-number",
        callNumber: "call-number",
        code: "container-title",
        codeNumber: "volume",
        committee: "committee",
        conferenceDate: "event-date",
        conferenceName: "event",
        court: "authority",
        date: "issued",
        dateAmended: "event-date",
        division: "division",
        documentName: "document-name",
        documentNumber: "document-number",
        edition: "edition",
        extra: "note",
        filingDate: "submitted",
        gazetteFlag: "gazette-flag",
        genre: "genre",
        history: "references",
        institution: "authority",
        issue: "issue",
        issuingAuthority: "authority",
        journalAbbreviation: "container-title-short",
        jurisdiction: "jurisdiction",
        language: "language",
        legislativeBody: "authority",
        libraryCatalog: "source",
        medium: "medium",
        meetingName: "event",
        meetingNumber: "issue",
        newsCaseDate: "original-date",
        numPages: "number-of-pages",
        number: "number",
        numberOfVolumes: "number-of-volumes",
        openingDate: "opening-date",
        originalDate: "original-date",
        pages: "page",
        parentTreaty: "collection-title",
        place: "publisher-place",
        priorityDate: "original-date",
        priorityNumbers: "issue",
        programmingLanguage: "genre",
        publicationDate: "publication-date",
        publicationNumber: "publication-number",
        publicationTitle: "container-title",
        publisher: "publisher",
        references: "references",
        regnalYear: "collection-number",
        regulationType: "genre",
        regulatoryBody: "authority",
        reign: "genre",
        reporter: "container-title",
        resolutionLabel: "event",
        runningTime: "dimensions",
        scale: "scale",
        section: "section",
        series: "collection-title",
        seriesNumber: "collection-number",
        seriesTitle: "collection-title",
        session: "chapter-number",
        sessionType: "genre",
        shortTitle: "title-short",
        signingDate: "event-date",
        status: "status",
        supplementName: "supplement",
        system: "medium",
        title: "title",
        type: "genre",
        url: "URL",
        versionNumber: "version",
        volume: "volume",
        volumeTitle: "volume-title",
        yearAsVolume: "collection-number"
      }
    }
  };
  var CSL_MAPPINGS = schema_csl_mappings[client];

  // content/stringify.ts
  init_globals();
  var import_fast_safe_stringify = __toESM(require_fast_safe_stringify());
  function asciify(str) {
    return str.replace(/[\u007F-\uFFFF]/g, (chr) => `\\u${`0000${chr.charCodeAt(0).toString(16)}`.substr(-4)}`);
  }
  function stringify(obj, replacer, indent, ucode) {
    const stringified = import_fast_safe_stringify.default.stable(obj, replacer, indent);
    return ucode ? asciify(stringified) : stringified;
  }

  // content/logger.ts
  init_globals();

  // content/environment.ts
  init_globals();
  var environment = {
    node: typeof process === "object" && typeof __require === "function" && typeof importScripts !== "function",
    zotero: typeof Components !== "undefined",
    name: ""
  };
  environment.name = Object.entries(environment).map(([name, on]) => on ? name : "").filter((name) => name).join("/");

  // content/logger.ts
  var import_loupe = __toESM(require_loupe());
  var Logger = class {
    constructor() {
      this.verbose = false;
    }
    format({ error = false, worker = 0, translator = "", issue = 0 }, msg) {
      let workername = `${worker}`;
      let diff = null;
      const now = Date.now();
      if (this.timestamp)
        diff = now - this.timestamp;
      this.timestamp = now;
      if (typeof msg !== "string") {
        let output = issue ? `issue ${issue}: ` : "";
        for (const m of msg) {
          const type = typeof m;
          if (type === "string" || m instanceof String || type === "number" || type === "undefined" || type === "boolean" || m === null) {
            output += m;
          } else if (m instanceof Error || m instanceof ErrorEvent || m.toString() === "[object ErrorEvent]") {
            output += this.formatError(m);
          } else if (m && type === "object" && m.message) {
            output += this.formatError({ message: m.errorCode ? `${m.message} (${m.errorCode})` : m.message, filename: m.fileName, lineno: m.lineNumber, colno: m.column, stack: m.stack });
          } else {
            output += (0, import_loupe.inspect)(m);
          }
          output += " ";
        }
        msg = output;
      }
      if (Zotero.worker) {
        if (!worker && workerJob.job) {
          worker = workerJob.job;
          workername = `${workerJob.job}`;
        }
        translator = translator || workerJob.translator;
      } else {
        if (worker)
          workername = `${worker} (but environment is ${environment.name})`;
        if (!translator && typeof ZOTERO_TRANSLATOR_INFO !== "undefined")
          translator = ZOTERO_TRANSLATOR_INFO.label;
      }
      const prefix = ["better-bibtex", translator, error && ":error:", worker && `(worker ${workername})`].filter((p) => p).join(" ");
      return `{${prefix}} +${diff} ${asciify(msg)}`;
    }
    formatError(e, indent = "") {
      let msg = [e.name, e.message].filter((s) => s).join(": ");
      if (e.filename || e.fileName)
        msg += ` in ${e.filename || e.fileName}`;
      if (e.lineno || e.lineNumber) {
        msg += ` line ${e.lineno}`;
        if (e.colno)
          msg += `, col ${e.colno}`;
      }
      if (e.stack)
        msg += `
${indent}${e.stack.replace(/\n/g, `${indent}
`)}`;
      if (e.error)
        msg += `
${indent}${this.formatError(e.error, "  ")}
`;
      return `${indent}<Error: ${msg}>`;
    }
    get enabled() {
      if (typeof ZOTERO_TRANSLATOR_INFO === "undefined")
        return Zotero.Debug.enabled;
      if (!Zotero.worker)
        return true;
      return !workerJob || workerJob.debugEnabled;
    }
    debug(...msg) {
      if (this.enabled)
        Zotero.debug(this.format({}, msg));
    }
    for(issue, ...msg) {
      if (this.enabled)
        Zotero.debug(this.format({ issue }, msg));
    }
    error(...msg) {
      Zotero.debug(this.format({ error: true }, msg));
    }
    status({ error = false, worker = 0, translator = "" }, ...msg) {
      if (error || this.enabled)
        Zotero.debug(this.format({ error, worker, translator }, msg));
    }
  };
  var log = new Logger();

  // translators/lib/normalize.ts
  init_globals();
  function rjust(str, width, padding) {
    if (typeof str === "number")
      str = `${str}`;
    padding = (padding || " ")[0];
    return str.length < width ? padding.repeat(width - str.length) + str : str;
  }
  function key(item) {
    var _a, _b, _c, _d;
    return [item.itemType, item.citationKey || "", item.title || "", ((_b = (_a = item.creators) == null ? void 0 : _a[0]) == null ? void 0 : _b.lastName) || ((_d = (_c = item.creators) == null ? void 0 : _c[0]) == null ? void 0 : _d.name) || ""].join("	").toLowerCase();
  }
  function strip(obj) {
    if (Array.isArray(obj)) {
      obj = obj.map(strip).filter((e) => e);
      return obj.length ? obj : void 0;
    }
    if (obj === null)
      return void 0;
    if (typeof obj === "object") {
      let keep = false;
      for (let [k, v] of Object.entries(obj)) {
        v = strip(v);
        if (typeof v === "undefined") {
          delete obj[k];
        } else {
          obj[k] = v;
          keep = true;
        }
      }
      return keep ? obj : void 0;
    }
    if (typeof obj === "string" && !obj)
      return void 0;
    return obj;
  }
  function normalize(library, sort = true) {
    var _a, _b, _c, _d, _e;
    if (sort)
      library.items.sort((a, b) => key(a).localeCompare(key(b)));
    for (const item of library.items) {
      delete item.citekey;
      delete item.autoJournalAbbreviation;
      delete item.libraryID;
      delete item.key;
      delete item.itemKey;
      delete item.version;
      delete item.uniqueFields;
      delete item.collections;
      if ((_a = item.notes) == null ? void 0 : _a.length) {
        item.notes = item.notes.map((note) => typeof note === "string" ? note : note.note).sort();
      } else {
        delete item.notes;
      }
      if ((_b = item.tags) == null ? void 0 : _b.length) {
        item.tags = item.tags.map((tag) => typeof tag === "string" ? { tag } : tag).sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        delete item.tags;
      }
      if ((_c = item.attachments) == null ? void 0 : _c.length) {
        for (const att of item.attachments) {
          att.contentType = att.contentType || att.mimeType;
          delete att.mimeType;
          for (const prop of ["select", "localPath", "itemID", "charset", "dateAdded", "parentItem", "dateModified", "version", "relations", "id"]) {
            delete att[prop];
          }
        }
      } else {
        delete item.attachments;
      }
      if ((_d = item.creators) == null ? void 0 : _d.length) {
        for (const creator of item.creators) {
          if (!creator.fieldMode)
            delete creator.fieldMode;
        }
      } else {
        delete item.creators;
      }
      if (item.extra && typeof item.extra !== "string")
        item.extra = item.extra.join("\n");
      strip(item);
      if ((_e = item.extra) == null ? void 0 : _e.length) {
        item.extra = item.extra.split("\n");
      } else {
        delete item.extra;
      }
    }
    if (library.preferences) {
      delete library.preferences.client;
      delete library.preferences.platform;
      delete library.preferences.newTranslatorsAskRestart;
      delete library.preferences.testing;
    }
    library.items.sort((a, b) => stringify({ ...a, itemID: 0 }).localeCompare(stringify({ ...b, itemID: 0 })));
    const itemIDs = library.items.reduce((acc, item, i) => {
      item.itemID = acc[item.itemID] = i + 1;
      return acc;
    }, {});
    if (library.collections && Object.keys(library.collections).length) {
      const collectionOrder = Object.values(library.collections).sort((a, b) => stringify({ ...a, key: "", parent: "" }).localeCompare(stringify({ ...b, key: "", parent: "" })));
      const collectionKeys = collectionOrder.reduce((acc, coll, i) => {
        coll.key = acc[coll.key] = `coll:${rjust(i, 5, "0")}`;
        return acc;
      }, {});
      library.collections = collectionOrder.reduce((acc, coll) => {
        if (!(coll.parent = collectionKeys[coll.parent]))
          delete coll.parent;
        coll.items = coll.items.map((itemID) => itemIDs[itemID]).filter((itemID) => typeof itemID === "number").sort();
        coll.collections = coll.collections.map((collectionKey) => collectionKeys[collectionKey]).filter((collectionKey) => collectionKey).sort();
        acc[coll.key] = coll;
        return acc;
      }, {});
    } else {
      delete library.collections;
    }
  }

  // translators/BetterBibTeX JSON.ts
  var version = require_version();
  var chunkSize = 1048576;
  function detectImport() {
    let str;
    let json = "";
    while ((str = Zotero.read(chunkSize)) !== false) {
      json += str;
      if (json[0] !== "{")
        return false;
    }
    let data;
    try {
      data = JSON.parse(json);
    } catch (err) {
      return false;
    }
    if (!data.config || data.config.id !== ZOTERO_TRANSLATOR_INFO.translatorID)
      return false;
    return true;
  }
  async function doImport() {
    Translator.init("import");
    let str;
    let json = "";
    while ((str = Zotero.read(chunkSize)) !== false) {
      json += str;
    }
    const data = JSON.parse(json);
    if (!data.items || !data.items.length)
      return;
    const items = /* @__PURE__ */ new Set();
    for (const source of data.items) {
      simplifyForImport(source);
      delete source.relations;
      delete source.citekey;
      delete source.citationKey;
      delete source.uri;
      delete source.key;
      delete source.version;
      delete source.libraryID;
      delete source.collections;
      delete source.autoJournalAbbreviation;
      if (source.creators) {
        for (const creator of source.creators) {
          if (!creator.name) {
            creator.lastName = creator.lastName || "";
            creator.firstName = creator.firstName || "";
          }
        }
      }
      for (const [field, value] of Object.entries(source)) {
        if ((value != null ? value : "") === "")
          delete source[field];
      }
      if (Array.isArray(source.extra))
        source.extra = source.extra.join("\n");
      if (source.extra)
        source.extra = `\x1BBBT\x1B${source.extra}`;
      const error = valid.test(source);
      if (error)
        throw new Error(error);
      const item = new Zotero.Item();
      Object.assign(item, source);
      for (const att of item.attachments || []) {
        if (att.url)
          delete att.path;
        delete att.relations;
        delete att.uri;
      }
      await item.complete();
      items.add(source.itemID);
      Zotero.setProgress(items.size / data.items.length * 100);
    }
    Zotero.setProgress(100);
    const collections = Object.values(data.collections || {});
    for (const collection of collections) {
      collection.zoteroCollection = new Zotero.Collection();
      collection.zoteroCollection.type = "collection";
      collection.zoteroCollection.name = collection.name;
      collection.zoteroCollection.children = collection.items.filter((id) => {
        if (items.has(id))
          return true;
        log.error(`Collection ${collection.key} has non-existent item ${id}`);
        return false;
      }).map((id) => ({ type: "item", id }));
    }
    for (const collection of collections) {
      if (collection.parent && data.collections[collection.parent]) {
        data.collections[collection.parent].zoteroCollection.children.push(collection.zoteroCollection);
      } else {
        if (collection.parent)
          log.error(`Collection ${collection.key} has non-existent parent ${collection.parent}`);
        collection.parent = false;
      }
    }
    for (const collection of collections) {
      if (collection.parent)
        continue;
      collection.zoteroCollection.complete();
    }
  }
  function doExport() {
    Translator.init("export");
    let item;
    const data = {
      config: {
        id: ZOTERO_TRANSLATOR_INFO.translatorID,
        label: ZOTERO_TRANSLATOR_INFO.label,
        preferences: Translator.preferences,
        options: Translator.options
      },
      version: {
        zotero: Zotero.Utilities.getVersion(),
        bbt: version
      },
      collections: Translator.collections,
      items: []
    };
    const validAttachmentFields = /* @__PURE__ */ new Set(["relations", "uri", "itemType", "title", "path", "tags", "dateAdded", "dateModified", "seeAlso", "mimeType"]);
    while (item = Zotero.nextItem()) {
      if (Translator.options.dropAttachments && item.itemType === "attachment")
        continue;
      if (!Translator.preferences.testing) {
        const [, kind, lib, key2] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
        item.select = kind === "users" ? `zotero://select/library/items/${key2}` : `zotero://select/groups/${lib}/items/${key2}`;
      }
      delete item.collections;
      simplifyForExport(item, { dropAttachments: Translator.options.dropAttachments });
      item.relations = item.relations ? item.relations["dc:relation"] || [] : [];
      for (const att of item.attachments || []) {
        if (Translator.options.exportFileData && att.saveFile && att.defaultPath) {
          att.saveFile(att.defaultPath, true);
          att.path = att.defaultPath;
        } else if (att.localPath) {
          att.path = att.localPath;
        }
        if (!Translator.preferences.testing) {
          const [, kind, lib, key2] = att.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
          att.select = kind === "users" ? `zotero://select/library/items/${key2}` : `zotero://select/groups/${lib}/items/${key2}`;
        }
        if (!att.path)
          continue;
        att.relations = att.relations ? att.relations["dc:relation"] || [] : [];
        for (const field of Object.keys(att)) {
          if (!validAttachmentFields.has(field)) {
            delete att[field];
          }
        }
      }
      data.items.push(item);
    }
    if (Translator.preferences.testing)
      normalize(data);
    Zotero.write(stringify(data, null, "  "));
  }
  return __toCommonJS(BetterBibTeX_JSON_exports);
})();
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
var { Translator, detectImport, doImport, doExport } = BetterBibTeXJSON__Translator__detectImport__doImport__doExport;
