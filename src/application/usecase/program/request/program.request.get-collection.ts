type ProgramGetCollectionRequestDependencies = {
    offset: number,
    limit: number,
}

class ProgramGetCollectionRequest
{
    constructor(
        private dependencies: ProgramGetCollectionRequestDependencies
    ) {
        if (Number.isNaN(this.dependencies.offset)) {
            throw new Error('Parameter offset must be a number')
        }

        if (Number.isNaN(this.dependencies.limit)) {
            throw new Error('Parameter limit must be a number')
        }
    }

    offset(): Number {
        return this.dependencies.offset
    }

    limit(): Number {
        return this.dependencies.limit
    }
}

export default ProgramGetCollectionRequest