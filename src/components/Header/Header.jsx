import ForMenuOne from '../ForMenuOne/ForMenuOne';
import './Header.css'

const menuSections = ['Home', 'Shop', 'Product', 'Blog', 'Page', 'Contact']
const headerNavbarMenuStyles = {
    color: '#697390',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.56px'
}

function Header() {
    return (
        <header>
            <div className="header__navbar">
                <div className="header__navbar__logo">
                    <p>Drile</p>
                </div>
                <div className="header__navbar__menu">
                    <ul>
                        {menuSections.map(section => {
                            return (
                                <ForMenuOne
                                    key={section}
                                    txt={section}
                                    color={headerNavbarMenuStyles.color}
                                    textAlign={headerNavbarMenuStyles.textAlign}
                                    fontSize={headerNavbarMenuStyles.fontSize}
                                    fontFamily={headerNavbarMenuStyles.fontFamily}
                                    fontWeight={headerNavbarMenuStyles.fontWeight}
                                    lineHeight={headerNavbarMenuStyles.lineHeight}
                                    letterSpacing={headerNavbarMenuStyles.letterSpacing}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="header__navbar__functions">
                    <img src="./img/Group1.svg" alt="#" />
                </div>
            </div>
            <div className="header__content">
                <div className="header__content__img">
                    <img src="./img/img1.svg" alt="#" />
                </div>
                <div className="header__content__shopnow">
                    <p>Get ready for Our stylist chair</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="header__bg"></div>
        </header>
    )
}

export default Header;