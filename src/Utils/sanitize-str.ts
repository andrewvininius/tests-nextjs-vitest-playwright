export function sanitizeStr(s: string): string {
//   const clean = !s || typeof s !== 'string' ? '' : s.trim().normalize();

    console.log('Eu sou a função', s)
    return !s || typeof s !== 'string' ? '' : s.trim().normalize();
}