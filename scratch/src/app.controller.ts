import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRouteRoute() {
    return "Hello World!";
  }
}
