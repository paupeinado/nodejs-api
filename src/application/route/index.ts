import {Router} from 'express'
import programRouter from './program.route';
import developerRouter from './developer.route';

const routes = Router();

routes.use('/programs', programRouter)
routes.use('/developers', developerRouter)

export default routes