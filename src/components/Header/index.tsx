import { HeaderWrapper } from './styles'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container">
                <img src={Logo} alt="Solavieve logo" />
            </div>
        </HeaderWrapper>
    )
}

export default Header
