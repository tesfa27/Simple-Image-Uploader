import { apiClient } from '../api/apiClient';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  return await apiClient('/upload', {
    method: 'POST',
    body: formData,
  });
};
