import { ApiProperty } from '@nestjs/swagger';

// change 'ApiTemplateRes' to appropriate class name

export class ApiTemplateRes {
  @ApiProperty({
    example: 'Mark',
  })
  name: string;
}
