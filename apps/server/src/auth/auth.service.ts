import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { AuthDto } from './dto';

import * as argon from 'argon2';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    private userService: UserService
  ) {}
  async login(dto: AuthDto) {
    const { email, password } = dto;

    const user = await this.userService.findByEmail(email);

    if (!user) throw new NotFoundException('User not found');

    const isPasswordCorrect = await argon.verify(user.password, password);

    if (!isPasswordCorrect) throw new UnauthorizedException('Invalid Password');

    return this.signToken(user.id, user.email);
  }
  
  

  async signToken(userId: number, email: string): Promise<{}> {
    const payload = {
      userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return token;
  }
}
