import {Given, Then} from '@wdio/cucumber-framework'
import {tests} from '../support/tests'


Given('User sees both users have opened the page and connected to server', ()=>{
    tests.navigationTest.openChatPage()
})

Then('User sees that both users can disconnect and lose connection', ()=>{
    tests.navigationTest.disconnectFromChat()
})