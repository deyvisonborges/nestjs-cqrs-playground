import { CommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler {
  execute(command: CreateTaskCommand) {
    const { description } = command;
    console.log(description);
  }
}
