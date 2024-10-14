import {InputIcon, Label} from "keep-react";
import clsx from "clsx";
import {ReactNode} from "react";
import {Controller, useFormContext} from "react-hook-form";
import ReactSelect from 'react-select';

type SelectProps = {
  id: string;
  options: OptionProps[]
  label?: string;
  icon?: ReactNode;
  className?: string;
}

type OptionProps = {
  label: string;
  value: string;
}

const Select = (props: SelectProps) => {
  const methods = useFormContext();
  if (!methods?.control)
    return (
      <fieldset className="space-y-1">
        {props?.label && <Label htmlFor="name">{props.label}</Label>}
        <div className="relative">
          <ReactSelect
            classNamePrefix="select"
            {...props}
            className={clsx(props.className)}
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
            <ReactSelect
              classNamePrefix="select"
              {...props}
              value={props.options.find(option => option.value === field.value)}
              // @ts-ignore
              onChange={(option) => field.onChange(option.value)}
              className={clsx(props.className)}
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
export default Select;
