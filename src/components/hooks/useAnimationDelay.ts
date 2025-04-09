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
export const useAnimationDelay = () => {
  const genDelay = () => {
    const navElsCount = 5;
    const heroElsCount = 5;
    const delay: DelayObj = {
      nav: {},
      hero: {},
      social: 0,
      particles: 0,
    };

    let curr = 0;
    for (let i = 0; i < navElsCount; i++) {
      curr += 100;
      delay.nav[i + 1] = curr;
    }

    curr += 500;
    for (let i = 0; i < heroElsCount; i++) {
      curr += 100;
      delay.hero[i + 1] = curr;
    }

    curr += 600;
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
