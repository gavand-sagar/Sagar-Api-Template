import { Module } from "@nestjs/common";
import { Db, MongoClient } from "mongodb";

@Module({
  providers: [
    {
      provide: "DATABASE_CONNECTION",
      useFactory: async (): Promise<Db> => {
        const v = process.env.MONGO_DB_CONNECTION_STRING;
        console.log("CONNECTTION STRGN", v);
        try {
          const client = await MongoClient.connect(
            process.env.MONGO_DB_CONNECTION_STRING,
            { minPoolSize: 100 },
          );

          return client.db(process.env.MONGO_DB_DATABASE_NAME);
        } catch (e) {
          console.log(e);

          throw e;
        }
      },
    },
  ],

  exports: ["DATABASE_CONNECTION"],
})
export class MongoDBModule {}
