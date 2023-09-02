'use server'
import { cookies } from 'next/headers';

export const setLanguage = async (lang: string): Promise<void> => {
    cookies().set('lang', lang);
}