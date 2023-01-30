import { Request, Response, Router, response } from 'express';

import { DebugUtilities } from '../utilities/DebugUtilities';
import { GeographyService } from '../services/GeographyService';
import HTTP_STATUS_CODES from 'http-status';
import RequestLogger from '../utilities/RequestLogger';
import debugLib from 'debug';

const debug = debugLib('tc:GeographyController');
const GeographyController = Router();


GeographyController.get(
    '/geographyc/get-search-range',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try {
            const response =  await GeographyService.getRangeByUser();
            res.status(HTTP_STATUS_CODES.OK).send(response);
            console.log('Nadies')
        } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: POST-SparePartsController: %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
    
); 
export default GeographyController;