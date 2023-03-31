import { User } from './User';
import { Project } from './Project';

export class Task{
    constructor(
        public title: string,
        public text: string,
        public createdAt: Date,
        public deadline: Date,
        public executor: User | null,
        public project: Project | null
    )
    {}
}