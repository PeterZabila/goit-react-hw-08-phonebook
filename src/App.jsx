import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes';
import { current } from './redux/authentication/authentication-operations';
// import { isAuth } from "./redux/authentication/authentication-selectors";

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(isAuth)
  
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (

    <>
    {/* {isLoading ? <p>Loading...</p> : ( */}
      <>
          <Navbar />
          <UserRoutes />
      </>
      {/* )} */}
    
    </>
  
  );
};

export default App;
