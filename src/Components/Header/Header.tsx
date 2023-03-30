import React, { useState } from "react";
import s from './Header.module.css';
import { Button, Avatar, Tooltip } from '@mantine/core';
import { useAppSelector } from "../../Redux/Hooks/Hooks";
import { getAllUsers, getUser } from './../../Redux/Slices/UserSlice';
import { v4 as uuidv4 } from 'uuid';

export const Header = () => {

    const user = useAppSelector(getUser);
    const allUsers = useAppSelector(getAllUsers);
    const [_drawableUsers, _setDrawableUsers] = useState<HTMLElement>();

    function DrawUsers(): void{
        
    }

    return (
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>
                {/* {user === null || user === undefined ? 
                <Button styles={{
                    root: {
                        backgroundColor: 'transparent', border: '2px solid #8d8d8d'
                    }
                }}>Войти</Button> :
                <Tooltip label={`${user.name} ${user.surName}`}>
                    <Avatar color="cyan" radius="xl">{user.name[0]}{user.surName[0]}</Avatar>
                </Tooltip>
                } */}

                {user === null || user === undefined ?
                    <Button styles={{
                        root: {
                            backgroundColor: 'transparent', border: '2px solid #8d8d8d'
                        }
                    }}>Войти</Button> :
                    allUsers?.map(item => 
                        <Tooltip key={uuidv4()} label={`${item.name} ${item.surName} ${item.position}`} 
                            multiline 
                            width={100}
                            withArrow>
                            <Avatar color="cyan" radius="xl">{item.name[0]}{item.surName[0]}</Avatar>
                        </Tooltip>)
                }
            </div>
        </div>
    )
}