import { Routes, Route, Link } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <h1>React Router</h1>

      {/* <Navigation /> */}
      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </>
  );
};

const Landing = ({ children }) => {
  return (
    <h2>
      Landing (Public: anyone can access this page)
      <>{children}</>
    </h2>
  );
};

const Home = ({ children }) => {
  return <h2>{children}</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>;
};
