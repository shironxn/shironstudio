import Image from "next/image";

export const Logo = ({ variant }: { variant: "light" | "dark" }) => {
  return variant === "light" ? (
    <Image src="/logo/light.svg" alt="Shiron Studio" width={100} height={100} />
  ) : (
    <Image src="/logo/dark.svg" alt="Shiron Studio" width={100} height={100} />
  );
};
