import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
				<Route path='/login' element={<LoginPage />} />
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