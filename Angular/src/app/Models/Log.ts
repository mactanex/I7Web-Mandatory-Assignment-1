export class Log {
  constructor(set?: number, repsOrTime?: string) {
    this.set = set;
    this.repsOrTime = repsOrTime;
  }
  id: string;
  set: number;
  repsOrTime: string;
}
