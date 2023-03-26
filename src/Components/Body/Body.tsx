import React from "react";
import s from './Body.module.css';
import { ProjectsBar } from "./ProjectsBar/ProjectsBar";

export const Body = () => {
    return(
        <div className={s.outterContainerBody}>
                <ProjectsBar/>
                Tasks
        </div>
    )
}