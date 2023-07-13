function curriedAdd() {
    let numbers = [];
  
    function addNumber(number) {
      if (number !== undefined) {
        numbers.push(number);
        return addNumber;
      } else {
        return numbers.reduce((sum, num) => sum + num, 0);
      }
    }
  
    return addNumber;
  }
  
  // Test the curried add
  let firstAdder = curriedAdd();
  let secondAdder = curriedAdd();
  let thirdAdder = curriedAdd();
  
  console.log(firstAdder()); // 0
  console.log(secondAdder(1)(2)()); // 3
  console.log(thirdAdder(2)(8)(5)(1)()); // 16
  

module.exports = { curriedAdd };
