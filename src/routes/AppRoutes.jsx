import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import ServiceOrderPage from '../pages/ServiceOrder';
import ServiceOrderDetailsPage from '../pages/ServiceOrderDetails';
import UnauthorizedPage from '../pages/Unauthorized';
import RegisterPage from '../pages/RegisterPage';
import UserManagementPage from '../pages/Users';
import AddOsPage from '../pages/AddOsPage';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <LoginPage /> }/>
          <Route path="/OS" element={ <ServiceOrderPage /> }/>
          <Route path="/OS/:id" element={<ServiceOrderDetailsPage />} />
          <Route path='/unauthorized' element={<UnauthorizedPage />} />
          <Route path='/sign-up' element={<RegisterPage />} />
          <Route path='/users' element={<UserManagementPage />} />
          <Route path='/OS/AddNew' element={<AddOsPage />} />
          <Route path='/users/:id' element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
