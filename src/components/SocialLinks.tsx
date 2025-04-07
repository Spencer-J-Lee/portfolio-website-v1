import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLinks = () => {
  return (
    <aside className="fixed bottom-0 left-7 flex flex-col items-center gap-7 lg:left-12">
      <ul className="flex flex-col items-center gap-5">
        <li>
          <a href="https://www.github.com/Spencer-J-Lee" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="text-primary transition-colors hover:text-highlight"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/spenjlee/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="text-primary transition-colors hover:text-highlight"
            />
          </a>
        </li>
        <li>
          <a href="https://www.codepen.io/MisterJibbs" target="_blank">
            <FontAwesomeIcon
              icon={faCodepen}
              size="lg"
              className="text-primary transition-colors hover:text-highlight"
            />
          </a>
        </li>
      </ul>

      <div className="h-28 w-min border-l-2 border-primary" />
    </aside>
  );
};
