/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import CAView from 'src/views/pages/CLView';
import EventsView from 'src/views/pages/EventsView';
import LoadingScreen from 'src/components/LoadingScreen';
import CoursesView from 'src/views/pages/CoursesView';
import Bootcamps from 'src/views/pages/BootCampsView/Bootcamps';
import ProfileView from 'src/views/pages/ProfileView';
import ApplicationsView from 'src/views/pages/ApplicationsView';
import Error404View from 'src/views/pages/Error404View';
import StudentDashboardView from 'src/views/pages/StudentDashboardView';
import CoursePage from 'src/views/pages/Course/CoursePage';
import TermsView from './views/pages/documents/termsView';
import DocsLayout from './layouts/DocsLayout';
import PrivacyView from './views/pages/documents/privacyView';
import RefundView from './views/pages/documents/refundView';
import ScrollReset from './components/ScrollReset';
import coursesContent from 'src/data/courses';

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <>
            <ScrollReset />
            <MainLayout>
              <HomeView {...props} />
            </MainLayout>
          </>
        )}
      />

      <Route
        path="/applications"
        exact
        render={props => (
          <MainLayout>
            <ApplicationsView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/events"
        exact
        render={props => (
          <MainLayout>
            <ScrollReset />
            <EventsView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/profile"
        exact
        render={props => (
          <MainLayout>
            <ProfileView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path="/student"
        exact
        render={props => (
          <MainLayout>
            <StudentDashboardView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/courses"
        render={props => (
          <>
            <ScrollReset />
            <MainLayout>
              <CoursesView {...props} />
            </MainLayout>
          </>
        )}
      />

      <Route
        path="/bootcamp"
        render={props => (
          <MainLayout>
            <Bootcamps {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/campusLeaders"
        exact
        render={props => (
          <MainLayout>
            <ScrollReset />
            <CAView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path={`/machine-learning-using-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.machineLearning}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-java`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.algoJava}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.algoPython}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/fullstack-webdev-with-js`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.webDevelopment}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/competitive-programming-using-java`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.competitiveJava}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/application-dev-using-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.devPython}
              {...props}
            />
          </MainLayout>
        )}
      />

      {/* Privacy, refund policies, and terms and conditions routes */}
      <Route
        path={`/privacy`}
        exact
        render={props => (
          <DocsLayout>
            <PrivacyView />
          </DocsLayout>
        )}
      />
      <Route
        path={`/terms`}
        exact
        render={props => (
          <DocsLayout>
            <TermsView />
          </DocsLayout>
        )}
      />
      <Route
        path={`/refundpolicies`}
        exact
        render={props => (
          <DocsLayout>
            <RefundView />
          </DocsLayout>
        )}
      />
      <Route component={Error404View} />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
