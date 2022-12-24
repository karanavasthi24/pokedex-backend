export enum LogLevels {
    INFO = 'info',
    ERROR = 'error',
    WARNING = 'warning'
};

export interface LogObject {
    timestamp: number;
    message: string;
    level: LogLevels
};