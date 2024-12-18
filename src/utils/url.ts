/**
 * Validates if a string is a valid URL
 * @param url - The URL string to validate
 * @returns boolean indicating if the URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely creates a URL object from a string
 * @param url - The URL string to convert
 * @returns URL object or null if invalid
 */
export function createSafeUrl(url: string): URL | null {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}