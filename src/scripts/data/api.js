import { BASE_URL } from '../config';
import { getAccessToken } from '../utils/auth';

const ENDPOINTS = {
  // auth
  REGISTER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,
  MY_USER_INFO: `${BASE_URL}/users/me`,
  
  STORY_LIST: `${BASE_URL}/stories`,
};

export async function getRegistered({ name, email, password }) {
  const data = JSON.stringify({ name, email, password });

  const fetchResponse = await fetch(ENDPOINTS.REGISTER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getLogin({ email, password }) {
  const data = JSON.stringify({ email, password });

  const fetchResponse = await fetch(ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}

export async function getAllStories() {
  const token = getAccessToken();
  console.log("Token yang digunakan:", token);

  const fetchResponse = await fetch(ENDPOINTS.STORY_LIST, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const json = await fetchResponse.json();

  return {
    ...json,
    ok: fetchResponse.ok,
  };
}