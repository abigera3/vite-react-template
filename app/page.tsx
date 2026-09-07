import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { ArrowCta, Container, OutlineButton, PhotoCard, TealButton, TextLink } from "./components/ui";

const SUPPORT_CARDS = [
  {
    image: "/images/2509-lifestyle-budgeting.png",
    alt: "A man sat at a laptop budgeting",
    title: "Worried about money?",
    body: "If you’re struggling with money and might need more support than usual, talk to us. Our Customer Service team is here to provide dedicated support to help you deal with the unexpected.",
    cta: "Help and support with your money",
    items: [
      { label: "Support when you’re struggling", href: "https://www.starlingbank.com/faq/customer-support/money-worries/" },
      { label: "Cost of living crisis", href: "https://www.starlingbank.com/resources/tools/cost-of-living/" },
      { label: "Take control of your finances", href: "https://www.starlingbank.com/blog/take-control-of-your-finances-budgeting-and-money-insights/" },
      { label: "See what you could claim with the Inbest benefits calculator", href: "https://benefits.inbest.ai/starling", external: true },
    ],
  },
  {
    image: "/images/2509-pca-lifestyle-phone.png",
    alt: "A woman looking at her phone using the Starling app",
    title: "Time to tackle your debt?",
    body: "If you have debt concerns, get in touch. Especially if there’s been a change in your circumstances that could impact your repayments.",
    cta: "Debt and financial insecurity help",
    items: [
      { label: "Dealing with debt and financial insecurity", href: "https://www.starlingbank.com/blog/dealing-with-debt-and-financial-insecurity/" },
      { label: "Ways to reduce financial anxiety", href: "https://www.starlingbank.com/blog/ways-to-reduce-financial-anxiety/" },
      { label: "Destressing in times of uncertainty", href: "https://www.starlingbank.com/blog/connection-between-money-and-mental-health/" },
      { label: "What to do if you’re struggling with debt", href: "https://www.starlingbank.com/blog/what-to-do-if-you-are-struggling-with-debt/" },
    ],
  },
  {
    image: "/images/2509-pca-card-keys.png",
    alt: "A Starling personal account card with house keys",
    title: "Big life changes",
    body: "If you need to change your details due to an exciting life event (such as moving overseas) or inform us of an account holder’s bereavement, our Customer Service team can help",
    cta: "Support with major life events",
    items: [
      { label: "Bereavement support", href: "https://www.starlingbank.com/faq/customer-support/bereavement/" },
      { label: "Help with a major life event", href: "https://www.starlingbank.com/faq/customer-support/life-event/" },
      { label: "Giving access to someone you trust", href: "https://www.starlingbank.com/customer-support/third-party-account-access/" },
    ],
  },
];

