export interface WaitlistLink {
    name: string;
    link: string;
  }
  export interface MobileNavProps {
    isOpen: boolean;
    handleClick: () => void;
  }

  export interface  bgStyle {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: string;
}

export interface FAQItem {
  title: string;
  content: string;
}