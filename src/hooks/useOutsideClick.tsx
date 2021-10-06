import { useEffect } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  handler: () => void,
  isActive: boolean
): void {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler, isActive, ref]);
}
