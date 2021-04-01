import Developer from '../../../domain/model/developer.model'
import DeveloperRepository from '../../../domain/repository/developer.repository';
import GetCollectionRequest from './request/developer.request.get-collection'


class GetCollection
{
    private repository: DeveloperRepository

    constructor(repository: DeveloperRepository) {
        this.repository = repository
    }

    invoke(request: GetCollectionRequest): Promise<Developer[]> {
        return this.repository.getCollection(request.offset(), request.limit())
    }
}

export default GetCollection
