import {WideInput} from '../Input';

const Search = ({placeholder}) => {
    return (
        <WideInput placeholder={placeholder ?? "Szukaj..."}/>
    )
}

export default Search
