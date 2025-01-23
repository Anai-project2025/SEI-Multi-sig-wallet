import copy from 'copy-to-clipboard';

interface Props {
  copyText: string;
  stroke?: string;
  strokeWidth?: number;
}

const CopyAndPaste = (props: Props) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div
    className="icon"
    onClick={() => copy(props.copyText)}
  >
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 32H41C53.1503 32 63 41.8497 63 54V94H13V32Z" />
      <path d="M37 6H65C77.1503 6 87 15.8497 87 28V68H37V6Z" />
    </svg>
    <style jsx>{`
      svg {
        height: 1em;
      }

      path {
        stroke: ${props.stroke ? props.stroke : 'rgb(146 120 150)'};
        stroke-width: ${props.strokeWidth ? props.strokeWidth : '10'};
        transition: stroke 0.1s ease;
      }

      .icon {
        cursor: pointer;
        line-height: 0;
      }

      .icon:hover path {
        stroke: white;
      }
    `}</style>
  </div>
);

export default CopyAndPaste;
