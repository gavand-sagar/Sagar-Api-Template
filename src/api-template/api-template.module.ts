//change the app-name to the appropriate name
import { Module } from "@nestjs/common";
import { ApiTemplateController } from "./api-template.controller";
import { ApiTemplateService } from "./api-template.service";
import { INTERFACES } from "./constants/interface.constants";
import { ApiTemplateRepository } from "./api-template.repository";
import { MongoDBModule } from "src/common/database/mongodb.module";

@Module({
  imports: [MongoDBModule], // [MongoDBModule, SqlDBModule] => set one or both as per the requirement, check with .env file
  controllers: [ApiTemplateController],
  providers: [
    ApiTemplateService,
    {
      provide: INTERFACES.IAPITEMPLATEREPOSITORY,
      useClass: ApiTemplateRepository,
    },
  ],
})
export class ApiTemplateModule {}
