import { ButtonHTMLAttributes } from "react";
import styles from "@/styles/Button.module.scss";
import { FaDiscord, FaGoogle, FaOpera } from "react-icons/fa";
import { ChildrenError } from "@/errors/children";
import { FiFeather } from "react-icons/fi";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "buttonPost"
    | "buttonDelete"
    | "buttonUpdate"
    | "standby"
    | "default";
  icon?: Platform;
}

type Platform = "discord" | "google" | "opera" | "feather";

const iconIcons: { [key in Platform]: JSX.Element } = {
  discord: <FaDiscord className={styles.icon} />,
  google: <FaGoogle className={styles.icon} />,
  opera: <FaOpera className={styles.icon} />,
  feather: <FiFeather />,
};

export function Button({
  color = "buttonPost",
  icon,
  children,
  ...rest
}: ButtonProps) {
  let buttonClassName = styles[color];
  let iconElement = null;

  if (icon && iconIcons[icon]) {
    buttonClassName = styles[icon];
    iconElement = iconIcons[icon];
  }

  if (children && iconElement) {
    throw new ChildrenError();
  }

  return (
    <div
      className={iconElement ? styles.iconContainer : styles.buttonContainer}
    >
      <button className={buttonClassName ?? iconElement} {...rest}>
        {children}
        <div>{iconElement}</div>
      </button>
    </div>
  );
}
