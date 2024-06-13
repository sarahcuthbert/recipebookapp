import { render, screen } from '@testing-library/react-native';

import HomeScreen from '.';

describe('Index', () => {
  it('should display hello world', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Hello World!')).toBeDefined();
  });
});
