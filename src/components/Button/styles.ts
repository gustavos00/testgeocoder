import styled from 'styled-components';

export const Button = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 20px;

    border: 0;
    border-radius: 10px;

    cursor: pointer;

    background: #7159c1;
    color: #fff;

    &:hover {
        background: #fff;
        border: 2px solid #7159c1;

        color: #7159c1;

        transition: all .2s
    }
`;
