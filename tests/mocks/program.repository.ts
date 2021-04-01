import Program from '../../src/domain/model/program.model';
import ProgramRepository from '../../src/domain/repository/program.repository'

class ProgramRepositoryMock implements ProgramRepository
{
    getOne(id: Number): Promise<Program> {

        if (3075333 !== id) {
            throw new Error('Program not found')
        }

        return new Promise<Program>((resolve, reject) => {
            resolve({
                "id": 3075333,
                "developer_id": 801,
                "title": "VLC",
                "version": "2.4.0",
                "url": "http://vlc.en.softonic.com",
                "short_description": "Simply the best multi-format media player",
                "license": "Free (GPL)",
                "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/25000/25339/vlc-media-player-11-100x100.png",
                "rating": 8,
                "total_downloads": 5784268,
                "compatible": [
                  "Windows 10"
                ]
            })
        })
    }

    getCollection(offset: Number, limit: Number): Promise<Program[]> {
        return new Promise<Program[]>((resolve, reject) => {
            resolve([{
                "id": 62465,
                "developer_id": 241,
                "title": "Nero",
                "version": "10.4.3",
                "url": "http://nero.en.softonic.com",
                "short_description": "The ultimate PC multimedia suite",
                "license": "Trial",
                "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/7000/7595/thumbnail_1444824132-100x100.png",
                "rating": 8,
                "total_downloads": 6239531,
                "compatible": [
                  "Windows 8",
                  "Windows 10"
                ]
              },{
                "id": 3075333,
                "developer_id": 801,
                "title": "VLC",
                "version": "2.4.0",
                "url": "http://vlc.en.softonic.com",
                "short_description": "Simply the best multi-format media player",
                "license": "Free (GPL)",
                "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/25000/25339/vlc-media-player-11-100x100.png",
                "rating": 8,
                "total_downloads": 5784268,
                "compatible": [
                "Windows 10"
                ]
            }])
        })
    }
}

export default ProgramRepositoryMock
