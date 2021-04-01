import { Document, Model, model, Schema } from 'mongoose'
import Program from '../../../domain/model/program.model'
import ProgramRepository from '../../../domain/repository/program.repository'
import ProgramModelMongo from '../model/program.model.mongo';

const ProgramSchemaFields: Record<keyof Program, any> =  {
    id: {
        type: Number,
        unique: true,
    },
    developer_id: Number,
    title: String,
    version: String,
    url: String,
    short_description: String,
    license: String,
    thumbnail: String,
    rating: Number,
    total_downloads: Number,
    compatible: Array,
};


const ProgramShema = new Schema(ProgramSchemaFields)

class ProgramRepositoryMongo implements ProgramRepository
{
    private model: Model<Document>

    constructor() {
        this.model = model('Program', ProgramShema, 'program')
    }

    async getOne(programId: number): Promise<Program> {
        const document = await this.model.findOne({
            id: programId
        }).exec()

        if (null === document) {
            throw new Error('Program not found')
        }

        return new ProgramModelMongo(document)
    }

    async getCollection(offset: number, limit: number): Promise<Program[]> {
        const documents = await this.model.find().skip(offset).limit(limit).exec()

        let programs = <Program[]>[];
        documents.forEach(async (document) => {
            programs.push(new ProgramModelMongo(document))
        });

        return programs
    }
}

export default ProgramRepositoryMongo
