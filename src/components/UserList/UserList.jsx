import PropTypes from "prop-types"
import User from "components/User/User"
export default function UserList({ users, deleteUser }) {
    return (
        <ul>
            {users.map((user)=>
            (<li key = {user.id}>
                <User deleteUser={deleteUser} user ={user}/>
                </li>
                ))}
        </ul>
    )
} 

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired

    }).isRequired
    
    ).isRequired,
}


