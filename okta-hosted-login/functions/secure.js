const OktaJwtVerifier = require('@okta/jwt-verifier');
exports.handler = function secure(event, context, callback) {
  const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: process.env.ISSUER,
    clientId: process.env.CLIENT_ID,
    assertClaims: {
      aud: 'api://default',
    },
  });

  return callback(null, {
    statusCode: 200,
    body: process.env.ISSUER,
  });


  // function authenticationRequired(req, res, next) {
  //   const authHeader = req.headers.authorization || '';
  //   const match = authHeader.match(/Bearer (.+)/);

  //   if (!match) {
  //     return res.status(401).end();
  //   }

  //   const accessToken = match[1];
  //   const expectedAudience = 'api://default';

  //   return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
  //     .then((jwt) => {
  //       req.jwt = jwt;
  //       next();
  //     })
  //     .catch((err) => {
  //       res.status(401).send(err.message);
  //     });
  // }

  // app.get('/secure', authenticationRequired, (req, res) => {
  //   res.json(req.jwt);
  // });
};
