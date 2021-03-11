import React, { useContext, useState } from "react";
import { LOGIN_SUCCESS } from "../../../actions/SemiGlobalActions";
import { SemiGlobalContext } from "../../../contexts/SemiGlobalContext";

const Login = () => {
  const [state, dispatch] = useContext(SemiGlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data } = state;
  console.log("data", data, dispatch);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('e', email, password);
    dispatch({
      type: LOGIN_SUCCESS
    })
  }

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onEmailChangeHandler} value={email}/>
        <input type="password" onChange={onPasswordChangeHandler} value={password}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
