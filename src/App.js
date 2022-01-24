import "./App.css";
import { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import UserList from "./comps/UserList";
import AddUser from "./comps/AddUser";
import EditUser from "./comps/EditUser";
import SingleUserPage from "./comps/SingleUserPage";
import PageLayout from "./layout/PageLayout";

function App() {
  return (
    <Router>
      <PageLayout>
        <div className="App">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Fragment>
                  <UserList />
                </Fragment>
              }
            ></Route>
            <Route exact path="/adduser" element={<AddUser />}></Route>
            <Route exact path="/editUser/:userId" element={<EditUser />} />
            <Route exact path="/users/:userId" element={<SingleUserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </PageLayout>
    </Router>
  );
}

export default App;
