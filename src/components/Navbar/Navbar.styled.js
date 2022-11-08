import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(227,217,94);
  background: linear-gradient(90deg, rgba(227,217,94,1) 0%, rgba(190,230,241,1) 57%, rgba(0,212,255,1) 100%);
  margin-bottom: 10px;
`

export const Icon = styled.img`
  background: transparent;
`;

export const Title = styled.h2`
  margin-left: 30px;
  font-family: 'Roboto', cursive;
  font-weight: 300;
  font-size: 30px;
  color: #122c74;
`
export const Link = styled(NavLink)`
  text-decoration: none;
    &.active {
      font-weight: bold;
  `