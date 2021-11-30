import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={HeadingStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : "Appointments List"
}

Header.propTypes = {
    title : PropTypes.string
}

const HeadingStyle = {
    color : "black"
}

export default Header
