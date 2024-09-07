import Logo from "@/assets/images/logo.jpg";
import Image from "next/image";
import { ModeToggle } from "../ToggleTheme";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <header className="flex justify-between items-center w-full py-6 px-8 bg-purple-200 dark:bg-purple-600">
      <Link href="/" className="flex gap-2 items-center">
        <Image src={Logo} alt="" width={40} className="rounded-lg" />
        <span className="font-bold">Our Company</span>
      </Link>
      <div className="flex items-center gap-x-4">
        <Link href="/products">Products</Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default NavigationBar;
