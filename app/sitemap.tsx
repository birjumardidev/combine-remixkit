import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.remixkit.in";

// Removed "admin" from static pages to prevent indexing sensitive pages
const staticPages = ["", "prompts"];

const categories = [
  "photorealism",
  "minimalist",
  "portrait",
  "landscape",
  "concept-art",
  "vintage",
  "cinematic",
  "abstract",
  "editorial",
  "cartoon-chibi",
];

const promptSlugs = [
  "bioluminescent-fantasy-forest-prompt",
  "midnight-noir-fashion-editorial-prompt",
  "vaporwave-cyberpunk-cityscape-prompt",
  "ethereal-high-fashion-portrait-prompt",
  "mechanical-steampunk-dragon-prompt",
  "mystical-astral-temple-prompt",
  "gothic-cathedral-ruins-prompt",
  "sunset-desert-landschaft-prompt",
  "hyperrealistic-food-photography-prompt",
  "retro-futuristic-racing-prompt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Root & Static Pages
  const staticUrls = staticPages.map((path) => ({
    url: path ? `${siteUrl}/${path}` : siteUrl,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: 1.0,
  }));

  // Category Pages
  const categoryUrls = categories.map((category) => ({
    url: `${siteUrl}/prompts/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual Prompt Pages
  const promptUrls = promptSlugs.map((slug) => ({
    url: `${siteUrl}/prompts/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...categoryUrls, ...promptUrls];
}