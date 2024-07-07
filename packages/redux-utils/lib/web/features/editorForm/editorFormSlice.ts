import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
const initialState = {
  form: {
    name: '',
    title: '',
    summary: '',
    number: '',
    email: '',
    website: '',
    location: '',
    company: [
      {
        name: '',
        role: '',
        jobType: 'Full-Time',
        dateRange: '',
        location: '',
        jobDescription: '',
      },
    ],
    education: [
      {
        name: '',
        degree: '',
        dateRange: '',
        location: '',
        description: '',
      },
    ],
    links: [
      {
        label: '',
        link: '',
      },
    ],
    skills: [
      {
        skill: '',
      },
    ],
    languages: [
      {
        language: '',
      },
    ],
    certificates: [
      {
        name: '',
        issuer: '',
        date: '',
        website: '',
        summary: '',
      },
    ],
    projects: [
      {
        name: '',
        date: '',
        description: '',
        website: '',
      },
    ],
  },
};

export const editorFormSlice = createSlice({
  name: 'editorForm',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = cloneDeep({ ...state.form, ...action.payload });
    },
  },
});

export const { setForm } = editorFormSlice.actions;
export default editorFormSlice.reducer;
