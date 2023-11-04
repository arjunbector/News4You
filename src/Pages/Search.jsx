import { useState } from "react";
import styles from "../styles/Search.module.css";
import Navbar from "../Components/Navbar/Navbar";
import {FaSearch} from 'react-icons/fa';
import SearchResults from "../Components/Navbar/SearchResults/SearchResults";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showResult, setShowResult] = useState(false)
  const handleChange = (event)=>{
    setSearchInput(event.target.value);
  }
  const handleClick = ()=>{
    setShowResult(true);
  }
  const handleKeyPress = (event)=>{
    if(event.key === "Enter") setShowResult(true);
  }
  return (
    <>
      <Navbar/>
      <div className={styles.search_section}>
        <h1 className={styles.heading}>Search</h1>
        <div className={styles.input_wrapper}>
          <input className={styles.search_input} 
          type="text" 
          placeholder="Search for the news" 
          value={searchInput} 
          onChange={handleChange}
          onKeyDown={handleKeyPress} />
          <div className={styles.search_icon} onClick={handleClick}>
            <FaSearch/>
          </div>
        </div>
        {showResult && <SearchResults searchInput={searchInput} showResult = {showResult}/>}
      </div>
    </>
  );
};

export default Search;
