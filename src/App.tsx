import "./App.css";
import { Main } from "./components/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArGurPpbNUnHxfNQv4lyi3A3bgUO3HA7g",
  authDomain: "portfolio-c6b26.firebaseapp.com",
  databaseURL: "https://portfolio-c6b26-default-rtdb.firebaseio.com",
  projectId: "portfolio-c6b26",
  storageBucket: "portfolio-c6b26.appspot.com",
  messagingSenderId: "808791203964",
  appId: "1:808791203964:web:95f358a80e669287e069f9",
  measurementId: "G-7E1M2NQQRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// routes
export interface DOMRoutes {
  path: string;
  key?: string;
  component: JSX.Element;
}
const routes: DOMRoutes[] = [
  {
    path: "/",
    key: "/",
    component: <Main />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
