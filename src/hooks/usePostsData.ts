import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

interface IPostsData {
  data: {
    [n: string]: string | number;
  }
}

export function usePostsData() {
  const
    [data, setData] = useState<{[n: string]: string | number}>({}),
    token = useSelector<RootState, string | undefined>(state => state && state.token);

  useEffect(() => {
    if (token?.length) {
      axios
        .get('https://oauth.reddit.com/best.json?limit=7&sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
          method: 'HEAD',
        })
        .then(resp => resp.data?.data?.children?.length && setData(resp.data?.data?.children.map(
              ({ data: { id, title, author, created, thumbnail, score } }: IPostsData ) =>
                ({ id, title, author, created, thumbnail, score })
        )))
        .catch(console.log);
    }
  }, [token]);

  return [data];
}