import { Document } from "mongoose";
import Program from "../../../domain/model/program.model";

class ProgramModelMongo implements Program
{
    id: Number;
    developer_id: Number;
    title: String;
    version: String;
    url: String;
    short_description: String;
    license: String;
    thumbnail: String;
    rating: Number;
    total_downloads: Number;
    compatible: String[];
    
    constructor(document: Document<any, {}>) {
        const program = <Program>document.toObject();

        this.id = program.id
        this.developer_id = program.developer_id
        this.title = program.title
        this.version = program.version
        this.url = program.url
        this.short_description = program.short_description
        this.license = program.license
        this.thumbnail = program.thumbnail
        this.rating = program.rating
        this.total_downloads = program.total_downloads
        this.compatible = program.compatible
    }
}

export default ProgramModelMongo
