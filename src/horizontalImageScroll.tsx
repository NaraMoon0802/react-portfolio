import * as React from 'react';
import './style/horizontalImageScroll.scss';

type HorizontalImageScrollProps = {
    images: {
        imageUrl: string,
        title: string
    }[]
};

const HorizontalImageScroll: React.FC<HorizontalImageScrollProps> = (props) => {
  return (
    <div className="horizontal-scroll-container">
      {props.images.map((value: {imageUrl: string, title: string}, index: number) => (
        <div className="image-container" key={index} onClick={() => {}}>
            <div className="wooden-frame">
                <img key={index} src={value.imageUrl} alt={`Image ${index}`} className="image-item" />
            </div>
            <div className="title-plate">{value.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalImageScroll;
