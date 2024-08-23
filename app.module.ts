import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {Module} from "my-nodejs-framework";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}