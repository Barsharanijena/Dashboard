import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import EventRequests from './components/events/EventRequests';
import EventDetails from './components/events/EventDetails';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/events" replace />} />
          <Route path="/events" element={<EventRequests />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/new-requests" element={<EventDetails />} />
          {/* Add more routes as we create the components */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
