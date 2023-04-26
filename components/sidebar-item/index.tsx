import { useRouter } from "next/router";
import {
  SidebarItemBlock,
  SBItemText,
  IconWrap,
} from "styles/components/sidebar";

type SBItemProps = {
  data: {
    name: string;
    link: string;
    icon: HTMLImageElement | React.ReactNode;
  };
};

function SidebarItem({ data }: SBItemProps) {
  const router = useRouter();

  const { name, icon, link } = data;
  return (
    <SidebarItemBlock
      href={link}
      className={router.pathname === link ? "active" : ""}>
      <IconWrap>{icon}</IconWrap>
      <SBItemText>{name}</SBItemText>
    </SidebarItemBlock>
  );
}

export default SidebarItem;
