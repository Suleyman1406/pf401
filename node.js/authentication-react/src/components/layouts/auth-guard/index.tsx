import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { getCurrentUserAsync } from "../../../store/features/userSlice";
import { UserRole } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

type Props = {
  isAdmin?: boolean;
  requireAuth?: boolean;
};

const AuthGuard = ({ isAdmin, requireAuth = true }: Props) => {
  // const { user, error, loading } = useSelector(selectUserData);
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const { user, error, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, []);

  if (loading) return <div>Loading...</div>;

  if ((error || !user) && requireAuth) {
    return <Navigate to="/login" replace />;
  }

  if (
    requireAuth &&
    isAdmin &&
    user?.role !== UserRole.Admin &&
    user?.role !== UserRole.SuperAdmin
  ) {
    return <Navigate to="/" replace />;
  }

  console.log("AuthGuard", user);

  return <Outlet />;
};

export default AuthGuard;
