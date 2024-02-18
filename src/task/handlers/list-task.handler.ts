import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListTaskQuery } from '../queries/list-task.query';

@QueryHandler(ListTaskQuery)
export class ListTaskHandler implements IQueryHandler<ListTaskQuery> {
  async execute(): Promise<[]> {
    return [];
  }
}
