import {PopupWrapper, PopupHeader, PopupContent, PopupButtons} from './styles';
import {Button} from '../../common/Button';

const Popup = ({ children, title, extraButton, onClose }) => {
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
