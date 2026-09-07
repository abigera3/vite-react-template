import Image from "next/image";
import type { ReactNode } from "react";

const COLUMNS = [
  {
    title: "Company",
    links: [
      ["About Starling", "https://www.starlingbank.com/about/"],
      ["Annual Report & Pillar 3", "https://www.starlingbank.com/investors/"],
      ["Careers", "https://www.starlingbank.com/careers/"],
      ["Charity Partnerships", "https://www.starlingbank.com/about/partnerships/charity-partnerships/"],
      ["Ethics statement", "https://www.starlingbank.com/about/ethics-statement/"],
      ["Gender equality", "https://www.starlingbank.com/about/gender-equality/"],
      ["If Not Now, When? Initiative", "https://www.starlingbank.com/docs/reports-research/Starling-IfNotNowWhen.pdf"],
      ["Internal Audit Charter", "https://www.starlingbank.com/about/starling-bank-internal-audit-charter/"],
      ["Newsroom", "https://www.starlingbank.com/media/"],
      ["Refer a friend scheme", "https://www.starlingbank.com/refer-a-friend/"],
      ["Tax strategy", "https://www.starlingbank.com/about/our-tax-strategy/"],
      ["Women in Finance Charter", "https://www.starlingbank.com/blog/women-in-finance-charter-update/"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["All legal documents", "https://www.starlingbank.com/legal/"],
      ["FSCS Protection", "https://www.starlingbank.com/legal/account/fscs-protection/"],
      ["Privacy Notice", "https://www.starlingbank.com/legal/privacy-notice/"],
      ["Modern Slavery Statement", "https://www.starlingbank.com/legal/modern-slavery-statement/"],
      ["Carbon Reduction Plan", "https://www.starlingbank.com/about/carbon-reduction-plan/"],
    ],
  },
  {
    title: "Customer support",
    links: [
      ["Cost of living", "https://www.starlingbank.com/resources/tools/cost-of-living/"],
      ["Fraud and scams", "https://www.starlingbank.com/mobile-banking-security/fraud/"],
      ["Banking glossary", "https://www.starlingbank.com/resources/banking/banking-terms-and-definitions/"],
      ["Customer support hub", "/"],
      ["Fees, rates and charges", "https://www.starlingbank.com/legal/"],
      ["Help centre", "https://help.starlingbank.com/"],
      ["How to contact us", "https://www.starlingbank.com/contact/"],
      ["Responsible Disclosure", "https://www.starlingbank.com/security/disclosure/"],
      ["Mobile banking security", "https://www.starlingbank.com/mobile-banking-security/"],
      ["Service status", "https://starlingbank.statuspage.io/"],
      ["Accessibility statement", "https://www.starlingbank.com/accessibility/accessibility-statement/"],
      ["Social media community guidelines", "https://www.starlingbank.com/about/starling-social-media-community-guidelines/"],
      ["Money worries", "https://www.starlingbank.com/faq/customer-support/money-worries/"],
    ],
  },
  {
    title: "Partner with us",
    links: [
      ["Accountant referral programme", "https://www.starlingbank.com/referral/accountant/"],
      ["B2B Banking Services", "https://www.starlingbank.com/banking-services/"],
      ["Developers", "https://developer.starlingbank.com/"],
      ["Engine by Starling", "https://www.enginebystarling.com/"],
    ],
  },
];

const SOCIAL: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/StarlingBankUK",
    icon: (
      <svg viewBox="0 0 42 42" fill="currentColor" className="h-9 w-9">
        <path d="M22.688 8.625a5.063 5.063 0 0 0-5.063 5.063v3.937h-2.813a.563.563 0 0 0-.562.563v4.5a.563.563 0 0 0 .563.562h2.812v9.563a.563.563 0 0 0 .563.562h4.5a.563.563 0 0 0 .562-.563V23.25h2.813a.562.562 0 0 0 .545-.426l1.125-4.5a.565.565 0 0 0-.299-.642.562.562 0 0 0-.247-.057H23.25v-1.688a1.687 1.687 0 0 1 1.688-1.687h2.25a.563.563 0 0 0 .562-.563v-4.5a.563.563 0 0 0-.563-.562h-4.5Z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/starlingbank",
    icon: (
      <svg viewBox="0 0 42 42" fill="currentColor" className="h-9 w-9">
        <path d="M23.232 19.156 31.97 9H29.9l-7.586 8.818L16.253 9H9.266l9.163 13.335-9.163 10.65h2.07l8.012-9.313 6.399 9.313h6.988l-9.502-13.83Zm-2.835 3.296-.929-1.328-7.386-10.565h3.18l5.96 8.527.93 1.327L29.9 31.497h-3.18l-6.323-9.044Z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@StarlingBank",
    icon: (
      <svg viewBox="0 0 42 42" fill="currentColor" className="h-9 w-9">
        <path fillRule="evenodd" d="M12.657 11.14C14.772 8.67 17.7 7.5 20.874 7.5c3.03 0 5.708.726 7.774 2.208 2.09 1.499 3.454 3.698 3.94 6.426a1.408 1.408 0 0 1-2.194 1.416 1.406 1.406 0 0 1-.574-.923c-.366-2.05-1.353-3.589-2.81-4.633-1.478-1.06-3.539-1.681-6.136-1.681-2.453 0-4.563.884-6.082 2.656-1.536 1.793-2.59 4.644-2.59 8.786 0 3.996 1.351 6.408 3.083 7.849 1.777 1.48 4.135 2.084 6.345 2.084 4.362 0 7.037-2.568 7.161-5.376.062-1.394-.52-2.52-1.6-3.344a4.937 4.937 0 0 0-.078-.06c-.217.988-.576 1.867-1.071 2.619-1.035 1.572-2.61 2.49-4.415 2.622-1.665.124-3.062-.276-4.083-1.098a4.317 4.317 0 0 1-1.614-3.117c-.054-.926.102-2.293 1.157-3.423 1.06-1.137 2.77-1.756 5.214-1.756.721 0 1.427.052 2.106.16-.24-1.18-.78-1.755-1.247-2.065-.634-.422-1.362-.503-1.716-.503-.994 0-1.875.373-2.703 1.323a1.407 1.407 0 0 1-2.121-1.847c1.318-1.513 2.952-2.288 4.824-2.288.656 0 2.004.129 3.273.971 1.342.893 2.41 2.462 2.598 4.96l.02.326a8.516 8.516 0 0 1 1.563.94c1.754 1.339 2.808 3.32 2.702 5.705-.211 4.752-4.587 8.063-9.97 8.063-2.663 0-5.724-.72-8.145-2.734-2.467-2.054-4.095-5.31-4.095-10.01 0-4.597 1.17-8.171 3.267-10.617Zm11.8 10.643c-.708-.147-1.431-.22-2.156-.216-2.014 0-2.828.51-3.158.863-.334.358-.434.836-.405 1.339.023.398.205.797.57 1.09.36.292 1.012.567 2.112.486.923-.068 1.71-.512 2.273-1.365.35-.533.632-1.26.765-2.197Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/starlingbank/",
    icon: (
      <svg viewBox="0 0 42 42" fill="currentColor" className="h-9 w-9">
        <path d="M21 16.2c1.8 0 2 .01 2.73.04 1.83.08 2.68.95 2.77 2.77.03.71.04.93.04 2.73s-.01 2.01-.04 2.73c-.08 1.81-.94 2.68-2.77 2.77-.73.03-.93.04-2.73.04s-2.01-.01-2.73-.04c-1.83-.08-2.68-.96-2.77-2.77-.03-.71-.04-.92-.04-2.73s.01-2.01.04-2.73c.08-1.81.94-2.68 2.77-2.77.72-.03.93-.04 2.73-.04Zm0-1.62c-1.83 0-2.06.01-2.78.04-2.45.11-3.81 1.47-3.93 3.93-.03.72-.04.95-.04 2.78s.01 2.06.04 2.78c.11 2.45 1.47 3.81 3.93 3.93.72.03.95.04 2.78.04s2.06-.01 2.78-.04c2.45-.11 3.82-1.47 3.93-3.93.03-.72.04-.95.04-2.78s-.01-2.06-.04-2.78c-.11-2.45-1.47-3.81-3.93-3.93-.72-.03-.95-.04-2.78-.04Zm0 3.28a3.47 3.47 0 1 0 0 6.93 3.47 3.47 0 0 0 0-6.93Zm0 5.72a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm3.6-6.66a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z" />
      </svg>
    ),
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/starlingbank",
    icon: (
      <svg viewBox="0 0 42 42" fill="currentColor" className="h-9 w-9">
        <path fillRule="evenodd" d="M16.94 20.25a1.41 1.41 0 1 0 0-2.81 1.41 1.41 0 0 0 0 2.81ZM18.34 29.81V21.38h-2.81v8.44h2.81ZM19.47 21.38h2.53v1.1c.4-.53 1.26-1.1 2.81-1.1 2.44 0 3.09 2.43 3.09 3.94v4.5h-2.81v-4.5c0-.56-.28-1.69-1.41-1.69-.8 0-1.36.57-1.69 1.1v5.09h-2.53v-8.44Z" />
      </svg>
    ),
  },
  {
    label: "Flipboard",
    href: "https://flipboard.com/@starlingbank/starling-bank-blog-rponqiocz",
    icon: (
      <svg viewBox="0 0 42 42" className="h-9 w-9">
        <path d="M6.5 6.5v28.6h28.6V6.5H6.5Zm22.88 11.44h-5.72v5.72h-5.72v5.72h-5.72V12.22h17.16v5.72Z" fill="#FFF" />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/c/StarlingBankApp",
    icon: (
      <svg viewBox="0 0 42 42" className="h-9 w-9">
        <path
          d="M37.39 15.85s-.305-2.15-1.244-3.095c-1.188-1.243-2.517-1.249-3.126-1.322-4.363-.317-10.914-.317-10.914-.317h-.012s-6.55 0-10.914.317c-.61.073-1.938.08-3.126 1.322-.939.945-1.237 3.096-1.237 3.096S6.5 18.38 6.5 20.903v2.364c0 2.523.31 5.052.31 5.052s.305 2.15 1.238 3.095c1.188 1.243 2.748 1.2 3.443 1.335 2.498.237 10.609.31 10.609.31s6.557-.012 10.92-.322c.61-.073 1.938-.08 3.126-1.323.939-.944 1.243-3.095 1.243-3.095s.311-2.523.311-5.052v-2.364c0-2.523-.31-5.052-.31-5.052ZM18.875 26.138v-8.769l8.428 4.4-8.428 4.37Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@starlingbank",
    icon: (
      <svg viewBox="0 0 42 42" className="h-9 w-9">
        <path
          d="M24.1 8.4h-3.64v14.71c0 1.75-1.4 3.19-3.14 3.19s-3.14-1.44-3.14-3.19c0-1.72 1.37-3.13 3.05-3.19v-3.7c-3.73.06-6.72 3.1-6.72 6.89 0 3.82 3.05 6.89 6.81 6.89s6.81-3.1 6.81-6.89V15.6a8.43 8.43 0 0 0 4.82 1.63v-3.7c-2.74-.1-4.88-2.35-4.88-5.1Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.co.uk/StarlingBank/",
    icon: (
      <svg viewBox="0 0 42 42" className="h-9 w-9">
        <path
          d="M21 8.4c-6.63 0-12 5.37-12 12 0 5.09 3.16 9.43 7.63 11.18-.1-.95-.2-2.4.04-3.44.22-.94 1.41-5.96 1.41-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 3.99-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.49 0-2.87-2.06-4.89-5.01-4.89-3.41 0-5.42 2.56-5.42 5.21 0 1.03.4 2.14.9 2.74a.36.36 0 0 1 .08.34c-.09.38-.3 1.2-.33 1.36-.05.22-.17.27-.4.16-1.5-.7-2.44-2.89-2.44-4.65 0-3.79 2.75-7.26 7.93-7.26 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.46-6.23 7.46-1.21 0-2.36-.63-2.75-1.38 0 0-.6 2.29-.75 2.86-.27 1.04-1 2.35-1.49 3.14A12.04 12.04 0 0 0 21 32.4c6.63 0 12-5.37 12-12s-5.37-12-12-12Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "blog RSS feed",
    href: "https://www.starlingbank.com/rss.xml",
    icon: (
      <svg viewBox="0 0 42 42" className="h-9 w-9">
        <g fill="#fff">
          <circle cx="13.5" cy="28.5" r="2.2" />
          <path d="M11 13.5v3.2c8.7 0 15.8 7.1 15.8 15.8H30C30 21.4 21.6 13.5 11 13.5z" />
          <path d="M11 20v3.2a9.3 9.3 0 0 1 9.3 9.3H23.5A12.5 12.5 0 0 0 11 20z" />
        </g>
      </svg>
    ),
  },
];

function FooterLink({
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
      className="flex items-center text-[15px] font-[450] leading-[1.7] text-white no-underline hover:underline"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-[#321E37] py-10 text-white">
      <div className="mx-auto max-w-[86.25rem] px-4 md:px-6">
        <div className="mb-[3.75rem]">
          <img
            src="/images/footer-wordmark.svg"
            alt="Starling Bank"
            width={1392}
            height={254}
            className="h-auto w-full"
          />
        </div>

        <div className="mb-[1.875rem] grid sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title} className="py-[0.8em] text-left">
              <h4 className="mb-4 text-base font-[600]">{col.title}</h4>
              <ul className="flex list-none flex-col pl-0">
                {col.links.map(([label, href]) => (
                  <li key={label} className="mb-1 flex items-center">
                    <FooterLink
                      href={href}
                      external={href.startsWith("https://help.") || href.includes("statuspage") || href.includes("developer.") || href.includes("enginebystarling")}
                    >
                      {label}
                      {label === "Service status" ? (
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjUiIGZpbGw9IiMyRUNDNzEiLz4KPC9zdmc+Cg=="
                          alt="All systems operational."
                          width={10}
                          height={10}
                          className="ml-2.5"
                        />
                      ) : null}
                    </FooterLink>
                  </li>
                ))}
                {col.title === "Legal" ? (
                  <li className="mb-1 flex items-center">
                    <button
                      type="button"
                      className="border-0 bg-transparent p-0 text-left text-[15px] font-[450] leading-[1.7] text-white hover:underline"
                    >
                      Manage cookies
                    </button>
                  </li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>

        <div className="pb-16 pt-4">
          <div className="mb-4">
            <span className="text-base font-[600]">Connect with us</span>
          </div>
          <ul className="flex flex-wrap items-center p-0">
            {SOCIAL.map((item) => (
              <li key={item.label} className="mr-2 flex items-center justify-center">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to Starling Bank on ${item.label}`}
                  className="text-white no-underline hover:opacity-50"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start md:flex-row">
          <a
            href="https://www.starlingbank.com/docs/legal/fscs-online-leaflet.pdf"
            className="h-[76px] w-[70px] shrink-0"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/fscsWhite-512.png"
              alt="fscs protection leaflet pdf"
              width={70}
              height={76}
              className="h-full w-full object-contain"
            />
          </a>
          <div className="mt-4 text-left text-[#A3A9BA] md:mt-0 md:ml-4">
            <p className="text-[0.75rem] leading-[1.6] md:text-[1rem]">
              Starling Bank Limited (trading as Starling) is registered in England and Wales (No. 09092149), 5th Floor London Fruit And Wool Exchange, 1 Duval Square, London, United Kingdom, E1 6PW. We are authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 730166.
            </p>
            <p className="mt-2 text-xs">© Starling Bank 2026. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
