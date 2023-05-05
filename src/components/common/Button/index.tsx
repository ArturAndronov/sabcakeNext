import { ButtonProps } from '@/interfaces/button';
import { FC } from 'react';
import { ButtonStyled } from './style';

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
       <ButtonStyled className={className} onClick={onClick}>
        {children}
       </ButtonStyled>
    )
}

export default Button;