import { HeaderWrapper, Title, Logo, Text } from './styles';

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>
                <Logo />
                <Text>
                    Keto kalkulator
                </Text>
            </Title>
        </HeaderWrapper>
    )
};

export default Header;