import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ExceptionsFilter } from "./common/filters";
import { ValidationPipe } from "@nestjs/common";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(process.env.APPLICATION_NAME) //set from .env 'APPLICATION_NAME'
    .setVersion(process.env.APPLICATION_VERSION) //set from .env 'APPLICATION_VERSION'
    .setDescription("VPlatform API Template") // Set Application Description
    .addBearerAuth() //Set this for authentication
    .setContact(
      "VPlatform Dev Team",
      "https://vgrouplimited.com/",
      "dev.vplatform@vships.com",
    )
    .addServer("http://localhost:3030", "Local server url") // http://localhost:3030 change the port number accordingly
    .addTag("API Template", "Template") //Add proper tag and tag description
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  });

  app.useGlobalFilters(new ExceptionsFilter()); // added for error handling
  app.useGlobalPipes(new ValidationPipe({ transform: true })); //added for validation using class validator

  let previousSwaggerJSON = "";
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    previousSwaggerJSON = require("fs").readFileSync("./swagger.json", "utf8");
  } catch (error) {}
  const currentSwaggerJSON = JSON.stringify(document, null, 2);
  if (previousSwaggerJSON !== currentSwaggerJSON) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("fs").writeFileSync("./swagger.json", currentSwaggerJSON);
  }
  await app.listen(3030); // set from .env (PORT || 3030)
}
bootstrap();
