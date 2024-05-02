import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
