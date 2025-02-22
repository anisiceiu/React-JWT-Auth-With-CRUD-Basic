import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AuthProvider>
    <Provider store={store}>
      <Router>
        <div className="container p-5">
          <Navbar/>
          <h1 className="h2 mb-5"></h1>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/list" element={<Home />} />
              <Route path="/add" element={<AddEmployee />} />
              <Route path="/edit/:id" element={<EditEmployee />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
    </AuthProvider>
  );
};

export default App;
