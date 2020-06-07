class User {
    name: string;
    lastName: string;
}

interface IIterator {
    next(): any;
    hasNext(): boolean;
}

class UserIterator implements IIterator {

    userList: User[];
    index: number;

    constructor (userList: User[]) {
        this.userList = userList;
        this.index = 0;
    }

    next() {
        const user: User = this.userList[this.index];
        this.index++;
        return user;
    }

    hasNext(): boolean {
        if (this.index <= (this.userList.length - 1)) {
            return true;
        }
        this.index = 0;
        return false;
    }
    
}

const users: User[] = [];

const user1 = new User();
user1.name = 'John';
user1.lastName = 'Snow';
users.push(user1);

const user2 = new User();
user2.name = 'Marta';
user2.lastName = 'Stuart';
users.push(user2);

const user3 = new User();
user3.name = 'Frederick';
user3.lastName = 'Cleaver';
users.push(user3);

const user4 = new User();
user4.name = 'Will';
user4.lastName = 'Mcarty';
users.push(user4);

const userIterator = new UserIterator(users);

while (userIterator.hasNext()) {
    const user: User = userIterator.next();
    console.log(user.name, user.lastName);
}