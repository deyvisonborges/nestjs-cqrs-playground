// ./task/cqrs/queries/list-by-id-task.query
export class ListByIdTaskQuery {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}
