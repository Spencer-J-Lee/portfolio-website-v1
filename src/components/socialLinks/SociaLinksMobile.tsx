import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimationDelay } from "../navbar/hooks";
import { socialData } from "./data";

export const SocialLinksMobile = () => {
  const { delay, toMSStr } = useAnimationDelay("mobile");

  return (
    <ul
      className="animate-fade-up mt-6 flex items-center gap-6 opacity-0 lg:hidden"
      style={{ animationDelay: toMSStr(delay.social) }}
    >
      {socialData.map(({ link, ariaLabel, icon }) => (
        <li key={link}>
          <a
            href={link}
            target="_blank"
            className="hover:text-highlight text-primary block transition-colors"
            aria-label={ariaLabel}
          >
            <FontAwesomeIcon icon={icon} className="text-4xl" color="inherit" />
          </a>
        </li>
      ))}
    </ul>
  );
};
