import { forwardRef } from 'react';
import { WideInput } from '../Input';

const Search = forwardRef(({ placeholder, onChange, autoFocus = false, value = undefined }, ref) => (
    <WideInput
        placeholder={placeholder ?? "Szukaj..."}
        type='search'
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
        ref={ref} />
));

export default Search
