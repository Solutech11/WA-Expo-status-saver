import React from 'react';
import StatusScreen from './src/StatusScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
