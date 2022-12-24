import express from 'express';

function authentication(request: express.Request, response: express.Response, next: express.NextFunction) {
    next();
}

export default authentication;
  