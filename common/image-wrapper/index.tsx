import { ImageWrapperBlock, StyledImage } from "styles/common/image-wrapper";

type IWProp = {
  src: any;
  alt?: string;
  width?: number;
  height?: number;
};

function ImageWrapper({ src, alt, height = 60, width = 60 }: IWProp) {
  return (
    <ImageWrapperBlock>
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
      />
    </ImageWrapperBlock>
  );
}

export default ImageWrapper;
