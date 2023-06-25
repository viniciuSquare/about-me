import { NotionElementModel } from "../base/BaseModel";

export class Day extends NotionElementModel{

  populateWithReponse(responseElement: Day) {
    this.title = responseElement.title;
    this.id = responseElement.id;
    this.url = responseElement.url;

    this.icon = responseElement.icon;
  }
  
}