import React, { useState } from 'react'
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement, Button } from "@chakra-ui/react"
import { FaUser } from 'react-icons/fa'
import { GoKey } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import { login, startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa'

// Estilos
const StyledMainContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("https://i.ibb.co/D91DzpB/dolby.jpg");
    background-repeat: no-repeat;
	background-size: 100% 100%;
`

const StyledFormContainer = styled.form`
    padding: 70px 20px 20px 20px;
`

const StyledImgContainer = styled.img`
    position: absolute;
    margin-bottom: 460px;
`

const StyledSecondContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #282623;
    color: black !important;
    border-radius: 15px;
    border: none;
`

const StyledMainTitle = styled.p`
    text-align: center;
    padding: 20px 0px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`

const StyledButtonMainContainer = styled.div`
    text-align: center;
    width: 100%;
    background: #0e3fa9;
    color: white;
    margin-top: 20px;
    padding: 7px;
    border-radius: 10px;
`

const StyledButtons = styled(InputGroup)`
    width: 85% !important;
    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;
    font-weight: bold;
    font-size: 15px;
`

const StyledButtonEnvio = styled.button`
 &&hover {
    background-color: #eea10f;
 }
`

const Login = () => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = formValues;

    // Aca hay que cambiar ui por error 
    const loading = useSelector(state => state.ui)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const handleFacebook = () => {
        dispatch(startFacebookLogin())
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleShowClick = () => setShowPassword(!showPassword)

    return (
        <StyledMainContainer>
            <StyledSecondContainer>
                <StyledImgContainer src='https://i.ibb.co/2jHtsTf/logo-block-master.png' width = '200px'/>
                <StyledFormContainer onSubmit={handleSubmit}>
                    <StyledMainTitle>
                        Iniciar Sesión
                    </StyledMainTitle>
                    <Stack spacing={4}>
                        <InputGroup style = {{color: 'white'}}>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdEmail color="gray.300" />}
                            />
                            <Input type="email" placeholder="Correo Electrónico" name='email' value={email} onChange={handleInputChange} />
                        </InputGroup>

                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<GoKey color="gray.300" />}
                                style = {{color: 'white'}}
                            />
                            <Input type={showPassword ? 'text' : 'password'} name='password' value={password} placeholder="Contraseña" onChange={handleInputChange} style = {{color: 'white'}}/>
                            <InputRightElement width='5.0rem'>
                                <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                                    {showPassword ? 'Ocultar' : 'Mostrar'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                    </Stack>
                    <StyledButtonMainContainer>
                        <button>Enviar</button>
                    </StyledButtonMainContainer>
                </StyledFormContainer>
                <StyledButtons style = {{width: '80%', }}  onClick={handleGoogleLogin}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FcGoogle color="gray.300" />}
                        style = {{marginLeft: '8px'}}

                    />
                    <Input name='email' value= 'Continuar con Google' pointerEvents = 'none' style = {{textAlign: 'center', fontWeight: 'bold', color: 'white'}}/>
                </StyledButtons>
                <StyledButtons style = {{width: '80%', margin: '10px'}}  onClick={handleFacebook}>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FaFacebook color="gray.300" />}
                        style = {{marginLeft: '8px', color: 'white'}}
                    />
                    <Input name='email' value= 'Continuar con Facebook' pointerEvents = 'none' style = {{textAlign: 'center', fontWeight: 'bold', color: 'white'}}/>
                </StyledButtons>
                <Link to='/auth/registro' style = {{textDecoration: 'none', color: 'white'}}>
                    <div style = {{margin: '15px', fontWeight: 'bold'}}>No tengo una cuenta</div>
                </Link>
            </StyledSecondContainer>
        </StyledMainContainer>
    )
}

export default Login
