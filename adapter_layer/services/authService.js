import * as AuthAdapter from '../adapters/authAdapter.js';

export const registerStudent = async (studentProfile) => {
  // Fixed: check for missing/empty fields properly
  const requiredFields = ['firstName', 'lastName', 'dob', 'course', 'major', 'status'];

  for (const field of requiredFields) {
    if (!studentProfile[field] || studentProfile[field].trim() === '') {
      throw new Error(`Field "${field}" is required`);
    }
  }

  // Fixed: was AuthAuthAdapter (typo) → AuthAdapter
  return await AuthAdapter.create(studentProfile);
};