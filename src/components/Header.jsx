import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { starLogout } from '../actions/auth'
import { Link } from 'react-router-dom'
import Perfil from '../containers/Perfil.jsx'
import { Row, Col, Container } from 'react-bootstrap'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

// Estilos 

const StyledNavbarContainer = styled(Row)`
    /* margin: 24px 83px; */
    padding: 24px 83px;
    background-color: #0F0E17;
    color: #ffffff;
`

const StyledColContainer = styled(Col)`
    display: flex;
    align-items: center;

`

const StyledInputSearch = styled.input`
    width: 100%; 
    padding: 10px; 
    border-radius: 8px;
`
const Header = () => {


    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    // console.log(auth.email);

    const handleLogout = () => {
        dispatch(starLogout())
    }


    const [isLoogedIn, setsIsLoogedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                // dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            } else {
                setsIsLoogedIn(false)
            }
        })

    }, [dispatch])
    return (
        <div>
            <Container fluid>
                <StyledNavbarContainer>
                    <Col xs={2}>
                        <img src='https://i.ibb.co/2jHtsTf/logo-block-master.png' width='106px' height='64px' />
                    </Col>
                    <StyledColContainer xs={2} style={{ color: '#FED941' }}>
                        <a style={{ textDecoration: 'underline' }}>Todas</a>
                    </StyledColContainer>
                    <StyledColContainer xs={2}>
                        <p>Más valoradas</p>
                    </StyledColContainer>
                    <StyledColContainer xs={2}>
                        <p>Menos Valoradas</p>
                    </StyledColContainer>
                    <StyledColContainer xs={3}>
                        <StyledInputSearch type='search' placeholder='buscar ' />
                    </StyledColContainer>
                    <Col xs={1}>
                        <Avatar size="2xs" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" style = {{width: '50px', height: '50px'}}/>
                    </Col>
                </StyledNavbarContainer>
            </Container>
            <h1>Finalizar Sesion</h1>
            {
                isLoogedIn && <Perfil />
            }

            {
                !isLoogedIn ? <Link to='/auth/login'>
                    <div>
                        Entrar
                    </div>
                </Link> :
                    <div onClick={handleLogout}>Salir</div>
            }
        </div>
    )
}

export default Header
