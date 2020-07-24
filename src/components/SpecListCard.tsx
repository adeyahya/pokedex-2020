import { FunctionComponent, memo } from 'react';

interface Props {
  list: React.ReactNode[];
  label: string;
  hideLabel?: boolean;
}
export const SpecListCard: FunctionComponent<Props> = memo(({ list, label, hideLabel }) => {
  return (
    <div data-testid={`spec-list-${label}`}>
      {!hideLabel && (
        <h4 className="text-sm font-bold mb-2" data-testid="spec-list-label">
          {label}
        </h4>
      )}
      <div className="flex flex-row">
        {list.map((item, idx) => (
          <span
            className="mr-2 bg-teal-200 px-2 text-sm font-medium rounded-full"
            data-testid="spec-list-value"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});
