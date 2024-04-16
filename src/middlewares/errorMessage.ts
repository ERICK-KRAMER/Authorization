import "express-async-errors"
import { NextFunction, Response, Request } from "express"

export const ErrorMessage = (error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    status: "Error",
    message: error.message,
    name: error.name,
    stack: error.stack
  })
}