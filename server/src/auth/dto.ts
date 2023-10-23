import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({ example: 'Test@gmail.com' })
  email: string;

  @ApiProperty({ example: '12345' })
  password: string;
}


export class SignInBodyDto {
  @ApiProperty({ example: 'Test@gmail.com' })
  email: string;

  @ApiProperty({ example: '12345' })
  password: string;
}


export class GetSessionInfoDto {
  @ApiProperty({ example: 'Test@gmail.com' })
  email: string;

  @ApiProperty({ example: '12345' })
  password: string;
}