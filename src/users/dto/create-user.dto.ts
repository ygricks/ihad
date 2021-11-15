import { Length, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 100)
  name: string;
}
