import GeographyDataSource from '../datasource/GeographyDatasource';
import debugLib from 'debug';
import { response } from 'express';
const debug = debugLib('John');

export class GeographyService {
    static getGeography() {
        throw new Error('Method not implemented.');
    }

    public static async getRangeByUser(idBuyer:number): Promise<any> {
     try {        
      const response =  await GeographyDataSource.getRangeByUser(idBuyer);      
      return Promise.resolve(response);
     } catch (err) {
        debug('Error trying to obtain motorcycle brands %s ', err);
        return Promise.reject(err);
     }
    }
}
