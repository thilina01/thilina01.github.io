export default function TechStackTable({ stack }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left border-b pb-2">Layer</th>
            <th className="text-left border-b pb-2">Technology</th>
          </tr>
        </thead>
        <tbody>
          {stack.map((item, idx) => (
            <tr key={idx}>
              <td className="py-2 border-b">{item.layer}</td>
              <td className="py-2 border-b">{item.tech}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
