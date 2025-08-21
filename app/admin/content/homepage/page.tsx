'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HomepageContent } from '@/lib/content';

export default function HomepageContentEditor() {
  const [content, setContent] = useState<HomepageContent | null>(null);
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
      const response = await fetch('/api/admin/content/homepage');
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
      const response = await fetch('/api/admin/content/homepage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage('Content saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to save content');
      }
    } catch (error) {
      setMessage('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const updateHero = (field: keyof HomepageContent['hero'], value: string | string[]) => {
    if (!content) return;
    setContent({
      ...content,
      hero: { ...content.hero, [field]: value }
    });
  };

  const updateServices = (field: keyof HomepageContent['services'], value: any) => {
    if (!content) return;
    setContent({
      ...content,
      services: { ...content.services, [field]: value }
    });
  };

  const updateServiceItem = (index: number, field: string, value: string) => {
    if (!content) return;
    const newItems = [...content.services.items];
    newItems[index] = { ...newItems[index], [field]: value };
    updateServices('items', newItems);
  };

  const updateFeature = (index: number, field: string, value: string) => {
    if (!content) return;
    const newFeatures = [...content.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setContent({ ...content, features: newFeatures });
  };

  const updateGallery = (field: keyof HomepageContent['gallery'], value: any) => {
    if (!content) return;
    setContent({
      ...content,
      gallery: { ...content.gallery, [field]: value }
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    if (!content) return;
    const newProjects = [...content.gallery.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    updateGallery('projects', newProjects);
  };

  const updateCTA = (field: keyof HomepageContent['cta'], value: string | string[]) => {
    if (!content) return;
    setContent({
      ...content,
      cta: { ...content.cta, [field]: value }
    });
  };

  const updateServiceArea = (field: keyof HomepageContent['serviceArea'], value: string | string[]) => {
    if (!content) return;
    setContent({
      ...content,
      serviceArea: { ...content.serviceArea, [field]: value }
    });
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
              <h1 className="text-2xl font-bold text-gray-900">Edit Homepage Content</h1>
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
          {/* Hero Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Hero Section</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Main Title</label>
                <input
                  type="text"
                  value={content.hero.title}
                  onChange={(e) => updateHero('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                <input
                  type="text"
                  value={content.hero.subtitle}
                  onChange={(e) => updateHero('subtitle', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={content.hero.description}
                  onChange={(e) => updateHero('description', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Features (one per line)</label>
                <textarea
                  value={content.hero.features.join('\n')}
                  onChange={(e) => updateHero('features', e.target.value.split('\n').filter(f => f.trim()))}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Services Section</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Title</label>
                <input
                  type="text"
                  value={content.services.title}
                  onChange={(e) => updateServices('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Subtitle</label>
                <input
                  type="text"
                  value={content.services.subtitle}
                  onChange={(e) => updateServices('subtitle', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <h3 className="text-md font-medium text-gray-900 mb-3">Service Items</h3>
            <div className="space-y-4">
              {content.services.items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => updateServiceItem(index, 'title', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateServiceItem(index, 'description', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Link</label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => updateServiceItem(index, 'href', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Features Section</h2>
            <div className="space-y-4">
              {content.features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => updateFeature(index, 'title', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <input
                        type="text"
                        value={feature.description}
                        onChange={(e) => updateFeature(index, 'description', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Gallery Section</h2>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Title</label>
                <input
                  type="text"
                  value={content.gallery.title}
                  onChange={(e) => updateGallery('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Section Subtitle</label>
                <input
                  type="text"
                  value={content.gallery.subtitle}
                  onChange={(e) => updateGallery('subtitle', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <h3 className="text-md font-medium text-gray-900 mb-3">Projects</h3>
            <div className="space-y-4">
              {content.gallery.projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Project Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updateProject(index, 'title', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Before Image</label>
                      <input
                        type="text"
                        value={project.beforeImage}
                        onChange={(e) => updateProject(index, 'beforeImage', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">After Image</label>
                      <input
                        type="text"
                        value={project.afterImage}
                        onChange={(e) => updateProject(index, 'afterImage', e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Family Image</label>
                <input
                  type="text"
                  value={content.gallery.familyImage}
                  onChange={(e) => updateGallery('familyImage', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Family Title</label>
                <input
                  type="text"
                  value={content.gallery.familyTitle}
                  onChange={(e) => updateGallery('familyTitle', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Family Description</label>
                <input
                  type="text"
                  value={content.gallery.familyDescription}
                  onChange={(e) => updateGallery('familyDescription', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Call to Action Section</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={content.cta.title}
                  onChange={(e) => updateCTA('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={content.cta.description}
                  onChange={(e) => updateCTA('description', e.target.value)}
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Features (one per line)</label>
                <textarea
                  value={content.cta.features.join('\n')}
                  onChange={(e) => updateCTA('features', e.target.value.split('\n').filter(f => f.trim()))}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Service Area Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Area Section</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={content.serviceArea.title}
                  onChange={(e) => updateServiceArea('title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Service Areas (one per line)</label>
                <textarea
                  value={content.serviceArea.areas.join('\n')}
                  onChange={(e) => updateServiceArea('areas', e.target.value.split('\n').filter(f => f.trim()))}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