const MORE_CARDS = [
  {
    image: "/images/2510-apple-pay.jpg",
    alt: "person paying via apple pay",
    title: "Better ways to budget",
    body: "Read advice from the experts on budgeting, saving and organising your money. Whatever your circumstances, taking charge will help you feel in control.",
    cta: "Budgeting tips and tools",
    items: [
      { label: "What is an emergency fund?", href: "https://www.starlingbank.com/blog/emergency-fund-why-you-need-one/" },
      { label: "Does the 50/30/20 rule still work?", href: "https://www.starlingbank.com/blog/50-30-20-budgeting-rule-is-it-realistic-in-a-cost-of-living-crisis/" },
      { label: "Making the most of your holiday money", href: "https://www.starlingbank.com/blog/making-the-most-of-your-holiday-money/" },
      { label: "What is zero-based budgeting?", href: "https://www.starlingbank.com/blog/zero-based-budgeting/" },
      { label: "Tools to help you budget", href: "https://www.starlingbank.com/blog/budgeting-to-save-money-in-the-new-year/" },
      { label: "Budgeting with digital cash envelopes", href: "https://www.starlingbank.com/blog/digital-cash-envelope-system-how-does-it-work/" },
    ],
  },
  {
    image: "/images/2509-bca-card-payment.png",
    alt: "Someone tapping their Starling business account card on a payment terminal",
    title: "Help for business owners",
    body: "Whether it’s loans, missed repayments or dealing with debt, we can help you and your business get back on track.",
    cta: "Support for your business",
    items: [
      { label: "Repaying your Bounce Back Loan", href: "https://www.starlingbank.com/business-account/business-bounce-back-loan-scheme/#repay" },
      { label: "Businesses in liquidation and dissolved businesses", href: "https://www.starlingbank.com/faq/dissolved-businesses/" },
      { label: "Which PAYG option is right for me?", href: "https://help.starlingbank.com/business/topics/bounce-back-loan-scheme-&-pay-as-you-grow/which-payg-option-is-right-for-me/", external: true },
      { label: "What happens to my business credit score if I miss a repayment?", href: "https://help.starlingbank.com/business/topics/recovery-loan-scheme/what-happens-to-my-business-credit-score-if-i-miss-a-repayment/", external: true },
      { label: "I've missed a repayment on my Recovery Loan - how do I get back on track?", href: "https://help.starlingbank.com/business/topics/recovery-loan-scheme/ive-missed-a-repayment-on-my-recovery-loan-how-do-i-get-back-on-track/", external: true },
    ],
  },
  {
    image: "/images/2509-help-customer-support.png",
    alt: "Customer support smiling at the camera",
    title: "How can Starling support?",
    body: "We go above and beyond when it comes to customer service, especially if you’re going through a difficult time. Our Enhanced Customer Care team is on hand to help.",
    cta: "Help and support",
    items: [
      { label: "Economic and domestic abuse support", href: "https://www.starlingbank.com/customer-support/economic-and-domestic-abuse-support/" },
      { label: "Gambling help and support", href: "https://www.starlingbank.com/customer-support/gambling-help-and-support/" },
      { label: "Current account service information", href: "https://www.starlingbank.com/current-account/service-information/" },
      { label: "I'm experiencing money issues. What support do you provide?", href: "https://help.starlingbank.com/personal/topics/account-support/im-experiencing-money-issues-what-support-do-you-provide/", external: true },
      { label: "Enhanced Customer Care team: When you may need extra help", href: "https://www.starlingbank.com/blog/specialist-support-for-starling-customers/" },
    ],
  },
];

const SCAM_LINKS = [
  ["Card payment scams: How to help stay safe", "https://www.starlingbank.com/blog/card-payment-fraud-how-to-avoid-it/"],
  ["Call 159 if you suspect a scam", "https://www.starlingbank.com/blog/fight-fraud-call-159-if-you-suspect-a-scam/"],
  ["Scams targeting younger people", "https://www.starlingbank.com/blog/top-scams-targeted-at-young-people/"],
  ["Cost of living scams to watch out for", "https://www.starlingbank.com/blog/cost-of-living-scams-to-watch-out-for/"],
  ["Phishing scams: How to protect yourself", "https://www.starlingbank.com/blog/how-to-protect-yourself-from-phishing-scams/"],
  ["Protecting you from fraud and scams", "https://www.starlingbank.com/mobile-banking-security/fraud/"],
  ["Fake text messages and calls: How to stay safe", "https://www.starlingbank.com/blog/staying-safe-from-fake-texts-and-phone-calls/"],
  ["Planning a holiday? Watch out for these scams", "https://www.starlingbank.com/blog/how-to-protect-yourself-against-holiday-scams/"],
];

const FAQ_COLUMNS = [
  {
    title: "Personal banking",
    image: "/images/starling-bank-card.png",
    alt: "Starling bank card in teal",
    links: [
      ["Setting up an account", "https://help.starlingbank.com/personal/topics/setting-up-an-account/"],
      ["Account support", "https://help.starlingbank.com/personal/topics/account-support/"],
      ["Debit card queries", "https://help.starlingbank.com/personal/topics/debit-card-queries/"],
      ["Overdrafts and loans", "https://help.starlingbank.com/personal/topics/overdrafts-and-loans/"],
    ],
    more: ["Explore more personal banking FAQs", "https://help.starlingbank.com/personal/"],
  },
  {
    title: "Joint banking",
    image: "/images/jca-card.png",
    alt: "Starling joint account card",
    links: [
      ["Setting up an account", "https://help.starlingbank.com/joint/topics/setting-up-an-account/"],
      ["Account support", "https://help.starlingbank.com/joint/topics/account-support/"],
      ["Debit card queries", "https://help.starlingbank.com/joint/topics/debit-card-queries/"],
      ["Sending and receiving money", "https://help.starlingbank.com/joint/topics/sending-and-receiving-money/"],
    ],
    more: ["Explore more joint banking FAQs", "https://help.starlingbank.com/joint/"],
  },
  {
    title: "Business banking",
    image: "/images/bca-card.png",
    alt: "Starling business account card",
    links: [
      ["Setting up an account", "https://help.starlingbank.com/business/topics/setting-up-an-account/"],
      ["Account support", "https://help.starlingbank.com/business/topics/account-support/"],
      ["Bounce Back Loan Scheme & Pay As You Grow", "https://help.starlingbank.com/business/topics/bounce-back-loan-scheme-&-pay-as-you-grow/"],
      ["Depositing cash", "https://help.starlingbank.com/business/topics/cash-and-cheques/can-i-deposit-cash-into-my-account/"],
    ],
    more: ["Explore more business banking FAQs", "https://help.starlingbank.com/business/"],
  },
];

