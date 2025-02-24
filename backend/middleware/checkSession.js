export const checkSession = (req, res, next) => {
  console.log("Session Data:", req.session);
  if (!req.session.userId) {
    return res.status(400).send({ message: "Unauthorized: No active User" });
  }
  next();
}