import { WideInput } from '../Input';

const Search = ({ placeholder, onChange }) => {
    return (
        <WideInput placeholder={placeholder ?? "Szukaj..."} type='search' onChange={onChange} />
    )
}

export default Search