const TOOLS = [
  {
    title: "Spending Insights",
    body: "Get up close and personal with your spending habits – now customisable by date range with 58 categories. Keep tabs on rising costs and see exactly where your money is going.",
    image: "/images/2509-pca-spending-categories.png",
    alt: "The spending categories section of the Starling app",
  },
  {
    title: "Bills Manager",
    body: "Set up a Space for all your essential spending to ring-fence your bills. Is it time to scrap those won’t-be-missed subscriptions? Tally them up in Bills Manager – then decide.",
    image: "/images/2509-pca-spaces-screen.png",
    alt: "An image showing the spaces section of the Starling app",
  },
  {
    title: "Spaces",
    body: "Try the digital ‘envelope method’ by dividing up essential spending into Spaces – that could be petrol or household bills. Consider these virtual money pots a safer, smarter alternative to cash stuffing.",
    image: "/images/2509-pca-spaces-screen-2.png",
    alt: "A space within the Starling app for a trip to Greece",
  },
  {
    title: "Instant spending notifications",
    body: "See exactly what you’re spending and what’s left. We notify you instantly everytime you pay for something, giving you a real-time balance – and peace of mind.",
    image: "/images/2509-pca-spending-notifications.png",
    alt: "Spending notifications on a locked phone screen",
  },
];

