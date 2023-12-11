const rateLimiter = require("express-rate-limit");

const createUserLimiter = (time,max)=> {
  return rateLimiter({
    windowMs: time,
    max: max,
    message: "Too many requests from this IP, please try again after a minute",
  });
}

module.exports = createUserLimiter;