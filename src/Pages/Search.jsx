import {useState} from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import styles from '../styles/Search.module.css';

const Search = () => {
    const {searchQuery} = useLoaderData();
    console.log(searchQuery);
    const [query, setQuery] = useState("");
    const handleChange = (event)=>{
        setQuery(event.target.value)
    }
    return (
    <div>
      <input className={styles.input} type="text" name="" id="" value={query} onChange={handleChange} />
      <Link to="/search"><button className={styles.btn}>Search</button></Link>
    </div>
  )
}

export default Search
