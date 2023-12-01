import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Users.scss';

const Users = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            navigate("/Login/Login");
        }
    }, [])

    return (
        <div>
            Users component
        </div>
    )
}

export default Users;