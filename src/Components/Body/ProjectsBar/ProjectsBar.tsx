import React from 'react';
import s from './ProjectsBar.module.css';
import { useAppSelector } from '../../../Redux/Hooks/Hooks';
import { getUser } from './../../../Redux/Slices/UserSlice';
import { Button, Avatar, Tooltip } from '@mantine/core';



export const ProjectsBar = () => {

    const user = useAppSelector(getUser);

    return(
        <div className={s.outterContainerProjectsBar}>
            {
                user !== null && user.role === 'ADMIN' ?
                <Button styles={{
                    root: {
                        backgroundColor: 'transparent'
                    }
                }}>Создать проект</Button> :
                ''
            }
            {/* <Button styles={{
                    root: {
                        backgroundColor: 'transparent'
                    }
                }}>Создать проект</Button> */}
        </div>
    )
}