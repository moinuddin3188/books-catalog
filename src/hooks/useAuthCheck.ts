import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { userLogin } from "../redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
        const localAuth = localStorage?.getItem("auth");

        if (localAuth) {
          const auth = JSON.parse(localAuth);

          if (auth?.accessToken) {
            dispatch(
              userLogin({
                accessToken: auth.accessToken,
                user: auth.user,
              })
            );
          }
        }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
