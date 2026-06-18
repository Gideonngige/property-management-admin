import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}