import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

interface IPostsData {
  data: {
    [n: string]: string | number;
  }
}

export function usePostsData() {
  const [data, setData] = useState<{[n: string]: string | number}>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json?limit=7&sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
        method: 'HEAD',
      })
      .then(resp => {
        if (resp.data?.data?.children?.length) {
          setData(resp.data?.data?.children.map(
            ({ data: { id, title, author, created, thumbnail, score }} : IPostsData) => ({
              id, title, author, score, created, thumbnail
            })
          ));
        }
      })
      .catch(console.log);
  }, [token]);

  return [data];
}