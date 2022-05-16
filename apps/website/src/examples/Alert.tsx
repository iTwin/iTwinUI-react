import { Alert } from '@itwin/itwinui-react';

export default function App() {
  return (
    <Alert onClose={() => {}} clickableText='Learn more' style={{ minWidth: 350 }}>
      This is an alert
    </Alert>
  );
}
