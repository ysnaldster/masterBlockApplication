import React from 'react'
import { Input, Stack, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {FaUser} from 'react-icons/fa'

const Login = () => {
    return (
        <div>
            <h1>Aca el login</h1>
            <Stack spacing={4}>
                <InputGroup>    
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FaUser color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Phone number" />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        // color="gray.300"
                        // fontSize="1.2em"
                        // children="$"
                    />
                    <Input placeholder="Enter amount" />
                </InputGroup>
            </Stack>
        </div>
    )
}

export default Login
