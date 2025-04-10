import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimationDelay } from "../hooks/useAnimationDelay";

export const SocialLinksMobile = () => {
  const { delay, toMSStr } = useAnimationDelay("mobile");

  return (
    <ul
      className="animate-fade-up mt-6 flex items-center gap-6 lg:hidden"
      style={{ animationDelay: toMSStr(delay.social) }}
    >
      <li>
        <a
          href="https://www.github.com/Spencer-J-Lee"
          target="_blank"
          className="hover:text-highlight text-primary block transition-colors"
          aria-label="Github Link"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl"
            color="inherit"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/spenjlee/"
          target="_blank"
          className="hover:text-highlight text-primary block transition-colors"
          aria-label="LinkedIn Link"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl"
            color="inherit"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.codepen.io/MisterJibbs"
          target="_blank"
          className="hover:text-highlight text-primary block transition-colors"
          aria-label="CodePen Link"
        >
          <FontAwesomeIcon
            icon={faCodepen}
            className="text-3xl"
            color="inherit"
          />
        </a>
      </li>
    </ul>
  );
};
