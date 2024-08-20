import { useMedia } from "react-use";

export const useIsPc = (): boolean => useMedia("(min-width: 769px)", false);
