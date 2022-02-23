import { useSelector } from 'react-redux';
import DisplayEachShopItem from './components/displayEachShopItem';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const shop = useSelector((state) => state.shop);
  return (
    <div>
      <div>hello from app</div>
      <div>displaying count on app and also on counter: {count}</div>
      <DisplayEachShopItem shop={shop} />
    </div>
  );
};

export default App;
