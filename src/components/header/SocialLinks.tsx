import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialLinks = () => {
  return (
    <section>
      <ul>
        <li>
          <a href="https://www.github.com/Spencer-J-Lee" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/spenjlee/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.codepen.io/MisterJibbs" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
      </ul>
    </section>
  );
};
