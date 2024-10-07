import { ReactNode } from 'react';
import headerImage from '../../assets/headerLogo.png';
import { HeaderContainer, HeaderText } from './styles';

interface HeadderProps {
  children?: ReactNode;
}

export function Header({ children }: HeadderProps) {
  return (
    <HeaderContainer>
      <HeaderText>
        Monitoramento de temperatura e eficiência da máquina
      </HeaderText>
      <img src={headerImage} width={80} />
      {children}
    </HeaderContainer>
  );
}
