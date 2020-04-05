import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Component
import { Nav, Li } from './styles';

// Redux action
import { changeSearch } from '../../../../store/actions/search'

export default function TypeSearch() {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.search.type);

    // Sub-component for the list items, that identifies if is the selected component
    const ListItem = ({ children }) => {
        // if is, the background, text color and box shadow chages
        if (selected.toLowerCase() === children.toLowerCase()) {
            return (
                <Li
                    bg="#F15454"
                    textColor="#FFF"
                    boxShadow="rgba(34, 34, 34, 0.6)"
                >
                    {children}
                </Li>
            )
        }
        // if is not, that will have only a little shadow in hover, on click to dispatch, indicating that user clicked
        return <Li boxShadow="rgba(34, 34, 34, 0.2)" onClick={
            () => dispatch(changeSearch(children.toLowerCase()))}
        >{children}</Li>

    }
    return (
        <Nav>
            <ListItem>
                Year
            </ListItem>

            <ListItem >
                Writer
            </ListItem>

            <ListItem >
                Artist
            </ListItem>

            <ListItem >
                Owner
            </ListItem>

            <ListItem >
                Random
            </ListItem>
        </Nav>
    );
}