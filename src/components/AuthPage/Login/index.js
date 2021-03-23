import React, { useContext, useEffect, useState } from "react";
import { LOGIN_SUCCESS } from "../../../actions/SemiGlobalActions";
import { SemiGlobalContext } from "../../../contexts/SemiGlobalContext";
// import {
//   Switch,
//   Route
// } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const [state, dispatch] = useContext(SemiGlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data } = state;
  console.log("data", data, dispatch);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('e', email, password);
    // api post
    dispatch({
      type: 'LOADING_ON',
      data: ''
    });
    setTimeout(() => {
      dispatch({
        type: 'LOADING_OFF',
        data: ''
      });
      dispatch({
        type: LOGIN_SUCCESS
      })
    }, 4000);
    
  }

  useEffect(() => {
    console.log('watching');
  }, []);

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  }


  return(
    <div>
      {data.loading ? <CircularProgress /> : ''}
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onEmailChangeHandler} value={email}/>
        <input type="password" onChange={onPasswordChangeHandler} value={password}/>
        <Button variant="contained" color="primary" type="submit">
          {data.authenticated ? 'Logout' : 'Login'}
          
        </Button>
      </form>
    </div>
  );
};

export default Login;
