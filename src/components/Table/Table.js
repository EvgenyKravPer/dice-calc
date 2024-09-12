import styles from "./Table.module.css";

export default function Table({ data }) {
  if (data.length === 0)
    return (
      <p className={`${styles["base-style"]} ${styles["no-result"]}`}>
        No options calculated yet.
      </p>
    );

  return (
    <table className={`${styles["base-style"]} ${styles["result"]}`}>
      <thead>
        <tr>
          <th>Value</th>
          <th>Path</th>
        </tr>
      </thead>
      {data.map((result) => {
        return (
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>{result.value}</td>
              <td>{result.path}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
