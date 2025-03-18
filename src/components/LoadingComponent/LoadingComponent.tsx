// 1. Внешние зависимости.
// 2. Компоненты вашего проекта.
// 3. Утилиты и бизнес-логика.
// 4. Стили и ассеты.
import React, { JSX, useContext, useEffect } from 'react';
import PageContext, {EPage} from '../../store/PageContext';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import {hotkeysIsEmpty} from '../../user_cache/keys';

const LoadingComponent = (): JSX.Element => {
    const context = useContext(PageContext);

    if (!context) return <ErrorComponent message={String(context)}/>

    useEffect(() => {
        hotkeysIsEmpty() ? context.navigate(EPage.WELCOME) : context.navigate(EPage.PLAYGROUND);
    }, []);

    return <div>loading ....</div>
}

export default LoadingComponent;