declare namespace Express {
  export interface Request {
    user?: AuthContext
  }
}

interface AuthContext {
  id: string
  iat: number
  exp: number
  aud: string
  iss: string
  sub: string
}
