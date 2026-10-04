"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { cards } from "@/data/cards";

export default function SuccessPage() {
  const params = useParams<{ id: string }>();

  const card = cards.find((item) => item.id === params.id);

  if (!card) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        Card not found.
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl">
            ✓
          </div>

          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/40">
            Payment Successful
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            Your card is ready
          </h1>

          <p className="mt-3 text-white/50">
            Payment for {card.name} has been confirmed.
          </p>

          <div className="mt-8 rounded-xl border border-white/10 p-5 text-left">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/40">Card</span>
              <span>{card.name}</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-white/40">
                Expected Card Value
              </span>

              <span className="font-medium">
                ${card.worth.toLocaleString()}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-white/40">Status</span>

              <span className="text-white">
                Completed
              </span>
            </div>
          </div>

          <Link
            href={`/unlocked/${card.id}`}
            className="mt-8 flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:bg-white/90"
          >
            Open Card
          </Link>

          <Link
            href="/"
            className="mt-4 block text-sm text-white/40 transition hover:text-white"
          >
            Back to CARDEXO
          </Link>
        </div>
      </div>
    </main>
  );
}