import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HandleKakaoLogin } from './components';
import {
  MainPage,
  SplashPage,
  JoinPage,
  FeedbackPage,
  EditModePage,
  NormalModePage,
  EmailCertPage,
  MyPage,
} from './pages';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/main' component={MainPage} />
        <Route exact path='/join' component={JoinPage} />
        <Route exact path='/feedback' component={FeedbackPage} />
        <Route exact path='/callback/kakao' component={HandleKakaoLogin} />
        <Route exact path='/:id/' component={NormalModePage} />
        <Route exact path='/:id/mypage' component={MyPage} />
        <Route exact path='/:id/edit' component={EditModePage} />
        <Route
          exact
          path='/certificate/:email/:code'
          component={EmailCertPage}
        />
        <Route path='/'>
          <div> 존재하지 않는 페이지입니다. </div>
        </Route>
      </Switch>
    </Router>
=======
    <>
      <Helmet>
        <title>On it!</title>
        <meta name='description' content='Onit과 함께 오니이이이' />
        <meta property='og:image' content='' />
        <meta property='og:url' content='' />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/main' component={MainPage} />
          <Route exact path='/join' component={JoinPage} />
          <Route exact path='/feedback' component={FeedbackPage} />
          <Route exact path='/callback/kakao' component={HandleKakaoLogin} />
          <Route exact path='/:id/' component={NormalModePage} />
          <Route exact path='/:id/edit' component={EditModePage} />
          <Route
            exact
            path='/certificate/:email/:code'
            component={EmailCertPage}
          />
          <Route path='/'>
            <div> 존재하지 않는 페이지입니다. </div>
          </Route>
        </Switch>
      </Router>
    </>
>>>>>>> 6efca1fb43e179c1773f0e9ac7633e0008f4bb40
  );
}

export default App;
