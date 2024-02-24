import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from './../../../types/academicManagement.type';

import { TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/academic-semester',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getAllAcademicFaculties: builder.query({
      query: () => {
        return {
          url: '/academic-faculty',
          method: 'GET'
        };
      },

      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllDepartments: builder.query({
      query: () => {
        return {
          url: '/academic-department',
          method: 'GET'
        };
      },

      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semester/create-academic-semester",
        method: "POST",
        body: data
      }),
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty/create-academic-faculty",
        method: "POST",
        body: data
      }),
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-department/create-academic-department",
        method: "POST",
        body: data
      }),
    }),
  }),
});

export const {useGetAllSemestersQuery, useGetAllAcademicFacultiesQuery, useAddAcademicSemesterMutation, useAddAcademicFacultyMutation, useAddAcademicDepartmentMutation, useGetAllDepartmentsQuery} = academicManagementApi;
