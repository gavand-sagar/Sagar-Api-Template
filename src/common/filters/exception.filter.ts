import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { ServerResponse } from "http";
import { internalError } from "../utilities";

@Catch()
export class ExceptionsFilter extends BaseExceptionFilter {
  logger = new Logger(ExceptionsFilter.name);

  catch(exception: Error | HttpException, host: ArgumentsHost): ServerResponse {
    const ctx = host.switchToHttp();
    const httpResponse = ctx.getResponse();
    const isNotAnHttpException = !(exception instanceof HttpException);
    if (isNotAnHttpException) {
      return httpResponse
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(internalError(exception.message));
    }

    const httpException = exception as HttpException;
    const errorResponse = httpException.getResponse();
    this.logger.error(httpException);
    if (typeof errorResponse === "object" && "message" in errorResponse) {
      const errorMessage = errorResponse.message;
      return httpResponse
        .status(httpException.getStatus())
        .json({ message: errorMessage });
    }
    return httpResponse.status(httpException.getStatus()).json(errorResponse);
  }
}
