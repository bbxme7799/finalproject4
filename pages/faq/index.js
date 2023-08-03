import PageMetadata from "@/components/PageMetadata";
export default function FaqPage() {
  const faqData = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building server-side rendered and statically generated web applications.",
    },
    {
      question: "How do I install Next.js?",
      answer:
        "You can install Next.js by running `npx create-next-app` or `yarn create next-app`.",
    },
    // Add more question and answer pairs as needed
  ];

  return (
    <>
      <PageMetadata title="FAQ" />
      <div className="max-w-3xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold mb-4">คำถามที่พบบ่อย</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-medium mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
