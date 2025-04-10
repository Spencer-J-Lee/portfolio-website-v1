interface DelayObj {
  nav: Record<number, number>;
  hero: Record<number, number>;
  social: number;
  particles: number;
}

/**
 * Calculates delays for elements above-the-fold on initial page load
 * to create an animation domino effect.
 */
export const useAnimationDelay = (res: "desktop" | "mobile" = "desktop") => {
  const genDelay = () => {
    const navElsCount = res === "desktop" ? 5 : 2;
    const heroElsCount = 5;
    const siblingDelay = 100;
    const sectionDelay = 600;
    const delay: DelayObj = {
      nav: {},
      hero: {},
      social: 0,
      particles: 0,
    };

    let curr = 100;
    for (let i = 0; i < navElsCount; i++) {
      delay.nav[i + 1] = curr;
      if (i < navElsCount) curr += siblingDelay;
    }

    curr += sectionDelay;
    for (let i = 0; i < heroElsCount; i++) {
      delay.hero[i + 1] = curr;
      if (i < heroElsCount) curr += siblingDelay;
    }

    curr += sectionDelay;
    delay.social = curr;

    curr += 300;
    delay.particles = curr;

    return delay;
  };

  const toMSStr = (num: number) => {
    return `${num}ms`;
  };

  return {
    delay: genDelay(),
    toMSStr,
  };
};
