import React from 'react';
import styled from 'styled-components';
import Crea from '../../images/crealogo.svg';

const Logo = styled.div `
top: 0;
left: 0;
width: 100%;
min-width: 250px;
background-color: #F5B6AB;
padding: 30px 20px 20px 30px;
`
const CreaIcon = styled.img`
width: 85px;

`

const Header = () => {
    return (
        <div>
            <Logo><CreaIcon src={Crea} /> </Logo>
            
        </div>
    )
}

export default Header
