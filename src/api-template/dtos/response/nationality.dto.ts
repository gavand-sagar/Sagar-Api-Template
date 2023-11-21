import { ApiProperty } from '@nestjs/swagger';

export class Nationality {
  @ApiProperty({
    example: 'ATG',
  })
  NatId: string;
  @ApiProperty({
    example: 'Antiguan',
  })
  NatDescription: string;
}
