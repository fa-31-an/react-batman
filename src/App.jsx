import MainLayout from "./Layout";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import AppRoutes from "./routes";

function App() {

  return (
    <MainLayout>
      <DrinksProvider>
        <CategoriesProvider>
          <CartProvider>
          <AppRoutes />
          </CartProvider>
        </CategoriesProvider>
      </DrinksProvider>
    </MainLayout>
  );
};

export default App;
