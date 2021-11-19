
import Box from '@material-ui/core/Box';
import MainCalenar from './components/MainCalenar/MainCalenar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AuthForm from './components/AuthForm';
import ProfileData from './components/profile/ProfileData';
import LinkView from './components/profile/LinkView';
import {
  Switch,
  Route,
} from "react-router-dom";
import React from "react";


function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="custom-toolbar" style={{ justifyContent: 'flex-end' }}>
            <ProfileData
                username='Yohemy'
                email='example@gmail.com'
                phone='+7-901-111-22-33'
                full_name='Ilya Moskvirtin'
                avatar='https://sun9-6.userapi.com/impf/c830409/v830409663/18fe66/SAQq26iGNoA.jpg?size=1365x2048&quality=96&sign=de9497945e09a2ca947e25d1f687443b&type=album'
            />
          <LinkView/>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/auth">
          <AuthForm />
        </Route>
        <Route path="/calendar">
          <MainCalenar />
        </Route>
      </Switch>

    </Box>
  );
}

export default App;
