import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { MainNav } from "./main-nav";
import { NavbarActions } from "./navbar-actions";

export const revalidate = 0;

export const Navbar = async () => {
  return (
    <div className="shadow-lg shadow-blue-100/50">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-32 flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={160} height={160} />
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
