import { WideInput } from '../Input';

const Search = ({ placeholder, onChange, autoFocus = false, value = undefined }) => {
    return (
        <WideInput placeholder={placeholder ?? "Szukaj..."} type='search' onChange={onChange} value={value} autoFocus={autoFocus} />
    )
}

export default Search
