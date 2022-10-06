// TypeScript adds types and visibility modifiers to JavaScript classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var bookName = new Book();
bookName.nameOf = "Atomic Habits";
console.log(bookName);
/*
  Members: Visibility
  Class members also be given special modifiers which affect visibility.  */
var Book1 = /** @class */ (function () {
    function Book1(name) {
        this.name = name;
    }
    Book1.prototype.getName = function () {
        return this.name;
    };
    return Book1;
}());
var book1 = new Book1("Atomic Habits");
console.log(book1.getName()); // person.name isn't accessible from outside the class since it's private
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var myRect = new Rectangle(100, 20);
console.log(myRect.getArea());
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle1;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle1));
// Abstract Classes
//Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
