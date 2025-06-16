import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { CustomExceptionFilter } from './custom-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin(origin, callback) {
      callback(null, true);
    },
    credentials: true,
  });

  // vercel 只有/tmp目录下有read权限
  const storagePath = process.env.TMP_DIR || join(__dirname, '..', 'public');
  app.useStaticAssets(storagePath, {
    prefix: '/static',
    setHeaders: (res, path) => {
      console.log(`[${new Date().toISOString()}] 提供静态文件: ${path}`);
    },
  });

  app.useGlobalFilters(new CustomExceptionFilter());
  await app.listen(3000);
}
bootstrap()
  .then(() => {
    console.log('Running on port 3000 ~');
  })
  .catch(() => {
    console.log('Running start failed !!!');
  });
