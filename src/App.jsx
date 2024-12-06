import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  //Login Authentication Code
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if(authData){
  //     const LoggedInUser = localStorage.getItem("loggedInUser");
  //     if(LoggedInUser){
  //       setUser(LoggedInUser.role);
  //     }
  //   }
  //   }, [authData])

  //Local Storage Code
  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("invalid credetionals");
    }
  };

  return (
    <>
      {/* login Authentication */}
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user== 'employee'? <EmployeeDashboard loggedInUserData={loggedInUserData} />:null)}
    </>
  );
};

export default App;
