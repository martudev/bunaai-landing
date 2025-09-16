import { useState } from "react";
import { motion } from "motion/react";
import styles from "./NavItems.module.scss";

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  onItemClick?: () => void;
}

export const NavItems = ({ items, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={styles.container}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={styles.button}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div layoutId="hovered" className={styles.button_hovered} />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
