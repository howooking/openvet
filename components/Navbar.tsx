import Image from "next/image";
import logo from "../public/image/logo.png";
import Link from "next/link";
import { navMenu } from "@/constants/constants";

import Login from "./Login";

export default function Navbar(props) {
  console.log(props);
  return (
    <nav className='flex items-center justify-between bg-fuchsia-100 px-4 py-2'>
      <div>
        <Link href='/' className='flex items-center gap-2'>
          <Image src={logo} alt='main_logo' width={50} />
          <h1 className='text-2xl font-bold'>OpenVet</h1>
        </Link>
      </div>
      <ul className='flex gap-6'>
        {navMenu.map((menu) => (
          <li key={menu.href}>
            <Link href={menu.href}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Login />
      </div>
    </nav>
  );
}
