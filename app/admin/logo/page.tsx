'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface LogoInfo {
  currentLogo: string;
  filename: string;
  size: number;
  uploadedAt: string;
}

export default function LogoManager() {
  const [logoInfo, setLogoInfo] = useState<LogoInfo | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchLogoInfo();
  }, [router]);

  const fetchLogoInfo = async () => {
    try {
      const response = await fetch('/api/admin/logo');
      if (response.ok) {
        const data = await response.json();
        setLogoInfo(data.logoInfo);
      }
    } catch (error) {
      console.error('Error fetching logo info:', error);
    }
  };

  const handleLogoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('logo', files[0]);

      const response = await fetch('/api/admin/logo/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setMessage('Logo uploaded successfully! The site will now use the new logo.');
        fetchLogoInfo();
        setTimeout(() => setMessage(''), 5000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Upload failed');
      }
    } catch (error) {
      setMessage('Error uploading logo');
    } finally {
      setUploading(false);
    }
  };

  const handleResetLogo = async () => {
    if (!confirm('Are you sure you want to reset to the default logo? This will restore the original yeti-logo.png.')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/logo/reset', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setMessage('Logo reset to default successfully!');
        fetchLogoInfo();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to reset logo');
      }
    } catch (error) {
      setMessage('Error resetting logo');
    }
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Logo Manager</h1>
            </div>
          </div>
        </div>
      </header>

      {message && (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4`}>
          <div className={`rounded-md p-4 ${message.includes('success') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {message}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-8">
          {/* Current Logo Display */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current Logo</h2>
            {logoInfo ? (
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={logoInfo.currentLogo}
                    alt="Current site logo"
                    className="h-24 w-auto object-contain border border-gray-200 rounded-lg p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{logoInfo.filename}</h3>
                  <p className="text-sm text-gray-500">
                    Size: {(logoInfo.size / 1024).toFixed(1)} KB
                  </p>
                  <p className="text-sm text-gray-500">
                    Uploaded: {new Date(logoInfo.uploadedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading logo information...</p>
              </div>
            )}
          </div>

          {/* Upload New Logo */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upload New Logo</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-4">
                  <label htmlFor="logo-upload" className="cursor-pointer bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                    {uploading ? 'Uploading...' : 'Choose New Logo'}
                  </label>
                  <input
                    id="logo-upload"
                    name="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    disabled={uploading}
                    className="sr-only"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  PNG, JPG, SVG up to 5MB. Recommended size: 300x100px or larger.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Guidelines */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-2">Logo Guidelines</h3>
            <div className="text-sm text-blue-800 space-y-2">
              <p><strong>Recommended specifications:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Format: PNG, JPG, or SVG</li>
                <li>Size: 300x100px minimum (higher resolution recommended)</li>
                <li>File size: Under 5MB</li>
                <li>Background: Transparent or white background works best</li>
                <li>Aspect ratio: Horizontal layout recommended</li>
              </ul>
              <p className="mt-4"><strong>Note:</strong> The logo will be automatically resized to fit the site design while maintaining aspect ratio.</p>
            </div>
          </div>

          {/* Reset to Default */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Reset to Default</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Reset the logo back to the original yeti-logo.png file.
                </p>
              </div>
              <button
                onClick={handleResetLogo}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
