import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const
    [data, setData] = useState<IUserData>({ name: '', iconImg: '' }),
    token = useSelector<RootState, string | undefined>(state => state.token);

  useEffect(() => {
		if (token?.length) {
			axios
				.get('https://oauth.reddit.com/api/v1/me.json', {
					headers: {Authorization: `bearer ${token}`}
				})
				.then(resp => setData({name: resp.data.name, iconImg: resp.data.snoovatar_img}))
				.catch(console.log);
		}
	}, [token]);

  return [data];
}