import {Then, When} from '@wdio/cucumber-framework'
import {tests} from '../support/tests'

When('User sees that both users enter the nickname', ()=>{
    tests.chatTest.firstUserEnterChat()
    tests.chatTest.secondUserEnterChat()
})

When('User sees that both users connect to broker', ()=>{
    tests.chatTest.connectionToBroker()
})

When('User sees that both users see themselves and each other in the Connected Users tab', ()=>{
    tests.chatTest.displayedInConnectedUsersTab()
})

When('User sees that user1 sends any message', ()=>{
    tests.chatTest.firstUserSendsMessage()
})

When('User sees that user2 receives the sent message', ()=>{
    tests.chatTest.secondUserReceivesMessage()
})

When('User sees that user2 sends any message', ()=>{
    tests.chatTest.secondUserSendsMessage()
})

Then('User sees that user1 receives the sent message', ()=>{
    tests.chatTest.firstUserReceivesMessage()
})
