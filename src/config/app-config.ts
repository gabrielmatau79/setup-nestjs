import { registerAs } from '@nestjs/config'

export default registerAs('appConfig', () => {
  return {
    port: parseInt(process.env.APP_PORT, 10) || 8088,
    mongoDbUri: process.env.MONGODB_URI || 'mongodb://datastore:datastore@localhost:27017/datastore',
    logLevel: parseInt(process.env.LOG_LEVEL, 10) || 1,
  }
})
