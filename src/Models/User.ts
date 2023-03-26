import { Task } from './Task';
import { Project } from './Project';

export class User{

    constructor(
        public name: string, 
        public surName: string, 
        public patronymic: string,
        public position: string,
        public role: string,
        public projects: Project[],
        public tasks: Task[])
        {}
}