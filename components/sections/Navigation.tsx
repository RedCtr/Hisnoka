import { navigations } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div>
        <h1 className="text-purple-900/80 font-bold text-2xl tracking-tight">
          Qolb
        </h1>
      </div>

      <div className="flex items-center gap-x-2">
        {navigations.map((nav) => (
          <Link
            className="font-semibold font-sans text-gray-900 tracking-tight text-base"
            href={nav.link}
            key={nav.name}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-3">
        <Button>Language</Button>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Navigation;
