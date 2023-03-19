import React from 'react'
import { Navigate , Outlet } from 'react-router-dom';

const Privatecomponent = () => {
    // const navigate = useNavigate();
    const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export default Privatecomponent
