import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.sass';
import ReactDOM from "react-dom";
import { getElementOffset } from "../../utils/js/getElementOffset";
import { setElementOffset } from "../../utils/js/setElementOffset";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const noop = () => {};

export function Dropdown({ button, children, isOpen, onOpen = noop, onClose = noop }: IDropdownProps) {
  const
    [isDropdownOpen, setIsDropdownOpen] = useState(isOpen),
    [offset, setOffset] = useState<[number, number]>([0, 0]),
    refMenu = useRef<HTMLDivElement>(null),
    refBtn = useRef<HTMLDivElement>(null);

  const node = document.querySelector('#dropdown-root');
  if (!node) return null;

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  useEffect(() => setElementOffset(refMenu, offset), [offset]);

  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    currentTarget && setOffset(getElementOffset(currentTarget));
    !isOpen && setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    function handleClick({ target }: MouseEvent) {
      if (target instanceof Node && !refMenu.current?.contains(target) && !refBtn.current?.contains(target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={refBtn} onClick={handleOpen}>{button}</div>
      {isDropdownOpen && ReactDOM.createPortal((
        <div ref={refMenu} className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      ), node)}
    </div>
  );
}
