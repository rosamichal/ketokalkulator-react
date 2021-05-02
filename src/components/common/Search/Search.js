import {WideInput} from '../Input';

const Search = ({placeholder}) => {
    return (
        <div>
            <WideInput placeholder={placeholder}/>
            <p>Nie znaleziono...</p>
        </div>
    )
}

export default Search
