import { FAQItem, WaitlistLink } from "@/interfaces/types"
export const waitlistLinks: WaitlistLink[] = [
  { name: "Why GridApe", link: "#description" },
  { name: "FAQ", link: "#faq" },
  { name: "Terms & Conditions", link: "#" },
]

export const footerSocialLinks: WaitlistLink[] = [
  { name: "/svg/facebook.svg", link: "#" },
  { name: "/svg/twitter.svg", link: "#" },
  { name: "/svg/linkdin.svg", link: "#" },
]

export const faqData: FAQItem[] = [
  {
    title: 'How does GrideApe work?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    title: 'Is my personal information safe when i join the waitlist for GridApe?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    title: 'Can i unsubscribe from the waitlist for GrideApe?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  }
];