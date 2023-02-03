import { instance } from "../config/axios.conf";
import { RandomUserMeAbstract } from "./RandomUserMeAbstract";
import { RandomUser } from "../types/types";

export class RandomUserMe extends RandomUserMeAbstract {
  constructor() {
    super();
  }

  /**
   *
   *
   * @return {*}  {Promise<RandomUser>}
   * @memberof ApiProvider
   */
  public async randomUser(): Promise<RandomUser> {
    try {
      let { data } = await instance.get("/api");

      return data.results[0];
    } catch (error) {
      console.error(error);
      return {} as RandomUser;
    }
  }

  /**
   *
   *
   * @param {string[]} pNat
   * @return {*}  {Promise<RandomUser>}
   * @memberof ApiProvider
   */
  public async randomUserByNationality(pNat: string[]): Promise<RandomUser> {
    if (!pNat.length) {
      return {} as RandomUser;
    }

    let params: string = "";
    for (let i = 0; i < pNat.length; i++) {
      params += pNat[i];
      i !== pNat.length - 1 ? (params += ",") : "";
    }

    try {
      const { data } = await instance.get(`/api?nat=${params}`);
      return data.results[0];
    } catch (error) {
      console.error(error);
      return {} as RandomUser;
    }
  }

  /**
   *
   *
   * @param {string[]} pArg
   * @return {*}  {Promise <RandomUser>}
   */
  public async randomAttributeFilter(pArg: string[]): Promise<RandomUser> {
    if (!pArg.length) {
      return {} as RandomUser;
    }

    let params: string = "";
    for (let i = 0; i < pArg.length; i++) {
      params += pArg[i];
      if (i !== pArg.length - 1) {
        params += ",";
      }
    }

    try {
      const { data } = await instance.get(`/api?inc=${params}`);
      return data.results[0];
    } catch (error) {
      console.error(error);
      return {} as RandomUser;
    }
  }

  /**
   *
   *
   * @param {number} pArg
   * @return {*}  {(Promise< Object[] | Object>)}
   * @memberof ApiProvider
   */
  public async manyRandomUser(pArg: number): Promise<RandomUser[]> {
    if (pArg < 1 || pArg > 5000) {
      return {} as RandomUser[];
    }
    try {
      const { data } = await instance.get(`/api?results=${pArg}`);
      return data.results;
    } catch (error) {
      console.error(error);
      return {} as RandomUser[];
    }
  }
}
