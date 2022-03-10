import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

interface IPostsData {
  [n: string]: object;
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json?limit=7&sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
        method: 'HEAD',
      })
      .then(resp => setData(resp.data))
      .catch(console.log);
  }, [token]);

  return [data];
}