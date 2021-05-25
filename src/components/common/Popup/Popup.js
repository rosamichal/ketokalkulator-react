import { PopupWrapper, PopupHeader, PopupContent, PopupButtons } from './styles';
import { Button } from '../../common/Button';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';

const Popup = ({ children, title, extraButton, onClose }) => {
    useLockBodyScroll();

    return (
        <PopupWrapper>
            <PopupHeader>{title}</PopupHeader>
            <PopupContent>{children}</PopupContent>
            <PopupButtons>
                {extraButton}
                <Button danger onClick={onClose}>Zamknij okno</Button>
            </PopupButtons>
        </PopupWrapper>
    )
}

export default Popup
