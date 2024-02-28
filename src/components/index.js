// components/index.js
import AppLayout  from './layouts/AppLayout'
import AppRoutes from './layouts/AppRoutes'
import EventDetail from './pages/EventDetail'
import EventEdit from './pages/EventEdit'
import EventForm from './pages/EventForm'
import EventList from './pages/EventList'
import GoBackButton from './ui/GoBackButton'
import HeaderTitle from './ui/HeaderTitle'
import ShareButton from './utils/ShareButton'
import OnlineStatusIndicator from './utils/OnlineStatusIndicator'
import ConnectionStatusMonitor from './utils/ConnectionStatusMonitor'
import CountdownComponent from './utils/CountdownComponent'
import ImageSelect from './ui/ImageSelect'


/*
const AppLayout = React.lazy(() => import('./layouts/AppLayout'));
const AppRoutes = React.lazy(() => import('./layouts/AppRoutes'));
const EventDetail = React.lazy(() => import('./pages/EventDetail'));
const EventEdit = React.lazy(() => import('./pages/EventEdit'));
const EventForm = React.lazy(() => import('./pages/EventForm'));
const EventList = React.lazy(() => import('./pages/EventList'));
const GoBackButton = React.lazy(() => import('./ui/GoBackButton'));
const HeaderTitle = React.lazy(() => import('./ui/HeaderTitle'));
const ShareButton = React.lazy(() => import('./utils/ShareButton'));
const OnlineStatusIndicator = React.lazy(() => import('./utils/OnlineStatusIndicator'));
const ConnectionStatusMonitor = React.lazy(() => import('./utils/ConnectionStatusMonitor'));
const CountdownComponent = React.lazy(() => import('./utils/CountdownComponent'));
const ImageSelect = React.lazy(() => import('./ui/ImageSelect'));
*/




// Export all components
export {
  AppLayout,
  AppRoutes,
  EventDetail,
  EventEdit,
  EventForm,
  EventList,
  GoBackButton,
  HeaderTitle,
  ShareButton,
  OnlineStatusIndicator,
  ConnectionStatusMonitor,
  CountdownComponent,
  ImageSelect
};