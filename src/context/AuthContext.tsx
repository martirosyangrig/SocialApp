"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      router.push("/home");
    } else {
      router.push("/welcome");
    }
  }, []);

  return <div style={{height: '100%'}}>{children}</div>;
}
