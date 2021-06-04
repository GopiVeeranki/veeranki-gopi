
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import './App.css';
import Educations from './component/Educations';
import Skills from './component/Skills';
import Experience from './component/Experience';
import Portfolios from './component/Portfolios';

function App() {
  return (
    <div className='wrap-content'>
      <div className='container'>
      <Router>
          <Route exact path='/' component={Home} />
          <Switch>
            <Route path='/skills' component={Skills} />
            <Route path='/educations' component={Educations} />
            <Route path='/experience' component={Experience} />
            <Route path='/portfolios' component={Portfolios} />
          </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
