import { Request } from 'express';
import rateLimit from 'express-rate-limit';
import config from '../config';
const { rateLimitPeriod, rateLimitRequests } = config;
const apiLimiterMiddleware = rateLimit({
  windowMs: rateLimitPeriod * 60 * 1000, // x minutes
  max: rateLimitRequests,
  message: "Too many accounts created from this token, please try again in a few minutes.",
  keyGenerator: (req: Request) => {
    if(req.user) {
      return req.user.id;
    } else {
      return req.ip
    }
  }
});

export default apiLimiterMiddleware;
