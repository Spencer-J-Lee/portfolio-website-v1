import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLinks = () => {
  return (
    <aside className="fixed bottom-0 left-7 flex flex-col items-center lg:left-12">
      <ul className="flex flex-col items-center gap-1">
        <li>
          <a
            href="https://www.github.com/Spencer-J-Lee"
            target="_blank"
            className="hover:text-highlight text-primary block p-2 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="inherit" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/spenjlee/"
            target="_blank"
            className="hover:text-highlight text-primary block p-2 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="inherit" />
          </a>
        </li>
        <li>
          <a
            href="https://www.codepen.io/MisterJibbs"
            target="_blank"
            className="hover:text-highlight text-primary block p-2 transition-colors"
          >
            <FontAwesomeIcon icon={faCodepen} size="lg" color="inherit" />
          </a>
        </li>
      </ul>

      <div className="mt-5 flex h-28 items-end gap-1">
        <div className="border-accent h-full border-l" />
        <div className="border-accent/70 h-2/3 border-l border-dashed" />
      </div>
    </aside>
  );
};
