
import {Label, Input} from "../Contacts.styled";


const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      <span >Search contact:</span>

      <Input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Enter the contact name"
      />
    </Label>
  );
};

export default Filter;
