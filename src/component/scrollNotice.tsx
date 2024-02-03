import * as React from 'react';

const ScrollNotice = () => {
    const [isShow, setIsShow] = React.useState(true);

    setTimeout(() => {
        setIsShow(false);
    }, 5000);

    return (
        <>
            {isShow && <div className="c-scrollnotice">← Scroll →</div>}
        </>
    );
}

export default ScrollNotice;