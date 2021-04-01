import Developer from '../../../domain/model/developer.model'
import DeveloperRepository from '../../../domain/repository/developer.repository';
import GetRequest from './request/developer.request.get'

class Get
{
    private repository: DeveloperRepository

    constructor(repository: DeveloperRepository) {
        this.repository = repository
    }

    invoke(request: GetRequest): Promise<Developer> {
        return this.repository.getOne(request.programId())
    }
}

export default Get
