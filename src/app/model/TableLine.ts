import {Category} from "./Category";

export class TableLine {
  constructor(public category: Category,
              public real_time: number,
              public value_time: number,
  ) {
  }
}
