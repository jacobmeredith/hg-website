import axios from 'axios';

const client = axios.create({
  baseURL: process.env.KONTENT_URL,
  headers: {
    authorization: `Bearer ${process.env.KONTENT_API_KEY}`
  }
});

const getContentItem = async (path) => {
  try {
    let response = await client.get(path);
    
    if (response.data.items.length > 0) {
      return JSON.stringify({ item: response.data.items[0], modular_content: response.data.modular_content });
    }
  } catch (e: any) {
    console.error(e);
  }

  return null;
}

const getContentItems = async (path) => {
  try {
    let response = await client.get(path);

    if (response.data.items.length > 0) {
      return JSON.stringify({ items: response.data.items, modular_content: response.data.modular_content });
    }
  } catch (e: any) {
    console.error(e);
  }

  return null;
}

export { client, getContentItem, getContentItems };
