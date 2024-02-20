import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
  
        addAcademicSemester: builder.mutation({
          query: (data) => ({
            url: "/academic-semester/create-academic-semester",
            method: "POST",
            body: data
          }),
        }),
      }),
})