import PropTypes from 'prop-types';
import Buttons from './Button.styled';

const Button = ({ onDelete }) => {
  return (
    <Buttons type="button" onClick={onDelete}>
      Delete
    </Buttons>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Button;
