import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { FilterSkeleton } from "../components/skeletons/FilterSkeleton";
import { ChartSkeleton } from "../components/skeletons/ChartSkeleton";
import TableSkeleton from "../components/skeletons/TableSkeleton";
import StatCardSkeleton from "../components/skeletons/StatCardSkeleton";
import { Login } from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import UserDetails from "../pages/UserDetails";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";

const LazyDashboard = React.lazy(() => import("../pages/Dashboard"));
const LazySettings = React.lazy(() => import("../pages/Settings"));
const LazyProfile = lazy(()=>import("../pages/Profile"))

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
            <Route index element={<Navigate to="dashboard" replace />} />
           
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <MainLayout />
                </ProtectedRoutes>
              }
            >
               <Route path="/me" element={<Suspense fallback={<ProfileSkeleton/>}><LazyProfile/></Suspense>}/>
               <Route path="/user/:id" element={<UserDetails/>}/>
              <Route
                path="dashboard"
                element={
                  <Suspense
                    fallback={
                      <div>
                        {" "}
                        <FilterSkeleton />
                        <StatCardSkeleton />
                        <ChartSkeleton />
                        <ChartSkeleton />
                      </div>
                    }
                  >
                    <LazyDashboard />
                  </Suspense>
                }
              />
              {/* <Route
                path="reports"
                element={
                  <Suspense
                    fallback={
                      <div>
                        <FilterSkeleton /> <br />
                        <TableSkeleton />
                      </div>
                    }
                  >
                    <LazyReports />
                  </Suspense>
                }
              /> */}
              <Route
                path="settings"
                element={
                  <Suspense fallback={<div>Loading..</div>}>
                    <LazySettings />
                  </Suspense>
                }
              />
            </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
