export class SignupInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    type : String;
    
    
 
    constructor(name: string, username: string, email: string, password: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['trainer'];
    }
}
