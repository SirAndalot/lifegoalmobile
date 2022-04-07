import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Plan from "./Pages/Plan";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import UserList from "./Components/UserList";
import ProtectedRoute from "./Components/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import AddUsers from "./Components/AddUsers";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [userId, setUserID] = useState("");

  const setUserHandler = (id) => {
    console.log("the id of document to be editied", id);
    setUserID(id);
  };
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Router>
        <Navbar />
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route
              path="/users"
              element={<UserList getUserID={setUserHandler} />}
            />
            <Route
              path="/add"
              element={
                <AddUsers id={userId} setUserID={setUserID} isadd={true} />
              }
            />
            <Route
              path="/update/:id"
              element={
                <AddUsers
                  id={userId}
                  getUserID={setUserHandler}
                  isadd={false}
                />
              }
            />

            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
