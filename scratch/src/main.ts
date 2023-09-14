import { Controller, Module, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  getRouteRoute() {
    return "Hello World!";
  }
}
