/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
//change the api-template to the appropriate name

import { Inject, Injectable } from '@nestjs/common';
import { IApiTemplateRepository } from './interfaces/api-template.interface';
import { Db } from 'mongodb';
// import { Db } from 'mongodb';
// import { DBPROCEDURES } from './constants/procedure-names.constants';
// import { Db } from 'mongodb';

@Injectable()
export class ApiTemplateRepository implements IApiTemplateRepository {
  constructor(
    @Inject('DATABASE_CONNECTION') // used for mongo db database connection
    private db: Db, // used for mongo db database connection
    // private sqlDb: SQLDBRepository,
  ) {}

  //basic get method with a query param using sql procedure
  async nationality(searchText: string): Promise<any> {
    return this.db.collection("songs").find().toArray()
    // return await this.sqlDb
    //   .ExecuteSP(DBPROCEDURES.GETNATIONALITY, [
    //     { name: 'searchText', type: SQL.VarChar, value: searchText },
    //   ])
    //   .then((res) => {
    //     return res.recordset;
    //   });
    return [];
  }

  //basic get method with sql procedure and pagination
  async vesselList(
    PageNumber: number,
    PageSize: number,
    SearchText: string,
  ): Promise<any> {

    return []
    // return await this.sqlDb
    //   .ExecuteSP(DBPROCEDURES.GETVESSELSDROPDOWN, [
    //     { name: 'PageNumber', type: SQL.Int, value: PageNumber },
    //     { name: 'PageSize', type: SQL.Int, value: PageSize },
    //     { name: 'SearchText', type: SQL.VarChar, value: SearchText },
    //   ])
    //   .then((res: any) => {
    //     const total = res?.recordset[0].NumberOfRows
    //       ? res?.recordset[0].NumberOfRows
    //       : null;
    //     return {
    //       paginationResponse: {
    //         totalRecords: total,
    //       },
    //       data: res.recordset,
    //     };
    //   });
  }
}
