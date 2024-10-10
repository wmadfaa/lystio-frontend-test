import type { Metadata } from "next";

import Filter from "./components/filter";

export const metadata: Metadata = {
  description: "",
};

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <>
      <Filter />
      {children}
    </>
  );
}

export default RootLayout;
