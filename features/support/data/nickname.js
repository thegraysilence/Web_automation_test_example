import faker, {fake} from 'faker'

export default class Nickname {
    constructor(){
        this.user1 = new User(
            faker.name.firstName()
            )
        this.user2 = new User(
            faker.name.firstName()
        )
    }
}
class User {
    constructor(userNickname){
        this.userNickname = userNickname
    }
}


    


