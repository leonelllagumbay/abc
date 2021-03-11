import React, { useReducer } from "react";
import { SemiGlobalContext } from "../../contexts/SemiGlobalContext";
import { appInitialState } from "../../reducers/appInitialState";
import { semiGlobalReducer } from "../../reducers/SemiGlobalReducer";
import PropTypes from 'prop-types';
const Context = SemiGlobalContext;



const AppStateProvider = ({ children }) => {
  // value is [state, dispatch]
  const value = useReducer(semiGlobalReducer, appInitialState);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

AppStateProvider.propTypes = {
  children: PropTypes.object
};

export {
  AppStateProvider
}