import Logo from "components/logo";
import { sidebarItems } from "utils/data/sidebar";
import {
  UserData,
  SidebarBlock,
  SidebarItemsWrap,
  SidebarPartition,
  AvatarWrap,
} from "styles/components/sidebar";
import SidebarItem from "components/sidebar-item";
import ImageWrapper from "common/image-wrapper";
import Images from "assets/images";

const { avatar } = Images;

function Sidebar() {
  return (
    <SidebarBlock>
      <Logo />
      <SidebarItemsWrap>
        {sidebarItems.links.map((data, index) => {
          return <SidebarItem data={data} key={index} />;
        })}
        <SidebarPartition>Others 1</SidebarPartition>
        {sidebarItems.others1.map((data, index) => {
          return <SidebarItem data={data} key={index} />;
        })}
        <SidebarPartition>Others 2</SidebarPartition>
        {sidebarItems.others2.map((data, index) => {
          return <SidebarItem data={data} key={index} />;
        })}
        <UserData>
          <AvatarWrap>
            <ImageWrapper src={avatar} width={32} height={32} alt="Logo" />
          </AvatarWrap>
            <div>Frank Adeleye</div>
        </UserData>
      </SidebarItemsWrap>
    </SidebarBlock>
  );
}

export default Sidebar;
