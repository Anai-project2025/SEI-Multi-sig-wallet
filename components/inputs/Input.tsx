import React from 'react';

interface Props {
  label?: string;
  type?: string;
  name?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  value: number | string | undefined;
  onBlur?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  width?: string;
}

const Input = (props: Props) => (
  <div className="text-input">
    <label>{props.label || ''}</label>
    {props.type === 'textarea' ? (
      <textarea
        name={props.name || 'text-input'}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder || ''}
        autoComplete="off"
        onBlur={props.onBlur}
        disabled={props.disabled}
      />
    ) : (
      <input
        type={props.type || 'text'}
        name={props.name || 'text-input'}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder || ''}
        autoComplete="off"
        onBlur={props.onBlur}
        disabled={props.disabled}
      />
    )}

    {props.error && <div className="error">{props.error}</div>}
    <style jsx>{`
      .text-input {
        display: flex;
        flex-direction: column;
        width: ${props.width ? props.width : 'auto'};
      }

      label {
        font-style: italic;
        font-size: 12px;
        margin-bottom: 1em;
      }

      input {
        background:rgb(35, 46, 80);
        border: 2px solid rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        border-radius: 9px;

        color:rgb(255, 255, 255);
        padding: 10px 5px;
      }

      textarea {
        background:rgb(159, 240, 207);
        border: 2px solid rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        border-radius: 9px;

        color: white;
        padding: 10px 5px;
      }

      input:hover,
      input:focus {
        border-color: rgba(255, 255, 255, 1);
      }

      input::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
      .error {
        font-size: 12px;
        color: coral;
        margin-top: 5px;
      }
    `}</style>
  </div>
);

export default Input;
