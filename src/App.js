
import './App.css'
import { Layout } from 'antd'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import EventPage from './pages/EventPage';
import ProcessPage from './pages/ProcessPage';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout className="App">
        <BrowserRouter basename={getBasename()}>
          <Switch>
            <MainLayout>
              <Route exact path="/web/events" component={EventPage} />
              <Route exact path="/web/processes" component={ProcessPage} />
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
