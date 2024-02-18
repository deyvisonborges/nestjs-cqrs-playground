export class UpdateByCommand {
  id: number;
  completed: boolean;

  constructor(id: number, completed: boolean) {
    this.id = id;
    this.completed = completed ?? true;
  }
}
