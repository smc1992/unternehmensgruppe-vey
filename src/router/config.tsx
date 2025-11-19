
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import ServiceInquiryPage from '../pages/service-inquiry/page';
import ServiceFunnelPage from '../pages/service-funnel/page';
import BaumfaellarbeitenPage from '../pages/baumfaellarbeiten/page';
import AbbrucharbeitenPage from '../pages/abbrucharbeiten/page';
import MulcharbeitenPage from '../pages/mulcharbeiten/page';
import MalerarbeitenPage from '../pages/malerarbeiten/page';
import DachdeckerarbeitenPage from '../pages/dachdeckerarbeiten/page';
import BrennholzPage from '../pages/brennholz/page';
import SchuettgutboxenPage from '../pages/schuettgutboxen/page';
import UmzuegePage from '../pages/umzuege/page';
import TransportePage from '../pages/transporte/page';
import ImpressumPage from '../pages/impressum/page';
import DatenschutzPage from '../pages/datenschutz/page';
import NotFoundPage from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/service-inquiry',
    element: <ServiceInquiryPage />,
  },
  {
    path: '/service-funnel',
    element: <ServiceFunnelPage />,
  },
  {
    path: '/baumfaellarbeiten',
    element: <BaumfaellarbeitenPage />,
  },
  {
    path: '/abbrucharbeiten',
    element: <AbbrucharbeitenPage />,
  },
  {
    path: '/mulcharbeiten',
    element: <MulcharbeitenPage />,
  },
  {
    path: '/malerarbeiten',
    element: <MalerarbeitenPage />,
  },
  {
    path: '/dachdeckerarbeiten',
    element: <DachdeckerarbeitenPage />,
  },
  {
    path: '/brennholz',
    element: <BrennholzPage />,
  },
  {
    path: '/schuettgutboxen',
    element: <SchuettgutboxenPage />,
  },
  {
    path: '/umzuege',
    element: <UmzuegePage />,
  },
  {
    path: '/transporte',
    element: <TransportePage />,
  },
  {
    path: '/impressum',
    element: <ImpressumPage />,
  },
  {
    path: '/datenschutz',
    element: <DatenschutzPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
