import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
const { issuer, subject, audience, jwtSecret } = config;

const verifyOptions = {
  issuer,
  subject,
  audience,
  expiresIn: "12h",
  algorithms: ["HS256"]
 };

const authenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Verify jwt token
  const parts = req.headers.authorization ? req.headers.authorization.split(' ') : [''];
  const token = parts.length === 2 && parts[0].toLowerCase() === 'bearer' ? parts[1] : undefined;
  try {
    const session : any = token ? jwt.verify(token, jwtSecret, verifyOptions) : undefined;
    req.user = session;

    if(session) {
      next();
    } else {
      throw new Error('Jwt is not valid')
    }
  } catch (e) {
    console.error(e)
    res.status(401).json(e);
  }
}

export default authenticationMiddleware;
