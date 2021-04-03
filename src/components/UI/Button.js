import styled from 'styled-components';
import { colors, borderRadius } from '../../helpers';

const ButtonMain = styled.button`
    grid-column: span 2;
    margin: ${props => props.margin};
    padding: 5px 20px;
    height: 30px;
    font-size: 13px;
    font-weight: ${props => props.secondary ? 400 : 700};
    color: ${colors.white};
    background: ${props => props.secondary ? colors.lightBlue : colors.darkBlue};
    border: 1px solid ${props => props.secondary ? colors.lightBlue : colors.darkBlue};
    border-radius: ${borderRadius.small};
    transition: 0.3s ease-in-out 0s;

    &:hover { 
        cursor: pointer; 
        opacity: 0.8;
    }
`;

const Button = ({ 
    children, 
    secondary, 
    onClick, 
    type = 'button',
    margin = 0
}) => 
    <ButtonMain 
        type={type}
        secondary={secondary}
        margin={margin}
        onClick={onClick}>{children}</ButtonMain>

export default Button;
