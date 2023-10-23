import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty, ApiOkResponse } from '@nestjs/swagger';
import { DbService } from './db/db.service';

class HelloWorldDto {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const data = await this.dbService.user.findMany();
    console.log(data);
    return {
      message: this.appService.getHello(),
    };
  }
}
