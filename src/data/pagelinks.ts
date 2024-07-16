export type PageLinkType = {
  name: string;
  to: string;
};

const pagesLinks = [
  {
    name: "home",
    to: "",
  },
  {
    name: "about_me",
    to: "/about",
  },
  {
    name: "projects",
    to: "/projects",
  },
  {
    name: "articles",
    to: "/articles",
  },
  {
    name: "contact",
    to: "/contact",
  },
] as PageLinkType[];

export default pagesLinks;
