import { instance } from "../config/axios.conf";
import { ApiProviderAbstract } from "./ApiProviderAbstract";
import {RandomUser} from '../types/types';
import randomuserme from "../main";

export class ApiProvider extends ApiProviderAbstract{
 
  constructor(){
    super();
  }

  /**
   *
   *
   * @return {*}  {Promise<Object>}
   * @memberof ApiProvider
   */
  public async randomPeople(): Promise<RandomUser | null> { // modifier le type de revoie 
    try {
      let response = await instance.get("/api");
      const data :RandomUser = response.data;
      
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   *
   *
   * @param {string[]} pNat
   * @return {*}  {Promise<Object>}
   * @memberof ApiProvider
   */
  public async randomPeopleByNationality(pNat: string[]): Promise<Object> {
    if (!pNat.length) {return {};}

    let params: string = "";
    for (let i = 0; i < pNat.length; i++) {
      params += pNat[i];
      if (i !== pNat.length - 1) {
        params += ",";
      }
    }

    try {
      const { data } = await instance.get(`/api?nat=${params}`);
      let filterData: Object = new Object();
      data.results.forEach((itemFilter: Object) => (filterData = itemFilter));

      return filterData;

    } catch (error) {
      console.error(error);
      return {};
    }
   
  }

  /**
   * 
   * 
   * @param {string[]} pArg
   * @return {*}  {Promise < Object>}
   */
  public async randomAttributeFilter(pArg: string[]): Promise<Object> {
    if (!pArg.length) {return {};}

    let params: string = "";
    for (let i = 0; i < pArg.length; i++) {
      params += pArg[i];
      if (i !== pArg.length - 1) {
        params += ",";
      }
    }

    try {
      const { data } = await instance.get(`/api?inc=${params}`);
      let filterData: Object = new Object();
      data.results.forEach((itemFilter: Object) => (filterData = itemFilter));

      return filterData;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  /**
   *
   *
   * @param {number} pArg
   * @return {*}  {(Promise< Object[] | Object>)}
   * @memberof ApiProvider
   */
  public async manyRandomIdentity(pArg: number): Promise< Object[] | Object> {
    if(pArg < 1 || pArg > 5000){return {}}
    try {
      const { data } = await instance.get(`/api?results=${pArg}`);
      
      return data.results;
    } catch (error) {
      console.error(error);
      return {};
    }

  }
 
}
