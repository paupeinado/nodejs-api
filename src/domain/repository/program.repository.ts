import Program from "../model/program.model";

interface ProgramModel
{
    getOne(id: Number): Promise<Program>

    getCollection(offset: Number, limit: Number): Promise<Program[]>
}

export default ProgramModel