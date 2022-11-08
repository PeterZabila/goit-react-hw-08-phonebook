import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
    line-height: 147.6%;
    color: grey;
    transition: top .2s;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 0.125rem solid #50decd;
    width: 250px;
    height: 2rem;
    font-size: 1.0625rem;
    padding-left: 0.875rem;
    line-height: 147.6%;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;
        &:focus {
            outline: none;
            border-bottom: 0.125rem solid #decb50;
        }
`;

export const Button = styled.button`
    display: block;
    margin-top: 20px;
    width: 120px;
    font-size: 16px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    border: 1px solid rgba(75, 163, 191, 0.3);
    border-radius: 3px;
    cursor: pointer;
        &:focus {
            border: 1px solid rgba(75, 163, 191, 0.7);
        }
`;





