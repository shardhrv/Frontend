import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';

import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/auth/EditProfilePage';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage/>} />
        <Route path="/edit-profile" element={<ProfilePage />} />
			</Routes>
      <Toaster/>
    </div>
  );
};

export default App;

/*
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>

      <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
			<Toaster />
    
*/