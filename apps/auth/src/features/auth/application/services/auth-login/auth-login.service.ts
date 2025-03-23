import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "../../../adapters/out/dto/login.dto";
import { ReadUserImplService } from "apps/auth/src/features/user/application/services/read/read-user-impl.service";
import { compare } from "bcrypt";


@Injectable()
export class AuthLoginService {
  constructor(private readonly readUserService: ReadUserImplService) { }

  async login(body: LoginDto) {
    const userExisting = await this.readUserService.findOneByEmail(body.email);

    if (!userExisting) {
      throw new UnauthorizedException("Credencials invalidos, verififique a senha ou email");
    }

    const verifyPassword = await compare(body.password, userExisting.password);

    if (!verifyPassword) {
      throw new UnauthorizedException("Credencials invalidos, verififique a senha ou email");
    }

    if (!userExisting.emailVerified) {
      throw new UnauthorizedException("Conta nao verificada");
    }


    const { password, ...userWithoutPassword } = userExisting;
    return userWithoutPassword;

  }
}
