// src/utils/importImages.js

// Import images from the fabrication folder
const fabricationImages = import.meta.glob('../assets/images/fabrication/*.(jpg|png|jpe?g|svg)');
// Map the folder name to its imports
const folderImports = {
  fabrication: fabricationImages,
  // Add other folders as needed
};

async function importImagesFromFolder(folderName) {
  try {
    const importImages = folderImports[folderName];
    if (!importImages) {
      throw new Error(`No images found for folder: ${folderName}`);
    }
    const images = {};

    // Import all images from the specified folder
    for (const path in importImages) {
      const module = await importImages[path]();
      images[path] = module.default;
    }
    return images;
  } catch (error) {
    console.error(`Error importing images from folder ${folderName}:`, error);
    return {};
  }
}

export default importImagesFromFolder;