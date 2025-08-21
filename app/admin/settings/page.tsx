'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSettings() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setLoading(false);
  }, [router]);

  const handleResetContent = async () => {
    if (!confirm('Are you sure you want to reset all content to default values? This cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/content/reset', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert('Content reset successfully!');
      } else {
        alert('Failed to reset content');
      }
    } catch (error) {
      alert('Error resetting content');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="text-red-700 hover:text-red-900 mr-4"
              >
                ← Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Admin Settings</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-8">
          {/* Content Management */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Content Management</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-2">Reset Content</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reset all content to default values. This will restore the original content and cannot be undone.
                </p>
                <button
                  onClick={handleResetContent}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Reset All Content
                </button>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">System Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Admin Username</label>
                <p className="mt-1 text-sm text-gray-900">cami</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Login URL</label>
                <p className="mt-1 text-sm text-gray-900">/admin/login</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content Storage</label>
                <p className="mt-1 text-sm text-gray-900">In-memory (resets on server restart)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image Storage</label>
                <p className="mt-1 text-sm text-gray-900">Local file system (/public/uploads)</p>
              </div>
            </div>
          </div>

          {/* Security Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Security Information</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Important Security Note</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>This is a demo system with hardcoded credentials. In production, you should:</p>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Use environment variables for JWT secrets</li>
                        <li>Implement proper password hashing</li>
                        <li>Use a database for content storage</li>
                        <li>Add rate limiting and additional security measures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
