'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServicesContent } from '@/lib/content';

export default function ServicesContentEditor() {
  const [content, setContent] = useState<ServicesContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchContent();
  }, [router]);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/admin/content/services');
      if (response.ok) {
        const data = await response.json();
        setContent(data.content);
      } else {
        setMessage('Failed to load content');
      }
    } catch (error) {
      setMessage('Error loading content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/content/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage('Services content saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to save services content');
      }
    } catch (error) {
      setMessage('Error saving services content');
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: keyof ServicesContent, value: string) => {
    if (!content) return;
    setContent({
      ...content,
      [field]: value
    });
  };

  const updateService = (index: number, field: string, value: string | string[]) => {
    if (!content) return;
    const newServices = [...content.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setContent({ ...content, services: newServices });
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

  if (!content) {
    return <div>Error loading content</div>;
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
              <h1 className="text-2xl font-bold text-gray-900">Edit Services Content</h1>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
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
          {/* Services Header */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Services Section Header</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Title</label>
                <input
                  type="text"
                  value={content.title}
                  onChange={(e) => updateField('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Subtitle</label>
                <input
                  type="text"
                  value={content.subtitle}
                  onChange={(e) => updateField('subtitle', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Individual Services */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Services</h2>
            <div className="space-y-6">
              {content.services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-md font-medium text-gray-900 mb-3">Service {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Service Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => updateService(index, 'title', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Image URL (optional)</label>
                      <input
                        type="text"
                        value={service.image || ''}
                        onChange={(e) => updateService(index, 'image', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        placeholder="/uploads/service-image.jpg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateService(index, 'description', e.target.value)}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Features (one per line)</label>
                      <textarea
                        value={service.features.join('\n')}
                        onChange={(e) => updateService(index, 'features', e.target.value.split('\n').filter(f => f.trim()))}
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
