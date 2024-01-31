import * as React from 'react';
import DetailArea from './detailArea';
import ImagePreview from './imagePreview';

type pcDetailPortfolioProps = {
    imageNames: string[],
    isOpen: boolean,
    handleClose: () => void
}

const PcDetailPortfolio: React.FC<pcDetailPortfolioProps> = (props) => {
    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.handleClose();
    };

    const imageUrls: string[] = [];
    props.imageNames.map((name) => {
       imageUrls.push(`./src/assets/images/${name}`);
    })

    // 色をAPIで取得できるようにする
    const colors = [
        "F5F5F5",
        "F0EFDD",
        "474747",
        "7ABFC2",
        "EA4E32"
    ];

    return (
        // プレビュー外の操作を不可にするため
        <div className={`pc p-detail ${props.isOpen ? 'visible' : 'hidden'}`}>
            <div className="pc p-detail-main">
                <section className="pc p-detail-main-preview">
                    <ImagePreview imageUrls={imageUrls}/>
                    <div><div className="pc p-detail-main-preview__btn large_heading hover" onClick={handleClose}>Back</div></div>
                </section>
                <DetailArea isSp={false} colors={colors}/>
            </div>
        </div>
    );
}

export default PcDetailPortfolio;