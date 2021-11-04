import Nickname from './data/nickname'

class Data{
    constructor(){
        this.nickname = new Nickname()
    }
}

export const data = new Data()