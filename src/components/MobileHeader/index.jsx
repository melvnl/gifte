import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useEffect } from "react";
import styles from './mobile.module.css';
import { useGlobalState } from "@/context/GlobalStateProvider";

const links = [
  { href: "/", text: "Restart Experience" },
  { href: "https://www.gifteflorist.com", text: "Visit Gifte Florist" },
  { href: "https://www.circlescreative.co", text: "Visit Circles Creative" },
];

export default function MobileMenu() {
  const { state, setState } = useGlobalState();
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    state.isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  const handleLinkClick = (index) => {
    if (index === 0) {
      window.location.reload();
    }
  };

  function toggleMenu() {
    if (state.isMenuOpen) {
      setState((prev) => ({
        ...prev,
        isMenuOpen: false
      }));
      document.body.style.overflow = "";
    } else {
      setState((prev) => ({
        ...prev,
        isMenuOpen: true
      }));
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={state.isMenuOpen} />
        <CrossIcon data-hide={!state.isMenuOpen} />
      </button>
      {isMenuMounted && (
        <div className={cn(styles.menuWrapper, { [styles.menuWrapperOpen]: state.isMenuOpen })}>
          <div
            className={cn(styles.overlay, { [styles.overlayOpen]: state.isMenuOpen })}
            onClick={toggleMenu}
          ></div>
          <ul
            className={cn(
              styles.menu,
              "flex flex-col font-RecklessNueu absolute border-t border-[#E7E7E7] top-14 bg-white px-5 py-3",
              isMenuRendered && styles.menuRendered
            )}
          >
            {links.map(({ href, text }, index) => (
              <li
                key={text}
                className="text-gray text-sm font-semibold"
                onClick={() => handleLinkClick(index)}
                style={{ transitionDelay: "150ms" }}
              >
                <Link href={href}>
                  <div className="flex w-auto pb-4">{text}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
