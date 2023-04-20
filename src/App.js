import './App.css';
import React, {useState, useEffect} from "react"
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {
  const [stores, setStores] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      fetch("http://localhost:8085/stores")
      .then((res) => res.json())
      .then((stores) => setStores(stores))
  }, [])

  const displayStores = stores.filter((store) => { 
    return store.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search search={search} onSearch={setSearch}/>
      <NewStoreForm stores={stores} setStores={setStores}/>
      <StoreList stores={displayStores} />
    </div>
  );
}

export default App;
