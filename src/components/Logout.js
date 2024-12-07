import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform any necessary cleanup, such as removing authentication tokens
    localStorage.removeItem('authToken');

    // Redirect to the homepage
    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;

