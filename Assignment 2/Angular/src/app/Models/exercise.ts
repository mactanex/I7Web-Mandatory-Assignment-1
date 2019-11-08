import { Log } from './Log';
// tslint:disable-next-line: class-name
export class exercise {
  constructor(
    name?: string,
    description?: string,
    set?: number,
    repsOrTime?: string,
    activities?: Log,
    id?: string
  ) {
    this.name = name;
    this.description = description;
    this.set = set;
    this.repsOrtime = repsOrTime;
    this.id = id;
    this.activities = activities;
  }
  id: string;
  name: string;
  description: string;
  set: number;
  repsOrtime: string;
  activities: Log;
}
