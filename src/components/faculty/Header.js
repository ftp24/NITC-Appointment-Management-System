import PropTypes from 'prop-types'
//used to define the style of the header for the card
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={HeadingStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : "Appointment with Students"
}

Header.propTypes = {
    title : PropTypes.string
}

const HeadingStyle = {
    color : "black"
}

export default Header
