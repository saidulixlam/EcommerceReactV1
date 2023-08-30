// import { Container } from "react-bootstrap";
const Header = () => {
    const headerStyle = {
        backgroundColor: '#777',
        textAlign: 'center',
        fontWeight: 'bolder',
        fontSize: '100px',
        width: '100vw',
        color: 'white',
        padding: '4rem 4rem',
        margin: '0 auto', // Add padding to adjust the header's height
        textTransform: 'uppercase',/* Convert text to uppercase */
        letterSpacing: '2px'
    };

    return (

        <h1 style={headerStyle}>The Generics</h1>

    );
};

export default Header;