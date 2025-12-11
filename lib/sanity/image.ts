import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/lib/sanity/client";
import type { SanityImage } from "@/lib/types/news";

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImage) => builder.image(source);
