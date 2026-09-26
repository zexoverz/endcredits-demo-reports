import { z } from "zod";

export const reportSchema = z.object({
  id: z.string(),
  title: z.string(),
  owner: z.string(),
  createdAt: z.iso.date(),
  amount: z.number(),
});

export type Report = z.infer<typeof reportSchema>;

const rows = [
  { id: "r-101", title: "Payouts, week 35", owner: "finance", createdAt: "2026-08-24", amount: 1840.5 },
  { id: "r-102", title: "Refunds, week 35", owner: "support", createdAt: "2026-08-27", amount: 212.0 },
  { id: "r-103", title: "Payouts, week 36", owner: "finance", createdAt: "2026-08-31", amount: 2010.75 },
  { id: "r-104", title: "Chargebacks, August", owner: "risk", createdAt: "2026-09-01", amount: 96.3 },
  { id: "r-105", title: "Payouts, week 37", owner: "finance", createdAt: "2026-09-07", amount: 1932.1 },
  { id: "r-106", title: "Refunds, week 37", owner: "support", createdAt: "2026-09-10", amount: 158.4 },
  { id: "r-107", title: "Payouts, week 38", owner: "finance", createdAt: "2026-09-14", amount: 2104.0 },
  { id: "r-108", title: "Unclaimed balances, September", owner: "finance", createdAt: "2026-09-21", amount: 410.25 },
];

export const reports: Report[] = z.array(reportSchema).parse(rows);
