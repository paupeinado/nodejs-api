import Program from '../../../domain/model/program.model'
import ProgramRepository from '../../../domain/repository/program.repository';
import GetRequest from './request/program.request.get'

class Get
{
    private repository: ProgramRepository

    constructor(repository: ProgramRepository) {
        this.repository = repository
    }

    invoke(request: GetRequest): Promise<Program> {
        return this.repository.getOne(request.programId())
    }
}

export default Get
