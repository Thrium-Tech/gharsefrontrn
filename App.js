import StackNavigator from './StackNavigator';
import { AuthProvider } from "./AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
