import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/syren0914/?trk=opento_sprofile_details",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Syren0914",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.instagram.com/syren0914/",
      Label: "Instagram",
      Icon: SiInstagram,
    },
    {
      Link: "https://www.linkedin.com/in/erdene-batbayar-4990a0281/",
      Label: "Youtube",
      Icon: SiYoutube,
    },
  ];
  return (
    <nav className={cn(" py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Erdene Batbayar❄️</h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link
              href={social.Link}
              key={index}
              aria-label={social.Label}
            >
                <Icon className="w-5 h-5 hover:scale-125 transition-all "/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
