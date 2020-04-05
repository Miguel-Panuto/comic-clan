import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { Container } from './styles';

// Assets
import SearchIcon from '../../../../assets/icons/search-icon.svg';

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    // This identify if the user hit the enter key and start to search on the api
    const searchHandler = (e) => {
        if(e.key === 'Enter') {
            history.push(`/search?name=${searchValue}`);
        }
    }

    return (
        <Container>
            <img src={SearchIcon} alt="Search icon"/>
            <input
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search by book name"
                onKeyPress={searchHandler}
            />
        </Container>
    );
}
