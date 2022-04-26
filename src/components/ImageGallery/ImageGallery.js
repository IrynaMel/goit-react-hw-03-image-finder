import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import ImageGalleryStyled from './ImageGallery.styled';

const ImageGallery = ({ imagesList }) => {
  return (
    <ImageGalleryStyled>
      {imagesList.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} src={webformatURL} alt={tags} />;
      })}
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
