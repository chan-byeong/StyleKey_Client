import { ReactComponentElement, ReactElement, useState } from 'react';

import * as S from './styles/Sidebar.style';

interface ToggleMenuProps {
  title: string;
  children: ReactElement;
}

function ToggleMenu({ title, children }: ToggleMenuProps) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled((pre) => !pre);
  };

  return (
    <>
      <S.ToggleBtn onClick={toggleMenu}>{title}</S.ToggleBtn>
      <S.TogglBox isToggled={isToggled}>{children}</S.TogglBox>
    </>
  );
}

export default ToggleMenu;
