import Header from "@/components/header";

type DashbardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashbardLayoutProps) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;
