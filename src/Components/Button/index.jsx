import Tippy from "@tippyjs/react";
export default function Button({
  type = "button",
  outline = true,
  onClick,
  children,
  tooltip,
  ...rest
}) {
  return tooltip ? (
    <Tippy content={tooltip}>
      <button
        type="button"
        className={`text-sm md:text-base ${
          outline
            ? "border border-[#ffa358] text-primary hover:bg-[#ffa3581a]"
            : "hover:text-[#ffa358]"
        } rounded px-4 py-2`}
        onClick={onClick}
        {...rest}
      >
        <div className="flex flex-row items-center justify-center space-x-2">
          {children}
        </div>
      </button>
    </Tippy>
  ) : (
    <button
      type="button"
      className={`text-sm md:text-base ${
        outline
          ? "border border-[#ffa358] text-primary hover:bg-[#ffa3581a]"
          : "hover:text-[#ffa358]"
      } rounded px-4 py-2`}
      onClick={onClick}
      {...rest}
    >
      <div className="flex flex-row items-center justify-center space-x-2">
        {children}
      </div>
    </button>
  );
}
