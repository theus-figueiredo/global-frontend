import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import ServiceOrderPage from '../pages/ServiceOrder';
import ServiceOrderDetailsPage from '../pages/ServiceOrderDetails';
import UnauthorizedPage from '../pages/Unauthorized';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <LoginPage /> }/>
          <Route path="/OS" element={ <ServiceOrderPage /> }/>
          <Route path="/OS/:id" element={<ServiceOrderDetailsPage />} />
          <Route path='/unauthorized' element={<UnauthorizedPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
