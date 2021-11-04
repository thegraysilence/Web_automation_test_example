import {NavigationTest} from '../test-objects/navigationTest'
import {ChatTest} from '../test-objects/chatTest'

class Tests{
    constructor(){
        this.navigationTest = new NavigationTest()
        this.chatTest = new ChatTest()
    }
}

export const tests = new Tests()