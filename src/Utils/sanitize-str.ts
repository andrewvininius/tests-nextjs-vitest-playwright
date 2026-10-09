export function sanitizeStr(s: string): string {
//   const clean = !s || typeof s !== 'string' ? '' : s.trim().normalize();
    return !s || typeof s !== 'string' ? '' : s.trim().normalize();
}