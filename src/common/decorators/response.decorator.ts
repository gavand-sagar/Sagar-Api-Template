import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiDefaultResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class IBadReq {
  @ApiProperty({
    example: 'The parameter must be of the given type',
  })
  message: string;
}

export class IForbiddenReq {
  @ApiProperty({
    example: 'Forbidden Resource',
  })
  message: string;
}

export class IDefaultResponse {
  @ApiProperty({
    example: 'This is an error message',
  })
  message: string;
}

export class IInternalServer {
  @ApiProperty({
    example: 'Internal server error',
  })
  message: string;
}

export function Responses() {
  return applyDecorators(
    ApiDefaultResponse({
      description: 'An error occured',
      type: IDefaultResponse,
    }),
    ApiForbiddenResponse({
      description: 'Forbidden',
      type: IForbiddenReq,
    }),
    ApiBadRequestResponse({
      description: 'Bad request',
      type: IBadReq,
    }),
    ApiNotFoundResponse({
      description: 'Cannot GET API',
    }),
    ApiInternalServerErrorResponse({
      description: 'Internal Server Error',
      type: IInternalServer,
    }),
  );
}
