import PropTypes from "prop-types"
export default function User({ user: { name, email } }) {
 
     return (
        <>
        <p>
            name:<span>{name}</span>
        </p>
        <p>
            email:<span>{email}</span>
        </p>
        </>
    )
}

User.propTypes = {
    user: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }
    ).isRequired 
}