import { Suspense } from "react";
import Navigation from "./navigation/Navigation";
import { routes } from "../utils/routes";
import { Switch, Route } from "react-router-dom";
import FilmDetails from "./pages/filmDetails/FilmDetails";

const App = () => {
  return (
    <>
      <Navigation routes={routes} />
      <Suspense fallback={<div>...Loading</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact
            />
          ))}
          <Route path="/movies/:id" component={FilmDetails} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
