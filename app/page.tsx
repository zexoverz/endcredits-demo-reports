import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Demo reports</h1>
      <Link href="/reports" className="mt-4 inline-block underline">
        Open reports
      </Link>
    </main>
  );
}
