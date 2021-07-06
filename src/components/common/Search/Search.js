import { WideInput } from '../Input';

const Search = ({ placeholder, onChange, autoFocus = false }) => {
    return (
        <WideInput placeholder={placeholder ?? "Szukaj..."} type='search' onChange={onChange} autoFocus={autoFocus} />
    )
}

export default Search
