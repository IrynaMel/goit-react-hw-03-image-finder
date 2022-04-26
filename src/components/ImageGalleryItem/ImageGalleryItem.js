import { Li, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <Li>
      <Img src={src} alt={alt} />
    </Li>
  );
};

export default ImageGalleryItem;
