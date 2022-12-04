import PropTypes from "prop-types"
import {Paragraph, Sponge} from './User.styled.js'

export default function User({ user: { name, email, id }, deleteUser }) {
 const isBiz = email.endsWith('biz')
 console.log(isBiz)
     return (
        <>
        <Paragraph >
            name:<Sponge>{name}</Sponge>
        </Paragraph>
        <Paragraph >
            email:<Sponge isRed = {isBiz}>{email}</Sponge>
        </Paragraph>

        <button type="button" onClick={() => deleteUser
        (id)}>
          delete
        </button>
        </>
    );
}

User.propTypes = {
    user: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }
    ).isRequired 
}

