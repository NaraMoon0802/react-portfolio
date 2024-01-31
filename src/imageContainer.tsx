import * as React from 'react';
import PcDetailPortfolio from './pcDetailPortfolio';
import SpDetailPortfolio from './spDetailPortfolio';
import { mediaQuery, useMediaQuery } from './mediaQuery';

type ImageContainerProps = {
    key: number,
    imageUrl: string,
    imageNames: string[],
    title: string
};

const ImageContainer:React.FC<ImageContainerProps> = (props) => {
    const [isDetailOpen, setDetailOpen] = React.useState(false);

    const openDetail = () => {
        setDetailOpen(true);
    };

    const closeDetail = () => {
        setDetailOpen(false);
    };

    const isSp = useMediaQuery(mediaQuery.sp);

    const DetailPortfolio = isSp ? SpDetailPortfolio : PcDetailPortfolio;
    return (
        <div className="p-container" key={props.key} onClick={openDetail}>
            <div className="p-container-frame">
                <img key={props.key} src={props.imageUrl} alt={`Image ${props.key}`} className="p-container-frame__image" />
            </div>
            <div className="p-container-title u-jan">{props.title}</div>
            <DetailPortfolio imageNames={props.imageNames} isOpen={isDetailOpen} handleClose={closeDetail}/>
        </div>
    );
}

export default ImageContainer;