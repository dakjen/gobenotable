import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Notable",
  description: "What Notable collects when you use gobenotable.com, where it is stored, who processes it, and how to have it removed.",
  alternates: { canonical: "/privacy" },
};

const email = <a href="mailto:admin@gobenotable.com" className="text-crimson underline">admin@gobenotable.com</a>;

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title={<>Privacy <em className="font-display font-normal italic text-crimson">Policy.</em></>}
      subtitle="Plain language about what this site collects, why, and how to have it removed. Notable is a brand of DakJen Creative LLC dba Notable Services."
      updated="September 21, 2026"
      sections={[
        { heading: "What we collect", body: [
          <>When you submit a form on this site (a discovery call request, a quote request, an Intensive booking, a Vanguard application, or the email list), we collect what you type: your name, email address, and any phone number, company, website, message, or files you choose to include.</>,
          <>Alongside each submission we record how you arrived at the site: the referring site, any campaign tags in the link you clicked, the page you landed on, and the page you submitted from. This is stored in your browser&apos;s session storage until you submit a form and is used only to understand which channels bring us clients.</>,
          <>We do not collect payment details on this site. Deposits and invoices are handled separately, by email.</>,
        ]},
        { heading: "Analytics", body: [
          <>We use Vercel Web Analytics to count page views. It is cookieless: it does not set cookies, does not fingerprint your device, and does not identify you personally. We see aggregate numbers such as which pages are visited and which countries visitors come from.</>,
        ]},
        { heading: "Where your information goes", body: [
          <>Form submissions are stored in a database hosted by Neon (serverless Postgres) and emailed to us through Brevo, our email provider. Uploaded files from the Intensive form are stored with Vercel Blob. The site itself is hosted on Vercel.</>,
          <>If you join the email list, your email address and first name are added to our Brevo contact list. Every email we send from that list includes an unsubscribe link, and the welcome email does too.</>,
          <>We do not sell, rent, or share your information with anyone else. We use it to reply to you, to scope and deliver the work you asked about, and to send the notes you signed up for.</>,
        ]},
        { heading: "Spam screening", body: [
          <>To keep bots off the forms we use a hidden field that humans never see and a minimum time-to-submit. Submissions that fail these checks are discarded without being stored. We also limit how many submissions a single network address can send per hour.</>,
        ]},
        { heading: "How long we keep it", body: [
          <>Submissions stay in our records as long as we are working with you or there is a reasonable chance we will, and are deleted on request. Email list contacts stay on the list until you unsubscribe.</>,
        ]},
        { heading: "Your choices", body: [
          <>Email {email} to see what we hold about you, correct it, or have it deleted. To stop receiving list emails, use the unsubscribe link in any email or write to us and we will remove you within a few business days.</>,
        ]},
        { heading: "Changes", body: [
          <>If this policy changes, the date at the top will change with it. Questions go to {email}.</>,
        ]},
      ]}
    />
  );
}
