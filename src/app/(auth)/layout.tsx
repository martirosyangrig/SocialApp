import WelcomeFooter from "@/components/Welcome/Footer";
import WelcomeNavbar from "@/components/Welcome/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WelcomeNavbar />
      {children}
      <WelcomeFooter />
    </div>
  );
}
