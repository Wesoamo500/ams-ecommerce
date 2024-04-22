import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  hashedPassword: string;

  @IsOptional()
  @IsString()
  permanentAddress: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  profileImage: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  postalCode: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  dateOfBirth: string;
}
