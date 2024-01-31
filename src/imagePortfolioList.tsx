import * as React from 'react';
import HorizontalImageScroll from './horizontalImageScroll';

export const ImagePortfolioList: React.FC = () => {
    // 最初のレンダリング時にDBからデータを取得することを想定
    // TO DO
    // 画像ファイルパスの共通部分を変数にする
    // プレビュー用画像は複数あることを想定
    const images = [
        {imageUrl: './src/assets/images/thumbnail/hatsuuri_sale_square.png', imageNames: ['hatsuuri_sale.png'], title: '新春'},
        {imageUrl: './src/assets/images/thumbnail/mokumoku_square.png', imageNames: ['mokumoku.jpg'], title: '日比谷'},
        {imageUrl: './src/assets/images/thumbnail/circle_flower_square.png', imageNames: ['circle_flower.png'], title: '円環'},
        {imageUrl: './src/assets/images/thumbnail/portfolio_ui_1_square.png', imageNames: ['portfolio_ui_1.png', 'portfolio_ui_2.png', 'portfolio_ui_3.png'], title: 'ポートフォリオ'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', imageNames: [], title: 'SAMPLE'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', imageNames: [], title: 'SAMPLE'},
        {imageUrl: './src/assets/images/thumbnail/comming_soon_square.png', imageNames: [], title: 'SAMPLE'}
    ];
      
    return (
        <main className="l-main -list">
            <div style={{overflow: "auto"}}>
                <div style={{whiteSpace: "nowrap"}}>
                    <HorizontalImageScroll images={images}/>
                </div>
            </div>
        </main>
    );
}