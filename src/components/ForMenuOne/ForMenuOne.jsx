function ForMenuOne({ txt, color, textAlign, fontSize, fontFamily, fontWeight, lineHeight, letterSpacing }) {
    return (
        <li><a
            href="0"
            style={{
                color: `${color}`,
                textAlign: `${textAlign}`,
                fontSize: `${fontSize}`,
                fontFamily: `${fontFamily}`,
                fontWeight: `${fontWeight}`,
                lineHeight: `${lineHeight}`,
                letterSpacing: `${letterSpacing}`,
            }}> {txt}
        </a></li >
    )
}

export default ForMenuOne;