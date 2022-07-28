const logMe = () => {
  console.log('Me');
};
logMe();

// IIFE
// imediately invoked funcion expression

// () => {}
(() => {
  console.log('Me');
  const num1 = 5;
})();

(function (a, b) {
  console.log(a + b);
})(5, 66);
