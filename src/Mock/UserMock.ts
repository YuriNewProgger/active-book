import { User } from './../Models/User';

const names: string[] = ['Nicko', 'Evelin', 'Shayla', 'lidiya', 'Jayden', 'Nina'];
const surNames: string[] = ['Smith', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Davis'];
const patronimys: string[] = ['Ariel', 'Alice', 'Adriana', 'Andrea', 'Dorothy', 'Ellen'];
const positions: string[] = ['Team lead', 'Developer', 'Ingeneer', 'Manager', 'Technical Writer'];
const roles: string[] = ['user', 'admin'];

export function userFactory(){
    return new User('Nicko', 'Smith', 'Evelin', 'USER', 'developer');
}

//#region Фабрика создания массива рандомных пользователей
export function usersFactory(countUsers: number){
    let listUsers: User[] = new Array();
    for (let i = 0; i < countUsers; i++) {
        listUsers.push(
            new User(names[getRandomInt(1, names.length)], 
                    surNames[getRandomInt(1, surNames.length)],
                    patronimys[getRandomInt(1, patronimys.length)],
                    positions[getRandomInt(1, positions.length)],
                    roles[getRandomInt(1, roles.length)]))
        
    }

    return listUsers;
}
//#endregion

//Генерация случайного целого числа в заданом интервале, минимум и максимум включительно
function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }