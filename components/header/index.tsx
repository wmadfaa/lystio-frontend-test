import React from "react";
import Link from "next/link";
import { InboxIcon, BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import UserDropdownMenu from "./user-dropdown-menu";

function Header() {
  return (
    <div className="flex items-center justify-between border-b bg-white px-8 py-5">
      <h4 className="text-h4">Lystio</h4>
      <nav className="flex items-center gap-7">
        <ul className="flex items-center gap-8">
          <li>
            <Button asChild variant="link" size="text">
              <Link href="/">About us</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link" size="text">
              <Link href="/">Leasing</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="link" size="text">
              <Link href="/">Become Landlord</Link>
            </Button>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Button>Advertise</Button>
          <div className="flex items-center gap-8">
            <InboxIcon className="h-6 w-6 text-foreground" />
            <BellIcon className="h-6 w-6 text-foreground" />
            <UserDropdownMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
