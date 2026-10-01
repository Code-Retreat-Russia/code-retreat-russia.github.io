/**
 * Резолвит путь к файлу из public/ относительно базы сборки.
 *
 * В данных храним путь без ведущего слэша ('images/trainers/x.jpg'): при
 * base: './' (vite.config.ts) жёсткий '/images/...' по-разному вёл бы себя
 * на корне домена и при открытии dist/ из подпапки.
 *
 * BASE_URL при base: './' равен './', поэтому результат ('./images/...') —
 * корректная относительная ссылка, которая разрешается от URL документа.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${path.replace(/^\/+/, '')}`;
}