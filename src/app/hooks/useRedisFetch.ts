'use client'
import { useEffect, useState } from 'react';

import { getBaseUrl } from '../utils/url.utils';

export const useRedisFetch = (): number => {
  const [value, setValue] = useState<number>(0);
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/api/redisfetch`;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchFlag = async (): Promise<void> => {
      try {
        const res = await fetch(url, { signal });

        if (!res.ok) {
          throw new Error(`Failed to fetch redis: ${res.status}`);
        }
        const data = await res.json();
        setValue(data.count);
      } catch {
        setValue(0);
      }
    };

    fetchFlag();

    return (): void => controller.abort();
  }, []);

  return value;
};
