import { useState } from 'react';
import { Header } from './components/Header';
import { BlogList } from './components/BlogList';
import { BlogDetail } from './components/BlogDetail';

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-12 xl:px-16 pt-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Blog List */}
          <aside className="lg:col-span-8 xl:col-span-4">
            <div className="bg-white rounded-xl shadow-sm  border border-gray-200 p-6 sticky top-28">
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Blog Posts
                </h2>
                <p className="text-base text-gray-500 my-1">
                  Discover latest articles
                </p>
              </div>

              <BlogList
                selectedBlogId={selectedBlogId}
                onSelectBlog={setSelectedBlogId}
              />
            </div>
          </aside>

          {/* Blog Detail */}
          <section className="lg:col-span-7 xl:col-span-8">
            <div className="rounded-xl">
              <BlogDetail blogId={selectedBlogId} />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-6
                  text-sm text-gray-500
                  flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 CA Monk Blog</span>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <a href="#" className="hover:text-blue-600">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
