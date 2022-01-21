import "./App.css";
import { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import { PostsList } from "./comps/PostsList";
import { AddPostForm } from "./comps/AddPostForm";
import { SinglePostPage } from "./comps/SinglePostPage";
import { EditPostForm } from "./comps/EditPostForm";
import { Link } from "react-router-dom";
import UserList from "./comps/UserList";
import AddUser from "./comps/AddUser";
import EditUser from "./comps/EditUser";
import SingleUserPage from "./comps/SingleUserPage";
function Navbar() {
  return (
    <>
      <div className="navContent"></div>
    </>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
