import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import Context from '../../context/Context';
import userService from '../../service/userService';

const LoginForm = () => {
  const [ userData, setUserData ] = useState({ email: '', password: ''});
  const [disabled, setDisabled] = useState(true);
  const { setUser, user } = useContext(Context);

  const navigate = useNavigate();


  const verifyLogin = useCallback(() => {
    const { email, password } = userData;
    const emailRegex = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const five = 5

    if(emailRegex.test(email) && password.length >= five) setDisabled(false);
    else setDisabled(true);
  }, [userData]);

  useEffect(() => { verifyLogin() }, [userData, verifyLogin]);

  const handleInputChange = ({ target: { id, value } }) => setUserData({ ...userData, [id]: value });

  const handleLoginClick = async () => {
    const response = await userService.login(userData.email, userData.password);
    if(response.status === 200) {
      const redirectLink = '/os';
      setUser({...user, loggedIn: true, token: response.data});
      localStorage.setItem('token', JSON.stringify(response.data));
      navigate(redirectLink);
    }
    else console.log(response);
  };

  return (
    <Container>
      <section className='vh-100' style={{ "backgroundColor": "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
              <div className='card shadow-2-strong' style={{ "borderRadius": "1rem"}}>
                <div className='card-body p-5 text-center'>

                  <h3 className='mb-5'>Login</h3>

                  <div className='form-outline mb-4'>
                    <input id="email" type="email" placeholder='Email' className='form-control form-control-lg 'onChange={handleInputChange}/>
                  </div>

                  <div className='form-outline mb-4'>
                    <input id="password" type="password" placeholder='Senha' className='form-control form-control-lg' onChange={handleInputChange}/>
                  </div>

                  <hr className='my-4'/>

                  <button type='submit' className="btn btn-primary btn-lg btn-block" disabled={disabled} onClick={handleLoginClick}>Entrar</button>

                  <div className='col'>
                    <a href='/sign-up' className="small mb-5 pb-lg-2">Criar conta</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
};

export default LoginForm;
