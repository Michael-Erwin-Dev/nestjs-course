import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

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
  getMessage() {
    return {
      id: 1,
      text: 'First message',
    };
  }

  @Post('/')
  createMessage() {
    return {
      id: 1,
      text: 'First message',
    };
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
