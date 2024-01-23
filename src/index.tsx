import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/common.scss';
import {RollText} from './rollText';
import {ImagePortfolioList} from './imagePortfolioList';

const App = () => {
    const [view, setView] = React.useState('Home');
    return (
        <>
        {view === 'Home' &&
            <main className="main-home component-fadeout">
                <div className="center-logo">
                    <div className="title">
                        Welcome to Portfolio Gallery
                    </div>
                    <RollText setView={setView}/>
                </div>
            </main>
        }
        {view === 'List' &&
        <>
            <nav>
                <li onClick={() => {setView('Home')}}>Home</li>
                <li onClick={() => {setView('List')}} className="is_active">Gallery</li>
                <li onClick={() => {setView('Home')}}>Profile</li>
                <li onClick={() => {setView('Home')}}>Contact</li>
            </nav>
            <ImagePortfolioList/>
        </>
        }
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector('#main'));