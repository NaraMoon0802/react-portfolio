import * as React from 'react';
import TemporalyDrawer from './temporalyDrawer';
import ImagePreview from './imagePreview';

type spDetailPortfolioProps = {
    imageNames: string[],
    isOpen: boolean,
    handleClose: () => void
}

const spDetailPortfolio: React.FC<spDetailPortfolioProps> = (props) => {
    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.handleClose();
    };

    const [isVisible, setIsVisible] = React.useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // 初期レンダリングのみ詳細コンポーネントのスライドアウトを制御
    React.useEffect(() => {
        return () => {
            document.body.classList.remove("slideout");
        }
    }, [isVisible]);

    const imageUrls: string[] = [];
    props.imageNames.map((name) => {
       imageUrls.push(`./images/${name}`);
    })

    return (
        // プレビュー外の操作を不可にするため
        <div className={`sp p-detail ${props.isOpen ? 'visible' : 'hidden'}`}>
            <div className="sp p-detail-main">
                <section className="sp p-detail-main-preview">
                    <ImagePreview imageUrls={imageUrls}/>
                    <div>
                        <div className="sp p-detail-main-preview__btn heading hover" onClick={handleClose}>Back</div>
                    </div>
                </section>
                <TemporalyDrawer isVisible={isVisible} handle={setIsVisible}/>
                <div className="sp p-detail-main__marker c-marker" onClick={handleVisibility}>DETAIL</div>
            </div>
        </div>
    );
}

export default spDetailPortfolio;