import { redirect } from "next/navigation";

// Simple redirect to general/overview dashboard
export default function DashboardRootPage() {
  redirect("/(dashboard)/dashboard/general");
  return null;
}