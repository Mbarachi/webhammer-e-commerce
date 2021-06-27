import { Route, Switch } from 'react-router';
import {useState,useEffect} from 'react'
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Hompage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import {auth} from './firebase/firebase.utils'



function App() {

  const [currentUser, setCurrentuser] = useState(null)  

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentuser(user)
    })

  }, [currentUser])


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
} 

export default App;
