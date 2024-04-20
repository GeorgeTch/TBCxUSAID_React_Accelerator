import Link from "next/link";
import Image from "next/image";
import Logout from "./Logout";
import { logout } from "@/app/(dashboard)/actions";

export default function Header() {
  async function handleLogout() {
    "use server";
    await logout();
  }
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" width={70} height={70} alt="Company Logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li></li>
          </ul>
        </nav>
        <Logout handleLogout={handleLogout} />
      </div>
    </header>
  );
}