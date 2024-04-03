import { ReactElement, Dispatch, SetStateAction } from 'react';
import * as M from './Modal.style';
interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>; // isOpen Setter 넘겨주면 됨.
  width?: string;
  height?: string;
  title?: string;
  children: ReactElement;
}

function Modal(props: ModalProps) {
  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    props.onClose(false);
  };

  return (
    props.isOpen && (
      <>
        <M.ModalContainer>
          <M.Title>내 정보 수정하기 {props.title}</M.Title>
          <M.CancleIcon onClick={handleClose} />
          <M.Divider />
          {props.children}
        </M.ModalContainer>
        <M.BackgroundOverlay onClick={handleClose} />
      </>
    )
  );
}

export default Modal;
