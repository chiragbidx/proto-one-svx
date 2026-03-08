import Link from "next/link";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camplytic — Facebook Campaign Dashboard",
  description:
    "Camplytic: Manage your Facebook marketing campaigns visually and with confidence.",
};

// Fixed route URLs: remove (dashboard) group from public paths
const navItems = [
  { label: "Overview", href: "/dashboard/general" },
  { label: "Campaigns", href: "/dashboard/campaigns" },
  { label: "Reports", href: "/dashboard/reports" },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 via-white to-[#fff6f1]">
      {/* Sidebar */}
      <aside className="bg-white flex flex-col border-r border-[#fb7232]/10 w-64 min-h-screen px-4 py-8 shadow-lg">
        <Link href="/" className="mb-5 flex items-center gap-3">
          <span className="rounded-full border border-[#fb7232]/30 bg-white px-4 py-1 text-2xl font-black tracking-tight text-[#fb7232]">
            Camplytic
          </span>
        </Link>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              href={item.href}
              className="rounded-md px-3 py-2 font-medium text-zinc-700 transition hover:bg-[#ffe6d8] hover:text-[#fb7232]"
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-5 border-t border-[#fb7232]/10 space-y-1 text-xs text-[#c75829]">
          <div>
            <strong>Owner:</strong> Chirag Dodiya
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:chirag@bidx.ai"
              className="underline transition hover:text-[#fb7232]"
            >
              chirag@bidx.ai
            </a>
          </div>
          <div className="mt-1 text-[#c75829]/70 text-xs">
            Camplytic Facebook Campaign Manager
          </div>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen bg-white/30 p-8">
        {children}
      </main>
    </div>
  );
}