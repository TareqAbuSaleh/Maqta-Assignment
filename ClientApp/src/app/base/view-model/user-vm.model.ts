export class UserVM {
    id: string;
    username: string;
    firstName: string;

    constructor(id: string, username: string, firstname: string) {
        this.firstName = firstname;
        this.id = id;
        this.username = username;
    }
}  