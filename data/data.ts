// Import necessary types/interfaces from the specified path
import { FAQItem, WaitlistLink } from "@/interfaces/types"

// Define an array of WaitlistLink objects for waitlist links
export const waitlistLinks: WaitlistLink[] = [
  { name: "Why GridApe", link: "#description", id: "description" },
  { name: "FAQ", link: "#faq", id: "faq" },
  { name: "Terms & Conditions", link: "#", id: "t&c" },
]

// Define an array of WaitlistLink objects for footer social links
export const footerSocialLinks: WaitlistLink[] = [
  { name: "/svg/facebook.svg", link: "#", id: "" },
  { name: "/svg/twitter.svg", link: "#", id: "" },
  { name: "/svg/linkedin.svg", link: "#", id: "" },
]

// Define an array of FAQItem objects for FAQ data
export const faqData: FAQItem[] = [
  {
    title: 'How does GridApe work?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    title: 'Is my personal information safe when I join the waitlist for GridApe?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    title: 'Can I unsubscribe from the waitlist for GridApe?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  }
];
