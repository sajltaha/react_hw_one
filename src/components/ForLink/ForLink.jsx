import ForLinkTwo from '../ForLinkTwo/ForLinkTwo'
import './ForLink.css'

const linkArr = [
    'About Us',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service',
    'Explore World',
    'Trending Video',
    'Book a Trip',
    'Visit Gallery',
    'Buy this theme',
    'Drile Landing',
    'Documentation',
    'Video tutorial'
]

const forFusArr = [
    'Facebook',
    'Twitter',
    'Instagram'
]

const pathArr = [
    './img/facebook.svg',
    './img/twitter.svg',
    './img/insta.svg'
]

let i

function ForLink({ ttl }) {
    if (ttl == 'ABOUT US') {
        i = -1
        return (
            <div className="footer__content__col aus">
                <div className="footer__content__col__ttl">
                    <p>{ttl}</p>
                </div>
                {linkArr.map(el => {
                    i++
                    if (i <= 3) {
                        return (
                            <ForLinkTwo
                                key={el}
                                txt={linkArr[i]}
                                type={'def'}
                            />
                        )
                    }
                })}
            </div>
        )
    }
    else if (ttl == 'COMPANY') {
        i = 3
        return (
            <div className="footer__content__col com">
                <div className="footer__content__col__ttl">
                    <p>{ttl}</p>
                </div>
                {linkArr.map(el => {
                    i++
                    if (i <= 7) {
                        return (
                            <ForLinkTwo
                                key={el}
                                txt={linkArr[i]}
                                type={'def'}
                            />
                        )
                    }
                })}
            </div>
        )
    }
    else if (ttl == 'USEFUL LINKS') {
        i = 7
        return (
            <div className="footer__content__col uli">
                <div className="footer__content__col__ttl">
                    <p>{ttl}</p>
                </div>
                {linkArr.map(el => {
                    i++
                    if (i <= 11) {
                        return (
                            <ForLinkTwo
                                key={el}
                                txt={linkArr[i]}
                                type={'def'}
                            />
                        )
                    }
                })}
            </div>
        )
    }
    else {
        let b = -1
        return (
            <div className="footer__content__col fus">
                <div className="footer__content__col__ttl">
                    <p>{ttl}</p>
                </div>
                {forFusArr.map(el => {
                    b++
                    return (
                        <ForLinkTwo
                            key={el}
                            txt={el}
                            type={'dif'}
                            path={pathArr[b]}
                        />
                    )
                })}
            </div>
        )
    }
}

export default ForLink;