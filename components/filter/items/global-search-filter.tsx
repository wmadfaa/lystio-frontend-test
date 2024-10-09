import React from "react";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

function GlobalSearchFilter() {
  return (
    <div className="relative flex flex-1 items-center gap-2">
      <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
      <Input placeholder="Search" className="pl-10" />
    </div>
  );
}

export default GlobalSearchFilter;
