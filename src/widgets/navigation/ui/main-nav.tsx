import React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-sm font-semibold tracking-tight text-slate-900">
        공성원
        <span className="ml-1 text-xs text-violet-600">
          · Fullstack &amp; Architecture
        </span>
      </Link>
      <div className="flex gap-4 text-xs text-slate-600 sm:text-sm">
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
