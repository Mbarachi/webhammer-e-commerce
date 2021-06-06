import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Hompage'


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
} 

export default App;
