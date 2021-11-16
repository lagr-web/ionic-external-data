
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";

import Weather from "./components/Weather";

const App = () => (
  
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>The Daily Weather</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <Weather />
    </IonContent>
  </IonApp>
);

export default App;
