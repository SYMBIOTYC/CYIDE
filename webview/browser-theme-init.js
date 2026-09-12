// This blocking head script resolves system appearance before the first stylesheet paints.
// AppearanceProvider owns changes after hydration.
{
  const root = document.documentElement;
  const preference = root.dataset.appearanceTheme;
  if (preference === "light" || preference === "dark") {
    root.dataset.theme = preference;
  } else {
    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
  }
}
