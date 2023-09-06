import { useState, useRef, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import AuthContext from '../../authCtx/auth-context';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUCboRWtRYqoJfilnJXv_ws_eNYSV3-wI';

        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUCboRWtRYqoJfilnJXv_ws_eNYSV3-wI';
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json(); // Parse the response JSON when it's successful
                } else {
                    // const data = await res.json();
                    // console.log(data);

                    let errorMessage = 'Authentication Failed';
                    throw new Error(errorMessage);
                }
            })
            .then((data) => {
                authCtx.login(data.idToken, data.email) // Log data in both cases
                console.log(data.email);
                history.replace('/products')

            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <Container
            className='mt-5 p-4'
            style={{
                backgroundColor: '#87CEEB',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
            }} // Set your desired background color
        >
            <h1 className='text-center'>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <Form onSubmit={submitHandler} className='mt-4'>
                <Form.Group controlId='email'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        required
                        ref={emailRef}
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter your password'
                        required
                        ref={passwordRef}
                    />
                </Form.Group>
                <div className='text-center'>
                    {!isLoading && (
                        <Button
                            type='submit'
                            variant='primary'
                            className='my-3'
                        >
                            {isLogin ? 'Login' : 'Create Account'}
                        </Button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                </div>
                <div className='text-center'>
                    <Button
                        variant='secondary'
                        onClick={switchAuthModeHandler}
                        className='my-3'
                    >
                        {isLogin
                            ? "Don't have an account? Create a new account"
                            : 'Already have an account? Log in'}
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Login;

//firebase apis
//1.for eamil password signin :
//url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUCboRWtRYqoJfilnJXv_ws_eNYSV3-wI'

//2.already logged in
// url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUCboRWtRYqoJfilnJXv_ws_eNYSV3-wI'
