import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}
  async register(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email);
    if (user) {
      throw new HttpException('User Already Exists', HttpStatus.CONFLICT);
    }
    return await this.createUser(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.findOne(id);
    console.log({...updateUserDto})
    if (!user) throw new NotFoundException('User not Found');

    user.firstName = updateUserDto.firstName;
    user.country = updateUserDto.country;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;
    user.city = updateUserDto.city;
    user.dateOfBirth = updateUserDto.dateOfBirth;
    user.permanentAddress = updateUserDto.permanentAddress;
    user.postalCode = updateUserDto.postalCode;
    user.profileImage = updateUserDto.profileImage;

    const updatedUser = await this.usersRepository.save(user);

    console.log(updatedUser);
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async findByEmail(email: string) {
    return await this.usersRepository.findOneBy({
      email,
    });
  }

  private async createUser(dto: CreateUserDto) {
    const hashedPwd = await this.hashedPassword(dto.password);
    const newUser = this.usersRepository.create({
      ...dto,
      hashedPassword: hashedPwd,
    });
    const { hashedPassword, ...user } = await this.usersRepository.save(
      newUser
    );
    return user;
  }

  private async hashedPassword(password: string) {
    return argon.hash(password);
  }
}
