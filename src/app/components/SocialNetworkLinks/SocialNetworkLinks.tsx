import { socialNetworkLinksT } from "@/app/consts/consts";
import SocialNetworkLink from "../SocialNetworkLink/SocialNetworkLink";

interface SocialNetworkLinkSProps {
  array: socialNetworkLinksT[];
}

const SocialNetworkLinks = ({ array }: SocialNetworkLinkSProps) => {
  return (
    <ul>
      {array.map((item) => {
        return <SocialNetworkLink key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default SocialNetworkLinks;
