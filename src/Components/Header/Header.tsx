import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return(
        <div className={s.outterContainerHeader}>
            <div className={s.logo}>Active Book</div>
            <div className={s.controls}>Войти</div>
        </div>
    )
}