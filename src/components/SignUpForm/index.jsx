import React, { useState, useEffect, useCallback } from 'react';
import { Container, Form } from './styles';

export default function SignUpForm() {
  const [disabled, setDisabled] = useState(true);
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    password2: ''
  });


  const verifyRegisterInfo = useCallback(() => {
    const {email, password, password2, firstName, lastName} = registerData
    const emailRegex = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const five = 5
    const three = 3

    if(
      emailRegex.test(email) &&
      password.length >= five &&
      password === password2 &&
      firstName.length >=three &&
      lastName.length >= three
    ) { setDisabled(false); }
    else setDisabled(true);
  }, [registerData]);

  useEffect(() => verifyRegisterInfo(), [registerData, verifyRegisterInfo]);

  const handleChange = ({ target: {id, value }}) => {setRegisterData({...registerData, [id]: value})};

  return (
    <Container>
      <Form>
        <form>
          <div className='form-row'>
            <h3>Criar uma conta:</h3>
            <hr />
            <div className='col'>
              <label htmlFor='firstName'>Nome</label>
              <input className='form-control' type='text' placeholder='Nome' id='firstName' onChange={handleChange}/>
            </div>

            <div className='col'>
              <label htmlFor='lastName'>Sobrenome</label>
              <input className='form-control' type='text' placeholder='Sobrenome' id='lastName'onChange={handleChange}/>
            </div>
          </div>

          <div className='form-row'>
            <div className='col'>
              <label htmlFor='email'>Email</label>
              <input className='form-control' type='email' id='email' placeholder='email@dominio.com' onChange={handleChange}/>
            </div>

          </div>
          <div className='form-row'>
            <div className='col'>
              <label htmlFor='password'>Senha</label>
              <input className='form-control' type='password' id='password' placeholder='******' onChange={handleChange}/>
            </div>
            <div className='col'>
              <label htmlFor='password2'>Repita a senha</label>
              <input className='form-control' type='password' id='password2' placeholder='******' onChange={handleChange}/>
            </div>
          </div>
          <hr/>
          <div className='form-row'>
            <button className='btn btn-primary btn-lg' disabled={disabled}>Registrar</button>
          </div>
        </form>
      </Form>
    </Container>
  )
}