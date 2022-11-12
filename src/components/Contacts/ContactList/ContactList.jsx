
import { Details, List, Button, ListItem, Name, Number } from "./ContactList.styled";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem  key={contact.id}>
          <Details>
            <Name >{contact.name}:</Name>{' '}
            <Number >{contact.number}</Number>
          </Details>
          <Button
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;



// import { Details, List, Button, ListItem, Name, Number } from "./ContactList.styled";
// import { selectVisibleContacts } from "../../../redux/contactItems/selectors";
// import { useDispatch, useSelector } from "react-redux";

// import { removeContact } from "redux/contactItems/contacts-operations";

// const ContactList = () => {
// const dispatch = useDispatch();
// const contacts = useSelector(selectVisibleContacts);

//   return (
//     <List>
//       {contacts.map(contact => (
//         <ListItem  key={contact.id}>
//           <Details>
//             <Name >{contact.name}:</Name>{' '}
//             <Number >{contact.number}</Number>
//           </Details>
//           <Button
//             type="button"
//             onClick={() => dispatch(removeContact(contact.id))}
//           >
//             delete
//           </Button>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default ContactList;