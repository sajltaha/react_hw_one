import './ForLinkTwo.css'

function ForLinkTwo({ txt, type, path }) {
    if (type == 'def') {
        return (
            <a href="#">{txt}</a>
        )
    }
    else {
        return (
            <div className="type__dif">
                <img src={path} alt="#" />
                <a href="#">{txt}</a>
            </div>
        )
    }
}

export default ForLinkTwo;