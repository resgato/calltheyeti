'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ImageFile {
  name: string;
  url: string;
  size: number;
  uploadedAt: string;
}

export default function ImageManager() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchImages();
  }, [router]);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/admin/images');
      if (response.ok) {
        const data = await response.json();
        setImages(data.images || []);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      const response = await fetch('/api/admin/images/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setMessage('Images uploaded successfully!');
        fetchImages();
        setTimeout(() => setMessage(''), 3000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Upload failed');
      }
    } catch (error) {
      setMessage('Error uploading images');
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageName: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/images/${encodeURIComponent(imageName)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setMessage('Image deleted successfully!');
        fetchImages();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to delete image');
      }
    } catch (error) {
      setMessage('Error deleting image');
    }
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setMessage('Image URL copied to clipboard!');
    setTimeout(() => setMessage(''), 2000);
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
              <h1 className="text-2xl font-bold text-gray-900">Image Manager</h1>
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
        <div className="px-4 py-6 sm:px-0">
          {/* Upload Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Images</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                    {uploading ? 'Uploading...' : 'Choose Images'}
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="sr-only"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  PNG, JPG, GIF up to 10MB each
                </p>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Uploaded Images</h2>
            {images.length === 0 ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No images</h3>
                <p className="mt-1 text-sm text-gray-500">Upload some images to get started.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{image.name}</h3>
                      <p className="text-sm text-gray-500">
                        {(image.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => copyImageUrl(image.url)}
                          className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
                        >
                          Copy URL
                        </button>
                        <button
                          onClick={() => handleDeleteImage(image.name)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Usage Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-medium text-blue-900 mb-2">How to Use Images</h3>
            <div className="text-sm text-blue-800 space-y-2">
              <p>• Click "Copy URL" to copy the image URL to your clipboard</p>
              <p>• Use the copied URL in your content editors (e.g., "/uploads/image-name.jpg")</p>
              <p>• Supported formats: JPG, PNG, GIF, WebP</p>
              <p>• Maximum file size: 10MB per image</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
