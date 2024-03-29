import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            height={38}
            width={128}
            className="cursor-pointer"
          />
        </Link>
        <p className="">2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
