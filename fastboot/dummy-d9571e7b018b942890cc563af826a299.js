"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('dummy/components/liquid-append', ['exports', 'liquid-wormhole/components/liquid-append'], function (exports, _liquidWormholeComponentsLiquidAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidAppend['default'];
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define('dummy/components/liquid-destination', ['exports', 'liquid-wormhole/components/liquid-destination'], function (exports, _liquidWormholeComponentsLiquidDestination) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidDestination['default'];
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('dummy/components/liquid-wormhole', ['exports', 'liquid-wormhole/components/liquid-wormhole'], function (exports, _liquidWormholeComponentsLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidWormhole['default'];
    }
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('dummy/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/fastboot/ajax', ['exports'], function (exports) {
  /* globals najax */

  var nodeAjax = function nodeAjax(options) {
    najax(options);
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
    }
  };
});
define("dummy/initializers/fastboot/dom-helper-patches", ["exports"], function (exports) {
  /*globals Ember, URL*/
  exports["default"] = {
    name: "dom-helper-patches",

    initialize: function initialize(App) {
      // TODO: remove me
      Ember.HTMLBars.DOMHelper.prototype.protocolForURL = function (url) {
        var protocol = URL.parse(url).protocol;
        return protocol == null ? ':' : protocol;
      };

      // TODO: remove me https://github.com/tildeio/htmlbars/pull/425
      Ember.HTMLBars.DOMHelper.prototype.parseHTML = function (html) {
        return this.document.createRawHTMLSection(html);
      };
    }
  };
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3YoV+uv3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"main-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"main-nav\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/application/template.hbs" } });
});
define('dummy/pods/components/hello-component/component', ['exports', 'ember', 'dummy/pods/components/hello-component/template'], function (exports, _ember, _dummyPodsComponentsHelloComponentTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyPodsComponentsHelloComponentTemplate['default']
  });
});
define("dummy/pods/components/hello-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3+9tV990", "block": "{\"statements\":[[\"text\",\"Hello, World!\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/hello-component/template.hbs" } });
});
define('dummy/pods/components/main-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'nav',
    classNames: ['main-nav'],

    click: function click(event) {
      var $target = _ember['default'].$(event.target);
      var $c = this.$();

      if ($target !== $c) {
        if ($target.closest($c.find('a.nav-item')).length) {
          this.set('navOpen', false);
        }
      }
    },

    actions: {
      toggleNav: function toggleNav() {
        this.toggleProperty('navOpen');
      }
    }
  });
});
define("dummy/pods/components/main-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Iqi6SzHg", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse navbar-embossed\"],[\"static-attr\",\"role\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle fa fa-bars\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleNav\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"flush-element\"],[\"text\",\"Liquid Wormhole\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"navbar-collapse \",[\"helper\",[\"unless\"],[[\"get\",[\"navOpen\"]],\"collapse\"],null]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-left\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],2],[\"block\",[\"link-to\"],[\"docs\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],1],[\"block\",[\"link-to\"],[\"upgrading\"],[[\"class\",\"tagName\"],[\"nav-item\",\"li\"]],0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right navbar-break\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-item\"],[\"static-attr\",\"href\",\"https://github.com/pzuraq/liquid-wormhole\"],[\"flush-element\"],[\"text\",\"\\n          GitHub\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"fa fa-github\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Upgrading\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Docs\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Intro\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/main-nav/template.hbs" } });
});
define('dummy/pods/components/test-component/component', ['exports', 'ember', 'dummy/pods/components/test-component/template'], function (exports, _ember, _dummyPodsComponentsTestComponentTemplate) {
  exports['default'] = _ember['default'].Component.extend({
    layout: _dummyPodsComponentsTestComponentTemplate['default'],

    actions: {
      sendAction: function sendAction() {
        var action = this.get('action');
        if (action) {
          return action.apply(undefined, arguments);
        }
      }
    }
  });
});
define("dummy/pods/components/test-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "U2tzNvw+", "block": "{\"statements\":[[\"yield\",\"default\",[[\"helper\",[\"action\"],[[\"get\",[null]],\"sendAction\"],null]]],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/components/test-component/template.hbs" } });
});
define('dummy/pods/docs/components/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/docs/components/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2epmxwDw", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"If you'd rather send a component than use a block template, you can set the\\n\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"send\"],[\"close-element\"],[\"text\",\" property to either a component name or helper:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"example-button-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleHello\"]],[\"flush-element\"],[\"text\",\"\\n    Press Me\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showHello\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"<\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-built_in\"],[\"flush-element\"],[\"text\",\"action\"],[\"close-element\"],[\"text\",\" 'toggleHello'}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n  Press Me\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"</\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\" showHello}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole send=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"hello-component\\\"\"],[\"close-element\"],[\"text\",\" class=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"hello-world\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"liquid-wormhole\"],null,[[\"send\",\"class\"],[\"hello-component\",\"hello-world notification top-right\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/components/template.hbs" } });
});
define("dummy/pods/docs/destinations/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KC3UPfLu", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"If you don't want to use Liquid Wormhole for modals, or need to have more fine\\ngrained control of your wormholes, you can create a custom \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-destination\"],[\"close-element\"],[\"text\",\". By\\ndefault all \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\"s are rendered to the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"default\"],[\"close-element\"],[\"text\",\" destination. You can\\nreplace this destination, or create a new one and send wormholes to it using the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"to\"],[\"close-element\"],[\"text\",\"\\nproperty:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"<!-- Replaces the default liquid-destination -->\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-destination}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"<!-- Adds a new liquid-destination named \\\"my-destination\\\" -->\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-destination name=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"my-destination\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\\n...\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"<!-- Appends to the default destination above -->\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"<!-- Appends to the named destination above -->\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole to=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"my-destination\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/destinations/template.hbs" } });
});
define('dummy/pods/docs/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/docs/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hwyz0orm", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Liquid Wormhole v2 allows you to animate your components using the standard\\nLiquid Fire DSL. Just add a \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" component to your app, give it a\\nclass, and add animations in your \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"transitions.js\"],[\"close-element\"],[\"text\",\" file.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"By default, \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" components will render near the root of the\\ndocument, in a container that is positioned absolutely and that has the width\\nand height of the window. This container is meant to be used for UI components\\nsuch as popups, modals, tooltips - things that do not work in the normal\\ndocument flow. When choosing and building your animations, it's helpful to\\nthink as though you are animating the entire window frame at once.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"If you want to warp elements somewhere else, consider\\n\"],[\"block\",[\"link-to\"],[\"docs.destinations\"],null,2],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"example-button-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"id\",\"hello-world-button\"],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleHello\"]],[\"flush-element\"],[\"text\",\"\\n    Give it a shot!\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showHello\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-hbs\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"<\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-built_in\"],[\"flush-element\"],[\"text\",\"action\"],[\"close-element\"],[\"text\",\" 'toggleHello'}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n  Give it a shot!\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"</\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\" showHello}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"class\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"hello-world top-right\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n    Hello, World!\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-scss\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-selector-class\"],[\"flush-element\"],[\"text\",\".top-right\"],[\"close-element\"],[\"text\",\" {\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attribute\"],[\"flush-element\"],[\"text\",\"position\"],[\"close-element\"],[\"text\",\": fixed;\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attribute\"],[\"flush-element\"],[\"text\",\"top\"],[\"close-element\"],[\"text\",\": \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-number\"],[\"flush-element\"],[\"text\",\"10px\"],[\"close-element\"],[\"text\",\";\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attribute\"],[\"flush-element\"],[\"text\",\"right\"],[\"close-element\"],[\"text\",\": \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-number\"],[\"flush-element\"],[\"text\",\"10px\"],[\"close-element\"],[\"text\",\";\\n}\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".hasClass(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'hello-world'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-literal\"],[\"flush-element\"],[\"text\",\"true\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".use(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-down'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".reverse(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-up'\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      Hello, World!\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"hello-world notification top-right\"]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"creating a custom liquid-destination\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/index/template.hbs" } });
});
define("dummy/pods/docs/parameters/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FFOltzdS", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Below is a listing of all of the parameters that the liquid-wormhole components\\nwill accept as attributes.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"id\",\"-liquid-wormhole-parameters\"],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" Parameters\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"key\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"type\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"stack\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"String\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        The name of the stack that the wormhole will be a part of. Defaults to a\\n        unique ID.\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"Any\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        The value that will be passed on to the Liquid Fire transition matchers. Defaults to \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"true\"],[\"close-element\"],[\"text\",\".\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"send\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"Component Name or Helper\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        A component that will be rendered and wormholed.\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"click\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"Action Name or Helper\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        An action that will trigger when the wormhole is clicked.\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"to\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"String\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n          The name of the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-destination\"],[\"close-element\"],[\"text\",\" that the component will be appended to.\\n          Defaults to 'default'.\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"id\",\"-liquid-destination-parameters\"],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"liquid-destination\"],[\"close-element\"],[\"text\",\" Parameters\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"key\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"type\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"name\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"String\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n        The name of the destination. Defaults to 'default'.\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/parameters/template.hbs" } });
});
define('dummy/pods/docs/stacks/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showFirstStep: function showFirstStep() {
        this.toggleProperty('showFirstStep');
      },

      showSecondStep: function showSecondStep() {
        this.toggleProperty('showSecondStep');
      },

      closeModal: function closeModal() {
        this.toggleProperty('showFirstStep');
        this.toggleProperty('showSecondStep');
      },

      testing: function testing() {
        console.log('test');
      }
    }
  });
});
define("dummy/pods/docs/stacks/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lXmAUwUt", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"At times you may want to animate between different wormholes - for a complicated\\nmodal flow, or an onboarding flow, or something else. You can do this by\\nspecifying a stack name with the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"stack\"],[\"close-element\"],[\"text\",\" property. New wormholes will be pushed\\nonto an existing stack, and only the most recent wormhole will be showing. When\\nmatching in \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"toValue\"],[\"close-element\"],[\"text\",\", \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"fromValue\"],[\"close-element\"],[\"text\",\", or \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"betweenValues\"],[\"close-element\"],[\"text\",\", the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\" parameter\\nfor both the previous wormhole on the stack and the next one will be passed in.\\nYou can pass in any value you want in the property and match based on that.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The stack name will be applied as the id of the wormhole, allow you to match them using\\nthe \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"matchSelector\"],[\"close-element\"],[\"text\",\" helper from liquid-fire.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"example-button-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showFirstStep\"]],[\"flush-element\"],[\"text\",\"\\n    Open Dialogue\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showFirstStep\"]]],null,3],[\"block\",[\"if\"],[[\"get\",[\"showSecondStep\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"<\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\" \"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-built_in\"],[\"flush-element\"],[\"text\",\"action\"],[\"close-element\"],[\"text\",\" 'showFirstStep'}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n  Open Dialogue\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-tag\"],[\"flush-element\"],[\"text\",\"</\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"button\"],[\"close-element\"],[\"text\",\">\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\" showFirstStep}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"stack\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"modal-dialog\\\"\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-number\"],[\"flush-element\"],[\"text\",\"1\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n    ...\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\" showSecondStep}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"stack\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"modal-dialog\\\"\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-number\"],[\"flush-element\"],[\"text\",\"2\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n    ...\\n  \"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-builtin-name\"],[\"flush-element\"],[\"text\",\"if\"],[\"close-element\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".hasClass(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'modal-dialog'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-literal\"],[\"flush-element\"],[\"text\",\"true\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".use(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-up'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".reverse(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'fade'\"],[\"close-element\"],[\"text\",\")\\n);\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".hasClass(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'modal-dialog'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue((toValue, fromValue) => toValue > fromValue),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".use(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-right'\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n        Step Two\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-footer\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"closeModal\"]],[\"flush-element\"],[\"text\",\"\\n          Done\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"stack\",\"value\",\"class\"],[\"modal-dialog\",2,\"modal-content top-right\"]],0]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n        Step One\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-footer\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSecondStep\"]],[\"flush-element\"],[\"text\",\"\\n          Go on\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"stack\",\"value\",\"class\"],[\"modal-dialog\",1,\"modal-content top-right\"]],2]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/stacks/template.hbs" } });
});
define("dummy/pods/docs/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wg9GXChu", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav nav-pills nav-stacked\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.index\"],[[\"tagName\"],[\"li\"]],4],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.parameters\"],[[\"tagName\"],[\"li\"]],3],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.stacks\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.destinations\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.components\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-9\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Sending Components\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Custom Destinations\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Stacks\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Parameters\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"The Basics\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/docs/template.hbs" } });
});
define("dummy/pods/examples/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "C9rShzA5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav nav-pills nav-stacked\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.index\"],[[\"tagName\"],[\"li\"]],4],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.parameters\"],[[\"tagName\"],[\"li\"]],3],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.stacks\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.destinations\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"docs.components\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 col-sm-9\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Sending Components\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Custom Destinations\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Stacks\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"Parameters\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"The Basics\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/examples/template.hbs" } });
});
define('dummy/pods/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleHello: function toggleHello() {
        this.toggleProperty('showHello');
      }
    }
  });
});
define("dummy/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "w//Fae5Q", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"front-page-container-1\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"lead\"],[\"flush-element\"],[\"text\",\"\\n    Liquid-Fire meets Ember-Wormhole\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"front-page-container-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"id\",\"hello-world-button\"],[\"static-attr\",\"class\",\"btn btn-primary btn-embossed\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleHello\"]],[\"flush-element\"],[\"text\",\"\\n    Give it a shot!\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showHello\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{#\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-attr\"],[\"flush-element\"],[\"text\",\"class\"],[\"close-element\"],[\"text\",\"=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"hello-world\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n  Hello, World!\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-tag\"],[\"flush-element\"],[\"text\",\"{{/\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"liquid-wormhole\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".hasClass(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'hello-world'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-literal\"],[\"flush-element\"],[\"text\",\"true\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".use(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-down'\"],[\"close-element\"],[\"text\",\"),\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".reverse(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'to-right'\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Liquid Wormhole combines the ideas behind\\n\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/yapplabs/ember-wormhole.git\"],[\"flush-element\"],[\"text\",\"Ember Wormhole\"],[\"close-element\"],[\"text\",\" with\\nthe power of \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://ef4.github.io/liquid-fire/\"],[\"flush-element\"],[\"text\",\"Liquid Fire\"],[\"close-element\"],[\"text\",\" to provide an\\naccessible, easy-to-use toolkit for animating elements on a layer above your\\ntemplates, making positioning and rendering simple.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      Hello, World!\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"hello-world notification\"]],0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/index/template.hbs" } });
});
define('dummy/pods/scenarios/actions-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleWormhole: function toggleWormhole() {
        this.toggleProperty('hideWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/actions-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "aDhV+c0s", "block": "{\"statements\":[[\"block\",[\"unless\"],[[\"get\",[\"hideWormhole\"]]],null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"get\",[\"someAction\"]]]],[\"flush-element\"],[\"text\",\"Toggle Wormhole\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"someAction\"]},{\"statements\":[[\"block\",[\"test-component\"],null,[[\"action\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleWormhole\"],null]]],0]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/actions-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/component-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      toggleWormhole: function toggleWormhole() {
        this.toggleProperty('hideWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/component-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9EOnVdRB", "block": "{\"statements\":[[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleWormhole\"]],[\"flush-element\"],[\"text\",\"Toggle Wormhole\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"hideWormhole\"]]],null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      testing123\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"test-component\"],null,null,0]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/component-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/liquid-fire-in-wormhole/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    showingOther: true,
    actions: {
      toggleContent: function toggleContent() {
        this.toggleProperty('showingOther');
      }
    }
  });
});
define("dummy/pods/scenarios/liquid-fire-in-wormhole/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "R3YGZ9BA", "block": "{\"statements\":[[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleContent\"]],[\"flush-element\"],[\"text\",\"\\n  Toggle Inner Content\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"id\",\"not-showing-other\"],[\"flush-element\"],[\"text\",\"Don't Show Other\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"id\",\"showing-other\"],[\"flush-element\"],[\"text\",\"Show Other\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"content-box\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"liquid-if\"],[[\"get\",[\"showingOther\"]]],null,1,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/liquid-fire-in-wormhole/template.hbs" } });
});
define('dummy/pods/scenarios/manual-destinations/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showWormhole: function showWormhole() {
        this.toggleProperty('showWormhole');
      }
    }
  });
});
define("dummy/pods/scenarios/manual-destinations/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tJBWr9uo", "block": "{\"statements\":[[\"append\",[\"helper\",[\"liquid-target\"],null,[[\"name\"],[\"some-target\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showWormhole\"]],[\"flush-element\"],[\"text\",\"\\n  Show Wormhole\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showWormhole\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    Testing\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"to\",\"class\"],[\"some-target\",\"blue-box\"]],0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/manual-destinations/template.hbs" } });
});
define("dummy/pods/scenarios/manual-target/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8bJ3RlzS", "block": "{\"statements\":[[\"append\",[\"helper\",[\"liquid-destination\"],null,[[\"name\"],[\"some-destination\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showWormhole\"]],[\"flush-element\"],[\"text\",\"\\n  Show Wormhole\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showWormhole\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    Testing\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"to\",\"class\"],[\"some-destination\",\"blue-box\"]],0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/manual-target/template.hbs" } });
});
define('dummy/pods/scenarios/nested-wormholes/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      showInner: function showInner() {
        this.toggleProperty('showingInner');
      }
    }
  });
});
define("dummy/pods/scenarios/nested-wormholes/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YLmVPn+k", "block": "{\"statements\":[[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"green-box\"]],2],[\"text\",\"\\n\"],[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"red-box\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  Third Wormhole\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    Second Wormhole\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  First Wormhole\\n\\n\"],[\"block\",[\"liquid-wormhole\"],null,[[\"class\"],[\"blue-box\"]],1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/nested-wormholes/template.hbs" } });
});
define("dummy/pods/scenarios/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6Xhmrfzt", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/scenarios/template.hbs" } });
});
define("dummy/pods/upgrading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "P8vpWG2V", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"id\",\"upgrading-from-liquid-wormhole-v1\"],[\"flush-element\"],[\"text\",\"Upgrading from Liquid Wormhole v1\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"One of the overall goals of Liquid Wormhole v2 was to simplify the API and bring\\nit more inline with vanilla Liquid Fire. Several breaking changes have been\\nmade, and this article is meant as a guide to summarize them and describe an\\nupgrade path.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"id\",\"removing-the-to-attribute-and-target-helper\"],[\"flush-element\"],[\"text\",\"Removing the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"to\"],[\"close-element\"],[\"text\",\" attribute and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"target\"],[\"close-element\"],[\"text\",\" helper\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"In v2, the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"to\"],[\"close-element\"],[\"text\",\" attribute is no longer needed by default, and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"target\"],[\"close-element\"],[\"text\",\" is not\\nused to match transitions. You can either change \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"to\"],[\"close-element\"],[\"text\",\" to \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"stack\"],[\"close-element\"],[\"text\",\", or add it to\\nyour wormhole's classes. You'll then be able to match it in your transitions\\nfile using \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"this.matchSelector\"],[\"close-element\"],[\"text\",\" or \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"this.hasClass\"],[\"close-element\"],[\"text\",\" respectively.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"old-\"],[\"flush-element\"],[\"text\",\"Old:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-hbs\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole to=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"popup\\\"\"],[\"close-element\"],[\"text\",\"}}\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"target\"],[\"close-element\"],[\"text\",\"(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'popup'\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"new-\"],[\"flush-element\"],[\"text\",\"New:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-hbs\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole class=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"popup\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"<!-- or -->\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-template-variable\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole stack=\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"\\\"popup\\\"\"],[\"close-element\"],[\"text\",\"}}\"],[\"close-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"xml\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".hasClass(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'popup'\"],[\"close-element\"],[\"text\",\")\\n);\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-comment\"],[\"flush-element\"],[\"text\",\"// or\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".matchSelector(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-string\"],[\"flush-element\"],[\"text\",\"'#popup'\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"id\",\"replacing-the-onopenwormhole-and-onclosewormhole-helpers\"],[\"flush-element\"],[\"text\",\"Replacing the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onOpenWormhole\"],[\"close-element\"],[\"text\",\" and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onCloseWormhole\"],[\"close-element\"],[\"text\",\" helpers\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onOpenWormhole\"],[\"close-element\"],[\"text\",\" and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onCloseWormhole\"],[\"close-element\"],[\"text\",\" helpers are deprecated in favor of\\nusing the standard \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"toValue\"],[\"close-element\"],[\"text\",\", \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"fromValue\"],[\"close-element\"],[\"text\",\", and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"betweenValues\"],[\"close-element\"],[\"text\",\" matcher\\nfunctions. Whenever a wormhole is opening for the first time, the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"fromValue\"],[\"close-element\"],[\"text\",\"\\nwill be \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"null\"],[\"close-element\"],[\"text\",\", and whenever a wormhole is closing, the so will the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"toValue\"],[\"close-element\"],[\"text\",\".\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"old-\"],[\"flush-element\"],[\"text\",\"Old:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  onOpenWormhole()\\n);\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  onCloseWormhole()\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"new-\"],[\"flush-element\"],[\"text\",\"New:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-literal\"],[\"flush-element\"],[\"text\",\"true\"],[\"close-element\"],[\"text\",\")\\n);\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-literal\"],[\"flush-element\"],[\"text\",\"false\"],[\"close-element\"],[\"text\",\")\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"id\",\"replacing-tovalue-and-fromvalue-matchers\"],[\"flush-element\"],[\"text\",\"Replacing \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"toValue\"],[\"close-element\"],[\"text\",\" and \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"fromValue\"],[\"close-element\"],[\"text\",\" matchers\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Wormholes are no longer directly passed in to their transition matchers.\\nInstead, the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"value\"],[\"close-element\"],[\"text\",\" property for a wormhole is passed in. You can move any of\\nthe properties that you had into a \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"hash\"],[\"close-element\"],[\"text\",\" helper and everything should work.\\nRemember, you may need to perform null checking.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"old-\"],[\"flush-element\"],[\"text\",\"Old:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-hbs\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole index=1}}\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-function\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-params\"],[\"flush-element\"],[\"text\",\"(toValue, fromValue)\"],[\"close-element\"],[\"text\",\" =>\"],[\"close-element\"],[\"text\",\" toValue.index > oldValue.index)\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"id\",\"new-\"],[\"flush-element\"],[\"text\",\"New:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-hbs\"],[\"flush-element\"],[\"text\",\"{{liquid-wormhole value=(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-name\"],[\"flush-element\"],[\"text\",\"hash\"],[\"close-element\"],[\"text\",\" index=1)}}\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"static-attr\",\"class\",\"lang-js\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".transition(\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"this\"],[\"close-element\"],[\"text\",\".toValue(\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-function\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-params\"],[\"flush-element\"],[\"text\",\"(toValue, fromValue)\"],[\"close-element\"],[\"text\",\" =>\"],[\"close-element\"],[\"text\",\" {\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hljs-keyword\"],[\"flush-element\"],[\"text\",\"return\"],[\"close-element\"],[\"text\",\" toValue && fromValue && toValue.index > oldValue.index;\\n  })\\n);\\n\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/pods/upgrading/template.hbs" } });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('docs', function () {
      this.route('parameters');
      this.route('stacks');
      this.route('destinations');
      this.route('components');
    });
    this.route('upgrading');
    this.route('scenarios', function () {
      this.route('manual-destinations');
      this.route('nested-wormholes');
      this.route('component-in-wormhole');
      this.route('actions-in-wormhole');
      this.route('liquid-fire-in-wormhole');
    });
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/fastboot', ['exports', 'ember'], function (exports, _ember) {

  var alias = _ember['default'].computed.alias;
  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Service.extend({
    cookies: alias('_fastbootInfo.cookies'),
    headers: alias('_fastbootInfo.headers'),
    host: computed(function () {
      return this._fastbootInfo.host();
    }),
    isFastBoot: computed(function () {
      return typeof FastBoot !== 'undefined';
    })
  });
});
/* global FastBoot */
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/action", "liquid-fire/running-transition", "liquid-fire/transition-map", "ember-weakmap"], function (exports, _liquidFireAction, _liquidFireRunningTransition, _liquidFireTransitionMap, _emberWeakmap) {

  var wormholeActionMap = new _emberWeakmap["default"]();

  exports["default"] = _liquidFireTransitionMap["default"].extend({
    transitionFor: function transitionFor(conditions) {
      if (conditions.matchContext && conditions.matchContext.helperName === 'liquid-wormhole' || conditions.helperName === 'liquid-wormhole') {

        var versions = conditions.versions;

        conditions.versions = versions.map(function (version) {
          return version.value || version;
        });
        conditions.parentElement = conditions.parentElement.find('.liquid-wormhole-element');
        conditions.firstTime = 'no';

        var rule = this.constraintsFor(conditions).bestMatch(conditions);
        var action = undefined;

        if (rule) {
          if (wormholeActionMap.has(rule)) {
            action = wormholeActionMap.get(rule);
          } else {
            action = new _liquidFireAction["default"]('wormhole', [{ use: rule.use }]);
            action.validateHandler(this);

            wormholeActionMap.set(rule, action);
          }
        } else {
          action = this.defaultAction();
        }

        return new _liquidFireRunningTransition["default"](this, versions, action);
      } else {
        return this._super(conditions);
      }
    }
  });
});
define('dummy/services/liquid-wormhole', ['exports', 'liquid-wormhole/services/liquid-wormhole'], function (exports, _liquidWormholeServicesLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeServicesLiquidWormhole['default'];
    }
  });
});
define('dummy/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.hasClass('red-box'), this.use('fade'));

    this.transition(this.hasClass('hello-world'), this.toValue(true), this.use('to-down', { duration: 400, easing: [200, 22] }), this.reverse('to-right', { duration: 400, easing: [200, 22] }));

    this.transition(this.matchSelector('#modal-dialog'), this.toValue(false), this.use('to-up'), this.reverse('fade'));

    this.transition(this.matchSelector('#modal-dialog'), this.toValue(function (toValue, fromValue) {
      return toValue > fromValue;
    }), this.use('to-right'));

    this.transition(this.hasClass('fly-to'), this.toValue(true), this.use('to-left', { duration: 2000, easing: [200, 22] }), this.reverse('to-right', { duration: 2000, easing: [200, 22] }));

    this.transition(this.hasClass('modal-backdrop'), this.use('fade'));

    this.transition(this.hasClass('outer-wormhole'), this.use('to-down', { duration: 400, easing: [200, 22] }));

    this.transition(this.hasClass('middle-wormhole'), this.use('to-down', { duration: 400, easing: [200, 22] }));

    this.transition(this.hasClass('inner-wormhole'), this.use('to-down', { duration: 300, easing: [500, 22] }));

    this.transition(this.hasClass('blue-box'), this.use('to-down', { duration: 1500 }));
  };
});
define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('dummy/transitions/wormhole', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = wormhole;

  function wormhole(_ref) {
    var _this = this;

    var use = _ref.use;

    var oldWormholeElement = undefined,
        newWormholeElement = undefined;

    if (this.oldElement) {
      oldWormholeElement = this.oldElement.find('.liquid-wormhole-element:last-child');

      this.oldElement = null;

      if (oldWormholeElement.length > 0) {
        var newChild = oldWormholeElement.clone();
        newChild.addClass('liquid-wormhole-temp-element');

        oldWormholeElement.css({ visibility: 'hidden' });
        oldWormholeElement.find('.liquid-child').css({ visibility: 'hidden' });

        var offset = oldWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(oldWormholeElement.parent());
        this.oldElement = newChild;
      }
    }

    if (this.newElement) {
      newWormholeElement = this.newElement.find('.liquid-wormhole-element:last-child');

      this.newElement = null;

      if (newWormholeElement.length > 0) {
        var newChild = newWormholeElement.clone();

        newWormholeElement.css({ visibility: 'hidden' });
        newWormholeElement.find('.liquid-child').css({ visibility: 'hidden' });

        var offset = newWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(newWormholeElement.parent());
        this.newElement = newChild;
      }
    }

    var animation;
    if (typeof use.handler === 'function') {
      animation = use.handler;
    } else {
      animation = context.lookup(use.name);
    }

    return animation.apply(this, use.args)['finally'](function () {
      if (_this.oldElement && oldWormholeElement) {
        _this.oldElement.remove();
        oldWormholeElement.css({ visibility: 'visible' });
        oldWormholeElement.find('.liquid-child').css({ visibility: 'visible' });
      }
      if (_this.newElement && newWormholeElement) {
        _this.newElement.remove();
        newWormholeElement.css({ visibility: 'visible' });
        newWormholeElement.find('.liquid-child').css({ visibility: 'visible' });
      }
    });
  }

  ;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var exports = {'default': {"modulePrefix":"dummy","podModulePrefix":"dummy/pods","environment":"production","rootURL":"/liquid-wormhole","locationType":"hash","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false}},"contentSecurityPolicy":{"default-src":"'none'","script-src":"'self'","font-src":"'self' https://maxcdn.bootstrapcdn.com","connect-src":"'self'","img-src":"'self'","style-src":"'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com","media-src":"'self'"},"APP":{"name":"liquid-wormhole","version":"2.0.5+08c8bac5","autoboot":false},"exportApplicationGlobal":false}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

/* jshint ignore:end */

/* jshint ignore:start */


define('~fastboot/app-factory', ['dummy/app', 'dummy/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
