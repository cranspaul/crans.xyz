import { CSSProperties, PropsWithChildren, useEffect, useMemo, useState } from "react";

import Loader from "./Loader";

type PageLayoutProps = PropsWithChildren<{
  backgroundImage?: string;
  overlayColor?: string;
  loaderMessage?: string;
  contentAlignment?: "center" | "top";
  restrictOverflow?: boolean;
}>;

const DEFAULT_BACKGROUND = "/index.gif";

const PageLayout = ({
  children,
  backgroundImage = DEFAULT_BACKGROUND,
  overlayColor = "rgba(0, 0, 255, 0.3)",
  loaderMessage = "Loading...",
  contentAlignment = "center",
  restrictOverflow = false
}: PageLayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const layoutClassName = useMemo(() => {
    const classes = ["page-layout"];
    classes.push(`page-layout--${contentAlignment}`);
    if (restrictOverflow) {
      classes.push("page-layout--restrict-overflow");
    }
    return classes.join(" ");
  }, [contentAlignment, restrictOverflow]);

  return (
    <div
      className={layoutClassName}
      style={
        {
          "--page-background-image": `url("${backgroundImage}")`,
          "--page-overlay-color": overlayColor
        } as CSSProperties
      }
    >
      {isLoading && <Loader message={loaderMessage} />}
      <div className="page-layout__content">{children}</div>
    </div>
  );
};

export default PageLayout;

