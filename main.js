//   CLASS TYPE ANNOTATIONS 
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
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product1 = new Product(1, "Hair color", 2000);
console.log(product1.getProductInfo());
// -------------------------------------------------------------------
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.name = name;
    }
    return MyClassPublic;
}());
var instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret); // Accessing the private property from within the class
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My secret");
// console.log(instance.secret); // This would result in an error because secret is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var parentEx = new Parent("Smith");
var childEx = new Child("Johnson");
// console.log(parent.familyName); // This would result in an error because familyName is protected
childEx.introduceFamily(); // This is a valid way to access the protected property
// ------------------------------------------------------
/*******************
 * CLASS ACCESSORS *
 *******************/
var ProductExAccessors = /** @class */ (function () {
    function ProductExAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0; // Default price
    }
    Object.defineProperty(ProductExAccessors.prototype, "price", {
        // 'public' getter for price
        get: function () {
            return this._price;
        },
        // 'public' setter for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    return ProductExAccessors;
}());
// Create an instance of the ProductExAccessors class
var productEx = new ProductExAccessors(1, "Widget");
console.log(productEx.getProductInfo()); // Default price: ID: 1, Name: Widget, Price: $0
// Use the 'setter' to update the price
productEx.price = 20.0;
console.log(productEx.getProductInfo()); // Updated price: ID: 1, Name: Widget, Price: $20
// Attempting to set a negative price triggers the setter logic
productEx.price = -5; // Price cannot be negative.
// ----------------------------------------------------------------------
/************************
 * CLASS STATIC MEMBERS *
 ************************/
var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.generateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
// Generate unique IDs for products using the static method
var product1static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Widget");
var product2static = new ProductStaticMembers(ProductStaticMembers.generateNextId(), "Gadget");
console.log(product1static.getProductInfo()); // ID: 1, Name: Widget
console.log(product2static.getProductInfo()); // ID: 2, Name: Gadget
// -----------------------------------------------------------
/*****************************
 * CLASS IMPLEMENT INTERFACE *
 *****************************/
var ProductImplementInterface = /** @class */ (function () {
    function ProductImplementInterface(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductImplementInterface.generateNextId = function () {
        return ProductImplementInterface.nextId++;
    };
    ProductImplementInterface.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    ProductImplementInterface.nextId = 1;
    return ProductImplementInterface;
}());
// Generate unique IDs for products using the static method
var product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
var product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
console.log(product1implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2implement.getProductInfo()); // ID: 2, Name: Gadget
// ------------------------------------------------------------------------
var AbstractItem = /** @class */ (function () {
    function AbstractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstractItem.generateNextId = function () {
        return AbstractItem.nextId++;
    };
    AbstractItem.nextId = 1;
    return AbstractItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Item;
}(AbstractItem));
var item1 = new Item(AbstractItem.generateNextId(), "Widget");
var item2 = new Item(AbstractItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
// ----------------------------------------------------------------------
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// Create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
// Create another concrete subclass
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
// Generate unique IDs for entities using the static method
var entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
// ------------------------------------------
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
// -----------------------------------------------------
var age = 22;
if (age > 20) {
    console.log("pass");
}
else if (age < 20) {
    console.log("return");
}
else {
    console.log("reboot");
}
// * TYPE ASSERTIONS *
var data = "1000";
// Type assertion to treat "data" as a string
console.log(data.repeat(3));
