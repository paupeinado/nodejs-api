import GetUseCase from '../../src/application/usecase/program/get'
import ProgramGetRequest from '../../src/application/usecase/program/request/program.request.get'
import ProgramRepositoryMock from '../mocks/program.repository'

test('Should return a Program', async () => {
    const programId = 3075333
    const getProgramUseCase = new GetUseCase(new ProgramRepositoryMock())
    const program = await getProgramUseCase.invoke(new ProgramGetRequest({programId: programId}))

    expect(program.id).toEqual(programId);
})

test('Non existing program ID', async () => {
    try {
        const programId = 99999
        const getProgramUseCase = new GetUseCase(new ProgramRepositoryMock())
        const program = await getProgramUseCase.invoke(new ProgramGetRequest({programId: programId}))
    } catch(error) {
        expect(error.message).toBe('Program not found')
    }
})

test('Invalid program ID', async () => {
    try {
        const programId = Number("notANumber")
        const getProgramRequest = new ProgramGetRequest({programId: programId})
    } catch(error) {
        expect(error.message).toBe('Invalid program ID. Must be a number')
    }
})