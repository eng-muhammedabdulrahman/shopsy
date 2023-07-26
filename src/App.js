import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { useAuth } from "./context/GlobalState";
import Banner from "./components/Banner";

const App = () => {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app bg-slate-300">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <p className="text-3xl font-extrabold p-5 ">Page Not Found</p>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
