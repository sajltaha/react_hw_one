import ForProduct from '../ForProduct/ForProduct';
import './BSItems.css'

const pathArr = [
    './img/lampochka1.svg',
    './img/clock.svg',
    './img/stool.svg',
    './img/chsy2.svg',
    './img/stool2.svg',
    './img/podushka.svg',
    './img/stool3.svg',
]
const ttlArr = [
    'Metal Vintage Pendant',
    'Klosh Table Clock',
    'Arne Dining Chair',
    'Klosh Wall Clock',
    'Modern Outdoor Chair',
    'Vipp Wool Pillow',
    'Modern Bedroom Storage'
]
const priceArr = [
    '$79.00',
    '$99.00',
    '$350.00',
    '$80.00 – $129.00',
    '$79.00',
    '$99.00',
    '$499.00'
]
const widthArr = [
    '255px',
    '350px'
]
const marginImgArr = [
    '58px 0 0 0',
    '48px 0 0 0',
    '47px 0 0 0',
    '58px 0 0 0',
    '60px 0 0 0',
    '76px 0 0 0',
    '76px 0 0 0'
]
const marginInfoArr = [
    '34px 0 0 0',
    '37px 0 0 0',
    '34px 0 0 0',
    '53px 0 0 0',
    '38px 0 0 0',
    '55px 0 0 0',
    '55px 0 0 0'
]
const marginFuncArr = [
    '-143px -223px 0 0',
    '-143px -318px 0 0'
]

function BSItems() {
    let i = -1
    return (
        <section className='bsi'>
            <div className="bsi__bg"></div>
            <div className="bsi__title">
                <p>Best Seller Items</p>
            </div>
            <div className="bsi__productsrow">
                {pathArr.map(el => {
                    i++
                    if (i <= 3) {
                        return (
                            <ForProduct
                                key={el}
                                path={pathArr[i]}
                                ttl={ttlArr[i]}
                                price={priceArr[i]}
                                width={widthArr[0]}
                                marginImg={marginImgArr[i]}
                                marginInfo={marginInfoArr[i]}
                                marginFunc={marginFuncArr[0]}
                            />
                        )
                    }
                    else {
                        i--
                        return
                    }

                })}
            </div>
            <div className="bsi__productsRowTwo">
                {pathArr.map(el => {
                    i++
                    if (i <= 6) {
                        return (
                            <ForProduct
                                key={el}
                                path={pathArr[i]}
                                ttl={ttlArr[i]}
                                price={priceArr[i]}
                                width={widthArr[1]}
                                marginImg={marginImgArr[i]}
                                marginInfo={marginInfoArr[i]}
                                marginFunc={marginFuncArr[1]}
                            />
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default BSItems;