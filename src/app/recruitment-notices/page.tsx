import { api } from "@/api";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type RecruitmentMetaType = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  content?: string;
};

async function extractMetadata(
  html: string
): Promise<RecruitmentMetaType | null> {
  try {
    const getMetaContent = (name: string) => {
      const regex = new RegExp(
        `<meta[^>]*(?:name|property)="${name}"[^>]*content="([^"]*)"`,
        "i"
      );
      const match = html.match(regex);
      return match?.[1] || "";
    };

    const bodyContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || "";
    const cleanContent = bodyContent
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return {
      title: html.match(/<title>(.*?)<\/title>/i)?.[1] || "",
      description: getMetaContent("description"),
      ogTitle: getMetaContent("og:title"),
      ogDescription: getMetaContent("og:description"),
      ogImage: getMetaContent("og:image"),
      ogUrl: getMetaContent("og:url"),
      content: cleanContent,
    };
  } catch (error) {
    console.error("Failed to extract metadata:", error);
    return null;
  }
}

async function getRecruitmentInfo({
  id,
}: {
  id: number;
}): Promise<{ data: string; url: string }> {
  try {
    const response = await api.get(`/recruitment-notices/${id}/redirect`);
    const redirectUrl = response?.request?.res?.responseUrl;

    return {
      data: response.data,
      url: redirectUrl || "",
    };
  } catch (error) {
    console.error("Failed to fetch recruitment info:", error);
    return { data: "", url: "" };
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  const { data, url } = await getRecruitmentInfo({
    id,
  });

  if (!data || !url) {
    return {
      title: "채용공고를 찾을 수 없습니다",
    };
  }

  const metadata = await extractMetadata(data);

  return {
    title: metadata?.title || "채용공고",
    description: metadata?.description || metadata?.content?.substring(0, 200),
    openGraph: {
      title: metadata?.ogTitle || metadata?.title,
      description: metadata?.ogDescription || metadata?.description,
      images: metadata?.ogImage ? [metadata?.ogImage] : undefined,
      url: metadata?.ogUrl || url,
    },
    keywords: ["채용", "공고", "취업", "구인", "구직"].join(", "),
  };
}

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id: number }>;
}) {
  const { id } = await searchParams;
  const { data, url } = await getRecruitmentInfo({
    id,
  });

  if (!data || !url) {
    return redirect("/error");
  }

  const metadata = await extractMetadata(data);
  if (!metadata) {
    redirect(url);
  }

  redirect(url);
}

export default Page;
