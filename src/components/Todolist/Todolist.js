// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import s from './Todolist.module.css';
import { deleteContacts } from '../../redux/app/app-phonebook-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/app/app-phonebook-selector';
import {
  useFetchContactQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} from '../../redux/app/operation';

function Todolist({ contact }) {
  // const { data, isfetching } = useFetchContactQuery();
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  // const contactsOll = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();
  // const onDeleteContact = id => dispatch(deleteContacts(id));

  return (
    <ul className={s.contacts__list}>
      {contact.map(({ id, name, phone, association }) => {
        return (
          <li key={id} className={s.item}>
            {' '}
            <p className={s.name__contact}>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {phone} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => deleteContacts(id)}
            >
              {' '}
              DELETE contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Todolist;

// Todolist.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => {
//   const { filter } = state;
//   const optimizedFilter = filter.toLowerCase();
//   const vizibleCOntacts = state.contact.filter(contact =>
//     contact.name.toLowerCase().includes(optimizedFilter),
//   );

//   return { contactsOll: vizibleCOntacts };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: id => dispatch(deleteContacts(id)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
