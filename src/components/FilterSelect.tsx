import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type TFilterSelectProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  options: { label: string; value: string }[];
};

export default function FilterSelect({
  value,
  setValue,
  label,
  options,
}: TFilterSelectProps) {
  return (
    <Select value={value} onValueChange={(value) => setValue(value)}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder={`Filter by ${label}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectItem value='all'>All</SelectItem>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
