import React from "react";
import Link from "next/link";

type Props = {
  link: string;
  target?: string;
  className?: string;
  children: React.ReactNode;
};

const CustomLink = ({ link, children, className, target }: Props) => {
  return (
    <Link href={link}>
      <a href={link} className={className} target={target}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
