import { render, screen } from '@testing-library/react-native';
import Explore from './explore';

describe('Explore', () => {
  it('should display explore', () => {
    render(<Explore />);
    expect(screen.getByText('Explore')).toBeDefined();
  });
});
