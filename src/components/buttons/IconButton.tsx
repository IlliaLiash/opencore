'use client';

import Image from 'next/image';

interface IconButtonProps {
  href: string;
  svgPath: string;
  altText: string;
  width?: number;
  height?: number;
}

const IconButton = ({
  href,
  svgPath,
  altText,
  width,
  height,
}: IconButtonProps) => {
  return (
    <a href={href}>
      <Image
        src={svgPath}
        alt={altText}
        width={width}
        height={height}
      />
    </a>
  );
};

export default IconButton;
