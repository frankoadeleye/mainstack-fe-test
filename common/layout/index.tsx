import { LayoutBlock } from "styles/common/layout";

type layoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: layoutProps) {
  return <LayoutBlock>{children}</LayoutBlock>;
}

export default Layout;
