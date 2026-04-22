import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/transitions.scss';

export default function App() {
  return <RouterProvider router={router} />;
}
