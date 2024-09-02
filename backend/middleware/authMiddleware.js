import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
   const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

export default auth;
