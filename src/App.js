import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/charactersGrid'
import Search from './components/ui/Search';

const App = () => {
  const[items , setItems] = useState([])
  const[loading,setLoading] = useState(true)
  const[query ,setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setLoading(false)
    }
    fetchItems()
  } ,[query])
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading = {loading} items= {items} />
    </div>
  );
}

export default App;
