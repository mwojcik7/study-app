import { useRemoveNoteMutation } from 'store';

import { Title } from 'components/atoms/Title/Title.styles';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
  const [removeNote] = useRemoveNoteMutation();

  const handleRemoveNote = () => {
    removeNote({ id: id });
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton aria-label="Delete" onClick={handleRemoveNote} />
    </NoteWrapper>
  );
};

export default Note;
