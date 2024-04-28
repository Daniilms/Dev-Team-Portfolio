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
