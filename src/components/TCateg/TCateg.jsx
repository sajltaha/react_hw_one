import ForProduct from '../ForProduct/ForProduct';
import ForProductThree from '../ForProductThree/ForProductThree';
import './TCateg.css'

const pathArr = [
    './img/Component4.svg',
    './img/Component5.svg',
    './img/Component6.svg',
    './img/Component7.svg',
    './img/Component8.svg',
    './img/Component9.svg',
    './img/new1.svg',
    './img/new2.svg',
    './img/new3.svg',
    './img/new4.svg',
]

const ttlArr = [
    'Vasagle Vanity Table',
    'Adkins Dressing Table',
    'Hironpal Dressing Table',
    'Deco Dressing Table'
]

const priceArr = [
    ' $1,200.00',
    '$899.00',
    '$350.00',
    '$800.00'
]

const marginImgArr = [
    '57px 0 0 0',
    '70px 0 0 0',
    '71px 0 0 0',
    '70px 0 0 0'
]

const marginInfoArr = [
    '29px 0 0 0',
    '42px 0 0 0',
    '42px 0 0 0',
    '57px 0 0 0'
]

const widthArr = [
    '255px',
    '350px'
]

const marginFuncArr = [
    '-143px -223px 0 0',
    '-143px -318px 0 0'
]

function TCateg() {
    let i = -1
    let b = -1
    return (
        <section className='tcateg'>
            <div className="tcateg__ttl">
                <p>TRENDING CATEGORIES</p>
            </div>
            <div className="tcateg__productsRowOne">
                {pathArr.map(el => {
                    i++
                    if (i <= 5) {
                        return (
                            <ForProductThree
                                key={el}
                                path={pathArr[i]}
                            />
                        )
                    }
                    else {
                        i--
                        return
                    }
                })}
            </div>
            <div className="tcateg__productsRowTwo">
                {pathArr.map(el => {
                    i++
                    b++
                    if (i <= 9) {
                        return (
                            <ForProduct 
                                key={el}
                                path={pathArr[i]}
                                ttl={ttlArr[b]}
                                price={priceArr[b]}
                                width={widthArr[0]}
                                marginImg={marginImgArr[b]}
                                marginInfo={marginInfoArr[b]}
                                marginFunc={marginFuncArr[0]}
                            />
                        )
                    }
                    else {
                        return
                    }
                })}
            </div>
        </section>
    )
}

export default TCateg;