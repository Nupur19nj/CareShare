module.exports = (func) => (req, res, next) => {
  // console.log("async error");
  Promise.resolve(func(req, res, next)).catch(next);
};
