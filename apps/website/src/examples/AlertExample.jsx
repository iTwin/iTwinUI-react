import { Alert } from '@itwin/itwinui-react';

export default function AlertExample() {
  return (
    <Alert type='positive' onClose={() => console.log('CLOSED')} clickableText='Learn more' style={{ minWidth: 350 }}>
      This is an alert
    </Alert>
  );
}
