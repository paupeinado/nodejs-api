import { Document, Model, model, Schema } from 'mongoose'
import Developer from '../../../domain/model/developer.model'
import DeveloperRepository from '../../../domain/repository/developer.repository'
import DeveloperModelMongo from '../model/developer.model.mongo';

const DeveloperSchemaFields: Record<keyof Developer, any> =  {
    id: {
        type: Number,
        unique: true,
    },
    name: String,
    url: String,
};


const DeveloperShema = new Schema(DeveloperSchemaFields)

class DeveloperRepositoryMongo implements DeveloperRepository
{
    private model: Model<Document>

    constructor() {
        this.model = model('Developer', DeveloperShema, 'developer')
    }

    async getOne(programId: number): Promise<Developer> {
        const document = await this.model.findOne({
            id: programId
        }).exec()

        if (null === document) {
            throw new Error('Developer not found')
        }

        return new DeveloperModelMongo(document)
    }

    async getCollection(offset: number, limit: number): Promise<Developer[]> {
        const documents = await this.model.find().skip(offset).limit(limit).exec()

        let programs = <Developer[]>[];
        documents.forEach(async (document) => {
            programs.push(new DeveloperModelMongo(document))
        });

        return programs
    }
}

export default DeveloperRepositoryMongo
