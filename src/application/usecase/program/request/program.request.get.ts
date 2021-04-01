type ProgramGetRequestDependencies = {
    programId: number,
}

class ProgramGetRequest
{
    constructor(
        private dependencies: ProgramGetRequestDependencies
    ) {
        if (Number.isNaN(this.dependencies.programId)) {
            throw new Error('Invalid program ID. Must be a number')
        }
    }

    programId(): Number {
        return this.dependencies.programId
    }
}

export default ProgramGetRequest