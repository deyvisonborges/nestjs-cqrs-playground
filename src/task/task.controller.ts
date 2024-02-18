import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from './commands/create-task.command';
import { ListTaskQuery } from './queries/list-task.query';

@Controller('task')
export class TaskController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body('description') description: string) {
    return this.commandBus.execute(new CreateTaskCommand(description));
  }

  @Get()
  async find() {
    return this.queryBus.execute(new ListTaskQuery());
  }
}
