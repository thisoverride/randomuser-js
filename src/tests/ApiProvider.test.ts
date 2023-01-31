import { ApiProvider } from "../provider/ApiProvider"
import {RandomUser} from '../types/types'

let redomeUsme = new ApiProvider();


describe('',()=>{
    it('should be a object', async ()=>{
        let data:RandomUser = await redomeUsme.randomPeople()

        expect(data).toBe(RandomUser)
    })
})