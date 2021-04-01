import { Router } from 'express'
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
import GetRequest from '../../application/usecase/developer/request/developer.request.get'
import GetUseCase from '../../application/usecase/developer/get'
import GetCollectionRequest from '../../application/usecase/developer/request/developer.request.get-collection'
import GetCollectionUseCase from '../../application/usecase/developer/get-collection'

// Dependence injection container
let container = new ContainerBuilder()
let loader = new YamlFileLoader(container)
loader.load('/var/app/config/developer.yml')


// Define developer routes
const developerRouter = Router()

developerRouter.get('/', async (request, response, next) => {
    try {
        const getCollectionRequest = new GetCollectionRequest({
            offset: request.query.offset ? Number(request.query.offset) : 0,
            limit: request.query.limit ? Number(request.query.limit) : 100,
        })

        const getCollectionUseCase = <GetCollectionUseCase>container.get('developer.usecase.getCollection');
        const developerCollection = await getCollectionUseCase.invoke(getCollectionRequest)
    
        response.send(developerCollection)
    } catch (error) {
        next(error)
    }
})

developerRouter.get('/:id', async (request, response, next) => {
    try {
        const getRequest = new GetRequest({
            developerId: Number(request.params.id)
        })

        const getProgramUseCase = <GetUseCase>container.get('developer.usecase.get');
        const developer = await getProgramUseCase.invoke(getRequest)

        response.send(developer)
    } catch (error) {
        next(error)
    }
})

export default developerRouter