"use client";

import { useId, useState } from "react";

export type AccordionLink = {
  label: string;
  href: string;
  external?: boolean;
};

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      fill="none"
      viewBox="0 0 33 32"
      aria-hidden="true"
      className={`h-8 w-8 shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.87,0,0.13,1)] ${
        open ? "rotate-180" : ""
      }`}
    >
      <rect width="29.332" height="29.332" x="1.834" y="1.333" fill="#50FFEB" rx="14.666" />
      <rect width="29.332" height="29.332" x="1.834" y="1.333" stroke="#50FFEB" strokeWidth="2.667" rx="14.666" />
      <path stroke="#321E37" strokeWidth="1.75" d="m12.5 14.5 4 4 4-4" />
    </svg>
  );
}

export function CardAccordion({
  label,
  items,
}: {
  label: string;
  items: AccordionLink[];
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="mt-auto border-b border-[#D6D2D7]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-1.5 bg-transparent py-6 text-left text-[1.125rem] font-[500] leading-6 tracking-[-0.02em] text-ink"
      >
        <span className="mt-0.5 flex-1">{label}</span>
        <AccordionIcon open={open} />
      </button>
      {open ? (
        <ul id={contentId} className="space-y-3 pb-6">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="link-underline"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
