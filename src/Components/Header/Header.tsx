import React, { useState } from "react";
import s from './Header.module.css';
import { Button, Avatar, Tooltip } from '@mantine/core';
import { useAppSelector } from "../../Redux/Hooks/Hooks";
import { getUser } from './../../Redux/Slices/UserSlice';
import { v4 as uuidv4 } from 'uuid';

export const Header = () => {

    const user = useAppSelector(getUser);


    return (
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>
                {user === null || user === undefined ? 
                <Button styles={{
                    root: {
                        backgroundColor: 'transparent', border: '2px solid #8d8d8d'
                    }
                }}>Войти</Button> :
                <Tooltip label={`${user.name} ${user.surName}`}>
                    <Avatar color="cyan" radius="xl">{user.name[0]}{user.surName[0]}</Avatar>
                </Tooltip>
                }
            </div>
        </div>
    )
}