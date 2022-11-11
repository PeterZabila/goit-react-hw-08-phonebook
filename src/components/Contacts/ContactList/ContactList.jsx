
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