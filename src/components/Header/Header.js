import { HeaderWrapper, Title, Logo, Text } from './styles';

export const Header = () => {
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
}