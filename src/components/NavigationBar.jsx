import React from "react";
import { HiArrowLeft, HiHome } from "react-icons/hi";
import Link from "next/link";

import styles from "./../styles/index/components.module.css";

export default function NavigationBar({ tituloActividad }) {
  const handleClick = () => {
    window.history.back();
  };

  const recargar = () => {
    window.location.reload();
  };

  return (
    <div className={styles.NavigationBarContainer}>
      <div onClick={handleClick}>
        <HiArrowLeft className={styles.NavigationBar__icon} />
      </div>
      <h4 onClick={recargar}>{tituloActividad}</h4>
      <Link href="/">
        <HiHome className={styles.NavigationBar__icon} />
      </Link>
    </div>
  );
}
