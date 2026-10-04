"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cards } from "@/data/cards";

export default function CheckoutPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [walletId, setWalletId] = useState("");

  const card = cards.find((item) => item.id === params.id);

  if (!card) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        Card not found.
      </main>
    );
  }

  const handleContinue = () => {
    if (!walletId.trim()) {
      alert("Enter wallet ID");
      return;
    }

    router.push(`/processing/${card.id}`);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-2xl font-semibold">
            CARDEXO
          </Link>

          <Link
            href={`/card/${card.id}`}
            className="text-sm text-white/50 hover:text-white"
          >
            Back
          </Link>
        </header>

        <section className="py-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Payment
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Complete your purchase
          </h1>

          <div className="mt-10 rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-medium">{card.name}</p>

                <p className="mt-1 text-sm text-white/40">
                  {card.category}
                </p>
              </div>

              <p className="text-xl font-semibold">
                ${card.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-6">
              <label className="text-sm text-white/50">
                Crypto Wallet ID
              </label>

              <input
                value={walletId}
                onChange={(e) => setWalletId(e.target.value)}
                placeholder="Enter wallet ID"
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none placeholder:text-white/20 focus:border-white/30"
              />
            </div>

            <button
              onClick={handleContinue}
              className="mt-6 w-full rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:bg-white/90"
            >
              Pay ${card.price.toLocaleString()}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}