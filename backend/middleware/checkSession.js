export const checkSession = (req, res, next) => {
  if (!req.sessionID) {
    return res.status(401).json({ message: "No active session" });
  }

  req.sessionStore.get(req.sessionID, (err, sessionData) => {
    if (err || !sessionData) {
      return res.status(401).json({ message: "Session not found or expired" });
    }

    console.log(`✅ Session active for user: ${sessionData.passport.user}`);

    req.sessionData = sessionData;

    next();
  });
};