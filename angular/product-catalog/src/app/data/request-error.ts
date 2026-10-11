import { HttpErrorResponse } from '@angular/common/http';
// Explain common request failures without relying on a particular browser's parser message.
export function requestMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0) return 'Network request failed. Please try again.';
    if (error.status >= 200 && error.status < 300) return 'The response was not valid JSON.';
    return `Request failed (HTTP ${error.status}). Please try again.`;
  }
  return error instanceof Error ? error.message : 'Could not load products. Please try again.';
}
