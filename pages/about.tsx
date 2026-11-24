import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How are Premier League points calculated?",
    answer:
      "Teams earn 3 points for a win, 1 point for a draw, and 0 points for a loss.",
  },
  {
    question:
      "What happens if two teams finish with the same number of points?",
    answer:
      "Rankings are determined first by goal difference, followed by total goals scored.",
  },
  {
    question: "Where will the live match data come from?",
    answer:
      "In Phase 2, this dashboard will connect to a public Football REST API using asynchronous fetch calls.",
  },
];

// About page featuring unique content and an interactive FAQ accordion
export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
        About Premier League Stats Hub
      </h1>
      <p className="text-slate-600 leading-relaxed mb-8">
        This web application is developed as part of the CPAN 144 Front-End Web
        Development course. It demonstrates modular React component
        architecture, Next.js dynamic routing, state management, and responsive
        styling with Tailwind CSS.
      </p>

      {/* Interactive FAQ Section satisfying the interactive component rule for Page 3 */}
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full px-5 py-4 text-left font-semibold text-slate-800 flex justify-between items-center hover:bg-slate-50"
            >
              <span>{item.question}</span>
              <span className="text-purple-600 font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
