import styled from 'styled-components';

export const Button = styled.button`
    width: 150px;
    height: 30px;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

    background: #cc0000;
    color: #fff;

    &:hover {
        background: #fff;
        border: 2px solid #cc0000;

        color: #cc0000;

        transition: all .2s
    }
`;
