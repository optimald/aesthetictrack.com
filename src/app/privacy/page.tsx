import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a demo or pricing information</li>
              <li>Communicate with us via email</li>
            </ul>
            <p className="text-gray-300 mb-6">
              The types of information we may collect include your name, email address, company name, and any other information you choose to provide.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-4">3. Analytics and Tracking</h2>
            <p className="text-gray-300 mb-6">
              We use Google Analytics and Mixpanel to analyze how visitors use our website. These services may collect information such as your IP address, browser type, pages visited, and time spent on our site. This information is used to improve our website and understand user behavior.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">4. Cookies and Similar Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">5. Information Sharing</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted third parties who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">6. Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">7. Data Retention</h2>
            <p className="text-gray-300 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">8. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mb-4">9. Third-Party Links</h2>
            <p className="text-gray-300 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300 mb-6">
              Email: <a href="mailto:privacy@aesthetictrack.com" className="text-orange-500 hover:text-orange-400">privacy@aesthetictrack.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
