import { ApiProperty } from '@nestjs/swagger';

export class VesselLookup {
  @ApiProperty({
    example: 'D90200019732',
  })
  VesselId: string;
  @ApiProperty({
    example: 'SEAWAYS ARIAL',
  })
  VesselName: string;
  @ApiProperty({
    example: 'SA000001',
  })
  IMOnumber: string;
  @ApiProperty({
    example: 'SA01',
  })
  COY_ID: string;
}
