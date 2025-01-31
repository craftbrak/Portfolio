import {Category} from "./Category";

export class Project{
  constructor(public  category:Category,
              public projectName:string,
              public projectPresentation:string,
              public images: string[],
              public links: string[]
  ) {
  }
}
