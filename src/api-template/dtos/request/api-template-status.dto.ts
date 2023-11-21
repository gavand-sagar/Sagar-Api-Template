import { IsNumber, IsString } from 'class-validator';

export class ApiStaus {
  @IsString()
  status: string;

  @IsNumber()
  code: number;
}
