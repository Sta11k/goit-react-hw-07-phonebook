// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import s from './Timer.module.css';
import { timer, interval } from 'rxjs';
import { useState } from 'react';
import { takeUntil } from 'rxjs/operators';
function Timer() {
  // const startTimer = () => {};
  // timer(0, 1000).subscribe(n => console.log('timer', n));
  // interval(1000).subscribe(n => console.log('interval', n));
  const currentDate = new Date();
  const startOfNextMinute = new Date(
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds() + 1,
  );

  const hendelStartStop = e => {
    const source = interval(1000);
    const [start, setStart] = useState;
    const result = source.pipe(takeUntil(timer(startOfNextMinute)));
    setStart(() => result.subscribe());
  };
  // This could be any observable stream

  return (
    <>
      <ul className={s.timer}>
        <li className={s.timer__item}>HH:{}</li>
        <li className={s.timer__item}>MM:</li>
        <li className={s.timer__item}>SS:</li>
      </ul>
      <ul className={s.button}>
        <li className={s.button__item}>
          <button onClick={hendelStartStop}>«Start / Stop»</button>
        </li>
        {/* <li className={s.button__item}>
          <button onClick={hendelWait}>«Wait»</button>
        </li>
        <li className={s.button__item}>
          <button onClick={hendeReset}>«Reset»</button>
        </li> */}
      </ul>
    </>
  );
}
export default Timer;
