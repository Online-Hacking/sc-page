   const allowedDomains = ['callspoofing.org', '292.165.0.*'];
  const currentDomain = window.location.hostname;
  if (!allowedDomains.includes(currentDomain)) {
       window.location.href = 'https://callspoofing.org';
   }
