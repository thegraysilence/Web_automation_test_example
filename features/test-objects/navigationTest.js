import browserslist from 'browserslist'
import {pages} from '../support/pages'

export class NavigationTest{
    openChatPage(){
    pages.user1.chatPage.open()
    pages.user2.chatPage.open()
    browser.maximizeWindow()

    pages.user1.chatPage.getSuccessMessage().waitForDisplayed({timeout: 5000})
    expect(pages.user1.chatPage.getSuccessMessage().toHaveText('Connected to the MQTT.Cool server'))
    pages.user2.chatPage.getSuccessMessage().waitForDisplayed({timeout: 5000})
    expect(pages.user2.chatPage.getSuccessMessage().toHaveText('Connected to the MQTT.Cool server'))
}
    disconnectFromChat(){
        pages.user1.chatPage.getDisconnectButton()
        pages.user2.chatPage.getDisconnectButton()
    }
}