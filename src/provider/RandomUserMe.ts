import axios, { AxiosError, AxiosInstance } from 'axios';
import { RandomUser, RandomUserError } from '../@types/types';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 1000,
});

export class RandomUserMe{

  /**
  * Return one random person identity
  * 
  * @returns {Promise<RandomUser | RandomUserError>} - A promise resolving to a RandomUser or error.
  */
  public static async randomUser(): Promise<RandomUser | RandomUserError> {
    try {
      const { data } = await instance.get('/');
      return data.results[0];
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
     * Return one random person identity by country nationality
     * AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,IN,IR,MX,NL,NO,NZ,RS,TR,UA,US
     * 
     * @param {string[]} strNationality - Array of country codes ('AU', 'BR').
     * @memberof RandomUserMe
     */
  public static async randomUserByNationality(strNationality: string[]): Promise<RandomUser | RandomUserError> {
    if (!strNationality.length) {
      return {} as RandomUser;
    }

    const params: string = strNationality.join(',');
    try {
      const { data } = await instance.get(`/?nat=${params}`);
      return data.results[0];
    } catch (error) {
      return this.handleError(error);
    }
  }


   /**
    * Filter by main attributes object.
    * Allowed attributes: gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat (nationality).
    * 
    * @param {string[]} attributes - Array of attributes to include in the response.
    * @returns {Promise<RandomUser | RandomUserError>} - A promise resolving to a RandomUser or error.
    */
  public static async randomAttributeFilter(Arg: string[]): Promise<RandomUser | RandomUserError> {
    if (!Arg.length) {
      return {} as RandomUser;
    }

    const params = Arg.join(',');
    try {
      const { data } = await instance.get(`/?inc=${params}`);
      return data.results[0];
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
  * Return many random identities, maximum returned 5000.
  * 
  * @param {number} numberOfRandom - Number of random identities to retrieve (max 5000).
  * @returns {Promise<RandomUser[] | RandomUserError>} - A promise resolving to an array of RandomUsers or an error.
  */
  public static async manyRandomUser(numberOfRandom: number): Promise<RandomUser[] | RandomUserError> {
    if (numberOfRandom < 1 || numberOfRandom > 5000) {
      return [] as RandomUser[];
    }

    try {
      const { data } = await instance.get(`/?results=${numberOfRandom}`);
      return data.results;
    } catch (error) {
      return this.handleError(error);
    }
  }

   /**
   * Handles errors returned from API calls.
   * 
   * @param {unknown} error - The error object.
   * @returns {RandomUserError | unknown} - Error object containing error details.
   */
  private static handleError (error : unknown): RandomUserError {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status) {
        return {
          status: error.response.status,
          code: error.code,
          message: error.message,
          data: error.response.data
        };
      }
    }
    return error as any
  }
}
    
  
