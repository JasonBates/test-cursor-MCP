import { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Test Cursor MCP</h1>
        <p className="text-lg mb-4">
          This is a test project demonstrating the integration between Cursor IDE and GitHub using the Modern Code Platform (MCP).
        </p>
      </div>
    </main>
  );
};

export default Home;
