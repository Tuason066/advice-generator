import { useGlobalContext } from './context';
import Loader from './Loader';
import Advice from './Advice';

function App() {
  const { advice } = useGlobalContext();
  return <>{advice.isLoading ? <Loader /> : <Advice />}</>;
}

export default App;
