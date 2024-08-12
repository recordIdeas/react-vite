import { useRoutes } from 'react-router';
import ALLRoutes from './routes/index';
import './App.css';

const App = () => {
  let routes = useRoutes(ALLRoutes);
  return (
    routes
  );
}
export default App;