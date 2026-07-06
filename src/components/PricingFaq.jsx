import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import './PricingFaq.css';

/* Collapsible FAQ list shared by the pricing sub-pages.
   Multi-open accordion: each question toggles independently.
   GitHub-skin tokens; needs the .rp-home/.rp-pricing scope. */
const PricingFaq = ({ items }) => {
  const [open, setOpen] = useState(() => new Set());

  const toggle = (index) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="rp-faq">
      {items.map(({ q, a }, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={q}
            className={`rp-faq__item ${isOpen ? 'rp-faq__item--open' : ''}`}
          >
            <button
              type="button"
              className="rp-faq__question"
              id={`rp-faq-q-${i}`}
              aria-expanded={isOpen}
              aria-controls={`rp-faq-panel-${i}`}
              onClick={() => toggle(i)}
            >
              <span>{q}</span>
              <LuChevronDown className="rp-faq__chevron" aria-hidden="true" />
            </button>
            <div
              className="rp-faq__panel"
              id={`rp-faq-panel-${i}`}
              role="region"
              aria-labelledby={`rp-faq-q-${i}`}
            >
              <div className="rp-faq__panel-inner">
                <p>{a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingFaq;
