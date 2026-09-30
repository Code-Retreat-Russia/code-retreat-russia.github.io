import { useMemo } from 'react';

interface AvatarProps {
  id: string;
  name: string;
  className?: string;
}

/**
 * SVG-плейсхолдер участника: генерируется по id, поэтому карточки
 * различаются и при этом не требуют бинарных файлов в репозитории.
 *
 * Когда появятся реальные фото:
 *   1. положить файл в public/images/trainers/<id>.jpg
 *   2. указать путь в src/data/trainers.ts (поле photo)
 *   3. компонент сам переключится на <img>
 */
export function Avatar({ id, name, className }: AvatarProps) {
  const hue = useMemo(() => {
    let hash = 0;
    for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) % 360;
    return hash;
  }, [id]);

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      role="img"
      aria-label={`Фото: ${name} (плейсхолдер)`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="500" fill={`hsl(${hue} 18% 14%)`} />
      <circle cx="200" cy="185" r="95" fill={`hsl(${hue} 30% 22%)`} />
      <path d="M60 500c0-90 62-150 140-150s140 60 140 150z" fill={`hsl(${hue} 30% 22%)`} />
      <text
        x="200"
        y="215"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="72"
        fontWeight="700"
        fill="#e1ff57"
        opacity="0.9"
      >
        {initials}
      </text>
      <rect x="0" y="0" width="400" height="500" fill="none" stroke="rgba(244,244,242,0.14)" strokeWidth="2" />
    </svg>
  );
}
