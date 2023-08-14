import axios from "axios";

const BASEURL = 'https://64d914bfe947d30a2609e4f0.mockapi.io';

export const contactAPI = axios.create({
    BASEURL,
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/contacts`, contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
  return data;
};