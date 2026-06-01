import React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-sm font-semibold tracking-tight text-slate-50">
        공성원
        <span className="ml-1 text-xs text-teal-300">
          · Fullstack &amp; Architecture
        </span>
      </Link>
      <div className="flex gap-4 text-xs text-slate-300 sm:text-sm">
        <a href="#architecture" className="hover:text-teal-300">
          Architecture
        </a>
        <a href="#experience" className="hover:text-teal-300">
          Experience
        </a>
      </div>
    </nav>
  );
}
