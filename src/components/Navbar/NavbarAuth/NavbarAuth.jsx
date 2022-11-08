
import { Button } from '@mui/material';
import { Wrapper, Link } from "./NavbarAuth.styled"

const NavbarAuth = () => {
  return (
    <Wrapper>
      <Link to="/signup" >
        <Button variant="contained">SignUp</Button>
      </Link>
      |
      <Link to="/login" >
        <Button variant="contained">Login</Button>
      </Link>
    </Wrapper>
  );
};

export default NavbarAuth;
