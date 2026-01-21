import { useState } from 'react';
import { Button } from './ui/button';
import { CreateBlogForm } from './CreateBlogForm';

export function Header() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
                {/* FULL WIDTH HEADER */}
                <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8
                        flex items-center justify-between">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md">
                            <svg
                                className="w-7 h-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>

                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                CA Monk Blog
                            </h1>
                            <p className="text-base text-gray-600">
                                Finance & Tech Insights
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Button
                        onClick={() => setIsFormOpen(true)}
                        size="lg"
                        className="gap-2"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Create Blog
                    </Button>
                </div>
            </header>

            {/* Modal */}
            {isFormOpen && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsFormOpen(false)}
                    />

                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl">

                            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex justify-between items-center rounded-t-3xl z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Create New Blog Post
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Share your insights with the community
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="px-8 py-6">
                                <CreateBlogForm onSuccess={() => setIsFormOpen(false)} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
