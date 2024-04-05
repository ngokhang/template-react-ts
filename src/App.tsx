import BaseLayout from "./layouts";
import { Outlet} from "react-router-dom";

const App = () => {
  return (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
  )
};

export default App;
