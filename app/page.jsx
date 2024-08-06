"use client"
import { signIn, getProviders, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const HomePage = () => {
  const [providers, setProviders] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return;
    if (session) {
      router.push('/dashboard')
    }

    const setUpProviders = async () => {
      try {
        const response = await getProviders();
        setProviders(response);
      } catch (error) {
        console.error('Failed to fetch providers:', error);
      } finally {
        setLoading(false);
      }
    };
    setUpProviders();
  }, [session, router, status])

  if (loading) {
    return <div>Loading Providers..</div>
  }
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className=" h-[50px] w-[50px] rounded-full object-contain inline-flex items-center shadow"
          >
            {provider.name}
          </button>
        ))
      }
    </div>
  )
}

export default HomePage
