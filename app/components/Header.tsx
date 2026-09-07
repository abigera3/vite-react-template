"use client";

import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import { Chevron, Container } from "./ui";
import { Logo } from "./Logo";

type NavAccount = { label: string; href: string; icon?: string };
type NavGroup = { title: string; links: { label: string; href: string }[] };
type MegaMenuData = {
  title: string;
  description: string;
  accounts: NavAccount[];
  login?: NavAccount;
  groups: NavGroup[];
};

const PERSONAL: MegaMenuData = {
  title: "Personal banking",
  description: "Master your money with the Which? Recommended Current Account 2023",
  accounts: [
    { label: "Personal account", href: "https://www.starlingbank.com/current-account/", icon: "/icons/nav/personal-account.svg" },
    { label: "Joint account", href: "https://www.starlingbank.com/current-account/joint-bank-account/", icon: "/icons/nav/joint-account.svg" },
    { label: "Student account", href: "https://www.starlingbank.com/current-account/student-bank-account/", icon: "/icons/nav/student-account.svg" },
    { label: "Under 16s", href: "https://www.starlingbank.com/current-account/under-16s-debit-card-for-kids/", icon: "/icons/nav/under-16s.svg" },
    { label: "Teen account", href: "https://www.starlingbank.com/current-account/bank-account-for-teenagers/", icon: "/icons/nav/teen-account.svg" },
    { label: "Euro account", href: "https://www.starlingbank.com/current-account/euro-bank-account/", icon: "/icons/nav/euro-account.svg" },
  ],
  groups: [
    {
      title: "Manage",
      links: [
        { label: "Spaces", href: "https://www.starlingbank.com/features/spaces/" },
        { label: "Round Ups", href: "https://www.starlingbank.com/features/round-ups/" },
        { label: "Virtual cards", href: "https://www.starlingbank.com/features/card-controls/" },
        { label: "Bills Manager", href: "https://www.starlingbank.com/features/bills-manager/" },
        { label: "Connected cards", href: "https://www.starlingbank.com/features/connected-shopping-card/" },
        { label: "Send money abroad", href: "https://www.starlingbank.com/features/international-payments/" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Budget planner", href: "https://www.starlingbank.com/current-account/tools/budget-planner/" },
        { label: "Online banking", href: "https://app.starlingbank.com/" },
        { label: "Mobile cheque deposits", href: "https://www.starlingbank.com/features/deposit-cheques-from-mobile/" },
        { label: "Marketplace", href: "https://www.starlingbank.com/marketplace/" },
      ],
    },
    {
      title: "Borrow",
      links: [
        { label: "Personal overdraft", href: "https://www.starlingbank.com/current-account/overdraft/" },
        { label: "Overdraft eligibility tool", href: "https://www.starlingbank.com/current-account/overdraft/" },
        { label: "Overdraft cost calculator", href: "https://www.starlingbank.com/current-account/overdraft/" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "No fees travel", href: "https://www.starlingbank.com/current-account/" },
        { label: "Fees, rates and charges", href: "https://www.starlingbank.com/legal/" },
        { label: "Compare current accounts", href: "https://www.starlingbank.com/current-account/" },
        { label: "Apply for an account", href: "https://www.starlingbank.com/apply/" },
        { label: "Explore all features", href: "https://www.starlingbank.com/features/" },
      ],
    },
    {
      title: "Save",
      links: [
        { label: "Cash ISA", href: "https://www.starlingbank.com/savings/cash-isa/" },
        { label: "Easy Saver", href: "https://www.starlingbank.com/savings/" },
        { label: "Fixed Saver", href: "https://www.starlingbank.com/savings/fixed-rate-savings/" },
        { label: "Explore our savings accounts", href: "https://www.starlingbank.com/savings/" },
      ],
    },
  ],
};

const BUSINESS: MegaMenuData = {
  title: "Business banking",
  description: "Apply for a free digital bank account, and join over 500,000 UK business owners.",
  accounts: [
    { label: "Business account", href: "https://www.starlingbank.com/business-account/", icon: "/icons/nav/business-account.svg" },
    { label: "Sole trader account", href: "https://www.starlingbank.com/sole-trader-bank-account/", icon: "/icons/nav/sole-trader-account.svg" },
    { label: "Multi-currency accounts", href: "https://www.starlingbank.com/business-account/multi-currency/", icon: "/icons/nav/multi-currency-accounts.svg" },
  ],
  login: {
    label: "Log in to Online Banking",
    href: "https://app.starlingbank.com/",
    icon: "/icons/nav/online-banking.svg",
  },
  groups: [
    {
      title: "Manage",
      links: [
        { label: "Starling Accounting", href: "https://www.starlingbank.com/features/small-business-bookkeeping/" },
        { label: "Spaces", href: "https://www.starlingbank.com/features/spaces/" },
        { label: "Invoicing", href: "https://www.starlingbank.com/features/create-and-send-invoices/" },
        { label: "Bills Manager", href: "https://www.starlingbank.com/features/bills-manager/" },
        { label: "Send money abroad", href: "https://www.starlingbank.com/features/international-payments/" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Making Tax Digital", href: "https://www.starlingbank.com/features/making-tax-digital/" },
        { label: "Business marketplace", href: "https://www.starlingbank.com/business-account/marketplace-for-businesses/" },
        { label: "Mobile cheque deposits", href: "https://www.starlingbank.com/features/deposit-cheques-from-mobile/" },
        { label: "Browse free business guides", href: "https://www.starlingbank.com/blog/" },
        { label: "Online banking", href: "https://app.starlingbank.com/" },
      ],
    },
    {
      title: "Borrow",
      links: [
        { label: "Repaying your bounce back loan", href: "https://www.starlingbank.com/business-account/business-bounce-back-loan-scheme/" },
        { label: "Pay as you grow", href: "https://www.starlingbank.com/business-account/business-bounce-back-loan-scheme/" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Business account eligibility", href: "https://www.starlingbank.com/business-account/" },
        { label: "Compare business accounts", href: "https://www.starlingbank.com/business-account/" },
        { label: "Apply for an account", href: "https://www.starlingbank.com/apply/" },
        { label: "Fees, rates and charges", href: "https://www.starlingbank.com/legal/" },
        { label: "Explore all features", href: "https://www.starlingbank.com/features/" },
      ],
    },
    {
      title: "Save",
      links: [{ label: "Fixed Saver", href: "https://www.starlingbank.com/savings/fixed-rate-savings/" }],
    },
  ],
};

const FOOTER_LINKS = [
  { label: "Switch to Starling", href: "https://www.starlingbank.com/switch/" },
  { label: "Read Noteworthy", href: "https://www.starlingbank.com/blog/" },
];

const RIGHT_NAV = [
  { label: "About", href: "https://www.starlingbank.com/about/", chevron: true },
  { label: "Help", href: "/", chevron: false },
  { label: "Log in", href: "https://app.starlingbank.com/", chevron: false },
];

type MenuKey = "personal" | "business" | null;

function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://www.starlingbank.com/apply/"
      className={`inline-flex items-center justify-center rounded-[4px] border border-teal-bright bg-teal-bright px-4 py-2.5 text-[1.125rem] font-[550] leading-none tracking-[-0.02em] text-ink hover:border-teal-mid hover:bg-teal-mid ${className}`}
    >
      Apply now
    </a>
  );
}

function CircleIcon({ tone = "teal" }: { tone?: "teal" | "plum" }) {
  const color = tone === "teal" ? "#19D3C5" : "#321E37";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="14" cy="14" r="13" stroke={color} strokeWidth="1.4" />
      <path d="M9 14.5h10M15.5 11l3.5 3.5-3.5 3.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuTrigger({
  label,
  open,
  controls,
  onOpen,
}: {
  label: string;
  open: boolean;
  controls: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      data-open={open}
      aria-expanded={open}
      aria-controls={controls}
      aria-haspopup="true"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      className="group relative flex h-[78px] items-center gap-1.5 border-0 border-b-[3px] border-b-white bg-transparent text-[1.125rem] font-[550] hover:border-b-[#19D3C5] data-[open=true]:border-b-[#19D3C5]"
    >
      {label}
      <span className={`transition-[rotate] duration-300 ${open ? "rotate-180" : ""}`}>
        <Chevron />
      </span>
    </button>
  );
}

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="text-[1rem] leading-6 text-ink hover:underline">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MegaMenu({
  id,
  menu,
}: {
  id: string;
  menu: MegaMenuData;
}) {
  const tone = menu.title.startsWith("Business") ? "plum" : "teal";

  return (
    <div id={id} className="hidden border-t border-[#eae8eb] bg-white lg:block">
      <Container className="grid grid-cols-[1fr_1.15fr_1fr_1fr_1fr] gap-8 py-10">
        <div className="flex flex-col">
          <h2 className="text-[1.35rem] font-[550] tracking-[-0.02em]">{menu.title}</h2>
          <p className="mt-3 text-[0.95rem] leading-6 text-ink-muted">{menu.description}</p>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            {FOOTER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-[1rem] font-medium hover:underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            {menu.accounts.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="flex items-center gap-5 text-[1.125rem] leading-6 no-underline hover:underline">
                  {item.icon ? (
                    <img src={item.icon} alt="Account logo" width={36} height={36} className="shrink-0" />
                  ) : (
                    <CircleIcon tone={tone} />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {menu.login ? (
            <div className="mt-4 border-y border-[#D1D4DC] py-[1.875rem]">
              <a
                href={menu.login.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 text-[1.125rem] leading-6 no-underline hover:underline"
              >
                {menu.login.icon ? (
                  <img src={menu.login.icon} alt="Online banking icon" width={36} height={36} className="shrink-0" />
                ) : null}
                {menu.login.label}
              </a>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {menu.groups.slice(0, 2).map((group) => (
            <div key={group.title}>
              <h3 className="text-[1.05rem] font-[650]">{group.title}</h3>
              <LinkList links={group.links} />
            </div>
          ))}
        </div>

        <div className="grid gap-8">
          {menu.groups.slice(2, 4).map((group) => (
            <div key={group.title}>
              <h3 className="text-[1.05rem] font-[650]">{group.title}</h3>
              <LinkList links={group.links} />
            </div>
          ))}
        </div>

        <div>
          {menu.groups.slice(4).map((group) => (
            <div key={group.title}>
              <h3 className="text-[1.05rem] font-[650]">{group.title}</h3>
              <LinkList links={group.links} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between text-[1.125rem] font-medium"
      >
        {label}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <Chevron />
        </span>
      </button>
      {open ? <div className="mt-3 space-y-4 pl-1">{children}</div> : null}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const personalId = useId();
  const businessId = useId();
  const active = menu === "business" ? BUSINESS : PERSONAL;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenu(null);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white"
        onMouseLeave={() => {
          if (!mobileOpen) setMenu(null);
        }}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="shadow-[0_10px_10px_rgba(0,0,0,0.03)]">
          <Container>
            <nav
              aria-label="Main"
              className="grid h-[78px] grid-cols-2 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]"
            >
            <a href="/" aria-label="Link to homepage" className="justify-self-start">
              <Logo />
            </a>

            <ul className="hidden items-center justify-center gap-8 lg:flex">
              <li>
                <MenuTrigger
                  label="Personal"
                  open={menu === "personal"}
                  controls={personalId}
                  onOpen={() => setMenu("personal")}
                />
              </li>
              <li>
                <MenuTrigger
                  label="Business"
                  open={menu === "business"}
                  controls={businessId}
                  onOpen={() => setMenu("business")}
                />
              </li>
            </ul>

            <div className="justify-self-end">
              <ul className="hidden items-center gap-[25px] lg:flex">
                {RIGHT_NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`inline-flex h-[78px] items-center gap-1.5 text-[1.125rem] font-[550] ${
                        item.chevron
                          ? "border-b-[3px] border-b-white hover:border-b-[#192852]"
                          : "hover:underline"
                      }`}
                    >
                      {item.label}
                      {item.chevron ? <Chevron /> : null}
                    </a>
                  </li>
                ))}
                <li>
                  <ApplyButton />
                </li>
              </ul>

              <button
                type="button"
                className="lg:hidden"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => {
                  setMobileOpen((value) => !value);
                  setMenu(null);
                }}
              >
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                  <circle cx="21" cy="21" r="20" stroke="#192852" strokeWidth="2" />
                  <rect x="12" y="15" width="18" height="2" rx="1" fill="#192852" />
                  <rect x="12" y="20" width="18" height="2" rx="1" fill="#192852" />
                  <rect x="12" y="25" width="18" height="2" rx="1" fill="#192852" />
                </svg>
              </button>
            </div>
          </nav>
          </Container>
        </div>

        {menu ? <MegaMenu id={menu === "business" ? businessId : personalId} menu={active} /> : null}

        {mobileOpen ? (
          <div className="border-t border-border bg-white lg:hidden">
            <Container className="flex flex-col gap-5 py-6">
              <MobileSection
                label="Personal"
                open={menu === "personal"}
                onToggle={() => setMenu((current) => (current === "personal" ? null : "personal"))}
              >
                <p className="text-[0.95rem] text-ink-muted">{PERSONAL.description}</p>
                {[PERSONAL.accounts, ...PERSONAL.groups.map((group) => group.links)].flat().map((link) => (
                  <a key={link.label} href={link.href} className="block py-1 text-[1.05rem]">
                    {link.label}
                  </a>
                ))}
              </MobileSection>
              <MobileSection
                label="Business"
                open={menu === "business"}
                onToggle={() => setMenu((current) => (current === "business" ? null : "business"))}
              >
                <p className="text-[0.95rem] text-ink-muted">{BUSINESS.description}</p>
                {[BUSINESS.accounts, BUSINESS.login ? [BUSINESS.login] : [], ...BUSINESS.groups.map((group) => group.links)].flat().map((link) => (
                  <a key={link.label} href={link.href} className="block py-1 text-[1.05rem]">
                    {link.label}
                  </a>
                ))}
              </MobileSection>
              {RIGHT_NAV.map((item) => (
                <a key={item.label} href={item.href} className="text-[1.125rem] font-medium">
                  {item.label}
                </a>
              ))}
              <ApplyButton className="w-full" />
            </Container>
          </div>
        ) : null}
      </header>

      {menu && !mobileOpen ? (
        <div
          className="fixed inset-x-0 top-[78px] bottom-0 z-40 hidden bg-transparent backdrop-blur-[8px] [backdrop-filter:blur(8px)_brightness(93%)] lg:block"
          onMouseEnter={() => setMenu(null)}
        />
      ) : null}
    </>
  );
}
