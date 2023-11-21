//change IAppRepository to appropriate name

import { Nationality, VesselLookup } from '../dtos/response';
import { DBResponse } from 'src/common/models/response.model';

export interface IApiTemplateRepository {
  // add other interfaces here

  nationality(searchText: string): Promise<DBResponse<Nationality>>;
  vesselList(
    PageNumber: number,
    PageSize: number,
    SearchText: string,
  ): Promise<DBResponse<VesselLookup>>;
}
