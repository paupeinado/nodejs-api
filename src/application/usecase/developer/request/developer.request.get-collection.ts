type DeveloperGetCollectionRequestDependencies = {
    offset: number,
    limit: number,
}

class DeveloperGetCollectionRequest
{
    constructor(
        private dependencies: DeveloperGetCollectionRequestDependencies
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

export default DeveloperGetCollectionRequest