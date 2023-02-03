import { useEffect, lazy } from 'react';
// import Particles from 'react-particles';
// import loadFull from 'react-particles';
// import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { fetchCurrentUser } from 'redux/Auth/operation';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'components/hooks/useAuth';
import { GlobalStyle } from 'components/GlobalStyle';
// import { getIsLoading, getError } from 'redux/selectors';
// import { AnimateBack } from 'components/AnimateBack/AnimateBack';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const ContactPage = lazy(() => import('../../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));

export default function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      {' '}
      {isRefreshing ? (
        'Page is loading...'
      ) : (
        <>
          <GlobalStyle />
          {/* <Particles
            id="tsparticles"
            url="http://foo.bar/particles.json"
            init={particlesInit}
            loaded={particlesLoaded}
          /> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={ContactPage} redirectTo="/login" />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={RegisterPage}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectTo="/contacts"
                  />
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
