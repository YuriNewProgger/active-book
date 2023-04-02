import React, { useState } from "react";
import s from './SignIn.module.css';
import { Button, TextInput } from '@mantine/core';

export const SignIn = () => {

    const [_email, _setEmail] = useState<string>();
    const [_hash, _setHash] = useState<string>();

    return (
        <div className={s.outterContainerSignIn}>
            <TextInput label="email"
                value={_email}
                onChange={(event) => _setEmail(event.currentTarget.value)}
                styles={{
                    label: { color: 'white' }
                }} />
            <TextInput label="пароль"
                value={_hash}
                onChange={(event) => _setHash(event.currentTarget.value)}
                styles={{
                    label: { color: 'white' }
                }} />

            <div className={s.outterContainerBtn}>
                <Button styles={{
                    root: { 
                        backgroundColor: 'transparent', borderBottom: '2px solid #8d8d8d', marginTop: '5%' ,
                        '&:not([data-disabled]):hover' : {backgroundColor: 'transparent', color: '#688efe', borderBottom: '2px solid #688efe'}
                    }
                }}>Регистрация</Button>

                <Button styles={{
                    root: { backgroundColor: 'transparent', border: '2px solid #8d8d8d', marginTop: '5%', width: '30%',
                    '&:not([data-disabled]):hover' : {backgroundColor: '#959595', color: 'white'} }
                }}>Войти</Button>


            </div>

        </div>
    )
}