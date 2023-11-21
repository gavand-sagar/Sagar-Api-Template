import {
  MssqlRequestInput,
  MssqlRequestOutput,
  MssqlService,
} from '@strongnguyen/nestjs-mssql';
import { Injectable } from '@nestjs/common';
import { DBResponse } from 'src/common/models/response.model';
export const SQL = require('mssql');

@Injectable()
export class SQLDBRepository {
  constructor(public mssql: MssqlService) {}

  async ExecuteSP<T>(
    spName: string,
    inputParams: MssqlRequestInput[],
    outputParams: MssqlRequestOutput[] = [],
  ) {
    return (await this.mssql.execSP(
      spName,
      inputParams,
      outputParams,
    )) as DBResponse<T>;
  }

  async ExecuteQuery<T>(sqlQuery: string) {
    return (await this.mssql.getPool().query(sqlQuery)) as DBResponse<T>;
  }
}
