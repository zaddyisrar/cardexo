"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { cards } from "@/data/cards";

const cardDetails: Record<
  string,
  {
    number: string;
    expiry: string;
    cvv: string;
    holder: string;
  }
> = {
  "apex-black": {
    number: "9999 4821 7316 2047",
    expiry: "12/30",
    cvv: "417",
    holder: "SAM JACKSMAN",
  },

  "infinite-reserve": {
    number: "9999 6384 2051 7742",
    expiry: "09/31",
    cvv: "582",
    holder: "CARD HOLDER",
  },

  "obsidian-elite": {
    number: "9999 7512 4068 3319",
    expiry: "04/30",
    cvv: "264",
    holder: "CARD HOLDER",
  },

  "titanium-x": {
    number: "9999 8246 1935 6071",
    expiry: "07/32",
    cvv: "731",
    holder: "CARD HOLDER",
  },
};

export default function UnlockedPage() {
  const params = useParams<{ id: string }>();

  const card = cards.find((item) => item.id === params.id);

  if (!card) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        Card not found.
      </main>
    );
  }

  const details = cardDetails[card.id];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">

        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight"
          >
            CARDEXO
          </Link>

          <Link
            href="/"
            className="text-sm text-white/50 transition hover:text-white"
          >
            Back to Cards
          </Link>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-2">

          {/* CARD */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">

              <div className="rounded-3xl border border-white/15 bg-[#111111] p-8">

                <div className="flex items-center justify-between">
                  <p className="text-sm tracking-[0.2em] text-white/40">
                    CARDEXO
                  </p>

                  <div className="h-10 w-12 rounded-md bg-white/10" />
                </div>

                <div className="mt-16">
                  <p className="text-sm text-white/40">
                    Available Value
                  </p>

                  <h1 className="mt-2 text-4xl font-semibold">
                    ${card.minValue.toLocaleString()} - ${card.maxValue.toLocaleString()}
                  </h1>
                </div>

                <div className="mt-14">
                  <p className="text-xl font-medium">
                    {card.name}
                  </p>

                  <p className="mt-5 text-lg tracking-[0.18em] text-white/90">
                    {details.number}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between">

                  <div>
                    <p className="text-xs text-white/30">
                      CARD HOLDER
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      {details.holder}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-white/30">
                      VALID THRU
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      {details.expiry}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-white/30">
                      CVV
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      {details.cvv}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">

            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Card Active
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              {card.name}
            </h2>

            <p className="mt-4 leading-7 text-white/50">
              Your card access has been activated successfully.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/40">
                  Available Value
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  ${card.minValue.toLocaleString()} - ${card.maxValue.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/40">
                  Status
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  Active
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl border border-white/10 p-6">

              <p className="font-medium">
                Card Information
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex justify-between gap-6">
                  <span className="text-sm text-white/40">
                    Card Number
                  </span>

                  <span className="text-sm tracking-wider">
                    {details.number}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-white/40">
                    Expiry
                  </span>

                  <span className="text-sm">
                    {details.expiry}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-white/40">
                    CVV
                  </span>

                  <span className="text-sm">
                    {details.cvv}
                  </span>
                </div>

              </div>
            </div>

            <Link
              href="/"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:bg-white/90"
            >
              Browse More Cards
            </Link>

          </div>
        </section>
      </div>
    </main>
  );
}