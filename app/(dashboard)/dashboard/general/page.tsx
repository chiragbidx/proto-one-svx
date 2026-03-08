export const metadata = {
  title: "Overview — Camplytic Dashboard",
  description: "Dashboard overview for Facebook campaign management.",
};

export default function GeneralDashboardPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#fb7232] mb-6">
        Dashboard Overview
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-[#fff5ee] border border-[#fb7232]/30 p-6 shadow-sm">
          <div className="text-xs font-bold uppercase text-[#fb7232] mb-2">
            Campaigns
          </div>
          <div className="text-2xl font-black text-[#2d1306]">12 Active</div>
          <div className="text-zinc-600 mt-2 text-sm">
            Monitoring campaign status and performance.
          </div>
        </div>
        <div className="rounded-xl bg-[#fff5ee] border border-[#fb7232]/30 p-6 shadow-sm">
          <div className="text-xs font-bold uppercase text-[#fb7232] mb-2">
            Budget Utilized
          </div>
          <div className="text-2xl font-black text-[#2d1306]">$3,400</div>
          <div className="text-zinc-600 mt-2 text-sm">
            Tracked across all campaigns.
          </div>
        </div>
        <div className="rounded-xl bg-[#fff5ee] border border-[#fb7232]/30 p-6 shadow-sm">
          <div className="text-xs font-bold uppercase text-[#fb7232] mb-2">
            Leads Generated
          </div>
          <div className="text-2xl font-black text-[#2d1306]">653</div>
          <div className="text-zinc-600 mt-2 text-sm">
            Total new leads acquired via Facebook.
          </div>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-[#c75829]">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-md bg-[#fb7232] px-4 py-2 text-white font-semibold hover:bg-[#e06225] transition">
            Create Campaign
          </button>
          <button className="rounded-md border border-[#fb7232] px-4 py-2 text-[#fb7232] font-semibold bg-white hover:bg-[#fff0e0] transition">
            View Reports
          </button>
        </div>
      </section>
    </section>
  );
}