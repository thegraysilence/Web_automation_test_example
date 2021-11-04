import $ from 'webdriverio/build/commands/browser/$'
import {BasePage} from './basePage'
import {userNickname} from '../support/data'

export class ChatPage extends BasePage {

    getSuccessMessage() { return this.browser.$('.text-success') }
    getConnectButton() { return this.browser.$('#connectBtn') }
    getNicknameInputField() { return this.browser.$('#user') }
    getConnectMsgBroker() { return this.browser.$(`//div[contains(text(),'Connected to the MQTT broker')]`) }

    getUsersList() { return this.browser.$('#usersList') }
    getWriteMessageField() {return this.browser.$('#sendMessage')}
    getReplyButton() { return this.browser.$('#replyBtn') }
    getToSeeMessage(){ return this.browser.$('.text-primary').$(`//div[contains(text(), ${userNickname})]`)}
    getDisconnectButton() { return this.browser.$('#disconnectBtn') }

    open() { this.browser.url('https://demos.mqtt.cool/chat/')}
    


}