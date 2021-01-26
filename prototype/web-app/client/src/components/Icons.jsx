import React from "react";
import home from "../icons/home.svg";
import map from "../icons/globe-sharp.svg";
import account from "../icons/account.svg";
import accountAdd from "../icons/accountadd.svg";
import login from "../icons/log-in.svg";
import exit from "../icons/exit.svg";
import dash from "../icons/dash.svg";


function Home() {
  return <img width="25px" height="25px" alt="Map" src={home} ></img>;
}

function Map() {
  return <img width="25px" height="25px" alt="Map" src={map} ></img>;
}

function Account() {
  return <img width="25px" height="25px" alt="Account" src={account} ></img>;
}

function AccountAdd() {
  return <img width="25px" height="25px" alt="Account" src={accountAdd} ></img>;
}

function Login() {
  return <img width="25px" height="25px" alt="Exit" src={login} ></img>;
}

function Exit() {
  return <img width="25px" height="25px" alt="Exit" src={exit} ></img>;
}

function Dash() {
  return <img width="25px" height="25px" alt="Dashboard" src={dash} ></img>;
}

export { Map, Account, AccountAdd, Login, Exit, Dash, Home };