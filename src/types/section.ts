export type FeatItem = {
  id: number;
  title: string;
  desc: string;
}[];

export type FeatureFunc = {
  title: string;
  FeatList: FeatItem;
  bgImag: string;
  url: string;
};
