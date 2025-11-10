import { CSSProperties, PropsWithChildren, useEffect, useMemo, useState } from "react";


type PageLayoutProps = PropsWithChildren<{
  backgroundImage?: string;
  overlayColor?: string;
  loaderMessage?: string;
  contentAlignment?: "center" | "top";
  restrictOverflow?: boolean;
}>;


const CRITICAL_GIFS = [DEFAULT_BACKGROUND, "/tracks_file.gif", "/devin_file.gif"] as const;

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new Image();
    const finalize = () => resolve();

    image.onload = finalize;
    image.onerror = finalize;
    image.src = src;

    if (image.complete) {
      finalize();
    }
  });

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
    let isMounted = true;

    const assetsToLoad = Array.from(new Set([backgroundImage, ...CRITICAL_GIFS]));

    Promise.all(assetsToLoad.map(preloadImage)).finally(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [backgroundImage]);

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
      {isLoading />}
      <div className="page-layout__content">{children}</div>
    </div>
  );
};

export default PageLayout;

