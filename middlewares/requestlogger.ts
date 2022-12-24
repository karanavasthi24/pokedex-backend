import express from 'express';
import { Logger } from '../helper/logger';

const logger: Logger = Logger.getInstance();
function requestLogger(request: express.Request, response: express.Response, next: express.NextFunction) {
    logger.log(`Received a ${request.method} request at ${request.path}`);
    next();
}

export default requestLogger;
  