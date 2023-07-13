const { curriedAdd } = require("./curried-add");

let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();
let fourthAdder = curriedAdd();
let fifthAdder = curriedAdd();
let sixthAdder = curriedAdd();
let seventhAdder = curriedAdd();

describe("curriedAdd", function() {
  it("returns 0 when called with no arguments", function() {
    expect(firstAdder ()).toBe(0);
  });

  it("returns a function when called with an argument", function() {
    expect(secondAdder(3)).toBeInstanceOf(Function);
  });

  it("accumulates a total with repeated function calls", function() {
    expect(thirdAdder(1)()).toBe(1);
    expect(fourthAdder (1)(2)()).toBe(3);
    expect(fifthAdder(1)(2)(3)()).toBe(6);
    expect(sixthAdder(1)(2)(3)(4)()).toBe(10);
    expect(seventhAdder(1)(2)(3)(4)(-10)()).toBe(0);
  });
});
