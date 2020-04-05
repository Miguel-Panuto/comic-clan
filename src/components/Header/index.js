import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/Logo.svg';
import { Container } from './styles';

export default () => (
    <Container>
        <Link to="/">
            <img src={Logo} alt="ComicClan" />
        </Link>
    </Container>
);
