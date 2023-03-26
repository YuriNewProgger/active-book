import { User } from './../Models/User';


export function userFactory(){
    return new User('Nicko', 'Smith', 'Evelin', 'developer', 'developer');
}