import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', desktop: 60 },
  { month: 'February', desktop: 25 },
  { month: 'March', desktop: 59 },
  { month: 'April', desktop: 90 },
  { month: 'May', desktop: 44 },
  { month: 'June', desktop: 24 },
  { month: 'July', desktop: 99 },
  { month: 'August', desktop: 33 },
  { month: 'September', desktop: 44 },
  { month: 'October', desktop: 69 },
  { month: 'November', desktop: 14 },
  { month: 'December', desktop: 50 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
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
            <Bar dataKey='desktop' fill='var(--color-desktop)' />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
