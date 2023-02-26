import { fireEvent, render, screen, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'costam123' } });
    fireEvent.change(password, { target: { value: 'innycos456' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.findByText(/Ooops/));
  });

  it('Displays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studyapp.com' } });
    fireEvent.change(password, { target: { value: 'Test123' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.findByText(/University news feed/));
  });
});
