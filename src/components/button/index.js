import React from "react";

function Button({
  children,
  disabled,
  large,
  onClick,
  small,
  type = "button"
}) {
  const handleClick = e => {
    e.preventDefault();
    if (!onClick || disabled) return;

    onClick();
  };

  return (
    <>
      <button type={type} disabled={disabled} onClick={handleClick}>
        {children}
      </button>

      <style jsx>{`
        button {
          position: relative;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          line-height: 1.2;
          background: hotpink;
          border: none;
          color: white;
          border-radius: 0.4rem;
        }

        button:hover {
          opacity: 0.9;
        }

        button:active {
          opacity: 1;
        }

        .disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .disabled:hover {
          opacity: 0.6;
        }
      `}</style>

      <style jsx>{`
        button {
          font-size: ${large ? 2.4 : small ? 1.4 : 1.6}rem;
          padding: ${small ? ".4rem 1.4rem" : ".6rem 1.6rem"};
        }
      `}</style>
    </>
  );
}

export default Button;
