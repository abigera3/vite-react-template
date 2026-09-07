import Image from "next/image";
import type { ReactNode } from "react";
import { CardAccordion, type AccordionLink } from "./CardAccordion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1441px] px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9h12M11 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 4.5L6 9.5L11 4.5"
        stroke="#A3A9BA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group mt-auto inline-flex items-center justify-center gap-3 pt-6 text-[1.125rem] font-semibold leading-snug"
    >
      <span>{children}</span>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-bright text-ink transition-transform group-hover:translate-x-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

export function TealButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-[4px] border border-teal-bright bg-teal-bright px-4 py-2.5 text-center text-[1.125rem] font-[550] leading-none tracking-[-0.02em] text-ink hover:border-teal-mid hover:bg-teal-mid"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="inline-block rounded-[4px] border border-ink bg-transparent px-4 py-2.5 text-center text-[1.125rem] font-[550] leading-none tracking-[-0.02em] text-ink hover:border-teal-mid hover:bg-teal-mid"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="link-underline"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function PhotoCard({
  image,
  alt,
  title,
  body,
  cta,
  items,
  priority = false,
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  cta: string;
  items: AccordionLink[];
  priority?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[350/261] overflow-hidden rounded-[30px]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 440px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col pt-6 text-left">
        <h3 className="pb-[1.125rem] text-[1.5rem] font-[550] leading-[1.625rem] tracking-[-0.02em] md:text-[1.75rem] md:leading-7">
          {title}
        </h3>
        <p className="mt-6 text-[1.125rem] font-[450] leading-6 text-ink">{body}</p>
        <CardAccordion label={cta} items={items} />
      </div>
    </article>
  );
}
