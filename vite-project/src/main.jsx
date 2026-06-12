import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from './comp.jsx'
import Parent from './prop.jsx'
import Mul from './mul-comp.jsx'
import Head from './mul-props.jsx'
import Dashboard from './comp-prop.jsx'
import Car from './object.jsx'
import Bike from './attri.jsx'
import Logo from './nest-comp.jsx'
import Profile from './displaydata.jsx'
import Condition from './cond.jsx'
import Shoppinglist from './renderinglist.jsx'
import MyButton from './respondingevents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name/>
    <Parent/>
    <Mul/>
    <Head/>
    <Dashboard/>
    <Car/>
    <Bike/>
    <Logo/>
    <Profile/>
    <Condition/>
    <Shoppinglist/>
    <MyButton/>
  </StrictMode>,
)
