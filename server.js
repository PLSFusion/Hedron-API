const express        = require('express');
const expressWinston = require('express-winston');
const router         = require('./router');
const winston        = require('winston');
const cors           = require('cors');

let app = express();

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

app.use(cors());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    logFormat
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
  colorize: true,
}));

app.use(router);

app.listen(3000, 'localhost');