import React, { Component } from "react";
import {
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle
} from "@ionic/react";


export interface LoginProps {

}

export interface LoginState {
    username: string;
    passowrd: string;
}

class Login extends React.Component<LoginProps, LoginState> {

    render() {
        return (<IonContent>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <form>
                <IonGrid style={{ height: '100%', justifyContent: 'center' }}>
                    <IonRow>
                        <IonCol text-center>
                            <IonItem>
                                <IonLabel position="stacked">Username <IonText color="danger">*</IonText></IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Password <IonText color="danger">*</IonText></IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                            <div className="ion-padding">
                                <IonButton expand="block" type="submit" class="ion-no-margin">Login</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </form></IonContent>);
    }
}

export default Login;