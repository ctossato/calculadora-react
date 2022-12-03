import {ButtonConteiner} from './styles'

const Button = ({label, onClick}) => {
    return (
        <ButtonConteiner onClick={onClick}>
            {label}
        </ButtonConteiner>

    );

}

export default Button;