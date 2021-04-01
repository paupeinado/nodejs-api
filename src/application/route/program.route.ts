import { Router } from 'express'
import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection'
import GetUseCase from '../usecase/program/get'
import GetCollectionUseCase from '../usecase/program/get-collection'
import GetRequest from '../usecase/program/request/program.request.get'
import GetCollectionRequest from '../usecase/program/request/program.request.get-collection'


// Dependence injection container
let container = new ContainerBuilder()
let loader = new YamlFileLoader(container)
loader.load('/var/app/config/program.yml')

// Define developer routes
const programRouter = Router()

programRouter.get('/', async (request, response, next) => {
    try {
        const getCollectionRequest = new GetCollectionRequest({
            offset: request.query.offset ? Number(request.query.offset) : 0,
            limit: request.query.limit ? Number(request.query.limit) : 100,
        })

        const getCollectionUseCase = <GetCollectionUseCase>container.get('program.usecase.getCollection');
        const programCollection = await getCollectionUseCase.invoke(getCollectionRequest)
    
        response.send(programCollection)
    } catch (error) {
        next(error)
    }
});

programRouter.get('/:id', async (request, response, next) => {
    try {
        const getRequest = new GetRequest({
            programId: Number(request.params.id)
        })

        const getProgramUseCase = <GetUseCase>container.get('program.usecase.get');
        const program = await getProgramUseCase.invoke(getRequest)

        response.send(program)
    } catch (error) {
        next(error)
    }
})

export default programRouter
