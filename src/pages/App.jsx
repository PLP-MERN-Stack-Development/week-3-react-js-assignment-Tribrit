import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './pages/TaskManager';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1 className="text-2xl">Welcome Home</h1>} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
