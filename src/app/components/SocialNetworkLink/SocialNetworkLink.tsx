import { socialNetworkLinksT } from "@/app/consts/consts";

interface SocialNetworkLinkProps {
  item: socialNetworkLinksT;
}

const SocialNetworkLink = ({ item }: SocialNetworkLinkProps) => {
  return <a className="social-link">{item.url}</a>;
};
export default SocialNetworkLink;
