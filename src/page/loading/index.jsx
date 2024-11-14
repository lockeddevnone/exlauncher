import axios from 'axios';
import { useEffect } from "react";
import { LIST_DOMAIN } from '../../constant/domain';

export default function Loading() {
  async function checkDomain() {
    const randomDomain = LIST_DOMAIN.sort(() => Math.random() - 0.5)
    const domainAvailable = localStorage.getItem('domainAvailable')

    const domains = domainAvailable
      ? [domainAvailable, ...randomDomain]
      : randomDomain

    for (const domain of domains) {
      try {
        const response = await axios.head(`https://${domain}/health`);
        if (response.status === 200) {
          localStorage.setItem('domainAvailable', domain)
          window.location.href = `https://${domain}`
          break
        }
      }
      catch (error) { }
    }
  }

  useEffect(() => {
    checkDomain()
  }, []);

  return (
    <div className="flex justify-center">
      <img
        src="/images/loading/loadingDesktop.jpg"
        alt=""
        className="min-h-screen w-full object-cover max-sm:hidden"
      />
      <img
        src="/images/loading/loadingMobile.jpg"
        alt=""
        className="min-h-screen w-full object-cover sm:hidden"
      />
    </div>
  )
}