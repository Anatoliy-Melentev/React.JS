import * as React from "react";

export interface IItem {
  id: string;
  text: string | React.ReactNode;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  //onClick: (id: string) => void;
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {
        list.map(({ As = 'div', text, onClick = noop, className, id, href }) => (
          <As className={className} onClick={() => onClick(id)} key={id} href={href}>{text}</As>
        ))
      }
    </>
  );
}

// export function MyList({ list }: IGenericListProps) {
//   return (
//     <ul>
//       {
//         list.map(item => (
//           /*<li onClick={() => onClick(item.id)} key={item.id}>{item.text}</li>*/
//           <li onClick={() => item.onClick(item.id)} key={item.id}>{item.text}</li>
//         ))
//       }
//     </ul>
//   )
// }