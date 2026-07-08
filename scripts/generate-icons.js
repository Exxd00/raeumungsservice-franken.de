const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const svgPath = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

// Create a simple SVG icon
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#22955b"/>
  <path d="M256 120 L136 220 L156 220 L156 360 L356 360 L356 220 L376 220 Z" fill="white"/>
  <rect x="216" y="260" width="80" height="100" rx="4" fill="#22955b"/>
  <rect x="176" y="240" width="30" height="40" rx="4" fill="#22955b"/>
  <rect x="306" y="240" width="30" height="40" rx="4" fill="#22955b"/>
</svg>`;

// Write SVG file
fs.writeFileSync(path.join(outputDir, 'icon.svg'), svgIcon);

async function generateIcons() {
  console.log('Generating PWA icons...');

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);

    await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`Generated: icon-${size}x${size}.png`);
  }

  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
