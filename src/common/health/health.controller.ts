/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiDefaultResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { HealthCheckService } from '@nestjs/terminus';
import { MongodbHealthService } from './mongodb-health.service';

@ApiBearerAuth() //added for authentication, check main.ts for the auth method
@ApiTags('readiness-liveliness')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private sqlServerHealth: MongodbHealthService
  ) // private mongodbHealthService: MongodbHealthService, //add this line if mongodb is used.
  {}

  @Get('ready')
  @ApiOperation({
    summary: 'Health ready.',
    description: 'This endpoint gives the readiness',
  })
  @ApiDefaultResponse({
    description: 'This is default response',
  })
  @ApiOkResponse({
    description: 'Health status readiness response',
  })
  checkReadiness() {
    return this.health.check([
      async () => this.sqlServerHealth.isMongoDbHealthy(),
      // async () => this.mongodbHealthService.isMongoDbHealthy(), //add this line if mongodb is used.
    ]);
  }

  @Get('live')
  @ApiOperation({
    summary: 'Health live.',
    description: 'This endpoint gives the liveliness',
  })
  @ApiDefaultResponse({
    description: 'The application is live.',
  })
  @ApiOkResponse({
    description: 'The application is live',
  })
  checkLiveness() {
    return { status: 'ok', message: 'The application is live' };
  }
}
