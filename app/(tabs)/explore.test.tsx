import { render, screen } from '@testing-library/react-native';
import TabTwoScreen from './explore';

describe('Explore', () => {
  it('should display explore', () => {
    render(<TabTwoScreen />);
    expect(screen.getByText('Explore')).toBeDefined();
  });
});
