import AsideL from "@/components/AsideL";
import AsideR from "@/components/AsideR";
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
          display: "flex",
          flex: 1,
          marginTop: "82px",
          backgroundColor: "white",
        }}
      >
        <AsideL />
        {children}
        <AsideR />
      </div>
      <WelcomeFooter />
    </div>
  );
}
