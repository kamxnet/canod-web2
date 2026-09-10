import { PageIntro } from "@/components/page-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Privacy", "How the CANOD website works: GitHub Pages hosting, temporary interest selections, email drafts, external links and privacy enquiries.", "/privacy/");

export default function PrivacyPage() {
  return <>
    <PageIntro label="Privacy" title="About your visit to CANOD."><p>This page describes the current website and what happens when you use its email tools.</p></PageIntro>
    <div className="site-container document-body article-body">
      <p className="article-note">Last updated <time dateTime="2026-09-10">September 10, 2026</time>.</p>
      <section><h2>Website hosting</h2><p>CANOD is a static website hosted on GitHub Pages. GitHub states that it logs and stores visitors&apos; IP addresses for security, whether or not visitors are signed in to GitHub. See <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection">GitHub Pages data collection</a> and the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</a> for the hosting provider&apos;s practices.</p></section>
      <section><h2>Cookies, storage and embedded content</h2><p>The current CANOD application does not set cookies, store selections in local or session storage, or include analytics, advertising pixels, third-party forms or embedded social media. Fonts, images and application files are served with the site. Your browser may cache those files as part of normal browsing.</p></section>
      <section><h2>Product interests and email drafts</h2><p>Selected interests and text entered into the email builder are held temporarily in the open page. CANOD does not save them on a server. Refreshing or leaving the page clears the application state; your browser may separately retain or restore form entries according to its settings.</p><p>The email buttons create a mailto link containing the recipient, subject and draft content. Clicking one passes that information to your chosen email application. The website itself does not submit or send a message. Review the draft in your email application before sending it.</p></section>
      <section><h2>If you send us an email</h2><p>If you send a message, CANOD receives the sender address and the information you include so it can read and respond to your enquiry. Your email provider and the services handling delivery also process the message under their own practices. Please avoid including passwords, payment details or other information that is unnecessary for your enquiry.</p></section>
      <section><h2>Links to other websites</h2><p>Our guides link to sources on other websites. Following an external link takes you to a service with its own privacy practices. Those pages are not embedded in CANOD, and visiting CANOD does not automatically open them.</p></section>
      <section><h2>Questions and updates</h2><p>For a privacy question or a request concerning an email you have sent, contact <a href="mailto:hello@canod.ca?subject=Privacy%20enquiry">hello@canod.ca</a>. We will update this page when the website&apos;s relevant features or practices change.</p></section>
    </div>
  </>;
}
