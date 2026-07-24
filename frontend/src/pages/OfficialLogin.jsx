import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfficialLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-surface min-h-screen flex items-center justify-center font-body-md text-on-surface">
<div className="w-full max-w-md p-sm md:p-md flex flex-col">
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
<div className="bg-primary-container px-lg py-md flex flex-col items-center justify-center border-b border-outline-variant">
<img alt="Karnataka Police Emblem" className="w-20 h-20 mb-xs object-contain" data-alt="Official state police emblem featuring precise heraldic details, lions, and intricate crests. Rendered in clean, high-contrast lines suitable for a government portal header, utilizing primarily whites and subtle metallic tones against a deep, authoritative red background. The style is strictly institutional and professional, avoiding any illustrative whimsy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApXVKk3FktYO_hvrChtn-ZhfKoANHQ4zVXOUfA1Kyb8gEHR1IAsrSbSxVtzH9_LRM66-4HMci93uMBbQfDj-HbiB60UswwtHxszSgonrV7TE1ivntVrETuqXyM0oBEmBEeH5j-x4Yf8teR2OrBTXngWTfNM9WGHJv2a8RT-dAHW0UtGxXx8GFc6toc028nTKamMfZFqlyvKFxun7171mHnetI0oWklD5Rp3jNJl64l6A9T5ASNogjRqQ"/>
<h1 className="font-headline-md text-headline-md text-on-primary">KrimeKartā</h1>
<p className="font-body-sm text-body-sm text-primary-fixed-dim text-center">Law Enforcement Intel</p>
</div>
<div className="p-lg">
<form className="space-y-md" onSubmit={(e) => { e.preventDefault(); navigate('/two-fa'); }}>
<div className="space-y-base">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="service-id">Service ID</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-sm py-xs font-data-mono text-data-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim focus:border-transparent transition-shadow" id="service-id" name="service-id" placeholder="e.g. KA-P-12345" required="" type="text"/>
</div>
<div className="space-y-base">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded px-sm py-xs font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim focus:border-transparent transition-shadow" id="password" name="password" required="" type="password"/>
</div>
<div className="pt-sm border-t border-outline-variant space-y-md">
<div className="flex items-center gap-sm bg-surface-container-low p-sm rounded border border-outline-variant">
<span className="material-symbols-outlined text-primary text-xl">gpp_good</span>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Two-Factor Authentication is required for all official access.</p>
</div>
<button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-sm rounded hover:bg-primary transition-colors flex items-center justify-center gap-xs" type="submit">
<span className="material-symbols-outlined text-sm">login</span>
                            Secure Login
                        </button>
</div>
</form>
</div>
<div className="bg-surface-container-low px-lg py-sm border-t border-outline-variant flex justify-center">
<a className="font-body-sm text-body-sm text-primary-container hover:underline flex items-center gap-base" href="#">
<span className="material-symbols-outlined text-sm">help</span>
                    Forgot Credentials?
                </a>
</div>
</div>
<div className="mt-xl text-center flex flex-col md:flex-row justify-between items-center gap-xs">
<p className="font-body-sm text-body-sm text-secondary">Karnataka Police Intelligence Platform. All Rights Reserved. Official Use Only.</p>
<div className="flex gap-sm">
<a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">System Status</a>
</div>
</div>
</div>
</div>
    </>
  );
};

export default OfficialLogin;
