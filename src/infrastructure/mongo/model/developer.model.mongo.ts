import { Document } from "mongoose";
import Developer from "../../../domain/model/developer.model";

class DeveloperModelMongo implements Developer
{
    id: Number;
    name: String;
    url: String;
    
    constructor(document: Document<any, {}>) {
        const developer = <Developer>document.toObject();

        this.id = developer.id
        this.name = developer.name
        this.url = developer.url
    }
}

export default DeveloperModelMongo
