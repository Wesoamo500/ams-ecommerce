import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as argon from 'argon2'


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
  async register(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email)
    console.log(user)
    if(user){
      throw new HttpException("User Already Exists", HttpStatus.CONFLICT)
    }
    return await this.createUser(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async findByEmail(email: string){
    return await this.usersRepository.findOneBy({
      email
    })
  }

  private async createUser(dto: CreateUserDto){
    const hashedPassword = await this.hashedPassword(dto.password)
    const newUser =  this.usersRepository.create({...dto, password: hashedPassword})
    return this.usersRepository.save(newUser)
  }

  private async hashedPassword(password: string){
    return argon.hash(password)
  }
}
