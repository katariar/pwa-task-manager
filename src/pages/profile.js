import React from 'react';
import styled from 'styled-components';
import Unfinished from '../components/Challenges/ChallengesUnfinished';
import Done from '../components/Challenges/ChallegesDone';
import Icon from '../images/drunken-icon.svg';
import {motion} from 'framer-motion';
import MasterPiece from '../components/Masterpieces/MasterPieces';

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
align-items: center;
text-align: center;
margin-top: 0;
color: #212B4D;
font-size: 14px;
`
const Header = styled.div `
display: flex;
background-color: #F5B6AB; 
border-radius: 30px;
min-width: 250px;
color: #212B4D;
margin: 20px;
box-shadow: 5px 5px 5px lightgrey;
`
const Wrapper = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background-color: #EFEFEF;
border-radius: 30px;
margin: -10px 20px 20px 20px;
padding: 20px;
max-width: 250px;
`

const Settings = styled.div `
background: #212B4D;
margin-top: 30px;
border-Radius: 20px;
font-size: 12px;
margin-left: 40px;
margin-right: 40px;
margin-bottom: 20px;
min-width: 100px;
padding: 10px;
color: #F5B6AB;
`
const ProfileIcon = styled.img `
width: 60px; 
`
const ProfileBig = styled.img `
width: 90px; 
`
const pageVariants = {
    in: {
        opacity: 1,
        y: 0

    },
    out: {
        opacity: 0,
        y: "-20vw"

    }
};

const pageTransitions = {
    type: "tween",
    duration: 1
}

const Profile = () => {
    return (
        <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}>
        <Container>
           <Header><ProfileIcon src={Icon} /><h3 style={{
                paddingLeft:'20px',
                fontSize: '14px',
                marginTop: '20px'}}>RATAKAAKA</h3></Header>
                <Wrapper>
            <ProfileBig src={Icon} />
            <p>Lu rusciu te lu mare è troppu forte &#x1F30A;</p>
            <Settings>SETTINGS</Settings>
    
           <Unfinished unfinished="OPEN PROJECTS" />
            <Done done="DONE PROJECTS" />
            <MasterPiece master="MASTERPIECES" /> 
           
            </Wrapper>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
            </Container>
            </motion.div>
            
    )
}

export default Profile
