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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _filterableproducttable = __webpack_require__(2);

	var _filterableproducttable2 = _interopRequireDefault(_filterableproducttable);

	var _products = __webpack_require__(11);

	var _products2 = _interopRequireDefault(_products);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _filterableproducttable2.default({
	    el: (0, _jquery2.default)('#app'),
	    collection: new _products2.default([{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }])
		});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _searchbar = __webpack_require__(4);

	var _searchbar2 = _interopRequireDefault(_searchbar);

	var _producttable = __webpack_require__(6);

	var _producttable2 = _interopRequireDefault(_producttable);

	var _state = __webpack_require__(10);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FilterableProductTable = function (_Backbone$View) {
	    _inherits(FilterableProductTable, _Backbone$View);

	    function FilterableProductTable() {
	        _classCallCheck(this, FilterableProductTable);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(FilterableProductTable).apply(this, arguments));
	    }

	    _createClass(FilterableProductTable, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.state = new _state2.default();
	            this.render();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            new _searchbar2.default({
	                model: this.state
	            }).$el.appendTo(this.$el);

	            new _producttable2.default({
	                model: this.state,
	                collection: this.collection
	            }).$el.appendTo(this.$el);

	            return this;
	        }
	    }]);

	    return FilterableProductTable;
	}(_backbone2.default.View);

		exports.default = FilterableProductTable;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Backbone;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _handlebars = __webpack_require__(5);

	var _handlebars2 = _interopRequireDefault(_handlebars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_Backbone$View) {
	    _inherits(SearchBar, _Backbone$View);

	    function SearchBar() {
	        _classCallCheck(this, SearchBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	    }

	    _createClass(SearchBar, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.render();
	        }
	    }, {
	        key: 'tagName',
	        value: function tagName() {
	            return 'form';
	        }
	    }, {
	        key: 'events',
	        value: function events() {
	            return {
	                'keyup [type="text"]': 'setFilterText',
	                'click [type="checkbox"]': 'setIsStockOnly'
	            };
	        }
	    }, {
	        key: 'setIsStockOnly',
	        value: function setIsStockOnly(event) {
	            var checkbox = (0, _jquery2.default)(event.target);
	            this.model.set('isStockOnly', checkbox.is(':checked'));
	        }
	    }, {
	        key: 'setFilterText',
	        value: function setFilterText(event) {
	            var input = (0, _jquery2.default)(event.target);
	            this.model.set('filterText', input.val());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.$el.html(this.template({}));
	            return this;
	        }
	    }, {
	        key: 'template',
	        get: function get() {
	            return _handlebars2.default.compile((0, _jquery2.default)('#search-bar-template').html());
	        }
	    }]);

	    return SearchBar;
	}(_backbone2.default.View);

		exports.default = SearchBar;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Handlebars;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _handlebars = __webpack_require__(5);

	var _handlebars2 = _interopRequireDefault(_handlebars);

	var _productcategoryrow = __webpack_require__(8);

	var _productcategoryrow2 = _interopRequireDefault(_productcategoryrow);

	var _productrow = __webpack_require__(9);

	var _productrow2 = _interopRequireDefault(_productrow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductTable = function (_Backbone$View) {
	    _inherits(ProductTable, _Backbone$View);

	    function ProductTable() {
	        _classCallCheck(this, ProductTable);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductTable).apply(this, arguments));
	    }

	    _createClass(ProductTable, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.listenTo(this.model, 'change', this.render);
	            this.render();
	        }
	    }, {
	        key: 'tagName',
	        value: function tagName() {
	            return 'table';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            this.unregisterSubviews();
	            this.$el.html(this.template({}));

	            var filterText = this.model.get('filterText');
	            var isStockOnly = this.model.get('isStockOnly');
	            var rows = this.$('tbody');
	            var lastCategory = null;

	            this.collection.each(function (model) {
	                if (model.get('name').indexOf(filterText) === -1 || isStockOnly && !model.get('stocked')) {
	                    return;
	                }

	                if (model.get('category') !== lastCategory) {
	                    var category = new _productcategoryrow2.default({
	                        model: model
	                    });
	                    category.$el.appendTo(rows);
	                    _this2.registerSubview(category);

	                    lastCategory = model.get('category');
	                }

	                var product = new _productrow2.default({
	                    model: model
	                });
	                product.$el.appendTo(rows);
	                _this2.registerSubview(product);
	            });

	            return this;
	        }
	    }, {
	        key: 'registerSubview',
	        value: function registerSubview(view) {
	            this._subviews = this._subviews || [];
	            this._subviews.push(view);
	        }
	    }, {
	        key: 'unregisterSubviews',
	        value: function unregisterSubviews() {
	            if (this._subviews && this._subviews.length) {
	                _underscore2.default.invoke(this._subviews, 'remove');
	                this._subviews = [];
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this.unregisterSubviews();
	            _get(Object.getPrototypeOf(ProductTable.prototype), 'remove', this).call(this);
	        }
	    }, {
	        key: 'template',
	        get: function get() {
	            return _handlebars2.default.compile((0, _jquery2.default)('#product-table-template').html());
	        }
	    }]);

	    return ProductTable;
	}(_backbone2.default.View);

		exports.default = ProductTable;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _handlebars = __webpack_require__(5);

	var _handlebars2 = _interopRequireDefault(_handlebars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductCategoryRow = function (_Backbone$View) {
	    _inherits(ProductCategoryRow, _Backbone$View);

	    function ProductCategoryRow() {
	        _classCallCheck(this, ProductCategoryRow);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductCategoryRow).apply(this, arguments));
	    }

	    _createClass(ProductCategoryRow, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.render();
	        }
	    }, {
	        key: 'tagName',
	        value: function tagName() {
	            return 'tr';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.$el.html(this.template(this.model.toJSON()));
	            return this;
	        }
	    }, {
	        key: 'template',
	        get: function get() {
	            return _handlebars2.default.compile((0, _jquery2.default)('#product-category-row-template').html());
	        }
	    }]);

	    return ProductCategoryRow;
	}(_backbone2.default.View);

		exports.default = ProductCategoryRow;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _handlebars = __webpack_require__(5);

	var _handlebars2 = _interopRequireDefault(_handlebars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductRow = function (_Backbone$View) {
	    _inherits(ProductRow, _Backbone$View);

	    function ProductRow() {
	        _classCallCheck(this, ProductRow);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductRow).apply(this, arguments));
	    }

	    _createClass(ProductRow, [{
	        key: 'initialize',
	        value: function initialize() {
	            this.render();
	        }
	    }, {
	        key: 'tagName',
	        value: function tagName() {
	            return 'tr';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.$el.html(this.template(this.model.toJSON()));
	            return this;
	        }
	    }, {
	        key: 'template',
	        get: function get() {
	            return _handlebars2.default.compile((0, _jquery2.default)('#product-row-template').html());
	        }
	    }]);

	    return ProductRow;
	}(_backbone2.default.View);

		exports.default = ProductRow;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var State = function (_Backbone$Model) {
	    _inherits(State, _Backbone$Model);

	    function State() {
	        _classCallCheck(this, State);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(State).apply(this, arguments));
	    }

	    _createClass(State, [{
	        key: 'defaults',
	        get: function get() {
	            return {
	                filterText: '',
	                inStockOnly: false
	            };
	        }
	    }]);

	    return State;
	}(_backbone2.default.Model);

		exports.default = State;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	var _product = __webpack_require__(12);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Products = function (_Backbone$Collection) {
	    _inherits(Products, _Backbone$Collection);

	    function Products() {
	        _classCallCheck(this, Products);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Products).apply(this, arguments));
	    }

	    _createClass(Products, [{
	        key: 'model',
	        get: function get() {
	            return _product2.default;
	        }
	    }]);

	    return Products;
	}(_backbone2.default.Collection);

		exports.default = Products;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _backbone = __webpack_require__(3);

	var _backbone2 = _interopRequireDefault(_backbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Product = function (_Backbone$Model) {
	    _inherits(Product, _Backbone$Model);

	    function Product() {
	        _classCallCheck(this, Product);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Product).apply(this, arguments));
	    }

	    _createClass(Product, [{
	        key: 'defaults',
	        get: function get() {
	            return {
	                category: '',
	                price: '',
	                stocked: false,
	                name: ''
	            };
	        }
	    }]);

	    return Product;
	}(_backbone2.default.Model);

		exports.default = Product;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDBiZjIwNTg5ZDY3Mjg0YTJhOGFkIiwid2VicGFjazovLy9hcHAvYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9hcHAvdmlld3MvZmlsdGVyYWJsZXByb2R1Y3R0YWJsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiIiwid2VicGFjazovLy9hcHAvdmlld3Mvc2VhcmNoYmFyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkhhbmRsZWJhcnNcIiIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL3Byb2R1Y3R0YWJsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJfXCIiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9wcm9kdWN0Y2F0ZWdvcnlyb3cuanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9wcm9kdWN0cm93LmpzIiwid2VicGFjazovLy9hcHAvbW9kZWxzL3N0YXRlLmpzIiwid2VicGFjazovLy9hcHAvY29sbGVjdGlvbnMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9tb2RlbHMvcHJvZHVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAwYmYyMDU4OWQ2NzI4NGEyYThhZFxuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRmlsdGVyYWJsZVByb2R1Y3RUYWJsZSBmcm9tICcuL3ZpZXdzL2ZpbHRlcmFibGVwcm9kdWN0dGFibGUnO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vY29sbGVjdGlvbnMvcHJvZHVjdHMnO1xuXG5uZXcgRmlsdGVyYWJsZVByb2R1Y3RUYWJsZSh7XG4gICAgZWw6ICQoJyNhcHAnKSxcbiAgICBjb2xsZWN0aW9uOiBuZXcgUHJvZHVjdHMoW1xuICAgICAgICB7IGNhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ0OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkZvb3RiYWxsXCIgfSxcbiAgICAgICAgeyBjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkOS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkJhc2ViYWxsXCIgfSxcbiAgICAgICAgeyBjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkMjkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiQmFza2V0YmFsbFwiIH0sXG4gICAgICAgIHsgY2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiaVBvZCBUb3VjaFwiIH0sXG4gICAgICAgIHsgY2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDM5OS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJpUGhvbmUgNVwiIH0sXG4gICAgICAgIHsgY2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDE5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIk5leHVzIDdcIiB9XG4gICAgXSlcbn0pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvYXBwLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpRdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hiYXInO1xuaW1wb3J0IFByb2R1Y3RUYWJsZSBmcm9tICcuL3Byb2R1Y3R0YWJsZSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi4vbW9kZWxzL3N0YXRlJztcblxuY2xhc3MgRmlsdGVyYWJsZVByb2R1Y3RUYWJsZSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuICAgIFxuICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIG5ldyBTZWFyY2hCYXIoe1xuICAgICAgICAgICAgbW9kZWw6IHRoaXMuc3RhdGVcbiAgICAgICAgfSkuJGVsLmFwcGVuZFRvKHRoaXMuJGVsKTtcblxuICAgICAgICBuZXcgUHJvZHVjdFRhYmxlKHtcbiAgICAgICAgICAgIG1vZGVsOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogdGhpcy5jb2xsZWN0aW9uXG4gICAgICAgIH0pLiRlbC5hcHBlbmRUbyh0aGlzLiRlbCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmFibGVQcm9kdWN0VGFibGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC92aWV3cy9maWx0ZXJhYmxlcHJvZHVjdHRhYmxlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiQmFja2JvbmVcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuICAgIFxuICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHRhZ05hbWUgKCkge1xuICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgIH1cblxuICAgIGV2ZW50cyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAna2V5dXAgW3R5cGU9XCJ0ZXh0XCJdJzogJ3NldEZpbHRlclRleHQnLFxuICAgICAgICAgICAgJ2NsaWNrIFt0eXBlPVwiY2hlY2tib3hcIl0nOiAnc2V0SXNTdG9ja09ubHknXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIEhhbmRsZWJhcnMuY29tcGlsZSgkKCcjc2VhcmNoLWJhci10ZW1wbGF0ZScpLmh0bWwoKSk7XG4gICAgfVxuXG4gICAgc2V0SXNTdG9ja09ubHkgKGV2ZW50KSB7XG4gICAgICAgIGxldCBjaGVja2JveCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2lzU3RvY2tPbmx5JywgY2hlY2tib3guaXMoJzpjaGVja2VkJykpO1xuICAgIH1cblxuICAgIHNldEZpbHRlclRleHQgKGV2ZW50KSB7XG4gICAgICAgIGxldCBpbnB1dCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2ZpbHRlclRleHQnLCBpbnB1dC52YWwoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHsgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvdmlld3Mvc2VhcmNoYmFyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJIYW5kbGViYXJzXCJcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5pbXBvcnQgUHJvZHVjdENhdGVnb3J5Um93IGZyb20gJy4vcHJvZHVjdGNhdGVnb3J5cm93JztcbmltcG9ydCBQcm9kdWN0Um93IGZyb20gJy4vcHJvZHVjdHJvdyc7XG5cbmNsYXNzIFByb2R1Y3RUYWJsZSBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuICAgIFxuICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2UnLCB0aGlzLnJlbmRlcik7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGFnTmFtZSAoKSB7XG4gICAgICAgIHJldHVybiAndGFibGUnO1xuICAgIH1cblxuICAgIGdldCB0ZW1wbGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiBIYW5kbGViYXJzLmNvbXBpbGUoJCgnI3Byb2R1Y3QtdGFibGUtdGVtcGxhdGUnKS5odG1sKCkpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlclN1YnZpZXdzKCk7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh7IH0pKTtcblxuICAgICAgICBsZXQgZmlsdGVyVGV4dCA9IHRoaXMubW9kZWwuZ2V0KCdmaWx0ZXJUZXh0Jyk7XG4gICAgICAgIGxldCBpc1N0b2NrT25seSA9IHRoaXMubW9kZWwuZ2V0KCdpc1N0b2NrT25seScpO1xuICAgICAgICBsZXQgcm93cyA9IHRoaXMuJCgndGJvZHknKTtcbiAgICAgICAgbGV0IGxhc3RDYXRlZ29yeSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLmVhY2gobW9kZWwgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGVsLmdldCgnbmFtZScpLmluZGV4T2YoZmlsdGVyVGV4dCkgPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgKGlzU3RvY2tPbmx5ICYmICFtb2RlbC5nZXQoJ3N0b2NrZWQnKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtb2RlbC5nZXQoJ2NhdGVnb3J5JykgIT09IGxhc3RDYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBQcm9kdWN0Q2F0ZWdvcnlSb3coe1xuICAgICAgICAgICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS4kZWwuYXBwZW5kVG8ocm93cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU3VidmlldyhjYXRlZ29yeSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0Q2F0ZWdvcnkgPSBtb2RlbC5nZXQoJ2NhdGVnb3J5Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwcm9kdWN0ID0gbmV3IFByb2R1Y3RSb3coe1xuICAgICAgICAgICAgICAgIG1vZGVsOiBtb2RlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9kdWN0LiRlbC5hcHBlbmRUbyhyb3dzKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTdWJ2aWV3KHByb2R1Y3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZWdpc3RlclN1YnZpZXcgKHZpZXcpIHtcbiAgICAgICAgdGhpcy5fc3Vidmlld3MgPSB0aGlzLl9zdWJ2aWV3cyB8fCBbXTtcbiAgICAgICAgdGhpcy5fc3Vidmlld3MucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyU3Vidmlld3MgKCkge1xuICAgICAgICBpZiAodGhpcy5fc3Vidmlld3MgJiYgdGhpcy5fc3Vidmlld3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBfLmludm9rZSh0aGlzLl9zdWJ2aWV3cywgJ3JlbW92ZScpO1xuICAgICAgICAgICAgdGhpcy5fc3Vidmlld3MgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZSAoKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlclN1YnZpZXdzKCk7XG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGFibGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC92aWV3cy9wcm9kdWN0dGFibGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIl9cIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5cbmNsYXNzIFByb2R1Y3RDYXRlZ29yeVJvdyBleHRlbmRzIEJhY2tib25lLlZpZXcge1xuICAgIFxuICAgIGluaXRpYWxpemUgKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHRhZ05hbWUgKCkge1xuICAgICAgICByZXR1cm4gJ3RyJztcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUgKCkge1xuICAgICAgICByZXR1cm4gSGFuZGxlYmFycy5jb21waWxlKCQoJyNwcm9kdWN0LWNhdGVnb3J5LXJvdy10ZW1wbGF0ZScpLmh0bWwoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwudG9KU09OKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXRlZ29yeVJvdztcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL3ZpZXdzL3Byb2R1Y3RjYXRlZ29yeXJvdy5qc1xuICoqLyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuaW1wb3J0IEhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5cbmNsYXNzIFByb2R1Y3RSb3cgZXh0ZW5kcyBCYWNrYm9uZS5WaWV3IHtcbiAgICBcbiAgICBpbml0aWFsaXplICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0YWdOYW1lICgpIHtcbiAgICAgICAgcmV0dXJuICd0cic7XG4gICAgfVxuXG4gICAgZ2V0IHRlbXBsYXRlICgpIHtcbiAgICAgICAgcmV0dXJuIEhhbmRsZWJhcnMuY29tcGlsZSgkKCcjcHJvZHVjdC1yb3ctdGVtcGxhdGUnKS5odG1sKCkpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLm1vZGVsLnRvSlNPTigpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Um93O1xuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL3ZpZXdzL3Byb2R1Y3Ryb3cuanNcbiAqKi8iLCJpbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAgIGdldCBkZWZhdWx0cyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWx0ZXJUZXh0OiAnJyxcbiAgICAgICAgICAgIGluU3RvY2tPbmx5OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvbW9kZWxzL3N0YXRlLmpzXG4gKiovIiwiaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL21vZGVscy9wcm9kdWN0JztcblxuY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBCYWNrYm9uZS5Db2xsZWN0aW9uIHtcblxuICAgIGdldCBtb2RlbCAoKSB7XG4gICAgICAgIHJldHVybiBQcm9kdWN0O1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2NvbGxlY3Rpb25zL3Byb2R1Y3RzLmpzXG4gKiovIiwiaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcblxuY2xhc3MgUHJvZHVjdCBleHRlbmRzIEJhY2tib25lLk1vZGVsIHtcblxuICAgIGdldCBkZWZhdWx0cyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJycsXG4gICAgICAgICAgICBwcmljZTogJycsXG4gICAgICAgICAgICBzdG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9tb2RlbHMvcHJv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