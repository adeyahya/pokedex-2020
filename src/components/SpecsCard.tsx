import { FunctionComponent, memo } from 'react';

interface Props {
  specs: Record<string, React.ReactNode>;
}
export const SpecsCard: FunctionComponent<Props> = memo(
  ({ specs }) => {
    const keys = Object.keys(specs);
    return (
      <div className="flex justify-start flex-wrap" data-testid="specs">
        {keys.map((key) => (
          <div className="flex flex-initial flex-col mr-2 mt-2" key={key}>
            <span className="text-xs font-bold" data-testid="spec-name">
              {key}
            </span>
            <div>
              <span
                className="bg-green-400 p-1 font-bold rounded-lg text-xs"
                data-testid="spec-value"
              >
                {specs[key]}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  },
  () => true
);
