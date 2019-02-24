const request = require("request");
const crypto = require("crypto");

function randomString(chars) {
  return crypto.randomBytes(chars / 2).toString("hex");
}

module.exports = function(options) {
  if (!options.server) {
    console.error("[fathom] cannot track, missing server hostname");
    return (req, res, next) => next();
  }

  if (!options.siteID) {
    console.error("[fathom] cannot track, missing siteID");
    return (req, res, next) => next();
  }

  return function(req, res, next) {
    request.get(
      `${options.server}/collect`,
      {
        qs: {
          id: randomString(20),
          pid: "",
          p: req.path,
          h: `${req.protocol}://${req.hostname}`,
          r: "",
          u: 1,
          nv: 1,
          ns: 1,
          sid: options.siteID
        }
      },
      (err, response, body) => {
        if (err) {
          console.error(err);
        }
        next();
      }
    );
  };
};
