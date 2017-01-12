export function windowSize () {
  const breakpoints = {
    desktopLg: 1400,
    desktopSm: 1200,
    tabletLg: 1040,
    tabletMd: 991,
    tabletSm: 840,
    mobileLg: 767,
    mobileSm: 540
  };

  const parser = b => typeof (b) === 'string' ? breakpoints[b] : b;

  const comparisons = {
    isGreaterThan: breakpoint => window.innerWidth > parser(breakpoint),
    isLessThan: breakpoint => window.innerWidth < parser(breakpoint),
    is: breakpoint => window.innerWidth === parser(breakpoint),
    breakpoints
  };

  return comparisons;
}
