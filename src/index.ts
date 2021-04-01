import express from 'express'
import routes from './application/route'
import { connect } from 'mongoose'

// Connect to mongo database
connect(process.env.DB_CONNECTION_URI ?? '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create Express server
const server = express()

// Parse JSON payloads 
server.use(express.json())

// Application routes
server.use(routes)

server.listen(process.env.SERVER_PORT, () => {
    console.log('Server listening on port ' + process.env.SERVER_PORT)
})