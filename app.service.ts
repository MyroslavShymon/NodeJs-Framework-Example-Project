import {Injectable} from "my-nodejs-framework";

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}