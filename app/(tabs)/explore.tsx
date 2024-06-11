import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Explore() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Explore</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    height: '100%',
  },
});
