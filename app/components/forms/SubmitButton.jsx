import { useFormikContext } from 'formik';
import { COLORS } from '../../constants';

import { Button } from '../Button';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} color={COLORS.pink} onPress={handleSubmit} />;
}

export default SubmitButton;
