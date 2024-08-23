import {AppService} from "./app.service";
import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from "my-nodejs-framework";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('body/:id')
    recieveBody(@Body() data: any, @Param('id') id: string) {
        return 'body: ' + JSON.stringify(data) + ` has been received and id: ${id}`;
    }

    @Patch('body/:id')
    examplePatch(@Body() data: any, @Param('id') id: string) {
        return 'patch body: ' + JSON.stringify(data) + ` has been received and id: ${id}`;
    }

    @Put('body/:id')
    examplePut(@Body() data: any, @Param('id') id: string) {
        return 'put body: ' + JSON.stringify(data) + ` has been received and id: ${id}`;
    }

    @Delete('body/:id')
    exampleDelete(@Param('id') id: string) {
        return `Delete has been received and id: ${id}`;
    }
}