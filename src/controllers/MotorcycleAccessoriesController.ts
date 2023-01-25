import { Request, Response, Router } from 'express';

import { DebugUtilities } from '../utilities/DebugUtilities';
import RequestLogger from '../utilities/RequestLogger';
import debugLib from 'debug';

const debug = debugLib('tc:MotorcycleAccessoriesController');
const MotorcycleAccessoriesController = Router();


MotorcycleAccessoriesController.get(
    '/accessories/get-types-of-accessories',
    RequestLogger.basic,
    async (req: Request, res: Response) => {
        try { console.log("Esta funcionando")
                } catch (err) {
            const error = DebugUtilities.error(err, 'Error');
            debug('ERROR: GET-MotorcycleAccessoriesController: /accessories/get-types-of-accessories %j', error.statusError);
            res.status(error.codeStatusError).send(error.statusError);
        }
    }
);


export default MotorcycleAccessoriesController;