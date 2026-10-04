import Link from "next/link";
import { cards } from "@/data/cards";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CardDetailsPage({ params }: Props) {
  const { id } = await params;

  const card = cards.find((item) => item.id === id);

  if (!card) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" className="text-2xl font-semibold">
            CARDEXO
          </Link>

          <Link
            href="/"
            className="text-sm text-white/50 hover:text-white"
          >
            Back
          </Link>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#111111] p-7">
              <p className="text-sm tracking-[0.2em] text-white/40">
                CARDEXO
              </p>

              <div className="mt-20">
                <h2 className="text-2xl font-semibold">{card.name}</h2>
                <p className="mt-2 text-sm text-white/40">
                  {card.category}
                </p>
              </div>

              <div className="mt-10 flex justify-between text-xs text-white/30">
                <span>PREMIUM ACCESS</span>
                <span>•••• 8842</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              {card.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold">
              {card.name}
            </h1>

            <p className="mt-6 leading-7 text-white/50">
              {card.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/40">Price</p>
                <p className="mt-2 text-2xl font-semibold">
                  ${card.price.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-white/40">Worth</p>
                <p className="mt-2 text-2xl font-semibold">
                  ${card.worth.toLocaleString()}
                </p>
              </div>
            </div>

            <Link
              href={`/checkout/${card.id}`}
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 font-medium text-black"
            >
              Continue to Payment
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}