const OTHER_LINKS = [
  ["Block payment references", "https://www.starlingbank.com/blog/starling-launches-new-feature-hide-references/"],
  ["Website accessibility at Starling", "https://www.starlingbank.com/website-accessibility/"],
  ["Card payment disputes", "https://help.starlingbank.com/hc/en-us/sections/360004237280-Card-payment-disputes"],
  ["Fees, rates and charges", "https://www.starlingbank.com/legal/"],
  ["Lost or stolen cards", "https://help.starlingbank.com/personal/topics/debit-card-queries/what-should-i-do-if-my-card-is-lost-or-stolen/"],
  ["How we protect your money", "https://www.starlingbank.com/mobile-banking-security/"],
  ["Unrecognised transactions", "https://help.starlingbank.com/personal/topics/debit-card-queries/what-should-i-do-if-i-dont-recognise-a-card-payment/"],
  ["International payments", "https://help.starlingbank.com/personal/topics/sending-and-receiving-money/how-do-i-make-an-international-payment/"],
  ["Why has my card transaction been declined?", "https://help.starlingbank.com/personal/topics/debit-card-queries/why-has-my-card-payment-been-declined/"],
  ["See what you could claim with the Inbest benefits calculator", "https://benefits.inbest.ai/starling"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      <main id="main-content">
        <section className="px-0 py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-[52rem] text-center">
              <h1 className="text-[3rem] font-[550] leading-[3.375rem] tracking-[-0.03em] md:text-[4.5rem] md:leading-[4.75rem]">
                Here to help
              </h1>
              <p className="mx-auto mt-6 max-w-[40rem] text-[1.125rem] font-[450] leading-6 md:max-w-[44rem] md:leading-7">
                If money worries are getting in the way, you’re navigating a big life change or you’re in a good place to start saving, we’re here to help at every stage.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-10 md:py-16">
          <Container>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {SUPPORT_CARDS.map((card, index) => (
                <PhotoCard key={card.title} {...card} priority={index === 0} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-[46rem]">
              <h2 className="text-[2.25rem] leading-[2.5rem] tracking-[-0.03em] md:text-[3.5rem] md:leading-[3.5rem]">
                Frequently asked questions
              </h2>
              <p className="mt-5 text-[1.125rem] leading-7">
                Our help centre is designed to be your first port of call whenever you have questions about our products and services. It’s often the quickest way to get the answers you need – from within the app or online.
              </p>
              <p className="mt-6">
                <TextLink href="https://help.starlingbank.com/" external>
                  Visit our help centre
                </TextLink>
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-[1.75rem] leading-8 tracking-[-0.03em] md:text-[2.25rem] md:leading-[2.5rem]">
                  Fraud and scams
                </h2>
                <p className="mt-6 text-[1.125rem] leading-6">
                  We’re committed to helping our customers keep their money safe. Scammers are always trying something new, so we keep you updated on what to look out for.
                </p>
                <ul className="mt-6">
                  {SCAM_LINKS.map(([label, href]) => (
                    <li key={label} className="relative pb-[18px] pl-9 last:pb-0">
                      <span className="absolute top-[11px] left-0 h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
                      <TextLink href={href}>{label}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[30px]">
                <Image
                  src="/images/2509-iphone-scam-text.png"
                  alt="A scam text message on a mobile phone"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 580px, 100vw"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 md:py-16">
          <Container>
            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {MORE_CARDS.map((card) => (
                <PhotoCard key={card.title} {...card} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-lilac py-16 md:py-24">
          <Container>
            <div className="max-w-[40rem]">
              <h2 className="text-[2.25rem] leading-[2.5rem] tracking-[-0.03em] md:text-[3.5rem] md:leading-[3.5rem]">
                Don’t let it throw you
              </h2>
              <p className="mt-5 text-[1.125rem] leading-7">
                Confused about certain words? In our glossary, you’ll find all the definitions of banking terms you might come across.
              </p>
              <div className="mt-2">
                <ArrowCta href="https://www.starlingbank.com/resources/banking/banking-terms-and-definitions/">
                  Visit our glossary
                </ArrowCta>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[1.125rem] font-medium">Budget Planner</p>
                <h2 className="mt-2 text-[2.25rem] leading-[2.5rem] tracking-[-0.03em] md:text-[3.5rem] md:leading-[3.5rem]">
                  Helping you manage your money.
                </h2>
                <p className="mt-5 text-[1.125rem] font-medium leading-7">
                  In challenging times, spending knowledge is power.
                </p>
                <p className="mt-4 text-[1.125rem] leading-7">
                  The Starling budget planner brings your finances into focus, so you know where to cut back – or carry on. Understand where your money goes, so you can set realistic budgets to stay in control, and get closer to your saving goals.
                </p>
                <ArrowCta href="https://www.starlingbank.com/current-account/tools/budget-planner/">
                  Start budgeting now
                </ArrowCta>
              </div>
              <div className="relative overflow-hidden rounded-[30px]">
                <Image
                  src="/images/2509-lifestyle-budget-planner-final.jpg"
                  alt="A man sat at a laptop, surrounded by the results from the Starling budget planner"
                  width={1260}
                  height={1095}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <h2 className="text-center text-[2.25rem] leading-[2.5rem] tracking-[-0.03em] md:text-[3.5rem] md:leading-[3.5rem]">
              Head to our help centre for:
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {FAQ_COLUMNS.map((col) => (
                <article key={col.title} className="flex flex-col items-center text-center">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[30px]">
                    <Image
                      src={col.image}
                      alt={col.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 440px, 100vw"
                    />
                  </div>
                  <h3 className="pt-6 pb-[1.125rem] text-[1.5rem] font-[550] leading-[1.625rem] tracking-[-0.02em] md:text-[1.75rem] md:leading-7">
                    {col.title}
                  </h3>
                  <ul className="w-full">
                    {col.links.map(([label, href]) => (
                      <li key={label} className="mt-6">
                        <TextLink href={href} external>
                          {label}
                        </TextLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <OutlineButton href={col.more[1]} external>
                      {col.more[0]}
                    </OutlineButton>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <h2 className="text-[2.25rem] leading-[2.5rem] tracking-[-0.03em] md:text-[3.5rem] md:leading-[3.5rem]">
              Tools for transparency
            </h2>
            <p className="mt-5 max-w-[46rem] text-[1.125rem] leading-7">
              With a rising cost of living, it’s never been more important to see your money clearly. We’re making sure you can, with:
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS.map((tool) => (
                <article key={tool.title}>
                  <div className="relative mb-5 overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={tool.image}
                      alt={tool.alt}
                      width={305}
                      height={211}
                      className="h-auto w-full"
                    />
                  </div>
                  <h3 className="text-[1.5rem] leading-7 md:text-[1.75rem]">{tool.title}</h3>
                  <p className="mt-3 text-[1.125rem] leading-7">{tool.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-10">
              <TextLink href="https://www.starlingbank.com/features/">
                See all Starling app features
              </TextLink>
            </p>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-[1.75rem] leading-8 tracking-[-0.03em] md:text-[2.25rem] md:leading-[2.5rem]">
                  Need something else?
                </h2>
                <ul className="mt-8 list-disc space-y-3 pl-5">
                  {OTHER_LINKS.map(([label, href]) => (
                    <li key={label}>
                      <TextLink href={href} external={href.startsWith("http") && !href.includes("starlingbank.com")}>
                        {label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <OutlineButton href="https://help.starlingbank.com/" external>
                    More FAQs
                  </OutlineButton>
                </div>
              </div>

              <div>
                <h2 className="text-[1.75rem] leading-8 tracking-[-0.03em] md:text-[2.25rem] md:leading-[2.5rem]">
                  Contact Starling
                </h2>
                <p className="mt-5 text-[1.125rem] leading-7">
                  If you’re a Starling customer, the fastest way to contact us is via the app. Or if you prefer, call us on{" "}
                  <TextLink href="tel:02079304450">020 7930 4450</TextLink> or pop over an email to{" "}
                  <TextLink href="mailto:help@starlingbank.com">help@starlingbank.com</TextLink>
                  . Either way, we’re here 24/7.
                </p>
                <p className="mt-5 text-[1.125rem] leading-7">
                  If you’re reaching out via the app: Log in to your app, tap the menu icon in the top right corner, tap ‘Help’ and then ‘Talk to Starling’. You’ll then be able to send us a message or start a live chat session.
                </p>
                <p className="mt-5 text-[1.125rem] leading-7">
                  <strong className="font-[550]">Can’t access the app?</strong>{" "}
                  <TextLink href="https://help.starlingbank.com/personal/topics/account-support/what-happens-if-i-lose-my-phone/" external>
                    Find out what to do if you’ve lost your phone or have been locked out of it
                  </TextLink>
                  .
                </p>
                <p className="mt-5 text-[1.125rem] leading-7">
                  If you’re reporting fraud, please contact us in app or over the phone so we can look into this as soon as possible.
                </p>
                <h3 className="mt-10 text-[1.5rem] leading-7 tracking-[-0.02em] md:text-[1.75rem]">Access for everyone</h3>
                <p className="mt-4 text-[1.125rem] leading-7">
                  Let us know if you’d like to receive information in another format, such as large print, braille or audio.
                </p>
                <div className="mt-8">
                  <OutlineButton href="https://www.starlingbank.com/contact/">Contact page</OutlineButton>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <Container>
            <div className="flex flex-col items-center gap-6 rounded-[24px] bg-white p-6 md:flex-row md:items-center md:gap-6">
              <Image
                src="/images/2804-nsn-logo.jpg"
                alt="Logo showing 'National support network'"
                width={150}
                height={150}
                className="h-[150px] w-[150px] shrink-0 rounded-[30px] object-contain"
              />
              <div className="min-w-0 flex-1">
                <h2 className="text-[1.75rem] leading-8 tracking-[-0.03em] md:text-[2.25rem] md:leading-[2.5rem]">
                  Useful resources - Finding the right support.
                </h2>
                <p className="mt-5 text-[1.125rem] leading-6">
                  We’ve partnered with the National Support Network to give you access to thousands of free, confidential support services. Whether you’re dealing with money worries, health problems, bereavement, or family or work life stresses – you can find the right support for you from these trusted organisations.
                </p>
                <div className="mt-6">
                  <TealButton href="https://starling.nsn.org.uk/" external>
                    Find support
                  </TealButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
}
