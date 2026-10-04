"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { cards } from "@/data/cards";

export default function ProcessingPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const card = cards.find((item) => item.id === params.id);

  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    if (!card) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push(`/success/${card.id}`);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [card, router]);

  if (!card) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        Card not found.
      </main>
    );
  }

  const progress = ((60 - secondsLeft) / 60) * 100;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Processing Payment
          </p>

          <h1 className="mt-4 text-3xl font-semibold">
            Please wait
          </h1>

          <p className="mt-3 text-white/50">
            Processing payment for {card.name}.
          </p>

          <div className="mt-10">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-white/50">
                Processing
              </span>

              <span className="text-sm font-medium">
                00:{secondsLeft.toString().padStart(2, "0")}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-white/40">
            <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Payment verification in progress
          </div>
        </div>
      </div>
    </main>
  );
}