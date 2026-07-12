import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const INPUT = "./src/assets";

const QUALITY = 82;

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {

        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await walk(fullPath);
            continue;
        }

        const ext = path.extname(entry.name).toLowerCase();

        if (![".jpg", ".jpeg", ".png"].includes(ext))
            continue;

        const output = fullPath.replace(ext, ".webp");

        console.log(`Converting ${fullPath}`);

        await sharp(fullPath)
            .webp({
                quality: QUALITY,
                effort: 6
            })
            .toFile(output);
    }
}

await walk(INPUT);

console.log("Done!");