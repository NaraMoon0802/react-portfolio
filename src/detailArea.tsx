import * as React from 'react';

type DetailAreaProps = {
    isSp: boolean,
    colors: string[]
}


const DetailArea: React.FC<DetailAreaProps> = (props) => {
    return (
        <section className={`c-detailArea ${props.isSp ? "sp" : "pc"}`}>
            <div style={{overflow: "auto"}}>
                <div className="c-detailArea-box" style={{whiteSpace: "nowrap"}}>
                    <div className="c-detailArea-box__elements">
                    <div className={`${props.isSp ? "sp" : "pc"} c-colorPalette`}>
                        {props.colors.map((color, key) => {
                            return <div key={key} className={`${props.isSp ? "sp" : "pc"} c-colorPalette__palette u-${color}`}></div>
                        })}
                    </div>
                    <div className="c-fonts">
                        <div className="c-fonts__style u-jan">Kaisei Decol</div>
                        <div className="c-fonts__style u-eng">AMASTIC SC</div>
                        <div className="c-fonts__style"></div>
                    </div>
                </div>
                <div className="c-detailArea-box__document">
                    <div>
                        <div className="heading">Target</div>
                        <div className={`c-detailArea-box__document__content ${props.isSp ? "u-fs" : "u-fm"}`}>
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                        </div>
                    </div>
                    <div>
                        <div className="heading">Detail</div>
                        <div className={`c-detailArea-box__document__content ${props.isSp ? "u-fs" : "u-fm"}`}>
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailArea;