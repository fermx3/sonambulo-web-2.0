export const createBlurDataURL = (width: number = 8, height: number = 8, color: string = "#1a1a1a"): string => {
  const canvas = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${color}" />
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(canvas).toString('base64')}`;
};

// Placeholders más sutiles y específicos
export const logoBlurDataURL = createBlurDataURL(8, 8, "#0f0f0f");
export const heroBlurDataURL = createBlurDataURL(8, 8, "#18181b"); // zinc-900 to match bg
export const carouselBlurDataURL = createBlurDataURL(8, 8, "#6b7280"); // neutral gray
export const decorativeBlurDataURL = createBlurDataURL(8, 8, "transparent"); // transparent for decorative elements
