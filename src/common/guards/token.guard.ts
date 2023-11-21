import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } from "src/config";

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> | Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const auth = request.headers.authorization;
      if (auth) {
        const token = auth.split(" ")[1];
        const tokenSecretBase64 = Buffer.from(JWT_SECRET, "base64");
        const userData = await this.jwtService.verifyAsync(token, {
          secret: tokenSecretBase64,
          issuer: JWT_ISSUER,
          audience: JWT_AUDIENCE,
        });

        request["user"] = userData;
        return true;
      }
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }
}
