import { ApiProvider } from "../provider/ApiProvider"
import {RandomUser} from '../types/types'

let randomUser = new ApiProvider();


describe('',()=>{
    test("test randomPeople method", () => {
        const expectedResult = {} as RandomUser;
        return expect(randomUser.randomPeople()).resolves.toEqual(expectedResult);
      });
      
})