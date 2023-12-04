import React,{createContext} from "react";

// 1. korak -> pravljenje konteksta
export const appContext = React.createContext();

// 2. korak -> pravljenje Providera
export const AppProvider = appContext.Provider;