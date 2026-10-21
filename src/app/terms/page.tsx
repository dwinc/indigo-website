import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service · Indigo",
  description: "The terms that apply when you use the Indigo app.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: ["By accessing or using Indigo, you agree to be bound by these terms. If you do not agree, please do not use the app."],
  },
  {
    heading: "Description of Service",
    body: [
      "Indigo is a longevity and wellness tracking application that helps users monitor daily habits across four pillars: sleep, exercise, diet, and social connection. The app calculates a lifestyle age based on user-provided data.",
    ],
  },
  {
    heading: "User Accounts",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information during registration and to update it as necessary.",
    ],
  },
  {
    heading: "Health Disclaimer",
    body: [
      "Indigo is not a medical device and does not provide medical advice. The lifestyle age calculation and habit recommendations are for informational purposes only. Always consult a healthcare professional before making changes to your health routine.",
    ],
  },
  {
    heading: "Premium Subscription",
    body: [
      "Premium features are available through a monthly subscription at $2.99/month. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period. Manage subscriptions through your App Store or Google Play settings.",
    ],
  },
  {
    heading: "Data & Privacy",
    body: ["Your data handling is governed by our Privacy Policy. By using Indigo, you consent to data collection and use as described therein."],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content, design, and technology in Indigo are owned by or licensed to us. You may not copy, modify, or distribute any part of the app without permission.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: ['Indigo is provided "as is" without warranties. We are not liable for any damages arising from your use of the app, including health outcomes.'],
  },
  {
    heading: "Changes to Terms",
    body: ["We may update these terms from time to time. Continued use of the app constitutes acceptance of any changes."],
  },
  {
    heading: "Contact",
    body: ["Questions about these terms? Email us at hello@joinindigo.app."],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="March 4, 2026"
      intro="Welcome to Indigo. By using our app, you agree to these Terms of Service."
      sections={sections}
    />
  );
}
