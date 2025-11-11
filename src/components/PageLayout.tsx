import { CSSProperties, PropsWithChildren, useEffect, useMemo } from "react";

type PageLayoutProps = PropsWithChildren<{
  backgroundImage?: string;
  overlayColor?: string;
  backgroundColor?: string;
  contentAlignment?: "center" | "top";
  restrictOverflow?: boolean;
}>;

const CRITICAL_GIFS = ["/tracks_file.gif", "/devin_file.gif", "/WarOfCards%20(2).png"] as const;

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
  backgroundImage,
  overlayColor,
  backgroundColor,
  contentAlignment = "center",
  restrictOverflow = false
}: PageLayoutProps) => {
  useEffect(() => {
    const assetsToLoad = Array.from(
      new Set(
        [...CRITICAL_GIFS, backgroundImage].filter(
          (asset): asset is string => typeof asset === "string" && asset.length > 0
        )
      )
    );

    Promise.all(assetsToLoad.map(preloadImage)).catch(() => undefined);
  }, [backgroundImage]);

  const layoutClassName = useMemo(() => {
    const classes = ["page-layout"];
    classes.push(`page-layout--${contentAlignment}`);
    if (restrictOverflow) {
      classes.push("page-layout--restrict-overflow");
    }
    return classes.join(" ");
  }, [contentAlignment, restrictOverflow]);

  const customProperties = useMemo(() => {
    const styles: CSSProperties & {
      ["--page-background-image"]?: string;
      ["--page-overlay-color"]?: string;
      ["--page-background-color"]?: string;
    } = {
      "--page-background-image": backgroundImage ? `url("${backgroundImage}")` : "none"
    };

    if (backgroundImage) {
      if (overlayColor) {
        styles["--page-overlay-color"] = overlayColor;
      }
    } else {
      styles["--page-overlay-color"] = overlayColor ?? "transparent";
    }

    if (backgroundColor) {
      styles["--page-background-color"] = backgroundColor;
    }

    return styles;
  }, [backgroundColor, backgroundImage, overlayColor]);

  return (
    <div
      className={layoutClassName}
      style={customProperties}
    >
      <div className="page-layout__content">{children}</div>
    </div>
  );
};

export default PageLayout;

