/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HealthModule } from './common/health';
import { ApiTemplateModule } from './api-template/api-template.module';

@Module({
  imports: [
    ApiTemplateModule,
    JwtModule.register({
      global: true,
      secret:'',
      signOptions:{expiresIn:'20m'}
    }),
    HealthModule,
  ],
})
export class AppModule {}
