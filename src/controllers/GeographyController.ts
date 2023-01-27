import { Request, Response, Router } from 'express';

import { DebugUtilities } from '../utilities/DebugUtilities';
import HTTP_STATUS_CODES from 'http-status';
import RequestLogger from '../utilities/RequestLogger';
import debugLib from 'debug';

const debug = debugLib('tc:GeographyController');
const GeographyController = Router();


GeographyController.get(
    '/JohnGamboa',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            res.status(HTTP_STATUS_CODES.OK).send('HolaMundo');
            console.log('Nadies')
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-SparePartsController: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


export default GeographyController;