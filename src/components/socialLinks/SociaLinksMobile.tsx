import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socialData } from "./data";
import { Fade } from "../common/fades/Fade";

export const SocialLinksMobile = () => {
  return (
    <Fade direction="up" index={15} className="lg:hidden">
      <ul className="mt-6 flex items-center gap-6">
        {socialData.map(({ link, ariaLabel, icon }) => (
          <li key={link}>
            <a
              href={link}
              target="_blank"
              className="hover:text-highlight text-primary block transition-colors"
              aria-label={ariaLabel}
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-4xl"
                color="inherit"
              />
            </a>
          </li>
        ))}
      </ul>
    </Fade>
  );
};
