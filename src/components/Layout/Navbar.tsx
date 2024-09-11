import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full h-[70px] bg-[#1C1C1C] px-6 flex flex-row items-center justify-center md:justify-between opacity-[0.95] shadow-md border-white">
      <Link href="/">
        <h1 className="text-2xl font-bold text-white hidden md:block">
          Chan&apos;s Portfolio
        </h1>
      </Link>
      <nav>
        <ul id="navbar-menu">
          <li>
            <Link href="#about">About Me</Link>
          </li>
          <li>
            <Link href="#tech-stacks">Tech Stacks</Link>
          </li>
          <li>
            <Link href="#resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
