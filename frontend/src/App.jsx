import AppRoutes from "./routes/AppRoutes";
import { useLoading } from "./context/LoadingContext";
import GlobalLoader from "./components/common/GlobalLoader";
import { useEffect } from "react";
import { registerLoading } from "./services/api";

function App() {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    registerLoading(setLoading);
  }, [setLoading]);

  return (
    <>
      {loading && <GlobalLoader />}

      <AppRoutes />
    </>
  );
}

export default App;