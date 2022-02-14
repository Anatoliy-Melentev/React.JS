
// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
//10. useDebugValue

import React from 'react';

export function MyHooks ({ title, id }: { title: string, id?: string }) {
  // const [isVisible] = useIsMounted();
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate');
  // }, ); //Без второго аргумента "deps"
  //
  // if (isVisible) {
  //   React.useEffect(() => {
  //     console.log('componentDidMount');
  //     return () => {
  //       console.log('componentWillUnmount')
  //     }
  //   }, []); //C пустым "deps" аналог componentDidMount
  // }
  //
  //
  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]); //C "deps" срабатываем при изменении title
  // const [isMounted] = useIsMounted();
  //
  // React.useEffect(() => {
  //   console.log(isMounted);
  // },[isMounted])
  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    () => calculate(items, multiplier),
    [items, multiplier]
  )

  return (
    <div>{title} {id} {result}</div>
  )
}

export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return [isMounted]
}

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}
