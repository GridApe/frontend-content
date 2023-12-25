import { FAQItem, WaitlistLink } from "@/interfaces/types"
export const waitlistLinks: WaitlistLink[] = [
  { name: "Why GridApe", link: "#description", id: "description" },
  { name: "FAQ", link: "#faq", id: "faq" },
  { name: "Terms & Conditions", link: "#", id:"t&c" },
]

export const footerSocialLinks: WaitlistLink[] = [
  { name: "/svg/facebook.svg", link: "#", id: "" },
  { name: "/svg/twitter.svg", link: "#", id: "" },
  { name: "/svg/linkdin.svg", link: "#", id: "" },
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