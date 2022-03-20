import { RefObject, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

interface IUsePostDataProps {
  apiUrl: string;
  ref: RefObject<HTMLDivElement>;
  params: { [n: string]: string };
  allowLoad: boolean;
  addCount: () => void;
}

export function usePostsData({ apiUrl, params, ref, addCount, allowLoad }: IUsePostDataProps) {
  const
    [posts, setPosts] = useState<Array<{}>>([]),
    [loading, setLoading] = useState(false),
    [nextAfter, setNextAfter] = useState<string>(''),
    [errorLoading, setErrorLoading] = useState(''),
    token = useSelector<RootState, string | undefined>(state => state && state.token);

  useEffect(() => {
    if (token && token?.length && token != 'undefined') {
      return;
    }

    setLoading(true);
    setErrorLoading('');

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && allowLoad) {
          axios
            .get(`https://oauth.reddit.com/${apiUrl}.json`, {
              headers: {
                Authorization: `bearer ${token}`
              },
              params: {
                limit: '10',
                ...params,
                after: nextAfter,
              },
              method: 'HEAD',
            })

            .then(({ data: { data: { after, children } } }) => {
              addCount();
              setNextAfter(after);
              setPosts(prev => [...prev, ...children]);
            })

            .catch(error => setErrorLoading(String(error)))

            .finally(() => setLoading(false));
        }
      },
      { rootMargin: '100px' }
    );

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [ref, token, nextAfter, allowLoad]);

  return [posts, loading, errorLoading];
}