import { GenericResponse, GenericResponseMessage } from '../models';

export function ok<T>(data: T): GenericResponse<T> {
  return {
    data: data,
  };
}

export function internalError(message: string = ''): GenericResponseMessage {
  return {
    message: message,
  };
}

export function badRequest(message: string = ''): GenericResponseMessage {
  return {
    message: message,
  };
}

export function notFound(message: string = ''): GenericResponseMessage {
  return {
    message: message,
  };
}

export function notAuthorized(message: string = ''): GenericResponseMessage {
  return {
    message: message,
  };
}

export function noContent<T>(): GenericResponse<T> {
  return {
    data: null,
  };
}
