export const headerLinksList: HeaderLinkT[] = [
  {
    linkName: "Home",
    id: 1,
  },
  {
    linkName: "Projects",
    id: 2,
  },
  {
    linkName: "Pages",
    id: 3,
  },
  {
    linkName: "Contact",
    id: 4,
  },
];
export const socialNetworkLinks: socialNetworkLinksT[] = [
  {
    url: "1",
    id: 1,
  },
  {
    url: "2",
    id: 2,
  },
  {
    url: "3",
    id: 3,
  },
];
export type socialNetworkLinksT = {
  url: string;
  id: number;
};
export type HeaderLinkT = {
  linkName: string;
  id: number;
};
export const capabilitiesCardList: capabilitiesCardListT[] = [
  {
    capabilitiesCardText: "Web Design and Development",
    capabilitiesCardImageSrc: "/WDD-background-image.jpeg",
    id: "1",
    capabilitiesCardSvgSrc: "/cup.svg",
    capabilitiesCardSvgAlt: "cup",
  },
  {
    capabilitiesCardText: "Brand Strategy Accelerator",
    capabilitiesCardImageSrc: "/brand-background-image.jpeg",
    id: "12",
    capabilitiesCardSvgSrc: "/settings.svg",
    capabilitiesCardSvgAlt: "settings",
  },
  {
    capabilitiesCardText: "Packaging and Brand Identity",
    capabilitiesCardImageSrc: "/packaging-background-image.jpeg",
    id: "13",
    capabilitiesCardSvgSrc: "/anchor.svg",
    capabilitiesCardSvgAlt: "anchor",
  },
  {
    capabilitiesCardText: "Content Production",
    capabilitiesCardImageSrc: "/content-background-image.jpeg",
    id: "14",
    capabilitiesCardSvgSrc: "/book.svg",
    capabilitiesCardSvgAlt: "book",
  },
];

export type capabilitiesCardListT = {
  capabilitiesCardText: string;
  capabilitiesCardImageSrc: string;
  id: string;
  capabilitiesCardSvgSrc: string;
  capabilitiesCardSvgAlt: string;
};
