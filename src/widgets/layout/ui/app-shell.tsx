import React from "react";
import { MainNav } from "@/widgets/navigation/ui/main-nav";

type Props = {
  children: React.ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <MainNav />
        <main className="mt-6 flex-1 space-y-12">{children}</main>
        <footer className="mt-10 border-t border-slate-800/60 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} 공성원. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

