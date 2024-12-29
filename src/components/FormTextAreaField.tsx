import { FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

type TFormField = {
  name: string;
  placeholder?: string;
  isUpdate?: boolean;
  label?: string;
};

export default function FormTextAreaField({
  name,
  label,
  placeholder,
}: TFormField) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <Label className='dark:text-stone-200' htmlFor={name}>
                {label}
              </Label>
              <Textarea
                className='resize-none outline-none border-stone-300 dark:text-stone-100 dark:border-stone-700 rounded-xl'
                {...field}
                placeholder={placeholder}
              />
            </div>
          </FormControl>

          <FormMessage className='dark:text-red-500' />
        </FormItem>
      )}
    />
  );
}
