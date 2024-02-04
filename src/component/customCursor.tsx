import * as React from 'react';
import {css} from '@emotion/css';

type CustomCursorProps = {
    sizePx: number,
    text: string
}
const CustomCursor:React.FC<CustomCursorProps> = ({sizePx, text}) => {
    const [cursorX, setCursorX] = React.useState(0);
    const [cursorY, setCursorY] = React.useState(0);

    const isTouchDevice = () => {
        try {
          document.createEvent('TouchEvent');
          return true;
        } catch (e) {
          return false;
        }
    };

    const move = (e: TouchEvent|MouseEvent) => {
        const touchEvent = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : null;
        const x = !isTouchDevice() ? (e as MouseEvent).clientX : touchEvent?.clientX || 0;
        const y = !isTouchDevice() ? (e as MouseEvent).clientY : touchEvent?.clientY || 0;
     
        setCursorX(x);
        setCursorY(y);
    };

    React.useEffect(() => {
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
     
        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
        };
    }, []);

    const styles = {
        char: (rotateDeg: number) => css`
            position: absolute;
            left: 0;
            transform: rotate(${rotateDeg}deg);
            transform-origin: 0 ${sizePx / 2}px;        `
    }

    return (
        <div id='cursor' className='c-cursor c-circle' style={{width:`${sizePx}px`, height:`${sizePx}px`, left:`${cursorX}px`, top:`${cursorY}px`}}>
            <div className="c-circle__text u-fm u-f-474747">
                {text.split('').map((char, i) => (
                    <span key={i} className={styles.char(i * 14)}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CustomCursor;