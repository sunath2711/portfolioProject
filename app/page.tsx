import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-white">Engineering</h3>
            <p className="mt-3 text-sm text-gray-400">
              Designing and building scalable software systems with strong
              fundamentals and real-world constraints.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Product Thinking</h3>
            <p className="mt-3 text-sm text-gray-400">
              Focusing on usability, clarity, and long-term maintainability —
              not just shipping code.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Intelligence</h3>
            <p className="mt-3 text-sm text-gray-400">
              Exploring AI-driven systems and tools that enhance developer and
              user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
