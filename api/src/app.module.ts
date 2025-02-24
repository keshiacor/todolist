import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Name } from './../name.entity';
import  typeorm  from './config/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        const typeormConfig = configService.get<TypeOrmModuleOptions>('typeorm');
        if (!typeormConfig) {
          throw new Error('TypeORM configuration not found');
        }
        return typeormConfig;
      },
    }),
    TypeOrmModule.forFeature([Name])
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
