import { format, parseISO } from "date-fns";
import { reports } from "@/lib/reports";

export const metadata = { title: "Reports" };

export default function ReportsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <p className="mt-1 text-sm text-zinc-500">{reports.length} reports</p>
      <table className="mt-6 w-full text-left text-sm">
        <thead className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-800">
          <tr>
            <th className="py-2 font-medium">Report</th>
            <th className="py-2 font-medium">Owner</th>
            <th className="py-2 font-medium">Created</th>
            <th className="py-2 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id} className="border-b border-zinc-100 dark:border-zinc-900">
              <td className="py-2">{r.title}</td>
              <td className="py-2 text-zinc-500">{r.owner}</td>
              <td className="py-2 tabular-nums">{format(parseISO(r.createdAt), "d MMM yyyy")}</td>
              <td className="py-2 text-right tabular-nums">{r.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
