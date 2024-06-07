import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  return (
    <div className='container'>
      <form>
        <h1>Acesse o sistema</h1>
        <div className='input-field'>
          <input type='email' placeholder='Email' />
          <FaUser className='icon' />
        </div>
        <div className='input-field'>
          <input type='password' placeholder='Password' />
          <FaLock className='icon' />
        </div>
        <div className='line'>
            <div className='checkbox'>
                <input id="check" value="check" type="checkbox"></input>
                <label>Lembre-se de mim</label>
            </div>
            <p>Esqueceu a senha?</p>
        </div>
        <button type='submit'>Login</button>
        <p>Não tem uma conta? Registre-se</p>

      </form>
    </div>
  );
};

export default Login;
