import React, { useState } from 'react'
import { startRegisterWithEmailPasswordName } from '../actions/auth'
import validator from 'validator'
import { setError, removeError } from '../actions/uiError'
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Stack, InputGroup, InputLeftElement, Alert, AlertIcon, InputRightElement, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { GoKey } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

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
    color: white;
    border-radius: 15px;
    border: none;
`

const StyledMainTitle = styled.p`
    text-align: center;
    padding: 20px 0px;
    font-size: 20px;
    font-weight: bold;
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


const Registro = () => {

    const dispatch = useDispatch();
    const { msjError } = useSelector(state => state.error);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }


    const formValid = () => {

        if (name.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Rellena todos los campos',
            // })
            dispatch(setError(''))
            return false
        } else if (!validator.isEmail(email)) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Se requiere un email',
            // })
            dispatch(setError(''))
            return false
        } else if (password.trim().length === 0) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Error',
            //     text: 'Ingresa una contraseña',
            // })
            dispatch(setError(''))
            return false
        }

        dispatch(removeError())
        return true
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleShowClick = () => setShowPassword(!showPassword)

    return (
        <StyledMainContainer>
            <StyledSecondContainer>
                <StyledImgContainer src='https://i.ibb.co/2jHtsTf/logo-block-master.png' width='200px' />
                <StyledFormContainer onSubmit={handleSubmit}>
                    {
                        msjError &&
                        (
                            <Alert status='error' mt={5}>
                                <AlertIcon />
                                {msjError}
                            </Alert>
                        )
                    }
                    <StyledMainTitle>
                        Registrarme
                    </StyledMainTitle>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaUserCircle color="gray.300" />}
                            />
                            <Input type="text" placeholder="Nombre de Usuario" name='name' value={name} onChange={handleInputChange} />
                        </InputGroup>
                        <InputGroup>
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
                            />
                            <Input type={showPassword ? 'text' : 'password'} name='password' value={password} placeholder="Contraseña" onChange={handleInputChange} />
                            <div style={{ color: '#000000 !important' }}>
                                <InputRightElement width='5.0rem' >
                                    <Button h='1.75rem' size='sm' onClick={handleShowClick} >
                                        {showPassword ? 'Ocultar' : 'Mostrar'}
                                    </Button>
                                </InputRightElement>
                            </div>
                        </InputGroup>

                    </Stack>
                    <StyledButtonMainContainer>
                        <button type='submit'>Enviar</button>
                    </StyledButtonMainContainer>
                </StyledFormContainer>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <div style={{ margin: '15px', fontWeight: 'bold' }}>
                        Ya tengo una cuenta
                    </div>
                </Link>
            </StyledSecondContainer>
        </StyledMainContainer>
    )
}

export default Registro
