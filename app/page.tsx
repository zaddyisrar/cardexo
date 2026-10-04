import Link from "next/link";
import { cards } from "@/data/cards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">CARDEXO</h1>
            <p className="mt-1 text-sm text-white/50">
              Premium access cards
            </p>
          </div>
        </header>

        <section className="py-16">
          <div className="mb-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/40">
              Available Cards
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Choose your card.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {cards.map((card) => (
              <div
                key={card.id}
                className="grid grid-cols-4 items-center gap-4 border-b border-white/10 px-6 py-5"
              >
                <div>
                  <p className="font-medium">{card.name}</p>
                  <p className="text-sm text-white/40">{card.category}</p>
                </div>

                <div>${card.price}</div>

                <div>${card.worth.toLocaleString()}</div>

                <Link
                  href={`/card/${card.id}`}
                  className="justify-self-end rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}