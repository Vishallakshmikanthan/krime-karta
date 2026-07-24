const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

export function getAccessToken() {
  return localStorage.getItem('krimekarta.accessToken');
}

export function setSession(session) {
  if (session?.accessToken) {
    localStorage.setItem('krimekarta.accessToken', session.accessToken);
  }
  if (session?.user) {
    localStorage.setItem('krimekarta.user', JSON.stringify(session.user));
  }
}

export function clearSession() {
  localStorage.removeItem('krimekarta.accessToken');
  localStorage.removeItem('krimekarta.user');
  localStorage.removeItem('krimekarta.pendingServiceId');
  localStorage.removeItem('krimekarta.pendingMfaToken');
}

export async function api(path, options = {}) {
  const token = getAccessToken();
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error?.message || 'Request failed');
  }
  return payload;
}

export function login(serviceId, password) {
  return api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ serviceId, password })
  });
}

export function verifyOtp(serviceId, mfaToken, otp) {
  return api('/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ serviceId, mfaToken, otp })
  });
}
