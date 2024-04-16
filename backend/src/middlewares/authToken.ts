import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

export const Auth = (request: Request, response: Response, next: NextFunction) => {
  const auth = request.headers.authorization;

  if(!auth) return response.status(400).json({ message: "O token é necessário para completar a ligação"});

  const [_, token] = auth.split(" ");

  try {

    jwt.verify(token, "a523e3f0-6bd0-48b9-a408-6dc199b85080");
    
    return next();

  } catch (error) {

    response.status(400).json({ message: "Invalid token"});
  
  }

}