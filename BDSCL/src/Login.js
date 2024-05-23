import './Login.css'
import  {useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    const [inputs, setInputs] = useState('');

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/about');
    }
    return(
        <div className="Login">
            <h1>BDSCL</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name = "username"value={inputs.username} placeholder="Username"/>
            <br></br>
            <input type="password" name = "password" value={inputs.password} placeholder="Password"/>
            <br></br>
            <div className='sub'>
            <input type='submit' value={"Login"}/>
            </div>     
        </form>
        </div>
        
    );
}
export default Login;