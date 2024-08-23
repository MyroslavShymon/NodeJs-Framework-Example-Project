import {AppModule} from "./app.module";
import {Factory} from "my-nodejs-framework";

async function bootstrap() {
    const app = await Factory.create(AppModule);
    await app.listen(3000);
}

bootstrap();