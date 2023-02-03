import { RandomUser } from "../types/types";

export abstract class RandomUserMeAbstract {
  constructor() {}

  /**
   * Return one random person identity
   *
   * @abstract
   * @memberof ApiProviderAbstract
   */
  abstract randomUser(): Promise<RandomUser>;

  /**
   * Return one random person identity by country nationality
   * AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,IN,IR,MX,NL,NO,NZ,RS,TR,UA,US
   * @abstract
   * @param {string[]} pArg
   * @memberof ApiProviderAbstract
   */
  abstract randomUserByNationality(pArg: string[]): Promise<RandomUser>;

  /**
   * Filter by main attributes object
   * gender name location email login dob
   * registered phone cell id picture
   * nat (nationality)
   * @abstract
   * @param {string[]} pArg
   * @memberof ApiProvider
   */
  abstract randomAttributeFilter(pArg: string[]): Promise<RandomUser>;

  /**
   * Return many random identity max returned 5000
   *
   * @abstract
   * @param {number} pArg
   * @memberof ApiProviderAbstract
   */
  abstract manyRandomUser(pArg: number): Promise<RandomUser[]>;
}
