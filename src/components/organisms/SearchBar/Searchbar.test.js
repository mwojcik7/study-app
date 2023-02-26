import { fireEvent, render, screen } from 'test-utils';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);

    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users whern search phrase is matching', async () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Sha' } });

    await screen.findByText(/Shawn Kiehn/);
  });
});
