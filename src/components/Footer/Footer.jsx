import ForLink from '../ForLink/ForLink';
import './Footer.css'

const ttlArr = [
    'ABOUT US',
    'COMPANY',
    'USEFUL LINKS',
    'FOLLOW US'
]

function Footer() {
    return (
        <>
            <footer>
                <div className="footer__blur">
                    <div className="footer__ttl">
                        <p>Drile</p>
                    </div>
                    <div className="footer__content">
                        {ttlArr.map(el => {
                            return(
                                <ForLink 
                                    key={el}
                                    ttl={el}
                                />
                            )
                        })}
                    </div>
                </div>
                
            </footer>
        </>
    )
}

export default Footer;