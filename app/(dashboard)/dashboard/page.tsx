import { redirect } from "next/navigation";

// Redirect to general dashboard (public URL, omitting (dashboard) group)
export default function DashboardRootPage() {
  redirect("/dashboard/general");
  return null;
}