import Developer from "../model/developer.model";

interface DeveloperRepository
{
    getOne(id: Number): Promise<Developer>

    getCollection(offset: Number, limit: Number): Promise<Developer[]>
}

export default DeveloperRepository