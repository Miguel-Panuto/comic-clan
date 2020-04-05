import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* 
     * Reset css
     */
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body, html, #root {
        width: 100%;
    }
    /*
    * Setting bg and font normal 
    */
    body {
        background: #333333;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
    }

    li, a {
        color: #777;
    }

    a {
        text-decoration: none;
    }
`;


// A simple line to separete things
export const Line = styled.div`
    margin: 60px 0px;
    height: 1px;
    border: 2px solid #535353;

`;

// Layout to a group of bookshelfs
export const Books = styled.div`
    margin: 38px 26px 0 26px;
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 32px;
        font-weight: normal;
        color: #AAA;
    }
`;

// Layout to a group of books
export const BookShelf = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-top: 32px;
    div {
        margin-bottom: 38px;
    }
`;
