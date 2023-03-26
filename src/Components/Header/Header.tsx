import React from "react";
import s from './Header.module.css';
import { Button } from '@mantine/core';

export const Header = () => {
    return(
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>
                <Button>Войти</Button>
            </div>
        </div>
    )
}