import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { pageLinks } from './site/pageLinks';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import LecturePage from './pages/LecturePage/LecturePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotepadPage from './pages/NotepadPage/NotepadPage';
import { AuthProvider } from './context/AuthContext';
import { Flip, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './components/Modal/Modal';
import {
  errorModal,
  inputModal,
  successModal,
  warningModal,
} from './utils/modal';
import { useEffect } from 'react';
import Loader from './components/Loader/Loader';
import { hideLoader, showLoader } from './utils/loader';
import Navbar from './components/Navbar/Navbar';

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route
              path={pageLinks.unresolvedPage.dynamicUrl}
              element={<DashboardPage />}
            />
            <Route
              path={pageLinks.authPage.dynamicUrl}
              element={<AuthenticationPage />}
            />
            <Route
              path={pageLinks.dashboardPage.dynamicUrl}
              element={<DashboardPage />}
            />
            <Route
              path={pageLinks.notepadPage.dynamicUrl}
              element={<NotepadPage />}
            />
            <Route
              path={pageLinks.lecturePage.dynamicUrl}
              element={<LecturePage />}
            />
          </Routes>
          <ToastContainer
            position={window.innerWidth > 800 ? 'bottom-left' : 'top-center'}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={window.innerWidth > 800 ? Flip : Bounce}
          />
          <Loader />
          <Modal />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
