import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using aesthetictrack.com (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on aesthetictrack.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-300 mb-6">
              The materials on aesthetictrack.com are provided on an &apos;as is&apos; basis. aesthetictrack.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-gray-300 mb-6">
              In no event shall aesthetictrack.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on aesthetictrack.com, even if aesthetictrack.com or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-300 mb-6">
              The materials appearing on aesthetictrack.com could include technical, typographical, or photographic errors. aesthetictrack.com does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">6. Links</h2>
            <p className="text-gray-300 mb-6">
              aesthetictrack.com has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by aesthetictrack.com of the site.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">7. Modifications</h2>
            <p className="text-gray-300 mb-6">
              aesthetictrack.com may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">8. Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300 mb-6">
              Email: <a href="mailto:legal@aesthetictrack.com" className="text-orange-500 hover:text-orange-400">legal@aesthetictrack.com</a>
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law</h2>
            <p className="text-gray-300 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
