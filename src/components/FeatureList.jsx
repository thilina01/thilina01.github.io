export default function FeatureList({ features }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        {features.map((f, idx) => (
          <li key={idx}><strong>{f.title}</strong>: {f.text}</li>
        ))}
      </ul>
    </section>
  );
}
