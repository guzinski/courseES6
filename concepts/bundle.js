"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classes examples
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.items = [];
  }

  _createClass(List, [{
    key: "addItem",
    value: function addItem(data) {
      this.items.push(data);
      console.log(this.items);
    }
  }]);

  return List;
}();

var TaskList = /*#__PURE__*/function (_List) {
  _inherits(TaskList, _List);

  var _super = _createSuper(TaskList);

  function TaskList() {
    _classCallCheck(this, TaskList);

    return _super.call(this);
  }

  return TaskList;
}(List);

var tasks = new TaskList();

document.getElementById("addTask").onclick = function () {
  tasks.addItem("New task");
}; // arrays handle examples


var arr = [1, 3, 4, 5, 8, 9];
console.log(arr); // multiple each item by it's own index.

var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr); // Sum all elements

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // return all even elesmnt in the array

var even = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(even); // Try to find an elemnt in the array.

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find); //Arrow Functions

var arrowExample = arr.map(function (item) {
  return item * 2;
});
console.log(arrowExample); //To return an object with arrows

var test = function test() {
  return {
    name: "Luciano"
  };
};

console.log(test()); //Functions with default value

function sumValues() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
}

console.log(sumValues(2));
console.log(sumValues()); // With Arrow

var sumArrow = function sumArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
};

console.log(sumArrow(5));
console.log(sumArrow()); // Destructuring

var obj = {
  name: "Luciano",
  age: 26,
  address: {
    city: "Porto Alegre",
    state: "Rs"
  }
};
var name = obj.name,
    age = obj.age,
    city = obj.address.city;
console.log(name);
console.log(age);
console.log(city); //With function Parameters

function printNameAndAge(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

printNameAndAge(obj); //REST

var user = {
  name1: "Luciano",
  age: 26,
  company: "Newwolf"
};

var name1 = user.name1,
    rest = _objectWithoutProperties(user, ["name1"]);

console.log(name1);
console.log(rest); // REST with arrays

var arr1 = [1, 2, 3, 4, 5];
var a = arr1[0],
    b = arr1[1],
    c = arr1.slice(2);
console.log(a);
console.log(b);
console.log(c); //With functions

function sumRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

function sumRest2(a, b) {
  return a + b + (arguments.length <= 2 ? 0 : arguments.length - 2);
}

console.log(sumRest(1, 2, 3, 4));
console.log(sumRest2(1, 2, 3, 4, 5, 6)); //Spread

var arr2 = [6, 7, 8, 9, 10];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

var user1 = _objectSpread(_objectSpread({}, user), {}, {
  name1: "Bruna"
});

console.log(user1); //Template literals Example use `` instead of "" or ''

console.log("My name is ".concat(user1.name1, " and my age is ").concat(user1.age)); //Short syntax

var userName = "Luciano";
var userAge = 26;
var user3 = {
  userName: userName,
  userAge: userAge,
  company: "Newolf"
};
console.log(user3);
