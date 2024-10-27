import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync, selectUserData } from "../../store/features/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(selectUserData);

  return (
    <div>
      {/* create navbar with logo and links (profile and dashboard pages) */}
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-xl font-bold text-gray-800 dark:text-white"
          >
            Logo
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          {user ? (
            <Link to="/profile" className="text-gray-800 dark:text-white">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="text-gray-800 dark:text-white">
              Login
            </Link>
          )}
          <Link to="/dashboard" className="text-gray-800 dark:text-white">
            Dashboard
          </Link>
          {user && (
            <button
              disabled={loading}
              className="text-gray-800 dark:text-white"
              onClick={() => dispatch(logoutAsync() as any)}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
