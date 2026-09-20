import { createBrowserRouter, RouterProvider } from "react-router";

import ErrorPage from "../../pages/error/ErrorPage";
import CmsLayout from "../../pages/layout/CmsLayout";
import Dashboard from "../../pages/cms/Dashboard";
import CmsUserList from "../../pages/cms/users/CmsUserList";
import CmsUserCreate from "../../pages/cms/users/CmsUserCreate";
import CmsUserEdit from "../../pages/cms/users/CmsUserEdit";
import AuthLayout from "../../pages/layout/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";
import ForgetPassword from "../../pages/auth/ForgetPasswordPage";
import NotFound from "../../components/error/NotFound";
import CmsUserSignUpPage from "../../pages/cms/users/CmsUserSignupPage";

const router = createBrowserRouter ([
    // {path: '/', element: <Home />,},
    // {path: '/login', element: <LoginPage />},
    // {path: '/forget-password', element: <ForgetPassword />},
    // {path: '/privacy-policy', element: <PrivacyPolicy />},
    // {path: '/terms-and-conditions', element: <TermsAndConditions />},

    // {path:'/', Component: Home, children: [
    //     {index: true, Component: LoginPage},
    //     {path:'privacy-policy', Component: PrivacyPolicy},
    //     {path:'terms-and-conditions', Component: TermsAndConditions}
    // ]},

    {path: '/', Component: AuthLayout, children: [
        {index: true, element: <LoginPage/>},
        {path: 'forget-password', element: <ForgetPassword />},

        {path: '*', Component: NotFound}
    ]},

    {path: '/cms', Component: CmsLayout, children: [
        {index: true, Component: Dashboard},
        {path: 'users', Component: CmsUserList},
        {path: 'users/create', Component: CmsUserCreate},
        {path: 'user/:username', Component: CmsUserEdit},
        {path: 'user/signup', Component: CmsUserSignUpPage},

        
        {path: '*', element: <ErrorPage />}
    ]},


    {path: '*', element: <ErrorPage />}
])

export default function RouterConfig () {
    return (
        <>
        <RouterProvider router={router}/>
        </>
    )
}