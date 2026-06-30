const getBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://stock-dashboard-backend-1md0.onrender.com';
  // Remove trailing slash from base URL
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export default async function apiClient<T>(
  endPoint: string,
  options?: RequestInit
): Promise<T> {
  const API_BASE_URL = getBaseUrl();
  // Ensure endPoint starts with /
  const cleanEndPoint = endPoint.startsWith('/') ? endPoint : `/${endPoint}`;
  const url = `${API_BASE_URL}${cleanEndPoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result: ApiResponse<T> | T = await response.json();

    // Handle both wrapped and unwrapped responses
    if (result && typeof result === 'object' && 'data' in result) {
      return (result as ApiResponse<T>).data;
    }

    return result as T;
  } catch (error) {
    console.error(`API Request failed for ${endPoint}:`, error);
    throw error;
  }
}
