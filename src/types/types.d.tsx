export interface ServiceData {
  hl: string;
  desc: string;
  img: string;
}

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface GlobalState {
  isModalOpen: boolean;
  toggleModal: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  exitMenu: () => void;
}