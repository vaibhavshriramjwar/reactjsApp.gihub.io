import logo from './logo.svg';
import './App.css';

import Home from '../src/components/Home';
import PartnerHome from '../src/components/PartnerHome';
import PartnerLogin from '../src/components/PartnerLogin';
import PartnerOTP from '../src/components/PartnerOTP';
import PartnerForm from '../src/components/PartnerForm';

import Login from './components/Login'

import { BrowserRouter, Switch, Route,Redirect  } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
       
        <Route exact path="/partnerHome" component={PartnerHome}/>
        <Route exact path="/partnerLogin" component={PartnerLogin}/>
        <Route exact path="/partnerOtp" component={PartnerOTP}/>
        <Route exact path="/partnerForm" component={PartnerForm}/>

        
        <Redirect to="/" />
  </Switch>

    </BrowserRouter>
    
    </>
  );
}

export default App;
