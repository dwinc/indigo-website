import type { Metadata } from "next";

// Internal tool for producing App Store / Google Play screenshots. Not for search engines.
export const metadata: Metadata = {
  title: "Store screenshots · Indigo",
  robots: { index: false, follow: false },
};

export default function StoreLayout({ children }: LayoutProps<"/store">) {
  return children;
}
