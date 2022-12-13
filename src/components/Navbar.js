import Button from 'react-bootstrap/Button';
import { logout } from "../shared/Redux/userSlice";
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { Logo } from "../assets/index"

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <>
      <div className='navi text-light'>
        {/* <img src={Logo} className="logoImg" onClick={() => navigate("/")} /> */}
        <Button variant="success" className="mt-1 mx-2" style={{ position: "absolute", right: "0" }} onClick={() => handleLogout()}>Logout</Button>
      </div>
    </>
  );
}

export default Navigation;