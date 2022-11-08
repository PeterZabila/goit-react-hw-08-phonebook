import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 500px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 0.125rem solid #50decd;
    width: 250px;
    height: 2rem;
    font-size: 1.0625rem;
    padding-left: 0.875rem;
    border-radius: 5px;
    line-height: 147.6%;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;
        &:focus {
            outline: none;
            border-bottom: 0.125rem solid #decb50;
        }
`;

export const Label = styled.label`
    line-height: 147.6%;
    color: grey;
    transition: top .2s;
`;
