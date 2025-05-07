import { api } from "@/api";
import { redirect } from "next/navigation";

async function getRecruitmentInfo({
  id,
}: {
  id: number;
}): Promise<{ status: number }> {
  try {
    const { status } = await api.post(`/recruitment-notices/${id}/click`);
    return {
      status,
    };
  } catch (error) {
    console.error("Failed to fetch recruitment info:", error);
    return { status: 500 };
  }
}

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id: number; path: string }>;
}) {
  const { id, path } = await searchParams;
  const { status } = await getRecruitmentInfo({
    id,
  });

  if (status === 500 || !id || !path) {
    return redirect("/error");
  }

  redirect(atob(path));
}

export default Page;
