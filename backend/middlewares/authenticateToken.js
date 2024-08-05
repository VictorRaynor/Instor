import jwt from "jsonwebtoken";

// export function generateAccessToken(userEmailObj, persist = false) {
//   return jwt.sign(userEmailObj, process.env.TOKEN_SECRET, {
//     expiresIn: persist ? "7d" : "4h",
//   });
// }

export function generateAccessToken(userObj, persist = false) {
  const { email, _id, imageUrl, userhandle } = userObj;
  const payload = { email, _id, imageUrl, userhandle };

  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: persist ? "7d" : "4h",
  });
}

export function authenticateToken(req, res, next) {
  let token = null;
  if (req?.cookies?.auth) {
    token = req.cookies.auth;
  }

  if (!token) {
    const authHeader = req.headers["authorization"];
    token = authHeader && authHeader.split(" ")[1];
  }

  // if (token === null) return res.sendStatus(401);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    // console.log(err, user);
    if (err) return res.sendStatus(403);
    req.userEmail = user.email;
    req.userId = user._id;
    req.userImage = user.imageUrl;
    req.userHandle = user.userhandle;
    next();
  });
}
