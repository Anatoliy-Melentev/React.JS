import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";

interface IUserData {
	name?: string;
	iconImg?: string;
}

export function useUserData() {
	const [data, setData] = useState<IUserData>({ name: '', iconImg: '' });
	const token = useContext(tokenContext);

	useEffect(() => {
		axios
			.get('https://oauth.reddit.com/api/v1/me.json', {
				headers: { Authorization: `bearer ${token}` }
			})
			.then(resp => setData({ name: resp.data.name, iconImg: resp.data.snoovatar_img }))
			.catch(console.log);
	}, [token]);

	return [data];
}