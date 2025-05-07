import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { api } from "@/api";
import { Suspense } from "react";
import TabSection from "@/components/tab/Section";

async function getCompanyList() {
  try {
    const { data } = await api.get("/companies");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { companies } = await getCompanyList();

  return (
    <section>
      <article className="content-wrapper">
        <div>
          <Image
            src={logo}
            alt="네카라쿠배 공고 서비스 공식 로고"
            layout="responsive"
          />
          <Suspense>
            <TabSection data={companies} />
          </Suspense>
          {children}
        </div>
      </article>
    </section>
  );
}
