console.log(module);
function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(name, message);
  // logger.error({
  //     name,
  //     message,
  //     stack
  // })

  // console.log("internal server error");
}

console.log("Done");

// module.exports = errorHandler;
function two() {
  console.log("two");
  
}

const obj = {};
obj.property1 = "";
obj.property2 = "";


module.exports.errorHandler = errorHandler;
module.exports.two = two;
console.log(module);
