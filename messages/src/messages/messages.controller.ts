import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get('/')
  listMessages() {
    return [
      {
        id: 1,
        text: 'First message',
      },
      {
        id: 2,
        text: 'Second message',
      },
    ];
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }

  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Put('/:id')
  updateMessage() {
    return {
      id: 1,
      text: 'First message',
    };
  }

  @Delete('/:id')
  deleteMessage() {
    return { id: 1, text: 'First message' };
  }
}
