import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ILinkArrow {
  pathUrl: string;
  isLeftArrow?: boolean;
  isValidated?: boolean;
}

const LinkArrow: React.FC<ILinkArrow & PropsWithChildren> = ({
  pathUrl,
  children,
  isLeftArrow,
  isValidated,
}) => {
  if (isLeftArrow) {
    return (
      <Link
        href={`${pathUrl}`}
        className="flex items-center gap-2.5 text-white"
      >
        <Image
          src={"/images/arrowL.svg"}
          alt="arrow_img"
          width={24}
          height={24}
        />
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={isValidated ? `${pathUrl}` : "#"}
      className={`flex items-center gap-2.5 ml-auto ${
        isValidated ? "text-white" : "text-gray-400"
      }`}
    >
      {children}
      <Image
        src={"/images/arrowR.svg"}
        alt="arrow_img"
        width={24}
        height={24}
      />
    </Link>
  );
};

export default LinkArrow;
