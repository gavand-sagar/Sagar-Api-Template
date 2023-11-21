//change the api-template to the appropriate name

import { Controller, Get, UseGuards, Query } from "@nestjs/common";
import { ApiTemplateService } from "./api-template.service";
import { TokenGuard } from "src/common/guards";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { GenericResponse } from "src/common/models";
import { ok } from "src/common/utilities";
import { Responses } from "src/common/decorators/response.decorator";
import { Nationality, VesselLookup } from "./dtos/response";
import { DBResponse } from "src/common/models/response.model";

@ApiBearerAuth() // for authorization in swagger documentation, check in main.ts for the method.
@Responses()
@ApiTags("Api Template")
@Controller("api")
export class ApiTemplateController {
  constructor(public service: ApiTemplateService) {}

  @Get("nationality")
  @ApiOperation({
    summary: "Get nationality (Basic GET Method).",
    description: "Retrieves all the nationalities",
  })
  @ApiQuery({
    name: "searchText",
    required: false,
    description: "Parameter for searching the nationalities",
  })
  @ApiOkResponse({
    description: "Nationality list retrieved successfully",
    type: [Nationality],
  })
  async getAllNationality(
    @Query("searchText") searchText: string,
  ): Promise<GenericResponse<DBResponse<Nationality>>> {
    return ok(await this.service.getNationality(searchText));
  }

  @Get("all-vessels")
  @ApiOperation({
    summary: "Get Vessels (Paginated GET Method).",
    description: "Retrieves all the vessel names in the dropdown",
  })
  @ApiQuery({
    name: "PageNumber",
    required: false,
    description: "Page Number",
    example: "1",
  })
  @ApiQuery({
    name: "PageSize",
    required: false,
    description: "The number of items to return",
    example: "100",
  })
  @ApiQuery({
    name: "SearchText",
    required: false,
    description: "Search the vessels",
    example: "Seaways Yosemite",
  })
  @ApiOkResponse({
    description: "List of vessels in a dropdown is retrieved",
    type: [VesselLookup],
  })
  async getVesselList(
    @Query("PageNumber") PageNumber: number,
    @Query("PageSize") PageSize: number,
    @Query("SearchText") SearchText: string,
  ): Promise<GenericResponse<DBResponse<VesselLookup>>> {
    return ok(
      await this.service.vesselDropdownlist(PageNumber, PageSize, SearchText),
    );
  }
}
