import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddressDto } from './dto/address.dto';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @HttpCode(201)
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Post('addAddress')
  async addAddress(@GetUser('id') id: string, @Body() addressDto: AddressDto){
    return this.userService.addAddress(id, addressDto)
  }

  @UseGuards(JwtGuard)
  @Get('address')
  findAddress(@GetUser('id') id: string) {
    return this.userService.fetchAddress(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
