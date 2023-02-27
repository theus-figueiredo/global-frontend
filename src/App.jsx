import AppRoutes from './routes/AppRoutes';
import { GlobalStyles } from './styles/GlobalStyles';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      const lastUpdated = localStorage.getItem("lastUpdated");
      const now = new Date().getTime();
      const sevenDaysInMs = 604800000; // 7 days in milliseconds

      if (lastUpdated && now - lastUpdated > sevenDaysInMs) {
        localStorage.clear();
        localStorage.setItem("lastUpdated", now);
      }
    }, 86400000); // check once a day

    return () => clearInterval(interval);
  }, []);
  
  return (
  <>
    <GlobalStyles />
    <AppRoutes />    
  </>
  );
}

export default App;
