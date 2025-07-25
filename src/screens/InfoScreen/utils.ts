import { PACK_IMAGES, SKIN_IMAGES, WALLPAPER_IMAGES } from 'const/images';
import { SCREENS } from 'const/screens';

export const getImagesWithType = (type: SCREENS) => {
  switch (type) {
    case SCREENS.SKINS:
      return SKIN_IMAGES;
    case SCREENS.PACKS:
      return PACK_IMAGES;
    case SCREENS.WALLPAPERS:
      return WALLPAPER_IMAGES;
    default:
      return SKIN_IMAGES;
  }
};

export const getFileExtension = (type: SCREENS): string => {
  switch (type) {
    case SCREENS.SKINS:
      return '.png';
    case SCREENS.PACKS:
      return '.mcpack';
    case SCREENS.WALLPAPERS:
      return '.png';
    default:
      return '.mcaddon';
  }
};
