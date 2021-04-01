type DeveloperGetRequestDependencies = {
    developerId: number,
}

class DeveloperGetRequest
{
    constructor(
        private dependencies: DeveloperGetRequestDependencies
    ) {
        if (Number.isNaN(this.dependencies.developerId)) {
            throw new Error('Invalid developer ID. Must be a number')
        }
    }

    programId(): Number {
        return this.dependencies.developerId
    }
}

export default DeveloperGetRequest
