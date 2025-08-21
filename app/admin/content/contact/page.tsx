'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ContactContent } from '@/lib/content';

export default function ContactContentEditor() {
  const [content, setContent] = useState<ContactContent | null>(null);
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
      const response = await fetch('/api/admin/content/contact');
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
      const response = await fetch('/api/admin/content/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        setMessage('Contact information saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to save contact information');
      }
    } catch (error) {
      setMessage('Error saving contact information');
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: keyof ContactContent, value: string | string[]) => {
    if (!content) return;
    setContent({
      ...content,
      [field]: value
    });
  };

  const updateAddress = (field: keyof ContactContent['address'], value: string) => {
    if (!content) return;
    setContent({
      ...content,
      address: {
        ...content.address,
        [field]: value
      }
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
              <h1 className="text-2xl font-bold text-gray-900">Edit Contact Information</h1>
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
          {/* Contact Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={content.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Link (tel:)</label>
                <input
                  type="text"
                  value={content.phoneHref}
                  onChange={(e) => updateField('phoneHref', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  placeholder="tel:+18017072547"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={content.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  value={content.address.streetAddress}
                  onChange={(e) => updateAddress('streetAddress', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value={content.address.addressLocality}
                  onChange={(e) => updateAddress('addressLocality', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  value={content.address.addressRegion}
                  onChange={(e) => updateAddress('addressRegion', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  value={content.address.postalCode}
                  onChange={(e) => updateAddress('postalCode', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  value={content.address.addressCountry}
                  onChange={(e) => updateAddress('addressCountry', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Service Areas</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service Areas (one per line)</label>
              <textarea
                value={content.serviceArea.join('\n')}
                onChange={(e) => updateField('serviceArea', e.target.value.split('\n').filter(f => f.trim()))}
                rows={6}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Phoenix&#10;Mesa&#10;Scottsdale&#10;Gilbert&#10;Chandler&#10;Queen Creek"
              />
              <p className="mt-2 text-sm text-gray-500">
                Enter each service area on a separate line
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
