import { FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Label } from './ui/label';

type TFormField = {
  name: string;
  placeholder?: string;
  isUpdate?: boolean;
  type: string;
  label: string;
};

export default function FormInputField({
  // isUpdate,
  name,
  label,
  type,
  placeholder,
}: TFormField) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <Label htmlFor={name}>{label}</Label>
              <Input
                type={type}
                className='py-6 outline-none border-stone-300'
                placeholder={placeholder}
                {...field}
              />
            </div>
            {/* <div className='space-y-1.5'>
              {isUpdate && <Label htmlFor={name}>{placeholder}</Label>}
              <Input
                className='py-6 outline-none border-stone-300'
                placeholder={placeholder}
                {...field}
              />
            </div> */}
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}