import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service — Notable",
  description: "The terms that apply to using gobenotable.com and engaging Notable, a brand of DakJen Creative LLC dba Notable Services.",
  alternates: { canonical: "/terms" },
};

const email = <a href="mailto:admin@gobenotable.com" className="text-crimson underline">admin@gobenotable.com</a>;

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Terms"
      title={<>Terms of <em className="font-display font-normal italic text-crimson">Service.</em></>}
      subtitle="The short version: prices on this site are starting points, every engagement is confirmed in writing before work begins, and the finished work is yours once it is paid for."
      updated="September 21, 2026"
      sections={[
        { heading: "Who we are", body: [
          <>Notable is a brand of DakJen Creative LLC dba Notable Services (&ldquo;Notable,&rdquo; &ldquo;we&rdquo;). These terms cover your use of gobenotable.com and, unless a signed proposal says otherwise, the work we do for you.</>,
        ]},
        { heading: "Pricing on this site", body: [
          <>Every price shown is a starting point. Your actual price is set in the quote or proposal we send you, which reflects the scope you ask for. Nothing on this site is a binding offer until we confirm it in writing.</>,
        ]},
        { heading: "Engagements", body: [
          <>Work begins after a written scope is agreed and the deposit is received: 35% for Essentials collateral, 50% for the 24-Hour Brand Intensive, and as stated in the proposal for Amplify. The balance is due on delivery unless the proposal says otherwise.</>,
          <>Collateral includes two rounds of revisions. Further rounds, or changes to the agreed scope, are quoted separately before we do them.</>,
          <>Intensive dates are limited to two per month and are reserved by deposit. If you need to move a reserved date, tell us at least five business days ahead and we will reschedule once at no charge.</>,
        ]},
        { heading: "Cancellation", body: [
          <>You may cancel an engagement in writing at any time. Work completed up to that point is billed; the deposit covers it first, and any unused portion of the deposit beyond completed work is refunded. Ongoing retainers (Amplify+ Ongoing) run for a three-month minimum and then cancel with 30 days&apos; written notice, with no further charge after the notice period ends.</>,
        ]},
        { heading: "Ownership", body: [
          <>Once the final invoice is paid, you own the finished deliverables. We keep the right to show the work in our portfolio and case studies unless you ask us in writing not to. We do not share client names or results without permission.</>,
          <>You are responsible for having the rights to any material you give us to use, such as logos, photos, and copy.</>,
        ]},
        { heading: "Using this site", body: [
          <>The content of this site belongs to DakJen Creative LLC and may not be copied for commercial use without permission. Do not use the forms to send spam or automated submissions.</>,
          <>The site is provided as is. We do our best to keep it accurate and available but cannot promise it will always be either. Our liability for anything arising from the site or an engagement is limited to the amount you paid us for that engagement.</>,
        ]},
        { heading: "Contact", body: [
          <>Questions about these terms go to {email}.</>,
        ]},
      ]}
    />
  );
}
