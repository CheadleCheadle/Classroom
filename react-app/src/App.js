import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect} from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllClasses from "./components/AllClasses/";
import GetUser from "./components/utils/getUser";
import ClassPage from "./components/Class";
import { useClasses } from "./components/AllClasses/classes";
function App() {
  const user = GetUser();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useClasses(true)
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return ( isLoaded &&
    <>
      {!!user && <Navigation isLoaded={isLoaded} />}
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          {!!user && <Route path="/classes">
            <AllClasses />
          </Route>
          }
          {!!user && <Route path="/class/:classId">
            <ClassPage />
          </Route>
          }
            {/* <Redirect to="/login"></Redirect> */}
        </Switch>
      )}
    </>
  );
}

export default App;
