import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Indigo collects, uses and protects your information.",
  alternates: { canonical: "/privacy/" },
};

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    list: true,
    body: [
      "Profile Data: Name, date of birth, gender, height, weight, and health-related information you provide during onboarding.",
      "Habit Data: Daily check-ins and habit completion records.",
      "Device Data: Device type, operating system, and app version for troubleshooting.",
      "Usage Data: App interaction patterns to improve user experience.",
    ],
  },
  {
    heading: "How We Use Your Data",
    list: true,
    body: [
      "To calculate your lifestyle age and provide personalized health insights.",
      "To track your daily habits and streaks.",
      "To improve our algorithms and user experience.",
      "To provide customer support.",
    ],
  },
  {
    heading: "Data Storage",
    body: ["All users: Your data is stored in our secure backend (Supabase) so we can provide syncing and improve Indigo over time."],
  },
  {
    heading: "Data Sharing",
    body: [
      "We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share anonymized, aggregated data for research purposes.",
    ],
  },
  {
    heading: "Health App Integration (Premium)",
    body: [
      "If you connect Apple Health (iOS) or Health Connect (Android), Indigo reads only the categories you approve: steps, sleep, and exercise duration. Access is read-only and used solely to auto-fill those habits on your Track screen. This data is processed the same way as manually entered data and is not sold or shared.",
    ],
  },
  {
    heading: "Your Rights",
    list: true,
    body: [
      "Access: Request a copy of your data at any time.",
      "Deletion: Request deletion of your account and all associated data.",
      "Correction: Update your personal information through the app settings.",
      "Portability: Export your data in a standard format.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use industry-standard encryption and security practices to protect your data. However, no method of transmission over the Internet is 100% secure.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: ["Indigo is not intended for users under 16. We do not knowingly collect data from children."],
  },
  {
    heading: "Changes to This Policy",
    body: ["We may update this policy periodically. We will notify you of significant changes through the app."],
  },
  {
    heading: "Contact",
    body: ["Privacy questions? Email us at hello@joinindigo.app."],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="March 4, 2026"
      intro="Your privacy is important to us. This Privacy Policy explains how Indigo collects, uses, and protects your information."
      sections={sections}
    />
  );
}
