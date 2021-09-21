import { Module } from '@nestjs/common';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'serve-multi-spas-demo'),
      },
      {
        rootPath: join(__dirname, '..', 'my-application'),
        serveRoot: 'app1',
      },
      {
        rootPath: join(__dirname, '..', 'my-application2'),
        serveRoot: 'app2',
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
