import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
    &.active {
      font-weight: bold;
    }
`
