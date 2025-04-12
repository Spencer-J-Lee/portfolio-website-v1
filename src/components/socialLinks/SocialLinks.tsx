import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialData } from "./data";
import { Fade } from "../common/fades/Fade";

export const SocialLinks = () => {
  return (
    <aside className="fixed bottom-0 left-12 hidden lg:block">
      <Fade direction="up" index={20}>
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center gap-1">
            {socialData.map(({ link, ariaLabel, icon }) => (
              <li key={link}>
                <a
                  href={link}
                  target="_blank"
                  className="hover:text-highlight text-primary block p-2 transition-colors"
                  aria-label={ariaLabel}
                >
                  <FontAwesomeIcon icon={icon} size="lg" color="inherit" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex h-28 items-end gap-1">
            <div className="border-accent h-full border-l" />
            <div className="border-accent/70 h-2/3 border-l border-dashed" />
          </div>
        </div>
      </Fade>
    </aside>
  );
};
