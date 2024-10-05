import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { getLogLevels } from './config/logger.config'
import * as fs from 'fs'

async function bootstrap() {
  const logLevels = getLogLevels()

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  })

  const configService = app.get(ConfigService)
  const logger = new Logger(bootstrap.name)

  // Version
  app.enableVersioning({
    type: VersioningType.URI,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
    }),
  )

  /**
   * Documentation Builder
   */

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API handle files via rest')
    .setVersion('0.0.1')
    .addTag('API')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('q', app, document)

  app.enableCors()

  const port = configService.get('appConfig.port')
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
  const appName = packageJson.name
  const appVersion = packageJson.version

  await app.listen(port)

  logger.log(`Application (${appName} v${appVersion}) running on: ${await app.getUrl()} `)
}
bootstrap()
