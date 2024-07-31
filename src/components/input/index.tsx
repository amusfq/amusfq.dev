import {Input as InputForm, InputIcon, Label} from "keep-react";
import clsx from "clsx";
import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";
import {Controller, useFormContext} from "react-hook-form";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  id: string;
  label?: string;
  icon?: ReactNode;
}

const Input = (props: InputProps) => {
  const methods = useFormContext();
  if (!methods?.control)
    return (
      <fieldset className="space-y-1">
        {props?.label && <Label htmlFor="name">{props.label}</Label>}
        <div className="relative">
          <InputForm
            {...props}
            className={clsx("ps-11", props.className)}
          />
          {props?.icon && <InputIcon>
            {props.icon}
          </InputIcon>}
        </div>
      </fieldset>
    )

  return (
    <Controller
      control={methods?.control}
      name={props.id}
      render={({field, fieldState: {error}}) => (
        <fieldset className="space-y-1">
          {props?.label && <Label htmlFor="name">{props.label}</Label>}
          <div className="relative">
            <InputForm
              {...field}
              {...props}
              className={clsx("ps-11", props.className)}
            />
            {props?.icon && <InputIcon>
              {props.icon}
            </InputIcon>}
          </div>
          {error?.message && <p className="text-red-500 text-xs first-letter:uppercase">{error.message}</p>}
        </fieldset>
      )}
    />
  );
}
export default Input;
