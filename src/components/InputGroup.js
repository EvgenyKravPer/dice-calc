import styles from "./InputGroup.module.css";

export default function InputGroup({ children }) {
  return <div className={styles["input-group"]}>{children}</div>;
}
