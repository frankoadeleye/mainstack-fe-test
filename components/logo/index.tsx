import Images from "assets/images";
import ImageWrapper from "common/image-wrapper";
import { LogoBlock } from "styles/components/logo";

const { logo } = Images;

function Logo() {
  return (
    <LogoBlock>
      <ImageWrapper src={logo} alt="Logo" />
    </LogoBlock>
  );
}

export default Logo;
