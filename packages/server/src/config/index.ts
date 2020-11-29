const ONE_DAY = 1000 * 60 * 60 * 24
export const JWT_SECRET = 'mern_ts_graphql@20201127'
export const {
  HTTP_PORT = 4002,
  NODE_ENV = 'development',

  DB_USERNAME = 'admin',
  DB_PASSWORD = 'secret',
  DB_HOST = 'localhost',
  DB_PORT = 27017,
  DB_NAME = 'chat',

  SESS_NAME = 'sid',
  SESS_SECRET = 'ssh!secret!',
  SESS_LIFETIME = ONE_DAY,

  REDIS_HOST = 'localhost',
  REDIS_PORT = 6379,
  REDIS_PASSWORD = 'secret'
} = process.env

export const IN_PROD = NODE_ENV === 'production'

// Password URL encoded to escape special characters
export const DB_URI = 'mongodb://127.0.0.1:27017/mern_ts_graphql?retryWrites=true&w=majority'

export const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true }

export const REDIS_OPTIONS = {
  host: REDIS_HOST,
  port: +REDIS_PORT,
  password: REDIS_PASSWORD
  // TODO: retry_strategy
}

export const SESS_OPTIONS = {
  name: SESS_NAME,
  secret: SESS_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    maxAge: +SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}

export const EMAIL_CONSTS = {
  FROM: 'swilooks <noreply@swilooks.de>',
  TO: '', // for test, if there is value for `to`, we will send the email to this value force
  ACTIVE_LINK: 'https://localhost:3999/activate-account?activate=',
  RECOVER_LINK: 'http://localhost:3999/reset-password?recovery='
}

export const APOLLO_OPTIONS = {
  playground: IN_PROD
    ? false
    : {
      settings: {
        'request.credentials': 'include'
      }
    }
}
