import * as React from 'react';
import ImageContainer from './imageContainer';

type HorizontalImageScrollProps = {
    images: {
        imageUrl: string,
        imageNames: string[],
        title: string
    }[]
};

const HorizontalImageScroll: React.FC<HorizontalImageScrollProps> = (props) => {
  return (
    <div className="p-horizontal-scroll">
      {props.images.map((value: {imageUrl: string, imageNames: string[], title: string}, imgId: number) => (
        <ImageContainer key={imgId} imageUrl={value.imageUrl} imageNames={value.imageNames} title={value.title}/>
      ))}
    </div>
  );
};

export default HorizontalImageScroll;
