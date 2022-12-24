import { LogLevels, LogObject } from "../types/logobject";

export class Logger {
  private static _instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._instance) {
        Logger._instance = new Logger();
    }
    return Logger._instance;
  }

  public log(message: string): void {
    let logObj: LogObject = {
        timestamp: Date.now(),
        message,
        level: LogLevels.INFO,
    };

    console.log(logObj);
  }

  public error(message: string): void {
    let logObj: LogObject = {
        timestamp: Date.now(),
        message,
        level: LogLevels.ERROR,
    };

    console.error(logObj);
  }

  public warn(message: string): void {
    let logObj: LogObject = {
        timestamp: Date.now(),
        message,
        level: LogLevels.WARNING,
    };

    console.warn(logObj);
  }
}
