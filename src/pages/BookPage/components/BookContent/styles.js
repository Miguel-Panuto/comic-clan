import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    margin-top: 36px;
    justify-content: space-around;
    align-items: stretch;
    @media (max-width: 800px) {
        flex-direction: column;
        flex: 1 0 auto !important;
        align-items: center;
    }
`;

export const Img = styled.div`
    flex: 1;
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 800px) {
        width: 80%;
        margin-bottom: 20px;
    }
`;

export const BookDetails = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 30vh;

    span {
        color: #999;
        font-size: 16px;
    }

    strong, p {
        font-weight: bold;
        color: #CCC;
    }

    .display-name-rating {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .display-name-rating .rating {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .display-name-rating .rating img {
        margin-right: 10px;
    }

    h2 {
        font-size: 2rem;
        color: #AAA;
        font-weight: 500;
    }

    p {
        font-size: 1rem;
    }
    @media (min-width: 1500px) {
        flex: 6;
    }
    @media (max-width: 1100px) {
        flex: 3;
    }
    @media (max-width: 900px) {
        flex: 2;
        p {
            font-size: 0.9rem;
        }
    }
    @media (max-width: 800px) {
        margin-left: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, 1fr);
        min-height: 120vh;
        
        h2 {
            margin-top: 0;
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
            margin-bottom: 10px
        }
        span {
            margin-bottom: 10px;
        }
        .display-name-rating {
            flex-direction: column;
            justify-items: center;
            margin-bottom: 20px;
        }
        .display-name-rating h2 {
            margin-bottom: 10px;
        }
    }
`;