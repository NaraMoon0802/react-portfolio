import * as React from 'react';
import {css} from '@emotion/css';
import CustomCursor from './customCursor';

type RollTextProps = {
    sizePx: number,
    text: string,
    setView: React.Dispatch<React.SetStateAction<boolean>>
};

export const RollText: React.FC<RollTextProps> = ({sizePx, text, setView}) => {
    const styles = {
        char: (rotateDeg: number) => css`
            position: absolute;
            left: 50%;
            transform: rotate(${rotateDeg}deg);
            transform-origin: 0 ${sizePx / 2}px;        `
    }
    
    return (
        <>
        <div className="c-circle" style={{width:`${sizePx}px`, height:`${sizePx}px`}} 
        onClick={() => {setView(false)}}>
            <div className="c-circle__text u-ft u-f-838383">
                {text.split('').map((char, i) => (
                    <span key={i} className={styles.char(i * 9)}>
                        {char}
                    </span>
                ))}
            </div>
            <div className="c-circle__notice">Click!</div>
        </div>
        <CustomCursor sizePx={100} text={"OPEN OPEN OPEN OPEN OPEN"}/>
        </>
    )
}
