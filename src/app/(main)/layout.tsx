import MainNavbar from "@/components/Navbar";
import WelcomeFooter from "@/components/Welcome/Footer";

export default function MainLayout({
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
      <MainNavbar />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {children}
      </div>
      <WelcomeFooter />
    </div>
  );
}
