export const metadata = {
  title: "Campaigns — Camplytic Dashboard",
  description: "Manage and view all Facebook marketing campaigns in Camplytic.",
};

export default function CampaignsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-[#fb7232] mb-8">
        Campaigns
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-[#fb7232]/10 bg-white rounded-xl shadow-sm">
          <thead>
            <tr className="bg-[#fff0e0] text-[#c75829] border-b border-[#fb7232]/20">
              <th className="px-5 py-3 text-left font-semibold">Name</th>
              <th className="px-5 py-3 text-left font-semibold">Status</th>
              <th className="px-5 py-3 text-left font-semibold">Budget</th>
              <th className="px-5 py-3 text-left font-semibold">Leads</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#fb7232]/10">
              <td className="px-5 py-3">Brand Awareness Spring</td>
              <td className="px-5 py-3">
                <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
                  Active
                </span>
              </td>
              <td className="px-5 py-3">$600</td>
              <td className="px-5 py-3">120</td>
              <td className="px-5 py-3">
                <button className="rounded-md bg-[#fb7232] px-3 py-1 text-white font-semibold hover:bg-[#e06225] transition">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-5 py-3">Lead Gen March</td>
              <td className="px-5 py-3">
                <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-medium">
                  Paused
                </span>
              </td>
              <td className="px-5 py-3">$900</td>
              <td className="px-5 py-3">220</td>
              <td className="px-5 py-3">
                <button className="rounded-md bg-[#fb7232] px-3 py-1 text-white font-semibold hover:bg-[#e06225] transition">
                  View
                </button>
              </td>
            </tr>
            {/* Add more static rows as needed */}
          </tbody>
        </table>
      </div>
    </section>
  );
}