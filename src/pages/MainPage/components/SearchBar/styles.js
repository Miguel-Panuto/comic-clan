import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    height: 60px;
    margin-top: 28px;
    margin-left: 28px;
    margin-right: 28px;
    border: 3px solid #777777;
    border-radius: 8px;
    padding-left: 20px;

    input, ::placeholder {
        background-color: transparent;
        border: transparent;
        font-size: 20px;
        height: 20px;
        margin-right: 20px;
        width: 100%;
        color: #5A5A5A;
    }

    img {
        width: 23.7px;
        height: 23.7px;
        margin-right: 18.11px;
    }

    @media (max-width: 800px) {
        input, ::placeholder {
            font-size: 1rem;
        }
    }
`;