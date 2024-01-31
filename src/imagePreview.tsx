import * as React from 'react';

type ImagePreviewProps = {
    imageUrls: string[]
};

const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
    return (
        <div className="c-imageframe">
            <div className="c-imageframe__preview">
            {props.imageUrls.map((url, index) => {
                return (<img key={index} src={url}/>);
            })}
            </div>
        </div>
    );
}

export default ImagePreview;