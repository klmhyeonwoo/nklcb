import styles from "@/styles/components/tab.module.scss";

type TabType = {
  label: string;
  value: string;
  index: number;
  active: number;
} & React.HTMLAttributes<HTMLDivElement>;

function Tab({ label, value, index, active, ...props }: TabType) {
  return (
    <div
      className={styles.tab}
      data-value={value}
      role="tab"
      aria-selected={active === index}
      {...props}
    >
      <span>{label}</span>
    </div>
  );
}

export default Tab;
