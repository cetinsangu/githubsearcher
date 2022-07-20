import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Error from './pages/Error';
import { AuthProvider } from './firebase/AuthContext';
import SignedInPrivRoute from './pages/SignedInPrivRoute';
import UnSignedInPrivRoute from './pages/UnSignedInPrivRoute';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route element={<SignedInPrivRoute />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route element={<UnSignedInPrivRoute />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
