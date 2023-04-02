import React, { useState } from "react";
import s from './Header.module.css';
import { Button, Avatar, Tooltip, Modal, useMantineTheme } from '@mantine/core';
import { useAppSelector } from "../../Redux/Hooks/Hooks";
import { getUser } from './../../Redux/Slices/UserSlice';
import { v4 as uuidv4 } from 'uuid';
import { SignIn } from "./SignIn/SignIn";


export const Header = () => {

    const [isOpenSign, setIsOpenSign] = useState<boolean>(false);
    const theme = useMantineTheme();

    const user = useAppSelector(getUser);


    return (
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>
                {user === null || user === undefined ?
                    <Button styles={{
                        root: {
                            backgroundColor: 'transparent', border: '2px solid #8d8d8d',
                            '&:not([data-disabled]):hover' : {backgroundColor: '#959595', color: 'white'}
                        }
                    }} onClick={() => setIsOpenSign(true)}>Войти</Button> :
                    <Tooltip label={`${user.name} ${user.surName}`}>
                        <Avatar color="cyan" radius="xl">{user.name[0]}{user.surName[0]}</Avatar>
                    </Tooltip>
                }
            </div>

            <Modal opened={isOpenSign} 
                onClose={() => setIsOpenSign(false)} 
                title="Вход"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[5],
                    opacity: 0.55,
                    blur: 3,
                  }}
                styles={
                    {
                        body: {backgroundColor: '#333333'},
                        header: {backgroundColor: '#333333', color: 'white'}
                    }
                }
                >
                <SignIn/>
            </Modal>
        </div>
    )
}