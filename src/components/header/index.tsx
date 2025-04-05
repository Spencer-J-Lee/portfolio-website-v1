import { BasicInfo } from "./BasicInfo";
import { Nav } from "./Nav";
import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <header>
      <section>
        <BasicInfo />
        <Nav />
      </section>

      <SocialLinks />
    </header>
  );
};
