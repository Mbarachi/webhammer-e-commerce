import { Route, Switch } from 'react-router';
import {useState,useEffect} from 'react'
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Hompage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import Test from './components/prep/Test';
import test from './components/test';



function App() {

  const [currentUser, setCurrentuser] = useState(null)  

  

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
       if(userAuth){  
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(snapShot => {
            setCurrentuser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }
        setCurrentuser(userAuth)
         
      })  
      
    // Cleanup Subscription to avoid memory leaks
    return () => {
      auth.onAuthStateChanged()
    }


  }, [])


  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Route exact path='/test' component={test}/>
      </Switch>
    </div>
  );
} 

export default App;
