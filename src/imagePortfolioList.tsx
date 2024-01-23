import * as React from 'react';
import HorizontalImageScroll from './horizontalImageScroll';
import DetailPortfolio from './detailPortfolio';

export const ImagePortfolioList: React.FC = () => {
    const [isOpen, setOpen] = React.useState(false);
    const openImage = React.useRef('');

    const images = [
        {imageUrl: './src/assets/images/thumbnail/hatsuuri_sale_square.png', title: '新春'},
        {imageUrl: './src/assets/images/thumbnail/mokumoku_square.png', title: '日比谷'},
        {imageUrl: './src/assets/images/thumbnail/circle_flower_square.png', title: '円環'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', title: 'SAMPLE'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', title: 'SAMPLE'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', title: 'SAMPLE'}
    ];
      
    return (
        <main className="main-list">
            <div style={{overflow: "auto"}}>
                <div style={{whiteSpace: "nowrap"}}>
                    <HorizontalImageScroll images={images}/>
                </div>
            </div>
            {isOpen &&
                <DetailPortfolio/>
            }
        </main>
    );
}