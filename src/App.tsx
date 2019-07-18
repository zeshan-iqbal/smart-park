import React, { Component } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonApp,
  IonContent,
} from "@ionic/react";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <IonApp>
        <Login />
      </IonApp>
    );
  }
}

export default App;
