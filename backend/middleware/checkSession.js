export const checkSession = (req, res, next) => {
  console.log("Session Data:", req.session);

  if (!req.session.user || !req.session.user.userId) {
    return res.status(401).json({ message: "Unauthorized: No active user session" });
  }

  next();
};