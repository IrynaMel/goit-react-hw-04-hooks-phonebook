import PropTypes from 'prop-types';
import Li from './ContactList.styled';
import Button from 'components/Button/Button';

const ContactList = ({ visible, onDelete }) => {
  return (
    <div>
      <ul>
        {visible.map(({ id, name, number }) => (
          <Li key={id}>
            {name}: {number}
            <Button onDelete={() => onDelete(id)} />
          </Li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  visible: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};
export default ContactList;
