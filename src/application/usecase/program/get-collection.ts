import Program from '../../../domain/model/program.model'
import ProgramRepository from '../../../domain/repository/program.repository';
import GetCollectionRequest from './request/program.request.get-collection'


class GetCollection
{
    private repository: ProgramRepository

    constructor(repository: ProgramRepository) {
        this.repository = repository
    }

    invoke(request: GetCollectionRequest): Promise<Program[]> {
        return this.repository.getCollection(request.offset(), request.limit())
    }
}

export default GetCollection
