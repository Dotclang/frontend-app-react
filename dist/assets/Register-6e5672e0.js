import{u as g,r as d,j as s,L as j}from"./index-a527ed82.js";import{u as N,T as m,I as a,P as h}from"./PrimaryButton-ca8c65cd.js";import{I as t}from"./InputLabel-84f1f8db.js";const k=()=>{const{register:o,handleSubmit:c,formState:{errors:r},watch:u,setValue:p}=N(),{registerUser:f,error:e}=g(),[w,i]=d.useState(!1),l=u("password"),x=async n=>{try{i(!0),await f(n),i(!1)}catch{i(!1)}};return d.useEffect(()=>()=>{p("password_confirmation","")},[l]),s.jsxs("form",{onSubmit:c(x),children:[s.jsxs("div",{children:[s.jsx(t,{htmlFor:"name",value:"Name"}),s.jsx(m,{id:"name",name:"name",className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,...o("name",{required:"Name is required"})}),r.name&&s.jsx(a,{message:r.name.message,className:"mt-2"}),e&&e.errors&&e.errors.name&&s.jsx(a,{message:e.errors.name[0],className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(t,{htmlFor:"email",value:"Email"}),s.jsx(m,{id:"email",type:"email",name:"email",className:"mt-1 block w-full",autoComplete:"username",...o("email",{required:"Email is required"})}),r.email&&s.jsx(a,{message:r.email.message,className:"mt-2"}),e&&e.errors&&e.errors.email&&s.jsx(a,{message:e.errors.email[0],className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(t,{htmlFor:"password",value:"Password"}),s.jsx(m,{id:"password",type:"password",name:"password",className:"mt-1 block w-full",autoComplete:"new-password",...o("password",{required:"Password is required"})}),r.password&&s.jsx(a,{message:r.password.message,className:"mt-2"}),e&&e.errors&&e.errors.password&&s.jsx(a,{message:e.errors.password[0],className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(t,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(m,{id:"password_confirmation",type:"password",name:"password_confirmation",className:"mt-1 block w-full",autoComplete:"new-password",...o("password_confirmation",{required:"Confirm Password is required",validate:n=>n===l||"Passwords do not match"})}),r.password_confirmation&&s.jsx(a,{message:r.password_confirmation.message,className:"mt-2"}),e&&e.errors&&e.errors.password_confirmation&&s.jsx(a,{message:e.errors.password_confirmation[0],className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center justify-end mt-4",children:[s.jsx(j,{to:"/login",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),s.jsx(h,{className:"ml-4",disabled:w,children:"Register"})]})]})};export{k as default};
