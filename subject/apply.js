Function.prototype.myApply = function(context) {
    context = context || window;
    context.fn = this;
    var result;
    console.log(arguments[1], arguments[1].length)
    if (arguments[1].length > 0) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
console.log(person.fullName.myApply(person1, ["Oslo", "Norway"]));