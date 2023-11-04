import styles from './SearchResults.module.css';
import {api_key} from '../../../Pages/Home';
import { useEffect, useState } from 'react';

const SearchResults = (props) => {
    const [data, setData] = useState(null);
    const query = props.searchInput.toLowerCase();
    const getData = ()=>{
        fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`)
        .then(response => response.json())
        .then(
            data=>{
                setData(data);
            }
        )
    }
    useEffect(()=>{
        if(showResult){
            getData();
        }
    }, [])
  return (
    <div className={styles.search_results_section}>
      <h1 className={styles.heading}>Search results for {props.searchInput}</h1>
    </div>
  )
}

export default SearchResults
