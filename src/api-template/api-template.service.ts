//change the app-name to the appropriate name

import { Inject, Injectable } from "@nestjs/common";
import { IApiTemplateRepository } from "./interfaces/api-template.interface";
import { DBResponse } from "src/common/models/response.model";
import { Nationality, VesselLookup } from "./dtos/response";

@Injectable()
export class ApiTemplateService {
  constructor(
    @Inject("IApiTemplateRepository")
    private apiTemplateRepository: IApiTemplateRepository,
  ) {}

  async getNationality(searchText: string): Promise<DBResponse<Nationality>> {
    return await this.apiTemplateRepository.nationality(searchText);
  }

  async vesselDropdownlist(
    PageNumber: number,
    PageSize: number,
    SearchText: string,
  ): Promise<DBResponse<VesselLookup>> {
    return await this.apiTemplateRepository.vesselList(
      PageNumber,
      PageSize,
      SearchText,
    );
  }
}
