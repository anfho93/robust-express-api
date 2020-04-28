require('dotenv').config();

const production = require('./production');
const development = require('./development');
const qa = require('./qa');

const { NODE_ENV } = process.env;

let currentEnv = NODE_ENV === 'production' ? production :
  NODE_ENV === 'qa' ? qa : development;

module.exports = currentEnv;