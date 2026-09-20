import React from 'react';

interface RollingNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  digitClassName?: string;
}

const DigitColumn: React.FC<{ digit: string; className?: string }> = ({ digit, className = '' }) => {
  const num = parseInt(digit, 10);
  if (isNaN(num)) {
    return <span className={`inline-block select-none ${className}`}>{digit}</span>;
  }

  return (
    <span
      className={`inline-block overflow-hidden h-[1.12em] leading-[1.12em] w-[0.6em] relative select-none tabular-nums ${className}`}
      style={{ verticalAlign: 'text-bottom' }}
    >
      <span
        className="flex flex-col transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] select-none will-change-transform"
        style={{
          transform: `translateY(-${num * 10}%)`,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="h-[1.12em] w-full flex items-center justify-center tabular-nums leading-none select-none text-center"
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
};

export const RollingNumber: React.FC<RollingNumberProps> = ({
  value,
  prefix = '',
  suffix = '',
  className = '',
  digitClassName = '',
}) => {
  const formatted = value.toFixed(2);
  const [intPart, decPart] = formatted.split('.');

  return (
    <span className={`inline-flex items-center tabular-nums select-none ${className}`}>
      {prefix && <span className="select-none mr-[0.04em]">{prefix}</span>}
      {intPart.split('').map((char, index) => {
        const place = intPart.length - 1 - index;
        return (
          <DigitColumn
            key={`int-${place}`}
            digit={char}
            className={digitClassName}
          />
        );
      })}
      <span className="select-none inline-block px-[0.03em] leading-none">.</span>
      {decPart.split('').map((char, index) => (
        <DigitColumn
          key={`dec-${index}`}
          digit={char}
          className={digitClassName}
        />
      ))}
      {suffix && <span className="select-none ml-[0.1em]">{suffix}</span>}
    </span>
  );
};

