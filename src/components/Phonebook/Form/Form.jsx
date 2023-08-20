import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk, addContactsThunk } from 'redux/contactsAsyncThunk';
import { selectContacts } from 'redux/selectors';
import { FormEl, FormLabel, FormInput, FormBtn } from './Form.styled';

const Form = () => {
  // Локальное состояние для имени и номера телефона
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Получение списка контактов из хранилища
  const contacts = useSelector(selectContacts);

  // Получение функции dispatch из хука useDispatch
  const dispatch = useDispatch();

  // Загрузка списка контактов после монтирования компонента
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // Обработчик изменения полей ввода
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  // Обработчик добавления нового контакта
  const onAddedContact = data => {
    // Проверка на существующий контакт с таким же именем
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContactsThunk(data)); // Вызов Thunk-действия для добавления контакта
  };

  // Обработчик отправки формы
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };
    onAddedContact(contact);
    resetForm();
  };

  // Сброс значений полей ввода
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
        />
      </FormLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormEl>
  );
};

export default Form;
