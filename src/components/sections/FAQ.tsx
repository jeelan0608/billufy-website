import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does Billufy work offline?",
    a: "Yes! You can create bills, add inventory, and manage customers completely offline. The moment your device connects to the internet, all data is automatically synced to the cloud."
  },
  {
    q: "Is my business data safe?",
    a: "Absolutely. We use bank-level 256-bit encryption. Your data is stored securely on our cloud servers and is never shared or sold to third parties."
  },
  {
    q: "Is Billufy available on iOS and Android?",
    a: "Billufy is currently available on Android and as a web application accessible from any browser (including iOS Safari). A native iOS app is in development."
  },
  {
    q: "What happens after my 3-month free trial?",
    a: "After your trial ends, you'll be prompted to upgrade to our Premium plan to continue using cloud backup and advanced analytics. You will not be charged automatically without your consent."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, there are no lock-in contracts. You can cancel your subscription at any time, and you'll retain access until the end of your current billing cycle."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
