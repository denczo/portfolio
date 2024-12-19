export interface ServiceData {
  hl: string;
  desc: string;
  img: string;
}

export interface GlobalState {
  isModalOpen: boolean;
  toggleModal: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
  exitModal: () => void;
}