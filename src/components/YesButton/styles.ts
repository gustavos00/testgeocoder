import styled from 'styled-components';

export const Button = styled.button`
    width: 150px;
    height: 30px;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

    background: #49aa26;
    color: #fff;

    &:hover {
        background: #fff;
        border: 2px solid #49aa26;

        color: #49aa26;

        transition: all .2s
    }
`;
