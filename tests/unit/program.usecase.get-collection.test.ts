import GetCollectionUseCase from '../../src/application/usecase/program/get-collection'
import ProgramGetCollectionRequest from '../../src/application/usecase/program/request/program.request.get-collection'
import ProgramRepositoryMock from '../mocks/program.repository'

test('Should return a Program collection', async () => {
    const offset: number = 0
    const limit: number = 2

    const getCollectionProgramUseCase = new GetCollectionUseCase(new ProgramRepositoryMock())
    const getCollectionRequest = new ProgramGetCollectionRequest({offset: offset, limit: limit})
    const programCollection = await getCollectionProgramUseCase.invoke(getCollectionRequest)

    expect(programCollection).toHaveLength(2)
    expect(programCollection.pop()).toHaveProperty('id');

})

test('Invalid offset parameter', async () => {
    try {
        const offset: number = Number("notANumber")
        const limit: number = 2

        const getCollectionRequest = new ProgramGetCollectionRequest({offset: offset, limit: limit})
    } catch(error) {
        expect(error.message).toBe('Parameter offset must be a number')
    }
})

test('Invalid limit parameter', async () => {
    try {
        const offset: number = 0
        const limit: number = Number("notANumber")

        const getCollectionRequest = new ProgramGetCollectionRequest({offset: offset, limit: limit})
    } catch(error) {
        expect(error.message).toBe('Parameter limit must be a number')
    }
})