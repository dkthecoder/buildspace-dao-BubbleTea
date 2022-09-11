import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x122E05caAAf2c849D25E6De3C4EC0D292684C58A");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fresh Milk Tea Boba",
        description: "This NFT will give you access to BubbleTeaDAO!",
        image: readFileSync("scripts/assets/Boba-Fresh-Milk-Tea-01.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();