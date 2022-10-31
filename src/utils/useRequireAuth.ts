import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useRequireAuth() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (
      !session &&
      typeof session != "undefined" &&
      router.asPath !== "/manager" &&
      router.asPath.includes("manager")
    ) {
      router.push("/manager");
    }
  }, [session, router]);

  return session;
}
