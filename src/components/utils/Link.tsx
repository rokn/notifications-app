import * as Nav from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  return (
    <Nav.Link asChild>
      <NextLink href={href} className="NavigationMenuLink" {...props} />
    </Nav.Link>
  );
};

export default Link;