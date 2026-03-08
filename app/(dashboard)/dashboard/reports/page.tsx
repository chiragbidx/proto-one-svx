export const metadata = {
  title: "Reports — Camplytic Dashboard",
  description: "Analytics and reports for your Facebook marketing efforts.",
};

export default function DashboardReportsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#fb7232] mb-8">Reports</h1>
      <div className="bg-[#fff5ee] rounded-xl border border-[#fb7232]/30 p-8 shadow">
        <h2 className="text-lg text-[#c75829] font-semibold mb-4">Key Metrics</h2>
        <ul className="grid gap-2 text-zinc-700 list-disc list-inside">
          <li>Average Cost per Lead: $5.21</li>
          <li>Top Performing Campaign: Brand Awareness Spring</li>
          <li>Conversion Rate: 9.4%</li>
          <li>Reach This Month: 38,290</li>
        </ul>
      </div>
      {/* More analytics/graphs can be added here */}
    </section>
  );
}