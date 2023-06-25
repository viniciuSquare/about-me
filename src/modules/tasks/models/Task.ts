import { NotionElementModel } from "../../../base/BaseModel";

export class Task extends NotionElementModel{

  populateWithReponse(responseElement: Task) {
    this.title = responseElement.title;
    this.id = responseElement.id;
    this.url = responseElement.url;

    this.icon = responseElement.icon;
  }
  
}