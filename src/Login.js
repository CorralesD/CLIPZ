import { useState } from 'react';

const Login = ({ handleLoginClick }) => {
    const [userId, setUserId] = useState("Homer");

    return ( 
        <div className="login">
            <input type="text" placeholder="enter user id" value={userId}
                onChange={ (e) => setUserId(e.target.value) } />
            <button onClick={ () => handleLoginClick(userId) }>Login</button>
      </div>
     );
}
 
export default Login;