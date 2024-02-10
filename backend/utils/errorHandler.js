// Error handler class
// inheritance parent-->Error child-->ErrorHandler
class ErrorHandler extends Error {
  constructor(message, errorCode) {
    // call constructor of parent class
    super(message);
    this.statusCode = errorCode;
    //creates .stack property on target object
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
