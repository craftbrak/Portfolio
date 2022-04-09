import {Category} from "./Category";

export class Line {
  constructor(public category: Category,
              public title: string,
              public detail : string,
              public proofs: string[],
              public real_time: number = 0,
              public valued_time:number=0,
              //TODO: ADD dates
  ) {
  }
}
