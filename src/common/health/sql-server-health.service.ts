import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { ConnectionPool } from 'mssql';

@Injectable()
export class SqlServerHealthService extends HealthIndicator {
  constructor() {
    super();
  }

  async isHealthReady(key: string): Promise<HealthIndicatorResult> {
    console.log('Sql server is ready', process.env.DATABASE_NAME);
    const sqlConfig = {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      server: process.env.SERVER_NAME,
      database: process.env.DATABASE_NAME,
      options: {
        encrypt: false,
      },
    };

    const pool = new ConnectionPool(sqlConfig);
    try {
      await pool.connect();
      return this.getStatus(key, true);
    } catch (error) {
      console.log('catch,error', error);
      throw new HealthCheckError('SQL Server check failed', {
        sqlServer: { status: 'down' },
      });
    } finally {
      await pool.close();
    }
  }
}
