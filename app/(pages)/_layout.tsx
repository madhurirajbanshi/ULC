import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="checkout/[from]"
        options={{
          title: 'Checkout',
        }}
      />
    </Stack>
  );
}
