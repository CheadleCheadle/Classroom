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
import ClassOptions from "./components/AllClasses/classOptions";
import ClassWork from "./components/Class/Classwork";
import NewAssignment from "./components/Class/Classwork/newAssignment";
import JoinClass from "./components/Navigation/joinClass";
import AssignmentPage from "./components/Class/ClassStream/assignment";

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

          {!!user && <Route exact path="/classes">
            <AllClasses />
          </Route>
          }
          {!!user && <Route exact path="/class/:classId">
            <ClassPage />
          </Route>
          }
          {!!user && <Route exact path="/class/:classId/classwork">
            <ClassWork/>
            </Route>}
           {!!user && <Route exact path="/class/:classId/assignments/new">
            <NewAssignment />
            </Route>}
            {!!user && <Route exact path="/class/:classId/assignments/:assignmentId/edit">
            <NewAssignment edit={true}/>
            </Route>}
            {!!user && <Route path="/classes/join">
              <JoinClass />
            </Route>}
            {!!user && <Route exact path="/classes/:classId/assignments/:assignmentId">
              <AssignmentPage />
            </Route>}
            {/* <Redirect to="/login"></Redirect> */}
        </Switch>
      )}
    </>
  );
}

export default App;
