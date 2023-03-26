import React from "react";
import s from './Header.module.css';
import { Button, Avatar } from '@mantine/core';
import { useAppSelector } from "../../Redux/Hooks/Hooks";
import { getUser } from './../../Redux/Slices/UserSlice';

export const Header = () => {

    const user = useAppSelector(getUser);

    return(
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>
                {user === null || user === undefined ? 
                <Button styles={{
                    root: {
                        backgroundColor: 'transparent', border: '2px solid #8d8d8d'
                    }
                }}>Войти</Button> :
                <Avatar color="cyan" radius="xl">{user.name[0]}{user.surName[0]}</Avatar>}
            </div>
        </div>
    )
}