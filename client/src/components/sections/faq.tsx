import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web and app development, PLM customizations, KPO/BPO, AI solutions, and IT consulting for businesses of all sizes.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "Our team follows best practices in software engineering, rigorous testing, and continuous client feedback to deliver top-quality results.",
  },
  {
    question: "Can you build custom products?",
    answer:
      "Yes! We specialize in building custom products tailored to your business needs, from concept to deployment.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us for a free consultation. We'll discuss your requirements and propose the best solutions for your goals.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={faq.question + idx} value={faq.question}>
              <AccordionTrigger className="text-lg font-semibold text-indigo-700 bg-white rounded-lg px-6 py-4 shadow hover:bg-indigo-50 transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 px-6 py-4 bg-white rounded-b-lg shadow">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
