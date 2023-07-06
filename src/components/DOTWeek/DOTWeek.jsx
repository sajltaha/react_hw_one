import ForProductTwo from '../ForProductTwo/ForProductTwo';
import './DOTWeek.css'

const pathArr = [
    './img/chasy3mini.svg',
    './img/stool4mini.svg',
    './img/stool5mini.svg',
    './img/lampochka2mini.svg'
]

function DOTWeek() {
    let i = -1
    return (
        <section className='dotweek'>
            <div className="dotweek__bg">
                <div className="dotweek__bgTwo">
                    <img src="./img/divan.svg" alt="#" />
                </div>
                <div className="dotweek__bg__info">
                    <div className="dotweek__bg__info__ttl">
                        <p>DEAL OF THE WEEK</p>
                    </div>
                    <div className="dotweek__bg__info__price">
                        <p>from <span>$99.99</span></p>
                    </div>
                    <div className="dotweek__bg__info__txt">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.
                        </p>
                    </div>
                    <button className="dotweek__bg__info__btn">
                        SHOP NOW
                    </button>
                    <div className="dotweek__bg__info__productsRow">
                        {pathArr.map(el => {
                            i++
                            return(
                                <ForProductTwo 
                                    key={el}
                                    path={pathArr[i]}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DOTWeek;