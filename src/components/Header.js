import styles from "./Header.module.css";

import logo from "../assets/jenga-from-g.jpeg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Dice Calculator</h1>
    </header>
  );
}
