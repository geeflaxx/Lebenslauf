import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTryhackme,SiHackthebox } from "react-icons/si";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/geeflaxx",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/patrick-seemann-586a60198/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "bewerbung[at]patrickseemann.de",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Find me on HTB",
    href: "https://app.hackthebox.com/profile/167687",
    icon: <SiHackthebox />,
  },
  {
    index: 4,
    title: "Find me on THM",
    href: "https://tryhackme.com/p/srepper",
    icon: <SiTryhackme />,
  },
];
