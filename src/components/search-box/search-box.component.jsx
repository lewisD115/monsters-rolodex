 
 import './search-box.styles.css';

 //We don't need to access state in SearchBox. Due to one way data flow, if we updated
 //handle change here i.e. filter the searches, there's no way for the card component to know
 export const SearchBox = ({ placeholder, handleChange }) => (

    <input 
        className='search' 
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
        />
 )