import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css, keyframes } from '@emotion/css';

type RollTextProps = {
    setView: React.Dispatch<React.SetStateAction<boolean>>
};

export const RollText: React.FC<RollTextProps> = ({setView}) => {
    const text = 'OPEN OPEN OPEN OPEN OPEN';

    const animations = {
        rotateText: keyframes`
        0% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(0deg);
        }
      `
    }

    const sizePx = 200

    const styles = {
        circle: css`
            position: relative;
            width: ${sizePx}px;
            height: ${sizePx}px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        text: css`
            font-family: Consolas;
            font-size: 1.3rem;
            color: #838383;
            position: absolute;
            width: 100%;
            height: 100%;
            animation: ${animations.rotateText} 50s linear infinite;
        `,
        char: (rotateDeg: number) => css`
            position: absolute;
            left: 50%;
            transform: rotate(${rotateDeg}deg);
            transform-origin: 0 ${sizePx / 2}px;        `
    }
    
    return (
        <div className={styles.circle} onClick={() => {setView(false)}}>
            <div className={styles.text}>
                {text.split('').map((char, i) => (
                    <span key={i} className={styles.char(i * 9)}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    )
}
