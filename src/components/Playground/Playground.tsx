// 1. Внешние зависимости.
// 2. Компоненты вашего проекта.
// 3. Утилиты и бизнес-логика.
// 4. Стили и ассеты.
import React, { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SettingsStage from './SettingsStage/SettingsStage';
import TimersStage from './TimersStage/TimersStage';
import StageContext, {EStages, TStages} from '../../store/StageContext';
import TickNotifier, {COUNT_OF_BLINKS_EQUIVALENT_TO_ONE_SECOND} from '../../utils/TickNotifier';
import {makeSnakeCase} from '../../utils/utils';
import './Playground.scss';


const Playground = () => {
  const [currentStage, setCurrentStage] = useState<TStages>(EStages.SETTINGS);

  const renderStage = (currentStage: TStages) => {
    switch(currentStage) {
      case EStages.SETTINGS:
        return <SettingsStage />
      case EStages.TIMERS:
        return <TimersStage />
    }
  }
  
  const changeStage = (stage: TStages) => setCurrentStage(stage);

  return (
    <div className="Playground" style={{backgroundImage: `url("/assets/other/${makeSnakeCase('Playground')}.jpg")`}}>
      <StageContext.Provider value={{changeStage}}>
        { renderStage(currentStage) }
      </StageContext.Provider>
    </div>
  );
}

export default Playground;

  // const [isRuns, setIsRuns] = useState<boolean>(false);
  // const [minutes, setMinutes] = useState<string>('00');
  // const [secons, setSeconds] = useState<string>('00');

  // const countMSRef = useRef<number>(0);
  // const isRunsRef = useRef<boolean>(false);
  // const secondsRef = useRef<number>(0);

  // useEffect(() => {
  //   const alreadyUsed = localStorage.getItem(`${cachekeys.alreadyUsed}`);
  //   if (!alreadyUsed) localStorage.setItem(`${cachekeys.alreadyUsed}`, 'true');

  //   const instance = TickNotifier.getInstance();
  //   instance.subscribe(onTickNotify);
  //   return () => instance.unsubscribe(onTickNotify);
  // }, []);

  // const onTickNotify = (): void => { 
  //   if (!isRunsRef.current) return;
  //   if (countMSRef.current < COUNT_OF_BLINKS_EQUIVALENT_TO_ONE_SECOND) {
  //     countMSRef.current += 1;
  //     return;
  //   }

  //   countMSRef.current = 0;
  //   secondsRef.current += 1;
  //   setTime(secondsRef.current);
  // };

  // const setTime = (seconds: number) => {
  //   const min = Math.floor(seconds / 60);
  //   const sec = seconds - (min * 60);

  //   const stringMin = min < 10 ? '0' + min : min + '';
  //   const stringSec = sec < 10 ? '0' + sec : sec + '';

  //   setMinutes(stringMin);
  //   setSeconds(stringSec);
  // }

  // const setIsRunMain = ():void => {
  //   isRunsRef.current = !isRunsRef.current;
  //   setIsRuns(isRunsRef.current);
  // }

  // const handleClickControl = () => setIsRunMain();
