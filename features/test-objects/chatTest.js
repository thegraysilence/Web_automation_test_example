import {pages} from '../support/pages'
import {data} from '../support/data'
import faker, {fake} from 'faker'


export class ChatTest{
    firstUserEnterChat(){
        pages.user1.chatPage.getNicknameInputField().setValue(data.nickname.user1.userNickname)
        pages.user1.chatPage.getConnectButton().click()
    }

    secondUserEnterChat(){
        pages.user2.chatPage.getNicknameInputField().setValue(data.nickname.user2.userNickname)
        pages.user2.chatPage.getConnectButton().click()
    }

    connectionToBroker(){
        pages.chatPage.getConnectMsgBroker().waitForDisplayed({timeout: 5000})
    }

    displayedInConnectedUsersTab(){
        pages.chatPage.getUsersList().waitForDisplayed({timeout: 5000})
    }

    firstUserSendsMessage(){
        pages.user1.chatPage.getWriteMessageField().setValue(faker.lorem.text())
        pages.user1.chatPage.getReplyButton().click()
    }

    secondUserReceivesMessage(){
        pages.user2.chatPage.getToSeeMessage().waitForDisplayed({timeout: 5000})
    }

    secondUserSendsMessage(){
        pages.user2.chatPage.getWriteMessageField().setValue(faker.lorem.text())
        pages.user2.chatPage.getReplyButton().click()
    }

    firstUserReceivesMessage(){
        pages.user1.chatPage.getToSeeMessage().waitForDisplayed({timeout: 5000})
    }

}