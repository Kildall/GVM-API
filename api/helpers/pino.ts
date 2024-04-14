import { pino } from 'deps';

interface Levels {
  [key: number]: string;
}

const levels: Levels = {
  10: 'trace',
  20: 'debug',
  30: 'info',
  40: 'warn',
  50: 'error',
  60: 'fatal',
};

const logger = pino.pino({
  formatters: {
    bindings(_: Record<string, unknown>) {
      _;
      return {};
    },
    level(_, number) {
      return { level: levels[number] };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  messageKey: 'message',
});

export default logger;
