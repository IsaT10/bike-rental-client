import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', rent: 20 },
  { month: 'February', rent: 5 },
  { month: 'March', rent: 9 },
  { month: 'April', rent: 17 },
  { month: 'May', rent: 30 },
  { month: 'June', rent: 22 },
  { month: 'July', rent: 13 },
  { month: 'August', rent: 26 },
  { month: 'September', rent: 10 },
  { month: 'October', rent: 19 },
  { month: 'November', rent: 14 },
  { month: 'December', rent: 30 },
];

const chartConfig = {
  rent: {
    label: 'Rent',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function MonthlyActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>Monthly Rentals </CardTitle>
      </CardHeader>
      <CardContent className='h-[400px]'>
        <ChartContainer className='h-[400px] w-full' config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey='rent' fill='var(--color-rent)' />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
