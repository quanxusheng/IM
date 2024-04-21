import { Controller, Get, Post, Req, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from '@nestjs/common';


@Controller()
export class AppController {
    private readonly appService: AppService

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('signUp')
    signUp(@Req() request: Request, @Param() params: any, @Query() query: any) {
        // console.log('=>e', request.body)
        // console.log('=>e', request.headers)
        // console.log('=>e', query)
        // console.log('=>e', params)
    }
}
