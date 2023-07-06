function ForProduct({ path, ttl, price, width, marginImg, marginInfo, marginFunc }) {
    return (
        <div className="product"
            style={{
                width: `${width}`,
                height: '342px',
                background: 'white',
                boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.10)',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center'
            }}
        >
            <img className='product__img' src={path} alt="#" style={{
                margin: `${marginImg}`
            }} />
            <div className="product__info" style={{
                margin: `${marginInfo}`,
                width: '186px',
                height: '52px',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div className="product__info__ttl">
                    <p style={{
                        color: '#2A2A2B',
                        fontSize: '16px',
                        fontFamily: 'Open Sans',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        letterSpacing: '-0.56px'
                    }}>{ttl}</p>
                </div>
                <div className="product__info__price">
                    <p style={{
                        color: '#8C8C8C',
                        fontSize: '14px',
                        fontFamily: 'Federo',
                        fontWeight: '400',
                        lineHeight: '50px',
                        letterSpacing: '0.28px'
                    }}>{price}</p>
                </div>
            </div>
            <div className="product__functions" style={{
                position: 'relative',
                margin: `${marginFunc}`,
                height: '91px',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
            }}>
                <div><img src="./img/Component1.svg" alt="#" /></div>
                <div><img src="./img/Component2.svg" alt="#" /></div>
                <div><img src="./img/Component3.svg" alt="#" /></div>
            </div>
        </div>
    )
}

export default ForProduct