import { MessageError } from '../utilities/DebugUtilities';
import { QueryTypes } from 'sequelize';
import debugLib from 'debug';
import { executeSQL } from '../database/database';

const debug = debugLib('tc:geographyDataSource');

export default class GeographyDataSource 
{

    public static readonly getRangeByUser = async function (idBuyer:number): Promise<[]> {
        debug('Starts the database query of the search range by user');
        try {
            const result = await executeSQL(
                `SELECT com_rango_busqueda as rango
                FROM tr_data_base.comprador 
                WHERE com_id=$idBuyer;`,
                QueryTypes.SELECT,
                {idBuyer}
            );
            if (result.length > 0) {
                return Promise.resolve(result);
            } else {
                debug(`${MessageError}`, '404 TR_DATA_BASE');
                const bodyErrorSearchConfigInfo = {
                    CodeError: 'SELECT-RANGE-BY-USER-404-DB',
                    Reason: 'BD error TR_DATA_BASE',
                    StatusCode: '404',
                };
                return Promise.reject(bodyErrorSearchConfigInfo);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'SELECT-RANGE-BY-USER', Reason: err });
        }
    }

    public static readonly getOverwriteRange = async (): Promise<[]> => {
        debug('Starts the database query of the search products types');
        try {
            const result = await executeSQL(
                `select * from tr_data_base.comprador;
                UPDATE tr_data_base.comprador
                SET com_rango_busqueda=20 where com_id=2;`,
                QueryTypes.SELECT,
                {}
                );
            if (result.length > 0) {
                return Promise.resolve(result);
            } else {
                debug(`${MessageError}`, '404 TR_DATA_BASE');
                const bodyError = {
                    CodeError: 'SELECT-SEARCH-PRODUCT-TYPES-404-DB',
                    Reason: 'BD error TR_DATA_BASE',
                    StatusCode: '404',
                };
                return Promise.reject(bodyError);
            }

        } catch (err) {
            debug(`[%s] ${MessageError}`, err);
            return Promise.reject({ Code: 'SELECT-SEARCH-PRODUCT-TYPES', Reason: err });
        }
    }
}