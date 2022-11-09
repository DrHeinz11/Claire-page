export type dataArray = Array<{ imgUrl: string; imgAlt: string }>;

export type DataCarrer = Array<{
  id?: number;
  imgUrl: string;
  imgAlt: string;
  route: string;
  heading: string;
  paragraph: string;
}>;

export type footerLinks = { route: string; title: string };
export type FooterData = Array<{ heading: string; links: Array<footerLinks> }>;

export type handleScrollTop = () => void;
