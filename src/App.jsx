import MainLayout from "./Layout";
import { CategoriesProvider } from "./context/CategoriesProvider";
import AppRoutes from "./routes";

function App() {

  return (
    <CategoriesProvider>
    <MainLayout>
      <AppRoutes />
    </MainLayout>
    </CategoriesProvider>
  );
};

export default App;
