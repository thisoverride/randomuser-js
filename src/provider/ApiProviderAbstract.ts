export abstract class ApiProviderAbstract {
    constructor(){}

  /**
   * Return one random person identity 
   *
   * @abstract
   * @memberof ApiProviderAbstract
   */
  abstract randomPeople(): Object

  /**
   * Return one random person identity by country nationality
   * AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,IN,IR,MX,NL,NO,NZ,RS,TR,UA,US
   * @abstract
   * @param {string[]} pArg
   * @memberof ApiProviderAbstract
   */
  abstract randomPeopleByNationality(pArg: string[]): Object

  /**
   * Filter by main attributes object
   * gender name location email login dob
   * registered phone cell id picture
   * nat (nationality)
   * @abstract
   * @param {string[]} pArg
   * @memberof ApiProvider
   */
   abstract randomAttributeFilter(pArg: string[]): Object 

   /**
    * Return many random identity max returned 5000
    *
    * @abstract
    * @param {number} pArg
    * @memberof ApiProviderAbstract
    */
   abstract manyRandomIdentity(pArg: number): Object[] | Object

  //  abstract randomPeopleSync(): Object
  //  abstract randomPeopleByNationalitySync(pArg: string[]): Object
  //  abstract randomAttributeFilterSync(pArg: string[]): Object 
  //  abstract manyRandomIdentitySync(pArg: number): Object[] | Object
   

}
