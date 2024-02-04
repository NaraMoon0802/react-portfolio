import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RollText} from './component/rollText';
import {ImagePortfolioList} from './imagePortfolioList';
import ScrollNotice from './component/scrollNotice';
import './scss/index.scss';

const App = () => {
    const [isHome, setIsHome] = React.useState(true);

    return (
        <>
            <nav className="l-nav">
                <li className="heading hover" onClick={() => {setIsHome(true)}}>Home</li>
                <li className="heading hover is_active" onClick={() => {setIsHome(false)}}>Gallery</li>
                <li className="heading hover" onClick={() => {setIsHome(true)}}>Login</li>
            </nav>
            <ImagePortfolioList/>
            {!isHome && <ScrollNotice/>}
            <main className={`l-main -home ${isHome ? 'fadein' : 'fadeout'}`}>
                <div className="c-logo">
                    <div className="__title large_heading">
                        Welcome to Portfolio Gallery
                    </div>
                    <RollText sizePx={200} text={'OPEN OPEN OPEN OPEN OPEN'} setView={() => {setIsHome(false)}}/>
                </div>
            </main>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector('#main'));