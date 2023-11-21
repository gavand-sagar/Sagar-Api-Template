/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested, Validate } from 'class-validator';
import { ApiStaus } from './api-template-status.dto';

// change 'ApiTemplateReq' to appropriate class name
// add validation using class-validator

export class ApiTemplateReq {
  @ApiProperty({
    example: 'Mark',
  })
  @IsNotEmpty({
    message: 'Name must not be empty.',
  })
  @IsString({ message: 'Name must be of type string' })
  name: string;
  
  
  status:ApiStaus

}
