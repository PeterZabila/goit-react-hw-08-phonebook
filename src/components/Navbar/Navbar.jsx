import { Link, Wrapper, Title, Icon } from './Navbar.styled';
import useAuth from 'service/hooks/useAuth';
import icon from '../../Icons/logo.png';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <Wrapper>
      <Link to="/">
        <Icon
          src={icon}
          width="50"
          height="40"
          alt="logo"
        />
      </Link>
      <Title>Your phonebook</Title>
      {isLogin ? <UserMenu /> : <NavbarAuth />}
    </Wrapper>
  );
};

export default Navbar;
