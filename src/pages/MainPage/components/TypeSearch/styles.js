import styled from 'styled-components';

export const Nav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 45px;
    margin-top: 35px;
    /* Mobile responsible */
    @media (max-width: 650px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }
`;

export const Li = styled.li`
    padding: 7px 17px;
    text-align: center;
    border-radius: 19px; 
    margin-right: 43px;
    /* Changes the text color according to the text color prop, if the isn't, the font will be the default */
    color: ${props => props.textColor}; 
    background-color: ${props => props.bg}; /* Background, default: nothing */
    box-shadow: ${props => props.boxShadow}; /* And box shadow , default: nothing*/
    cursor: pointer;
    transition: 0.2s;
    
    :hover {
        /* If the isn't a bg prop, or boxShadow, means that element will be hovered */
        background-color: ${props => {
        if(!props.bg) 
            return '#F1545455'
        return props.bg;
        }};
        box-shadow: ${props => {
        if(!props.boxShadow) 
            return '0px 2px 3px rgba(34, 34, 34, 0.2)'
        return props.boxShadow;
        }};;
    }
    /* Mobile responsible */
    @media (max-width: 650px) {
        margin-bottom: 10px;
    }
`;