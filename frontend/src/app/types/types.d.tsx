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
  isMenuOpen: boolean;
  toggleMenu: () => void;
}