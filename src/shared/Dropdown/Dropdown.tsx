import React, { useEffect, useRef, useState } from 'react';
import styles from './dropdown.sass';
import ReactDOM from "react-dom";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [offset, setOffset] = useState({ top: '0px', left: '0px' });
  const refMenu = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);

  const node = document.querySelector('#dropdown-root');
  if (!node) return null;

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
  useEffect(() => {
    if (refMenu.current?.style) {
      refMenu.current.style.top = offset.top;
      refMenu.current.style.left = offset.left;
    }
  }, [offset]);

  const handleOpen = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
      const
        { top, left } = document.body.getBoundingClientRect(),
        btn =  currentTarget.getBoundingClientRect();

      btn && setOffset({ top: `${btn.top - top}px`, left: `${btn.left - left}px` });

      if (isOpen === undefined) {
        setIsDropdownOpen(!isDropdownOpen);
      }
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
      <div ref={refBtn} onClick={handleOpen}>
        {button}
      </div>
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
