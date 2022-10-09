import { Grid } from "antd";

const { useBreakpoint } = Grid;

const screens = useBreakpoint();

// < 576px
export const isMobilePortrait = screens.xs;

// ≥ 576px
export const isMobileLandscape = screens.sm;

// ≥ 768px
export const isTablet = screens.md;

// ≥ 992px
export const isDesktop = screens.lg;

// ≥ 1200px
export const isProjector = screens.xl;
