import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "6hvlu4wx",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skuEfN2l56IpFL86TyrlhqGG8IFLEL7igRM5HSLScbOHlgzcE2sHcXpwHhQJtiiJmvOtqGWv5yZiV5vwNxYnAl8MD5G2ZemiJU3muMOp4kowZ82MmqisWaIm4A0FXAwUkJ8LPP1BstzyW8Xyev5cLAq2Peg0B12ewYfbzPVP5LjbGBU3CPMP"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

