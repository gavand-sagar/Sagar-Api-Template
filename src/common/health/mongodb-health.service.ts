/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
// import { MongoClient } from 'mongodb';

@Injectable()
export class MongodbHealthService extends HealthIndicator {
  async isMongoDbHealthy(): Promise<HealthIndicatorResult> {
    return this.getStatus('mongodb', false, {
      message: 'MongoDB connectivity failed',
      error:"",
    });
    // console.log(
    //   'mongodb connection is ready',
    //   process.env.MONGO_DB_DATABASE_NAME,
    // );
    // const client = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);
    // try {
    //   await client.connect();
    //   await client.db(process.env.MONGO_DB_DATABASE_NAME).command({ ping: 1 });
    //   return this.getStatus('mongodb', true);
    // } catch (error) {
    //   return this.getStatus('mongodb', false, {
    //     message: 'MongoDB connectivity failed',
    //     error,
    //   });
    // } finally {
    //   await client.close();
    // }
  }
}
