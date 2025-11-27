import React from 'react'

const TermsAndCondition = () => {
  return (
    <div className='sec-tp-page p-40 px-0'>
      <div className='container'>
        <p>Welcome to SQUCH! Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our multi-service platform, which includes bus ticket booking, event booking, food and grocery ordering, table reservations, and stay bookings. By using SQUCH, you consent to the practices outlined in this policy.</p>
        <h3>1. Information We Collect</h3>
        <p>We collect the following types of information to provide and improve our services:</p>
        <h4>1.1 Personal Information</h4>
        <ul className='list-unlist mb-8'>
          <li>Name, email, phone number, and profile details when you register.</li>
          <li>Payment details (processed securely via third-party payment gateways).</li>
          <li>Address and location data for delivery and service customization.</li>
        </ul>
        <h4>1.2 Usage Data</h4>
        <ul className='list-unlist mb-8'>
          <li>App activity, preferences, and interactions with different modules.</li>
          <li>Device information, IP address, and browser type for security and analytics.</li>
        </ul>
        <h4>1.3 Location Data</h4>
        <ul className='list-unlist mb-8'>
          <li>If permitted, we collect location data for services like bus tracking, food delivery, and stay bookings.</li>
        </ul>
        <h4>1.4 Third-Party Data</h4>
        <ul className='list-unlist mb-8'>
          <li>We may collect information from third-party services (e.g., social logins, payment providers) if you connect them to SQUCH.</li>
        </ul>
        <h3>2. How We Use Your Information</h3>
        <p className='mb-1'>We use your data to:</p>
        <ul className='list-unlist mb-8'>
          <li>Provide, personalize, and improve our services.</li>
          <li>Process transactions and bookings securely.</li>
          <li>Send updates, offers, and promotional messages (you can opt out anytime).</li>
          <li>Ensure platform security and prevent fraudulent activities.</li>
          <li>Comply with legal requirements and resolve disputes.</li>
        </ul>
        <h3>3. Sharing and Disclosure</h3>
        <p className='mb-1'>We do not sell your data. However, we may share information with:</p>
        <ul className='list-unlist mb-8'>
          <li>Service Providers (e.g., bus operators, restaurants, event organizers, hosts) to fulfill bookings.</li>
          <li>Payment Processors to securely handle transactions.</li>
          <li>Legal Authorities if required by law or to prevent fraud and security threats.</li>
        </ul>
        <h3>4. Data Security</h3>
        <p>We implement strong security measures to protect your data, including encryption and secure access controls. However, no system is 100% secure, so we encourage users to safeguard their credentials.</p>
        <h3>5. Your Choices and Rights</h3>
        <ul className='list-unlist mb-8'>
          <li>Access & Correction: You can update or delete your account details anytime.</li>
          <li>Location Permissions: You can enable or disable location services in your device settings.</li>
          <li>Marketing Preferences: Opt-out of promotional emails and notifications in your settings.</li>
        </ul>
        <h3>6. Third-Party Links and Services</h3>
        <p>SQUCH may contain links to third-party services (e.g., hotel listings, event pages). We are not responsible for their privacy practices, so we encourage you to review their policies.</p>
        <h3>7. Changes to This Policy</h3>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or email. Continued use of SQUCH after updates implies acceptance of the revised policy.</p>
        <h3>8. Contact Us</h3>
        <p className='mb-1'>If you have any questions or concerns regarding this Privacy Policy, please contact our support team through the app.</p>
        <p className='mb-1'>By using SQUCH, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
      </div>
    </div>
  )
}

export default TermsAndCondition
