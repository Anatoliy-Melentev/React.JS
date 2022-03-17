import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import { meRequestAsync } from "../store/me/actions";
import { MeState } from "../store/me/reducer";

export function useUserData() {
  const
    { data, loading }= useSelector<RootState, MeState>(state => state && state.me),
    token = useSelector<RootState, string | undefined>(state => state && state.token),
    dispatch = useDispatch();

  useEffect(() => {
    if (token?.length)
      dispatch(meRequestAsync());
  }, [token]);

  return { data, loading };
}