import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecureOfficerPortal = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-body-md text-body-md text-on-surface bg-background antialiased relative min-h-screen flex items-center justify-center p-sm md:p-md">
<div className="absolute inset-0 z-0 bg-black">
<img alt="Karnataka State Emblem overlay background for secure login screen" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGDdARmfzifOMi1W0lLAIwK7nVtsaBJmxCksI3HwNNftvLHa3BQe5f80N8rrYAgMKUp6tdyE3p_mOElMIrdge616jB4DVmT3xrGf6_8pxniisawRWeh5LYV6kEYaH1NJ-rWOcQmcN4w2Ha_g6_dtOF6UUWBVfmVLGI5UyKx47vVuJFNJgvMD_AtXJh7QBSotmWg38EyBUId4NKZmfEYT9PBwmP2_rU6rac4rIhnVodOedVFYtpMlcrznWvCYlj84gvwor83mMgAkYe"/>
</div>
<div className="relative z-10 w-full max-w-md bg-[#FAF8F2] border border-[#D8D2C4] rounded shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
<div className="p-lg border-b border-[#D8D2C4] bg-surface flex flex-col items-center text-center">
<div className="flex items-center justify-center gap-md mb-md">
<img className="w-16 h-auto object-contain" data-alt="Karnataka State Government Emblem in dark metallic tones on a light background, symbolizing authority. Ensure the aesthetic matches a high-contrast, official government report style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq6ExwzW1j_2A5_G72lCBhaZCS6nh-vVEZCKXmBpw6sjc0Kp8pxzaj5fNk4JaSyyhWFSuAuEJKdOo-qtVnLeCC81Gh9JvaYnHGUJiUJGa8rFT3mxkSRnI_85izQ1qB1YmhUNCvnbzELBbdB-4G2_yKKgk7npvm7OUi6rQk6a424zIUJ3ZxaUjNf2J6oweV3q1XkD_WVHC7g-KtVJVYPuwyKof1DZDZatHthjyblIAHYOJoHKokYg8-DdJDADpUEE-rTEoJZmFZtY7J"/>
<img className="w-16 h-auto object-contain" data-alt="Karnataka State Police Emblem, shield shape, high-contrast, official government aesthetic on light background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAmx72ojC-_uCEAyb2AwlFLA10ZcIazajTWK__3bfzpuQvSyb7j1bO16Q60EQgDNT6Gv9bc_rP7hcA6xHUflb_wmIZb1gLYUGy-Ze2vjNZY6qEkbZXMoCPAcpnN38wZrX7veD-tAPb2nAw1z_Up82AHCEvd6I8jxkr_KX0pus2GSQ0AmWuOkjW1RuFi5s5OjegvxFCAAMen_swDXmlNGImk8dko2DfLVjr6CVHU14o44twkaYAXZ4yNJ9xXQV2UqNKihFrLEXhjX_i"/>
</div>
<h1 className="font-headline-md text-headline-md text-primary tracking-tight mb-xs">KrimeKartā</h1>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Official Internal Crime Intelligence Platform</p>
</div>
<div className="p-lg bg-surface">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Secure Officer Authentication</h2>
<form className="flex flex-col gap-md" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="service-id">Service ID</label>
<input className="font-body-md text-body-md bg-white border border-[#D8D2C4] rounded px-sm py-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent transition-shadow" id="service-id" name="service-id" required="" type="text"/>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
<input className="font-body-md text-body-md bg-white border border-[#D8D2C4] rounded px-sm py-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent transition-shadow" id="password" name="password" required="" type="password"/>
</div>
<div className="flex items-center justify-between mt-xs">
<label className="flex items-center gap-xs cursor-pointer group">
<input className="w-4 h-4 rounded-sm border-[#D8D2C4] text-primary-container focus:ring-[#C89B3C] bg-white cursor-pointer" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember this device</span>
</label>
<a className="font-body-sm text-body-sm text-primary hover:underline font-medium" href="#">Forgot Password?</a>
</div>
<button className="mt-xs w-full bg-[#8C1D18] hover:bg-[#6b0105] text-white font-label-md text-label-md py-sm px-md rounded transition-colors flex items-center justify-center gap-xs shadow-sm" type="submit">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", fontSize: "18px"}}>lock</span>
                    SECURE LOGIN
                </button>
</form>
</div>
<div className="bg-surface-container-low p-md border-t border-[#D8D2C4] flex flex-col items-center text-center gap-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant">Government of Karnataka | Karnataka Police Headquarters</p>
<div className="flex items-center gap-xs text-error mt-xs">
<span className="material-symbols-outlined" style={{fontSize: "16px"}}>warning</span>
<p className="font-label-md text-label-md">Official Internal System. Unauthorized access is prohibited.</p>
</div>
</div>
</div>
</div>
    </>
  );
};

export default SecureOfficerPortal;
