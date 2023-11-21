import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { MongodbHealthService } from './mongodb-health.service';

@Module({
  controllers: [HealthController],
  imports: [TerminusModule],
  providers: [MongodbHealthService],
})
export class HealthModule {}
