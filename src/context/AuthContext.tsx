"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);

    if (sessionStorage.getItem("token")) {
      router.push("/home");
    } else if (pathname !== "/signin" && pathname !== "/signup") {
      router.push("/welcome");
    }
  }, []);

  return <div style={{ height: "100%" }}>{children}</div>;
}
