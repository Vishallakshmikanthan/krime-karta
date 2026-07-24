import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession, verifyOtp } from '../lib/api';

const TwoFaSecurityVerification = () => {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(['1', '2', '3', '4', '5', '6']);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const otp = useMemo(() => digits.join(''), [digits]);
  const serviceId = localStorage.getItem('krimekarta.pendingServiceId') || 'KA-P-12345';
  const mfaToken = localStorage.getItem('krimekarta.pendingMfaToken');

  const updateDigit = (index, value) => {
    const next = [...digits];
    next[index] = value.replace(/\D/g, '').slice(-1);
    setDigits(next);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const session = await verifyOtp(serviceId, mfaToken, otp);
      setSession(session);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center p-sm md:p-md">
<main className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
{/* Header Section */}
<header className="bg-primary-container px-lg py-md flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-sm shadow-sm overflow-hidden border-2 border-primary-container">
<img className="w-full h-full object-cover p-1" data-alt="Official emblem of the Karnataka Police, highly detailed vector style, golden lions on a circular seal with blue ribbon, crisp white background, isolated, high contrast, government aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrI6NtUpcQoGKPFtxB3y1Ef_cEDyyPc-G-p3P_NDk14k3JARNJboGHp5tuoRdmz313kB6zHzYe-wzUxvE-v5GH7YA-hQRkhLs5FaWD3F8JYdFv9XHBC8c0bpRoI6D1vtZvhA7Ss24nlFREJvA_aDjcLQY3HWAOkULRJM6y_12k-uCCATmeHxlqwVE5WN1osvXIFiQUjoaUcYr1axKHcYLKD-NGcqxq-UDulvUnxazsLfswNdx5-Y8RBqLwohjGvtDi5yiJTA3j0iE"/>
</div>
<h1 className="font-headline-sm text-headline-sm text-on-primary font-bold">KrimeKartā</h1>
<p className="font-body-sm text-body-sm text-primary-fixed-dim mt-base">Law Enforcement Intelligence Platform</p>
</header>
{/* Form Section */}
<section className="p-lg flex flex-col gap-md">
<div className="text-center">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Two-Factor Authentication Required</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Enter the 6-digit OTP sent to your registered device to continue.</p>
</div>
<form className="flex flex-col gap-md" onSubmit={handleSubmit}>
{/* OTP Inputs */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="otp-1">One-Time Password</label>
<div className="flex justify-between gap-base" id="otp-container">
{digits.map((digit, index) => (
<input aria-label={`Digit ${index + 1}`} className="w-full h-12 text-center font-data-mono text-headline-sm border border-outline-variant rounded bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-tertiary-container focus:border-transparent transition-all" id={`otp-${index + 1}`} key={index} maxLength="1" onChange={(event) => updateDigit(index, event.target.value)} type="text" value={digit}/>
))}
</div>
</div>
{error && <p className="font-body-sm text-body-sm text-error bg-error-container/30 border border-error/30 rounded px-sm py-xs">{error}</p>}
{/* Timer & Resend */}
<div className="flex justify-between items-center font-body-sm text-body-sm">
<span className="text-on-surface-variant flex items-center gap-base">
<span className="material-symbols-outlined text-[16px]">timer</span>
<span className="font-data-mono" id="countdown">02:45</span>
</span>
<button className="text-primary hover:text-on-primary-fixed-variant font-semibold transition-colors underline focus:outline-none focus:ring-2 focus:ring-tertiary-container rounded" type="button">Resend OTP</button>
</div>
{/* Trust Device */}
<div className="flex items-start gap-xs mt-xs">
<div className="flex items-center h-5">
<input className="w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-tertiary-container focus:ring-2 cursor-pointer" id="trust-device" type="checkbox"/>
</div>
<label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="trust-device">
                        Trust this device for 30 days
                    </label>
</div>
{/* Action Button */}
<button className="mt-sm w-full bg-primary-container text-on-primary hover:bg-on-primary-fixed-variant transition-colors py-3 rounded flex items-center justify-center gap-2 font-label-md text-label-md font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-tertiary-container disabled:opacity-60" disabled={submitting} type="submit">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
                    {submitting ? 'Verifying...' : 'Verify Identity'}
                </button>
</form>
{/* Footer Links */}
<div className="text-center mt-xs">
<a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline" href="#">Return to Login</a>
</div>
</section>
<footer className="bg-surface-container-lowest border-t border-outline-variant py-sm px-lg text-center">
<p className="font-label-md text-label-md text-on-surface-variant text-[10px]">Karnataka Police Intelligence Platform. Official Use Only.</p>
</footer>
</main>

</div>
    </>
  );
};

export default TwoFaSecurityVerification;
