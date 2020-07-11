import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { BottomHeader } from './components/BottomHeader';
import { NewNavBar } from './components/NewNavBar';



function App() {
  return (
    <React.Fragment>
      <NewNavBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <BottomHeader />
    </React.Fragment>
  );
}

export default App;
