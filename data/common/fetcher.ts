export const FETCHER_API_URL = <string>process.env.NEXT_PUBLIC_API_URL;
if (!FETCHER_API_URL) throw new Error(`Missing ENV var "NEXT_PUBLIC_API_URL"`);

export async function fetcher<T>(
  resource: string | URL,
  init?: RequestInit,
  baseurl: string | URL = FETCHER_API_URL,
): Promise<T> {
  return fetch(new URL(resource, baseurl), init).then((res) => res.json());
}

export default fetcher;
