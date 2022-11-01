import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/actions/loginActions'

export const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login", { replace: true })
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}